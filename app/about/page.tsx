import { Metadata } from 'next';
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutMissionSection from "@/components/about/AboutMissionSection";
import AboutTeamSection from "@/components/about/AboutTeamSection";
import AboutValuesSection from "@/components/about/AboutValuesSection";
import AboutCTASection from "@/components/about/AboutCTASection";

export const metadata: Metadata = {
  title: 'Rólunk',
  description: 'Ismerd meg az iLead Institute csapatát és küldetését. A vezetésfejlesztés kiválósági központja Magyarországon. 25 év nemzetközi tapasztalat, ICAN Institute partnerség.',
  keywords: ['iLead Institute', 'rólunk', 'csapat', 'küldetés', 'vezetésfejlesztés', 'ICAN Institute', 'oktatók', 'szakértők'],
  openGraph: {
    title: 'Rólunk - iLead Institute',
    description: 'Ismerd meg az iLead Institute csapatát és küldetését. A vezetésfejlesztés kiválósági központja Magyarországon.',
    url: 'https://ilead.hu/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rólunk - iLead Institute',
    description: 'Ismerd meg az iLead Institute csapatát és küldetését.',
  },
  alternates: {
    canonical: 'https://ilead.hu/about',
  },
};

export default function AboutPage() {
  return (
      <main>
        <AboutHeroSection/>
        <AboutMissionSection/>
        <AboutTeamSection/>

        <AboutValuesSection/>
        <AboutCTASection/>
        </main>
  );
}
