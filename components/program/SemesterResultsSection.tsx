'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Button from '../Button';

const PHOTO_COUNT = 18;
const INITIAL_VISIBLE = 8;

const gallery = Array.from({ length: PHOTO_COUNT }, (_, i) => ({
  src: `/semester-1/semester-1-${i + 1}.jpg`,
  alt: `Be Future Ready Executive Program - 1. évfolyam, ${i + 1}. kép`,
}));

export default function SemesterResultsSection() {
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const showPrev = () => setActiveIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
  const showNext = () => setActiveIndex((i) => (i === null ? i : (i + 1) % gallery.length));

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex]);

  const visiblePhotos = showAll ? gallery : gallery.slice(0, INITIAL_VISIBLE);

  return (
    <section id="semester-results" className="py-20 bg-gray-50 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-4 text-black">
          Sikeresen elindult az első évfolyam
        </h2>
        <p className="text-center text-lg mb-12 text-gray-700 max-w-4xl mx-auto">
          A Be Future Ready Executive Program első évfolyama 17 kiemelkedő vezető részvételével indult el, és pozitív visszajelzések mellett halad tovább.
        </p>

        {/* Photo Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {visiblePhotos.map((photo, index) => (
            <button
              key={photo.src}
              onClick={() => setActiveIndex(index)}
              className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        {gallery.length > INITIAL_VISIBLE && (
          <div className="flex justify-center mb-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-orange text-white font-semibold px-8 py-3 rounded-md transition-colors hover:bg-orange/90"
            >
              {showAll ? 'Kevesebb fotó megtekintése' : `Összes fotó megtekintése (${gallery.length})`}
            </button>
          </div>
        )}

        {/* Apply for next semester CTA */}
        <div className="bg-navy-blue rounded-2xl px-6 py-12 lg:px-16 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Tudjon meg többet a következő évfolyamról!
          </h3>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            A következő évfolyam 2026 novemberében indul. Ismerje meg a programot, amely új szemléletet, azonnal alkalmazható tudást és egy meghatározó vezetői közösséget ad. Adja meg elérhetőségeit, és kollégánk hamarosan felveszi Önnel a kapcsolatot.
          </p>
          <Button
            href="#contact-form"
            className="font-semibold px-10 py-4 rounded-md transition-colors text-lg"
          >
            Érdekel a program
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Bezárás"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 lg:left-8 text-white/80 hover:text-white transition-colors"
            aria-label="Előző kép"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div
            className="relative w-full max-w-4xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[activeIndex].src}
              alt={gallery[activeIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 lg:right-8 text-white/80 hover:text-white transition-colors"
            aria-label="Következő kép"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-4 text-white/80 text-sm">
            {activeIndex + 1} / {gallery.length}
          </div>
        </div>
      )}
    </section>
  );
}
