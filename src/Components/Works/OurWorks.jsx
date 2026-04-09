import React, { useEffect, useMemo, useState } from 'react';
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

const WorkItem = ({ item }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [loading, setLoading] = useState(true); // State to track loading
  const [hovered, setHovered] = useState(false);
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

  const handleLoad = () => {
    setLoading(false);
  };

  const getYouTubeVideoId = (url) => {
    if (!url) return "";
    const embedMatch = url.match(/youtube\.com\/embed\/([^?&/]+)/);
    if (embedMatch?.[1]) return embedMatch[1];

    const shortMatch = url.match(/youtu\.be\/([^?&/]+)/);
    if (shortMatch?.[1]) return shortMatch[1];

    const watchMatch = url.match(/[?&]v=([^&]+)/);
    if (watchMatch?.[1]) return watchMatch[1];

    return "";
  };

  const mediaHeightClass = "h-[48vh] lg:h-[60vh] 2xl:h-[60vh]";
  const hasMultipleYoutubeVideos = Array.isArray(item.youtubeVideos) && item.youtubeVideos.length > 1;
  const youtubeVideoThumbs = hasMultipleYoutubeVideos
    ? item.youtubeVideos
        .map((video) => {
          const id = getYouTubeVideoId(video.url);
          return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : null;
        })
        .filter(Boolean)
        .slice(0, 3)
    : [];

  return (
    <motion.div
      className="relative"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={slideInVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/our-works/${item.id}`} onClick={handleClick}>
        <div className="relative w-full h-full">
          {hasMultipleYoutubeVideos && (
            <div className="absolute top-2 right-2 z-20 bg-black/65 px-2 py-2">
              <div className="grid grid-cols-1 gap-1.5">
                {youtubeVideoThumbs.map((thumb, thumbIndex) => (
                  <img
                    key={`${item.id}-thumb-${thumbIndex}`}
                    src={thumb}
                    alt={`Video preview ${thumbIndex + 1}`}
                    className="w-14 h-10 lg:w-16 lg:h-11 object-cover border border-white/40"
                  />
                ))}
              </div>
              <span className="block text-center mt-1 text-white text-[10px] lg:text-[11px] font-custom1 tracking-wide">
                +{item.youtubeVideos.length}
              </span>
            </div>
          )}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <FaSpinner className="animate-spin text-white text-4xl" />
            </div>
          )}
          {item?.workImage?.endsWith('.mp4') ? (
            <video
              className={`w-full ${mediaHeightClass} object-cover`}
              autoPlay
              playsInline
              loop
              muted
              onLoadedData={handleLoad}
            >
              <source src={item?.workImage} type="video/mp4" />
            </video>
          ) : (
            <img
              className={`w-full ${mediaHeightClass} object-cover`}
              src={item?.workImage}
              alt=""
              onLoad={handleLoad} 
            />
          )}
          <div className="w-full mt-[10px]">
            <p className="font-custom text-white text-[23px] 2xl:text-[25px] tracking-[2.5px] leading-tight">
              {item.workName}
            </p>
            <p className="font-custom1 text-gray-400 text-sm mt-2">{item.workDescription}</p>
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
  const [selectedCategory, setSelectedCategory] = useState('All Work');

  const categories = useMemo(() => {
    const specialCategories = Array.from(
      new Set(
        ourWorks
          .map((item) => item.specialCategory)
          .filter(Boolean)
      )
    );

    return ['All Work', ...specialCategories];
  }, []);

  const organizedWorks = useMemo(() => {
    if (selectedCategory === 'All Work') return ourWorks;
    return ourWorks.filter((item) => item.specialCategory === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="pb-10 bg-black">
      <div className="px-5 lg:px-[50px] pb-6 lg:pb-16 pt-10 lg:pt-16">
        <div className="lg:hidden">
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-5 min-w-max">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={`chip-${category}`}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`relative pb-1 text-lg font-custom1 tracking-[0.4px] transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/50'
                  }`}
                >
                  {category}
                  <span
                    className={`absolute left-0 right-0 -bottom-[1px] h-[2px] bg-white origin-left transition-transform duration-300 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              );
            })}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-wrap items-center leading-[0.95] gap-y-2 lg:w-[75%]">
          {categories.map((category, index) => {
            const isActive = selectedCategory === category;
            return (
              <React.Fragment key={category}>
                <button
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`font-custom1 font-bold text-left transition-all duration-300 text-[20px] sm:text-[20px] md:text-[24px] lg:text-5xl 2xl:text-[6vh] ${
                    isActive ? 'text-white' : 'text-white/30 hover:text-white/60 hover:-translate-y-[1px]'
                  }`}
                >
                  {category}
                </button>
                {index < categories.length - 1 && (
                  <span className="mx-2 lg:mx-3 text-white/30 font-bold text-[18px] sm:text-[22px] md:text-[28px] lg:text-[36px] xl:text-[44px]">
                    ▪
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="grid px-3 lg:px-[50px] grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 gap-x-6 gap-y-12">
        {organizedWorks?.map((item) => (
          <WorkItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default transition(OurWorks);
