import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const WorkDescription = () => {
  const text =
    'Explore the showcase of our mastery, where we blend creativity and strategy to craft exceptional brand experiences.'.split(
      ' '
    );

  const svgVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const pathVariants = {
    hidden: { pathLength: 0, pathOffset: 1 },
    visible: { pathLength: 1, pathOffset: 0, transition: { duration: 3, ease: 'easeInOut' } },
  };

  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start('visible');
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="py-8 flex flex-col lg:flex-row px-5 bg-black lg:py-[70px] lg:px-[50px]">
      <motion.div className="w-full lg:w-1/2">
        <p className='text-[25px] lg:text-[45px] font-custom text-white'>OUR WORK</p>
        {text?.map((el, i) => (
          <motion.span
            className=' ml-0 mt-[40px] lg:mt-0 w-full text-lg font-custom1 text-white '
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.85,
              delay: i / 13,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </motion.div>
      {/* <div className='hidden lg:w-1/2 justify-end items-center lg:flex' >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56 37"
          width="90"
          height="90"
          fill="none"
          stroke="white"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          
        >
        
          <motion.path
            d="M18.7207 0L22.6107 3.85517L26.8897 8.09425L30.2125 11.4055L35.4154 16.5724L41.0721 22.1872L45.8698 26.9542L49.7112 30.7613L52.807 33.8327L56 37V0H18.7207Z"
            fill="black"
            variants={pathVariants}
          />
          <motion.path
            d="M0 0L18.7207 18.476V0H0Z"
            fill="black"
            variants={pathVariants}
          />
          <motion.path
            d="M0 18.492L18.7207 36.968V18.492H0Z"
            fill="black"
            variants={pathVariants}
          />
        </motion.svg>
      </div> */}
    </div>
  );
};

export default WorkDescription;
