export type NavItem = {
  href: string;
  label: string;
};

export type ContactPerson = {
  name: string;
  role: string;
  phone: string;
  phoneHref: string;
  email: string;
};

export type TableData = {
  columns: string[];
  rows: string[][];
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type ContentSection = {
  title: string;
  body?: string;
  bullets?: string[];
  table?: TableData;
  gallery?: GalleryImage[];
};

export type Service = {
  slug: string;
  href: string;
  title: string;
  menuLabel: string;
  category: string;
  summary: string;
  intro: string;
  heroImage: string;
  previewImage: string;
  highlights: string[];
  sections: ContentSection[];
};

export type Certificate = {
  slug: string;
  title: string;
  summary: string;
  previewImage: string;
  pdfUrl: string;
};

export type ReferenceProject = {
  slug: string;
  title: string;
  location: string;
  yearLabel: string;
  summary: string;
  lead?: string;
  scope?: string[];
  tags: string[];
  coverImage: string;
  gallery: GalleryImage[];
  archiveOnly?: boolean;
  featured?: boolean;
};

export type ApartmentOffer = {
  label: string;
  href: string;
};

export type MediaCollection = {
  title: string;
  description?: string;
  items: GalleryImage[];
};

export type ApartmentProject = {
  title: string;
  intro: string;
  summary: string;
  saleLinks: ApartmentOffer[];
  videos: { title: string; src: string }[];
  galleries: MediaCollection[];
};

const legacyUpload = (relativePath: string) => `/legacy/uploads/${relativePath}`;

const referenceImage = (filename: string) => legacyUpload(`2020/07/${filename}`);

const reconstructionImage = (filename: string) => legacyUpload(`2020/07/${filename}`);

const apartmentImage = (filename: string, month = "08") => legacyUpload(`2023/${month}/${filename}`);

const apartmentVideo = (filename: string) => legacyUpload(`2023/07/${filename}`);

const certificatePdf = (filename: string, yearMonth: string) => legacyUpload(`${yearMonth}/${filename}`);

const certificateImage = (filename: string, yearMonth: string) => legacyUpload(`${yearMonth}/${filename}`);

export const navItems: NavItem[] = [
  { href: "/", label: "Domov" },
  { href: "/nase-sluzby", label: "Služby" },
  { href: "/referencie", label: "Referencie" },
  { href: "/certifikaty", label: "Certifikáty" },
  { href: "/byty-strazske", label: "Byty Strážske" },
];

export const company = {
  name: "BSL TRADING s.r.o.",
  tagline: "Stavebná spoločnosť",
  heroTitle: "Vaša stavba, náš cieľ.",
  heroText:
    "Komplexné stavebné riešenia od rekonštrukcií po novostavby na kľúč, doplnené o referencie, certifikáty a projektové portfólio firmy BSL TRADING.",
  address: ["Suchý Jarok 1299/1", "066 01 Humenné"],
  businessInfo: {
    ico: "51787202",
    dic: "2120791849",
  },
  phone: "+421 905 723 897",
  phoneHref: "tel:+421905723897",
  email: "bilsak@bsltrading.sk",
  mapHref: "https://www.google.com/maps/search/?api=1&query=Such%C3%BD%20Jarok%201299%2F1%2C%20066%2001%20Humenn%C3%A9",
  facebook: "https://www.facebook.com/bsvstavhumenne/",
  foundedLabel: "2009",
  teamLabel: "33+",
  serviceCountLabel: "6",
  story: [
    "Osvedčeným receptom na úspech sú schopnosti, trpezlivosť a ťažká práca. V prvých rokoch súčasného storočia začínala firma pri drobných rekonštrukciách bytov a domov v regióne Humenné.",
    "Rastúci dopyt postupne posunul firmu od menších zákaziek k novostavbám rodinných domov, priemyselným objektom a komplexným obnovám bytových domov. V roku 2009 vznikla spoločnosť BSV STAV s.r.o., z ktorej sa neskôr stala dnešná BSL TRADING.",
    "Portfólio sa rozšírilo o murárske práce, sádrokartónové konštrukcie, potery, keramické dlažby a obklady, zatepľovanie fasád, spevnené plochy, zemné práce aj rezanie asfaltu a betónu.",
    "Dnes spoločnosť stojí na kombinácii dlhoročných skúseností, vlastných tímov a realizácií, ktoré zahŕňajú bytové domy, občianske stavby, komerčné priestory aj developerské projekty.",
  ],
};

export const contacts: ContactPerson[] = [
  {
    name: "Vincent Bilšák",
    role: "Konateľ",
    phone: "0905 723 897",
    phoneHref: "tel:+421905723897",
    email: "bilsak@bsltrading.sk",
  },
  {
    name: "Marek Dudrák",
    role: "Obchodný zástupca",
    phone: "0917 458 618",
    phoneHref: "tel:+421917458618",
    email: "bsldudrak@gmail.com",
  },
  {
    name: "Mgr. Peter Savkanič",
    role: "Projektový manažér",
    phone: "0908 323 627",
    phoneHref: "tel:+421908323627",
    email: "bslsavkanic@gmail.com",
  },
];

export const services: Service[] = [
  {
    slug: "rekonstrukcne-prace",
    href: "/nase-sluzby/rekonstrukcne-prace",
    title: "Rekonštrukčné práce",
    menuLabel: "Rekonštrukčné práce",
    category: "Interiér a obnova budov",
    summary:
      "Kompletné rekonštrukcie rodinných domov, bytových domov, striech, fasád, interiérov, balkónov a vchodov.",
    intro:
      "Uvažujete o rekonštrukcii rodinného domu alebo bytového domu? BSL TRADING zastrešuje poradenstvo, projektovú dokumentáciu, odhad nákladov aj samotnú realizáciu zákazky.",
    heroImage: "/images/service1.jpg",
    previewImage: "/services/rekonstrukcne.jpg",
    highlights: [
      "kompletné rekonštrukcie domov a bytových domov",
      "opravy striech vrátane nadstavieb a strešných okien",
      "obnova fasád, interiérov, balkónov, terás a vstupov",
    ],
    sections: [
      {
        title: "Kompletná rekonštrukcia",
        body:
          "Ak zvažujete čiastočné alebo komplexné rekonštrukčné práce, tím BSL TRADING pripraví technické riešenie, rozpočet a následne zabezpečí kompletnú realizáciu.",
      },
      {
        title: "Rekonštrukcia strechy",
        body:
          "Strecha je základ. V lete bráni prehrievaniu domu, v zime izoluje od mrazu a po celý rok chráni objekt pred vlhkosťou. Firma realizuje opravy strešných konštrukcií, zateplenie, výmenu krytiny, klampiarske práce aj výmenu strešných okien.",
      },
      {
        title: "Rekonštrukcie fasád a interiérov",
        body:
          "Od rodinného domu až po panelový dom. Súčasťou realizácií sú obvodové plášte budov, dlažby, obnovy stien, maľovanie aj ďalšie interiérové stavebné práce.",
      },
      {
        title: "Fotogaléria rekonštrukčných prác",
        body:
          "Výber fotografií z rekonštrukčných realizácií je rozdelený podľa typu prác.",
        gallery: [
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_1.jpg"),
            alt: "Rekonštrukcia balkónov a terás 1",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_2.jpg"),
            alt: "Rekonštrukcia balkónov a terás 2",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_3.jpg"),
            alt: "Rekonštrukcia balkónov a terás 3",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_4.jpg"),
            alt: "Rekonštrukcia balkónov a terás 4",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_5.jpg"),
            alt: "Rekonštrukcia balkónov a terás 5",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_6.jpg"),
            alt: "Rekonštrukcia balkónov a terás 6",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_7.jpg"),
            alt: "Rekonštrukcia balkónov a terás 7",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_8.jpg"),
            alt: "Rekonštrukcia balkónov a terás 8",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_9.jpg"),
            alt: "Rekonštrukcia balkónov a terás 9",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_10.jpg"),
            alt: "Rekonštrukcia balkónov a terás 10",
          },
          {
            src: reconstructionImage("20140204-rek_domov_bytov_1.jpg"),
            alt: "Rekonštrukcia domov a bytov 1",
          },
          {
            src: reconstructionImage("20140204-rek_domov_bytov_2.jpg"),
            alt: "Rekonštrukcia domov a bytov 2",
          },
          {
            src: reconstructionImage("20140204-rek_domov_bytov_3.jpg"),
            alt: "Rekonštrukcia domov a bytov 3",
          },
          {
            src: reconstructionImage("20140204-rek_domov_bytov_4.jpg"),
            alt: "Rekonštrukcia domov a bytov 4",
          },
          {
            src: reconstructionImage("20140204-rek_domov_bytov_5.jpg"),
            alt: "Rekonštrukcia domov a bytov 5",
          },
          {
            src: reconstructionImage("20140204-rek_domov_bytov_6.jpg"),
            alt: "Rekonštrukcia domov a bytov 6",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_1.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 1",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_2.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 2",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_3.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 3",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_4.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 4",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_5.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 5",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_6.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 6",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_7.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 7",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_8.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 8",
          },
        ],
      },
    ],
  },
  {
    slug: "rezanie-asfaltu-a-betonu",
    href: "/nase-sluzby/rezanie-asfaltu-a-betonu",
    title: "Rezanie asfaltu a betónu",
    menuLabel: "Rezanie asfaltu a betónu",
    category: "Príprava pred výkopmi",
    summary:
      "Horizontálne rezy asfaltu a betónu diamantovými kotúčmi s orientačným cenníkom za meter rezu.",
    intro:
      "Na objednávku firma realizuje rezanie betónu alebo asfaltu. Horizontálne rezy plôch vykonáva pomocou diamantových kotúčov s priemerom do 450 mm.",
    heroImage: "/images/service2.jpg",
    previewImage: "/services/rezanie asfaltu.jpg",
    highlights: [
      "čisté oddelenie výkopových priestorov",
      "jednoduchšie odstránenie asfaltových a betónových plôch",
      "možnosť realizácie nezávisle od začiatku výkopových prác",
    ],
    sections: [
      {
        title: "Výhody rezania asfaltu a betónu",
        bullets: [
          "čisté oddelenie výkopových priestorov",
          "jednoduchšie odstránenie betónových alebo asfaltových plôch",
          "zlepšenie vzhľadu vozovky alebo chodníka",
        ],
      },
      {
        title: "Prevádzkové nasadenie",
        body:
          "Rezanie sa dá vykonať kedykoľvek, nezávisle od termínu začiatku vlastných výkopových alebo opravárenských prác.",
      },
      {
        title: "Orientačný cenník prác",
        table: {
          columns: ["Hĺbka rezu", "Asfalt", "Betón"],
          rows: [
            ["2 cm", "1 €", "2 €"],
            ["2 až 5 cm", "1,6 €", "3 €"],
            ["5 až 8 cm", "2 €", "3,8 €"],
          ],
        },
      },
    ],
  },
  {
    slug: "vykopove-prace",
    href: "/nase-sluzby/vykopove-prace",
    title: "Výkopové práce",
    menuLabel: "Výkopové práce",
    category: "Zemné práce",
    summary:
      "Výkop jám, základov, zárezov, hrubé terénne úpravy, skrývky a hutnenie plôch pod odborným dohľadom.",
    intro:
      "Dostatočná kapacita mechanizácie umožňuje firme realizovať veľkoobjemové zákazky v krátkom čase, vrátane práce v stiesnených podmienkach.",
    heroImage: "/images/service3.jpg",
    previewImage: "/services/vykopove.jpg",
    highlights: [
      "výkop jám, základov domu a zárezov",
      "hrubé terénne úpravy a skrývky",
      "hutnenie plôch a realizácia pod odborným dohľadom",
    ],
    sections: [
      {
        title: "Rozsah výkopových prác",
        bullets: [
          "výkop jám",
          "výkop zárezov",
          "hrubé terénne úpravy",
          "skrývky",
          "výkop základov domu",
          "práca v stiesnených priestoroch",
          "hutnenie plôch",
        ],
      },
      {
        title: "Kapacita a dohľad",
        body:
          "Dostatočná kapacita prostriedkov umožňuje realizovať veľkoobjemové zákazky v extrémne krátkom čase. Samozrejmosťou je realizácia pod odborným dohľadom.",
      },
      {
        title: "Dostupná technika",
        body:
          "Firma nasadzuje techniku a kapacity podľa rozsahu zákazky a podmienok stavby.",
      },
    ],
  },
  {
    slug: "zateplovanie-budov",
    href: "/nase-sluzby/zateplovanie-budov",
    title: "Zatepľovanie budov",
    menuLabel: "Zatepľovanie budov",
    category: "Fasády a obvodové plášte",
    summary:
      "Zatepľovanie budov, domov a bytoviek s využitím systémov Weber, Baumit, Stomix, Cemix a ďalších.",
    intro:
      "BSL TRADING realizuje zateplenie budov, domov a bytoviek s použitím kvalitných zatepľovacích systémov podľa výberu a možností zákazníka.",
    heroImage: "/images/service4.jpg",
    previewImage: "/services/zateplovanie.jpg",
    highlights: [
      "Weber, Baumit, Stomix, Cemix a ďalšie systémy",
      "nižšia energetická spotreba budovy",
      "ochrana proti plesniam a predĺženie životnosti fasády",
    ],
    sections: [
      {
        title: "Najpoužívanejšie systémy",
        bullets: ["Weber", "Baumit", "Stomix", "Cemix", "ďalšie certifikované riešenia"],
      },
      {
        title: "Prečo zatepľovať",
        body:
          "Kvalitné zateplenie znižuje energetickú spotrebu budovy o desiatky percent a vytvára tepelnoizolačnú vrstvu s minimálnym množstvom tepelných mostov.",
      },
      {
        title: "Dlhodobá ochrana objektu",
        body:
          "Zateplenie budovy chráni pred vznikom plesní a zároveň obvodový plášť budovy pred poveternostnými vplyvmi, čím značne predlžuje jeho životnosť.",
      },
    ],
  },
  {
    slug: "stavebne-prace",
    href: "/nase-sluzby/stavebne-prace",
    title: "Stavebné práce",
    menuLabel: "Stavebné práce",
    category: "Komplexná výstavba",
    summary:
      "Komplexné dodávky stavebných prác a rekonštrukcií vrátane domov na kľúč, fasád, nadstavieb a dokončovacích prác.",
    intro:
      "Vďaka dlhoročným skúsenostiam v obore firma odvádza prácu v najvyššej kvalite a pod odborným dohľadom.",
    heroImage: "/images/service5.jpg",
    previewImage: "/services/stavebne.jpg",
    highlights: [
      "rodinné domy na kľúč a nadstavby domov",
      "stavebné práce v bytových aj nebytových priestoroch",
      "rozpočet, harmonogram, subdodávky a koordinácia",
    ],
    sections: [
      {
        title: "Komplexné dodávky prác",
        body:
          "Stavebné práce zahŕňajú novostavby aj rekonštrukcie. Firma zabezpečuje fasády, bytové a nebytové priestory, dokončovacie práce a murárske profesie.",
      },
      {
        title: "Koordinácia projektu",
        body:
          "Pre klienta sa pripraví reálny rozpočet, časový harmonogram, subdodávky a koordinácia tak, aby celý proces prebehol čo najprehľadnejšie.",
      },
      {
        title: "Typické realizácie",
        bullets: [
          "stavba rodinných domov na kľúč",
          "nadstavby domov",
          "stavebné práce v bytových priestoroch",
          "stavebné práce v nebytových priestoroch",
          "dokončovacie práce a murárske profesie",
        ],
      },
    ],
  },
  {
    slug: "buracie-prace",
    href: "/nase-sluzby/buracie-prace",
    title: "Buracie práce",
    menuLabel: "Buracie práce",
    category: "Demolácie a príprava objektov",
    summary:
      "Interiérové búracie práce, demolácie objektov, odvoz stavebnej sute a ekologická likvidácia materiálu.",
    intro:
      "Firma realizuje interiérové búracie práce aj väčšie demolície. Strojovú činnosť kombinuje s ručnými metódami ako rezanie, trhanie a zbíjanie.",
    heroImage: "/images/service6.jpg",
    previewImage: "/services/buracie-right-1.jpg",
    highlights: [
      "búracie práce pri rekonštrukciách a prestavbách",
      "demolácie priemyselných hál a železobetónových prvkov",
      "odvoz a likvidácia stavebnej sute s ohľadom na životné prostredie",
    ],
    sections: [
      {
        title: "Interiérové búracie práce",
        body:
          "Pokročilá technika a technológie zaručujú bezpečné vykonanie búracích prác s dôrazom na obmedzenie prašnosti a ochranu okolia.",
      },
      {
        title: "Demoličné práce",
        bullets: [
          "priemyselné areály",
          "priemyselné haly",
          "betónové a železobetónové prvky",
          "murované stavby v ľubovoľnom rozsahu",
          "práce bez zbytočného šírenia prachu a sute",
        ],
      },
      {
        title: "Likvidácia a logistika",
        body:
          "Súčasťou búracích prác je odvoz a ekologická likvidácia stavebnej sute vrátane prípravy priestorov na ďalšiu etapu stavby alebo rekonštrukcie.",
      },
    ],
  },
];

