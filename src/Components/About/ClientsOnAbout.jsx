import React from 'react';
import { partnerLogos } from '../Works/clients';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClientsOnAbout = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
    triggerOnce: true, // Animation only triggers once
  });

  return (
    <>
      <div className="py-0 lg:py-[100px] bg-[#E6E6E6] lg:px-[50px]">
        <div className="flex flex-col lg:flex-row p-4 lg:p-0">
          <h1 className="text-4xl lg:text-[33px] font-bold font-custom leading-[47px] tracking-[1px] lg:tracking-[0px]">
            CLIENTS
          </h1>
          <span className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-[485px] text-lg font-medium font-custom1 text-[#1E1E1E]">
            Among our distinguished clientele, you'll find a spectrum of firms and businesses spanning all sizes and sectors. <br /> <br /> What unites them? <br /> <br /> Their insistence on a marketing partner that brings tangible outcomes, prioritizing substance over superficial metrics.
          </span>
        </div>
      </div>

      <div 
        ref={ref} 
        className="grid bg-black grid-cols-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-[93px] gap-x-14 py-5 lg:gap-y-[110px] gap-y-16 px-5 lg:px-[55px] lg:py-[84px]"
      >
        {partnerLogos?.map((logo, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }} // Start from invisible and slightly down
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and up
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          >
            <img className='w-[128px] h-[43px] object-contain' src={logo.src} alt={logo.alt} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ClientsOnAbout;
