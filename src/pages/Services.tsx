import { Link } from "react-router-dom";
import { ArrowRight, Phone, ChevronRight } from "lucide-react";
import heroBg from "@/assets/service-1.jpg";
import qualitySolutionsImg from "@/assets/quality-solutions.jpg";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerAchilles from "@/assets/partner-achilles.jpg";
import partnerIso from "@/assets/partner-iso9001.png";
import partnerSafe from "@/assets/partner-safecontractor.jpg";

const sectionLinks = [
  "Care & Housing Security",
  "Close Protection",
  "Construction Site Security",
  "Contract Security",
  "Corporate Security",
  "Event Security Services",
  "Guarding Services",
  "Keyholding Services",
  "Public Sector Protection",
  "Retail Security Services",
];

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        <div className="absolute inset-0">
          <img src={heroBg} alt="Turnstile security systems" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-28">
          <div className="max-w-2xl ml-auto text-right">
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-5">
              Entry Systems
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Turnstile Security Systems
            </h1>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-8">
              For any organisation involved in construction, the safety of its workers and the security of the site are paramount. Our highly advanced range of turnstile entry systems provides the ultimate solution for site access control.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition-opacity text-sm"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* IN THIS SECTION */}
      <section className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
          <h2 className="text-white font-bold text-lg md:text-xl mb-6">In This Section</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {sectionLinks.map((label) => (
              <Link
                key={label}
                to="/services"
                className="px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm font-medium hover:bg-primary hover:border-primary transition-colors text-center"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEXT */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Approach</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6">
            Tailor-Made Security Solutions
          </h2>
          <div className="space-y-5 text-muted-foreground text-sm md:text-base leading-relaxed">
            <p>
              Vigilant Security Services has designed tailor-made services for clients working in different industries and commercial sectors such as corporate, distribution, manufacturing sectors, care support work, construction, engineering and retail etc.
            </p>
            <p>
              We aim to protect not only people and properties by providing static, mobile, monitoring, patrols, access control, fire prevention and receptionist services, but also to secure the long-term reputation of our clients.
            </p>
            <p>
              Vigilant Security Services strives to continuously provide well trained and highly professional staff along with finest quality services to our clients. It is the policy of Vigilant to persistently improve our standards of services in line with the security industry's best practices. We have a wide range of security services available to you, details of which you can find by visiting the pages in this section.
            </p>
            <p>
              Threats to businesses in today's world are varied and constantly changing, making effective management of risk a boardroom issue.
            </p>
            <p>
              It is essential to have a business partner who has the expertise and resource to understand the threat, minimise the risk, and let you focus on the smooth running of your operation. As security experts, Vigilant Security Services will help you protect against violent crime, secure information and assets, and improve the image of your brand and reputation. We understand security risk by:
            </p>
            <ul className="space-y-3 pl-1">
              {[
                "Monitoring and advising on the threats to your business",
                "Quantifying, assessing and protecting the vulnerabilities within your business",
                "Keeping your business functioning for you to satisfy your customers' requirements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TEXT + IMAGE */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Quality Solutions</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6">
                Highest Quality Security Solutions
              </h2>
              <div className="space-y-5 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  We have the highest quality security solutions to address your individual security needs, whatever industry sector you are in.
                </p>
                <p>
                  We hold vast experience in tailor-made security solutions and services to the needs of many customers of all types and sizes, from the deployment of security officers, monitoring, crisis management, planning and training, and security advice.
                </p>
                <p>
                  Please feel free to call us on{" "}
                  <a href="tel:+448006800245" className="text-primary font-semibold hover:underline">
                    0800 6800 245
                  </a>{" "}
                  or{" "}
                  <Link to="/contact" className="text-primary font-semibold hover:underline">
                    Contact us
                  </Link>{" "}
                  to discuss prices and services. Thank you.
                </p>
              </div>
            </div>
            <div className="rounded-sm overflow-hidden shadow-lg">
              <img src={qualitySolutionsImg} alt="Security team" className="w-full h-full object-cover" />
            </div>
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
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition-opacity text-sm"
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

export default Services;
