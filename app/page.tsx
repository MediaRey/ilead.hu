import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import MediaPartners from '@/components/home/MediaPartners';
import BenefitsSection from '@/components/home/BenefitsSection';
import MITPartnershipSection from '@/components/home/MITPartnershipSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CombinedInformationSection from "@/components/home/CombinedInformationSection";
import CTACardsSection from '@/components/home/CTACardsSection';
import SocialSidebar from '@/components/SocialSidebar';

export const metadata: Metadata = {
  title: 'iLead Institute - A vezetésfejlesztés kiválósági központja',
  description: 'Vezetőket és menedzsereket viszünk magasabb szintre. MIT partnerség, szakértői képzések, executive programok, vezetői fejlesztés Magyarországon.',
  keywords: ['vezetésfejlesztés', 'menedzsment képzés', 'executive program', 'MIT Sloan Management Review', 'vezetői képzés', 'stratégiai menedzsment', 'üzleti képzés', 'ICAN Institute'],
  openGraph: {
    title: 'iLead Institute - A vezetésfejlesztés kiválósági központja',
    description: 'Vezetőket és menedzsereket viszünk magasabb szintre. MIT partnerség, szakértői képzések.',
    url: 'https://ilead.hu',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iLead Institute - A vezetésfejlesztés kiválósági központja',
    description: 'Vezetőket és menedzsereket viszünk magasabb szintre.',
  },
  alternates: {
    canonical: 'https://ilead.hu',
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MediaPartners />
      <CombinedInformationSection/>
      <BenefitsSection />
      <MITPartnershipSection />
      <TestimonialsSection />
      <CTACardsSection />
      <SocialSidebar />
    </main>
  );
}
