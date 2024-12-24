import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ourWorks } from '../Works/workData';

// const textVariants = {
//   hidden: { y: 10, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
// };

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

  // Filter the works to include only those with IDs 10, 5, and 1
  const filteredWorks = ourWorks.filter(work => [6, 8, 7].includes(work.id));

  return (
    <div className="hidden lg:block py-0 md:py-16" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={slideInVariants}
      >
        <div className="px-4 flex items-center"></div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {filteredWorks.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInVariants(index)}
            >
              <div className="relative w-full h-full">
                {item?.workImage?.endsWith('.mp4') ? (
                  <video className="w-full h-[100%] lg:h-[85vh] object-cover" autoPlay playsInline loop muted>
                    <source src={item?.workImage} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    className="w-full h-[40vh] lg:h-[85vh] object-cover"
                    src={item?.workImage}
                    alt=""
                  />
                )}

                {/* Hover overlay */}
                <Link to={`/our-works/${item.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Link to={`/our-works/${item.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                    <p className="text-white text-center font-custom text-xl">See More</p>
                  </Link>
                </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Newest;
