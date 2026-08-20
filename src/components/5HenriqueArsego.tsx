import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

const certifications = [
  "Certified Media Buying Professional — Meta",
  "Vídeo, Display, Pesquisa, Shopping e App — Google",
  "Google AdWords Expert Search — Goobec Brasil",
  "Inbound Marketing — HubSpot",
  "Desenvolvimento Web — TargetTrust",
  "Design Gráfico — SENAC Informática",
];

const education = [
  { degree: "Ciência da Computação", school: "UFFS", period: "2019 — 2024" },
  { degree: "Publicidade e Propaganda", school: "Centro Universitário Metodista IPA", period: "2012 — 2017" },
];

const SpecialistSection = () => {
  return (
    <section id="especialista" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/[0.03] to-accent/10 rounded-2xl p-4 md:p-8 aspect-square max-w-md mx-auto flex items-center justify-center border border-white/8">
              <div className="absolute inset-4 border border-accent/20 rounded-xl" />
              <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl">
                <img
                  src="/henrique-arsego.jpg"
                  alt="Henrique Arsego"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 left-0 right-0 mx-auto w-fit max-w-[95%] bg-accent text-accent-foreground px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-glow"
              >
                <Award className="w-5 h-5 shrink-0" />
                <span className="font-semibold text-sm md:text-base text-center tracking-tight">
                  11+ anos em growth & mídia paga
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="font-mono text-accent text-xs uppercase tracking-[0.2em]">
                O especialista por trás dos dados
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 tracking-tight">
                Henrique Arsego
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Consultor de Marketing Digital, atuando como especialista
              autônomo desde 2020 pra clientes B2B e B2C no Brasil e nos
              EUA — depois de anos gerindo SEO, links patrocinados e mídia em
              agência. Formado em Ciência da Computação (UFFS) e Publicidade
              e Propaganda (Metodista IPA): a combinação é exatamente o que
              separa gestão de tráfego de engenharia de crescimento.
            </p>

            {/* Certifications */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Certificações
              </span>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {certifications.map((c) => (
                  <div key={c} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/85 leading-tight">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3 pt-4 border-t border-white/8">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Formação
              </span>
              {education.map((e) => (
                <div key={e.degree} className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/85">
                    <strong className="font-medium">{e.degree}</strong> — {e.school}{" "}
                    <span className="text-muted-foreground">({e.period})</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistSection;
