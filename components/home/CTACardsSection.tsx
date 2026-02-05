import Image from 'next/image';
import Link from 'next/link';

export default function CTACardsSection() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 - Executive Program */}
          <Link
            href="/be-future-ready-executive-program"
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/program-image.png"
                alt="Be Future Ready Executive Program"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-blue via-navy-blue/50 to-transparent"></div>
            </div>

            <div className="p-8 flex items-center justify-center">
              <button className="bg-orange text-white font-bold text-xl px-12 py-4 rounded-lg hover:bg-orange/90 transition-colors w-full">
                Tovább a programra
              </button>
            </div>
          </Link>

          {/* Card 2 - Magazine Subscription */}
          <Link
            href="/subscription"
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/magazines/page1.png"
                alt="MIT Sloan Management Review Magazine"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-blue via-navy-blue/50 to-transparent"></div>
            </div>

            <div className="p-8 flex items-center justify-center">
              <button className="bg-orange text-white font-bold text-xl px-12 py-4 rounded-lg hover:bg-orange/90 transition-colors w-full">
                Tovább a magazinra
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
