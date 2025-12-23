import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VideoAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05, // start animating almost immediately
  });

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const letsLetters = "LETS".split("");
  const talkLetters = "TALK".split("");
  const artLetters = "ART".split("");

  const wordVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: (wordIndex) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay: wordIndex * 0.4, // word-by-word entrance
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    }),
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
      rotate: -6,
      filter: "blur(6px)",
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay: index * 0.08, // only a small stagger, no start delay
        ease: [0.22, 0.68, 0.26, 0.99],
      },
    }),
    idle: {
      y: [0, -6, 0],
      rotate: [0, 1, -1, 0],
      transition: { repeat: Infinity, duration: 3.2, ease: "easeInOut" },
    },
  };

  const glowVariants = {
    pulse: isMobile
      ? {}
      : {
          textShadow: [
            "0 0 10px rgba(255,255,255,0.2)",
            "0 0 20px rgba(255,255,255,0.35)",
            "0 0 10px rgba(255,255,255,0.2)",
          ],
          transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        },
  };

  const renderWord = (letters, className, wordIndex) => (
    <motion.div
      className="flex gap-1 sm:gap-2"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={wordVariants}
      custom={wordIndex}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          className={className}
          custom={index}
          variants={letterVariants}
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            variants={glowVariants}
            animate={!isMobile ? "pulse" : undefined}
            style={isMobile ? { textShadow: "none" } : undefined}
          >
            {letter}
          </motion.span>
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className="w-full py-16 sm:py-6 md:py-8 lg:py-12 bg-black px-2 sm:px-4 md:px-6 lg:px-8 flex justify-center items-center">
      <div ref={ref} className="relative w-full max-w-6xl aspect-video flex items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full h-full p-2 sm:p-4 md:p-6">
          <div className="flex justify-center mr-8 sm:mr-12 md:mr-16 lg:mr-20 items-center">
            {renderWord(
              letsLetters,
              "text-6xl font-custom sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-bold text-white inline-block",
              0
            )}
          </div>

          <div className="flex justify-center ml-8 sm:ml-12 md:ml-16 lg:ml-20 items-center">
            {renderWord(
              talkLetters,
              "text-6xl font-custom sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-bold text-white inline-block",
              1
            )}
          </div>

          <div className="flex justify-center mr-0 sm:mr-6 md:mr-8 lg:mr-10 items-center">
            {renderWord(
              artLetters,
              "text-8xl font-custom sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[17rem] 2xl:text-[14rem] font-bold inline-block bg-gradient-to-br from-white via-gray-300 to-coral-400 text-transparent bg-clip-text",
              2
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAnimation;