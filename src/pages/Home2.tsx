import HeroSection from "@/components/home2/HeroSection";
import SolutionsSection from "@/components/home2/SolutionsSection";
import SolutionsCardsSection from "@/components/home2/SolutionsCardsSection";
import ProcessSection from "@/components/home2/ProcessSection";
import PartnersSection from "@/components/home2/PartnersSection";
import StatsSection from "@/components/home2/StatsSection";
import CareersSection from "@/components/home2/CareersSection";
import NewsSection from "@/components/home2/NewsSection";
import ContactSection from "@/components/home2/ContactSection";

const Home2 = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SolutionsSection />
      <SolutionsCardsSection />
      <ProcessSection />
      <PartnersSection />
      <StatsSection />
      <CareersSection />
      <NewsSection />
      <ContactSection />
    </div>
  );
};

export default Home2;
