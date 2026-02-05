import Image from 'next/image';
import Link from 'next/link';

export default function ProgramCTASection() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-lg mx-auto">
        {/* Card - Executive Program */}
        <Link
          href="/be-future-ready-executive-program"
          className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 block"
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
      </div>
    </section>
  );
}
