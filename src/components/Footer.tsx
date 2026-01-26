import { motion } from "framer-motion";
import { Database, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground py-16">
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
              <div className="w-10 h-10 rounded-xl bg-electric flex items-center justify-center">
                <Database className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">DataDriven</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Consultoria especializada em Marketing Digital e Data Intelligence. 
              Transformando dados em decisões estratégicas.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li className="hover:text-electric transition-colors cursor-pointer">Gestão de Tráfego Pago</li>
              <li className="hover:text-electric transition-colors cursor-pointer">Tagueamento Avançado (CAPI/GTM)</li>
              <li className="hover:text-electric transition-colors cursor-pointer">Dashboards em Tempo Real</li>
              <li className="hover:text-electric transition-colors cursor-pointer">Automação de Processos</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-electric" />
                <a href="tel:+5551996719696" className="hover:text-electric transition-colors">
                  +55 51 99671-9696
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-electric" />
                <a href="mailto:contato@datadriven.com.br" className="hover:text-electric transition-colors">
                  contato@datadriven.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-electric" />
                <span>Porto Alegre, RS - Brasil</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
            <p>© 2024 DataDriven. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-electric transition-colors cursor-pointer">Política de Privacidade</span>
              <span className="hover:text-electric transition-colors cursor-pointer">Termos de Uso</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
