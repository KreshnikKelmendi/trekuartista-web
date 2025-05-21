import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Quote = () => {
  const quotes = [
    {
      text: "We believe that the unbelievable can be reached, and we strive toward it by doing it again and again.",
      author: "Arian Ahmeti",
      role: "CEO of Trekuartista",
    },
    {
      text: "Where motivation flows, innovation grows.",
      author: "Arian Ahmeti",
      role: "CEO of Trekuartista",
    },
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length, isAnimating]);

  const currentQuote = quotes[currentQuoteIndex];

  // Simplified word animation
  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: { opacity: 0, y: -15 }
  };

  // Faster container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.03,
        when: "beforeChildren"
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        staggerChildren: 0.01,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  // Smoother author animation
  const authorVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.4
      }
    }
  };

  return (
    <div className="h-[50vh] my-4 lg:my-10 2xl:my-3 lg:h-[70vh] 2xl:h-[60vh] px-5 md:px-8 lg:mx-[65px] 2xl:px-[180px] flex items-center justify-center">
      <AnimatePresence 
        mode="wait"
        onExitComplete={() => setIsAnimating(false)}
      >
        <motion.div
          key={currentQuoteIndex}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="w-full lg:max-w-5xl 2xl:max-w-7xl"
        >
          <motion.h1 className="text-[30px] text-center md:text-4xl lg:text-5xl 3xl:text-7xl tracking-[2px] leading-[36px] lg:leading-[50px] 3xl:leading-[60px] lg:text-left font-bold hover-stroke3">
            {currentQuote.text.split(' ').map((word, i) => (
              <motion.span
                key={`${currentQuoteIndex}-${i}`}
                custom={i}
                variants={wordVariants}
                className="inline-block font-custom mx-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div 
            className="mt-8 lg:mt-12 text-center mx-1 lg:text-left space-y-0"
            variants={authorVariants}
          >
            <p className="text-sm md:text-base 3xl:text-[20px] tracking-[0.5px] font-custom">{currentQuote.author}</p>
            <p className="text-[11px] md:text-sm opacity-80 font-custom1 pt-[2px]  3xl:text-base">{currentQuote.role}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Quote;