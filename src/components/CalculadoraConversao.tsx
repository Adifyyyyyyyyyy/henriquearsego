import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, Users, Target, Percent, 
  ShoppingCart, DollarSign, BarChart3, TrendingUp, 
  AlertTriangle, ArrowRight, CheckCircle2, Info,
  Eye, MousePointer2, Wallet
} from "lucide-react";

type CalcMode = 'vendas' | 'leads';

const ConversionCalculator = () => {
  const [mode, setMode] = useState<CalcMode>('vendas');
  
  // Estados para E-commerce (Ordem solicitada)
  const [investment, setInvestment] = useState<number>(5000);
  const [sessions, setSessions] = useState<number>(10000);
  const [viewProduct, setViewProduct] = useState<number>(6000);
  const [addToCart, setAddToCart] = useState<number>(800);
  const [purchases, setPurchases] = useState<number>(150);
  const [ticketMedia, setTicketMedia] = useState<number>(200);

  // Estados para Leads
  const [leads, setLeads] = useState<number>(250);
  const [qualifiedLeads, setQualifiedLeads] = useState<number>(50);

  const [results, setResults] = useState<any>({});

  useEffect(() => {
    if (mode === 'vendas') {
      // Cálculos de Funil
      const viewRate = sessions > 0 ? (viewProduct / sessions) * 100 : 0;
      const cartRate = viewProduct > 0 ? (addToCart / viewProduct) * 100 : 0;
      const checkoutConv = addToCart > 0 ? (purchases / addToCart) * 100 : 0;
      const totalConv = sessions > 0 ? (purchases / sessions) * 100 : 0;
      
      // Financeiro
      const revenue = purchases * ticketMedia;
      const roas = investment > 0 ? revenue / investment : 0;
      const cpa = purchases > 0 ? investment / purchases : 0;
      const cpc = sessions > 0 ? investment / sessions : 0;

      const benchmark = 1.5;
      const isPositive = totalConv >= benchmark && roas >= 2;

      setResults({
        convRate: totalConv.toFixed(2),
        revenue,
        roas: roas.toFixed(2),
        cpa: cpa.toFixed(2),
        cpc: cpc.toFixed(2),
        isPositive,
        status: totalConv >= benchmark ? 'Alta Performance' : 'Abaixo do Benchmark',
        metrics: [
          { label: "Taxa de Visualização", value: `${viewRate.toFixed(1)}%` },
          { label: "Adição ao Carrinho", value: `${cartRate.toFixed(1)}%` },
          { label: "Eficiência Checkout", value: `${checkoutConv.toFixed(1)}%` },
          { label: "CPC Médio", value: `R$ ${cpc.toFixed(2)}` }
        ],
        diagnosis: totalConv < benchmark 
          ? "Gargalo detectado. Sua taxa de conversão está abaixo de 1.5%. Verifique a fricção no checkout ou oferta."
          : "Operação saudável. O foco agora deve ser escala de investimento mantendo o ROAS."
      });
    } else {
      const convRate = sessions > 0 ? (leads / sessions) * 100 : 0;
      const cpl = leads > 0 ? investment / leads : 0;
      const cpql = qualifiedLeads > 0 ? investment / qualifiedLeads : 0;
      const isPositive = convRate >= 2.5;

      setResults({
        convRate: convRate.toFixed(2),
        cpl: cpl.toFixed(2),
        cpql: cpql.toFixed(2),
        isPositive,
        status: isPositive ? 'Operação Eficiente' : 'Fuga de Oportunidades',
        metrics: [
          { label: "Custo por Lead", value: `R$ ${cpl.toFixed(2)}` },
          { label: "Custo Lead Qualif.", value: `R$ ${cpql.toFixed(2)}` },
          { label: "Meta de Mercado", value: "2.50%" }
        ],
        diagnosis: isPositive
          ? "Excelente captura. Sugerimos automação de nutrição para acelerar vendas."
          : "Sua Landing Page pode estar perdendo leads. Recomendamos diagnóstico de CRO."
      });
    }
  }, [mode, investment, sessions, viewProduct, addToCart, purchases, ticketMedia, leads, qualifiedLeads]);

  return (
    <section  id="Calculadora" className="py-24 bg-white relative overflow-hidden font-sans">
      <div className="container max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-black text-charcoal tracking-tighter mb-4">
            Auditoria de <span className="text-electric">Performance Real</span>
          </h2>
          <p className="text-charcoal-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Mapeie sua eficiência operacional e descubra exatamente o que impede sua operação de marketing de escalar com lucratividade.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Editáveis */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex p-1.5 bg-slate-100 rounded-2xl w-full md:w-fit mb-4">
              <button 
                onClick={() => setMode('vendas')}
                className={`flex-1 md:flex-none px-8 py-3 rounded-xl font-bold text-sm transition-all ${mode === 'vendas' ? 'bg-white text-electric shadow-sm' : 'text-slate-500'}`}
              >
                E-commerce
              </button>
              <button 
                onClick={() => setMode('leads')}
                className={`flex-1 md:flex-none px-8 py-3 rounded-xl font-bold text-sm transition-all ${mode === 'leads' ? 'bg-white text-electric shadow-sm' : 'text-slate-500'}`}
              >
                Leads
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mode === 'vendas' ? (
                <>
                  <InputField label="Investimento" value={investment} onChange={setInvestment} icon={<Wallet />} isCurrency />
                  <InputField label="Sessões Totais" value={sessions} onChange={setSessions} icon={<Users />} />
                  <InputField label="Visualizou Produto" value={viewProduct} onChange={setViewProduct} icon={<Eye />} />
                  <InputField label="Add ao Carrinho" value={addToCart} onChange={setAddToCart} icon={<ShoppingCart />} />
                  <InputField label="Vendas (Compras)" value={purchases} onChange={setPurchases} icon={<CheckCircle2 />} />
                  <InputField label="Ticket Médio" value={ticketMedia} onChange={setTicketMedia} icon={<DollarSign />} isCurrency />
                </>
              ) : (
                <>
                  <InputField label="Investimento" value={investment} onChange={setInvestment} icon={<Wallet />} isCurrency />
                  <InputField label="Sessões" value={sessions} onChange={setSessions} icon={<Users />} />
                  <InputField label="Leads Totais" value={leads} onChange={setLeads} icon={<Target />} />
                  <InputField label="Leads Qualificados" value={qualifiedLeads} onChange={setQualifiedLeads} icon={<CheckCircle2 />} />
                </>
              )}
            </div>
          </div>

          {/* Painel de Resultados */}
          <div className="lg:col-span-4 sticky top-10">
            <motion.div 
              layout
              className={`p-8 rounded-[2.5rem] shadow-2xl text-white transition-all duration-500 ${results.isPositive ? 'bg-slate-900' : 'bg-red-950 border border-red-500/30'}`}
            >
              <div className="flex justify-between items-center mb-8">
                <p className="text-[10px] font-black tracking-widest opacity-50 uppercase">Métrica Principal</p>
                {results.isPositive ? <CheckCircle2 className="text-emerald-400" /> : <AlertTriangle className="text-amber-400" />}
              </div>
              
              <div className="mb-8 text-center md:text-left">
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  <span className="text-7xl font-black tracking-tighter">{results.convRate}</span>
                  <span className="text-2xl opacity-40">%</span>
                </div>
                <p className={`text-xs font-bold uppercase tracking-widest mt-2 ${results.isPositive ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {results.status}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-8">
                <div className="flex items-center gap-2 mb-2 text-white/40 font-black uppercase tracking-widest text-[10px]">
                  <Info size={14} /> Sugestão Estratégica
                </div>
                <p className="text-xs italic leading-relaxed text-white/80">"{results.diagnosis}"</p>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-8">
                {results.metrics?.map((m: any, i: number) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold opacity-40 tracking-widest">{m.label}</span>
                    <span className="font-black text-base tracking-tight">{m.value}</span>
                  </div>
                ))}
                {mode === 'vendas' && (
                  <div className="pt-4 mt-4 border-t border-white/5 text-center">
                    <p className="text-[10px] opacity-40 uppercase font-black mb-1">ROAS Estimado</p>
                    <p className={`text-3xl font-black ${results.isPositive ? 'text-emerald-400' : 'text-white'}`}>
                      {results.roas}x
                    </p>
                    <p className="text-[10px] opacity-40 mt-2">CPA: R$ {results.cpa}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Componente de Input Refatorado para Clareza e Digitação
const InputField = ({ label, value, onChange, icon, isCurrency }: any) => (
  <div className="flex flex-col gap-2">
    <label className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">
      {React.cloneElement(icon, { size: 14, className: "text-slate-400" })}
      {label}
    </label>
    <div className="relative group">
      {isCurrency && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 font-bold pointer-events-none group-focus-within:text-electric transition-colors">
          R$
        </div>
      )}
      <input 
        type="number" 
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full bg-slate-50 border-2 border-slate-200 rounded-2xl py-4 ${isCurrency ? 'pl-11' : 'pl-6'} pr-4 text-xl font-bold text-charcoal outline-none transition-all cursor-text
                   hover:border-slate-300
                   focus:bg-white focus:border-electric focus:ring-4 focus:ring-electric/10
                   [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
        placeholder="0"
      />
    </div>
  </div>
);

export default ConversionCalculator;