'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    quote: "Za klíčové dovednosti manažerů a lídrů považuji zejména schopnost jasně definovat cíle napříč všemi úrovněmi organizace a také schopnost chápat a vyvažovat dlouhodobé strategické vize s každodenní realitou dynamicky se měnícího trhu.",
    name: "Dr. Zdeněk Kaufmann",
    position: "Managing Partner Amrop, Dr. Kaufmann & Partner Inc.",
    image: "/kaufmann.jpg"
  },
  {
    quote: "V byznysu jde o konkrétní akce, nikoli o teorii. Future Ready Executive Program přináší praktické nástroje a strategické dovednosti, které lídrům pomáhají okamžitě reagovat na změny a posilovat svou pozici.",
    name: "Tomasz Wiatrak",
    position: "Co-founder iLead Institute, Executive Advisor and Investor",
    image: "/wiatrak.jpeg"
  },
  {
    quote: "Vzdělávání je pro mě nejlepší investicí – posiluje sebevědomí, udržuje mysl v kondici a přináší nadhled i rovnováhu. Umožnilo mi založit vlastní firmu a potkat lidi, kteří mě hodnotově obohatili.",
    name: "Jiřina Nepalová",
    position: "ředitelka RENOMIA GROUP",
    image: "/nepalova.png"
  },
  {
    quote: "Celoživotní vzdělávání je nezbytné. Otvírá nám to nové perspektivy, buduje vztahy, zvyšuje naši hodnotu, přináší nápady a řešení. A někdy nás to může i posunout mimo naši komfortní zónu. Takové vzdělávání mám nejradši.",
    name: "Pavla Nýdrle",
    position: "česká podnikatelka a manažerka, ředitelka volební kampaně prezidenta Petra Pavla",
    image: "/nydrie.png"
  },
  {
    quote: "Celoživotní vzdělávání je nezbytné nejen proto, že nám umožňuje držet krok s neustálými změnami, ale také proto, že nás vede k růstu jako jednotlivce i lídry.",
    name: "Marcel Gajdoš",
    position: "General Manager Czechia, Hungary & Slovakia, Visa",
    image: "/gajdos.jpg"
  },
];

export default function TestimonialsSection() {
  // Инициализация Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30, // Длительность анимации в мс
  });

  // Функции для навигации
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Состояние для индикаторов
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Обновление выбранного индекса
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

  // Цветовые константы
  const bgColor = "bg-[#0E2738]";
  const cardColor = "bg-[#A00230]";
  const accentColor = "text-[#A00230]";
  const arrowColor = "text-[#0E2738]";

  return (
    <section className={`${bgColor} text-white py-20 px-6 lg:px-16`}>
      <div className="max-w-5xl mx-auto">
        {/* Заголовок */}
        <h2 className="text-4xl font-extrabold text-center mb-4 text-white">
          Miért érdemes <span className={accentColor}>folyamatosan tanulni?</span>
        </h2>
        <p className="text-center mb-12 text-gray-300">
          Válaszolnak a magyar vállalatok és intézmények vezető vezetői.
        </p>

        {/* Контейнер карусели */}
        <div className="flex items-center justify-center space-x-4">
          {/* Кнопка "Назад" */}
          <button
            onClick={scrollPrev}
            className={`flex-shrink-0 bg-white ${arrowColor} rounded-md w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors z-20`}
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
                  <div className={`${cardColor} rounded-xl p-8 md:p-12 min-h-[400px] flex items-center shadow-2xl`}>
                    <div className="flex w-full items-start gap-12 flex-col md:flex-row">
                      {/* Цитата и Информация */}
                      <div className="flex-1 order-2 md:order-1">
                        <div className="pr-4 md:pr-0">
                          <p className="text-xl md:text-2xl font-normal italic mb-6 leading-relaxed text-white">
                            &#34;{testimonial.quote}&#34;
                          </p>
                        </div>

                        <div className="pt-2">
                          <p className="font-bold text-lg text-white">
                            {testimonial.name}
                          </p>
                          <p className="text-base text-gray-200">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>

                      {/* Фото человека */}
                      <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 relative rounded-full overflow-hidden shadow-2xl order-1 md:order-2 mx-auto md:mx-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="224px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопка "Вперед" */}
          <button
            onClick={scrollNext}
            className={`flex-shrink-0 bg-white ${arrowColor} rounded-md w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors z-20`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Индикаторы (точки) */}
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
