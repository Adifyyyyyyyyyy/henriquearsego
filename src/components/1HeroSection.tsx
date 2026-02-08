import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Database } from "lucide-react";

const HeroSection = () => {
  const whatsappLink =
    "https://wa.me/5551996719696?text=Olá! Gostaria de agendar um diagnóstico para minha empresa.";

  const users = [
    "https://framerusercontent.com/images/ETgoVdeITLLIYCHTFNeVuZDMyQY.png",
    "https://framerusercontent.com/images/bnJJiW5Vfixlrz7M2pzoeyHBU.png",
    "https://framerusercontent.com/images/rlizSNVuxrrqd6I5hGaSxwqn0I.png",
    "https://framerusercontent.com/images/X0pqhTmlK8gdYqPbljhuLXlyd0I.png",
  ];

  return (
    <section className="relative flex items-center section-gradient overflow-hidden min-h-[90svh] lg:min-h-screen">

      {/* Background visuals (non-blocking) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden sm:block absolute top-20 right-20 w-80 h-80 bg-electric/5 rounded-full blur-3xl" />
        <div className="hidden sm:block absolute bottom-20 left-20 w-72 h-72 bg-electric/3 rounded-full blur-3xl" />

        <motion.div
          className="hidden lg:block absolute top-1/3 right-1/4 text-electric/10"
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <BarChart3 size={110} strokeWidth={1} />
        </motion.div>

        <motion.div
          className="hidden lg:block absolute bottom-1/4 left-1/3 text-charcoal/5"
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Database size={80} strokeWidth={1} />
        </motion.div>
      </div>

      <div className="container relative z-10 px-4 py-20 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          {/* H1 — LCP element */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-[1.15] tracking-tight mb-10">
  Consultoria de{" "}
  <span className="relative inline-block mr-2">
    <span className="relative z-10">Marketing Digital</span>
    <span className="absolute bottom-2 left-0 right-0 h-3 bg-electric/20 -z-0" />
  </span>
  <span className="block text-electric mt-2 sm:mt-1 text-3xl sm:text-4xl lg:text-4xl font-semibold">
    Orientada por Dados para Destravar Resultados
  </span>
</h1>



          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-charcoal-muted max-w-3xl mb-10 sm:mb-12 leading-relaxed">
            <span className="text-charcoal font-medium">Analiso</span> toda a
            jornada, canais e métricas do seu marketing para mostrar exatamente{" "}
            <span className="text-charcoal font-medium">
              o que funciona, o que está travando o crescimento e onde investir
            </span>.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2 w-full">
            <Button
              variant="cta"
              size="xl"
              asChild
              className="group min-h-[64px] w-full sm:w-auto sm:min-w-[320px]"
            >
              <a
                href="#contactForm"
                className="flex items-center justify-center gap-3"
              >
                <span>Solicitar Diagnóstico</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Micro-copy */}
          <p className="text-sm text-charcoal-muted mb-8">
            Análise estratégica sem compromisso
          </p>


          {/* Social proof */}
          <div className="inline-flex items-center gap-4 bg-white/5 border border-charcoal/10 px-4 py-2 rounded-full backdrop-blur-sm mb-10">
            <div className="flex -space-x-3">
              {users.map((url, index) => (
                <div
                  key={index}
                  className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-slate-200"
                >
                  <img
                    src={url}
                    alt="Cliente atendido"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={28}
                    height={28}
                  />
                </div>
              ))}
            </div>
            <div className="text-xs font-medium text-charcoal-muted">
              <span>Junte-se a </span>
              <span className="text-electric font-bold">+78</span>
              <span> empresas atendidas</span>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-charcoal-muted text-sm">
            <span>🟢 Implementação em até 7 dias</span>
            <span>🟢 +78 empresas atendidas</span>
            <span>🟢 +R$2m auditados</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