export const referenceProjects: ReferenceProject[] = [
  {
    slug: "dom-potravin-humenne",
    title: "Dom potravín, 26. novembra 1510",
    location: "Humenné",
    yearLabel: "2009 – 2012",
    summary:
      "Komplexná rekonštrukcia objektu v Humennom so zateplením, výmenou okien a obnovou komerčných priestorov.",
    lead: "Komplexná rekonštrukcia",
    scope: [
      "fasáda a zateplenie",
      "výmena PVC okien",
      "rekonštrukcia strechy",
      "spevnené plochy a parkovisko",
      "rekonštrukcia interiéru: kancelárie, fitness centrum, reštaurácia a komerčné priestory",
    ],
    tags: ["rekonštrukcia", "komerčný objekt", "Humenné"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-006-1-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-007.jpg"),
        alt: "Dom potravín, Humenné",
      },
      {
        src: referenceImage("bez-facingu-interaktiv-page-006-1-scaled.jpg"),
        alt: "Detail projektu Dom potravín, Humenné",
      },
    ],
    featured: true,
  },
  {
    slug: "komenskeho-humenne",
    title: "Komenského",
    location: "Humenné",
    yearLabel: "2012",
    summary:
      "Komplexná rekonštrukcia internátu na mestské byty doplnená obnovou fasády, balkónov, výmenou okien a úpravou interiéru.",
    lead: "Komplexná rekonštrukcia prestavba internátu na mestské byty",
    scope: [
      "fasáda a zateplenie",
      "balkónové podlahy a nové zábradlie",
      "výmena PVC okien",
      "schodiská",
      "výťahové stúpačky",
      "rekonštrukcia interiéru: omietky a sadrokartóny",
    ],
    tags: ["mestské byty", "rekonštrukcia", "Humenné"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-004.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-005.jpg"),
        alt: "Komenského, Humenné",
      },
      {
        src: referenceImage("bez-facingu-interaktiv-page-004.jpg"),
        alt: "Detail projektu Komenského, Humenné",
      },
    ],
    featured: true,
  },
  {
    slug: "snp-humenne",
    title: "Ulica Slovenského národného povstania",
    location: "Humenné",
    yearLabel: "2016",
    summary:
      "Obnova bytového domu so zateplením, rekonštrukciou spoločných priestorov a výmenou pivničných okien.",
    scope: [
      "fasáda a zateplenie",
      "balkónové podlahy a nové zábradlie",
      "rekonštrukcia spoločných priestorov",
      "rekonštrukcia vchodov do spoločných priestorov",
      "výmena pivničných okien",
    ],
    tags: ["bytový dom", "zateplenie", "Humenné"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-014-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-015.jpg"),
        alt: "Ulica Slovenského národného povstania, Humenné",
      },
      {
        src: referenceImage("bez-facingu-interaktiv-page-014-scaled.jpg"),
        alt: "Detail projektu SNP, Humenné",
      },
    ],
    featured: true,
  },
  {
    slug: "zeleznicna-kamenica-nad-cirochou",
    title: "Železničná 44, 46",
    location: "Kamenica nad Cirochou",
    yearLabel: "2017",
    summary:
      "Rekonštrukcia bytového domu v Kamenici nad Cirochou vrátane fasády, strechy, spoločných priestorov a spevnených plôch.",
    scope: [
      "fasáda a zateplenie",
      "rekonštrukcia vchodov do spoločných priestorov",
      "výmena PVC okien",
      "komplexná rekonštrukcia strechy",
      "výstavba priľahlých spevnených plôch",
    ],
    tags: ["bytový dom", "rekonštrukcia", "Kamenica nad Cirochou"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-016-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-017-scaled.jpg"),
        alt: "Železničná 44, 46, Kamenica nad Cirochou",
      },
      {
        src: referenceImage("bez-facingu-interaktiv-page-016-scaled.jpg"),
        alt: "Detail projektu Železničná, Kamenica nad Cirochou",
      },
    ],
    featured: true,
  },
  {
    slug: "sokolovska-humenne",
    title: "Sokolovská 15, 17",
    location: "Humenné",
    yearLabel: "2017",
    summary:
      "Obnova bytového domu na ulici Sokolovská v Humennom vrátane fasády a spoločných priestorov.",
    scope: [
      "fasáda a zateplenie",
      "balkónové podlahy a nové zábradlie",
      "rekonštrukcia spoločných priestorov",
      "rekonštrukcia vchodov do spoločných priestorov",
      "výmena pivničných okien",
    ],
    tags: ["bytový dom", "zateplenie", "Humenné"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-018-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-019-scaled.jpg"),
        alt: "Sokolovská 15, 17, Humenné",
      },
      {
        src: referenceImage("bez-facingu-interaktiv-page-018-scaled.jpg"),
        alt: "Detail projektu Sokolovská, Humenné",
      },
    ],
  },
  {
    slug: "sevcenkova-humenne",
    title: "Ševčenková 1662/6, 8, 10",
    location: "Humenné",
    yearLabel: "2017 – 2018",
    summary:
      "Obnova bytového domu na Ševčenkovej ulici v Humennom vrátane fasády, okien a balkónových konštrukcií.",
    scope: [
      "fasáda a zateplenie",
      "výmena PVC okien",
      "balkónové podlahy a nové zábradlie",
    ],
    tags: ["bytový dom", "zateplenie", "Humenné"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-022-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-023-scaled.jpg"),
        alt: "Ševčenková, Humenné",
      },
      {
        src: referenceImage("bez-facingu-interaktiv-page-022-scaled.jpg"),
        alt: "Detail projektu Ševčenková, Humenné",
      },
    ],
  },
  {
    slug: "mierova-humenne",
    title: "Mierová 71, 73, 75, 77",
    location: "Humenné",
    yearLabel: "2018",
    summary:
      "Referencia bytového domu na Mierovej ulici s kompletnou obnovou fasády a spoločných priestorov.",
    scope: [
      "fasáda a zateplenie",
      "výmena PVC okien",
      "balkónové podlahy",
      "rekonštrukcia vchodov do spoločných priestorov",
      "rekonštrukcia spoločných priestorov",
    ],
    tags: ["bytový dom", "zateplenie", "Humenné"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-020-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-021-1-scaled.jpg"),
        alt: "Mierová 71, 73, 75, 77, Humenné",
      },
      {
        src: referenceImage("bez-facingu-interaktiv-page-020-scaled.jpg"),
        alt: "Detail projektu Mierová, Humenné",
      },
    ],
    featured: true,
  },
  {
    slug: "parkoviska-lipova-tyrsova-snina-vihorlat",
    title: "Parkoviská: Lipová, Tyršová, Snina Vihorlat",
    location: "Región Humenné a Snina",
    yearLabel: "Spevnené plochy",
    summary:
      "Realizácia spevnených plôch a parkovísk s dôrazom na zámkovú dlažbu, zatrávňovače, asfalt a betón.",
    scope: ["zámková dlažba", "zatrávňovače", "asfalt", "betón"],
    tags: ["parkoviská", "spevnené plochy", "zemné práce"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-024-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-024-scaled.jpg"),
        alt: "Parkoviská Lipová, Tyršová, Snina Vihorlat",
      },
    ],
  },
  {
    slug: "trebicska-humenne",
    title: "Bytový dom, Třebíčska",
    location: "Humenné",
    yearLabel: "2012",
    summary:
      "Bytový dom v Humennom zaradený do portfólia bytových a rekonštrukčných realizácií spoločnosti.",
    tags: ["bytový dom", "rekonštrukcia", "Humenné"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
        alt: "Prehľad realizácií BSL TRADING",
      },
    ],
    archiveOnly: true,
  },
  {
    slug: "kulturny-dom-chlmec-pri-humennom",
    title: "Kultúrny dom",
    location: "Chlmec pri Humennom",
    yearLabel: "2012",
    summary:
      "Úpravy a stavebné práce na objekte kultúrneho domu v Chlmci pri Humennom.",
    tags: ["občianska stavba", "rekonštrukcia", "Chlmec pri Humennom"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
        alt: "Prehľad realizácií BSL TRADING",
      },
    ],
    archiveOnly: true,
  },
  {
    slug: "vekastool-vyroba-ok-humenne",
    title: "Vekastool – výroba OK",
    location: "Humenné",
    yearLabel: "2015",
    summary:
      "Stavebné práce pre výrobný alebo prevádzkový objekt spoločnosti Vekastool v Humennom.",
    tags: ["výrobný objekt", "stavebné práce", "Humenné"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
        alt: "Prehľad realizácií BSL TRADING",
      },
    ],
    archiveOnly: true,
  },
  {
    slug: "partizanska-humenne",
    title: "Zateplenie BD Partizánska",
    location: "Humenné",
    yearLabel: "2016",
    summary:
      "Zateplenie bytového domu na Partizánskej ulici v Humennom.",
    tags: ["zateplenie", "bytový dom", "Humenné"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
        alt: "Prehľad realizácií BSL TRADING",
      },
    ],
    archiveOnly: true,
  },
  {
    slug: "rodinne-domy-rezidencia-michalovce",
    title: "Rodinné domy – rezidencia",
    location: "Michalovce",
    yearLabel: "2017 – 2018",
    summary:
      "Výstavba rodinných domov v rezidenčnom projekte v Michalovciach.",
    tags: ["rodinné domy", "developer", "Michalovce"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
        alt: "Prehľad realizácií BSL TRADING",
      },
    ],
    archiveOnly: true,
  },
  {
    slug: "koor-vychod",
    title: "Stavebné práce pre fi Koor Východ s.r.o.",
    location: "Rôzne lokality",
    yearLabel: "2018",
    summary:
      "Stavebné práce realizované pre spoločnosť Koor Východ s.r.o.",
    tags: ["stavebné práce", "komerčný partner", "spolupráca"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
        alt: "Prehľad realizácií BSL TRADING",
      },
    ],
    archiveOnly: true,
  },
  {
    slug: "energo-group",
    title: "Zemné práce – Energo Group",
    location: "Rôzne lokality",
    yearLabel: "2009 – 2018",
    summary:
      "Dlhodobé zemné práce realizované pre spoločnosť Energo Group.",
    tags: ["zemné práce", "dlhodobá spolupráca", "výkopové práce"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
        alt: "Prehľad realizácií BSL TRADING",
      },
    ],
    archiveOnly: true,
  },
  {
    slug: "papin",
    title: "Rekonštrukcia BD Papín",
    location: "Papín",
    yearLabel: "2018",
    summary:
      "Rekonštrukcia bytového domu v obci Papín.",
    tags: ["rekonštrukcia", "bytový dom", "Papín"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
        alt: "Prehľad realizácií BSL TRADING",
      },
    ],
    archiveOnly: true,
  },
  {
    slug: "chemes",
    title: "Rekonštrukcia AB Chemes a.s.",
    location: "Humenné",
    yearLabel: "2005 – 2007",
    summary:
      "Rekonštrukcia administratívnej budovy spoločnosti Chemes v Humennom.",
    tags: ["rekonštrukcia", "administratívna budova", "Humenné"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
        alt: "Prehľad realizácií BSL TRADING",
      },
    ],
    archiveOnly: true,
  },
  {
    slug: "mesto-humenne",
    title: "Mesto Humenné",
    location: "Humenné",
    yearLabel: "2012 – 2018",
    summary:
      "Súbor stavebných a rekonštrukčných prác realizovaných pre mesto Humenné.",
    tags: ["verejný sektor", "mestské zákazky", "Humenné"],
    coverImage: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
    gallery: [
      {
        src: referenceImage("bez-facingu-interaktiv-page-027-scaled.jpg"),
        alt: "Prehľad realizácií BSL TRADING",
      },
    ],
    archiveOnly: true,
  },
];

