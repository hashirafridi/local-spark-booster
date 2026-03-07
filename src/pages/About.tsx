import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, CheckCircle2, Shield, FileText, Leaf, Users, HeartHandshake, ClipboardCheck, Target, BookOpen } from "lucide-react";
import heroBg from "@/assets/service-2.jpg";
import qualityImg from "@/assets/quality-solutions.jpg";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerAchilles from "@/assets/partner-achilles.jpg";
import partnerIso from "@/assets/partner-iso9001.png";
import partnerSafe from "@/assets/partner-safecontractor.jpg";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const sectionLinks = [
  { label: "Accreditations", icon: Shield, img: service1 },
  { label: "Company Profile", icon: FileText, img: service2 },
  { label: "Environmental Policy", icon: Leaf, img: service3 },
  { label: "Equal Opportunities Policy", icon: Users, img: service1 },
  { label: "Health and Safety Policy", icon: HeartHandshake, img: service2 },
  { label: "Mission", icon: Target, img: service3 },
  { label: "Quality Policy", icon: ClipboardCheck, img: service1 },
  { label: "Staff Handbook", icon: BookOpen, img: service2 },
];

const fourPoints = [
  "Trained security consultant to conduct profile surveys",
  "Comprehensive security analysis reports",
  "Appropriate and cost-effective security service solutions",
  "24-hour control room, emergency backup service and regional support",
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: "320px" }}>
        <div className="absolute inset-0">
          <img src={heroBg} alt="About us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">About Us</h1>
        </div>
      </section>

      {/* IN THIS SECTION */}
      <section className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
          <h2 className="text-white font-bold text-lg md:text-xl mb-6">In This Section</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {sectionLinks.map((item) => (
              <Link
                key={item.label}
                to="/about"
                className="group cursor-pointer relative overflow-hidden rounded-sm border border-white/10 hover:border-primary transition-all"
              >
                <div className="h-24 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 brightness-50 group-hover:brightness-[0.35]"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-2">
                  <div className="w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-white text-xs font-semibold text-center leading-tight">{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN TEXT */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Who We Are</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6">Company Profile</h2>
          <div className="space-y-5 text-muted-foreground text-sm md:text-base leading-relaxed">
            <p>
              Vigilant Security Services UK Ltd specialises in the provision of professional security personnel to individuals, national and multinational companies across all sectors throughout United Kingdom and Republic of Ireland.
            </p>
            <p>
              Vigilant is one of the UK's premier and leading independent providers of security services with over 100 years' combined experience within security sector. Our strength is to clearly understand customers' security requirements by identifying new and emerging threats, efficient working practices and honest customer care. We always concentrate on delivering targeted, dedicated and appropriate security services to our customers of all types.
            </p>
            <p>
              We have flexibility to provide tailored-made security solutions and services in the United Kingdom and Republic of Ireland that will meet specific needs and budget of each client. As an independent security provider, our core values are based upon fidelity, trust, integrity, cooperation and communication.
            </p>
            <p>
              Our aim is to work in collaboration with our customers as a strategic partner of choice, providing a sustainable security service that concentrates on delivery services.
            </p>
            <p>
              Our independence ensures we are focused on delivering you the 'Best Services in Class'. Vigilant Security can offer a huge scope of security services, and all our personnel are professionally trained experts who have been trained to a significantly higher standard through the appointment of professionally accredited directors and managers.
            </p>
            <p>
              These experts are able to deliver up-to-date and opportune training modules and specialist subject workshops to our staff in the field. As an SIA-approved contractor, our security personnel in the UK and Republic of Ireland are operating at levels well in excess of those required for ACS accreditation, and we ensure that all our staff are thoroughly screened and vetted to BS7858 standards.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES TEXT + IMAGE */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Services</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6">Quality Security Services</h2>
              <div className="space-y-5 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  Our services include the provision of quality security services at office buildings, sensitive corporate locations, gated residential communities, warehouses and retail outlets, either static or mobile, on a 24-hour basis.
                </p>
                <p>
                  All Vigilant Security officers are trained to use physical and electronic systems as part of their duties, including CCTV Surveillance, Alarm Systems, Access Control, Searching and Profiling Systems.
                </p>
              </div>
            </div>
            <div className="rounded-sm overflow-hidden shadow-lg">
              <img src={qualityImg} alt="Security officers" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FOUR POINTS */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Commitment</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-3">
            Understanding & Delivering the Best
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
            We will carry out the following to be able to understand and provide the best of Vigilant services:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fourPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 p-5 border border-border rounded-sm bg-card hover:border-primary/30 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCREDITATION + CTA */}
      <section className="bg-secondary">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Accredited</span>
          <h2 className="text-xl md:text-2xl font-bold text-white mt-3 mb-4">
            Approved Contractor of Security Guarding, Door Supervisor, Keyholding
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Trust Vigilant as Your Security Services Company
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Ready to enhance your security arrangements? Contact us to speak with a consultant about how our security services can protect your people, property, and peace of mind.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity text-sm"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* TRUSTED PARTNERS LOGOS */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
          <p className="text-center text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-8">
            Trusted Partners To
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-20 items-center">
              {[...Array(4)].flatMap((_, setIndex) =>
                [partnerLogo1, partnerLogo2, partnerAchilles, partnerIso, partnerSafe].map((logo, i) => (
                  <img
                    key={`${setIndex}-${i}`}
                    src={logo}
                    alt="Partner logo"
                    className="shrink-0 h-28 md:h-36 w-auto object-contain opacity-100 transition-opacity"
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
