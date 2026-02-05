import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import AntiAgencySection from "@/components/AntiAgencySection";
import ProcessTimeline from "@/components/ProcessTimeline";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SpecialistSection from "@/components/SpecialistSection";
import FunnelJourneySection from "@/components/FunnelJourneySection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BentoGrid />
        <FunnelJourneySection />
        <SpecialistSection />        
        <div id="comparativo">
          <AntiAgencySection />
        </div>
        <div id="processo">
          <ProcessTimeline />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
