'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
      <header className="fixed top-0 left-0 right-0 bg-navy-blue z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex justify-between items-center h-24">

            {/* LOGO SECTION */}
            <Link href="/" className="flex-shrink-0">
              <Image
                  src="/ilead-icon.png"
                  alt="iLead Institute"
                  width={200}
                  height={65}
                  className="h-16 w-auto object-contain"
                  priority
              />
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/about" className="text-white font-bold hover:text-[#ea8d32] transition-colors whitespace-nowrap">
                Rólunk
              </Link>
              <Link href="/be-future-ready-executive-program" className="text-white font-bold hover:text-[#ea8d32] transition-colors whitespace-nowrap">
                Be Future Ready Executive Program
              </Link>
              <Link href="/subscription" className="text-white font-bold hover:text-[#ea8d32] transition-colors whitespace-nowrap">
                Magazin előfizetés
              </Link>
              <Link href="/#mit" className="text-white font-bold hover:text-[#ea8d32] transition-colors whitespace-nowrap">
                MIT
              </Link>
              <Link href="/#faq" className="text-white font-bold hover:text-[#ea8d32] transition-colors whitespace-nowrap">
                GYIK
              </Link>
              <Link href="/#kontakt" className="text-white font-bold hover:text-[#ea8d32] transition-colors whitespace-nowrap">
                Kapcsolat
              </Link>
            </div>

            {/* MOBILE BURGER BUTTON */}
            <button
                className="lg:hidden text-white hover:text-[#ea8d32] transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* MOBILE MENU */}
          {mobileMenuOpen && (
              <div className="lg:hidden pb-6 pt-2 bg-[#08121e]">
                <div className="flex flex-col space-y-4 px-2">
                  <Link href="/about" className="text-white font-bold text-lg hover:text-[#ea8d32] transition-colors">
                    Rólunk
                  </Link>
                  <Link href="/be-future-ready-executive-program" className="text-white font-bold text-lg hover:text-[#ea8d32] transition-colors">
                    Be Future Ready Executive Program
                  </Link>
                  <Link href="/subscription" className="text-white font-bold text-lg hover:text-[#ea8d32] transition-colors">
                    Magazin előfizetés
                  </Link>
                  <a href="https://sloanreview.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-lg hover:text-[#ea8d32] transition-colors">
                    MIT
                  </a>
                  <Link href="/#faq" className="text-white font-bold text-lg hover:text-[#ea8d32] transition-colors">
                    GYIK
                  </Link>
                  <Link href="/#kontakt" className="text-white font-bold text-lg hover:text-[#ea8d32] transition-colors">
                    Kapcsolat
                  </Link>
                </div>
              </div>
          )}
        </nav>
      </header>
  );
}
