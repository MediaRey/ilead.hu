import Image from 'next/image';
import Button from '../Button';

export default function ProgramHeroSection() {
  return (
    <section className="bg-navy-blue text-white py-16 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">
          {/* Left - Lion Image */}
          <div className="relative w-full h-[350px] lg:h-[500px] -mb-16 lg:-mb-16">
            <Image
              src="/program-hero.png"
              alt="Future Ready Executive Program - Polygonal Lion"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Right - Text Content */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Future Ready Executive Program – <span className="text-orange">A menedzserek és vezetők fejlesztése a gyakorlatban</span>
            </h1>

            <div className="space-y-3 text-base leading-relaxed mb-6">
              <p>
                A Future Ready Executive Program egy <strong>praktikus és hatékony alternatíva a hagyományos MBA típusú akadémiai programokhoz.</strong> Az üzlet valódi kihívásaira, stratégiai készségekre és fejlett vezetői eszközökre összpontosít, amelyek azonnal alkalmazhatók a gyakorlatban.
              </p>

              <p>
                A program összekapcsolja a <strong>legújabb globális ismereteket, innovatív irányítási módszereket és modern technológiákat</strong>, hogy a menedzserek ne csak reagáljanak a változásokra, hanem előre lássák és aktívan formálják saját ágazatuk jövőjét.
              </p>

              <p>
                A Future Ready Executive Program segít a <strong>tapasztalt menedzsereknek felgyorsítani karrierjüket, fejleszteni kulcsfontosságú kompetenciákat és erősíteni cégük versenyképességét Magyarországon.</strong>
              </p>
            </div>

            <Button
              href="/#kontakt"
              className="bg-orange hover:bg-orange/90 text-white px-6 py-3 text-base font-semibold"
            >
              Foglalja le helyét
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
