import Button from '../Button';

export default function AboutCTASection() {
  return (
    <section className="bg-[#A00230] text-white py-16 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Be Future Ready – Executive Program presented by iLead Institute
        </h2>

        {/* Description */}
        <div className="space-y-4 text-lg leading-relaxed mb-8">
          <p>
            Hatékony irányítás és vezetés a stratégia, emberek, ügyfelek és pénzügyi eredmények területén a legújabb módszerek és eszközök felhasználásával.
          </p>
          <p className="font-semibold">
            Szeretne többet megtudni a programról?
          </p>
          <p>
            Hagyja nálunk az elérhetőségeit, mi válaszolunk Önnek – hívjon minket, vagy írjon nekünk, és örömmel válaszolunk minden kérdésére.
          </p>
        </div>

        {/* Two Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/be-future-ready-executive-program"
            className="font-semibold px-8 py-3 rounded-md transition-colors"
          >
            A programról
          </Button>

          <Button
            href="/subscription"
            variant="secondary"
            className="font-semibold px-8 py-3 rounded-md transition-colors"
          >
            A folyóiratról
          </Button>
        </div>
      </div>
    </section>
  );
}
