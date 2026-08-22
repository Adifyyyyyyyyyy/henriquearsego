import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroCtaPassed, setHeroCtaPassed] = useState(false);
  const whatsappLink =
    "https://wa.me/5551996719696?text=Olá! Gostaria de agendar um diagnóstico para minha empresa.";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    if (!heroCta) return;

    // Header height on mobile is h-16 (64px) — shrink the observed viewport
    // by that amount so "passed" means the hero CTA has scrolled fully
    // behind the fixed header, not just touched its edge.
    const observer = new IntersectionObserver(
      ([entry]) => setHeroCtaPassed(!entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  // The muted-until-passed treatment is a mobile-only affordance — on
  // desktop the hero CTA and floating header CTA don't compete for the
  // same visual space, so the header CTA stays highlighted as before.
  const highlightCta = heroCtaPassed || (typeof window !== "undefined" && window.innerWidth >= 640);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 shrink-0 rounded-lg bg-accent flex items-center justify-center overflow-hidden ring-1 ring-white/10">
              <img
                src="/logo.jpg"
                alt="Logo Henrique Arsego"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display text-lg font-semibold text-foreground tracking-tight">
              Henrique Arsego
            </span>
          </a>

          {/* No nav links — this page exists to convert paid traffic,
              not to be browsed. One phone number, one CTA. */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="tel:+5551996719696"
              className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              <Phone size={14} className="text-accent" />
              (51) 99671-9696
            </a>
            <Button
              variant={highlightCta ? "cta" : "ctaOutline"}
              size="default"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
