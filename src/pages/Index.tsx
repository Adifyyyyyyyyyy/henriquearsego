import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/DiferenciaisTecnicos";
import ProcessTimeline from "@/components/Metodologia";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SpecialistSection from "@/components/HenriqueArsego";
import FunnelJourneySection from "@/components/FunilJornada"
import EcosystemFunnel from "@/components/FluxoMidias"
import ConversionCalculator from "@/components/CalculadoraConversao"
import TestimonialsSection from "@/components/TestimonialsSection"


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BentoGrid />
        <FunnelJourneySection />
        <EcosystemFunnel />
        <SpecialistSection />        
        <ProcessTimeline />
        <ConversionCalculator />
        <TestimonialsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
