const stats = [
  { number: "3,000+", desc: "Individual sites protected by Vigilant throughout the UK" },
  { number: "80,000+", desc: "UK lone workers are protected by Vigilant" },
  { number: "25", desc: "UK depots enable us to provide a truly local service" },
];

const StatsSection = () => {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        <p className="text-center text-muted-foreground text-sm font-medium mb-10">
          Protection in numbers:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="relative border border-border bg-card p-8 md:p-10"
            >
              {/* Corner crosses */}
              <span className="absolute -top-2 -left-2 text-border text-lg select-none">+</span>
              <span className="absolute -top-2 -right-2 text-border text-lg select-none">+</span>
              <span className="absolute -bottom-2 -left-2 text-border text-lg select-none">+</span>
              <span className="absolute -bottom-2 -right-2 text-border text-lg select-none">+</span>

              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-3">{stat.number}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
