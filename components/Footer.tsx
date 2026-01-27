import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/ilead-icon-reverse.png"
                alt="iLead Institute"
                width={200}
                height={65}
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          <div>
            <h3 className="font-bold mb-4">Linkek</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-700 hover:text-orange transition-colors">
                  Honlap
                </Link>
              </li>
              <li>
                <Link href="/be-future-ready-executive-program" className="text-gray-700 hover:text-orange transition-colors">
                  Executive Program
                </Link>
              </li>
              <li>
                <Link href="/subscription" className="text-gray-700 hover:text-orange transition-colors">
                  Magazin
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-orange transition-colors">
                  Rólunk
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Közösségi média</h3>
            <div className="flex space-x-4">
              <a href="mailto:mark.kurbucz@forbes.hu" className="text-burgundy hover:text-orange transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/mit-sloan-management-review-hungary" className="text-burgundy hover:text-orange transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} iLead Institute. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
}
