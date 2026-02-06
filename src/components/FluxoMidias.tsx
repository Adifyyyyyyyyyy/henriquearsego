import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, Database, Search, 
  Smartphone, Globe, Cpu, ArrowDown 
} from "lucide-react";

const dataSource = [
  { id: "meta", name: "Meta Ads", sub: "Data Signals", icon: Smartphone, color: "#1877F2", y: 32 },
  { id: "google", name: "Google Ads", sub: "Search Intent", icon: Search, color: "#4285F4", y: 96 },
  { id: "capi", name: "Meta CAPI", sub: "Server Events", icon: Database, color: "#00a884", y: 160 },
  { id: "analytics", name: "GA4", sub: "User Behavior", icon: BarChart3, color: "#F9AB00", y: 224 },
  { id: "crm", name: "CRM Data", sub: "Offline Conversions", icon: Globe, color: "#7c3aed", y: 288 },
];

const insights = {
  meta: { title: "Otimização de Público", text: "Identificamos padrões de compra que permitem reduzir seu CPL em até 30% via Lookalike 1%." },
  google: { title: "Escala de Intenção", text: "Termos de busca de fundo de funil detectados com baixa concorrência e alto ROI." },
  capi: { title: "Rastreamento 100%", text: "Eventos de servidor recuperando 25% das conversões perdidas pelo bloqueio de cookies do iOS." },
  analytics: { title: "Gargalo no Checkout", text: "Análise de comportamento detectou fricção na etapa de pagamento mobile. Correção imediata sugerida." },
  crm: { title: "LTV Inteligente", text: "Dados de vendas indicam que clientes do canal Meta têm 40% mais recompra que a média." },
};

const EcosystemFunnel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Função para mudar o index de forma segura
  const goToIndex = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused) {
      // Se estiver pausado (clicou), define um timer para voltar ao automático após 15s
      const resumeTimeout = setTimeout(() => setIsPaused(false), 15000);
      return () => clearTimeout(resumeTimeout);
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % dataSource.length);
    }, 8000); 

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleManualClick = (index) => {
    setIsPaused(true);
    goToIndex(index);
  };

  const activeData = dataSource[activeIndex];
  const activeInsight = insights[activeData.id];

  return (
    <section id="monitoramento" className="py-12 lg:py-24 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight"
          >
            Interação do funil <span className="text-electric">monitorada por IA</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-charcoal-muted max-w-2xl mx-auto"
          >
            Receba sugestões personalizadas de acordo com cada etapa e otimize seu ROI em tempo real.
          </motion.p>
        </div>

        {/* Layout Principal */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative">
          
          {/* 1. Origens de Dados (Clicáveis) */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:flex lg:flex-col gap-3 w-full lg:w-auto relative z-10">
            {dataSource.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleManualClick(index)}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0.4,
                  scale: activeIndex === index ? 1.05 : 1,
                  borderColor: activeIndex === index ? item.color : "#e5e7eb",
                  boxShadow: activeIndex === index ? `0 4px 20px ${item.color}20` : "none"
                }}
                transition={{ duration: 0.3 }}
                className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 p-2 lg:p-3 bg-white border rounded-xl shadow-sm cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm transition-transform active:scale-90"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon size={20} />
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-sm font-bold text-slate-800 leading-tight">{item.name}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-tighter">{item.sub}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* 2. Processador Central */}
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
                    <path d={pathData} stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4 4" />
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
              <path d="M 300 160 L 400 160" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4 4" />
              <motion.path 
                d="M 300 160 L 400 160" 
                stroke={activeData.color} 
                strokeWidth="3" 
                animate={{ opacity: [0.3, 1, 0.3] }} 
                transition={{ repeat: Infinity, duration: 3 }} 
              />
            </svg>

            <div className="flex flex-col items-center">
              <div className="bg-white border border-slate-200 px-6 py-4 lg:px-8 lg:py-6 rounded-2xl lg:rounded-3xl shadow-xl flex flex-col items-center relative z-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="text-electric mb-2 lg:mb-3"
                >
                  <Cpu size={32} className="lg:w-11 lg:h-11" strokeWidth={1.5} />
                </motion.div>
                <div className="text-center">
                  <p className="text-base lg:text-xl font-bold text-slate-900 leading-tight">Deep Analysis</p>
                  <p className="text-[8px] lg:text-[10px] font-black text-electric tracking-[0.2em] uppercase">
                    {isPaused ? "MANUAL OVERRIDE" : "IA-POWERED"}
                  </p>
                </div>
              </div>
              <motion.div className="lg:hidden mt-6" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <ArrowDown size={32} strokeWidth={1.5} style={{ color: activeData.color }} />
              </motion.div>
            </div>
          </div>

          {/* 3. Card de Insight */}
          <div className="w-full lg:max-w-sm relative z-30">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                className="bg-white border border-slate-200 p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl relative overflow-hidden min-h-[180px] lg:h-56 flex flex-col justify-center"
              >
                {/* Barra de Tempo (Reinicia ao clicar) */}
                {!isPaused && (
                  <motion.div 
                    key={`timer-${activeIndex}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="absolute top-0 left-0 h-1.5"
                    style={{ backgroundColor: activeData.color }}
                  />
                )}
                {isPaused && (
                   <div className="absolute top-0 left-0 w-full h-1.5 opacity-30" style={{ backgroundColor: activeData.color }} />
                )}
                
                <div className="flex items-center gap-3 mb-3 lg:mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm" style={{ backgroundColor: activeData.color }}>
                    <activeData.icon size={16} />
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-slate-800 leading-tight">{activeInsight.title}</h3>
                </div>
                
                <p className="text-xs lg:text-sm text-slate-600 leading-relaxed italic">
                  "{activeInsight.text}"
                </p>

                {isPaused && (
                  <div className="mt-4 flex justify-end">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest animate-pulse">
                      IA Pausada
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EcosystemFunnel;