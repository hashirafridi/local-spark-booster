import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield, Users, Building2, ShoppingBag, Landmark, Heart, UserCheck, Camera,
  ClipboardCheck, Award, GraduationCap, Settings, TrendingUp, ChevronRight,
  Phone, ArrowRight, CheckCircle2
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import whyChooseImg from "@/assets/why-choose-us.jpg";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerAchilles from "@/assets/partner-achilles.jpg";
import partnerIso from "@/assets/partner-iso9001.png";
import partnerSafe from "@/assets/partner-safecontractor.jpg";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import solution1 from "@/assets/solution-1.jpg";
import solution2 from "@/assets/solution-2.jpg";
import solution3 from "@/assets/solution-3.jpg";
import solution4 from "@/assets/solution-4.jpg";

const serviceImages = [service1, service2, service3];

const services = [
  {
    icon: Users,
    title: "Event Security",
    desc: "Professional crowd control, access management, and emergency response for gatherings of all sizes.",
  },
  {
    icon: Building2,
    title: "Construction Site Security",
    desc: "24/7 surveillance, access control, and asset protection for vulnerable building locations.",
  },
  {
    icon: ShoppingBag,
    title: "Retail Security",
    desc: "Visible deterrence, covert surveillance, and loss prevention to protect merchandise, staff, and customers.",
  },
  {
    icon: Landmark,
    title: "Corporate Security",
    desc: "Reception security, access control, and executive protection to safeguard your business premises.",
  },
  {
    icon: Shield,
    title: "Public Sector Protection",
    desc: "Specialised protection for government buildings and public facilities with highly trained personnel.",
  },
  {
    icon: Heart,
    title: "Care & Housing Security",
    desc: "Compassionate security for healthcare facilities and residential complexes ensuring resident safety.",
  },
  {
    icon: UserCheck,
    title: "Support Workers",
    desc: "Welfare checks, concierge duties, and administrative support to enhance your security programme.",
  },
  {
    icon: Camera,
    title: "Security Cameras",
    desc: "Advanced CCTV monitoring with remote viewing capabilities for comprehensive visual coverage.",
  },
  {
    icon: ClipboardCheck,
    title: "Support Services",
    desc: "Risk assessments, security audits, staff training, and emergency response planning.",
  },
];

const whyChoose = [
  {
    icon: Award,
    title: "SIA-Approved Contractor",
    desc: "Accredited for Security Guarding, Door Supervision, and Keyholding — meeting the highest industry standards.",
  },
  {
    icon: GraduationCap,
    title: "Extensively Trained Officers",
    desc: "Comprehensive training beyond SIA requirements with continuous professional development.",
  },
  {
    icon: Settings,
    title: "Customised Solutions",
    desc: "Thorough assessments and bespoke security strategies tailored to your unique requirements.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    desc: "Over two decades of trusted service building strong relationships across diverse sectors.",
  },
];

const newsImages = [news1, news2];

const news = [
  {
    title: "The 5 winter risks that could cost you thousands – and how to prevent them",
    date: "13-11-25",
    desc: "When temperatures drop and the nights draw in, the risks to people and property rise. Harsh weather, festive shutdowns, and shorter days create the perfect conditions for disruption.",
    tags: ["Advice and Guidance", "Site Security", "Vacant Property"],
  },
  {
    title: "AI, a game changer for modern security operations",
    date: "30-09-25",
    desc: "Artificial intelligence is transforming the security industry with smarter surveillance, predictive analytics, and automated threat detection.",
    tags: ["Technology", "CCTV", "Corporate Security"],
  },
  {
    title: "Lone worker safety: what every employer needs to know",
    date: "30-06-25",
    desc: "Protecting lone workers is a legal obligation and a moral duty. Here's how to ensure your team stays safe when working alone.",
    tags: ["Lone Worker", "Property Inspections", "Evictions"],
  },
  {
    title: "How to secure your construction site against theft",
    date: "30-07-24",
    desc: "Construction site theft costs the UK industry millions each year. Discover proven strategies to protect your assets and materials.",
    tags: ["Site Security", "Construction", "Risk Management"],
  },
];

