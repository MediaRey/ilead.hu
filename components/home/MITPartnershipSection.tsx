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
              Nemzetközi gondolkodás, globális kitekintés
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-800">
              <p>
                Az iLead Institute a világ egyik legelismertebb üzleti tudásplatformjához,
                a <strong>MIT Sloan Management Review-hoz</strong> kapcsolódva hozza el a legfrissebb nemzetközi
                vezetői és menedzsmentgondolkodást a hazai közönség számára.
              </p>

              <p>
                A rangos magazin magyar kiadójaként olyan tartalmakat és szemléletet képviselünk,
                amelyek a <strong>kutatás és a vezetői gyakorlat</strong> metszéspontjában születnek, és világszerte
                formálják a döntéshozók gondolkodását.
              </p>

              <p>
                Oktatási és fejlesztési programjaink ebben a nemzetközi kontextusban értelmezhetők:
                a <strong>globális trendekre nyitott</strong>, előretekintő vezetői megközelítésre épülnek.
              </p>
            </div>

            <div className="mt-8">
              <a href="https://sloanreview.mit.edu/" target="_blank" rel="noopener noreferrer">
                <Button className="font-semibold px-4 sm:px-8 py-3 rounded-md transition-colors">
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
