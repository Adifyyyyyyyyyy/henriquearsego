import { motion } from "framer-motion";
import { Crosshair, Workflow, LineChart, TrendingUp, Code2, Settings, Zap, Target } from "lucide-react";

const features = [
  {
    icon: Crosshair,
    title: "Rastreamento de Precisão",
    description: "Implementação de API de Conversões (CAPI) para contornar perdas do iOS14 e garantir dados precisos para suas campanhas.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    large: true,
  },
  {
    icon: Workflow,
    title: "Automação com n8n/Make",
    description: "Conectando seu tráfego diretamente ao seu CRM e WhatsApp. Leads qualificados em tempo real.",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
    large: false,
  },
  {
    icon: LineChart,
    title: "Dashboards em Tempo Real",
    description: "Visualização clara do ROI e ROAS sem relatórios manuais. Dados atualizados minuto a minuto.",
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
    large: false,
  },
  {
    icon: TrendingUp,
    title: "Gestão de Tráfego",
    description: "Estratégias de escala para negócios que buscam lucro, não apenas alcance. Foco em conversões reais e custo por aquisição.",
    gradient: "from-orange-500/10 to-amber-500/10",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
    large: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const BentoGrid = () => {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-surface-subtle">
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
            <Code2 size={16} />
            Diferenciais Técnicos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Infraestrutura de dados{" "}
            <span className="text-electric">que funciona</span>
          </h2>
          <p className="text-lg text-charcoal-muted max-w-2xl mx-auto">
            Soluções técnicas que vão além de relatórios bonitos. Implementamos a infraestrutura completa para escalar seus resultados.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.gradient} border border-charcoal/5 p-6 lg:p-8 card-elevated transition-all duration-300 hover:-translate-y-1 ${
                feature.large ? "lg:col-span-2" : ""
              }`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric/5 rounded-full blur-2xl" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.iconBg} mb-5`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-electric transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-charcoal-muted leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-4 flex items-center gap-2 text-electric opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-sm font-medium">Saiba mais</span>
                  <Zap size={14} />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <feature.icon className="w-32 h-32 text-charcoal" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "98%", label: "Taxa de Precisão" },
            { value: "-40%", label: "Redução de Custo" },
            { value: "2x", label: "Velocidade de Dados" },
            { value: "24/7", label: "Monitoramento" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-electric mb-1">{stat.value}</div>
              <div className="text-sm text-charcoal-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
