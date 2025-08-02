import { useState } from "react";
import { heroSlides } from "../../../data/mockData/testData";
import { ImageCarousel } from "./ImageCarousel";
import { HeroVideo } from "./HeroVideo";

export const HeroSection: React.FC = () => {
  const [showVideo, setShowVideo] = useState(true);

  const heroVideoData = [
    {
      id: 1,
      videoSrc: "/videos/Liv Vin drone_1.mp4",
      title: "Premium Wine Experience",
      subtitle: "Discover exceptional wines from our curated collection",
      ctaText: "Explore Wines",
    },
    {
      id: 2,
      videoSrc: "/videos/Liv Vin wine.mp4",
      title: "Expert Wine Tastings",
      subtitle: "Join our sommelier-led tastings and wine experiences",
      ctaText: "Book Tasting",
    },
  ];

  const handleVideoToggle = () => {
    setShowVideo(!showVideo);
  };

  const handleCtaClick = (videoId: number) => {
    console.log(`CTA clicked for video ${videoId}`);
    // Handle different actions based on which video is active
    if (videoId === 1) {
      // Navigate to wine shop
    } else if (videoId === 2) {
      // Navigate to tastings page
    }
  };

  return (
    <>
      {showVideo ? (
        <HeroVideo
          videos={heroVideoData}
          onCtaClick={handleCtaClick}
          autoPlay={true}
          muted={true}
          loop={false}
          switchInterval={60000}
        />
      ) : (
        <ImageCarousel slides={heroSlides} autoPlay={true} interval={5000} />
      )}

      {/* Toggle Button */}
      <button
        onClick={handleVideoToggle}
        className="fixed top-20 right-4 bg-white/90 hover:bg-white text-slate-900 px-4 py-2 rounded-lg shadow-lg transition-colors z-50"
      >
        {showVideo ? "Show Slides" : "Show Video"}
      </button>
    </>
  );
};
