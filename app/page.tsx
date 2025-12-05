import HeroSection from '@/components/home/HeroSection';
import MediaPartners from '@/components/home/MediaPartners';
import BenefitsSection from '@/components/home/BenefitsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogSection from '@/components/home/BlogSection';
import FAQSection from '@/components/home/FAQSection';
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
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <ContactFormSection />
      <SocialSidebar />
    </main>
  );
}
