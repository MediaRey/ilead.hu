import ProgramHeroSection from '@/components/program/ProgramHeroSection';
import ProgramTopicsSection from '@/components/program/ProgramTopicsSection';
import BeFutureReadySection from '@/components/program/BeFutureReadySection';
import TargetAudienceSection from '@/components/program/TargetAudienceSection';
import InstructorsSection from '@/components/program/InstructorsSection';
import DownloadBrochureAndContactSection from '@/components/program/DownloadBrochureAndContactSection';
import ChatbotSection from "@/components/home/ChatbotSection";

export default function FutureReadyPage() {
  return (
    <main>
      <ProgramHeroSection />
      <ProgramTopicsSection />
      <BeFutureReadySection />
      <TargetAudienceSection />
      <InstructorsSection />
      <DownloadBrochureAndContactSection />
        <ChatbotSection />
    </main>
  );
}
