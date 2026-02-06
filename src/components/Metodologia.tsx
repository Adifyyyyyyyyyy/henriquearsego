import { motion } from "framer-motion";
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
  const whatsappLink = "https://wa.me/5551996719696?text=Olá! Gostaria de agendar um diagnóstico para minha empresa.";

  return (
    <section id="metodologia" className="py-24 lg:py-32 bg-surface-subtle">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 text-electric text-sm font-medium mb-4">
            <Settings size={16} />
            Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Processo <span className="text-electric">simples e efetivo</span>
          </h2>
          <p className="text-lg text-charcoal-muted max-w-2xl mx-auto">
            Do diagnóstico à escala em semanas, não meses. Uma metodologia testada para resultados rápidos.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric via-electric/50 to-electric/20 md:-translate-x-0.5" />

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-start gap-6 md:gap-12 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-electric flex items-center justify-center shadow-glow">
                    <step.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-card rounded-2xl p-6 shadow-card border border-charcoal/5 transition-shadow duration-300 hover:shadow-card-hover"
                  >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      <span className="text-xs font-semibold text-electric bg-electric/10 px-2 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{step.title}</h3>
                    <p className="text-charcoal-muted leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="text-center mt-16 px-4" // Adicionado padding lateral para telas pequenas
>
  <p className="text-charcoal-muted mb-6">
    Pronto para começar sua transformação digital?
  </p>
  <Button 
    variant="cta" 
    size="xl" 
    asChild 
    className="group h-auto py-4 px-8 whitespace-normal max-w-full"
  >
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center justify-center gap-2 text-center"
    >
      <span className="flex-1">Agendar Diagnóstico Gratuito</span>
      <ArrowRight className="shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  </Button>
</motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
