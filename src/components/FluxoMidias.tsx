import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Share2, MessageCircle,
  Database, Store, Cpu, ArrowDown
} from "lucide-react";

const dataSource = [
  { id: "seo", name: "SEO & Google Meu Negócio", sub: "Busca Local", icon: MapPin, color: "#3B82F6", y: 32 },
  { id: "social", name: "Mídia Social", sub: "Presença & Conteúdo", icon: Share2, color: "#38BDF8", y: 96 },
  { id: "whatsapp", name: "WhatsApp", sub: "Relacionamento", icon: MessageCircle, color: "#2DD4BF", y: 160 },
  { id: "crm", name: "CRM", sub: "Organização de Leads", icon: Database, color: "#60A5FA", y: 224 },
  { id: "marketplace", name: "Marketplace & E-commerce", sub: "Venda Direta", icon: Store, color: "#818CF8", y: 288 },
];

const insights = {
  seo: { title: "Achado no Google", text: "Ficha do Google Meu Negócio otimizada e site bem estruturado pra aparecer no mapa e na busca local — sem depender de anúncio pago." },
  social: { title: "Presença que conecta", text: "Conteúdo pensado pro seu público específico, não fórmula de engajamento genérico — a rede certa pro tipo de negócio que você tem." },
  whatsapp: { title: "Relacionamento direto", text: "Atendimento organizado que transforma contato em conversa e conversa em venda, sem lead esfriando na fila." },
  crm: { title: "Nenhum lead esquecido", text: "Histórico de contato e follow-up organizado — sem depender de memória ou planilha solta pra fechar venda." },
  marketplace: { title: "Onde o cliente já compra", text: "Presença nos marketplaces certos e loja própria de e-commerce, com ficha otimizada pra converter quem já está pronto pra comprar." },
};

const EcosystemFunnel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToIndex = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused) {
      const resumeTimeout = setTimeout(() => setIsPaused(false), 15000);
      return () => clearTimeout(resumeTimeout);
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % dataSource.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleManualClick = (index: number) => {
    setIsPaused(true);
    goToIndex(index);
  };

  const activeData = dataSource[activeIndex];
  const activeInsight = insights[activeData.id as keyof typeof insights];

  return (
    <section id="monitoramento" className="py-24 lg:py-32 bg-surface-subtle overflow-hidden relative">
      <div className="container max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/5 text-accent text-xs font-mono uppercase tracking-widest mb-5"
          >
            <Cpu size={13} />
            Onde seu cliente está
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight tracking-tight"
          >
            Cinco canais, <span className="text-gradient-aurora">um caminho certo</span> pra vender mais
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            É assim que SEO, redes sociais, WhatsApp, CRM, marketplace e
            e-commerce se
            conectam numa estratégia só — em vez de cada canal puxar pra um
            lado diferente.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative">
          {/* Data sources */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:flex lg:flex-col gap-3 w-full lg:w-auto relative z-10">
            {dataSource.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleManualClick(index)}
                animate={{
                  opacity: activeIndex === index ? 1 : 0.4,
                  scale: activeIndex === index ? 1.05 : 1,
                  borderColor: activeIndex === index ? item.color : "rgba(255,255,255,0.08)",
                  boxShadow: activeIndex === index ? `0 4px 20px ${item.color}30` : "none",
                }}
                transition={{ duration: 0.3 }}
                className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 p-2 lg:p-3 bg-white/[0.02] border rounded-xl cursor-pointer hover:bg-white/[0.05] transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm transition-transform active:scale-90"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon size={20} />
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-sm font-semibold text-foreground leading-tight">{item.name}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-tighter font-mono">{item.sub}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Central processor */}
          <div className="relative flex flex-col items-center justify-center flex-1 py-4 lg:py-0 w-full lg:h-[400px]">
            <svg
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 320"
              fill="none"
            >
              {dataSource.map((item, index) => {
                const isActive = activeIndex === index;
                const pathData = `M 0 ${item.y} C 150 ${item.y}, 150 160, 300 160`;
                return (
                  <g key={`path-${item.id}`}>
                    <path d={pathData} stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="4 4" />
                    <AnimatePresence>
                      {isActive && (
                        <motion.path
                          d={pathData}
                          stroke={item.color}
                          strokeWidth="3"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        />
                      )}
                    </AnimatePresence>
                  </g>
                );
              })}
              <path d="M 300 160 L 400 160" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="4 4" />
              <motion.path
                d="M 300 160 L 400 160"
                stroke={activeData.color}
                strokeWidth="3"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
            </svg>

            <div className="flex flex-col items-center">
              <div className="bg-white/[0.03] border border-white/10 px-6 py-4 lg:px-8 lg:py-6 rounded-2xl lg:rounded-3xl backdrop-blur-sm flex flex-col items-center relative z-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="text-accent mb-2 lg:mb-3"
                >
                  <Cpu size={32} className="lg:w-11 lg:h-11" strokeWidth={1.5} />
                </motion.div>
                <div className="text-center">
                  <p className="font-display text-base lg:text-xl font-semibold text-foreground leading-tight">
                    Análise cruzada
                  </p>
                  <p className="font-mono text-[8px] lg:text-[10px] font-semibold text-accent tracking-[0.2em] uppercase">
                    {isPaused ? "SELEÇÃO MANUAL" : "AUTO-ROTAÇÃO"}
                  </p>
                </div>
              </div>
              <motion.div className="lg:hidden mt-6" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <ArrowDown size={32} strokeWidth={1.5} style={{ color: activeData.color }} />
              </motion.div>
            </div>
          </div>

          {/* Insight card */}
          <div className="w-full lg:max-w-sm relative z-30">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                className="bg-white/[0.02] border border-white/10 p-6 lg:p-8 rounded-2xl lg:rounded-3xl relative overflow-hidden min-h-[180px] lg:h-56 flex flex-col justify-center"
              >
                {!isPaused && (
                  <motion.div
                    key={`timer-${activeIndex}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="absolute top-0 left-0 h-1"
                    style={{ backgroundColor: activeData.color }}
                  />
                )}
                {isPaused && (
                  <div className="absolute top-0 left-0 w-full h-1 opacity-30" style={{ backgroundColor: activeData.color }} />
                )}

                <div className="flex items-center gap-3 mb-3 lg:mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0" style={{ backgroundColor: activeData.color }}>
                    <activeData.icon size={16} />
                  </div>
                  <h3 className="font-display text-base lg:text-lg font-semibold text-foreground leading-tight">{activeInsight.title}</h3>
                </div>

                <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed italic">
                  "{activeInsight.text}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemFunnel;
