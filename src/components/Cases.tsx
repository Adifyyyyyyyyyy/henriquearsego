import { motion } from "framer-motion";

/**
 * Case screenshots — cada item é um print real (dashboard de campanha,
 * relatório, resultado) com o nicho ao qual pertence. Troque `image`
 * pelos arquivos reais em /public/cases/ conforme forem chegando.
 */
const cases = [
  { image: "/cases/ecommerce-01.png", niche: "E-commerce" },
  { image: "/cases/ecommerce-02.png", niche: "E-commerce" },
  { image: "/cases/ecommerce-03.png", niche: "E-commerce" },
  { image: "/cases/imobiliario-01.png", niche: "Imobiliário & Incorporação" },
  { image: "/cases/saude-01.png", niche: "Saúde & Bem-Estar" },
  { image: "/placeholder.svg", niche: "Tecnologia & Fintech" },
];

const Cases = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface-subtle relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/5 text-accent text-xs font-mono uppercase tracking-widest mb-5">
            Cases
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            Print da tela, <span className="text-gradient-aurora">não da promessa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultado direto do painel de campanha, sem edição.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              {/* Moldura — dashboards/tabelas de ads são bem mais largos que
                  altos, então object-contain evita cortar coluna importante */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2.5 hover:border-accent/30 transition-colors duration-300">
                <div className="rounded-xl overflow-hidden ring-1 ring-white/5 bg-black/40 aspect-[16/10] flex items-center justify-center">
                  <img
                    src={c.image}
                    alt={`Case — ${c.niche}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Tag do nicho */}
              <div className="mt-3 flex justify-center">
                <span className="font-mono text-[11px] uppercase tracking-widest text-accent border border-accent/25 bg-accent/5 rounded-full px-3 py-1">
                  {c.niche}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
