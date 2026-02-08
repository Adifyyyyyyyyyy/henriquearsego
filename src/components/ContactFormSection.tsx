import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

const ContactFormSection = () => {
  return (
    <section id="contactForm" className="relative py-24 section-gradient overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-electric/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
          >
            Agende um Diagnóstico Estratégico
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal-muted max-w-2xl mx-auto"
          >
            Entenda exatamente o que está travando seus resultados e onde focar para crescer com dados, não achismos.
          </motion.p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white/70 backdrop-blur-md border border-charcoal/10 rounded-2xl p-8 md:p-10 shadow-lg"
        >
          <form className="space-y-6">
            {/* Nome */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">
                Seu nome
              </label>
              <Input
                placeholder="Ex: Henrique Arsego"
                className="h-12"
              />
            </div>

            {/* Empresa */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">
                Empresa
              </label>
              <Input
                placeholder="Nome da empresa"
                className="h-12"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">
                Email corporativo
              </label>
              <Input
                type="email"
                placeholder="voce@empresa.com"
                className="h-12"
              />
            </div>

            {/* Desafio */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">
                Qual é o principal desafio do seu marketing hoje?
              </label>
              <Textarea
                placeholder="Ex: Investimos em anúncios, mas não sabemos quais canais realmente geram resultado..."
                className="min-h-[120px]"
              />
            </div>

            {/* CTA */}
            <Button
              variant="cta"
              size="xl"
              className="group w-full h-auto min-h-[64px] flex items-center justify-center gap-3"
            >
              <span>Solicitar diagnóstico</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Micro confiança */}
            <p className="text-xs text-charcoal-muted text-center mt-2">
              Diagnóstico gratuito • Sem compromisso • Resposta em até 1 dia útil
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;
