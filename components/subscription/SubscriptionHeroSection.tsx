import Image from 'next/image';

export default function SubscriptionHeroSection() {
  return (
    <section className="relative bg-navy-blue text-white py-20 px-6 lg:px-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-line-about.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Navy Blue Overlay */}
        <div className="absolute inset-0 bg-navy-blue/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Magazine Image (order-2 on mobile, order-1 on desktop) */}
          <div className="relative w-full h-[400px] lg:h-[400px] order-2 lg:order-1">
            <Image
              src="/magazine-preview.png"
              alt="MIT Sloan Management Review Magazine"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right - Text Content (order-1 on mobile, order-2 on desktop) */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Fizessen elő az MIT Sloan Management Review magyar kiadására
            </h1>
            <div className="space-y-4 text-lg lg:text-xl leading-relaxed">
              <p>
                Szerezzen hozzáférést a vezetés, innováció és menedzsment legfontosabb kérdéseit feldolgozó, exkluzív tartalmakhoz.
              </p>
              <p>
                Az MIT Sloan Management Review magyar kiadása a világ egyik vezető egyetemének kutatásait és gondolkodását hozza közelebb a hazai döntéshozókhoz – közérthetően, üzleti kontextusba helyezve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
