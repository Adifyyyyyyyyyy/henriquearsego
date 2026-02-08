import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Database, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Monitoramento", href: "#monitoramento" },  
  { label: "Metodologia", href: "#metodologia" },
  { label: "Blog", href: "https://blog.henriquearsego.com.br" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/5551996719696?text=Olá! Gostaria de agendar um diagnóstico para minha empresa.";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-charcoal/5"
          : "bg-transparent"
        }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-electric flex items-center justify-center overflow-hidden">
              <img
                src="/logo.jpg"
                alt="Logo Henrique Arsego"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg font-bold text-charcoal">Henrique Arsego</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-charcoal-muted hover:text-charcoal font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" size="default" asChild>
              <a href="#contactForm">
                Solicitar Diagnóstico
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          // Ajuste: overflow-hidden e w-full garantem que nada saia lateralmente
          className="md:hidden bg-background border-t border-charcoal/5 w-full overflow-hidden"
        >
          {/* Ajuste: px-4 e max-w-full para travar o conteúdo no mobile */}
          <div className="container py-6 px-4 space-y-4 max-w-full">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-charcoal-muted hover:text-charcoal font-medium py-3 border-b border-charcoal/5"
              >
                {link.label}
              </a>
            ))}

            {/* O culpado estava aqui: Adicionamos h-auto e whitespace-normal */}
            <Button
              variant="cta"
              size="default"
              className="w-full h-auto py-4 px-6 whitespace-normal leading-tight"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-center">
                Diagnóstico Gratuito
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
