import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ourWorks } from '../Works/workData';
import transition from '../../transition';
import { FaSpinner } from 'react-icons/fa'; // Importing a spinner icon

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
  const [loading, setLoading] = useState(true); // State to track loading
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({ x: window.pageXOffset, y: window.pageYOffset });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleLoad = () => {
    setLoading(false);
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
      <Link to={`/our-works/${item.id}`} onClick={handleClick}>
        <div className="relative w-full h-full">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <FaSpinner className="animate-spin text-white text-4xl" />
            </div>
          )}
          {item?.workImage?.endsWith('.mp4') ? (
            <video
              className="w-full h-[48vh] lg:h-[60vh] 2xl:h-[60vh] object-cover"
              autoPlay
              playsInline
              loop
              muted
              onLoadedData={handleLoad} // Video load event
            >
              <source src={item?.workImage} type="video/mp4" />
            </video>
          ) : (
            <img
              className="w-full h-[48vh] lg:h-[60vh] 2xl:h-[60vh] object-cover"
              src={item?.workImage}
              alt=""
              onLoad={handleLoad} // Image load event
            />
          )}
          <div className="w-full mt-[10px]">
            <p className="font-custom text-white text-[23px] 2xl:text-[25px] tracking-[2.5px]">
              {item.workName}
            </p>
            {hovered && <p className="font-custom1 text-gray-400 text-sm mt-2">{item.workDescription}</p>}
          </div>
        </div>
      </Link>
      <Link to={`/our-works/${item.id}`} onClick={handleClick}>
        {hovered && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-80 cursor-pointer p-2 w-full h-[48vh] lg:h-[62vh] 2xl:h-[60vh]"
          >
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="font-custom1 text-[20px] font-normal"
            >
              See more
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
      <div className="grid px-3 lg:px-[50px] grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 gap-x-6 gap-y-12">
        {ourWorks?.map((item, index) => (
          <WorkItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default transition(OurWorks);
