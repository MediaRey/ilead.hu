'use client';

import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Button from "@/components/Button";

const blogPosts = [
  {
    title: "A jövőre felkészült szervezet: rugalmas,...",
    excerpt: "Képes a cége megállni a helyét egy olyan korban, amikor a valóság hetente változik? A jövőre való felkészültség már...",
    image: "/organizace.jpg",
    slug: "organizace-pripravena",
    alt: "Városi séma hálózati kapcsolatokkal"
  },
  {
    title: "A jövő kompetenciái: mi fog dönteni a...",
    excerpt: "A munka világa gyorsan változik – mely készségek lesznek kulcsontosak? A technológia, automatizáció és...",
    image: "/kompetence.png",
    slug: "kompetence-budoucnosti",
    alt: "Robot 'ANALITIKUS GONDOLKODÁS' felirattal"
  },
  {
    title: "Vezetői képzések: a siker kulcsa a modern...",
    excerpt: "A mai dinamikus üzleti környezetben nem elegendő csupán az elméleti tudás. A vezetői...",
    image: "/skoleni.png",
    slug: "manazerska-skoleni",
    alt: "Könyvek és laptop grafikonokkal"
  },
  {
    title: "Jövőre felkészült vezetés: döntéshozatal a bizonytalanság idején...",
    excerpt: "Hová tart a cége – és ki vezeti oda? Egy olyan világban, ahol a változás az új állandó, a vezető szerepe alapvetően változik. Nem elég szakértőnek lenni...",
    image: "/leadership.jpg",
    slug: "celozivotni-vzdelavani",
    alt: "Könyvek képe"
  }
];

export default function BlogSection() {
  // Инициализация Embla Carousel для показа по 3 слайда
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  // Функции для навигации
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 bg-white px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Blog</h2>

        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Кнопка "Назад" - скрыта на мобильных */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex flex-shrink-0 bg-black text-white w-10 h-10 items-center justify-center hover:bg-gray-800 transition-colors rounded"
            aria-label="Previous posts"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Embla Carousel Container */}
          <div className="overflow-hidden flex-1" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-1rem)] min-w-0">
                  {/* Карточка блога */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col">
                    {/* Изображение */}
                    <div className="h-40 md:h-48 relative w-full">
                      <Image
                        src={post.image}
                        alt={post.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Текстовый блок */}
                    <div className="px-4 py-5 md:py-7 flex-1 flex flex-col">
                      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black line-clamp-2">{post.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-3">{post.excerpt}</p>
                      <div>
                        <Button
                            href={`/blog/${post.slug}`}
                            variant="third"
                            className="font-semibold px-8 md:px-16 py-3 md:py-4 rounded-md transition-colors text-sm md:text-base w-full md:w-auto text-center"
                        >
                          Tovább olvasom
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопка "Вперед" - скрыта на мобильных */}
          <button
            onClick={scrollNext}
            className="hidden md:flex flex-shrink-0 bg-black text-white w-10 h-10 items-center justify-center hover:bg-gray-800 transition-colors rounded"
            aria-label="Next posts"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
