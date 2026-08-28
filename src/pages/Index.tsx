import Header from "@/components/0Header";
import HeroSection from "@/components/1HeroSection";
import SpecialistSection from "@/components/5HenriqueArsego";
import BentoGrid from "@/components/2DiferenciaisTecnicos";
import Verticals from "@/components/Verticals";
import ProcessTimeline from "@/components/4Metodologia";
import EcosystemFunnel from "@/components/FluxoMidias";
import TestimonialsSection from "@/components/TestimonialsSection";
import Cases from "@/components/Cases";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SpecialistSection />
        <BentoGrid />
        <Verticals />
        <ProcessTimeline />
        <EcosystemFunnel />
        <TestimonialsSection />
        <Cases />
        <ContactFormSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
