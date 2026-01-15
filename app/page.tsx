import HeroSection from '@/components/home/HeroSection';
import MediaPartners from '@/components/home/MediaPartners';
import BenefitsSection from '@/components/home/BenefitsSection';
import MITPartnershipSection from '@/components/home/MITPartnershipSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ChatbotSection from '@/components/home/ChatbotSection';
import ContactFormSection from '@/components/home/ContactFormSection';
import CombinedInformationSection from "@/components/home/CombinedInformationSection";
import SocialSidebar from '@/components/SocialSidebar';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MediaPartners />
      <CombinedInformationSection/>
      <BenefitsSection />
      <MITPartnershipSection />
      <TestimonialsSection />
      <ChatbotSection />
      <ContactFormSection />
      <SocialSidebar />
    </main>
  );
}
