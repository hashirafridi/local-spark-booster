import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin, Building2, Clock, Printer } from "lucide-react";
import heroBg from "@/assets/service-2.jpg";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerAchilles from "@/assets/partner-achilles.jpg";
import partnerIso from "@/assets/partner-iso9001.png";
import partnerSafe from "@/assets/partner-safecontractor.jpg";

const offices = [
  {
    city: "London",
    lines: [
      "Vigilant Security Services UK Ltd",
      "AMC Business Centre",
      "12 Cumberland Avenue",
      "London, NW10 7QL",
      "United Kingdom",
    ],
    phone: ["+44 (0)800 983 3321", "+44 (0)20 8965 4123"],
    fax: "+44 (0)20 8961 3905",
    control: "+44 (0)20 7183 4247",
  },
  {
    city: "Edinburgh",
    lines: [
      "Vigilant Security Services UK Ltd",
      "Fleming House, Fleming Road",
      "Kirkton Campus, Livingston",
      "Edinburgh, EH54 7BN",
      "United Kingdom",
    ],
    phone: ["+44 (0)131 516 2362"],
    fax: "+44 (0)150 641 6926",
    mobile: "+44 (0)795 607 5506",
    control: "+44 (0)207 183 4247",
  },
  {
    city: "Manchester",
    lines: [
      "Vigilant Security Services UK Ltd",
      "Chamber Business Centre",
      "Chapel Road Holl Inwood Oldham",
      "Manchester, OL8 4QQ",
    ],
    phone: ["+44 (0)161 516 2362"],
    fax: "+44 (0)150 641 6926",
    control: "+44 (0)207 183 4247",
  },
  {
    city: "Dublin",
    lines: [
      "Vigilant Security Services UK Ltd",
      "10 Abbey Business Park",
      "Grand Dr, Baldoyle",
      "Dublin 13, Republic of Ireland",
    ],
    phone: ["+353 (0)1906 1915"],
    fax: "+353 (0)1969 7895",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: "320px" }}>
        <div className="absolute inset-0">
          <img src={heroBg} alt="Contact us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">Contact Us</h1>
        </div>
      </section>

      {/* HEAD OFFICE INFO */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="text-center mb-12">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
              Head Office and for all Administrative Correspondence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="border border-border rounded-sm p-6 hover:border-primary/30 transition-colors bg-card"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{office.city}</h3>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Building2 className="w-4 h-4 mt-0.5 shrink-0 text-primary/60" />
                    <div className="leading-relaxed">
                      {office.lines.map((line, i) => (
                        <span key={i} className="block">{line}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary/60" />
                    <div>
                      <span className="block text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-1">Telephone</span>
                      {office.phone.map((p, i) => (
                        <a key={i} href={`tel:${p.replace(/[\s()]/g, "")}`} className="block text-foreground hover:text-primary transition-colors">
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>

                  {office.fax && (
                    <div className="flex items-start gap-3">
                      <Printer className="w-4 h-4 mt-0.5 shrink-0 text-primary/60" />
                      <div>
                        <span className="block text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-1">Fax</span>
                        <span className="text-foreground">{office.fax}</span>
                      </div>
                    </div>
                  )}

                  {office.mobile && (
                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary/60" />
                      <div>
                        <span className="block text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-1">Mobile</span>
                        <a href={`tel:${office.mobile.replace(/[\s()]/g, "")}`} className="text-foreground hover:text-primary transition-colors">
                          {office.mobile}
                        </a>
                      </div>
                    </div>
                  )}

                  {office.control && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 mt-0.5 shrink-0 text-primary/60" />
                      <div>
                        <span className="block text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-1">24hr Control</span>
                        <a href={`tel:${office.control.replace(/[\s()]/g, "")}`} className="text-foreground hover:text-primary transition-colors font-semibold">
                          {office.control}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Registered Office */}
          <div className="mt-8 border border-border rounded-sm p-6 bg-muted">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Registered Office</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="text-muted-foreground leading-relaxed">
                <p>Vigilant Security Services UK Ltd</p>
                <p>AMC Business Centre</p>
                <p>12 Cumberland Avenue</p>
                <p>London, NW10 7QL</p>
                <p>United Kingdom</p>
              </div>
              <div className="text-muted-foreground space-y-1">
                <p><span className="font-semibold text-foreground">Company No.</span> – 05914271</p>
                <p><span className="font-semibold text-foreground">VAT No.</span> – 906 3704 35</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-muted">
        <div className="max-w-3xl mx-auto px-4 py-14 md:py-20">
          <div className="text-center mb-10">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Send a Message</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">Feel Free to Drop Us a Line</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
                className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject *"
              required
              className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message *"
              required
              rows={6}
              className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity text-sm"
            >
              Send Message <ArrowRight className="w-4 h-4" />
            </button>
          </form>
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

export default Contact;
