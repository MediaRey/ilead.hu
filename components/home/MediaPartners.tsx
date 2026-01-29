import Image from 'next/image';

export default function MediaPartners() {
  return (
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          {/* Title */}
          <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-8">
            Média partnereink:
          </h2>

          {/* Container */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">

            {/* Logo Forbes */}
            <div className="relative h-12 w-32 md:h-16 md:w-48 transition-all duration-300">
              <Image
                  src="/forbes-logo.png"
                  alt="Forbes"
                  fill
                  className="object-contain"
              />
            </div>

            {/* Logo MIT Sloan */}
            <div className="relative h-12 w-32 md:h-16 md:w-48 transition-all duration-300">
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
