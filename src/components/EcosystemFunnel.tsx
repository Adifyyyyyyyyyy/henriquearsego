import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, Search, Share2, MousePointer2, 
  Layout, FileText, Mail, Lightbulb,
  Target, PhoneCall, CheckCircle2, ShoppingCart,
  Heart, ClipboardList, Users, TrendingUp 
} from "lucide-react";

const funnelData = [
  {
    stage: "ATRAIR",
    color: "bg-[#003366]",
    items: [
      { icon: Globe, label: "SITE / BLOG" },
      { icon: Search, label: "SEO" },
      { icon: Share2, label: "MÍDIAS SOCIAIS" },
      { icon: MousePointer2, label: "MÍDIA PAGA" },
    ],
  },
  {
    stage: "CONVERTER",
    color: "bg-[#004080]",
    items: [
      { icon: Layout, label: "LANDING PAGES" },
      { icon: FileText, label: "ISCAS DIGITAIS" },
      { icon: Mail, label: "E-MAIL MARKETING" },
      { icon: Lightbulb, label: "CONTEÚDO" },
    ],
  },
  {
    stage: "VENDER",
    color: "bg-[#0059b3]",
    items: [
      { icon: Target, label: "LEAD SCORING" },
      { icon: PhoneCall, label: "CRM SALES" },
      { icon: CheckCircle2, label: "FECHAMENTO" },
      { icon: ShoppingCart, label: "CHECKOUT" },
    ],
  },
  {
    stage: "FIDELIZAR",
    color: "bg-[#0073e6]",
    items: [
      { icon: Heart, label: "NPS" },
      { icon: ClipboardList, label: "PESQUISAS" },
      { icon: Users, label: "RELACIONAMENTO" },
      { icon: TrendingUp, label: "UPSELL" },
    ],
  },
];

const EcosystemFunnel = () => {
  // activeStep controla qual linha (0 a 3) está acesa
  const [activeStep, setActiveStep] = useState(0);
  // selectedItems armazena quais ícones foram "escolhidos" para a jornada atual
  const [selectedItems, setSelectedItems] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        // Se chegar na última etapa (3), volta para a primeira (0)
        if (prev === 3) {
          // Quando recomeça, sorteamos novos ícones para a próxima jornada ser diferente
          const newPath = funnelData.map(stage => Math.floor(Math.random() * stage.items.length));
          setSelectedItems(newPath);
          return 0;
        }
        return prev + 1;
      });
    }, 1500); // Velocidade do "passo" entre etapas (1.5 segundos)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-charcoal">
            Jornada do <span className="text-electric">Lead</span> em Tempo Real
          </h2>
          <p className="text-lg text-charcoal-muted max-w-2xl mx-auto">
            Acompanhe o caminho automatizado que seus clientes percorrem em nossa estrutura.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {funnelData.map((row, rowIndex) => (
            <div key={row.stage} className="flex items-stretch relative">
              {/* Etiqueta da Etapa */}
              <motion.div 
                animate={{ 
                  opacity: activeStep === rowIndex ? 1 : 0.6,
                  scale: activeStep === rowIndex ? 1.02 : 1
                }}
                className={`${row.color} text-white w-28 md:w-44 flex items-center justify-center font-bold text-sm md:text-lg tracking-wider shadow-md z-20`}
                style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)" }}
              >
                {row.stage}
              </motion.div>

              {/* Grid de Itens */}
              <div className="flex-1 bg-white border border-slate-100 rounded-r-xl p-4 md:p-8 flex flex-wrap gap-4 md:gap-8 items-center justify-around shadow-sm ml-[-15px] pl-12 z-10">
                {row.items.map((item, itemIndex) => {
                  const isHighlighted = activeStep === rowIndex && selectedItems[rowIndex] === itemIndex;
                  
                  return (
                    <div key={item.label} className="flex flex-col items-center gap-2 relative">
                      {/* Aura de destaque */}
                      <AnimatePresence>
                        {isHighlighted && (
                          <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 0.3 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="absolute inset-0 bg-electric rounded-full blur-xl z-0"
                          />
                        )}
                      </AnimatePresence>

                      {/* Ícone */}
                      <motion.div 
                        animate={isHighlighted ? { 
                          scale: [1, 1.2, 1.1],
                          backgroundColor: "#0073e6",
                          color: "#ffffff"
                        } : { 
                          scale: 1, 
                          backgroundColor: "#f8fafc",
                          color: "#cbd5e1" 
                        }}
                        transition={{ duration: 0.4 }}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-sm z-10"
                      >
                        <item.icon size={24} strokeWidth={isHighlighted ? 2.5 : 2} />
                      </motion.div>

                      {/* Texto do item */}
                      <span className={`text-[9px] md:text-[11px] font-bold text-center max-w-[80px] uppercase transition-colors duration-300 ${
                        isHighlighted ? "text-electric" : "text-slate-300"
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Indicador de Status */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-4 bg-slate-50 px-6 py-3 rounded-full border border-slate-200">
             {[0, 1, 2, 3].map((step) => (
               <motion.div
                key={step}
                className={`w-3 h-3 rounded-full ${activeStep === step ? 'bg-electric' : 'bg-slate-300'}`}
                animate={activeStep === step ? { scale: [1, 1.4, 1] } : { scale: 1 }}
               />
             ))}
             <span className="text-xs font-bold text-slate-500 ml-2 uppercase tracking-widest">
                Processando Fluxo
             </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemFunnel;