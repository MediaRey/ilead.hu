import Image from 'next/image';
import Button from '../Button';

export default function HeroSection() {
  return (
      // Main container with specific dark blue background color
      <section className="relative bg-[#08121e] text-white min-h-[600px] flex items-center overflow-hidden">

        {/* --- BACKGROUND IMAGE LAYER --- */}
        <div className="absolute inset-0 z-0">
          {/* Replace '/path/to/tiger-bg.jpg' with your actual image file */}
          <Image
              src="/hero-bg.jpg"
              alt="Background"
              fill
              priority
              className="object-cover object-right"
          />

          {/* Gradient Overlay:
            Creates a solid dark fade on the left for text readability,
            transparent on the right to show the tiger. */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08121e] via-[#08121e]/90 to-transparent lg:via-[#08121e]/70"></div>
        </div>

        {/* --- CONTENT LAYER --- */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16  w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column: Text content */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-[1.15] tracking-tight">
                Vezetőket és<br />
                menedzsereket viszünk<br />
                magasabb szintre
              </h1>

              <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                <p>
                  <strong className="text-white">Az iLead Institute a vezetői készségek és stratégiai menedzsment kiválósági központja.</strong> Összekapcsoljuk a tudományos ismereteket a gyakorlattal, és segítjük a vállalatokat valódi, mérhető eredmények elérésében.
                </p>

                <p>
                  Fejlesztési programunk, a <strong className="text-white">Be Future Ready Executive</strong> nem csupán képzésről szól – konkrét és gyakorlati eszközöket kínál a modern vezetők számára, akik mindig egy lépéssel előrébb akarnak járni.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                {/* Primary Button (Orange) */}
                <Button
                    href="/kontakt123"
                    className="font-semibold px-8 py-3 rounded-md transition-colors"
                >
                  Foglaljon helyet
                </Button>

                {/* Secondary Button (Orange) - Assuming similar style based on image */}
                <Button
                    href="/subscription123"
                    variant="secondary"
                    className="font-semibold px-8 py-3 rounded-md transition-colors "
                >
                  Töltse le a prospektust
                </Button>
              </div>
            </div>

            {/* Right Column: Empty spacer to push content left
              (The Tiger is in the background layer) */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>
  );
}
