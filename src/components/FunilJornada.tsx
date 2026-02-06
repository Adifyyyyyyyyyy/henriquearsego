import { motion } from "framer-motion";
import { Eye, Map, Rocket } from "lucide-react";

const stages = [
  {
    icon: Eye,
    stage: "Topo do Funil",
    label: "Consciência",
    title: "Atração Qualificada (Tráfego & SEO)",
    description: "Onde tudo começa. Campanhas de Tráfego Pago (Meta/Google Ads) e otimização de SEO para colocar sua marca na frente de quem realmente busca sua solução. O objetivo aqui é gerar tráfego qualificado, atraindo os olhos certos para o seu negócio.",
    color: "hsl(217 91% 65%)",
  },
  {
    icon: Map,
    stage: "Meio do Funil",
    label: "Consideração",
    title: "Conversão de Alta Performance (Landing Pages)",
    description: "Transformamos visitantes em leads. Através de Landing Pages otimizadas para conversão e copy persuasivo, capturamos o contato do seu potencial cliente. É o momento de filtrar os curiosos e identificar quem está pronto para avançar.",
    color: "hsl(217 91% 55%)",
  },
  {
    icon: Rocket,
    stage: "Fundo do Funil",
    label: "Decisão",
    title: "Fechamento e Inteligência (CRM & Vendas)",
    description: "Onde o lucro acontece. Integramos todos os dados ao seu CRM, permitindo que sua equipe de vendas atue no momento exato. Com automação e rastreamento, garantimos que nenhum lead se perca e que cada investimento em campanha seja mensurável.",
    color: "hsl(217 91% 45%)",
  },
];

const FunnelJourneySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-charcoal">
            Estrutura Automática de <span className="text-electric">Atração e Conversão</span>
          </h2>
          <p className="text-lg text-charcoal-muted max-w-2xl mx-auto">
            Entenda como transformo desconhecidos em clientes fiéis através de um ecossistema de dados e tecnologia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual do Funil (SVG Ajustado) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <svg
              viewBox="0 0 320 400"
              className="w-full max-w-sm mx-auto"
              style={{ filter: "drop-shadow(0 20px 40px rgba(37, 99, 235, 0.15))" }}
            >
              <defs>
                <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(217 91% 65%)" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="hsl(217 91% 55%)" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="hsl(217 91% 45%)" stopOpacity="1" />
                </linearGradient>
              </defs>
              
              {/* Path redesenhado para ser mais largo no meio (Consideração) */}
              <path
                d="M 10 20 L 310 20 L 230 180 L 200 350 L 120 350 L 90 180 Z"
                fill="url(#funnelGradient)"
                stroke="white"
                strokeOpacity="0.2"
                strokeWidth="1"
              />
              
              {/* Divisórias Tracejadas */}
              <line x1="40" y1="120" x2="280" y2="120" stroke="white" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="105" y1="240" x2="215" y2="240" stroke="white" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="5,5" />
              
              {/* Textos Internos Centralizados */}
              <text x="160" y="70" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" className="tracking-widest">CONSCIÊNCIA</text>
              <text x="160" y="185" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" className="tracking-widest">CONSIDERAÇÃO</text>
              <text x="160" y="300" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" className="tracking-widest">DECISÃO</text>
              
              {/* Setas de Fluxo apontando para BAIXO */}
              <path d="M 156 95 L 164 95 L 160 103 Z" fill="white" fillOpacity="0.7" />
              <path d="M 156 205 L 164 205 L 160 213 Z" fill="white" fillOpacity="0.7" />
              <path d="M 156 315 L 164 315 L 160 323 Z" fill="white" fillOpacity="0.7" />
            </svg>

            {/* Ícones Flutuantes Decorativos */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-[-10px] w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center border border-blue-50"
            >
              <Eye className="w-7 h-7 text-blue-500" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 right-[-10px] w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-blue-50"
            >
              <Map className="w-6 h-6 text-blue-500" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-10 left-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-blue-50"
            >
              <Rocket className="w-5 h-5 text-blue-600" />
            </motion.div>
          </motion.div>

          {/* Cards de Descrição Laterais */}
          <div className="space-y-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-8 border-l-4 py-2 group"
                style={{ borderColor: stage.color }}
              >
                <div 
                  className="absolute left-[-10px] top-0 w-4 h-4 rounded-full border-2 border-white shadow-sm"
                  style={{ background: stage.color }}
                />
                
                <div className="flex items-center gap-2 mb-3">
                  <span 
                    className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded"
                    style={{ background: `${stage.color}15`, color: stage.color }}
                  >
                    {stage.label}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-charcoal group-hover:text-electric transition-colors">
                  {stage.title}
                </h3>
                
                <p className="text-charcoal-muted leading-relaxed text-sm md:text-base">
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