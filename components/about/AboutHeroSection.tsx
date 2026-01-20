import Image from 'next/image';

export default function AboutHeroSection() {
  return (
    <section className="relative bg-navy-blue text-white py-16 px-6 lg:px-16 overflow-hidden">
      {/* --- BACKGROUND IMAGE FOR MOBILE ONLY --- */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src="/about-hero-image.png"
          alt="iLead Institute - Polygonal Tiger"
          fill
          priority
          className="object-cover object-right"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-blue via-navy-blue/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">
          {/* Left - Tiger Image (DESKTOP ONLY) */}
          <div className="hidden lg:block relative w-full h-[500px] -mb-16">
            <Image
              src="/about-hero-image.png"
              alt="iLead Institute - Polygonal Tiger"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Right - Text Content */}
          <div className="text-center lg:text-left mx-auto lg:mx-0">
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
