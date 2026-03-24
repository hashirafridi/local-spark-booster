import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerAchilles from "@/assets/partner-achilles.jpg";
import partnerIso from "@/assets/partner-iso9001.png";
import partnerSafe from "@/assets/partner-safecontractor.jpg";

const logos = [partnerLogo1, partnerLogo2, partnerAchilles, partnerIso, partnerSafe];

const PartnersSection = () => {
  return (
    <section className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <p className="text-center text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-8">
          Trusted Partners To
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-20 items-center">
            {[...Array(4)].flatMap((_, setIndex) =>
              logos.map((logo, i) => (
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
  );
};

export default PartnersSection;
