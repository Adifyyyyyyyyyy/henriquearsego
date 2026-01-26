import { motion } from "framer-motion";
import { GraduationCap, Users, TrendingUp, CheckCircle2, Award } from "lucide-react";

const SpecialistSection = () => {
  const credentials = [
    "Certificado Google Ads e Meta Blueprint",
    "Consultor para empresas do Brasil e EUA",
  ];

  const stats = [
    {
      icon: Users,
      value: "+78",
      label: "Empresas",
      sublabel: "Utilizaram a consultoria",
    },
    {
      icon: TrendingUp,
      value: "R$ 2M+",
      label: "Autidados",
      sublabel: "Em mídia paga",
    },
  ];

  return (
    <section id="especialista" className="py-24 bg-surface-elevated">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-charcoal to-charcoal-light rounded-2xl p-8 aspect-square max-w-md mx-auto flex items-center justify-center">
              {/* Decorative border */}
              <div className="absolute inset-4 border-2 border-electric/30 rounded-xl" />
              
              {/* Profile Image Section */}
                <div className="relative z-10 flex flex-col items-center">
                
                    <img 
                    src="/henrique-arsego.jpg" 
                    alt="Henrique Arsego"
                    />
                </div>

              {/* Experience Badge */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
  viewport={{ once: true }}
  className="absolute -bottom-6 left-0 right-0 mx-auto w-fit max-w-[95%] bg-electric text-accent-foreground px-4 py-2.5 rounded-2xl md:rounded-full flex items-center justify-center gap-2 shadow-glow"
>
  <Award className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
  <span className="font-semibold text-[13px] md:text-base text-center leading-tight">
    +12 Anos de Experiência
  </span>
</motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <span className="text-electric font-semibold text-sm uppercase tracking-wider">
                Conheça o Especialista
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-2">
                Henrique Arsego
              </h2>
            </div>

            <p className="text-charcoal-muted text-lg leading-relaxed">
              Especialista em Marketing Digital com mais de 12 anos de experiência no mercado. 
              Já gerenciou mais de R$ 50 milhões em investimento em mídia paga e ajudou 
              centenas de empresas a estruturarem suas operações de marketing digital da forma correta.
            </p>

            {/* Stats Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 px-2 sm:px-0">
  {stats.map((stat, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
      viewport={{ once: true }}
      className="bg-background border border-border rounded-xl p-4 flex items-start gap-3 shadow-card hover:shadow-card-hover transition-shadow duration-300 min-h-[100px]"
    >
      <div className="p-2 bg-electric/10 rounded-lg shrink-0">
        <stat.icon className="w-5 h-5 text-electric" />
      </div>
      <div className="flex flex-col min-w-0"> {/* min-w-0 evita que o texto saia do container */}
        <p className="text-xl font-bold text-charcoal truncate">{stat.value}</p>
        <p className="text-sm text-charcoal font-medium leading-snug">{stat.label}</p>
        <p className="text-xs text-charcoal-muted mt-0.5 leading-tight">{stat.sublabel}</p>
      </div>
    </motion.div>
  ))}
</div>

            {/* Credentials */}
            <div className="space-y-3 pt-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0" />
                  <span className="text-charcoal-muted">{credential}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistSection;