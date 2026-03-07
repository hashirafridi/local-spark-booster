import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Phone, MapPin } from "lucide-react";
import heroBg from "@/assets/service-3.jpg";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerAchilles from "@/assets/partner-achilles.jpg";
import partnerIso from "@/assets/partner-iso9001.png";
import partnerSafe from "@/assets/partner-safecontractor.jpg";

const locationTabs = [
  {
    city: "London",
    contact: "020 7183 4247",
    mapQuery: "AMC+Business+Centre+12+Cumberland+Avenue+London+NW10+7QL",
    description:
      "Our London Head Office support each of the other offices and support centres around the UK and Ireland. From here, we take orders and confirm security services.\n\nOur London office is made up of professional and experienced operational staff with ambient local knowledge, who will be happy to answer any questions you have regarding our security services, security cameras or support services.",
  },
  {
    city: "Edinburgh",
    contact: "0131 516 2362",
    mapQuery: "Fleming+House+Fleming+Road+Kirkton+Campus+Livingston+Edinburgh+EH54+7BN",
    description:
      "Our Edinburgh office serves Scotland and the surrounding regions, providing tailored security solutions to meet local requirements.\n\nThe team here brings extensive knowledge of the Scottish market and regulatory environment, ensuring compliance and top-quality service delivery across all sectors.",
  },
  {
    city: "Manchester",
    contact: "0161 516 2362",
    mapQuery: "Chamber+Business+Centre+Chapel+Road+Hollinwood+Oldham+Manchester+OL8+4QQ",
    description:
      "Our Manchester support centre covers the North of England, offering rapid response and local expertise for businesses across the region.\n\nWith experienced operational staff on hand, we ensure that all clients in the area receive the same high standard of service that Vigilant is known for nationwide.",
  },
  {
    city: "Dublin",
    contact: "+353 1906 1915",
    mapQuery: "10+Abbey+Business+Park+Grand+Drive+Baldoyle+Dublin+13+Ireland",
    description:
      "Our Dublin office extends Vigilant's reach into the Republic of Ireland, providing comprehensive security services to Irish businesses.\n\nThe Dublin team understands the unique security landscape of Ireland and works closely with clients to deliver bespoke protection solutions.",
  },
];

const supportFunctions = [
  "Carry out site surveys and risk assessments",
  "Liaise with customers and carry out customer satisfaction surveys",
  "Conduct site visits and ensure site security",
  "Build a communication bridge between company's top management and the security officers and supervisors",
  "Provide training to the security officers and recording performance",
];

const Locations = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = locationTabs[activeTab];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: "320px" }}>
        <div className="absolute inset-0">
          <img src={heroBg} alt="Locations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">Locations</h1>
        </div>
      </section>

      {/* SUPPORT CENTRES TEXT */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Presence</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6">Support Centres</h2>
          <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            <p>
              Our Support Centres across the country not only look after sites and customers' interests, but also ensure the welfare of our officers.
            </p>
            <p>
              In these centres, we have professional and experienced operational staff with ambient local knowledge.
            </p>
            <p className="font-semibold text-foreground">The following are the main functions of a support centre:</p>
            <ul className="space-y-3 pl-1">
              {supportFunctions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MAP + TABS SECTION */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="text-center mb-10">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Offices</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
              Select one of the Support Centres below for further information
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {locationTabs.map((tab, i) => (
              <button
                key={tab.city}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 text-sm font-semibold rounded-sm transition-colors cursor-pointer ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary/40"
                }`}
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {tab.city}
                </span>
              </button>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-sm overflow-hidden border border-border mb-8" style={{ height: "400px" }}>
            <iframe
              title={`Map of ${active.city} office`}
              src={`https://www.google.com/maps?q=${active.mapQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Office Details */}
          <div className="bg-card border border-border rounded-sm p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{active.city} Office</h3>
                </div>
                <div className="flex items-center gap-2 mb-5">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contact:</span>
                  <a
                    href={`tel:${active.contact.replace(/\s/g, "")}`}
                    className="text-foreground font-semibold hover:text-primary transition-colors"
                  >
                    {active.contact}
                  </a>
                </div>
                {active.description.split("\n\n").map((para, i) => (
                  <p key={i} className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all mt-2"
                >
                  Get in touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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

export default Locations;
