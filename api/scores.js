// Stores match scores in Upstash Redis (Vercel Marketplace). Everyone can read; writing needs the password only if ADMIN_PASSWORD is set.
const URL_ = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
const HASH = 'pubdart:scores';

async function redis(cmd) {
  const r = await fetch(URL_, { method: 'POST', headers: { Authorization: 'Bearer ' + TOKEN }, body: JSON.stringify(cmd) });
  const j = await r.json();
  if (j.error) throw new Error(j.error);
  return j.result;
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (!URL_ || !TOKEN) return res.status(500).json({ error: 'Database not connected' });
  try {
    if (req.method === 'GET') {
      const arr = (await redis(['HGETALL', HASH])) || [];
      const scores = {};
      for (let i = 0; i < arr.length; i += 2) scores[arr[i]] = arr[i + 1].split(',').map(Number);
      return res.status(200).json({ scores });
    }
    if (req.method === 'POST') {
      const b = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
      // Open editing: a password is only required if ADMIN_PASSWORD is set in Vercel.
      if (process.env.ADMIN_PASSWORD && b.password !== process.env.ADMIN_PASSWORD)
        return res.status(401).json({ error: 'Wrong password' });
      if (!b.key) return res.status(200).json({ ok: true }); // password check only
      if (typeof b.key !== 'string' || b.key.length > 150) return res.status(400).json({ error: 'Bad key' });
      if (b.sa == null || b.sb == null) { await redis(['HDEL', HASH, b.key]); return res.status(200).json({ ok: true }); }
      const sa = Number(b.sa), sb = Number(b.sb);
      if (![sa, sb].every(n => Number.isInteger(n) && n >= 0 && n <= 99)) return res.status(400).json({ error: 'Scores must be whole numbers 0-99' });
      await redis(['HSET', HASH, b.key, sa + ',' + sb]);
      return res.status(200).json({ ok: true });
    }
    res.status(405).end();
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
};
