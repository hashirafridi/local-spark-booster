import { Link } from "react-router-dom";
import { Radio, Camera, DoorOpen, Fence, UserCheck, ShieldCheck, Building2, ArrowDownRight } from "lucide-react";
import solutionAlarm from "@/assets/solution-alarm.jpg";
import solutionCctv from "@/assets/solution-cctv.jpg";
import solutionEntry from "@/assets/solution-entry.jpg";
import solutionFencing from "@/assets/solution-fencing.jpg";
import solutionLoneworker from "@/assets/solution-loneworker.jpg";
import solutionGuarding from "@/assets/solution-guarding.jpg";
import solutionVacant from "@/assets/solution-vacant.jpg";

const solutions = [
  { icon: Radio, title: "Alarms", img: solutionAlarm },
  { icon: Camera, title: "CCTV", img: solutionCctv },
  { icon: DoorOpen, title: "Entry Systems", img: solutionEntry },
  { icon: Fence, title: "Fencing & Gating", img: solutionFencing },
  { icon: UserCheck, title: "Lone Worker Protection", img: solutionLoneworker },
  { icon: ShieldCheck, title: "Security & Guarding", img: solutionGuarding },
  { icon: Building2, title: "Vacant Property", img: solutionVacant },
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

const SolutionCard = ({ item }: { item: { icon: React.ElementType; title: string; img: string } }) => {
  const Icon = item.icon;
  return (
    <Link
      to="/services"
      className="group relative overflow-hidden border-t border-border flex flex-col justify-between"
      style={{ minHeight: "200px" }}
    >
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
      <div className="relative p-5 flex flex-col justify-between h-full">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-sm font-bold text-white">{item.title}</h3>
          <Icon className="w-5 h-5 text-white/70 shrink-0" />
        </div>
        <div className="mt-4 self-end">
          <div className="w-10 h-10 bg-white/20 flex items-center justify-center rounded-sm group-hover:bg-primary/80 transition-colors">
            <ArrowDownRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SolutionsSection;
