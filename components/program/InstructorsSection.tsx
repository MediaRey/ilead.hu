'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InstructorsSection() {
  const [expandedCards, setExpandedCards] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleCard = (name: string) => {
    setExpandedCards(prev =>
      prev.includes(name)
        ? prev.filter(i => i !== name)
        : [...prev, name]
    );
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
    // Scroll to section top
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };
  const instructors = [
    {
      name: "Lencsés Gergő",
      title: "Az iLead Institute Head of Faculty-ja, a ZEL-Group ügyvezető partnere, a GE egykori globális alelnöke",
      image: "/instructors/lencses.jpg",
      linkedin: "https://www.linkedin.com/in/vitsubert/",
      bio: "Villamosmérnök, globális felsővezető és operációs szakértő, aki több mint 25 évet töltött a GE-nél, ahol a gázturbinagyártás globális operációját vezette. A ZEL Group társalapítójaként és tanácsadójaként az innováció, az adatelemzés és a mesterséges intelligencia eszközeivel forradalmasítja a szervezet- és vezetőfejlesztést, hogy a vállalatok és vezetők valódi, tartós fejlődést érhessenek el.",
    },
    {
      name: "Gauder Milán",
      title: "Az MIT SMR főszerkesztője, Az Év Filantrópja 2024, sorozatvállalkozó, a Mastercard korábbi globális alelnöke",
      image: "/instructors/gauder.jpeg",
      linkedin: "https://www.linkedin.com/in/vitsubert/",
      bio: "Több mint húsz év nemzetközi tapasztalattal rendelkező pénzügyi technológiai szakember, aki a Mastercard globális vezetőjeként vált a fintech szektor egyik legelismertebb magyar szereplőjévé. Gauder Milán ma angyalbefektetőként és tanácsadóként segíti az innovatív fintech vállalkozásokat, miközben társadalmi hatású projekteken és kulturális kezdeményezéseken is aktívan dolgozik.",
    },
    {
      name: "Pistyur Veronika",
      title: "Bridge Budapest ügyvezető alapító, Oktogon Ventures partner",
      image: "/instructors/pistyur.jpg",
      linkedin: "https://www.linkedin.com/in/vitsubert/",
      bio: "Vezető, befektető és kulturális szakember, aki a Bridge Budapest és az Oktogon Ventures befektetési cég társalapítójaként a tudatos vállalkozói kultúra és az innováció elkötelezett támogatója. Pistyur Veronika több hazai és nemzetközi startupprogram mentora, a Startup Hungary kuratóriumi tagja, és rendszeresen szerepel a legbefolyásosabb magyar nők listáján.",
    },
    {
      name: "Lakatos Péter",
      title: "MGYOSZ elnök, Videoton Holding Zrt. társ-vezérigazgató, Bravogroup társtulajdonos",
      image: "/instructors/lakatos.jpg",
      linkedin: "https://www.linkedin.com/in/vitsubert/",
      bio: "Villamosmérnök, üzletember, a Munkaadók és Gyáriparosok Országos Szövetségének elnöke, a Bravogroup társtulajdonosa és a VIDEOTON Holding társ-vezérigazgatója, aki több mint három évtizede elkötelezetten dolgozik a hazai ipar és innováció erősítésén.",
    },
    {
      name: "Vinnai Balázs",
      title: "IVSZ elnök, Finshape elnök, sorozatvállalkozó",
      image: "/instructors/vinnai.jpg",
      linkedin: "https://www.linkedin.com/in/vitsubert/",
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
      linkedin: "https://www.linkedin.com/in/vitsubert/",
      bio: "Az Amerikai Kereskedelmi Kamara volt elnökeként, a Toastmasters Hungary és a Speak Academy alapítójaként hisz abban, hogy a kommunikáció az egyik legerősebb eszköz az önbizalom és a siker építésében. Küldetésének tekinti, hogy a retorikai készségek fejlesztésével segítse az embereket abban, hogy magabiztosabban és tudatosabban formálják saját életüket.",
    },
    {
      name: "Karafiáth Balázs",
      title: "A Transpersonal Coaching Academy alapítója, coach, szervezetfejlesztő",
      image: "/instructors/karafiath.jpg",
      linkedin: "https://www.linkedin.com/in/vitsubert/",
      bio: "Továbbá a Sziget Fesztivál, a Carnation és a Darwin's Marketing Evolution társalapítója, a Neumann Society kezdeményezője. Több mint 25 év vezetői és nemzetközi tapasztalatával, valamint az agy- és viselkedéstudományok eredményeit ötvöző módszertanával segíti a vezetőket abban, hogy felfedezzék valódi erejüket és küldetésüket.",
    },
    {
      name: "Lénárt Viktor",
      title: "A ZEL Group alapítója és vezérigazgatója, a GROW Group korábbi elnöke és vezérigazgatója",
      image: "/instructors/lenart.jpg",
      linkedin: "https://www.linkedin.com/in/vitsubert/",
      bio: "Szervezetfejlesztési szakember és vezetői tanácsadó, aki a tudatos vezetés és a fenntartható növekedés elkötelezett híve. A ZEL Group alapítójaként és a GROW Group korábbi vezérigazgatójaként több mint húsz éve segíti vezetők és szervezetek fejlődését.",
    },
    {
      name: "Kapitány István",
      title: "A Shell korábbi globális executive alelnöke, a Menedzserszövetség elnöke",
      image: "/instructors/kapitany.jpg",
      linkedin: "https://www.linkedin.com/in/vitsubert/",
      bio: "Nemzetközi felsővezető, aki 37 évet töltött a Shellnél, ahol globális executive alelnökként a vállalat kiskereskedelmi üzletágát vezette világszerte. Magyarországról induló karrierje során Európában, Amerikában és Dél-Afrikában töltött be vezetői pozíciókat, 80 országban irányítva komplex, nagy léptékű működést. Több évtizedes tapasztalatával a globális növekedés, az ügyfélközpontú működés és a vezetői kiválóság meghatározó alakja.",
    },
    {
      name: "Dr. Varga Eszter",
      title: "PannonHitel Zrt. társtulajdonos, vezérigazgató; bankár; befektető; executive coach",
      image: "/instructors/varga.png",
      linkedin: "https://www.linkedin.com/in/vitsubert/",
      bio: "Pénzügyi szakember és felsővezető, a PannonHitel Zrt. cégcsoport alapító tulajdonosa és vezérigazgatója. Karrierjét a Lombard Lízingnél kezdte, majd a Raiffeisen Banknál a nagyvállalati hitelezés igazgatójaként, később az FHB Kereskedelmi Bank vezérigazgató-helyetteseként szerzett meghatározó vezetői tapasztalatot. Saját vállalkozásait társaival a pénzügyi és szolgáltató szektorban építette fel, több sikeres exitet megvalósítva. Vezetőként és coachként a tudatos, felelős üzleti működés és a vezetői fejlődés elkötelezett támogatója.",
    },
  ];


  return (
    <section ref={sectionRef} className="py-20 bg-white px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-4 text-black">
          Mesterek a gyakorlatban – a program oktatói
        </h2>
        <p className="text-center text-lg mb-12 text-gray-700 max-w-4xl mx-auto">
          Akadémiai ismeretek kombinálása közvetlen vállalkozói tapasztalattal. Oktatóink mentorai a hatékony vezetéshez vezető úton, felkészülve a jövő kihívásaira.
        </p>

        {/* Instructors Grid - Using CSS columns for masonry layout */}
        <div className="block md:columns-2 lg:columns-3 gap-8">
          {instructors.slice(0, showAll ? instructors.length : 6).map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow mb-8 break-inside-avoid"
            >
              {/* Header with circular photo, name and LinkedIn */}
              <div className="flex items-center gap-4 mb-4">
                {/* Circular Photo */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name, Title and LinkedIn */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    {instructor.title}
                  </p>
                  <a
                    href={instructor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Bio */}
              <p className={`text-gray-700 text-sm leading-relaxed mb-4 transition-all ${
                expandedCards.includes(instructor.name) ? '' : 'line-clamp-3'
              }`}>
                {instructor.bio}
              </p>

              {/* Show More/Less Link */}
              <button
                onClick={() => toggleCard(instructor.name)}
                className="text-orange font-semibold text-sm hover:text-orange/80 transition-colors"
              >
                {expandedCards.includes(instructor.name) ? '- Kevesebbet mutat' : '+ Többet mutat'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Show All / Show Less Button */}
        {instructors.length > 6 && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              onClick={handleToggleShowAll}
              className="bg-orange text-white font-semibold px-8 py-3 rounded-md transition-colors hover:bg-orange/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'Kevesebb oktató megtekintése' : 'Összes oktató megtekintése'}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
