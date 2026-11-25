import type { Metadata } from 'next';
import MasterclassHeroSection from '@/components/masterclass/MasterclassHeroSection';
import MasterclassOverviewSection from '@/components/masterclass/MasterclassOverviewSection';
import MasterclassDaysSection from '@/components/masterclass/MasterclassDaysSection';
import MasterclassOutcomesSection from '@/components/masterclass/MasterclassOutcomesSection';
import MasterclassDetailsSection from '@/components/masterclass/MasterclassDetailsSection';
import MasterclassChatbotSection from '@/components/masterclass/MasterclassChatbotSection';
import DownloadBrochureAndContactSection from '@/components/program/DownloadBrochureAndContactSection';
import OfferingsSection from '@/components/OfferingsSection';

const description =
  'Kétnapos AI masterclass felsővezetőknek Lencsés Gergővel, az iLead Institute szakmai vezetőjével. Hogyan lesz a vezető legjobb tudásából valódi áttörés az AI segítségével.';

export const metadata: Metadata = {
  title: 'My Winning Strategy with AI – kétnapos AI masterclass',
  description,
  keywords: [
    'AI masterclass',
    'mesterséges intelligencia vezetőknek',
    'AI stratégia',
    'felsővezetői képzés',
    'Lencsés Gergő',
    'iLead Institute',
  ],
  openGraph: {
    title: 'My Winning Strategy with AI – iLead Institute',
    description,
    url: 'https://ilead.hu/ai-masterclass',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Winning Strategy with AI – iLead Institute',
    description,
  },
  alternates: {
    canonical: 'https://ilead.hu/ai-masterclass',
  },
};

export default function AIMasterclassPage() {
  // Deliberately no dates: the masterclass runs several times, so the page stays evergreen.
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'My Winning Strategy with AI',
    description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'iLead Institute',
      url: 'https://ilead.hu',
    },
    inLanguage: 'hu',
    educationalLevel: 'Executive',
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'Business owners, CEOs and senior executives',
    },
    offers: {
      '@type': 'Offer',
      price: '1600',
      priceCurrency: 'EUR',
      category: 'Paid',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'in-person',
      inLanguage: 'hu',
      location: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Budapest',
          addressCountry: 'HU',
        },
      },
      instructor: {
        '@type': 'Person',
        name: 'Lencsés Gergő',
        jobTitle: 'Head of Faculty, iLead Institute',
      },
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <MasterclassHeroSection />
      <MasterclassOverviewSection />
      <MasterclassDaysSection />
      <MasterclassOutcomesSection />
      <MasterclassDetailsSection />
      <MasterclassChatbotSection />
      <DownloadBrochureAndContactSection
        program="masterclass"
        title="Tudjon meg többet a masterclassról!"
        heading="Minden részlet egy helyen"
        description="Töltse le a masterclass programleírását, és ismerje meg a két nap felépítését, várható eredményeit és az oktatót. Kérdése van? Írjon nekünk, és munkatársunk hamarosan felveszi Önnel a kapcsolatot."
        buttonLabel="Töltse le a programleírást"
        previewSrc="/masterclass/preview.png"
        previewAlt="My Winning Strategy with AI masterclass programleírás"
      />
      <OfferingsSection current="masterclass" />
    </main>
  );
}
