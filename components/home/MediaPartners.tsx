import Image from 'next/image';

export default function MediaPartners() {
  return (
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          {/* Title */}
          <h2 className="text-lg font-bold text-black uppercase tracking-wider mb-8">
            MÉDIA PARTNEREK
          </h2>

          {/* Container */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">

            {/* Logo Forbes */}
            <div className="relative h-8 w-24 md:h-10 md:w-32 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                  src="/forbes-logo.png"
                  alt="Forbes"
                  fill
                  className="object-contain"
              />
            </div>

            {/* Logo MIT Sloan */}
            <div className="relative h-10 w-40 md:h-12 md:w-56 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                  src="/mitsloan_logo.png"
                  alt="MIT Sloan Management Review"
                  fill
                  className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>
  );
}
