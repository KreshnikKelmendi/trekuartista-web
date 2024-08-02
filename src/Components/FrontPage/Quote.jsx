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
      // Calculate the next quote index (loop back to the first quote if the end is reached)
      const nextIndex = (currentQuoteIndex + 1) % quotes.length;
      setCurrentQuoteIndex(nextIndex);
    }, 5000); // Change the interval duration (in milliseconds) as needed

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, [currentQuoteIndex, quotes.length]);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <motion.div
      className="py-20 text-black md:px-8 flex flex-col tracking-tighter lg:mx-[65px]"
      initial={{ opacity: 0, x: -100 }} // initial position outside the viewport on the left
      animate={{ opacity: 1, x: 0 }} // animate to the center
      transition={{ duration: 0.5 }}
    >
      <h1
        className="text-2xl px-5 lg:px-0 text-center lg:text-left md:text-3xl lg:leading-[120%] lg:text-[45px] 2xl:px-[180px] 2xl:leading-[150%] font-bold font-custom"
        key={currentQuote.text}
        
      >
        {currentQuote.text}
      </h1>
      <div className='mt-6 text-[#C0BBBB] text-center lg:text-left 2xl:px-[180px]'>
        <p className='text-base md:text-lg lg:text-base font-custom1'>{currentQuote.author} </p>
        <p className='text-base md:text-lg lg:text-base font-custom1'>{currentQuote.role}</p>
      </div>
    </motion.div>
  );
};

export default Quote;
