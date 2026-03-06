import { Link } from "react-router-dom";
import {
  Shield, Users, Building2, ShoppingBag, Landmark, Heart, UserCheck, Camera,
  ClipboardCheck, Award, GraduationCap, Settings, TrendingUp, ChevronRight,
  Phone, ArrowRight, CheckCircle2, Calendar
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import whyChooseImg from "@/assets/why-choose-us.jpg";

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

const news = [
  { title: "AI, a game changer", date: "September 30, 2025" },
  { title: "Company Brochure", date: "June 30, 2025" },
  { title: "Newsletter – Aug-24", date: "July 30, 2024" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: "500px" }}>
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
          src={heroVideo}
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
            {services.map((s, index) => (
              <div
                key={s.title}
                className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow group border border-border"
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

      {/* LATEST NEWS */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="text-center mb-10">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Updates</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">Latest News</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {news.map((item) => (
              <div key={item.title} className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-md transition-shadow">
                <div className="h-40 bg-secondary/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-muted-foreground mb-2">{item.date}</p>
                  <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                  <Link
                    to="/news"
                    className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                  >
                    Read More <ChevronRight className="w-4 h-4" />
                  </Link>
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
