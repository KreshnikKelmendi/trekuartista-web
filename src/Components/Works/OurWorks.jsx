import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ourWorks } from '../Works/workData';
import transition from '../../transition';

const textVariants = {
  hidden: { scale: 0.9, opacity: 0.2 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const slideInVariants = {
  hidden: { scale: 0.9, opacity: 0.2 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.9, ease: 'easeInOut' } },
};

const WorkItem = ({ item, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <motion.div
      className="relative"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={slideInVariants}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/our-works/${item.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
        <div className="relative w-full h-full">
          {item?.workImage?.endsWith('.mp4') ? (
            <video className="w-full h-[42vh] lg:h-[80vh] 2xl:h-[60vh] object-cover" autoPlay playsInline loop muted>
              <source src={item?.workImage} type="video/mp4" />
            </video>
          ) : (
            <img
              className="w-full h-[39vh] lg:h-[80vh] 2xl:h-[60vh] object-cover"
              src={item?.workImage}
              alt=""
            />
          )}
          <div className="w-full mt-[10px]">
            <p className="font-custom text-white text-[22px]">{item.workName}</p>
            {hovered && <p className="font-custom1 text-gray-400 text-sm mt-2">{item.workDescription}</p>}
          </div>
        </div>
      </Link>
      <Link to={`/our-works/${item.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
      {hovered && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white bg-gray-800 bg-opacity-80 cursor-pointer p-2 w-full h-[39vh] lg:h-[80vh] 2xl:h-[60vh]"
        >
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="font-custom2 text-[45px] font-normal"
          >
            {item.workName}
          </motion.p>
        </motion.div>
      )}
      </Link>
    </motion.div>
  );
};

const OurWorks = () => {
  return (
    <div className="pb-10 bg-black">
      <div className="grid px-3 lg:px-[50px] grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-12">
        {ourWorks?.map((item, index) => (
          <WorkItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default transition(OurWorks);
