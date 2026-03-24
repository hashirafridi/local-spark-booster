import { Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-background">
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
          <div className="bg-muted p-6 md:p-8">
            <h3 className="font-semibold text-foreground text-lg mb-5">Request a Callback</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    placeholder="Your phone"
                    className="w-full px-3.5 py-2.5 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3.5 py-2.5 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Service Required</label>
                <select className="w-full px-3.5 py-2.5 bg-background border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors">
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
                  className="w-full px-3.5 py-2.5 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
