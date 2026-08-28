import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, Compass, Settings, Rocket, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico de Canais",
    description:
      "Mapeio onde seu cliente ideal está — busca, redes sociais, indicação, marketplace — e onde sua presença hoje está fraca ou ausente.",
    duration: "Semana 1",
  },
  {
    icon: Compass,
    title: "Estratégia sob Medida",
    description:
      "Defino o caminho certo pro seu negócio: SEO, mídia social, WhatsApp, CRM ou marketplace — na combinação que faz sentido pro seu caso, não um pacote fechado.",
    duration: "Semana 2",
  },
  {
    icon: Rocket,
    title: "Implementação",
    description:
      "Coloco a estratégia em prática: Google Meu Negócio, conteúdo, atendimento organizado e presença nos canais certos.",
    duration: "Semanas 3-4",
  },
  {
    icon: RefreshCw,
    title: "Acompanhamento e Ajuste",
    description:
      "Acompanho o resultado real e ajusto o caminho conforme o negócio responde — sem depender de fórmula genérica.",
    duration: "Contínuo",
  },
];

const whatsappLink =
  "https://wa.me/5551996719696?text=Olá! Gostaria de falar sobre marketing digital para minha empresa.";

const ProcessTimeline = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      id="metodologia"
      className="py-24 lg:py-32 bg-surface-subtle overflow-hidden relative"
    >
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/5 text-accent text-xs font-mono uppercase tracking-widest mb-5">
            <Settings size={13} />
            Metodologia
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            Processo <span className="text-gradient-aurora">simples e efetivo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Do diagnóstico ao canal certo, em semanas — não meses.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-accent origin-top md:-translate-x-1/2 z-10 shadow-[0_0_10px_hsl(217_91%_60%/0.6)]"
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative flex items-center gap-8 md:gap-0 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="relative z-20 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-glow border-4 border-surface-subtle"
                >
                  <step.icon size={20} />
                </motion.div>
              </div>

              <div
                className={`flex-1 md:w-[45%] ${
                  index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                }`}
              >
                <div className="group bg-white/[0.02] rounded-2xl p-6 md:p-8 border border-white/8 hover:border-accent/25 transition-all duration-300">
                  <div className={`flex mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground mb-8 text-lg">
            Pronto pra descobrir o canal certo pro seu negócio?
          </p>
          <Button variant="cta" size="xl" asChild className="group">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              Agendar Consultoria
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
