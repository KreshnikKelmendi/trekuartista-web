import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ourWorks } from '../Works/workData';

const textVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

const slideInVariants = (index) => ({
  hidden: { y: '40%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: 'easeOut', delay: -(index * 0.2) },
  },
});

const Newest = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="py-0 md:py-16 " ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={slideInVariants}
      >
        <div className="px-4 flex items-center">
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {ourWorks?.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInVariants(index)}
            >
              <div className="relative w-full h-full">
                {item?.workImage?.endsWith('.mp4') ? (
                  <video className="w-full h-[100%] lg:h-[100vh] object-cover" autoPlay playsInline loop muted>
                    <source src={item?.workImage} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    className="w-full h-[40vh] lg:h-[100vh] object-cover"
                    src={item?.workImage}
                    alt=""
                  />
                )}
                {/* bg-gray-800 bg-opacity-30 */}
                <div className='absolute bottom-0 px-5 py-8 w-full'> 
                  <p className='font-custom text-white text-4xl lg:text-[45px]'>{item.workName}</p>
                  <Link to={`/our-works/${item.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                  <div>
                    <p className='mt-6 w-[207px] text-white text-center transition duration-500 ease-in-out hover:text-white hover:border-black hover:bg-black text-base border border-white font-custom1 py-2 px-4'>Show more</p>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Newest;
