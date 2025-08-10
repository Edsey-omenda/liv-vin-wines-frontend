import AboutCTASection from "../components/about/AboutCTASection";
import AboutFeaturesList from "../components/about/AboutFeaturesList";
import AboutHeroSection from "../components/about/AboutHeroSection";
import AboutStatsBar from "../components/about/AboutStatsBar";
import AboutStoreInfo from "../components/about/AboutStoreInfo";
import AboutStorySection from "../components/about/AboutStorySection";
import AboutTeamSection from "../components/about/AboutTeamSection";
import AboutValuesGrid from "../components/about/AboutValuesGrid";
import {
  ctaData,
  featuresData,
  heroData,
  statsData,
  storeData,
  storyData,
  teamData,
  valuesData,
} from "../data/aboutData";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>

      <AboutHeroSection {...heroData} />
      <AboutStorySection {...storyData} />
      <AboutStatsBar stats={statsData} />
      <AboutValuesGrid {...valuesData} />
      <AboutTeamSection {...teamData} />
      <AboutFeaturesList {...featuresData} />
      <AboutCTASection {...ctaData} />
      <AboutStoreInfo {...storeData} />
    </div>
  );
};

export default AboutPage;
