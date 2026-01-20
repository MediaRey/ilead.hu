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
              Be Future Ready Executive Program – <span className="text-orange">A menedzserek és vezetők fejlesztése a gyakorlatban</span>
            </h1>

            <div className="space-y-3 text-base leading-relaxed mb-6">
              <p>
                Be Future Ready Executive Program egy <strong>praktikus és hatékony alternatíva a hagyományos MBA típusú akadémiai programokhoz.</strong> Az üzlet valódi kihívásaira, stratégiai készségekre és fejlett vezetői eszközökre összpontosít, amelyek azonnal alkalmazhatók a gyakorlatban.
              </p>

              <p>
                A program összekapcsolja a <strong>legújabb globális ismereteket, innovatív irányítási módszereket és modern technológiákat</strong>, hogy a menedzserek ne csak reagáljanak a változásokra, hanem előre lássák és aktívan formálják saját ágazatuk jövőjét.
              </p>

              <p>
                Be Future Ready Executive Program segít a <strong>tapasztalt menedzsereknek felgyorsítani karrierjüket, fejleszteni kulcsfontosságú kompetenciákat és erősíteni cégük versenyképességét Magyarországon.</strong>
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
