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
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          Iratkozzon fel az MIT Sloan Management Review előfizetésére
        </h1>
        <div className="space-y-4 text-lg lg:text-xl leading-relaxed">
          <p>
            Szerezzen hozzáférést a menedzsment, innováció és vezetés exkluzív tartalmaihoz.
          </p>
          <p>
            Szakmai cikkeket hozunk a rangos MIT Sloan-ből, amelyek segítenek személyesen és szakmailag is fejlődni.
          </p>
        </div>
      </div>
    </section>
  );
}
