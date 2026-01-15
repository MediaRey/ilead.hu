import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutMissionSection from "@/components/about/AboutMissionSection";
import AboutTeamSection from "@/components/about/AboutTeamSection";
import AboutValuesSection from "@/components/about/AboutValuesSection";
import AboutCTASection from "@/components/about/AboutCTASection";


export default function AboutPage() {
  return (
      <main>
        <AboutHeroSection/>
        <AboutTeamSection/>
        <AboutMissionSection/>
        <AboutValuesSection/>
        <AboutCTASection/>
        </main>
  );
}
