import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { instructors } from '@/data/instructors';

const lecturer = instructors.find((i) => i.name === 'Lencsés Gergő')!;

const practicalInfo = [
  { label: 'Helyszín', value: 'Budapest' },
  { label: 'Nyelv', value: 'Magyar' },
  { label: 'Részvételi díj', value: '1 600 EUR' },
];

export default function MasterclassDetailsSection() {
  return (
    <section className="py-20 bg-white px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left - audience and practical information */}
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl font-bold text-orange mb-4">Kinek szól?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Tulajdonosoknak, felsővezetőknek, stratégiai fontosságú vezetőknek, akik a vállalat irányáról döntenek – nem AI- vagy IT-specialistáknak. A programhoz nem kell technikai előképzettség; egy rövid online bevezető és egy 1–2 oldalas felkészülési sablon segít, hogy az első nap már a lényegről szóljon.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-orange mb-4">Gyakorlati információk</h2>
            <dl className="bg-gray-50 rounded-xl border border-gray-100 divide-y divide-gray-200">
              {practicalInfo.map((row) => (
                <div key={row.label} className="flex justify-between gap-4 px-6 py-4">
                  <dt className="text-gray-600 font-semibold">{row.label}</dt>
                  <dd className="text-black font-bold text-right">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-gray-700 leading-relaxed">
              A részvételi díj magában foglalja a képzés, a helyszín, a catering, az ebéd és a tananyagok díját.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              A részvételi díj 50%-a jóváírásra kerül, ha a résztvevő a{' '}
              <Link
                href="/be-future-ready-executive-program"
                className="text-orange font-semibold hover:underline"
              >
                Be Future Ready Executive Programra
              </Link>{' '}
              is jelentkezik.
            </p>
          </div>
        </div>

        {/* Right - lecturer */}
        <div>
          <h2 className="text-3xl font-bold text-orange mb-4">Az oktató</h2>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center gap-5 mb-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                <Image
                  src={lecturer.image}
                  alt={lecturer.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">{lecturer.name}</h3>
                <p className="text-gray-600 mb-1">iLead Institute – Head of Faculty</p>
                {lecturer.linkedin && (
                  <a
                    href={lecturer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Az iLead Institute szakmai vezetője (Head of Faculty). Villamosmérnök, 25 évet töltött a General Electricnél, utolsó öt évében a GE gázturbina-gyártásának globális operációs vezetőjeként. Felépítette a GE első vietnámi gyárát, és vezette a vállalat legnagyobb, USA-n kívüli, több milliárd dolláros forgalmú gyártóhelyét. 2023-ban társalapítóként elindította Magyarország első AI-támogatott vezető- és szervezetfejlesztő vállalkozását, a ZEL Groupot.
              </p>
              <p className="italic">
                Ahogy magát nevezi: tolmács, aki segít megérteni a technológiát másoknak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
