import Image from 'next/image';
import Button from '../Button';

export default function BeFutureReadySection() {
  return (
    <>
      {/* Top burgundy CTA section */}
      <section className="bg-burgundy text-white py-12 px-6 lg:px-16 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg lg:text-xl mb-3">
            Csatlakozzon a Future Ready Executives-hoz, és váljon olyan vezetővé, aki formálja a jövőt!
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Be Future Ready!
          </h2>
          <p className="text-lg lg:text-xl mb-6">
            Innovatív és gyakorlati alternatíva a hagyományos MBA programokhoz.
          </p>
          <Button
            href="/#kontakt"
            className="bg-navy-blue hover:bg-navy-blue/90 text-white px-8 py-3 text-base font-semibold"
          >
            Foglalja le helyét
          </Button>
        </div>
      </section>

      {/* Bottom section with tiger and benefits */}
      <section className="bg-navy-blue text-white pb-0 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-end pb-20 lg:pb-0">
            {/* Left - Tiger Image (2/5) */}
            <div className="relative w-full h-[400px] lg:h-[500px] lg:col-span-2 -mb-0 lg:-mb-0">
              <Image
                src="/tiger.png"
                alt="Future Ready Executive Program - Tiger"
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Right - Text Content (3/5) */}
            <div className="lg:col-span-3 py-20">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                <span className="text-orange">Future Ready Executive Program</span> a leghatékonyabb és legpraktikusabb alternatívát kínálja a hagyományos MBA-hoz
              </h2>

              <ul className="space-y-4 text-base lg:text-lg">
                <li className="flex items-start">
                  <span className="text-orange mr-3 mt-1">•</span>
                  <div>
                    <strong>Több rugalmasság –</strong> alkalmazkodás a tapasztalt menedzserek igényeihez.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-3 mt-1">•</span>
                  <div>
                    <strong>Gyors alkalmazás a gyakorlatban –</strong> nincs szükség felesleges elméletre, csak releváns tudás.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-3 mt-1">•</span>
                  <div>
                    <strong>Modern oktatási módszerek –</strong> interaktív workshopok, szimulációk és valós esettanulmányok.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-3 mt-1">•</span>
                  <div>
                    <strong>Exkluzív networking –</strong> szakértők közössége, tapasztalatcsere és értékes kapcsolatok kialakítása.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
