import React, { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { teamMembers } from '../TeamPage/teamMembers';
import { FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SvgLine2 from './SvgLine2';

const TeamOnHomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(calculateSlidesPerPage());
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredMember, setHoveredMember] = useState(null);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const controls = useAnimation();

  // Responsive slides calculation
  function calculateSlidesPerPage() {
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 768) return 2;
    if (width < 1024) return 3;
    return 4; // 4 slides for large devices
  }

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerPage(calculateSlidesPerPage());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth slide transitions
  const nextSlide = useCallback(() => {
    setDirection(1);
    const next = currentSlide + slidesPerPage;
    if (next >= teamMembers.length - slidesPerPage + 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(next);
    }
  }, [currentSlide, slidesPerPage]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    const prev = currentSlide - slidesPerPage;
    if (prev < 0) {
      setCurrentSlide(teamMembers.length - slidesPerPage);
    } else {
      setCurrentSlide(prev);
    }
  }, [currentSlide, slidesPerPage]);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, isPaused, nextSlide]);

  // Animation variants
  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0.5
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 100
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0.5,
      transition: { duration: 0.3 }
    })
  };

  const memberVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    initial: {
      scale: 1
    }
  };

  const infoVariants = {
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    },
    initial: {
      opacity: 0,
      y: 20
    }
  };

  return (
    <div className="">
      {/* Header Section */}
      <div className="px-4 lg:px-[55px] lg:py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold font-custom leading-tight"
            >
              Our People
              <SvgLine2 className="mt-2" />
            </motion.h1>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 lg:pl-12"
          >
            <p className="text-base font-custom1 leading-normal">
              Meet our vibrant collective of makers, thinkers and explorers - a fusion of creative minds dedicated to crafting dream brands, groundbreaking campaigns, and mesmerizing visuals.
              <br /><br />
              Together, we embark on a journey of innovation and imagination, shaping narratives that captivate hearts and inspire action.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Carousel Section */}
      <div 
        className="relative overflow-hidden bg-black"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="">
          <div className="relative h-[63vh] lg:h-[85vh] 2xl:h-[800px]">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0 flex"
              >
                {teamMembers.slice(currentSlide, currentSlide + slidesPerPage).map((member) => (
                  <motion.div
                    key={member.id}
                    className="px-0 w-full"
                    variants={memberVariants}
                    whileHover="hover"
                    initial="initial"
                    onHoverStart={() => setHoveredMember(member.id)}
                    onHoverEnd={() => setHoveredMember(null)}
                  >
                    <div className="relative h-[63vh] lg:h-[85vh] 2xl:h-[800px] overflow-hidden shadow-2xl">
                      <motion.img
                        src={member.hoverImage}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        style={{ filter: hoveredMember === member.id ? 'brightness(0.8)' : 'brightness(1)' }}
                      />
                      {/* Permanent gradient overlay */}
                      <div className="absolute inset-0 " />
                      
                      {/* Member info - only visible on hover */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-6"
                        variants={infoVariants}
                        initial="initial"
                        animate={hoveredMember === member.id ? "hover" : "initial"}
                      >
                        <p className="text-xl font-bold font-custom1 text-white">{member.name}</p>
                        <p className="text-gray-300 text-sm font-custom1 mb-3">{member.position}</p>
                        <a
                          href={member.linkedinLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-white hover:text-blue-400 transition-colors"
                        >
                          <FaLinkedin size={20} />
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:bg-opacity-75 transition-all z-10"
          aria-label="Previous slide"
        >
          <svg className='hover:scale-125 duration ease-linear' width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3755 31.6064L15.3611 28.3108L15.3446 24.6863L15.3399 21.8635L15.3251 17.4511L15.3078 12.655L15.2951 8.5852L15.281 5.33069L15.2709 2.70653L15.2603 0.000156767L1.68933e-05 15.7439L15.3755 31.6064Z" fill="#FFFFFF"/>
</svg>

        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:bg-opacity-75 transition-all z-10"
          aria-label="Next slide"
        >
          <svg className='hover:scale-125 duration ease-linear' width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2603 0L15.2746 3.29562L15.2911 6.92012L15.2958 9.74293L15.3107 14.1553L15.328 18.9514L15.3406 23.0212L15.3547 26.2758L15.3648 28.8999L15.3755 31.6063L30.6357 15.8626L15.2603 0Z" fill="#FFFFFF"/>
</svg>

        </button>
      </div>
    </div>
  );
};

export default TeamOnHomePage;