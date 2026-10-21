// ===== EDIT THIS FILE ONLY =====
// Names in `scores` and `matches` must match names in `players` exactly.
const TOUR = {
  name: "PubDart 26/27",
  players: ["Jögi","Emil","Filip","Jonssons","Åhman","Håkanssons","Henkan","Graham","Martin K"],

  // Photos for the slider: put files in /photos and list them here, e.g. "photos/gw1.jpg"
  photos: [
  "photos/gw1f.jpg",
  "photos/gw1h.jpg",
  "photos/gw1g.jpg", 
  "photos/gw1c.jpg",
  "photos/gw1d.jpg",
  "photos/gw1e.jpg",
  ],

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
     { date: "GW2",
      groups: [
        { name: "Group A", matches: [
            { a: "Filip",   b: "Graham",  sa: -, sb: - },
            { a: "Åhman", b: "Jögi", sa: -, sb: - },
            { a: "Filip",   b: "Åhman",  sa: -, sb: - },
            { a: "Graham", b: "Jögi", sa: -, sb: - },
            { a: "Filip",   b: "Jögi", sa: -, sb: - },
            { a: "Graham", b: "Åhman",  sa: -, sb: - },
        ]},
        { name: "Group B", matches: [
            { a: "Emil",  b: "Henkan", sa: -, sb: - },
            { a: "Jonssons",  b: "Håkanssons", sa: -, sb: 1 },
            { a: "Martin K",  b: "Emil",  sa: 2, sb: 0 },
            { a: "Henkan", b: "Jonssons", sa: 0, sb: 2 },
            { a: "Håkanssons",  b: "Martin K", sa: 2, sb: 1 },
            { a: "Emil", b: "Jonssons",  sa: 2, sb: 1 },
            { a: "Henkan", b: "Håkanssons",  sa: 2, sb: 1 },
            
            { a: "Jonssons", b: "Martin K",  sa: 2, sb: 1 },
            { a: "Emil", b: "Håkanssons",  sa: 2, sb: 1 },
            { a: "Henkan", b: "Martin K",  sa: 2, sb: 1 },
        ]},
      ],
      final: { sa: 0, sb: 1 },
    },
    { date: "TBD", groups: [], scores: {} },
    { date: "TBD", groups: [], scores: {} },
    { date: "TBD", groups: [], scores: {} },
    { date: "TBD", groups: [], scores: {} },
  ],

  playoffs: { status: "TBD", note: "Top players from the standings go through. Details to be announced." },
};
