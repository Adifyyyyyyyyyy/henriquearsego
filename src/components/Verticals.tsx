import { motion } from "framer-motion";
import { Cpu, Building2, HeartPulse, Dumbbell, Factory } from "lucide-react";

const verticals = [
  {
    category: "Tecnologia & Fintech",
    icon: Cpu,
    description: "Growth em produto digital e fintech — aquisição pagando por ativação, não só clique.",
  },
  {
    category: "Imobiliário & Incorporação",
    icon: Building2,
    description: "Lead qualificado pra incorporadora e agência, do lançamento ao repasse.",
  },
  {
    category: "Saúde & Bem-Estar",
    icon: HeartPulse,
    description: "Aquisição de paciente e aluno em setor regulado, com compliance de anúncio em saúde.",
  },
  {
    category: "Fitness & Educação",
    icon: Dumbbell,
    description: "Captação de matrícula e aluno recorrente, com funil pensado pro ticket de mensalidade.",
  },
  {
    category: "Entretenimento & Indústria",
    icon: Factory,
    description: "De B2C de massa a B2B industrial — mídia com objetivo de negócio, não vaidade de alcance.",
  },
];

const Verticals = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/5 text-accent text-xs font-mono uppercase tracking-widest mb-5">
            Setores atendidos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            Nicho <span className="text-gradient-aurora">não é desculpa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De marketplace de delivery a incorporadora de alto padrão. A
            lógica de rastreamento e mídia muda, o rigor não.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {verticals.map((v, i) => (
            <motion.div
              key={v.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 hover:border-accent/25 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 mb-5">
                <v.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">
                {v.category}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
