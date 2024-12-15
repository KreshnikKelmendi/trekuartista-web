import React from "react";
import { motion } from "framer-motion";
import scrollDown from "../Assets/scrollDown.png";
import { Link } from "react-router-dom";

function VideoAnimation() {
  // Looping animation for the "Let's talk art" text
  const textVariants = {
    animate: (i) => ({
      opacity: 1,
      rotate: [0, 5, -5, 3, 0],
      x: [0, -10, 10, -5, 0],
      transition: {
        delay: i * 0.6,
        duration: 2.2,
        ease: [0.17, 0.67, 0.83, 0.67],
        repeat: Infinity, // Infinite loop
        repeatType: "reverse", // Smooth reverse loop
      },
    }),
  };

  return (
    <div className="relative slider-content p-0 h-[100vh] z-40 bg-black">
      <motion.div
        key="text-animation"
        className="h-full flex flex-col justify-center items-center overflow-hidden"
      >
        <motion.div className="text-white text-5xl lg:text-8xl font-bold mb-4 font-custom">
          {["Let's", "talk", "art"].map((word, i) => (
            <motion.span
              key={word}
              custom={i}
              animate="animate"
              variants={textVariants}
              className="block"
              style={{ marginBottom: "10px", color: i === 2 ? "#FF69B4" : "white" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
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
    </div>
  );
}

export default VideoAnimation;
