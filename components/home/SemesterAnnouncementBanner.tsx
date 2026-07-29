import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SemesterAnnouncementBanner() {
  return (
    <Link
      href="/be-future-ready-executive-program#semester-results"
      className="group block bg-orange text-white px-6 lg:px-16 py-3"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center text-sm lg:text-base font-medium">
        <span>
          Sikeresen elindult az első évfolyam 17 vezető részvételével. A jelentkezés már nyitva a 2026 novemberében induló következő évfolyamra.
        </span>
        <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
