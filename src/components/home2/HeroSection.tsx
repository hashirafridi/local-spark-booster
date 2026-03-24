import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col">
      {/* Text area */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            {/* Left column */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.15] tracking-tight">
                <span className="text-secondary">
                  Protect what's
                  <br />
                  valuable
                </span>
                <br />
                <span className="text-primary">
                  with solutions built
                  <br />
                  around you.
                </span>
              </h1>

              <div className="mt-8 md:mt-10 inline-flex items-center bg-white rounded shadow-md border border-border overflow-hidden">
                <Link
                  to="/services"
                  className="px-5 py-3 text-sm font-medium text-secondary hover:text-primary transition-colors whitespace-nowrap"
                >
                  Get Protected Now
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Contact us today
                </Link>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:pt-4">
              <p className="text-secondary font-semibold text-sm md:text-base leading-relaxed mb-4">
                Putting your needs first and solving your challenges is both our mission and the key to our success.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                From vacant property security to lone worker protection, our team of more than 800 people across 25 UK locations ensure a rapid response service that's tailor-made to your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video / Image section */}
      <div className="relative w-full" style={{ height: "clamp(300px, 50vh, 600px)" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroBg}
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
