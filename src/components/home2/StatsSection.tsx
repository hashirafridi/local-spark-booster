const stats = [
  { number: "3,000+", desc: "Individual sites protected by Vigilant throughout the UK" },
  { number: "80,000+", desc: "UK lone workers are protected by Vigilant" },
  { number: "25", desc: "UK depots enable us to provide a truly local service" },
];

const Cross = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none">
    <line x1="8" y1="0" x2="8" y2="16" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
    <line x1="0" y1="8" x2="16" y2="8" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
  </svg>
);

const StatsSection = () => {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        <p className="text-center text-muted-foreground text-sm font-medium mb-10">
          Protection in numbers:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="relative border border-muted-foreground/40 bg-card p-8 md:p-10"
            >
              <Cross className="absolute -top-2 -left-2" />
              <Cross className="absolute -top-2 -right-2" />
              <Cross className="absolute -bottom-2 -left-2" />
              <Cross className="absolute -bottom-2 -right-2" />

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
