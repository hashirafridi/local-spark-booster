import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Locations", to: "/locations" },
    { label: "News", to: "/news" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+448009833321" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              0800 983 3321
            </a>
            <a href="mailto:info@vigilantsecurity.co.uk" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" />
              info@vigilantsecurity.co.uk
            </a>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <span className="text-xs opacity-80">SIA Approved Contractor</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-secondary text-lg block leading-none">VIGILANT</span>
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Security Services</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a href="tel:+448009833321" className="p-2 text-primary">
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-foreground font-medium hover:bg-muted rounded transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-4 py-3 bg-primary text-primary-foreground font-semibold rounded text-center hover:opacity-90 transition-opacity"
              >
                Get a Quote
              </Link>
              <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="tel:+448009833321" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 0800 983 3321
                </a>
                <a href="tel:+442071834247" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 0207 183 4247
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
