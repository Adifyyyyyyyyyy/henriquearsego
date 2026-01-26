import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Database, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Processo", href: "#processo" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/5551996719696?text=Olá! Gostaria de agendar um diagnóstico gratuito.";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-charcoal/5"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-electric flex items-center justify-center">
              <Database className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-lg font-bold text-charcoal">DataDriven</span>
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
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Diagnóstico Gratuito
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
          className="md:hidden bg-background border-t border-charcoal/5"
        >
          <div className="container py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-charcoal-muted hover:text-charcoal font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <Button variant="cta" size="default" className="w-full" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
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
