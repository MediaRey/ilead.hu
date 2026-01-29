import Image from 'next/image';

export default function AboutValuesSection() {
  const values = [
    "<strong>Nem elméletet tanítunk, hanem működő vezetői megközelítéseket</strong>, amelyek a mai üzleti környezetben már bizonyítottak.",
    "<strong>A megszerzett tudás azonnal alkalmazható</strong> a vezetői döntéshozatalban, csapatirányításban és stratégiai helyzetekben.",
    "<strong>A legfrissebb kutatási eredményeket és nemzetközi gyakorlatokat integráljuk</strong>, mindig a gyakorlati hasznosság szempontjából.",
    "<strong>Vezetői közösséget építünk</strong>, ahol a tapasztalatcsere és az egymástól tanulás a fejlődés része.",
    "<strong>Partnerségeinket és működésünket a szakmai hitelesség, az átláthatóság és a bizalom határozza meg.</strong>",
  ];

  return (
    <section className="py-20 px-6 lg:px-16 bg-white">
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
                  <p className="text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: value }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
