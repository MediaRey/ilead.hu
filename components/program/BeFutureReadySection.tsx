import Image from 'next/image';

export default function BeFutureReadySection() {
  return (
    <>
      {/* Bottom section with tiger and benefits */}
      <section className="bg-navy-blue text-white pb-0 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-end pb-20 lg:pb-0">
            {/* Left - Tiger Image (2/5) */}
            <div className="relative w-full h-[400px] lg:h-[500px] lg:col-span-2 -mb-0 lg:-mb-0">
              <Image
                src="/tiger.png"
                alt="Be Future Ready Executive Program - Tiger"
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Right - Text Content (3/5) */}
            <div className="lg:col-span-3 py-20">
              <h2 className="text-3xl lg:text-4xl font-bold  leading-tight">
                A <span className="text-orange">Be Future Ready Executive Program</span> nem klasszikus MBA képzés
              </h2>
              <p className=" text-lg lg:text-xl py-4">
                Egy <strong>rugalmasabb, gyakorlatközpontú</strong> megközelítést kínál azoknak a vezetőknek, akik a tanultakat azonnal szeretnék beépíteni mindennapi döntéseikbe.
              </p>

              <ul className="space-y-4 text-base lg:text-lg">
                <li className="flex items-start">
                  <span className="text-orange mr-3 mt-1">•</span>
                  <div>
                    <strong>Rugalmasság a vezetői valósághoz igazítva</strong> – a program felépítése alkalmazkodik az aktív vezetők időbeosztásához és kihívásaihoz.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-3 mt-1">•</span>
                  <div>
                    <strong>Azonnal használható tudás</strong> – fókuszban a releváns vezetői kérdések, stratégiai döntési helyzetek és valós esettanulmányok.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-3 mt-1">•</span>
                  <div>
                    <strong>Interaktív tanulási forma</strong> – workshopok, szimulációk és közös gondolkodás, nem frontális oktatás.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-3 mt-1">•</span>
                  <div>
                    <strong>Értékes szakmai kapcsolatok</strong> – nyitott, előretekintő vezetői közösség, ahol a tapasztalatcsere valódi hozzáadott értéket jelent.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
