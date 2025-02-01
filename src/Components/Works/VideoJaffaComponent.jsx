import React, { useState, useRef, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp, FaTimes } from "react-icons/fa";

const VideoJaffaComponent = ({ src }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false); // state for full-screen modal

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

  // Handle escape key press to close the full-screen modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsFullScreen(false); // Close modal if escape is pressed
      }
    };

    // Add event listener for escape key
    if (isFullScreen) {
      window.addEventListener("keydown", handleEscKey);
    }

    // Clean up the event listener when the component unmounts or modal is closed
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isFullScreen]); // Run effect when the modal state changes

  return (
    <div className="relative">
      {/* Normal Video View */}
      <div className={`relative w-full h-full ${isFullScreen ? "hidden" : ""}`}>
        <video
          ref={videoRef}
          src={src}
          playsInline
          autoPlay
          loop
          muted={isMuted}
          className="w-full h-[22vh] object-cover aspect-video lg:h-[90vh]"
          onClick={toggleFullScreen}
        />

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-1 right-[1px] bg-white p-1 rounded-full"
        >
          {isMuted ? <FaVolumeMute size={8} /> : <FaVolumeUp size={8} />}
        </button>
      </div>

      {/* Fullscreen Modal View */}
      {isFullScreen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
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
