import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Database, Zap } from "lucide-react";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5551996719696?text=Olá! Gostaria de agendar um diagnóstico para minha empresa.";

  return (
    <section className="relative min-h-screen flex items-center section-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-electric/3 rounded-full blur-3xl" />
        <motion.div 
          className="absolute top-1/3 right-1/4 text-electric/10"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <BarChart3 size={120} strokeWidth={1} />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-1/3 text-charcoal/5"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Database size={80} strokeWidth={1} />
        </motion.div>
      </div>

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 text-electric text-sm font-medium mb-8"
          >
            <Zap size={16} />
            Consultoria em Marketing Digital & Data Intelligence
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-tight tracking-tight mb-6"
          >
            Sua operação de marketing{" "}
            <span className="relative">
              <span className="relative z-10">não precisa de mais tráfego</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-electric/20 -z-0" />
            </span>
            ,{" "}
            <span className="text-electric">precisa de mais dados.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal-muted max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Consultoria especializada em{" "}
            <span className="text-charcoal font-medium">tráfego pago</span> (Meta, Google, TikTok),{" "}
            <span className="text-charcoal font-medium">tagueamento avançado</span> (CAPI/GTM),{" "}
            <span className="text-charcoal font-medium">dashboards em tempo real</span> e{" "}
            <span className="text-charcoal font-medium">automação de processos</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
    variant="cta" 
    size="xl" 
    asChild
    className="group h-auto min-h-[64px] py-4 px-6 whitespace-normal w-full sm:w-auto max-w-[400px]"
  >
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 text-center"
    >
      <span className="flex-1 leading-tight">
        Agendar Diagnóstico Gratuito
      </span>
      <ArrowRight className="shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#diferenciais">
                Ver Diferenciais
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-charcoal-muted text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Implementação em até 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>+78 empresas atendidas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>+R$2m auditados</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-charcoal/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-charcoal/30 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
