'use client';

import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Button from "@/components/Button";

const blogPosts = [
  {
    title: "Organizace připravená na budoucnost: flexibilní,...",
    excerpt: "Dokáže vaše firma obstát v době, kdy se realita mění každý týden? Být připraven na budoucnost už...",
    image: "/organizace.jpg",
    slug: "organizace-pripravena",
    alt: "Схема города с сетевыми соединениями"
  },
  {
    title: "Kompetence budoucnosti: co bude rozhodovat o...",
    excerpt: "Svět práce se rychle mění – jaké dovednosti budou klíčové? Technologie, automatizace a...",
    image: "/kompetence.png",
    slug: "kompetence-budoucnosti",
    alt: "Робот с текстом 'АНАЛИТИЧЕСКОЕ МЫШЛЕНИЕ'"
  },
  {
    title: "Manažerská školení: klíč k úspěchu v moderním...",
    excerpt: "V dnešní dynamické době v podnikání nestačí pouze teoretické znalosti. Manažerská...",
    image: "/skoleni.png",
    slug: "manazerska-skoleni",
    alt: "Книги и ноутбук с графиками"
  },
  {
    title: "Leadership připravený na budoucnost: rozhodování v čase nejistoty...",
    excerpt: "Kam směřuje vaše firma – a kdo ji tam vede? Ve světě, kde je změna novou konstantou, se role lídra zásadně mění. Nestačí být odborníkem ani...",
    image: "/leadership.jpg",
    slug: "celozivotni-vzdelavani",
    alt: "Изображение книг"
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
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Blog</h2>

        <div className="flex items-center space-x-4">
          {/* Кнопка "Назад" */}
          <button
            onClick={scrollPrev}
            className="flex-shrink-0 bg-black text-white w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition-colors rounded"
            aria-label="Previous posts"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Embla Carousel Container */}
          <div className="overflow-hidden flex-1" ref={emblaRef}>
            <div className="flex gap-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="flex-[0_0_calc(33.333%-1rem)] min-w-0">
                  {/* Карточка блога */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col">
                    {/* Изображение */}
                    <div className="h-48 relative w-full">
                      <Image
                        src={post.image}
                        alt={post.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Текстовый блок */}
                    <div className="px-4 py-7 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-black line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div>
                        <Button
                            href={`/blog/${post.slug}`}
                            variant="third"
                            className="font-semibold px-16 py-4 rounded-md transition-colors "
                        >
                          Číst více
                        </Button>
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
            className="flex-shrink-0 bg-black text-white w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition-colors rounded"
            aria-label="Next posts"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
