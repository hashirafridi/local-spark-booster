import { Link } from "react-router-dom";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="flex flex-col">
      {/* Text area */}
      <div className="bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-12 md:pt-16 lg:pt-20 pb-20 md:pb-24">
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

          {/* CTA buttons - positioned to overlap the video */}
        </div>
      </div>

      {/* Video / Image section */}
      <div className="relative w-full" style={{ height: "clamp(300px, 50vh, 600px)" }}>
        {/* CTA buttons - overlapping white and video, aligned with the grid */}
        <div className="absolute top-0 left-0 right-0 z-20 -translate-y-1/2">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="inline-flex items-center bg-white rounded-sm shadow-lg border border-border overflow-hidden p-1.5 pl-0">
              <Link
                to="/services"
                className="px-6 py-3 text-sm font-medium text-secondary hover:text-primary transition-colors whitespace-nowrap"
              >
                Get Protected Now
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-7 py-3 text-primary-foreground text-sm font-semibold rounded-sm transition-colors whitespace-nowrap"
                style={{ backgroundColor: "#d60000" }}
              >
                Contact us today
              </Link>
            </div>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroBg}
          className="w-full h-full object-cover"
        >
          <source src={heroVideoAsset.url} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
