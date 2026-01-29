import Image from 'next/image';
import Button from '../Button';

export default function ProgramHeroSection() {
  return (
    <section className="relative bg-navy-blue text-white py-16 px-6 lg:px-16 overflow-hidden">
      {/* --- BACKGROUND IMAGE FOR MOBILE ONLY --- */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src="/program-hero.png"
          alt="Be Future Ready Executive Program - Polygonal Lion"
          fill
          priority
          className="object-cover object-right"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-blue via-navy-blue/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">
          {/* Left - Lion Image (DESKTOP ONLY) */}
          <div className="hidden lg:block relative w-full h-[500px] -mb-16">
            <Image
              src="/program-hero.png"
              alt="Be Future Ready Executive Program - Polygonal Lion"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Right - Text Content */}
          <div className="text-center lg:text-left mx-auto lg:mx-0">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Be Future Ready Executive Program<br/>
              <span className="text-orange">Vezetők és döntéshozók fejlesztése a gyakorlatban</span>
            </h1>

            <div className="space-y-3 text-base leading-relaxed mb-6">
              <p>
                A <strong>Be Future Ready Executive Program</strong> olyan tapasztalt vezetőknek szól, akik a gyorsan változó üzleti környezetben nemcsak reagálni, hanem <strong>előrelátóan dönteni és irányt mutatni</strong> szeretnének.
              </p>

              <p>
                A program a valós üzleti kihívásokra, stratégiai döntési helyzetekre és fejlett vezetői eszközökre fókuszál — mindarra, amire ma szükség van a szervezetek sikeres irányításához.
              </p>

              <p>
                Célunk, hogy a résztvevők magabiztosabban hozzanak összetett döntéseket, fejlesszék kulcskompetenciáikat, és <strong>felkészülten alakítsák saját szervezetük jövőjét</strong>.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                href="#contact-form"
                className="font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Szeretne többet tudni?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
