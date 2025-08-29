import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ourWorks } from './workData';
import transition from '../../transition';
import OptimizedVideo from './OptimizedVideo';

const textVariants = {
  hidden: { scale: 0.9, opacity: 0.2 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const slideInVariants = {
  hidden: { scale: 0.9, opacity: 0.2 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.9, ease: 'easeInOut' } },
};

const WorkItem = ({ item, index }) => {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: "100px" 
  });
  const [hovered, setHovered] = useState(false);

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  const handleVideoLoad = useCallback(() => {
    // Video loaded successfully
  }, []);

  const handleVideoError = useCallback(() => {
    // Handle video error if needed
  }, []);

  // Generate poster image for videos
  const posterImage = useMemo(() => {
    if (item?.workImage?.endsWith('.mp4')) {
      // For videos, try to find a corresponding image or use a default
      const videoName = item.workImage.replace('.mp4', '');
      // You can add logic here to find corresponding poster images
      return null; // Will use video thumbnail
    }
    return item?.workImage;
  }, [item?.workImage]);

  // Check if content is video
  const isVideo = useMemo(() => {
    return item?.workImage?.endsWith('.mp4');
  }, [item?.workImage]);

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
          {isVideo ? (
            <OptimizedVideo
              src={item.workImage}
              poster={posterImage}
              alt={item.workName}
              className="w-full h-[48vh] lg:h-[60vh] 2xl:h-[60vh] object-cover"
              autoPlay={false}
              loop={true}
              muted={true}
              showControls={false}
              onVideoLoad={handleVideoLoad}
              onVideoError={handleVideoError}
            />
          ) : (
            <img
              className="w-full h-[48vh] lg:h-[60vh] 2xl:h-[60vh] object-cover"
              src={item?.workImage}
              alt={item.workName}
              loading="lazy"
            />
          )}
          
          <div className="w-full mt-[10px]">
            <p className="font-custom text-white text-[23px] 2xl:text-[25px] tracking-[2.5px]">
              {item.workName}
            </p>
            {hovered && (
              <p className="font-custom1 text-gray-400 text-sm mt-2">
                {item.workDescription}
              </p>
            )}
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

const OptimizedOurWorks = () => {
  // Memoize the works array to prevent unnecessary re-renders
  const memoizedWorks = useMemo(() => ourWorks, []);

  return (
    <div className="pb-10 bg-black">
      <div className="grid px-3 lg:px-[50px] grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 gap-x-6 gap-y-12">
        {memoizedWorks?.map((item, index) => (
          <WorkItem key={`${item.id}-${index}`} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default transition(OptimizedOurWorks);
