import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ParticleField from "./ParticleField";

const HeroSection = () => {
  const whatsappLink =
    "https://wa.me/5551996719696?text=Olá! Gostaria de falar sobre marketing digital para minha empresa.";

  const avatars = [
    "https://framerusercontent.com/images/ETgoVdeITLLIYCHTFNeVuZDMyQY.png",
    "https://framerusercontent.com/images/bnJJiW5Vfixlrz7M2pzoeyHBU.png",
    "https://lh3.googleusercontent.com/a-/ALV-UjXKiUl2qV9y_x95yE2NHMoFFYE296pL07-EPKWXhFnpfS_ncBUXmA=s36-c-rp-mo-br100",
    "https://framerusercontent.com/images/X0pqhTmlK8gdYqPbljhuLXlyd0I.png",
  ];

  const stats = [
    { value: "11+", label: "anos de marketing digital" },
    { value: "78+", label: "empresas atendidas" },
    { value: "6", label: "frentes de marketing sob um só especialista" },
  ];

  return (
    <section className="relative flex items-center overflow-hidden min-h-[100svh] bg-background section-gradient grain">
      {/* Signature visual — ambient node network, blue → cyan */}
      <div className="absolute inset-0 opacity-70">
        <ParticleField />
      </div>

      {/* Aurora glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-electric-light/10 blur-[120px]" />
      </div>

      {/* Base grid texture — data/engineering identity */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      <div className="container relative z-10 px-4 py-28 sm:py-32">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs sm:text-sm text-accent tracking-[0.2em] uppercase mb-8 inline-flex items-center gap-2 border border-accent/25 bg-accent/5 rounded-full px-4 py-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Consultor de Marketing Digital · Chapecó, SC
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.05] tracking-tight mb-8"
          >
            Estratégia de marketing que encontra{" "}
            <span
              className="text-gradient-aurora italic inline-block"
              style={{ paddingRight: "0.15em", marginRight: "-0.15em" }}
            >
              o canal certo pra você vender
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Estratégia, SEO, mídia social, WhatsApp, CRM e marketplace — sem
            fórmula pronta. Cada negócio vende de um jeito, e meu trabalho é
            achar qual caminho funciona pro seu, com foco especial em
            negócio local e Google Meu Negócio.
          </motion.p>

          <motion.div
            id="hero-cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full"
          >
            <Button
              variant="cta"
              size="xl"
              asChild
              className="group min-h-[64px] w-full sm:w-auto sm:min-w-[320px]"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <span>Chamar no WhatsApp</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          {/* Dashboard-style stat readouts — grounded in the CV, not
              generic superlatives */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-2xl grid grid-cols-3 divide-x divide-white/10 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm"
          >
            {stats.map((s) => (
              <div key={s.label} className="px-3 py-5 sm:py-6 text-center">
                <div className="font-mono text-2xl sm:text-3xl font-semibold text-foreground">
                  {s.value}
                </div>
                <div className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social proof avatars — same real clients featured in testimonials below */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-3 mt-8"
          >
            <div className="flex -space-x-3">
              {avatars.map((url, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-background overflow-hidden bg-muted"
                >
                  <img
                    src={url}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={28}
                    height={28}
                  />
                </div>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              clientes reais, depoimentos abaixo
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
