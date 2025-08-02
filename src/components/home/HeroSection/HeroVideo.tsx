import { useEffect, useRef, useState } from "react";

interface VideoData {
  id: number;
  videoSrc: string;
  posterImage?: string;
  title: string;
  subtitle: string;
  ctaText: string;
}

interface HeroVideoProps {
  videos: VideoData[];
  onCtaClick?: (videoId: number) => void;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  switchInterval?: number;
  className?: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  videos,
  onCtaClick,
  autoPlay = true,
  muted = true,
  loop = false,
  switchInterval = 60000, // 1 minute default
  className = "",
}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentVideo = videos[currentVideoIndex];

  useEffect(() => {
    const video = videoRef.current;
    if (video && autoPlay) {
      video.play().catch(console.error);
    }
  }, [autoPlay, currentVideoIndex]);

  useEffect(() => {
    if (videos.length > 1 && switchInterval > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      }, switchInterval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [videos.length, switchInterval]);

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

  const switchVideo = (index: number) => {
    setCurrentVideoIndex(index);
    // Reset the interval when manually switching
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      if (switchInterval > 0) {
        intervalRef.current = setInterval(() => {
          setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
        }, switchInterval);
      }
    }
  };

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick(currentVideo.id);
    }
  };

  if (!videos.length) return null;

  return (
    <section
      className={`relative h-screen overflow-hidden ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video Background */}
      <video
        key={currentVideo.id}
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={currentVideo.videoSrc}
        poster={currentVideo.posterImage}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          // Auto switch to next video when current ends (if multiple videos and not looping)
          if (videos.length > 1 && !loop) {
            setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
          }
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4 z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight transition-all duration-500">
            {currentVideo.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90 transition-all duration-500">
            {currentVideo.subtitle}
          </p>
          <button
            onClick={handleCtaClick}
            className="bg-white text-slate-900 px-8 py-4 text-lg font-medium hover:bg-slate-100 transition-colors"
          >
            {currentVideo.ctaText}
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
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
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
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Toggle mute"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        </button>
      </div>

      {/* Video Indicators (if multiple videos) */}
      {videos.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
          {videos.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentVideoIndex
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => switchVideo(index)}
              aria-label={`Switch to video ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
