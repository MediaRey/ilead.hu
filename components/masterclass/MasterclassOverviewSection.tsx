'use client';

import { useState } from 'react';

// Each block: a lead sentence (the key idea, always visible) followed by supporting text (expandable).
const blocks = [
  {
    title: 'A józan harmadik út',
    lead: 'A mesterséges intelligencia körüli közbeszéd jellemzően két végletben mozog: vagy a mindent megoldó csodát látják benne, vagy a fenyegetést.',
    paragraphs: [
      'A vezetői gyakorlat szempontjából egyik sem termékeny megközelítés. Az AI a szakmai tudás helyettesítése helyett olyan nyertes pozíciót teremt, amelyben megsokszorozza azt: ott teremt valódi értéket, ahol mély szakértelemmel, világos célokkal és felelős döntéshozatallal találkozik.',
      'Az AI éppen itt változtatja meg a játékszabályokat. Szakmai tudással párosítva lehetővé teszi, hogy a vezetők forgatókönyveket modellezzenek, előre lássák döntéseik következményeit, és olyan áttöréseket érjenek el a saját területükön, amelyek korábban elérhetetlennek tűntek.',
    ],
  },
  {
    title: 'A jó problémák ideje',
    lead: 'A kiváló szakembert és vezetőt az különbözteti meg, hogy milyen problémáik vannak: a vezető olyan kérdésekkel dolgozik, amelyekre mások nem tudnak választ adni, mert ezekhez az ő tapasztalata, rálátása és ítélőképessége kell.',
    paragraphs: [
      'Ezek a problémák eddig gyakran megoldatlanok maradtak, és nem feltétlenül a tudás hiánya miatt, hanem mert nem volt hozzá elég idő, kapacitás vagy akár elemzési mélység.',
    ],
  },
  {
    title: 'A tapasztalat felértékelődik',
    lead: 'Ebben az új korszakban a felhalmozott tudás és a vezetői érettség többet ér.',
    paragraphs: [
      'Az AI-jal a saját nyelvünkön kommunikálunk, így használata nem igényel kiemelkedő technikai jártasságot, inkább világos gondolkodást és pontosan megfogalmazott célokat – és egyben ezekre is sarkall. A valódi kihívás ritkán technológiai: sokkal inkább az, hogy a szervezet és a vezető hogyan viszonyul a változáshoz.',
    ],
  },
];

export default function MasterclassOverviewSection() {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggle = (title: string) => {
    setExpanded((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <section className="py-20 bg-white px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          <span className="text-burgundy">Miről</span> szól a masterclass?
        </h2>

        {/* Numbered rows separated by thin rules */}
        <ol className="border-y border-gray-200 divide-y divide-gray-200">
          {blocks.map((block, index) => {
            const isOpen = expanded.includes(block.title);
            const detailsId = `masterclass-overview-${index + 1}`;

            return (
              <li
                key={block.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-8 lg:py-10"
              >
                {/* Number and title */}
                <div className="lg:col-span-4 flex items-baseline gap-5">
                  <span
                    className="text-4xl lg:text-5xl font-light text-orange leading-none"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-black leading-snug">
                    {block.title}
                  </h3>
                </div>

                {/* Lead sentence, supporting text on demand */}
                <div className="lg:col-span-8">
                  <p className="text-xl lg:text-2xl font-medium text-black leading-snug">
                    {block.lead}
                  </p>

                  {/* Kept in the page when collapsed, only hidden visually */}
                  <div
                    id={detailsId}
                    hidden={!isOpen}
                    className="mt-5 space-y-4 text-gray-700 text-base lg:text-lg leading-relaxed"
                  >
                    {block.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => toggle(block.title)}
                    aria-expanded={isOpen}
                    aria-controls={detailsId}
                    className="mt-4 text-orange font-semibold text-sm hover:text-orange/80 transition-colors"
                  >
                    {isOpen ? '- Kevesebbet mutat' : '+ Többet mutat'}
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
