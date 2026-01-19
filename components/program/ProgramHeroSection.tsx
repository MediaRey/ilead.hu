import Image from 'next/image';
import Button from '../Button';

export default function ProgramHeroSection() {
  return (
    <section className="relative bg-navy-blue text-white min-h-[600px] flex items-center overflow-hidden">
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/program-hero.png"
          alt="Be Future Ready Executive Program - Polygonal Lion"
          fill
          priority
          className="object-cover object-right"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-blue via-navy-blue/90 to-transparent lg:via-navy-blue/70"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full py-16">
        <div className="max-w-4xl">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Be Future Ready Executive Program – <span className="text-orange">A menedzserek és vezetők fejlesztése a gyakorlatban</span>
          </h1>

          <div className="space-y-4 text-base lg:text-lg leading-relaxed mb-8">
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

          <Button
            href="#contact-form"
            className="font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Szeretne többet tudni?
          </Button>
        </div>
      </div>
    </section>
  );
}
