// ===== EDIT THIS FILE ONLY =====
// Names in `scores` and `matches` must match names in `players` exactly.
const TOUR = {
  name: "PubDart 26/27",
  players: ["Jögi","Emil","Filip","Jonssons","Åhman","Håkansson","Henkan","Graham","Martin K"],

  // Photos for the slider: put files in /photos and list them here, e.g. "photos/gw1.jpg"
  photos: [],

{ date: "16 Okt",
  groups: [
    { name: "Group A", matches: [
        { a: "Henkan", b: "Martin K",   sa: 1, sb: 2 },
        { a: "Jonssons", b: "Håkansson", sa: 2, sb: 1 },
        { a: "Henkan",  b: "Jonssons", sa: 1, sb: 2 },
        { a: "Martin K", b: "Håkanssons",   sa: 0, sb: 2 },
        { a: "Henkan", b: "Håkansson", sa: 2, sb: 1 },
        { a: "Martin K",  b: "Jonssons", sa: 1, sb: 2 },
    ]},
    { name: "Group B", matches: [
        { a: "Emil", b: "Filip",   sa: 2, sb: 0 },
        { a: "jögi", b: "Åhman", sa: 2, sb: 1 },
        { a: "Emil",  b: "Jögi", sa: 2, sb: 0 },
        { a: "Filip", b: "Åhman",   sa: 0, sb: 2 },
        { a: "Emil", b: "Åhman", sa: 2, sb: 1 },
        { a: "Filip",  b: "Jögi", sa: 2, sb: 1 },
    ]},
  ],
  final: { sa: 0, sb: 1 },   // a and b are filled in automatically
},

  playoffs: { status: "TBD", note: "Top players from the standings go through. Details to be announced." },
};
