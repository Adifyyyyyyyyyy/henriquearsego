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
      value: "R$ 10M+", // Ajustado conforme seu histórico de especialista
      label: "Gerenciados",
      sublabel: "Em mídia paga",
    },
  ];

  return (
    // Alterado para um azul bem escuro (charcoal-dark ou similar)
    <section id="especialista" className="py-24 bg-[#0a0c10] text-white overflow-hidden">
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
            {/* Gradiente de fundo da foto ajustado para o modo escuro */}
            <div className="relative bg-gradient-to-br from-charcoal/50 to-electric/10 rounded-2xl p-4 md:p-8 aspect-square max-w-md mx-auto flex items-center justify-center border border-white/5">
              
              {/* Decorative border - Brilho suave */}
              <div className="absolute inset-4 border-2 border-electric/20 rounded-xl" />
              
              {/* Profile Image Section */}
              <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl">
                <img 
                  src="/henrique-arsego.jpg" 
                  alt="Henrique Arsego"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 left-0 right-0 mx-auto w-fit max-w-[95%] bg-electric text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(var(--electric-rgb),0.3)]"
              >
                <Award className="w-5 h-5 shrink-0" />
                <span className="font-bold text-sm md:text-base text-center tracking-tight">
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
            className="space-y-8"
          >
            <div>
              <span className="text-electric font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
                O Estrategista por trás dos dados
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 tracking-tight">
                Henrique Arsego
              </h2>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed">
              Especialista em Performance com foco em Geração de Demanda e Análise de Dados. 
              Mais de uma década de atuação, transformo operações infeicientes 
              em máquinas de vendas, unindo precisão técnica e escala estratégica.
            </p>

            {/* Stats Cards - Ajustados para Glassmorphism */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/[0.03] border border-white/10 backdrop-blur-sm rounded-2xl p-5 flex items-start gap-4 hover:bg-white/[0.06] hover:border-electric/30 transition-all duration-300"
                >
                  <div className="p-2.5 bg-electric/20 rounded-xl shrink-0">
                    <stat.icon className="w-6 h-6 text-electric" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm font-semibold text-slate-200">{stat.label}</p>
                    <p className="text-xs text-slate-500 mt-1 leading-tight">{stat.sublabel}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Credentials */}
            <div className="space-y-4 pt-2">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="h-8 w-8 rounded-full bg-electric/10 flex items-center justify-center group-hover:bg-electric/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-electric" />
                  </div>
                  <span className="text-slate-300 font-medium">{credential}</span>
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