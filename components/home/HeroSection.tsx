import Image from 'next/image';
import Button from '../Button';

export default function HeroSection() {
  return (
      // Main container with specific dark blue background color
      <section className="relative bg-[#08121e] text-white min-h-[600px] flex items-center overflow-hidden">

        {/* --- BACKGROUND IMAGE LAYER --- */}
        <div className="absolute inset-0 z-0">
          <Image
              src="/tiger_bp_rgb.jpg"
              alt="Background"
              fill
              priority
              className="object-cover object-right"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08121e] via-[#08121e]/90 to-transparent lg:via-[#08121e]/70"></div>
        </div>

        {/* --- CONTENT LAYER --- */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16  w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column: Text content */}
            <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-[1.15] tracking-tight">
                Vezetőket<br />
                készítünk fel<br />
                a jövő kihívásaira
              </h1>

              <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                <p>
                  Az <strong className="text-white">iLead Institute</strong> a Forbes tulajdonosi köréhez tartozó <strong className="text-white">vezetőképző központ</strong>, amely a <strong className="text-white">stratégiai gondolkodást</strong>, a <strong className="text-white">gyakorlati menedzsmentet</strong> és a <strong className="text-white">legfrissebb nemzetközi tudást</strong> kapcsolja össze.
                </p>

                <p>
                  Programjaink célja, hogy a vezetők <strong className="text-white">ne csak megértsék a változásokat, hanem felkészülten, magabiztosan tudjanak dönteni</strong> egy egyre összetettebb üzleti környezetben.
                </p>

                <p>
                  A <strong className="text-white">Be Future Ready Executive Program</strong> nem egy hagyományos vezetőképzés. Konkrét, azonnal alkalmazható eszközöket és gondolkodási modelleket ad felsővezetők és vállalkozók számára, akik egy lépéssel előrébb szeretnének járni – a technológiai, gazdasági és szervezeti változások közepette.

                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
                {/* Primary Button (Orange) */}
                <Button
                    href="/be-future-ready-executive-program"
                    className="font-semibold px-8 py-3 rounded-md transition-colors"
                >
                  A programról
                </Button>

                {/* Secondary Button (Orange) - Assuming similar style based on image */}
                <Button
                    href="/subscription"
                    variant="secondary"
                    className="font-semibold px-8 py-3 rounded-md transition-colors "
                >
                  A magazinról
                </Button>
              </div>
            </div>

            {/* Right Column: Empty spacer to push content left on desktop
              (The Tiger is in the background layer) */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>
  );
}
