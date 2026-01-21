'use client';

import SubscriptionHeroSection from "@/components/subscription/SubscriptionHeroSection";
import MagazineCarousel from "@/components/subscription/MagazineCarousel";
import SubscriptionOrderForm from "@/components/subscription/SubscriptionOrderForm";
import MagazineChatbotSection from "@/components/subscription/MagazineChatbotSection";

export default function SubscriptionPage() {

  return (
    <main>
        <SubscriptionHeroSection/>
        <MagazineCarousel/>
        <SubscriptionOrderForm/>
        <MagazineChatbotSection/>
    </main>
  );
}
