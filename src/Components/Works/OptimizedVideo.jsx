import React, { useState, useRef, useEffect, useCallback } from "react";
import { FaVolumeMute, FaVolumeUp, FaTimes, FaPlay } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const OptimizedVideo = ({ 
  src, 
  poster, 
  alt = "Video content",
  className = "w-full h-full object-cover",
  autoPlay = false,
  loop = true,
  muted = true,
  showControls = true,
  onVideoLoad,
  onVideoError
}) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(muted);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Intersection Observer to only load video when visible
  const { ref: containerRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: "50px"
  });

  const toggleMute = useCallback(() => {
    setIsMuted((prevMuted) => {
      const newMuted = !prevMuted;
      if (videoRef.current) {
        videoRef.current.muted = newMuted;
      }
      return newMuted;
    });
  }, []);

  const toggleFullScreen = useCallback(() => {
    setIsFullScreen(!isFullScreen);
  }, [isFullScreen]);

  const handleVideoLoad = useCallback(() => {
    setIsLoaded(true);
    setIsLoading(false);
    onVideoLoad?.();
  }, [onVideoLoad]);

  const handleVideoError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
    onVideoError?.();
  }, [onVideoError]);

  const handlePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  // Load video only when in view
  useEffect(() => {
    if (inView && !isLoaded && !hasError) {
      setIsLoading(true);
    }
  }, [inView, isLoaded, hasError]);

  // Handle fullscreen escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsFullScreen(false);
      }
    };

    if (isFullScreen) {
      window.addEventListener("keydown", handleEscKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isFullScreen]);

  // Auto-play when in view (if enabled)
  useEffect(() => {
    if (inView && autoPlay && isLoaded && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play failed, user interaction required
        setIsPlaying(false);
      });
    }
  }, [inView, autoPlay, isLoaded]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Normal Video View */}
      <div className={`relative w-full h-full ${isFullScreen ? "hidden" : ""}`}>
        <div className="relative group">
          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <div className="text-white text-center">
                <p className="text-sm">Video failed to load</p>
                <button 
                  onClick={() => {
                    setHasError(false);
                    setIsLoading(true);
                  }}
                  className="mt-2 px-3 py-1 bg-white text-black rounded text-xs hover:bg-gray-200"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {/* Video */}
          {inView && !hasError && (
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              playsInline
              autoPlay={autoPlay}
              loop={loop}
              muted={isMuted}
              className={className}
              onClick={toggleFullScreen}
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              preload="metadata"
            />
          )}

          {/* Poster/Thumbnail when video not loaded */}
          {(!inView || !isLoaded) && poster && (
            <img
              src={poster}
              alt={alt}
              className={className}
              loading="lazy"
            />
          )}

          {/* Play Button Overlay */}
          {!isPlaying && isLoaded && (
            <button
              onClick={handlePlayPause}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            >
              <FaPlay className="text-white text-4xl" />
            </button>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Controls */}
          {showControls && (
            <>
              {/* Mute Button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-2 right-2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all duration-200 z-30"
              >
                {isMuted ? <FaVolumeMute size={12} /> : <FaVolumeUp size={12} />}
              </button>

              {/* Play/Pause Button */}
              <button
                onClick={handlePlayPause}
                className="absolute bottom-2 left-2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all duration-200 z-30"
              >
                {isPlaying ? (
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                ) : (
                  <FaPlay size={12} />
                )}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Fullscreen Modal View */}
      {isFullScreen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 cursor-pointer flex justify-center items-center z-50">
          <div className="relative">
            <video
              ref={videoRef}
              src={src}
              autoPlay
              loop={loop}
              muted={isMuted}
              className="h-[100vh] py-2 object-contain cursor-pointer"
              controls
            />
            {/* Close Button */}
            <button
              onClick={toggleFullScreen}
              className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              <FaTimes size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedVideo;
