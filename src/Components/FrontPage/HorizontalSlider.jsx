"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ourWorks } from "../Works/workData";
import Card from "./Card";
import SvgLine2 from "./SvgLine2";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

export default function HorizontalSlider() {
  const container = useRef(null);
  const navigate = useNavigate();
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Data for large devices (3 items)
  const largeScreenWorks = ourWorks.filter((work) => [25, 24, 22].includes(work.id));

  // Data for mobile devices (4 items)
  const mobileScreenWorks = ourWorks.filter((work) => [25, 24, 22, 23, 10, 2].includes(work.id));

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

  return (
    <main ref={container} className="relative pt-16 lg:pt-20 px-4 lg:px-[55px]">
      {/* Title and Button */}
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-4xl md:text-5xl leading-[.957142857] lg:text-[45px] font-bold font-custom lg:leading-[50px] tracking-[1px] lg:tracking-[0px]">
          Latest <br />projects <SvgLine2 />
        </h1>
        <button
          onClick={handleSeeAll}
          className="text-black hidden lg:flex justify-center items-center lg:gap-x-[3px] font-custom1 hover:scale-110 hover:border-b-2 hover:border-black transition duration-500 ease-out"
        >
          See All <FaLongArrowAltRight size={15} />
        </button>
      </div>

      {/* Large Devices: Show 3 cards */}
      <motion.div
        className="hidden lg:grid grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {largeScreenWorks.map((work, index) => {
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
                delay: index * 0.3,
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

      {/* Mobile Devices: Show 4 images only */}
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
              <img
                src={workImage}
                alt={work.workName}
                className="w-full h-[200px] object-cover cursor-pointer"
                onClick={() => handleShowMore(work.id)}
              />
            </motion.div>
          );
        })}
      </motion.div>

      <button
        onClick={handleSeeAll}
        className="text-black flex text-right mx-auto lg:hidden justify-end mt-8 items-center gap-x-[4px] font-custom1 px-6 rounded-md hover:underline transition duration-300"
      >
        See All <FaLongArrowAltRight size={16} />
      </button>
    </main>
  );
}