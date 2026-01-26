import { GraduationCap, CheckCircle, BookOpen } from 'lucide-react';

export default function AboutMissionSection() {
  return (
    <section className="bg-white text-black py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
          A mi <span className="text-orange">küldetésünk</span>
        </h2>
        <p className="text-xl mb-16 text-gray-700">
          Felkészítjük a menedzsereket a jövő kihívásaira.
        </p>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-orange rounded-lg p-3 md:p-4 mb-6">
              <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              Hozzuk a legújabb globális ismereteket a vezetés, stratégiai irányítás és innováció területén.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-orange rounded-lg p-3 md:p-4 mb-6">
              <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              Segítjük a menedzsereket kulcsfontosságú kompetenciák fejlesztésében és csapataik hatékony vezetésében, még bizonytalan időkben is.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-orange rounded-lg p-3 md:p-4 mb-6">
              <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              Igazítjuk az oktatást a magyar üzleti környezet sajátosságaihoz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
