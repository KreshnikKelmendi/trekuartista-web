import { useInView } from "react-intersection-observer";
import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import SvgLine from "./SvgLine";

const AboutUsOnHomePage = () => {
  const [ref, inView] = useInView({ threshold: 0.6 });

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  // const divVariants = {
  //   hidden: { x: -500 },
  //   visible: { x: 0, transition: { duration: 0.6 } }
  // };

  return (
    <>
    <div className="bg-black flex flex-col lg:flex-row py-4 lg:py-[97px] lg:px-[50px]">
      <div className="lg:w-1/2 p-4 flex flex-col lg:order-1">
        <h1 className="text-4xl text-white lg:text-[45px] font-bold font-custom leading-[.957142857] lg:leading-[55px]">We unveil <br />the unseen
          <SvgLine />
        </h1>
          <p className="md:hidden my-6 text-white font-custom1 text-[16px] leading-normal">
          Step into our vibrant world at Trekuartista, where we breathe life into brands and reimagine the art of marketing.<br /> <br />
          Here, we're not just creators; we're architects of innovation, building bridges between imagination and impact. 
          From crafting visual identities to launching captivating campaigns, we infuse every project with a touch of magic and a dash of daring.
          Join us as we carve new paths, rewrite the rules, and redefine what it means to stand out in a crowded marketplace.
          </p>
          <Link to="/about-trekuartista" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                <button className="my-6 lg:my-12 w-[207px] text-white hover:bg-white hover:scale-105 transition duration-500 ease-in-out hover:text-black text-base border border-white font-custom1 py-2 px-4">
                    About us 
                </button>
          </Link>
   
  </div>
  <motion.div
    ref={ref}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={paragraphVariants}
    className="lg:w-1/2 p-2 lg:order-2" style={{
      transform: inView ? "none" : "translateX(-400px)",
      opacity: inView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}>
    <p className="hidden lg:w-[605px] md:block text-white font-custom1 text-base leading-normal">
    Step into our vibrant world at Trekuartista, where we breathe life into brands and reimagine the art of marketing.<br /> <br />
    Here, we're not just creators; we're architects of innovation, building bridges between imagination and impact. From crafting visual identities to launching captivating campaigns, we infuse every project with a touch of magic and a dash of daring.
    <br /> <br />
    Join us as we carve new paths, rewrite the rules, and redefine what it means to stand out in a crowded marketplace.
    </p>
  </motion.div>
  
</div>
      <div className='flex relative justify-between items-center px-[16px] lg:px-[66px]'>
        <motion.div
          // ref={ref}
          // variants={divVariants}
          // initial="hidden"
          // animate={inView ? "visible" : "hidden"}
          // className="h-[1px] bg-black flex-grow mt-[-60px] md:mt-[0px] lg:mt-[-150px]"
        ></motion.div>
      </div>
        </>
  );
};

export default AboutUsOnHomePage;
