'use client';

import SubscriptionHeroSection from "@/components/subscription/SubscriptionHeroSection";
import MagazineCarousel from "@/components/subscription/MagazineCarousel";
import SubscriptionOrderForm from "@/components/subscription/SubscriptionOrderForm";
import MagazineChatbotSection from "@/components/subscription/MagazineChatbotSection";
import ProgramCTASection from "@/components/subscription/ProgramCTASection";

export default function SubscriptionPage() {

  return (
    <main>
        <SubscriptionHeroSection/>
        <MagazineCarousel/>
        <MagazineChatbotSection/>
        <SubscriptionOrderForm/>
        <ProgramCTASection/>
    </main>
  );
}
