import Button from '@/components/Button';

export default function FutureReadyPage() {
  return (
    <main>
      <section className="bg-navy-blue text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Future Ready Executive Program</h1>
          <p className="text-2xl mb-4">
            Klíč k modernímu leadershipu – praktická a flexibilní alternativa MBA
          </p>
          <p className="text-xl leading-relaxed">
            která propojuje vědecké poznatky s byznysovou praxí.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🏛️</div>
                <p className="text-white text-lg">MIT Campus</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">O programu</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Našim cílem je rozvíjet schopnosti manažerů tak, aby nejen reagovali na změny,
                ale dokázali je i předvídat a strategicky řídit.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Součástí programu jsou témata doporučená MIT, <strong>nejnovější trendy v oblasti managementu</strong> a
                praktické nástroje, které podporují lídry v efektivním vedení týmů. Program přináší
                <strong> mezinárodní pohled</strong> na leadership a propojuje účastníky v inspirativní
                komunitě lídrů budoucnosti.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Co vás čeká v programu?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-4">Spojení vědy a praxe</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange mr-2">→</span>
                  <span>Spolupracujeme s prestižními institucemi, jako je MIT, a přinášíme nejnovější manažerské trendy a strategie.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">→</span>
                  <span>Všechny poznatky jsou okamžitě aplikovatelné v praxi.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange">
              <div className="text-5xl mb-4">❄️</div>
              <h3 className="text-xl font-bold mb-4">Výjimečný networking a byznysové vztahy</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange mr-2">→</span>
                  <span>Staňte se součástí exkluzivní komunity lídrů a top manažerů.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">→</span>
                  <span>Onboarding session a networking už od prvního dne programu.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">→</span>
                  <span>Pravidelná setkání absolventů, strategické diskuse a inspirativní eventy.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-4">Učíte se od nejlepších</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange mr-2">→</span>
                  <span>Program vedou zkušení lídři a odborníci s reálnou zkušeností z teorie, ale ověřené strategie.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">→</span>
                  <span>Konkrétní nástroje a strategie, které vám pomohou okamžitě zlepšit řízení týmu a firmy.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">Struktura programu</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-orange">Moduly</h3>
                <p className="text-gray-700">
                  Program je rozdělen do několika modulů, které pokrývají klíčové oblasti moderního leadershipu:
                  strategické myšlení, řízení týmů, inovace, change management a digitální transformace.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-orange">Délka</h3>
                <p className="text-gray-700">
                  Program trvá 6-9 měsíců v závislosti na vybraném formátu. Nabízíme flexibilní časový harmonogram,
                  který je přizpůsoben potřebám pracujících manažerů.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-orange">Formát</h3>
                <p className="text-gray-700">
                  Kombinace prezenční výuky, online setkání, samostudia a praktických projektů.
                  Každý modul zahrnuje praktické case studies z reálného business prostředí.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Připraveni posunout své leadership skills na další úroveň?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Kapacita programu je omezená. Rezervujte si své místo ještě dnes!
            </p>
            <Button href="/kontakt" className="text-lg px-12 py-4">
              Kontaktujte nás
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-navy-blue text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Časté dotazy</h2>
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Jaké jsou požadavky na přijetí do programu?</h3>
              <p>
                Program je určen pro manažery a lídry s minimálně 3-5 lety praxe v řídící pozici.
                Přijímací řízení zahrnuje pohovor a posouzení vašich cílů a očekávání.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Kolik účastníků je v jedné skupině?</h3>
              <p>
                Abychom zajistili individuální přístup a kvalitní networking, maximální počet účastníků
                v jedné skupině je 20-25 lidí.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Získám certifikát po absolvování programu?</h3>
              <p>
                Ano, po úspěšném absolvování programu obdržíte certifikát od iLead Institute,
                který je uznávaný v business komunitě.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
