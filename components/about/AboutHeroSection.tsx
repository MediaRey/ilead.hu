import Image from 'next/image';

export default function AboutHeroSection() {
  return (
    <section className="relative bg-navy-blue text-white min-h-[600px] flex items-center overflow-hidden">
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-hero-image.png"
          alt="iLead Institute - Polygonal Tiger"
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
            Vezetőket és menedzsereket viszünk magasabb szintre
          </h1>

          <div className="space-y-4 text-base lg:text-lg leading-relaxed">
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
    </section>
  );
}
