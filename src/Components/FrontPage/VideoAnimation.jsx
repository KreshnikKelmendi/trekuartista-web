import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [showText, setShowText] = useState(true);

  // Posh swing entrance animation
  const textVariants = {
    hidden: { opacity: 0, rotate: -10, x: 0, y: 0 },
    visible: (i) => ({
      opacity: 1,
      rotate: [0, 5, -5, 3, 0], // Smoother, subtle swing
      x: [0, -10, 10, -5, 0], // Subtle horizontal swing
      transition: {
        delay: i * 0.6, // Slightly slower
        duration: 2.2, // Long, fluid duration
        ease: [0.17, 0.67, 0.83, 0.67], // "EaseOutCirc" for smooth motion
      },
    }),
  };

  // Exit animation with different directions and scale effect for "Art"
  const exitVariants = [
    { x: 400, opacity: 0, transition: { duration: 1, ease: "easeInOut" } }, // "Let's"
    { x: -400, opacity: 0, transition: { duration: 1, ease: "easeInOut" } }, // "talk"
    { 
      scale: 5, 
      opacity: 0,
      color: "#FF69B4", // Final color
      transition: {
        duration: 1.5, // Extended duration for smooth transition
        ease: [0.25, 0.1, 0.25, 1], // "EaseInOut" for more elegant motion
      }
    }, // "Art" - scaling up and changing color
  ];

  useEffect(() => {
    if (!showText) {
      const video = document.querySelector("video");
      video.muted = isMuted;
      video.play();
      video.addEventListener("loadeddata", () => setVideoLoaded(true));
    }
  }, [isMuted, showText]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Automatically hide text after the animation finishes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 3000); // Adjust duration for longer effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative slider-content p-0 h-[100vh] z-40 bg-black">
      <AnimatePresence>
        {showText ? (
          <motion.div
            key="text-animation"
            className="h-full flex flex-col justify-center items-center overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="text-white text-5xl lg:text-8xl font-bold mb-4 font-custom">
              {["Let's", "talk", "art"].map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  variants={textVariants} // Posh swing entrance
                  exit={i === 2 ? exitVariants[2] : exitVariants[i]} // Exit animation with scale and color for "Art"
                  className="block"
                  style={{
                    marginBottom: "10px",
                    color: i === 2 && !showText ? "#FF69B4" : "white", // Set color to pink if "Art" is exiting
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <>
            <Suspense fallback={<LoadingSpinner />}>
              <video
                src={video1}
                autoPlay
                loop
                playsInline
                preload="metadata"
                className={`w-full h-full object-cover ${
                  videoLoaded ? "visible" : "hidden"
                }`}
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
                  alt="Scroll down"
                  className="w-[114px] h-[27px] object-contain cursor-pointer transition-transform hover:scale-125"
                />
              </Link>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default VideoAnimation;
