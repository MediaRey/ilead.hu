import Button from '../Button';

export default function AboutCTASection() {
  return (
    <section className="bg-[#A00230] text-white py-16 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Be Future Ready Executive Program
        </h2>

        {/* Subtitle */}
        <p className="text-xl mb-6">
          Gyakorlatias vezetőképzés a komplex üzleti kihívások legyőzéséhez
        </p>

        {/* Description */}
        <div className="space-y-4 text-lg leading-relaxed mb-8">
          <p>
            A program a stratégia, az emberek irányítása és az üzleti teljesítmény metszéspontjára fókuszál. Olyan vezetői eszközöket és gondolkodásmódot ad, amelyek bizonytalan, gyorsan változó környezetben is használhatók.
          </p>
          <p className="font-semibold">
            Szeretne többet megtudni a programról?
          </p>
          <p>
            Vegye fel velünk a kapcsolatot, és válaszolunk minden kérdésére.
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
