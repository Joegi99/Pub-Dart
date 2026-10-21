// ===== EDIT THIS FILE ONLY =====
// Names in `scores` and `matches` must match names in `players` exactly.
const TOUR = {
  name: "PubDart 26/27",
  players: ["Jögi","Emil","Filip","Jonssons","Åhman","Håkanssons","Henkan","Graham","Martin K"],

  // Photos for the slider: put files in /photos and list them here, e.g. "photos/gw1.jpg"
  photos: [photos/ebe69c6c-5c86-437a-b355-f42e09e91d4e.jpeg
photos/4158ecf9-82be-4125-9fd3-ec4aebaca60a.jpeg
photos/0e297c6d-2017-4bac-b487-9b4e2327b90c.jpeg
photos/c27ec576-ac09-4de8-8f38-983678aecbf6.jpeg
photos/ca07dbd7-390a-4683-a754-69baf2aab182.jpeg
photos/7d966d88-0014-494f-b8c6-e9650e9dc88e.jpeg
photos/2c3f9267-f921-4b33-81e6-982889efee9c.jpeg
photos/7bb27eaa-3d1d-4453-bfb5-7d5b8682bb76.jpeg],

  gameweeks: [
    { date: "16 Okt",
      groups: [
        { name: "Group A", matches: [
            { a: "Henkan",   b: "Martin K",  sa: 1, sb: 2 },
            { a: "Jonssons", b: "Håkanssons", sa: 2, sb: 1 },
            { a: "Henkan",   b: "Jonssons",  sa: 1, sb: 2 },
            { a: "Martin K", b: "Håkanssons", sa: 0, sb: 2 },
            { a: "Henkan",   b: "Håkanssons", sa: 2, sb: 1 },
            { a: "Martin K", b: "Jonssons",  sa: 1, sb: 2 },
        ]},
        { name: "Group B", matches: [
            { a: "Emil",  b: "Filip", sa: 2, sb: 0 },
            { a: "Jögi",  b: "Åhman", sa: 2, sb: 1 },
            { a: "Emil",  b: "Jögi",  sa: 2, sb: 0 },
            { a: "Filip", b: "Åhman", sa: 0, sb: 2 },
            { a: "Emil",  b: "Åhman", sa: 2, sb: 1 },
            { a: "Filip", b: "Jögi",  sa: 2, sb: 1 },
        ]},
      ],
      final: { sa: 0, sb: 1 },
    },
    { date: "TBD", groups: [], scores: {} },
    { date: "TBD", groups: [], scores: {} },
    { date: "TBD", groups: [], scores: {} },
    { date: "TBD", groups: [], scores: {} },
    { date: "TBD", groups: [], scores: {} },
  ],

  playoffs: { status: "TBD", note: "Top players from the standings go through. Details to be announced." },
};
