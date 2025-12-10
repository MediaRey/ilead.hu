import Image from 'next/image';
import Button from '../Button';

export default function MITPartnershipSection() {
  return (
    <section id="mit" className="py-20 bg-gray-100 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text content */}
          <div>
            <h2 className="text-4xl font-bold mb-8">
              MIT partnerségünk – <span className="text-burgundy">Globális szintű oktatás</span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-800">
              <p>
                Együttműködünk a világ egyik legrangosabb egyetemével – az MIT-vel,
                hogy biztosítsuk, hogy oktatási programjaink megfelelnek a{' '}
                <strong>legmagasabb nemzetközi standardoknak.</strong>
              </p>

              <p>
                Kiadói vagyunk a rangos menedzsment magazin magyar kiadásának,{' '}
                <span className="text-orange font-semibold">MIT Sloan Management Review</span>,
                amely összeköti a menedzsereket a kutatás és a gyakorlat legújabb eredményeivel
                a világ élvonalában a vezetés területén.
              </p>

              <p>
                Az MIT bevált tapasztalataiból és legújabb megközelítéseiből merítünk, ami biztosítja,
                hogy oktatási programjaink mindig <strong>világszínvonalúak.</strong>
              </p>
            </div>

            <div className="mt-8">
              <a href="https://sloanreview.mit.edu/" target="_blank" rel="noopener noreferrer">
                <Button className="font-semibold px-8 py-3 rounded-md transition-colors">
                  Látogassa meg az MIT Sloan Review-t
                </Button>
              </a>
            </div>
          </div>

          {/* Right magazine covers image */}
          <div className="flex justify-center items-center">
            <Image
              src="/Magazin.png"
              alt="MIT Sloan Management Review magazines"
              width={700}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
