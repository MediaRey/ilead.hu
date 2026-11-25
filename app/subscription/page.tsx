'use client';

import SubscriptionHeroSection from "@/components/subscription/SubscriptionHeroSection";
import MagazineCarousel from "@/components/subscription/MagazineCarousel";
import SubscriptionOrderForm from "@/components/subscription/SubscriptionOrderForm";
import MagazineChatbotSection from "@/components/subscription/MagazineChatbotSection";
import OfferingsSection from "@/components/OfferingsSection";

export default function SubscriptionPage() {

  return (
    <main>
        <SubscriptionHeroSection/>
        <MagazineCarousel/>
        <MagazineChatbotSection/>
        <SubscriptionOrderForm/>
        <OfferingsSection current="magazine" />
    </main>
  );
}
