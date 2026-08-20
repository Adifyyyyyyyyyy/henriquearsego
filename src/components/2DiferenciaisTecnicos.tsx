import { motion } from "framer-motion";
import { Workflow, LineChart, TrendingUp, Terminal, Zap } from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "Rastreamento com precisão",
    description:
      "GTM server-side, GA4, Pixel e API de Conversões (CAPI) implementados pra fechar o buraco das UTMs e devolver dado confiável pra otimização.",
    large: true,
  },
  {
    icon: Workflow,
    title: "Automação com n8n",
    description:
      "Tráfego conectado direto ao CRM e ao WhatsApp via API — lead qualificado chega em tempo real, sem planilha no meio do caminho.",
    large: false,
  },
  {
    icon: LineChart,
    title: "Dashboards de BI",
    description:
      "Dado bruto virando painel acionável. Decisão de mídia baseada em número atualizado, não em relatório manual de sexta à tarde.",
    large: false,
  },
  {
    icon: TrendingUp,
    title: "Geração de demanda",
    description:
      "Estratégia de mídia paga (Meta, Google, TikTok, YouTube) desenhada pra funil de conversão real — B2B e B2C, com otimização orientada a ROI.",
    large: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const whatsappLink =
  "https://wa.me/5551996719696?text=Olá! Gostaria de agendar um diagnóstico para minha empresa.";

const BentoGrid = () => {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-background relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/5 text-accent text-xs font-mono uppercase tracking-widest mb-5">
            <Terminal size={14} />
            Diferenciais técnicos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            Infraestrutura de dado{" "}
            <span className="text-gradient-aurora">que funciona de verdade</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Não é só relatório bonito. É a infraestrutura completa — do pixel
            ao dashboard — pra escalar mídia com base em número real.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 lg:p-8 card-elevated transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 ${
                feature.large ? "lg:col-span-2" : ""
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/0 group-hover:bg-accent/10 rounded-full blur-2xl transition-all duration-500" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 mb-5">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <span className="text-sm font-medium">Saiba mais</span>
                  </a>
                  <Zap size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/8 pt-12"
        >
          {[
            { value: "100%", label: "precisão no rastreamento de eventos" },
            { value: "n8n", label: "automação entre Meta, Google, TikTok e CRM" },
            { value: "GA4", label: "arquitetura de dados server-side" },
            { value: "24/7", label: "campanhas monitoradas" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-2xl lg:text-3xl font-semibold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
