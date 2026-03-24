import { Link } from "react-router-dom";
import { Radio, Camera, DoorOpen, Fence, UserCheck, ShieldCheck, Building2, ArrowDownRight } from "lucide-react";

const solutions = [
  {
    icon: Radio,
    title: "Alarms",
    desc: "Effective protection for your site or property",
  },
  {
    icon: Camera,
    title: "CCTV",
    desc: "A range of options with intelligent AI monitoring",
  },
  {
    icon: DoorOpen,
    title: "Entry Systems",
    desc: "Take complete control of who can access your site",
  },
  {
    icon: Fence,
    title: "Fencing & Gating",
    desc: "Advanced perimeter solutions for any situation",
  },
  {
    icon: UserCheck,
    title: "Lone Worker Protection",
    desc: "Peace of mind for you and your workforce",
  },
  {
    icon: ShieldCheck,
    title: "Security & Guarding",
    desc: "SIA compliant manned guarding and security services",
  },
  {
    icon: Building2,
    title: "Vacant Property",
    desc: "A comprehensive range of vacant property services, tailored to your needs",
  },
];

const SolutionsSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">
          {/* Left column - heading & description */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-4 mb-6">
              <span className="text-secondary">
                The tools we
                <br />
                use to solve
              </span>
              <br />
              <span style={{ color: "#ff0000" }}>
                your
                <br />
                challenges:
              </span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              From vacant property security to lone worker protection, we offer a full suite of solutions that adapt to your unique needs. Our team acts fast and thinks ahead — so you can focus on what matters most.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-primary-foreground text-sm font-semibold rounded-sm transition-colors w-full"
              style={{ backgroundColor: "#d60000" }}
            >
              Download our brochure
            </Link>
          </div>

          {/* Right column - solutions grid */}
          <div>
            {/* First row - 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
              {solutions.slice(0, 3).map((item) => (
                <SolutionCard key={item.title} item={item} />
              ))}
            </div>
            {/* Second row - 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-0">
              {solutions.slice(3).map((item) => (
                <SolutionCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionCard = ({ item }: { item: { icon: React.ElementType; title: string; desc: string } }) => {
  const Icon = item.icon;
  return (
    <Link
      to="/services"
      className="group border-t border-border p-5 flex flex-col justify-between hover:bg-muted/50 transition-colors"
      style={{ minHeight: "200px" }}
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-sm font-bold text-secondary">{item.title}</h3>
          <Icon className="w-5 h-5 text-muted-foreground shrink-0" />
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
      </div>
      <div className="mt-4 self-end">
        <div className="w-10 h-10 bg-muted flex items-center justify-center rounded-sm group-hover:bg-primary/10 transition-colors">
          <ArrowDownRight className="w-4 h-4 text-secondary" />
        </div>
      </div>
    </Link>
  );
};

export default SolutionsSection;
