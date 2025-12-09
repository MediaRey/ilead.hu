'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

export default function InstructorsSection() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  const instructors = [
    {
      name: "Vít Šubert",
      image: "/instructors/subert.jpg",
      linkedin: "https://www.linkedin.com/in/vitsubert/",
      bio: "Vít stratéga és a transzformációs projektek vezetője, több mint 25 év tapasztalattal a nemzetközi üzletben Európa-szerte, elsősorban a technológia, távközlés és innováció területén. Cége az Unicorn Attacks segíti a vállalatokat és startupokat a diszruptív üzleti modellek megtalálásában, új bevételi források azonosításában és a régi modellek elhagyásában, hogy elkerüljék az ügyfelek státusz quo modelljeit.",
    },
    {
      name: "Radek Špicar",
      image: "/instructors/spicar.jpg",
      linkedin: "https://www.linkedin.com/in/radekspicar/",
      bio: "Radek Špicar az Ipari Szövetség alelnöke és a BusinessEurope korábbi alelnöke. A múltban az Aspen Institute Prague igazgatója, a Škoda Auto cég vezetésének társulási tagja volt, ahol számos bel- és külgazdasági pozíciót töltött be. Gazdasági tanulmányokat végzett a Társadalomtudományok Karán a Károly Egyetemen és a diplomáciai területen.",
    },
    {
      name: "Pavlína Louženská",
      image: "/instructors/louzenska.jpg",
      linkedin: "https://www.linkedin.com/in/pavlinalouzenska/",
      bio: "Pavlína a trendeknek szenteli magát - ő trendkutató szakértő. Trendkutató ügynökségeket vezetett a Tatra Banknál vagy az IKEA-nál. Pavlína a nemzetközi trendkutatók Culture Connectors közösségének tagja. Főként a Startupy pro Evropu, Afrikát és a Közel-Keletet veszi figyelembe, sok más akcelerátoron dolgozik, amelyek különböző technológiai startupok fejlesztésére összpontosítanak.",
    },
    {
      name: "Martin Gajdoš",
      image: "/instructors/gajdos.jpg",
      linkedin: "https://www.linkedin.com/in/martingajdos/",
      bio: "Martin vezetője és stratégiai tanácsadó, aki segít vállalatoknak potenciáljuk kiaknázásában, növekedésében és sikerében gyorsan változó környezetben. A Stellars Ventures vállalat alapítója, amely a vállalatok fejlesztésére és átalakulására összpontosít, és olyan határokat kíván túllépni, amelyeket ma neheznek tartanak.",
    },
    {
      name: "Paulina Mazur",
      image: "/instructors/mazur.jpg",
      linkedin: "https://www.linkedin.com/in/paulinamazur/",
      bio: "Paulina HR, vállalati kultúra és kommunikáció területén szaktanácsadó több generációra kiterjedően. Több mint 20 éve vezet emberi kapcsolatokat - ezért tiszta kommunikáció és kultúra nélkül nem lehet sikeres üzletet építeni. Fő fókusza a vállalati kultúra és az igazi munkahelyi elkötelezettség építése. Segíti a vállalatokat a párbeszéd fejlesztésében, a visszajelzés erősítésében és az egymás megértésében.",
    },
    {
      name: "Jakub Kolesa",
      image: "/instructors/kolesa.jpg",
      linkedin: "https://www.linkedin.com/in/jakubkolesa/",
      bio: "Jakub a Fortuna Entertainment Group általános igazgatója, közép-európai sázó vállalat, és tapasztalt vezetője több mint 30 év nemzetközi üzleti gyakorlattal. Több mint egy évtizede működik együtt a Mars/Royal Caninnel, 15 évig Csehországban, a Nagy-Britanniában, Írországban és Oroszországban, valamint a Mars Petcare globális stratégiai igazgatójaként.",
    },
    {
      name: "Ivana Šedivá",
      image: "/instructors/sediva.jpg",
      linkedin: "https://www.linkedin.com/in/ivanasediva/",
      bio: "Ivana több mint 30 év tapasztalattal rendelkezik nagyméretű nemzetközi vállalatok vezetői területén. Dolgozott Johnson & Johnson, McDonald's, Tesco, Ahold Delhaize és OBI Group cégekben, ahol átfogó transzformációs projekteket és marketing stratégiákat irányított. Szerepe cseh, szlovák és nemzetközi szinten is megvolt. Az elmúlt években független tagja a közigazgatási tanácsoknak.",
    },
    {
      name: "Matej Bošňák",
      image: "/instructors/bosnak.jpg",
      linkedin: "https://www.linkedin.com/in/matejbosnak/",
      bio: "Matej tapasztalt vezető pénzügy és audit területén, több mint 25 év nemzetközi tanácsadói cégeknél és vállalatoknál szerzett tapasztalattal. Mióta informatikai kibernetikai képzést végzett a Zsilina Egyetemen, 1994-ben a világban kezdett dolgozni a Coopers & Lybrand (később PwC) cégnél, majd az Ernst & Young (EY) cégnél, ahol 2006-ban partner lett.",
    },
    {
      name: "Petr Šmíd",
      image: "/instructors/smid.jpg",
      linkedin: "https://www.linkedin.com/in/petrsmid/",
      bio: "Petr befektetési partner a Rockaway Ventures-nél, egy befektetési részleg, amely a Rockaway Capital alatt működik, és transzformatív technológiák területén fektet be célja az AI. Munkája ambiciózus alapítóknak segít a vállalatot a seed fázistól a Series A-ig és tovább, célja az, hogy CEE régióból globális színtérre jussanak startupok.",
    },
    {
      name: "David Vrba",
      image: "/instructors/vrba.jpg",
      linkedin: "https://www.linkedin.com/in/davidvrba/",
      bio: "David üzenetét az embereknek ihleti, hogy a leggyakrabban csináljanak tudatos döntéseket. Kiterjedt nemzetközi üzleti tapasztalattal rendelkezik - 3M vagy ERSTE Group cégekben dolgozott, ahol vezetői szerepeket töltött be CHRO és CEO pozíciókban. Vezet start-up és oktatási projekteket is. Ma transzformációs coach és mentor, valamint nagyvállalati vezető propagátora.",
    },
    {
      name: "Tomáš Braverman",
      image: "/instructors/braverman.jpg",
      linkedin: "https://www.linkedin.com/in/tomasbraverman/",
      bio: "Több mint 15 éve él az e-commerce és online üzlettel. Miután az Internet Retail területén szerzett tapasztalatot, 2013-ban a Heureky vezérigazgatója lett, amely 10 évig volt vezető e-commerce cég a CEE-ben. Szlovák csapatot alapított - a legnagyobb piactér Slevomát Group - amely exkluzív ajánlatokat és utazási ajánlatokat nyújt Csehországban és Szlovákiában.",
    },
    {
      name: "Kristin LaRonca Parpel",
      image: "/instructors/parpel.jpg",
      linkedin: "https://www.linkedin.com/in/kristinlaronca/",
      bio: "Kristin executive coach és leadership tanácsadó több mint 25 év üzleti tapasztalattal. Saját cégét, a KLP Coaching-ot vezeti, amely egyedi coaching és csoportprogramokat kínál vezetőknek, csapat dinamikára és mentorálásra összpontosítva. Kristin konferenciákon is fellép, panelbeszélgetéseket moderál és podcastokat vezet. Üzenete az, hogy segítsen az embereknek felfedezni, mi motiválja őket igazán.",
    },
  ];

  return (
    <section className="py-20 bg-white px-6 lg:px-16">
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
          {instructors.map((instructor, index) => (
            <div
              key={index}
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

                {/* Name and LinkedIn */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-1">
                    {instructor.name}
                  </h3>
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
                expandedCards.includes(index) ? '' : 'line-clamp-6'
              }`}>
                {instructor.bio}
              </p>

              {/* Show More/Less Link */}
              <button
                onClick={() => toggleCard(index)}
                className="text-orange font-semibold text-sm hover:text-orange/80 transition-colors"
              >
                {expandedCards.includes(index) ? '- Kevesebbet mutat' : '+ Többet mutat'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
