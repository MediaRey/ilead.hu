import Image from 'next/image';

export default function AboutHeroSection() {
  return (
    <section className="bg-navy-blue text-white py-16 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">
          {/* Left - Tiger Image */}
          <div className="relative w-full h-[350px] lg:h-[500px] -mb-16 lg:-mb-16">
            <Image
              src="/about-hero-image.png"
              alt="iLead Institute - Polygonal Tiger"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Right - Text Content */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Vezetőket és menedzsereket viszünk magasabb szintre
            </h1>

            <div className="space-y-3 text-base leading-relaxed mb-6">
              <p>
                Az iLead Institute Magyarországra hozza a bevált <strong>executive education rendszert, amely 25 év nemzetközi tapasztalatán alapul a vezetők fejlesztése terén.</strong>
              </p>

              <p>
                Összekapcsoljuk a menedzsment világ legújabb gyakorlati ismereteit a bevált stratégiákkal, amelyek segítik a vállalkozókat és menedzsereket a <strong>hosszú távú siker elérésében.</strong>
              </p>

              <p>
                Programjaink olyan kulcsfontosságú területekre összpontosítanak, mint a stratégia, vezetés, irányítás és értékesítés. Fejlesztési programokat valósítunk meg a vállalatok minden szintjén dolgozó menedzserek számára, inspiráló eseményeket szervezünk, és <strong className="text-orange">olyan vezetői közösséget építünk, akik hisznek a tudás átalakító erejében.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
