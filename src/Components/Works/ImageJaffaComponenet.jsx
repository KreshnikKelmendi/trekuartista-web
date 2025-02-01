import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const ImageJaffaComponent = ({ src, alt }) => {
  const [isFullScreen, setIsFullScreen] = useState(false); // state for full-screen modal

  // Toggle full-screen modal
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  // Handle escape key press to close the modal
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
      {/* Normal Image View with Hover Effect */}
      <div
        className="relative group cursor-pointer"
        onClick={toggleFullScreen}
      >
        <img
          src={src}
          alt={alt}
          className="h-[22vh] lg:h-[90vh] aspect-square object-cover"
        />
        {/* Hover overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
      </div>

      {/* Full-Screen Modal View */}
      {isFullScreen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={src}
              alt={alt}
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

export default ImageJaffaComponent;
