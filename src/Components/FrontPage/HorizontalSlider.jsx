"use client";

import { useRef, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { ourWorks } from "../Works/workData";
import Card from "./Card";
import SvgLine2 from "./SvgLine2";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaLongArrowAltRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import SvgLine from "./SvgLine";

export default function HorizontalSlider() {
  const container = useRef(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Data for large devices - Latest Projects with proper pagination
  const latestProjects = [
    // Page 1: Most recent projects
    [38, 27, 26], // First 3 latest projects
    // Page 2: Next set of projects  
    [26, 24, 23]  // Next 3 projects
  ];
  
  // Data for mobile devices (4 items)
  const mobileScreenWorks = ourWorks.filter((work) => [38, 27, 26, 25, 24, 23].includes(work.id));

  // Pagination settings for large devices
  const itemsPerPage = 3;
  const totalPages = latestProjects.length;
  
  // Get current page items with debugging
  const getCurrentPageItems = () => {
    const currentPageIds = latestProjects[currentPage];
    const currentItems = ourWorks.filter((work) => currentPageIds.includes(work.id));
    
    // Debug logging to verify pagination
    console.log(`Page ${currentPage + 1}:`, {
      currentPage,
      pageIds: currentPageIds,
      currentItems: currentItems.map(item => item.id),
      totalPages: totalPages,
      allPages: latestProjects
    });
    
    return currentItems;
  };

  const handleSeeAll = () => {
    window.scrollTo(0, 0);
    navigate('/our-works');
  };

  const handleShowMore = (id) => {
    window.scrollTo(0, 0);
    navigate(`/our-works/${id}`);
  };

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Pagination handlers
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Helper function to render media (image or video) for mobile
  const renderMedia = (workImage, workName, onClick) => {
    const isVideo = workImage && typeof workImage === 'string' && workImage.endsWith('.mp4');
    
    if (isVideo) {
      return (
        <video
          className="w-full h-[200px] object-cover cursor-pointer"
          autoPlay
          playsInline
          loop
          muted
          controls={false}
          onClick={onClick}
        >
          <source src={workImage} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    
    return (
      <img
        src={workImage}
        alt={workName}
        className="w-full h-[200px] object-cover cursor-pointer"
        onClick={onClick}
      />
    );
  };

  return (
    <main ref={container} className="relative pt-16 lg:pt-20 px-4 lg:px-[55px] bg-black">
      {/* Title and Button */}
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-4xl md:text-5xl text-white leading-[.957142857] lg:text-[45px] font-bold font-custom lg:leading-[50px] tracking-[1px] lg:tracking-[0px]">
          Latest <br />projects <SvgLine />
        </h1>
        <button
          onClick={handleSeeAll}
          className="text-white hidden lg:flex justify-center items-center lg:gap-x-[3px] font-custom1 hover:scale-110 hover:border-b-2 hover:border-black transition duration-500 ease-out"
        >
          See All <FaLongArrowAltRight size={15} />
        </button>
      </div>

      {/* Large Devices: Show 3 cards per page with pagination */}
      <div className="hidden lg:block">
        <motion.div
          className="grid grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {getCurrentPageItems().map((work, index) => {
            let workImage =
              work.id === 23
                ? work.thirdSinglePhoto
                : work.id === 22
                ? work.eleventhSinglePhoto
                : work.id === 2
                ? work.thirdSinglePhoto
                : work.workImage;

            return (
              <motion.div
                key={work.id}
                className="w-full flex justify-center"
                initial={{ scale: 0.9, opacity: 0.7 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                ref={inViewRef}
              >
                <Card
                  progress={scrollYProgress}
                  title={work.workName}
                  workImage={workImage}
                  id={work.id}
                  color={work.color}
                  buttonTextColor={work.buttonTextColor}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Beautiful Pagination - Minimal Design */}
        <div className="flex justify-center items-center gap-4">
          {/* Previous Button */}
          <motion.button
            onClick={prevPage}
            className="flex items-center justify-center w-8 h-8 rounded-md bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronLeft size={12} />
          </motion.button>

          {/* Page Numbers - Minimal design */}
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, index) => (
              <motion.button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-6 h-6 rounded-sm text-[10px] font-medium transition-all duration-300 flex items-center justify-center ${
                  currentPage === index
                    ? 'bg-white text-black shadow-md scale-105 font-semibold'
                    : 'bg-white/5 text-white/60 hover:bg-white/15 hover:text-white/90 hover:scale-102'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextPage}
            className="flex items-center justify-center w-8 h-8 rounded-md bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronRight size={12} />
          </motion.button>
        </div>

      </div>

      {/* Mobile Devices: Show 4 media items (images or videos) */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {mobileScreenWorks.map((work, index) => {
          let workImage =
            work.id === 23
              ? work.thirdSinglePhoto
              : work.id === 22
              ? work.eleventhSinglePhoto
              : work.id === 2
              ? work.thirdSinglePhoto
              : work.id === 10
              ? work.thirdSinglePhoto
              : work.workImage;

          return (
            <motion.div
              key={work.id}
              className="w-full flex justify-center"
              initial={{ scale: 0.9, opacity: 0.7 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.3,
              }}
              ref={inViewRef}
            >
              {renderMedia(workImage, work.workName, () => handleShowMore(work.id))}
            </motion.div>
          );
        })}
      </motion.div>

      <button
        onClick={handleSeeAll}
        className="text-white flex text-right mx-auto lg:hidden justify-end mt-8 items-center gap-x-[4px] font-custom1 px-6 rounded-md hover:underline transition duration-300"
      >
        See All <FaLongArrowAltRight size={16} />
      </button>
    </main>
  );
}