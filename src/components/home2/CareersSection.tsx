import { Link } from "react-router-dom";
import careersBg from "@/assets/careers-bg.jpg";

const CareersSection = () => {
  return (
    <section className="bg-background relative">
      {/* Top cross grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between py-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <svg key={`top-${i}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <line x1="6" y1="0" x2="6" y2="12" stroke="hsl(var(--border))" strokeWidth="1" />
              <line x1="0" y1="6" x2="12" y2="6" stroke="hsl(var(--border))" strokeWidth="1" />
            </svg>
          ))}
        </div>
        <div className="flex justify-between py-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <svg key={`top2-${i}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <line x1="6" y1="0" x2="6" y2="12" stroke="hsl(var(--border))" strokeWidth="1" />
              <line x1="0" y1="6" x2="12" y2="6" stroke="hsl(var(--border))" strokeWidth="1" />
            </svg>
          ))}
        </div>
      </div>

      {/* Image with overlay */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>
          <img
            src={careersBg}
            alt="Join our team"
            className="w-full h-full object-cover absolute inset-0"
            loading="lazy"
            width={1920}
            height={768}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-28">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              We are technology-led and<br />people-powered
            </h2>
            <p className="text-white/80 text-sm md:text-base max-w-xl leading-relaxed mb-8">
              If you're looking for a career with a growing team that supports your development and ambitions, get in touch and take the next step in your career with Vigilant.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Search our careers
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom cross grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between py-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <svg key={`bot-${i}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <line x1="6" y1="0" x2="6" y2="12" stroke="hsl(var(--border))" strokeWidth="1" />
              <line x1="0" y1="6" x2="12" y2="6" stroke="hsl(var(--border))" strokeWidth="1" />
            </svg>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
