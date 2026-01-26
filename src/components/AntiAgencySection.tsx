import { motion } from "framer-motion";
import { X, Check, AlertCircle, Shield } from "lucide-react";

const comparisonData = {
  agency: {
    title: "Agências Comuns",
    subtitle: "O que você está acostumado",
    color: "red",
    items: [
      "Foco em métricas de vaidade (curtidas, impressões)",
      "Relatórios mensais com dados desatualizados",
      "Gestão de campanhas sem visão de dados",
      "Implementação básica de pixel (sem CAPI)",
      "Sem integração com seu CRM/WhatsApp",
      "Dependência de plataformas de terceiros",
    ],
  },
  consultancy: {
    title: "Minha Consultoria",
    subtitle: "O que você precisa",
    color: "green",
    items: [
      "Foco em conversões e ROI real",
      "Dashboards em tempo real, sempre atualizados",
      "Estratégia baseada em dados e previsibilidade",
      "Implementação completa de CAPI + Server-Side",
      "Automação total: Leads → CRM → WhatsApp",
      "Infraestrutura própria e controle total dos dados",
    ],
  },
};

const AntiAgencySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            <AlertCircle size={16} />
            Comparativo Honesto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Por que <span className="text-electric">não sou uma agência</span>
          </h2>
          <p className="text-lg text-charcoal-muted max-w-2xl mx-auto">
            Agências vendem serviços. Eu construo infraestrutura de dados que gera resultados mensuráveis e previsíveis.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Agency Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border-2 border-destructive/20 bg-destructive/5 p-8"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-destructive/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal">{comparisonData.agency.title}</h3>
                  <p className="text-sm text-charcoal-muted">{comparisonData.agency.subtitle}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {comparisonData.agency.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    <span className="text-charcoal-muted">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Consultancy Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border-2 border-electric/30 bg-electric/5 p-8"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-electric/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-electric/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-electric" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal">{comparisonData.consultancy.title}</h3>
                  <p className="text-sm text-charcoal-muted">{comparisonData.consultancy.subtitle}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {comparisonData.consultancy.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-electric" />
                    </div>
                    <span className="text-charcoal">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-electric text-accent-foreground text-xs font-semibold rounded-full">
              Recomendado
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AntiAgencySection;
