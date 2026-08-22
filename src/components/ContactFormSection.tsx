import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const whatsappLink =
  "https://wa.me/5551996719696?text=Olá! Gostaria de falar sobre marketing digital para minha empresa.";

const ContactFormSection = () => {
  return (
    <section id="contactForm" className="relative py-24 lg:py-32 section-gradient grain overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-electric-light/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight"
          >
            Agende um <span className="text-gradient-aurora">Diagnóstico Estratégico</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-xl mx-auto mb-10"
          >
            Entenda exatamente o que está travando seus resultados e onde focar para crescer de forma organizada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              variant="cta"
              size="xl"
              asChild
              className="group min-h-[64px] w-full sm:w-auto sm:min-w-[340px]"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <span>Chamar no WhatsApp Agora</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Diagnóstico gratuito • Sem compromisso • Resposta em até 1 dia útil
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
