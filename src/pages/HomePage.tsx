import { AboutPreview } from "../components/home/AboutPreview";
import FeaturedWines from "../components/home/FeaturedWines/FeaturedWines";
import { HeroSection } from "../components/home/HeroSection/HeroSection";
import { ServicesOverview } from "../components/home/ServicesOverview";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedWines />
      <ServicesOverview />
      <AboutPreview />
    </div>
  );
};

export default HomePage;
