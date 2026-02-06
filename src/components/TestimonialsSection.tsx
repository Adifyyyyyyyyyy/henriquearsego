import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Vitória T.",
    role: "Owner",
    content: "Henrique é um profissional excelente e super prestativo! Com toda certeza indicarei para mais pessoas!",
    highlight: "Parabéns! 🤗👏🏻",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXKiUl2qV9y_x95yE2NHMoFFYE296pL07-EPKWXhFnpfS_ncBUXmA=s36-c-rp-mo-br100"
  },
  {
    name: "Pedro S.",
    role: "Marketing Head, FitLife",
    content: "Henrique é um profissional de excelência, com ótimos conhecimentos em marketing digital e foco em resultado. Recomendo seus serviços para empresas que desejam ampliar a visibilidade na web,",
    highlight: "aumentar o tráfego e converter!",
    avatar: "https://framerusercontent.com/images/bnJJiW5Vfixlrz7M2pzoeyHBU.png"
  },
  {
    name: "Marcos V.",
    role: "Founder, SolarEnergy",
    content: "O diagnóstico gratuito foi o ponto de virada. Descobrimos que estávamos perdendo 60% do rastreamento no iOS.",
    highlight: "Recuperamos nosso ROI.",
    avatar: "https://framerusercontent.com/images/rlizSNVuxrrqd6I5hGaSxwqn0Os.png"
  },
  {
    name: "Ana Paula",
    role: "E-commerce Manager",
    content: "A automação para analisar as campanhas é sensacional. Não perdemos mais tempo com planilhas manuais.",
    highlight: "Escalabilidade garantida.",
    avatar: "https://framerusercontent.com/images/X0pqhTmlK8gdYqPbljhuLXlyd0I.png"
  },
  {
    name: "Aline Iohann",
    role: "Dentista",
    content: "Já tinha tentado com outras agências mas só chegava lead curioso, quando instalamos o CRM os leads começaram a chegar", 
    highlight: "com muito mais qualidade.",
    avatar: "data:image/jpeg;base64,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"
  }
];

const TestimonialCard = ({ item }) => (
  // Removido o whitespace-nowrap do container pai e adicionado min-width e max-width flexíveis
  <div className="flex-shrink-0 w-[85vw] md:w-[400px] p-6 mx-3 bg-white border border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full min-h-[280px]">
    <div>
      <div className="flex items-center gap-3 mb-4">
        <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover border border-slate-100" />
        <div className="whitespace-normal"> {/* Garante que nomes longos quebrem linha se necessário */}
          <h3 className="text-sm font-bold text-slate-900 leading-none">{item.name}</h3>
          <p className="text-[10px] md:text-xs text-slate-500 mt-1">{item.role}</p>
        </div>
      </div>
      
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-electric text-electric" />
        ))}
      </div>

      {/* whitespace-normal é a chave aqui para o texto não vazar para a lateral */}
      <blockquote className="text-sm text-slate-700 leading-relaxed italic whitespace-normal">
        “{item.content} <span className="bg-electric/10 text-electric not-italic px-1.5 py-0.5 rounded-md font-medium inline-block mt-1">{item.highlight}</span>”
      </blockquote>
    </div>
  </div>
);

const TestimonialsSection = () => {
  // Triplicamos a lista para garantir que não haja "buracos" visuais durante a animação infinita
  const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-slate-50/50 overflow-hidden">
      <div className="container mb-12 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
          Resultados que falam por <span className="text-electric">si</span>
        </h2>
        <p className="text-charcoal-muted max-w-2xl mx-auto">
          Empresas que escalaram suas operações com nossa metodologia.
        </p>
      </div>

      {/* Container de animação com flex-nowrap apenas no wrapper da animação */}
      <div className="relative flex flex-col gap-6">
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex flex-nowrap"
            animate={{ x: [0, -2000] }} // Ajuste este valor conforme o número de itens
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {tripleTestimonials.map((t, i) => (
              <TestimonialCard key={i} item={t} />
            ))}
          </motion.div>
        </div>

        <div className="flex overflow-hidden">
          <motion.div 
            className="flex flex-nowrap"
            animate={{ x: [-2000, 0] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {tripleTestimonials.map((t, i) => (
              <TestimonialCard key={i} item={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;