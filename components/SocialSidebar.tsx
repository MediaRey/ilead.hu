import { Mail, Linkedin } from 'lucide-react';

export default function SocialSidebar() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {/* Email Icon */}
      <a
        href="mailto:info@ilead.cz"
        className="text-burgundy hover:text-navy-black transition-colors duration-300"
        aria-label="Email"
      >
        <Mail className="w-8 h-8" />
      </a>

      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/company/i-lead-institute-%C4%8Desko"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange hover:text-navy-black transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-8 h-8" />
      </a>
    </div>
  );
}
