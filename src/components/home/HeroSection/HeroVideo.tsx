import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  videoSrc: string;
  posterImage?: string;
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  videoSrc,
  posterImage,
  title,
  subtitle,
  ctaText,
  onCtaClick,
  autoPlay = true,
  muted = true,
  loop = true,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video && autoPlay) {
      video.play().catch(console.error);
    }
  }, [autoPlay]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
    }
  };

  return (
    <section
      className={`relative h-screen overflow-hidden ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        poster={posterImage}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4 z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
            {subtitle}
          </p>
          <button
            onClick={onCtaClick}
            className="bg-white text-slate-900 px-8 py-4 text-lg font-medium hover:bg-slate-100 transition-colors"
          >
            {ctaText}
          </button>
        </div>
      </div>

      {/* Video Controls */}
      <div
        className={`absolute bottom-20 right-6 flex space-x-2 transition-opacity duration-300 z-20 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={togglePlay}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <button
          onClick={toggleMute}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          aria-label="Toggle mute"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        </button>
      </div>
    </section>
  );
};
