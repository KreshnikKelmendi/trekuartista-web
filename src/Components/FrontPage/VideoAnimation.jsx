import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VideoAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const letsLetters = "LETS".split("");
  const talkLetters = "TALK".split("");
  const artLetters = "ART".split("");

  // Generate random scattered positions - BEAUTIFUL SCATTER
  const getScatteredPosition = () => ({
    x: (Math.random() - 0.5) * 600,
    y: (Math.random() - 0.2) * 300 + 150,
    rotate: Math.random() * 360 - 180,
    scale: Math.random() * 0.3 + 0.2
  });

  return (
    <div className="w-full py-16 sm:py-6 md:py-8 lg:py-12 bg-black px-2 sm:px-4 md:px-6 lg:px-8 flex justify-center items-center">
      <div ref={ref} className="relative w-full max-w-6xl aspect-video flex items-center justify-center">
        
        {/* Vertical Column Layout */}
        <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full h-full p-2 sm:p-4 md:p-6">
          
          {/* LETS - First Row */}
          <div className="flex justify-center mr-16 items-center">
            <div className="flex gap-1 sm:gap-2">
              {letsLetters.map((letter, index) => (
                <motion.span
                  key={`lets-${index}`}
                  className="text-6xl font-custom sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-bold text-white inline-block"
                  initial={{ 
                    opacity: 0,
                    x: getScatteredPosition().x,
                    y: getScatteredPosition().y,
                    scale: getScatteredPosition().scale,
                    rotate: getScatteredPosition().rotate
                  }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    x: inView ? 0 : getScatteredPosition().x,
                    y: inView ? 0 : getScatteredPosition().y,
                    scale: inView ? 1 : getScatteredPosition().scale,
                    rotate: inView ? 0 : getScatteredPosition().rotate,
                  }}
                  transition={{ 
                    duration: 1.2, 
                    delay: inView ? 2 + index * 0.15 : 0,
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* TALK - Second Row */}
          <div className="flex justify-center ml-32 items-center">
            <div className="flex gap-1 sm:gap-2">
              {talkLetters.map((letter, index) => (
                <motion.span
                  key={`talk-${index}`}
                  className="text-6xl font-custom sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-bold text-white inline-block"
                  initial={{ 
                    opacity: 0,
                    x: getScatteredPosition().x,
                    y: getScatteredPosition().y,
                    scale: getScatteredPosition().scale,
                    rotate: getScatteredPosition().rotate
                  }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    x: inView ? 0 : getScatteredPosition().x,
                    y: inView ? 0 : getScatteredPosition().y,
                    scale: inView ? 1 : getScatteredPosition().scale,
                    rotate: inView ? 0 : getScatteredPosition().rotate,
                  }}
                  transition={{ 
                    duration: 1.2, 
                    delay: inView ? 2.5 + index * 0.15 : 0,
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* ART - Third Row */}
          <div className="flex justify-center mr-6 items-center">
            <div className="flex gap-1 sm:gap-2">
              {artLetters.map((letter, index) => (
                <motion.span
                  key={`art-${index}`}
                  className="text-8xl font-custom sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[17rem] 2xl:text-[14rem] font-bold inline-block"
                  initial={{ 
                    opacity: 0,
                    x: getScatteredPosition().x,
                    y: getScatteredPosition().y,
                    scale: getScatteredPosition().scale,
                    rotate: getScatteredPosition().rotate
                  }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    x: inView ? 0 : getScatteredPosition().x,
                    y: inView ? 0 : getScatteredPosition().y,
                    scale: inView ? 1 : getScatteredPosition().scale,
                    rotate: inView ? 0 : getScatteredPosition().rotate,
                  }}
                  transition={{ 
                    duration: 1.2, 
                    delay: inView ? 3 + index * 0.15 : 0,
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  style={{
                    background: `linear-gradient(45deg, white, gray, coral)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAnimation;







