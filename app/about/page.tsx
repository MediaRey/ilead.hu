export default function AboutPage() {
  return (
    <main>
      <section className="bg-navy-blue text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">O nás</h1>
          <p className="text-xl leading-relaxed">
            iLead Institute je centrum excelence v oblasti leadershipu a strategického řízení.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Naše mise</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Propojujeme vědecké poznatky s praxí a pomáháme firmám dosahovat reálných, měřitelných výsledků.
            Naším cílem je rozvíjet schopnosti manažerů a lídrů tak, aby nejen reagovali na změny,
            ale dokázali je i předvídat a strategicky řídit.
          </p>

          <h2 className="text-3xl font-bold mb-6">Naše hodnoty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-orange">Excelence</h3>
              <p className="text-gray-700">
                Poskytujeme pouze ty nejkvalitnější vzdělávací programy založené na nejnovějších vědeckých poznatcích.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-orange">Praxe</h3>
              <p className="text-gray-700">
                Všechny naše poznatky jsou okamžitě aplikovatelné v reálném podnikatelském prostředí.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-orange">Komunita</h3>
              <p className="text-gray-700">
                Vytváříme inspirativní komunitu lídrů, kteří se vzájemně podporují a rozvíjejí.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Spolupráce s MIT</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Jsme hrdými partnery Massachusetts Institute of Technology (MIT) a přinášíme nejnovější
            trendy v oblasti managementu a leadershipu přímo z prestižní americké instituce do českého prostředí.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Proč si vybrat iLead Institute?</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Spojení teorie a praxe</h3>
                <p className="text-gray-700">
                  Naše programy jsou založeny na nejnovějších vědeckých poznatcích,
                  ale vždy s důrazem na praktickou aplikovatelnost.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-orange text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Mezinárodní perspektiva</h3>
                <p className="text-gray-700">
                  Díky spolupráci s MIT získáváte přístup k celosvětovým trendům a best practices.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-orange text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Výjimečná komunita</h3>
                <p className="text-gray-700">
                  Staňte se součástí exkluzivní komunity lídrů a top manažerů z různých odvětví.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
