import Image from 'next/image';

const outcomes = [
  { title: 'Stratégia egy oldalon', text: 'diagnózis, leverage, vezérelv' },
  { title: 'AI-kitettségi térkép', text: 'hol hoz értéket, és hol veszélyezteti az árrést az AI' },
  { title: '3-5 rangsorolt AI-kezdeményezés', text: 'beleértve azt is, mit érdemes abbahagyni' },
  {
    title: '90 napos tesztelési terv',
    text: '3-5 korai jelzőszámmal, amelyek időben megmutatják, hogy a feltételezések teljesülnek-e',
  },
];

// The description is a continuation of the title in the source text; shown on its own line it starts with a capital.
const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export default function MasterclassOutcomesSection() {
  return (
    <section className="bg-navy-blue text-white pt-20 pb-0 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-orange">Amivel</span> a résztvevő távozik
        </h2>
        <p className="text-center text-lg mb-12 text-white/80 max-w-4xl mx-auto">
          Nem kész stratégiával, hanem <strong className="text-white">megalapozott kiindulóponttal</strong>, amelyre a vezetés biztonsággal alapozhatja a stratégiai párbeszédet.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left - four deliverables, two rows of two */}
          <ol className="lg:col-span-7 mb-4 lg:mb-20 grid grid-cols-1 sm:grid-cols-2 gap-0.5 bg-white/30 border-2 border-white/30 rounded-xl overflow-hidden">
            {outcomes.map((outcome, index) => (
              <li key={outcome.title} className="bg-navy-blue p-8">
                <span
                  className="block text-5xl font-bold text-orange leading-none mb-6"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold leading-snug mb-3">{outcome.title}</h3>
                <p className="text-white/70 leading-relaxed">{capitalize(outcome.text)}</p>
              </li>
            ))}
          </ol>

          {/* Right - tiger facing the content, standing on the bottom edge of the section */}
          <div className="relative w-full h-[420px] lg:h-[560px] lg:col-span-5">
            <Image
              src="/masterclass/outcomes.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
