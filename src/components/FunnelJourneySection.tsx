import { motion } from "framer-motion";
import { Eye, Map, Rocket } from "lucide-react";

const stages = [
  {
    icon: Eye,
    stage: "Topo do Funil",
    label: "Consciência",
    title: "Análise Diagnóstica Profunda",
    description: "Identifique exatamente onde sua operação está perdendo performance e oportunidades.",
    color: "hsl(217 91% 65%)",
  },
  {
    icon: Map,
    stage: "Meio do Funil",
    label: "Consideração",
    title: "Planejamento Estratégico Guiado",
    description: "Receba um roteiro personalizado com as ações e ferramentas ideais para otimizar seus processos.",
    color: "hsl(217 91% 55%)",
  },
  {
    icon: Rocket,
    stage: "Fundo do Funil",
    label: "Decisão",
    title: "Execução e Monitoramento Contínuo",
    description: "Implemente melhorias com confiança e acompanhe o impacto real nos seus resultados de marketing.",
    color: "hsl(217 91% 45%)",
  },
];

const FunnelJourneySection = () => {
  return (
    <section className="section-padding" style={{ background: "var(--gradient-funnel)" }}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sua Jornada de Escala com o Blueprint
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo estruturado que leva sua operação do diagnóstico à execução otimizada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Funnel Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <svg
              viewBox="0 0 300 400"
              className="w-full max-w-sm mx-auto"
              style={{ filter: "drop-shadow(0 20px 40px hsl(217 91% 60% / 0.15))" }}
            >
              {/* Funnel shape */}
              <defs>
                <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(217 91% 65%)" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="hsl(217 91% 55%)" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="hsl(217 91% 45%)" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="funnelStroke" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(217 91% 70%)" />
                  <stop offset="100%" stopColor="hsl(217 91% 50%)" />
                </linearGradient>
              </defs>
              
              {/* Main funnel body */}
              <path
                d="M 30 20 L 270 20 L 200 180 L 180 350 L 120 350 L 100 180 Z"
                fill="url(#funnelGradient)"
                stroke="url(#funnelStroke)"
                strokeWidth="2"
              />
              
              {/* Stage dividers */}
              <line x1="50" y1="120" x2="250" y2="120" stroke="white" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="110" y1="240" x2="190" y2="240" stroke="white" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="5,5" />
              
              {/* Stage labels */}
              <text x="150" y="70" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">CONSCIÊNCIA</text>
              <text x="150" y="175" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">CONSIDERAÇÃO</text>
              <text x="150" y="300" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">DECISÃO</text>
              
              {/* Arrows indicating flow */}
              <path d="M 150 90 L 145 100 L 155 100 Z" fill="white" fillOpacity="0.6" />
              <path d="M 150 195 L 145 205 L 155 205 Z" fill="white" fillOpacity="0.6" />
              <path d="M 150 315 L 145 325 L 155 325 Z" fill="white" fillOpacity="0.6" />
            </svg>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-0 w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: "hsl(var(--electric-blue) / 0.15)" }}
            >
              <Eye className="w-8 h-8 text-accent" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 right-0 w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: "hsl(var(--electric-blue) / 0.15)" }}
            >
              <Map className="w-6 h-6 text-accent" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-10 left-10 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: "hsl(var(--electric-blue) / 0.15)" }}
            >
              <Rocket className="w-5 h-5 text-accent" />
            </motion.div>
          </motion.div>

          {/* Stage descriptions */}
          <div className="space-y-6">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-6 border-l-2 py-4"
                style={{ borderColor: stage.color }}
              >
                <div 
                  className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                  style={{ background: stage.color }}
                />
                
                <div className="flex items-center gap-2 mb-2">
                  <span 
                    className="text-xs font-semibold px-2 py-1 rounded"
                    style={{ background: `${stage.color}20`, color: stage.color }}
                  >
                    {stage.label}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {stage.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunnelJourneySection;