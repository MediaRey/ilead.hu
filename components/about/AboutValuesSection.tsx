import Image from 'next/image';

export default function AboutValuesSection() {
  const values = [
    "A legmagasabb szintű oktatást kínáljuk, amely tükrözi az aktuális trendeket és bevált gyakorlatokat.",
    "Minden megszerzett tudás azonnal alkalmazható a valós üzleti környezetben.",
    "Integráljuk a legújabb kutatásokat és modern oktatási módszereket, hogy maximális értéket nyújtsunk.",
    "Összekapcsoljuk a menedzsereket, akik inspirálják egymást, megosztják tapasztalataikat és közösen növekednek.",
    "Együttműködésünk az átláthatóságon, professzionalizmusán és kölcsönös bizalmon alapul.",
  ];

  return (
    <section className="py-20 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Tiger Image */}
          <div className="relative w-full h-[200px] lg:h-[600px]">
            <Image
              src="/values-image.png"
              alt="iLead Institute Values - Polygonal Tiger"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right - Values Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-black">
              Értékeink – <span className="text-orange">Mi különböztet meg bennünket?</span>
            </h2>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-black text-lg sm:text-2xl font-bold flex-shrink-0 mt-1">—</span>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
