import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-elevated border-t border-white/5 text-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center overflow-hidden ring-1 ring-white/10">
                <img
                  src="/logo.jpg"
                  alt="Logo Henrique Arsego"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display text-xl font-semibold">Henrique Arsego</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Consultor de Marketing Digital. Tráfego pago com infraestrutura
              de dados — não só criativo bom e palpite.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-accent transition-colors cursor-pointer">Gestão de Tráfego Pago (Meta, Google, TikTok)</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Tagueamento Avançado (CAPI/GTM Server-Side)</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Dashboards de BI em Tempo Real</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Automação com n8n</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-muted-foreground font-mono text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+5551996719696" className="hover:text-accent transition-colors">
                  +55 51 99671-9696
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Chapecó, SC — Brasil</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/70">
            <p>© 2026 Henrique Arsego. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-accent transition-colors cursor-pointer">Política de Privacidade</span>
              <span className="hover:text-accent transition-colors cursor-pointer">Termos de Uso</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
