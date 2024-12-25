import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Quote = () => {
  const quotes = [
    {
      text: "We believe that the unbelievable can be reached, and we strive toward it by doing it again and again.",
      author: "Arian Ahmeti",
      role: "CEO of Trekuartista",
    },
    {
      text: "Motivation is the catalyzing ingredient for every successful innovation.",
      author: "Arian Ahmeti",
      role: "CEO of Trekuartista",
    },
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentQuoteIndex + 1) % quotes.length;
      setCurrentQuoteIndex(nextIndex);
    }, 5000); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, [currentQuoteIndex, quotes.length]);

  const currentQuote = quotes[currentQuoteIndex];

  // Split the text into words
  const words = currentQuote.text.split(' ');

  // Animation variants for each word
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },  // Initial state
    visible: { opacity: 1, y: 0 },  // Animated state
  };

  return (
    <motion.div
      className="py-20 text-black md:px-8 flex flex-col tracking-tighter lg:mx-[65px]"
      initial={{ opacity: 0, x: -100 }} // initial position outside the viewport on the left
      animate={{ opacity: 1, x: 0 }} // animate to the center
      transition={{ duration: 0.5 }}
    >
      <h1
        className="text-2xl px-5 lg:px-0 text-center lg:text-left md:text-3xl lg:leading-[120%] lg:text-[45px] 2xl:px-[180px] 2xl:leading-[150%] font-bold font-custom tracking-[0.5px] lg:tracking-[1px]"
        key={currentQuote.text}
      >
        {/* Animate each word separately */}
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {word}
          </motion.span>
        ))}
      </h1>
      <div className='mt-6 text-[#C0BBBB] text-center lg:text-left 2xl:px-[180px]'>
        <p className='text-base md:text-lg lg:text-base font-custom1'>{currentQuote.author}</p>
        <p className='text-base md:text-lg lg:text-base font-custom1'>{currentQuote.role}</p>
      </div>
    </motion.div>
  );
};

export default Quote;
