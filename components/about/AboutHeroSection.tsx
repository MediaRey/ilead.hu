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
              Vezetőket készítünk fel a jövő kihívásaira
            </h1>

            <div className="space-y-3 text-base leading-relaxed mb-6">
              <p>
                Az iLead Institute vezetőfejlesztési programjait olyan nemzetközi tapasztalatokra építi, amelyek már bizonyítottak a régióban. Szakmai partnerünk, a lengyel <strong>ICAN Institute</strong> több mint <strong>25 éve foglalkozik felsővezetők fejlesztésével Közép- és Kelet-Európában</strong>, nagyvállalati és vállalkozói környezetben egyaránt.
              </p>

              <p>
                Programjaink célja, hogy a résztvevők átgondoltabban, strukturáltabban és magabiztosabban hozzanak vezetői döntéseket komplex, gyorsan változó helyzetekben.
              </p>

              <p>
                A vezetés, a stratégia és a szervezeti működés kulcskérdéseire fókuszálunk. Képzéseink és eseményeink gyakorlati tapasztalatokra épülnek, és <strong>olyan vezetői közösséget építünk, ahol a folyamatos fejlődés a működés természetes része</strong>.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
