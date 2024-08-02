import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import video1 from "../Assets/trekuartista.mp4";
import soundOffIcon from "../Assets/off.png";
import soundOnIcon from "../Assets/on.png";
import scrollDown from "../Assets/scrollDown.png";
import { Link } from "react-router-dom";

const LoadingSpinner = () => (
  <motion.div
    className="loading-spinner text-white justify-center items-center h-screen flex"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="w-16 h-16 border-t-4 border-blue-800 border-solid rounded-full animate-spin"></div>
  </motion.div>
);

function VideoAnimation() {
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.querySelector("video");
    video.muted = isMuted;
    video.play();
    video.addEventListener("loadeddata", () => setVideoLoaded(true));
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative slider-content p-0 h-[100vh] z-40">
     
      <Suspense fallback={<LoadingSpinner />}>
        <video
          src={video1}
          autoPlay
          loop
          playsInline
          preload="metadata"
          className={`w-full h-full object-cover ${videoLoaded ? "visible" : "hidden"}`}
        />
      </Suspense>
      {!videoLoaded && <LoadingSpinner />}
      <button
        onClick={toggleMute}
        className="absolute z-50 voice-toggle-button left-[50px] top-[85vh] lg:top-[91vh]"
      >
        {isMuted ? (
          <img src={soundOffIcon} alt="Sound Off" className="w-6 h-6" />
        ) : (
          <img src={soundOnIcon} alt="Sound On" className="w-6 h-6" />
        )}
      </button>
      <div className="absolute top-[72vh] lg:top-[83vh] 2xl:top-[77vh] inset-0 flex items-center justify-center">
        <Link
          onClick={() =>
            window.scrollTo({
              top: 770,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          <img
            src={scrollDown}
            alt=""
            className="w-[114px] h-[27px] object-contain cursor-pointer transition-transform hover:scale-125"
          />
        </Link>
      </div>
    </div>
  );
}

export default VideoAnimation;
