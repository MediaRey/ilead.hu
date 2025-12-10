import Image from 'next/image';
import Button from '../Button';

export default function DownloadBrochureSection() {
  return (
    <section className="bg-navy-blue text-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-orange">Ez nem minden!</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              Töltse le a prospektust, és tudjon meg többet a programról, annak fő elveiről és arról, hogy mit jelent felkészült vezetőnek lenni a jövőre.
            </p>
            <Button
              href="/something"
              className="bg-orange hover:bg-orange/90 text-white px-8 py-3 text-base font-semibold"
            >
              Töltse le a prospektust
            </Button>
          </div>

          {/* Right - Brochure Images */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-64">
              <Image
                src="/Brochure.webp"
                alt="Future Ready Executive Program prospektusok"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
