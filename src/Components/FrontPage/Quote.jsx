import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Quote = () => {
  const quotes = [
    {
      text: "We believe that the unbelievable can be reached, and we strive toward it by doing it again and again.",
      author: "Arian Ahmeti",
      role: "CEO & Founder",
    },
    {
      text: "Motivation is the catalyzing ingredient for every successful innovation.",
      author: "Arian Ahmeti",
      role: "CEO & Founder",
    },
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const currentQuote = quotes[currentQuoteIndex];

  // Puzzle animation for words
  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotate: -10,
      scale: 0.8
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: "backOut"
      }
    }),
    exit: {
      opacity: 0,
      y: -20,
      rotate: 10,
      scale: 0.8,
      transition: {
        duration: 0.4
      }
    }
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        staggerChildren: 0.02,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  // Author animation
  const authorVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8,
        duration: 0.6
      }
    }
  };

  return (
    <div className="h-[50vh] my-6 lg:h-[70vh] 2xl:h-[60vh] px-5 md:px-8 lg:mx-[65px] 2xl:px-[180px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuoteIndex}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className=" w-full lg:max-w-5xl 2xl:max-w-7xl"
        >
          <motion.h1 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-bold leading-[28px]">
            {currentQuote.text.split(' ').map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                className="inline-block font-custom mx-1.5 my-1"
                style={{ display: 'inline-block' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div 
            className="mt-12 text-center lg:mx-1.5 lg:text-left space-y-0"
            variants={authorVariants}
          >
            <p className="text-xl md:text-xl font-custom1">{currentQuote.author}</p>
            <p className="text-sm md:text-sm opacity-80 font-custom1">{currentQuote.role}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Quote;