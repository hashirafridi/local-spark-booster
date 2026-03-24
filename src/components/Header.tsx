import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown, Globe } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome2 = location.pathname === "/home2";

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Locations", to: "/locations" },
    { label: "News", to: "/news" },
    { label: "Contact Us", to: "/contact" },
  ];

  // Home2 uses a clean minimal navbar like the reference
  if (isHome2) {
    return (
      <header className="bg-white sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/home2" className="flex items-center">
            <img src={logo} alt="Vigilant Security" className="h-8 md:h-10 w-auto object-contain" />
          </Link>

          {/* Desktop nav - right aligned */}
          <nav className="hidden lg:flex items-center gap-6">
            <button className="flex items-center gap-1 text-sm font-medium text-secondary hover:text-primary transition-colors">
              Solutions for <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className="flex items-center gap-1 text-sm font-medium text-secondary hover:text-primary transition-colors">
              Products & Services <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className="flex items-center gap-1 text-sm font-medium text-secondary hover:text-primary transition-colors">
              <Globe className="w-4 h-4 text-primary" />
              EN <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded hover:bg-primary/90 transition-colors"
            >
              Contact
            </Link>
            <button className="p-1 text-secondary">
              <Menu className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-secondary"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-secondary font-medium hover:bg-muted rounded transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-4 py-3 bg-primary text-primary-foreground font-semibold rounded text-center"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    );
  }

  // Default navbar for other pages
  return (
    <>
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

      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Vigilant Security" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

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
