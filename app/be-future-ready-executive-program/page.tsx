import { Metadata } from 'next';
import ProgramHeroSection from '@/components/program/ProgramHeroSection';
import ProgramTopicsSection from '@/components/program/ProgramTopicsSection';
import BeFutureReadySection from '@/components/program/BeFutureReadySection';
import TargetAudienceSection from '@/components/program/TargetAudienceSection';
import InstructorsSection from '@/components/program/InstructorsSection';
import MagazineCTASection from '@/components/program/MagazineCTASection';
import DownloadBrochureAndContactSection from '@/components/program/DownloadBrochureAndContactSection';
import ChatbotSection from "@/components/home/ChatbotSection";

export const metadata: Metadata = {
  title: 'Be Future Ready Executive Program',
  description: 'Csatlakozz a Be Future Ready Executive Programhoz. 10 hónapos gyakorlati vezetői képzés MIT alapokon. Stratégia, AI, innováció, people management. Tapasztalt oktatók, valós esettanulmányok. Indulás: 2026 április.',
  keywords: ['Be Future Ready Executive', 'executive program', 'vezetői képzés', 'MIT Sloan', 'stratégiai menedzsment', 'AI vezetés', 'innováció', 'people management', 'C-level képzés', 'ICAN Institute'],
  openGraph: {
    title: 'Be Future Ready Executive Program - iLead Institute',
    description: 'Csatlakozz a Be Future Ready Executive Programhoz. 10 hónapos gyakorlati vezetői képzés MIT alapokon.',
    url: 'https://ilead.hu/be-future-ready-executive-program',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Be Future Ready Executive Program - iLead Institute',
    description: 'Csatlakozz a Be Future Ready Executive Programhoz. 10 hónapos gyakorlati vezetői képzés.',
  },
  alternates: {
    canonical: 'https://ilead.hu/be-future-ready-executive-program',
  },
};

export default function FutureReadyPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Be Future Ready Executive Program",
    "description": "10 hónapos gyakorlati vezetői képzés MIT alapokon. Stratégia, AI, innováció, people management.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "iLead Institute",
      "url": "https://ilead.hu"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "in-person",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Budapest",
          "addressCountry": "HU"
        }
      },
      "startDate": "2026-04",
      "duration": "P10M",
      "inLanguage": "hu"
    },
    "educationalLevel": "Executive",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "C-level executives and senior managers"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <ProgramHeroSection />
      <ProgramTopicsSection />
      <BeFutureReadySection />
      <TargetAudienceSection />
      <InstructorsSection />
      <ChatbotSection />
      <DownloadBrochureAndContactSection />
      <MagazineCTASection />
    </main>
  );
}
