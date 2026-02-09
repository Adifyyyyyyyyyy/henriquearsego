import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, Settings, Rocket, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    title: "Auditoria de Dados",
    description: "Análise completa da sua infraestrutura atual de tracking, identificando gaps e oportunidades de melhoria.",
    duration: "Semana 1",
  },
  {
    icon: Settings,
    title: "Implementação de Infra",
    description: "Configuração de CAPI, GTM Server-Side, integrações com CRM e dashboards personalizados.",
    duration: "Semanas 2-3",
  },
  {
    icon: Rocket,
    title: "Geração de Demanda",
    description: "Início das otimizações de SEO e tráfego pago com base em dados precisos e estratégias de escala.",
    duration: "Semana 4+",
  },
  {
    icon: RefreshCw,
    title: "Otimização Contínua",
    description: "Monitoramento constante, testes A/B e ajustes para maximizar ROI e reduzir custos.",
    duration: "Ongoing",
  },
];

const ProcessTimeline = () => {
  const containerRef = useRef(null);
  
  // Lógica para a linha de progresso que anima no scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef} 
      id="metodologia" 
      className="py-24 lg:py-32 bg-surface-subtle overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 text-electric text-sm font-bold mb-4 uppercase tracking-wider">
            <Settings size={14} className="animate-spin-slow" />
            Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Processo <span className="text-electric">simples e efetivo</span>
          </h2>
          <p className="text-lg text-charcoal-muted max-w-2xl mx-auto leading-relaxed">
            Do diagnóstico à escala em semanas, não meses. Uma trilha estratégica desenhada para o crescimento sustentável.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Linha Vertical de Fundo (estática) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-charcoal/10 md:-translate-x-1/2" />
          
          {/* Linha Vertical de Progresso (animada) */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-electric origin-top md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(var(--electric-rgb),0.5)]"
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
              {/* Icon Container */}
              <div className="relative z-20 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-electric text-white flex items-center justify-center shadow-[0_0_20px_rgba(var(--electric-rgb),0.4)] border-4 border-surface-subtle"
                >
                  <step.icon size={20} />
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`flex-1 md:w-[45%] ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-charcoal/5 hover:border-electric/20 transition-all duration-300 hover:shadow-md">
                  <div className={`flex mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-electric bg-electric/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-electric transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-muted text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Spacer para o layout alternado no Desktop */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="inline-block p-[1px] rounded-xl bg-gradient-to-r from-transparent via-electric/50 to-transparent mb-8 w-full max-w-lg" />
          <p className="text-charcoal-muted mb-8 text-lg">
            Pronto para começar sua transformação digital?
          </p>
          <Button 
            variant="default" 
            size="lg" 
            asChild 
            className="group bg-electric hover:bg-electric-dark text-white px-10 py-7 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-electric/20"
          >
            <a href="#contactForm" className="flex items-center gap-3">
              Agendar Consultoria
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;