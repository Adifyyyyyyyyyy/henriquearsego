const clients = [
  "iFood", "Conta Simples", "ZapSign", "AmigoTech", "TapTap Send",
  "CFL Empreendimentos", "Nortis Incorporadora", "Vibra Residencial", "The Florida Lounge",
  "OncoClínicas", "Exmed", "Pure Pilates",
  "Selfit", "Biofisic", "Unisapiens", "Uninorte", "Faculdade Líbano",
  "Warner Bros.", "Dr. Lava Tudo", "Midea", "Carapreta", "Raízen",
];

const ClientMarquee = () => {
  const track = [...clients, ...clients];

  return (
    <section className="relative py-14 border-y border-white/5 bg-background overflow-hidden">
      <div className="container mb-6 px-4">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] text-center">
          Marcas que já passaram pela mesa de mídia
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max animate-marquee">
          {track.map((name, i) => (
            <span
              key={i}
              className="font-display text-xl sm:text-2xl font-medium text-muted-foreground/50 hover:text-foreground transition-colors duration-300 px-8 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
