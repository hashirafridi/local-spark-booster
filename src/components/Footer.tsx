import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Vigilant Security" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-3">
              Delivering exceptional security services and peace of mind for businesses and individuals nationwide since 2004.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="px-3 py-1.5 border border-gray-600 rounded text-xs text-gray-300">
                SIA Approved
              </div>
              <div className="px-3 py-1.5 border border-gray-600 rounded text-xs text-gray-300">
                NSI Approved
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Services", to: "/services" },
                { label: "Locations", to: "/locations" },
                { label: "News", to: "/news" },
                { label: "Our People", to: "/about" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-gray-400 hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {[
                "Event Security",
                "Construction Site Security",
                "Retail Security",
                "Corporate Security",
                "Public Sector Protection",
                "Care & Housing Security",
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-400 hover:text-primary text-sm transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+448009833321" className="flex items-start gap-2.5 text-gray-400 hover:text-primary text-sm transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>+44 (0)800 983 3321</span>
                </a>
              </li>
              <li>
                <a href="tel:+442071834247" className="flex items-start gap-2.5 text-gray-400 hover:text-primary text-sm transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>+44 (0)207 183 4247</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@vigilantsecurity.co.uk" className="flex items-start gap-2.5 text-gray-400 hover:text-primary text-sm transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>info@vigilantsecurity.co.uk</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© Vigilant Security Services {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Statement</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms Of Use</Link>
            <Link to="/cookies" className="hover:text-gray-300 transition-colors">Cookie Policy</Link>
            <Link to="/modern-slavery" className="hover:text-gray-300 transition-colors">Modern Slavery</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
