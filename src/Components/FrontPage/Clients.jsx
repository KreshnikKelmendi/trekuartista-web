import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SvgLine from './SvgLine';
import { partnerLogos } from '../Works/clients';

const Clients = () => {
  const [showMore, setShowMore] = useState(false);
  const partnersToShow = showMore ? 35 : 8;

  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.2,
  });

  const slideInVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: index * 0.1 },
    }),
  };

  return (
    <div key={inView} ref={ref} className="bg-black flex flex-col lg:flex-row lg:justify-between py-12 md:pb-44 lg:px-[50px]">
      <div className="px-4 flex flex-col lg:flex-row">
      <div className='lg:hidden lg:ml-20'>
        <h1 className="text-4xl lg:text-[45px] text-white font-bold font-custom leading-[.957142857] lg:leading-[55px]">
          Our beloved partners
          <SvgLine />
        </h1>
        {/* <button
          onClick={() => setShowMore(!showMore)}
          className="my-12 w-[207px] text-white hover:bg-white transition duration-500 ease-linear hover:text-black text-base border border-[#1E1E1E] font-custom1 py-2 px-4"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button> */}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 ml-5 lg:ml-0 md:mt-8  gap-8 px-8 md:px-0 md:gap-8 lg:gap-20 justify-center items-center">
          <AnimatePresence>
            {partnerLogos
              ?.slice(0, partnersToShow)
              .map((partner, index) => (
                <motion.img
                  key={index}
                  src={partner.src}
                  alt={partner.alt}
                  className="w-24 h-8 object-contain md:w-32 md:h-10 lg:w-44 lg:h-12"
                  variants={slideInVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  exit="hidden"
                  custom={index}
                />
              ))}
          </AnimatePresence>
        </div>
        <div className='lg:ml-32 2xl:ml-44'>
        <h1 className="hidden lg:block text-4xl lg:text-[45px] 2xl:w-[410px] text-white font-bold font-custom leading-[.957142857] lg:leading-[55px]">
          Our beloved partners
          <SvgLine />
        </h1>
       
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-12 lg:my-12 w-[207px] text-white hover:bg-white transition duration-500 ease-linear hover:text-black text-base border border-white font-custom1 py-2 px-4"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
        </div>
        
      </div>
      </div>
  );
};

export default Clients;