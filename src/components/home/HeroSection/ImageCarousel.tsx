import { useEffect, useState } from "react";

interface CarouselSlide {
  id: string | number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  slides,
  autoPlay = true,
  interval = 5000,
  className = "",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (autoPlay && slides.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, interval);
      return () => clearInterval(intervalId);
    }
  }, [autoPlay, interval, slides.length]);

  useEffect(() => {
    // Preload images
    const preloadImages = async () => {
      const promises = slides.map((slide) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(slide.id);
          img.onerror = () => {
            setImageErrors((prev) => new Set(prev).add(slide.image));
            resolve(slide.id);
          };
          img.src = slide.image;
        });
      });

      await Promise.all(promises);
      setIsLoading(false);
    };

    preloadImages();
  }, [slides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  if (!slides.length) return null;

  if (isLoading) {
    return (
      <section className={`relative h-screen overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-lg">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative h-screen overflow-hidden ${className}`}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide
              ? "translate-x-0"
              : index < currentSlide
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          {imageErrors.has(slide.image) ? (
            // Fallback gradient background if image fails to load
            <div className="h-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
                    {slide.subtitle}
                  </p>
                  <button className="bg-white text-slate-900 px-8 py-4 text-lg font-medium hover:bg-slate-100 transition-colors">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
                    {slide.subtitle}
                  </p>
                  <button className="bg-white text-slate-900 px-8 py-4 text-lg font-medium hover:bg-slate-100 transition-colors">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
