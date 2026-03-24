import HeroSection from "@/components/home2/HeroSection";
import SolutionsSection from "@/components/home2/SolutionsSection";
import SolutionsCardsSection from "@/components/home2/SolutionsCardsSection";
import ProcessSection from "@/components/home2/ProcessSection";
import StatsSection from "@/components/home2/StatsSection";
import PartnersSection from "@/components/home2/PartnersSection";

const Home2 = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SolutionsSection />
      <SolutionsCardsSection />
      <ProcessSection />
      <StatsSection />
      <PartnersSection />
    </div>
  );
};

export default Home2;
