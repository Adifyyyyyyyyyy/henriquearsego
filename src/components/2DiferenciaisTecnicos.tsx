import { motion } from "framer-motion";
import { Compass, MapPin, Share2, Store, Zap } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Diagnóstico de canais",
    description:
      "Antes de sugerir qualquer ação, mapeio onde seu cliente ideal realmente está — busca, redes sociais, indicação, WhatsApp, marketplace ou e-commerce. O esforço vai pro canal que sua audiência já usa, não pro que está na moda.",
    large: true,
  },
  {
    icon: MapPin,
    title: "SEO e Google Meu Negócio",
    description:
      "Presença de negócio local bem estruturada pra aparecer no mapa e na busca quando alguém perto de você procura o que você vende.",
    large: false,
  },
  {
    icon: Share2,
    title: "Mídia social estratégica",
    description:
      "Conteúdo e posicionamento pensados para o seu público específico — não fórmula genérica de engajamento.",
    large: false,
  },
  {
    icon: Store,
    title: "WhatsApp, CRM, marketplace e e-commerce",
    description:
      "Organização do atendimento, funil de relacionamento com o cliente e presença nos marketplaces certos ou numa loja própria pra transformar contato em venda.",
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
  "https://wa.me/5551996719696?text=Olá! Gostaria de falar sobre marketing digital para minha empresa.";

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
            <Compass size={14} />
            Como eu trabalho
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            O canal certo{" "}
            <span className="text-gradient-aurora">para o seu negócio vender</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Não existe fórmula única de marketing. Cada negócio tem um
            caminho diferente pra vender mais — meu trabalho é descobrir
            qual é o seu.
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
            { value: "6", label: "canais avaliados em cada diagnóstico" },
            { value: "SEO", label: "e Google Meu Negócio pra negócio local" },
            { value: "CRM", label: "organização de leads e relacionamento" },
            { value: "1:1", label: "estratégia sob medida, sem fórmula pronta" },
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
