export interface OfertaPakiet {
  name: string;
  price: string;
  note?: string;
}

export interface OfertaMenuSekcja {
  category: string;
  items: string[];
}

export interface OfertaDodatek {
  name: string;
  price: string;
}

export interface WydarzenieOferta {
  slug: string;
  title: string;
  tagline: string;
  heroDescription: string;
  menuSections: OfertaMenuSekcja[];
  packages: OfertaPakiet[];
  addons: OfertaDodatek[];
  infoOrganizacyjne: string[];
}

export const wydarzeniaOferty: WydarzenieOferta[] = [
  {
    slug: "grill",
    title: "Grill w plenerze",
    tagline:
      "Bo najlepsze spotkania zaczynają się przy wspólnym stole, a najpiękniejsze wspomnienia powstają wśród natury.",
    heroDescription:
      "Grill w plenerze przy klimatycznej salce Stajenka. Idealne na grill firmowy, integrację pracowniczą, jubileusz, urodziny, rocznicę i inne wydarzenia okolicznościowe.",
    menuSections: [
      {
        category: "Zupa (do wyboru jedna, serwowana w kociołkach)",
        items: ["Żurek staropolski", "Grochówka wojskowa", "Zupa gulaszowa"],
      },
      {
        category: "Dania grillowe (2 porcje na osobę, do wyboru kilka rodzajów)",
        items: [
          "Pstrąg grillowany",
          "Karkówka marynowana w musztardzie Dijon",
          "Wątróbka drobiowa zawijana w boczku",
          "Kaszanka z grilla",
          "Filet z kurczaka grillowany",
          "Szaszłyki drobiowe lub wieprzowe",
          "Kiełbaski z grilla",
          "Schab z kością",
          "Camembert grillowany",
        ],
      },
      {
        category: "Dodatki",
        items: [
          "Sałatka grecka",
          "Sałatka z pomidorów",
          "Pieczywo z masłem",
          "Smalec i ogórki małosolne",
          "Chrupiący wiejski chleb wypiekany na miejscu",
          "Sosy i dodatki",
          "Kącik kawowy bez limitu przez cały czas wydarzenia",
        ],
      },
    ],
    packages: [
      { name: "Standard", price: "175 zł/os", note: "2 porcje grillowe" },
      { name: "Plus", price: "185 zł/os", note: "2,5 porcji grillowej" },
      { name: "Premium", price: "195 zł/os", note: "3 porcje — najczęściej wybierany przez firmy i większe grupy rodzinne" },
    ],
    addons: [
      { name: "Domowe ciasta (2 kawałki/os)", price: "25 zł/os" },
      { name: "Deser lodowy", price: "30 zł/os" },
      { name: "Owoce sezonowe", price: "10 zł/os" },
      { name: "Soki i woda bez ograniczeń", price: "22 zł/os" },
      { name: "Własny alkohol", price: "25 zł/os (15 zł/os przy zakupie piwa z Dworku)" },
      { name: "Piwo duże / małe (oferta Dworku)", price: "14 zł / 12 zł" },
      { name: "Keg Żywiec 20l", price: "580 zł" },
      { name: "Wino regionalne", price: "120 zł" },
      { name: "Wódka 0,5l / 0,7l", price: "85 zł / 125 zł" },
      { name: "Jack Daniel's 0,5l / 0,7l", price: "230 zł / 280 zł" },
    ],
    infoOrganizacyjne: [
      "Obsługa po 21:00 — 300 zł za każdą rozpoczętą godzinę.",
      "Grupy poniżej 25 osób — dopłata 15% do wartości menu.",
    ],
  },
  {
    slug: "ognisko",
    title: "Ognisko w plenerze",
    tagline: "Bo najlepsze rozmowy często zaczynają się właśnie przy ognisku.",
    heroDescription:
      "Duże, wymurowane palenisko, rozległy teren zielony. Idealne na integrację, rozmowy, budowanie relacji.",
    menuSections: [
      {
        category: "W cenie pakietu",
        items: ["Ok. 2–3 kiełbaski na osobę do samodzielnego przygotowania przy ognisku"],
      },
      {
        category: "Tradycyjne dodatki",
        items: [
          "Sałatka grecka",
          "Sałatka ze świeżych pomidorów",
          "Pieczywo z masłem",
          "Smalec i ogórki małosolne",
          "Ziemniaki pieczone w ognisku",
          "Twaróg do ziemniaków",
          "Masło czosnkowe",
          "Chrupiący wiejski chleb wypiekany na miejscu",
          "Sosy i dodatki",
        ],
      },
      {
        category: "Danie z kociołka (dla pełnego pakietu, do wyboru)",
        items: ["Bigos staropolski", "Zupa gulaszowa", "Żurek"],
      },
    ],
    packages: [
      {
        name: "Ognisko z daniem z kociołka",
        price: "140 zł/os",
        note: "+ kawa, herbata, soki, woda niegazowana 20 zł/os",
      },
      {
        name: "Ognisko bez kociołka",
        price: "120 zł/os",
        note: "+ kawa, herbata, soki, woda niegazowana 20 zł/os",
      },
    ],
    addons: [
      { name: "Organizacja ogniska (drewno, rozpalenie, kompleksowa organizacja)", price: "350 zł" },
    ],
    infoOrganizacyjne: ["Grupy poniżej 25 osób — dopłata 15% wartości zamówienia."],
  },
];
