import Header from "@/components/0Header";
import HeroSection from "@/components/1HeroSection";
import BentoGrid from "@/components/2DiferenciaisTecnicos";
import ProcessTimeline from "@/components/4Metodologia";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SpecialistSection from "@/components/HenriqueArsego";
import FunnelJourneySection from "@/components/3FunilJornada"
import EcosystemFunnel from "@/components/FluxoMidias"
import ConversionCalculator from "@/components/CalculadoraConversao"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactFormSection from "@/components/ContactFormSection"




const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />        
        <FunnelJourneySection />        
        <SpecialistSection />                
        <ProcessTimeline />
        <BentoGrid />
        <EcosystemFunnel />
        <TestimonialsSection />
        <ContactFormSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
