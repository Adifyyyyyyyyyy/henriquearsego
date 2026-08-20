import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users, Target,
  ShoppingCart, DollarSign,
  AlertTriangle, CheckCircle2, Info,
  Eye, Wallet
} from "lucide-react";

type CalcMode = 'vendas' | 'leads';

const ConversionCalculator = () => {
  const [mode, setMode] = useState<CalcMode>('vendas');

  const [investment, setInvestment] = useState<number>(5000);
  const [sessions, setSessions] = useState<number>(10000);
  const [viewProduct, setViewProduct] = useState<number>(6000);
  const [addToCart, setAddToCart] = useState<number>(800);
  const [purchases, setPurchases] = useState<number>(150);
  const [ticketMedia, setTicketMedia] = useState<number>(200);

  const [leads, setLeads] = useState<number>(250);
  const [qualifiedLeads, setQualifiedLeads] = useState<number>(50);

  const [results, setResults] = useState<any>({});

  useEffect(() => {
    if (mode === 'vendas') {
      const viewRate = sessions > 0 ? (viewProduct / sessions) * 100 : 0;
      const cartRate = viewProduct > 0 ? (addToCart / viewProduct) * 100 : 0;
      const checkoutConv = addToCart > 0 ? (purchases / addToCart) * 100 : 0;
      const totalConv = sessions > 0 ? (purchases / sessions) * 100 : 0;

      const revenue = purchases * ticketMedia;
      const roas = investment > 0 ? revenue / investment : 0;
      const cpa = purchases > 0 ? investment / purchases : 0;
      const cpc = sessions > 0 ? investment / sessions : 0;

      const benchmark = 1.5;
      const isPositive = totalConv >= benchmark && roas >= 2;

      setResults({
        convRate: totalConv.toFixed(2),
        roas: roas.toFixed(2),
        cpa: cpa.toFixed(2),
        isPositive,
        status: totalConv >= benchmark ? 'Alta performance' : 'Abaixo do benchmark',
        metrics: [
          { label: "Visualização", value: `${viewRate.toFixed(1)}%` },
          { label: "Add. Carrinho", value: `${cartRate.toFixed(1)}%` },
          { label: "Checkout", value: `${checkoutConv.toFixed(1)}%` },
          { label: "CPC Médio", value: `R$ ${cpc.toFixed(2)}` },
        ],
        diagnosis: totalConv < benchmark
          ? "Gargalo detectado. Sua taxa de conversão está abaixo de 1,5%. Verifique fricção no checkout ou na oferta."
          : "Operação saudável. Foco agora é escalar investimento mantendo o ROAS.",
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
        status: isPositive ? 'Operação eficiente' : 'Fuga de oportunidades',
        metrics: [
          { label: "Custo por Lead", value: `R$ ${cpl.toFixed(2)}` },
          { label: "Custo Lead Qualif.", value: `R$ ${cpql.toFixed(2)}` },
          { label: "Meta de Mercado", value: "2.50%" },
        ],
        diagnosis: isPositive
          ? "Boa captura. Vale automatizar a nutrição pra acelerar a venda."
          : "Sua landing page pode estar perdendo lead. Recomendo diagnóstico de CRO.",
      });
    }
  }, [mode, investment, sessions, viewProduct, addToCart, purchases, ticketMedia, leads, qualifiedLeads]);

  return (
    <section id="Calculadora" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/5 text-accent text-xs font-mono uppercase tracking-widest mb-5">
            Ferramenta
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-4">
            Auditoria de <span className="text-gradient-aurora">performance real</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Mapeie sua eficiência operacional e descubra o que impede a
            operação de escalar com lucro.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="flex p-1.5 bg-white/[0.03] border border-white/8 rounded-2xl w-full md:w-fit mb-4">
              <button
                onClick={() => setMode('vendas')}
                className={`flex-1 md:flex-none px-8 py-3 rounded-xl font-semibold text-sm transition-all ${mode === 'vendas' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
              >
                E-commerce
              </button>
              <button
                onClick={() => setMode('leads')}
                className={`flex-1 md:flex-none px-8 py-3 rounded-xl font-semibold text-sm transition-all ${mode === 'leads' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
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

          <div className="lg:col-span-4 sticky top-24">
            <motion.div
              layout
              className={`p-8 rounded-[2rem] border transition-all duration-500 ${results.isPositive ? 'bg-white/[0.03] border-accent/25' : 'bg-destructive/10 border-destructive/30'}`}
            >
              <div className="flex justify-between items-center mb-8">
                <p className="font-mono text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Métrica Principal</p>
                {results.isPositive ? <CheckCircle2 className="text-emerald-400" size={18} /> : <AlertTriangle className="text-amber-400" size={18} />}
              </div>

              <div className="mb-8 text-center md:text-left">
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  <span className="font-display text-6xl font-semibold text-foreground tracking-tight">{results.convRate}</span>
                  <span className="text-xl text-muted-foreground">%</span>
                </div>
                <p className={`text-xs font-semibold uppercase tracking-widest mt-2 font-mono ${results.isPositive ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {results.status}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 mb-8">
                <div className="flex items-center gap-2 mb-2 text-muted-foreground font-semibold uppercase tracking-widest text-[10px] font-mono">
                  <Info size={13} /> Sugestão estratégica
                </div>
                <p className="text-xs italic leading-relaxed text-foreground/80">"{results.diagnosis}"</p>
              </div>

              <div className="space-y-4 border-t border-white/8 pt-8">
                {results.metrics?.map((m: any, i: number) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-widest font-mono">{m.label}</span>
                    <span className="font-mono font-semibold text-sm text-foreground">{m.value}</span>
                  </div>
                ))}
                {mode === 'vendas' && (
                  <div className="pt-4 mt-4 border-t border-white/5 text-center">
                    <p className="text-[10px] text-muted-foreground uppercase font-semibold mb-1 font-mono">ROAS Estimado</p>
                    <p className={`font-display text-3xl font-semibold ${results.isPositive ? 'text-emerald-400' : 'text-foreground'}`}>
                      {results.roas}x
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-2 font-mono">CPA: R$ {results.cpa}</p>
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

const InputField = ({ label, value, onChange, icon, isCurrency }: any) => (
  <div className="flex flex-col gap-2">
    <label className="flex items-center gap-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest font-mono pl-1">
      {React.cloneElement(icon, { size: 14 })}
      {label}
    </label>
    <div className="relative group">
      {isCurrency && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold pointer-events-none group-focus-within:text-accent transition-colors">
          R$
        </div>
      )}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 ${isCurrency ? 'pl-11' : 'pl-6'} pr-4 text-lg font-semibold text-foreground outline-none transition-all cursor-text
                   hover:border-white/20
                   focus:bg-white/[0.05] focus:border-accent focus:ring-4 focus:ring-accent/10
                   [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
        placeholder="0"
      />
    </div>
  </div>
);

export default ConversionCalculator;