export const certificates: Certificate[] = [
  {
    slug: "certifikat-1",
    title: "Certifikát 1",
    summary: "Odborný certifikát spoločnosti BSL TRADING.",
    previewImage: certificateImage("cer1.jpg", "2020/07"),
    pdfUrl: certificatePdf("certifikat1.pdf", "2020/07"),
  },
  {
    slug: "certifikat-2",
    title: "Certifikát 2",
    summary: "Odborný certifikát spoločnosti BSL TRADING.",
    previewImage: certificateImage("cer2.jpg", "2020/07"),
    pdfUrl: certificatePdf("certifikat2.pdf", "2020/07"),
  },
  {
    slug: "certifikat-3",
    title: "Certifikát 3",
    summary: "Odborný certifikát spoločnosti BSL TRADING.",
    previewImage: certificateImage("cer3.jpg", "2020/07"),
    pdfUrl: certificatePdf("certifikat3.pdf", "2020/07"),
  },
  {
    slug: "certifikat-4",
    title: "Certifikát 4",
    summary: "Odborný certifikát spoločnosti BSL TRADING.",
    previewImage: certificateImage("cer4.jpg", "2020/07"),
    pdfUrl: certificatePdf("certifikat4.pdf", "2020/07"),
  },
  {
    slug: "certifikat-5",
    title: "Certifikát 5",
    summary: "Odborný certifikát spoločnosti BSL TRADING.",
    previewImage: certificateImage("cer5.jpg", "2020/07"),
    pdfUrl: certificatePdf("certifikat5.pdf", "2020/07"),
  },
  {
    slug: "licencia-etics",
    title: "Licencia ETICS",
    summary: "Licencia ETICS pre zatepľovacie systémy.",
    previewImage: certificateImage("etics.jpg", "2020/07"),
    pdfUrl: certificatePdf("Licencia_ETICS.PDF", "2020/07"),
  },
  {
    slug: "certifikat-2025-1",
    title: "Certifikát 2025 / 1",
    summary: "Certifikát spoločnosti BSL TRADING z roku 2025.",
    previewImage: certificateImage("1_page-0001.jpg", "2025/02"),
    pdfUrl: certificatePdf("1.pdf", "2025/02"),
  },
  {
    slug: "certifikat-2025-2",
    title: "Certifikát 2025 / 2",
    summary: "Certifikát spoločnosti BSL TRADING z roku 2025.",
    previewImage: certificateImage("2_page-0001.jpg", "2025/02"),
    pdfUrl: certificatePdf("2.pdf", "2025/02"),
  },
  {
    slug: "certifikat-2025-3",
    title: "Certifikát 2025 / 3",
    summary: "Certifikát spoločnosti BSL TRADING z roku 2025.",
    previewImage: certificateImage("3_page-0001.jpg", "2025/02"),
    pdfUrl: certificatePdf("3.pdf", "2025/02"),
  },
  {
    slug: "certifikat-cenecon",
    title: "CENECON certifikát",
    summary: "Certifikát spoločnosti BSL TRADING s priloženým PDF dokumentom.",
    previewImage: certificateImage("cert-cenecon.jpg", "2025/05"),
    pdfUrl: certificatePdf("Certifikat.pdf", "2025/05"),
  },
  {
    slug: "certifikat-etics-inspekcia",
    title: "Certifikát ETICS inšpekcia",
    summary: "ETICS certifikát pre odbornú inšpekciu a realizáciu systémov.",
    previewImage: certificateImage("inspCertifikat.jpg", "2025/12"),
    pdfUrl: certificatePdf("F-06-17-04-25-certifikat-ETICS-inspekcia.pdf", "2025/12"),
  },
  {
    slug: "licencia-etics-v",
    title: "Licencia na základe inšpekcie ETICS V",
    summary: "Doplňujúca licencia k ETICS dokumentom spoločnosti.",
    previewImage: certificateImage("licenciaETICs.jpg", "2025/12"),
    pdfUrl: certificatePdf("A-Licencia-na-zaklade-inspekcie-ETICs-V.pdf", "2025/12"),
  },
];

