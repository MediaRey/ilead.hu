'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    quote: "A tanulás nem házi feladat, hanem egy izgalmas kaland. Fenntartja a kíváncsiságot, ami a 21. század egyik legfontosabb szuperkompetenciája. Tartós versenyelőnyt jelenthet: aki nemcsak reagál a változásra, hanem élvezettel tanul benne, az kevésbé sodródik, és tudatosabban alakítja a saját világát.",
    name: "Pistyur Veronika",
    position: "Bridge Budapest ügyvezető alapító, Oktogon Ventures partner",
    image: "/pistyur.jpg"
  },
  {
    quote: "A digitális technológiai forradalom új sebességre gyorsította a világunk változását. Ebben a környezetben az alkalmazkodóképesség vált a legnagyobb versenyelőnnyé, amihez gyors ciklusú, ugyanakkor folyamatos tanulásra van szükség.",
    name: "Vinnai Balázs",
    position: "IVSZ elnök, Finshape elnök, sorozatvállalkozó",
    image: "/vinnai.jpg"
  },
  {
    quote: "Az AI korszakában reális veszély, hogy azt is elfelejtjük használni, amit már tudunk. Az élethosszig tartó tanulás segít megőrizni a kíváncsiságot, a gondolati önállóságot és a rendszerszintű gondolkodást – miközben azt is megtanuljuk, mi az, amit már nyugodtan elengedhetünk.",
    name: "Lénárt Viktor",
    position: "ZEL Group ügyvezető alapító, a Grow Group korábbi ügyvezetője",
    image: "/lenart.jpg"
  },
  {
    quote: "Önmagunk és a világ felfedezése talán az egyik legizgalmasabb dolog az életben. Ha a kíváncsiságunkat és a figyelmünket a megfelelő irányba tereljük, az nemcsak a karrierünkben segít, hanem abban is, hogy az életünket méltóbban és gazdagabban éljük.",
    name: "Lencsés Gergő",
    position: "iLead Institute - Head of Faculty, a GE gázturbina operációjának korábbi globális vezetője",
    image: "/lencses.jpg"
  },
  {
    quote: "A fejlődés – és az ehhez szükséges önfejlesztés, kísérletezés, olvasás, tanácsok elfogadása és utánajárás – elengedhetetlen ahhoz, hogy ne csak a csúcson maradjunk, hanem egyáltalán a felszínen bármely gyorsan fejlődő tudományos vagy üzleti területen.",
    name: "Gauder Milán",
    position: "Mastercard korábbi globális alelnöke, sorozatvállalkozó, MIT SMR főszerkesztő",
    image: "/gauder.jpeg"
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const bgColor = "bg-[#0E2738]";
  const cardColor = "bg-[#A00230]";
  const accentColor = "text-[#A00230]";
  const arrowColor = "text-[#0E2738]";

  return (
    <section className={`${bgColor} text-white py-20 px-6 lg:px-16`}>
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-4 text-white">
          Miért érdemes <span className={accentColor}>folyamatosan tanulni?</span>
        </h2>
        <p className="text-center mb-12 text-gray-300">
          Válaszolnak a magyar vállalatok és intézmények vezető vezetői.
        </p>

        {/* Carousel container */}
        <div className="flex items-center justify-center space-x-2 md:space-x-4">
          <button
            onClick={scrollPrev}
            className={`hidden md:flex flex-shrink-0 bg-white ${arrowColor} rounded-md w-12 h-12 items-center justify-center shadow-lg hover:bg-gray-200 transition-colors z-20`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Embla Carousel Container */}
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  {/* Testimonial Card */}
                  <div className={`${cardColor} rounded-xl p-6 md:p-12 h-[500px] md:h-[450px] flex items-center shadow-2xl`}>
                    <div className="flex w-full items-center md:items-start gap-6 md:gap-12 flex-col md:flex-row h-full">
                      {/* Цитата и Информация */}
                      <div className="flex-1 order-2 md:order-1 text-center md:text-left flex flex-col justify-between h-full">
                        <div className="md:pr-4 flex-1 flex items-center">
                          <p className="text-base md:text-xl font-normal italic leading-relaxed text-white">
                            &#34;{testimonial.quote}&#34;
                          </p>
                        </div>

                        <div className="pt-4 mt-auto">
                          <p className="font-bold text-base md:text-lg text-white">
                            {testimonial.name}
                          </p>
                          <p className="text-sm md:text-base text-gray-200">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>

                      {/* Photo*/}
                      <div className="flex-shrink-0 w-32 h-32 md:w-56 md:h-56 relative rounded-full overflow-hidden shadow-2xl order-1 md:order-2">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="(max-width: 768px) 128px, 224px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            className={`hidden md:flex flex-shrink-0 bg-white ${arrowColor} rounded-md w-12 h-12 items-center justify-center shadow-lg hover:bg-gray-200 transition-colors z-20`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-[#A00230] w-8'
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
