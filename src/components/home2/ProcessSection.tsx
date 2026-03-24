import { Check } from "lucide-react";
import processImage from "@/assets/process-image.jpg";

const steps = [
  {
    step: 1,
    title: "Assess",
    desc: "We conduct a comprehensive review to assess your security needs and identify potential risks.",
  },
  {
    step: 2,
    title: "Design",
    desc: "We design a custom protection plan specifically tailored to meet your unique requirements.",
  },
  {
    step: 3,
    title: "Deliver",
    desc: "We implement and manage the solution, providing ongoing maintenance and support to ensure complete peace of mind.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-12 lg:gap-8">
          {/* Left column - heading & description */}
          <div>
            <span
              className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground mb-6"
              style={{ backgroundColor: "#d60000" }}
            >
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              <span className="text-secondary">Tailored protec-</span>
              <br />
              <span className="text-secondary">tion from </span>
              <span className="text-muted-foreground/50">start</span>
              <br />
              <span className="text-muted-foreground/50">to finish</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every protection challenge is unique, and we believe in a bespoke approach. Our process is simple, clear, and effective — ensuring you have complete confidence at every stage.
            </p>
          </div>

          {/* Middle column - steps */}
          <div className="flex flex-col justify-between gap-8">
            {steps.map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="w-12 h-12 bg-muted flex items-center justify-center rounded-sm shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    STEP {item.step}
                  </p>
                  <h3 className="text-base font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - image */}
          <div className="hidden lg:block">
            <img
              src={processImage}
              alt="Security professional"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
