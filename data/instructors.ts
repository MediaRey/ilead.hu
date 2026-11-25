export interface Instructor {
  name: string;
  title: string;
  image: string;
  linkedin: string;
  bio: string;
}

export const instructors: Instructor[] = [
  {
    name: "Lencsés Gergő",
    title: "Az iLead Institute Head of Faculty-ja, a ZEL-Group ügyvezető partnere, a GE egykori globális alelnöke",
    image: "/instructors/lencses.jpg",
    linkedin: "https://www.linkedin.com/in/lencses/",
    bio: "Villamosmérnök, globális felsővezető és operációs szakértő, aki több mint 25 évet töltött a GE-nél, ahol a gázturbinagyártás globális operációját vezette. A ZEL Group társalapítójaként és tanácsadójaként az innováció, az adatelemzés és a mesterséges intelligencia eszközeivel forradalmasítja a szervezet- és vezetőfejlesztést, hogy a vállalatok és vezetők valódi, tartós fejlődést érhessenek el.",
  },
  {
    name: "Gauder Milán",
    title: "Az MIT SMR főszerkesztője, Az Év Filantrópja 2024, sorozatvállalkozó, a Mastercard korábbi globális alelnöke",
    image: "/instructors/gauder.jpeg",
    linkedin: "https://www.linkedin.com/in/milangauder/",
    bio: "Több mint húsz év nemzetközi tapasztalattal rendelkező pénzügyi technológiai szakember, aki a Mastercard globális vezetőjeként vált a fintech szektor egyik legelismertebb magyar szereplőjévé. Gauder Milán ma angyalbefektetőként és tanácsadóként segíti az innovatív fintech vállalkozásokat, miközben társadalmi hatású projekteken és kulturális kezdeményezéseken is aktívan dolgozik.",
  },
  {
    name: "Pistyur Veronika",
    title: "Bridge Budapest ügyvezető alapító, Oktogon Ventures partner",
    image: "/instructors/pistyur.jpg",
    linkedin: "https://www.linkedin.com/in/veronika-pistyur/",
    bio: "Vezető, befektető és kulturális szakember, aki a Bridge Budapest és az Oktogon Ventures befektetési cég társalapítójaként a tudatos vállalkozói kultúra és az innováció elkötelezett támogatója. Pistyur Veronika több hazai és nemzetközi startupprogram mentora, a Startup Hungary kuratóriumi tagja, és rendszeresen szerepel a legbefolyásosabb magyar nők listáján.",
  },
  {
    name: "Lakatos Péter",
    title: "MGYOSZ elnök, Videoton Holding Zrt. társ-vezérigazgató, Bravogroup társtulajdonos",
    image: "/instructors/lakatos.jpg",
    linkedin: "",
    bio: "Villamosmérnök, üzletember, a Munkaadók és Gyáriparosok Országos Szövetségének elnöke, a Bravogroup társtulajdonosa és a VIDEOTON Holding társ-vezérigazgatója, aki több mint három évtizede elkötelezetten dolgozik a hazai ipar és innováció erősítésén.",
  },
  {
    name: "Vinnai Balázs",
    title: "IVSZ elnök, Finshape elnök, sorozatvállalkozó",
    image: "/instructors/vinnai.jpg",
    linkedin: "https://www.linkedin.com/in/balazsvinnai/",
    bio: "Technológiai vállalkozó és befektető, az IND Group és a Codecool alapítója, aki az innováció, a digitális pénzügy és az IT-oktatás területén épít nemzetközi sikertörténeteket, a magyar tech szektor meghatározó alakjaként.",
  },
  {
    name: "Németh Kinga",
    title: "Az Audi Hungaria személyügyért és szervezetért felelős igazgatósági tagja",
    image: "/instructors/nemeth.jpg",
    linkedin: "https://www.linkedin.com/in/kinga-n%C3%A9meth-2043aa1b9/",
    bio: "Több mint 25 éve dolgozik az Audi Hungariánál, ahol pénzügyi, kontrolling és személyügyi területeken szerzett vezetői tapasztalatot. Németh Kinga meghatározó szerepet játszik a vállalat hosszú távú HR- stratégiájának alakításában és a munkavállalói elkötelezettség erősítésében, miközben elkötelezett a tehetségek fejlesztése és a vállalati kultúra folyamatos megújítása iránt.",
  },
  {
    name: "Benkő Vilmos",
    title: "Az Amerikai Kereskedelmi Kamara egykori elnöke, üzletember, befektető, coach",
    image: "/instructors/benko.jpg",
    linkedin: "",
    bio: "Az Amerikai Kereskedelmi Kamara volt elnökeként, a Toastmasters Hungary és a Speak Academy alapítójaként hisz abban, hogy a kommunikáció az egyik legerősebb eszköz az önbizalom és a siker építésében. Küldetésének tekinti, hogy a retorikai készségek fejlesztésével segítse az embereket abban, hogy magabiztosabban és tudatosabban formálják saját életüket.",
  },
  {
    name: "Karafiáth Balázs",
    title: "A Transpersonal Coaching Academy alapítója, coach, szervezetfejlesztő",
    image: "/instructors/karafiath.jpg",
    linkedin: "https://www.linkedin.com/in/karafiath/",
    bio: "Továbbá a Sziget Fesztivál, a Carnation és a Darwin's Marketing Evolution társalapítója, a Neumann Society kezdeményezője. Több mint 25 év vezetői és nemzetközi tapasztalatával, valamint az agy- és viselkedéstudományok eredményeit ötvöző módszertanával segíti a vezetőket abban, hogy felfedezzék valódi erejüket és küldetésüket.",
  },
  {
    name: "Lénárt Viktor",
    title: "A ZEL Group alapítója és vezérigazgatója, a GROW Group korábbi elnöke és vezérigazgatója",
    image: "/instructors/lenart.jpg",
    linkedin: "https://www.linkedin.com/in/viktorlenartson/",
    bio: "Szervezetfejlesztési szakember és vezetői tanácsadó, aki a tudatos vezetés és a fenntartható növekedés elkötelezett híve. A ZEL Group alapítójaként és a GROW Group korábbi vezérigazgatójaként több mint húsz éve segíti vezetők és szervezetek fejlődését.",
  },
  {
    name: "Georgiu Achilles",
    title: "A MOL-csoport adat-, AI- és innovációs vezetője, a CEU és a Varsói Műszaki Egyetem Executive MBA-programjainak oktatója",
    image: "/instructors/achilles.jpg",
    linkedin: "https://www.linkedin.com/in/achilles-georgiu/",
    bio: "Programtervező matematikus és informatikai menedzser, aki több mint 25 éves nemzetközi tapasztalatot szerzett az IBM-nél, a Sun Microsystemsnél, valamint startup- és scale-up környezetben, ahol több alkalommal kereskedelmi felsővezetőként (CRO) felelt a vállalatok növekedéséért. Pályája során számos szervezeti és üzleti átalakulást irányított a gyakorlati megvalósítástól egészen a felsővezetői szintig. Ma a MOL-csoportnál az adat-, AI- és innovációs terület vezetője. Több mint 15 éve oktat digitális átalakulást és tárgyalástechnikát a Közép-európai Egyetem és a Varsói Műszaki Egyetem Üzleti Iskolájának Executive MBA-programjaiban, ahol két alkalommal is a legjobb oktatónak választották. A technológia, az üzlet és az ember kapcsolatát vizsgálja, mindig szem előtt tartva a technológiai fejlődés társadalmi és etikai hatásait is.",
  },
  {
    name: "Dr. Varga Eszter",
    title: "PannonHitel Zrt. társtulajdonos, vezérigazgató; bankár; befektető; executive coach",
    image: "/instructors/varga.png",
    linkedin: "https://www.linkedin.com/in/dr-varga-eszter/",
    bio: "Pénzügyi szakember és felsővezető, a PannonHitel Zrt. cégcsoport alapító tulajdonosa és vezérigazgatója. Karrierjét a Lombard Lízingnél kezdte, majd a Raiffeisen Banknál a nagyvállalati hitelezés igazgatójaként, később az FHB Kereskedelmi Bank vezérigazgató-helyetteseként szerzett meghatározó vezetői tapasztalatot. Saját vállalkozásait társaival a pénzügyi és szolgáltató szektorban építette fel, több sikeres exitet megvalósítva. Vezetőként és coachként a tudatos, felelős üzleti működés és a vezetői fejlődés elkötelezett támogatója.",
  },
  {
    name: "Csanak Gabriella",
    title: "A Microsoft Magyarország korábbi marketing- és operációs igazgatója",
    image: "/instructors/csanak.png",
    linkedin: "https://www.linkedin.com/in/gabriella-csanak-9526622b/",
    bio: "Több mint 25 év nemzetközi tapasztalattal rendelkező felsővezető, aki technológiai, pénzügyi és FMCG vállalatoknál töltött be vezető szerepeket. A Microsoft Magyarországnál a marketing és operációs területek vezetőjeként komplex, több országot érintő programok megvalósításáért felelt. Korábban a Citibanknál, a Raiffeisen Banknál és a T-Systemsnél szerzett jelentős tapasztalatot, elsősorban a digitalizáció és üzletfejlesztés területén.",
  },
];

// Hungarian names are written surname first ("Vinnai Balázs"), so the surname is the first word
// after an optional title such as "Dr."
const surname = (name: string) => name.replace(/^Dr\.\s+/, '').split(' ')[0];

// Alphabetical by surname (Hungarian collation)
export const sortedInstructors: Instructor[] = [...instructors].sort((a, b) =>
  surname(a.name).localeCompare(surname(b.name), 'hu')
);
