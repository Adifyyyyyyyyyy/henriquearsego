import { motion } from "framer-motion";

const verticals = [
  {
    category: "Tecnologia & Fintech",
    brands: ["iFood", "Conta Simples", "ZapSign", "AmigoTech", "TapTap Send"],
  },
  {
    category: "Imobiliário & Incorporação",
    brands: ["CFL Empreendimentos", "Nortis Incorporadora", "Vibra Residencial", "The Florida Lounge"],
  },
  {
    category: "Saúde & Bem-Estar",
    brands: ["OncoClínicas", "Exmed", "Pure Pilates"],
  },
  {
    category: "Fitness & Educação",
    brands: ["Selfit", "Biofisic", "Unisapiens", "Uninorte", "Faculdade Líbano"],
  },
  {
    category: "Entretenimento & Indústria",
    brands: ["Warner Bros.", "Dr. Lava Tudo", "Midea", "Carapreta", "Raízen"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {verticals.map((v, i) => (
            <motion.div
              key={v.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 hover:border-accent/25 transition-colors duration-300"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-accent mb-4">
                {v.category}
              </h3>
              <ul className="space-y-2">
                {v.brands.map((b) => (
                  <li
                    key={b}
                    className="text-foreground/90 font-display text-sm sm:text-base"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
