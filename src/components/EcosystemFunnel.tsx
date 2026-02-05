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
  const [activePath, setActivePath] = useState([0, 0, 0, 0]);

  // Lógica para randomizar o caminho a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const newPath = funnelData.map((stage) => 
        Math.floor(Math.random() * stage.items.length)
      );
      setActivePath(newPath);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-charcoal">
            Fluxo Inteligente de <span className="text-electric">Dados</span>
          </h2>
          <p className="text-lg text-charcoal-muted max-w-2xl mx-auto">
            Visualize como diferentes canais se conectam automaticamente em cada jornada de venda.
          </p>
        </div>

        <div className="relative flex flex-col gap-4">
          {funnelData.map((row, rowIndex) => (
            <div key={row.stage} className="flex items-stretch relative">
              {/* Stage Label */}
              <div 
                className={`${row.color} text-white w-28 md:w-44 flex items-center justify-center font-bold text-sm md:text-lg tracking-wider shadow-md relative z-20`}
                style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)" }}
              >
                {row.stage}
              </div>

              {/* Items Container */}
              <div className="flex-1 bg-white border border-slate-100 rounded-r-xl p-4 md:p-8 flex flex-wrap gap-4 md:gap-8 items-center justify-around shadow-sm ml-[-15px] pl-12 relative z-10">
                {row.items.map((item, itemIndex) => {
                  const isActive = activePath[rowIndex] === itemIndex;
                  
                  return (
                    <div key={item.label} className="flex flex-col items-center gap-2 relative">
                      {/* Efeito de Brilho de Fundo */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 0.2 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="absolute inset-0 bg-electric rounded-full blur-xl"
                          />
                        )}
                      </AnimatePresence>

                      <motion.div 
                        animate={isActive ? { 
                          scale: [1, 1.1, 1],
                          backgroundColor: ["#f8fafc", "#0073e6", "#0073e6"] 
                        } : { scale: 1, backgroundColor: "#f8fafc" }}
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-sm z-10 transition-colors duration-500 ${
                          isActive ? "text-white shadow-electric/40" : "text-slate-400"
                        }`}
                      >
                        <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                      </motion.div>

                      <span className={`text-[9px] md:text-[11px] font-bold text-center max-w-[80px] uppercase transition-colors duration-500 ${
                        isActive ? "text-electric" : "text-slate-400"
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

        <div className="mt-12 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 text-electric text-xs font-bold animate-pulse">
            <span className="w-2 h-2 rounded-full bg-electric"></span>
            SIMULANDO JORNADA EM TEMPO REAL
          </span>
        </div>
      </div>
    </section>
  );
};

export default EcosystemFunnel;