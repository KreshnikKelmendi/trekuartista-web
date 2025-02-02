import React, { useState, useRef, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp, FaTimes } from "react-icons/fa";

const VideoJaffaComponent = ({ src }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleMute = () => {
    setIsMuted((prevMuted) => {
      const newMuted = !prevMuted;
      if (videoRef.current) {
        videoRef.current.muted = newMuted;
      }
      return newMuted;
    });
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

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

  return (
    <div className="relative">
      {/* Normal Video View */}
      <div className={`relative w-full h-full ${isFullScreen ? "hidden" : ""}`}>
        <div className="relative group"> 
          {/* Video */}
          <video
            ref={videoRef}
            src={src}
            playsInline
            autoPlay
            loop
            muted={isMuted}
            className="w-full h-[22vh] object-cover lg:h-[90vh]"
            onClick={toggleFullScreen}
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/70 opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-1 right-[1px] bg-white p-1 rounded-full"
          >
            {isMuted ? <FaVolumeMute size={9} /> : <FaVolumeUp size={9} />}
          </button>
        </div>
      </div>

      {/* Fullscreen Modal View */}
      {isFullScreen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 cursor-pointer flex justify-center items-center z-50">
          <div className="relative">
            <video
              ref={videoRef}
              src={src}
              autoPlay
              loop
              muted={isMuted}
              className="h-[100vh] py-2 object-contain cursor-pointer"
            />
            {/* Close Button */}
            <button
              onClick={toggleFullScreen}
              className="absolute top-4 right-4 bg-white p-2 rounded-full"
            >
              <FaTimes size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoJaffaComponent;