const Index = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const visibleServices = showAllServices ? services : services.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden shadow-[0_8px_30px_-5px_rgba(0,0,0,0.6)]" style={{ minHeight: "500px", zIndex: 1 }}>
        <div className="absolute inset-0">
          <img src={heroBg} alt="Security services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-white text-xs font-medium mb-6">
              <Shield className="w-3.5 h-3.5" />
              Trusted Since 2004
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              London Security Services{" "}
              <span className="text-primary">You Can Trust</span>
            </h1>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Delivering exceptional security services and peace of mind for businesses and individuals nationwide. SIA-approved, professionally trained officers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition-opacity text-sm"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+448009833321"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-neutral-500 text-white font-semibold rounded hover:bg-white/10 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" /> 0800 983 3321
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-6 text-neutral-400 text-xs">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" /> SIA Approved
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" /> NSI Approved
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" /> 20+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="bg-black">
        <video
          className="w-full"
          style={{ maxHeight: "360px", objectFit: "cover" }}
          src={heroVideoAsset.url}
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

      {/* SERVICES */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="text-center mb-10">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">What We Offer</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">Our Security Services</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm">
              Our extensive range of security services is designed to address the unique challenges faced by various sectors, delivered by SIA-licensed officers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleServices.map((s, index) => (
              <div
                key={s.title}
                className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow group border border-border"
              >
                <div className="h-36 overflow-hidden relative">
                  <img
                    src={serviceImages[index % serviceImages.length]}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-base mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:gap-2 transition-all"
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {!showAllServices && services.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllServices(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition-opacity text-sm"
              >
                See More Services <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Why Choose Vigilant Security?</h2>
              <p className="text-muted-foreground mt-3 text-base leading-relaxed mb-6">
                With over two decades of experience, Vigilant Security has established itself as a leading provider of professional security services across London and the UK. Our commitment to excellence, rigorous training standards, and client-focused approach set us apart from the competition. We pride ourselves on delivering tailored security solutions that protect your people, property, and peace of mind.
              </p>
              <div className="space-y-5">
                {whyChoose.map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 rounded-lg border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1.5">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={whyChooseImg} alt="Vigilant Security team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Enhance Your Security?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Contact us to speak with a consultant about how our security services can protect your people, property, and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary font-semibold rounded hover:bg-gray-100 transition-colors text-sm"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+448009833321"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-white text-white font-semibold rounded hover:bg-white/10 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Solutions</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
                Security solutions{" "}
                <span className="text-primary">built around you</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed self-end">
              We set the standard for comprehensive site and people protection. If you are responsible for the safety or security of your people, we can design a solution from the ground up that will keep your assets protected.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { img: solution1, title: "Site Security Management", desc: "Comprehensive protection for construction sites, industrial estates, and commercial developments." },
              { img: solution2, title: "Corporate & Office Security", desc: "Professional security officers and access control for corporate buildings and business premises." },
              { img: solution3, title: "Property & Facilities Management", desc: "Integrated security solutions for retail parks, shopping centres, and mixed-use developments." },
              { img: solution4, title: "Social Housing", desc: "Dedicated security services for residential estates, housing associations, and community spaces." },
            ].map((item) => (
              <Link
                to="/services"
                key={item.title}
                className="relative rounded-sm overflow-hidden group cursor-pointer"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-5">
                  <p className="text-white text-sm text-center leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
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

      {/* NEWS & VIEWS */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="text-center mb-10">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Latest</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">News & Views</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {news.map((item, index) => (
              <div key={item.title} className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-md transition-shadow group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={newsImages[index % newsImages.length]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-muted-foreground mb-2">{item.date}</p>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <div>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Contact</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-5">Get In Touch</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Ready to discuss your security needs? Our team is available to provide a free, no-obligation consultation and customised quote.
              </p>
              <div className="space-y-4">
                <a href="tel:+448009833321" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Freephone</p>
                    <p className="font-medium text-sm">+44 (0)800 983 3321</p>
                  </div>
                </a>
                <a href="tel:+442071834247" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Office</p>
                    <p className="font-medium text-sm">+44 (0)207 183 4247</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-muted rounded-lg p-6 md:p-8">
              <h3 className="font-semibold text-foreground text-lg mb-5">Request a Callback</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 bg-white border border-border rounded text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      placeholder="Your phone"
                      className="w-full px-3.5 py-2.5 bg-white border border-border rounded text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3.5 py-2.5 bg-white border border-border rounded text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Service Required</label>
                  <select className="w-full px-3.5 py-2.5 bg-white border border-border rounded text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors">
                    <option value="">Select a service</option>
                    <option>Event Security</option>
                    <option>Construction Site Security</option>
                    <option>Retail Security</option>
                    <option>Corporate Security</option>
                    <option>Public Sector Protection</option>
                    <option>Care & Housing Security</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-3.5 py-2.5 bg-white border border-border rounded text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition-opacity text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
