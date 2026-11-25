'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '../Button';
import BrochureModal from '../program/BrochureModal';

export default function MasterclassHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-navy-blue text-white pt-12 lg:pt-16 px-6 lg:px-16 overflow-hidden">
      {/* Soft light behind the portrait */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_80%_45%,rgba(40,100,130,0.45)_0%,rgba(14,39,56,0)_60%)]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-end">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left mx-auto lg:mx-0 lg:self-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              My Winning Strategy with AI<br/>
              <span className="text-orange">Kétnapos AI masterclass felsővezetőknek</span>
            </h1>

            <div className="space-y-3 text-base leading-relaxed mb-6">
              <p>
                A <strong>My Winning Strategy with AI</strong> egy kétnapos masterclass, amelyet <strong>Lencsés Gergő</strong>, az iLead Institute szakmai vezetője tart.
              </p>

              <p>
                Az AI a szakmai tudást megsokszorozza, nem pedig kiváltja – a közbeszédtől eltérően.
              </p>

              <p>
                A masterclass arról szól, hogyan lesz a vezető legjobb tudásából – a jó problémáiból – <strong>valódi áttörés</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Töltse le a programleírást
              </Button>
              <a
                href="#contact-form"
                className="inline-block text-center font-semibold px-8 py-3 rounded-md border-2 border-white text-white transition-colors hover:bg-white hover:text-navy-blue"
              >
                Kapcsolatfelvétel
              </a>
            </div>
          </div>

          {/* Right - Portrait of the instructor: cropped at the chest, fading into the background */}
          <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-[400px] lg:max-w-[460px] aspect-[4/4.8] lg:aspect-[460/607] lg:-mt-[44px] lg:self-end">
            {/* Forbes logo, in the empty space beside the head */}
            <Image
              src="/brand/forbes-logo-white.svg"
              alt="Forbes Magyarország"
              width={322}
              height={85}
              className="absolute z-10 top-3 right-2 lg:top-4 lg:right-0 w-28 lg:w-36 h-auto"
            />
            <Image
              src="/masterclass/lencses.webp"
              alt="Lencsés Gergő, az iLead Institute szakmai vezetője"
              fill
              priority
              sizes="(min-width: 1024px) 460px, 400px"
              className="object-cover object-top [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
            />
            <div className="absolute bottom-6 right-0 text-right [text-shadow:0_1px_8px_rgba(14,39,56,0.9)]">
              <p className="font-bold text-lg leading-snug">Lencsés Gergővel</p>
              <p className="text-sm leading-snug text-white/85">
                az iLead Institute szakmai vezetője
                <br />
                korábban a GE globális felsővezetője
              </p>
            </div>
          </div>
        </div>
      </div>

      <BrochureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        program="masterclass"
      />
    </section>
  );
}
