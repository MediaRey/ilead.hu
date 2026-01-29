'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
      <>
        {/* Backdrop overlay for mobile menu */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
            onClick={closeMobileMenu}
          />
        )}

        <header className="fixed top-0 left-0 right-0 bg-navy-blue z-50 shadow-lg">
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
              <Link href="/" className="text-white font-bold hover:text-[#ea8d32] transition-all duration-200 whitespace-nowrap">
                Főoldal
              </Link>
              <Link href="/be-future-ready-executive-program" className="text-white font-bold hover:text-[#ea8d32] transition-all duration-200 whitespace-nowrap">
                Executive Program
              </Link>
              <Link href="/subscription" className="text-white font-bold hover:text-[#ea8d32] transition-all duration-200 whitespace-nowrap">
                Magazin
              </Link>
              <Link href="/about" className="text-white font-bold hover:text-[#ea8d32] transition-all duration-200 whitespace-nowrap">
                Rólunk
              </Link>
            </div>

            {/* MOBILE BURGER BUTTON */}
            <button
                className="lg:hidden text-white hover:text-[#ea8d32] transition-colors p-2 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="w-7 h-7 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M6 18L18 6M6 6l12 12"
                      className="animate-in"
                    />
                ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                )}
              </svg>
            </button>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="pb-6 pt-4 bg-navy-blue border-t border-white/10">
              <div className="flex flex-col space-y-1 px-2">
                <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className="text-white font-semibold text-base py-3 px-4 hover:bg-white/10 hover:text-[#ea8d32] transition-all duration-200 border-b border-white/5"
                >
                  Főoldal
                </Link>
                <Link
                  href="/be-future-ready-executive-program"
                  onClick={closeMobileMenu}
                  className="text-white font-semibold text-base py-3 px-4 hover:bg-white/10 hover:text-[#ea8d32] transition-all duration-200 border-b border-white/5"
                >
                  Executive Program
                </Link>
                <Link
                  href="/subscription"
                  onClick={closeMobileMenu}
                  className="text-white font-semibold text-base py-3 px-4 hover:bg-white/10 hover:text-[#ea8d32] transition-all duration-200 border-b border-white/5"
                >
                  Magazin
                </Link>
                <Link
                    href="/about"
                    onClick={closeMobileMenu}
                    className="text-white font-semibold text-base py-3 px-4 hover:bg-white/10 hover:text-[#ea8d32] transition-all duration-200 border-b border-white/5"
                >
                  Rólunk
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
