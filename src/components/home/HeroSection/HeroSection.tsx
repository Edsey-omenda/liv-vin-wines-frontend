import { useState } from "react";
import { heroSlides } from "../../../data/mockData/testData";
import { ImageCarousel } from "./ImageCarousel";
import { HeroVideo } from "./HeroVideo";

export const HeroSection: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  // Example video data
  const heroVideoData = {
    videoSrc: "/videos/hero-video.mp4",
    posterImage: "/images/video-poster.jpg",
    title: "Experience Premium Wines",
    subtitle: "Discover our collection of carefully curated wines",
    ctaText: "Watch Our Story",
  };

  const handleVideoToggle = () => {
    setShowVideo(!showVideo);
  };

  return (
    <>
      {showVideo ? (
        <HeroVideo {...heroVideoData} onCtaClick={handleVideoToggle} />
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