export const apartmentProject: ApartmentProject = {
  title: "Byty Strážske",
  intro:
    "Projekt Byty Strážske predstavuje modernizované byty v Strážskom s kompletnou obrazovou a video prezentáciou.",
  summary:
    "Ponuka projektu zahŕňa predajné odkazy, videoprehliadky, pôdorysy, exteriéry a interiéry bytov.",
  saleLinks: [
    {
      label: "Predaj byt H",
      href: "https://www.megarealitka.sk/nehnutelnost/3106-predaj-moderne-zrekonstruovanych-bytov-v-strazskom-byt-h",
    },
    {
      label: "Predaj byt E",
      href: "https://www.megarealitka.sk/nehnutelnost/3109-predaj-moderne-zrekonstruovanych-bytov-v-strazskom-byt-e",
    },
    {
      label: "Predaj byt I",
      href: "https://www.megarealitka.sk/nehnutelnost/3108-predaj-moderne-zrekonstruovanych-bytov-v-strazskom-byt-i",
    },
  ],
  videos: [
    {
      title: "Video prehliadka 1",
      src: apartmentVideo("VID-20230727-WA0001.mp4"),
    },
    {
      title: "Video prehliadka 2",
      src: apartmentVideo("VID-20230727-WA0002.mp4"),
    },
    {
      title: "Video prehliadka 3",
      src: apartmentVideo("VID-20230727-WA0003.mp4"),
    },
  ],
  galleries: [
    {
      title: "Exteriéry projektu",
      description: "Výber exteriérových záberov projektu.",
      items: Array.from({ length: 15 }, (_, index) => ({
        src: apartmentImage(`Exterier_${index + 1}.png`),
        alt: `Exteriér projektu Byty Strážske ${index + 1}`,
      })),
    },
    {
      title: "Pôdorysy",
      description: "Pôdorysy dvoch bytov a ich variantov.",
      items: [
        { src: apartmentImage("BD_1.png", "07"), alt: "Byt 1 – náhľad" },
        { src: apartmentImage("BD_2.png", "07"), alt: "Byt 2 – náhľad" },
        { src: apartmentImage("Podorys-Byt-1.png"), alt: "Pôdorys bytu 1" },
        { src: apartmentImage("Podorys-Byt-1_000.png"), alt: "Pôdorys bytu 1 – variant 1" },
        { src: apartmentImage("Podorys-Byt-1_001.png"), alt: "Pôdorys bytu 1 – variant 2" },
        { src: apartmentImage("Podorys-Byt-1_002.png"), alt: "Pôdorys bytu 1 – variant 3" },
        { src: apartmentImage("Podorys-Byt-2.png"), alt: "Pôdorys bytu 2" },
        { src: apartmentImage("Podorys-Byt-2_000.png"), alt: "Pôdorys bytu 2 – variant 1" },
        { src: apartmentImage("Podorys-Byt-2_001.png"), alt: "Pôdorys bytu 2 – variant 2" },
      ],
    },
    {
      title: "Interiér – byt 1",
      items: [
        { src: apartmentImage("1_Chodba.png"), alt: "Byt 1 – chodba" },
        { src: apartmentImage("1_Izba_1.png"), alt: "Byt 1 – izba 1" },
        { src: apartmentImage("1_Izba_2.png"), alt: "Byt 1 – izba 2" },
        { src: apartmentImage("1_Kuchyna_1.png"), alt: "Byt 1 – kuchyňa 1" },
        { src: apartmentImage("1_Kuchyna_2.png"), alt: "Byt 1 – kuchyňa 2" },
        { src: apartmentImage("1_Kupelna_1.png"), alt: "Byt 1 – kúpeľňa 1" },
        { src: apartmentImage("1_Kupelna_2.png"), alt: "Byt 1 – kúpeľňa 2" },
        { src: apartmentImage("1_Obyvacia-izba_1.png"), alt: "Byt 1 – obývacia izba 1" },
        { src: apartmentImage("1_Obyvacia-izba_2.png"), alt: "Byt 1 – obývacia izba 2" },
        { src: apartmentImage("1_Pracovna.png"), alt: "Byt 1 – pracovňa" },
        { src: apartmentImage("1_Spalna_1.png"), alt: "Byt 1 – spálňa 1" },
        { src: apartmentImage("1_Spalna_2.png"), alt: "Byt 1 – spálňa 2" },
        { src: apartmentImage("1_WC.png"), alt: "Byt 1 – WC" },
      ],
    },
    {
      title: "Interiér – byt 2",
      items: [
        { src: apartmentImage("2_Chodba.png"), alt: "Byt 2 – chodba" },
        { src: apartmentImage("2_Kuchyna_1.png"), alt: "Byt 2 – kuchyňa" },
        { src: apartmentImage("2_Kupelna_1.png"), alt: "Byt 2 – kúpeľňa 1" },
        { src: apartmentImage("2_Kupelna_2.png"), alt: "Byt 2 – kúpeľňa 2" },
        { src: apartmentImage("2_Obyvacia-izba_1.png"), alt: "Byt 2 – obývacia izba 1" },
        { src: apartmentImage("2_Obyvacia-izba_2.png"), alt: "Byt 2 – obývacia izba 2" },
        { src: apartmentImage("2_Spalna_1.png"), alt: "Byt 2 – spálňa 1" },
        { src: apartmentImage("2_Spalna_2.png"), alt: "Byt 2 – spálňa 2" },
        { src: apartmentImage("2_WC.png"), alt: "Byt 2 – WC" },
      ],
    },
  ],
};

export const featuredServices = services.slice(0, 6);
export const featuredReferences = referenceProjects.filter((project) => project.featured).slice(0, 6);

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getReferenceProject(slug: string) {
  return referenceProjects.find((project) => project.slug === slug);
}
