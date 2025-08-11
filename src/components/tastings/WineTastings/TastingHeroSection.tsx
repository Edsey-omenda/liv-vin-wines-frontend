import React from "react";

interface TastingHeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  onBookClick?: () => void;
}

export const TastingHeroSection: React.FC<TastingHeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  onBookClick,
}) => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-light mb-6">{title}</h1>
        <p className="text-xl font-light mb-8">{subtitle}</p>
        <button
          onClick={onBookClick}
          className="px-8 py-3 bg-amber-700 text-white hover:bg-amber-600 transition-colors"
        >
          Book Now
        </button>
      </div>
    </section>
  );
};
