import React from "react";
import { motion } from "framer-motion";

const SpaceOffice = () => {
  return (
    <div className="py-0 lg:py-[100px] bg-black lg:px-[50px] flex items-center">
      <motion.div
        className="flex flex-col lg:flex-row p-6 lg:p-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          className="text-4xl md:text-5xl text-white font-custom leading-[47px] tracking-[1px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Our space
        </motion.p>
        <motion.span
          className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-[505px] text-base font-medium font-custom1 text-white leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Nestled in the heart of Prishtina, our space is a dynamic workspace where creativity knows no bounds.
          <br /> <br />
          It's more than just a place to work—it's a vibrant hub where ideas come to life. From warm collaborative
          nooks to top-notch amenities, our space is designed to inspire innovation and foster collaboration.
          <br /> <br />
          Whether you're brainstorming with colleagues, hosting client meetings, or diving into focused work, our
          space provides the perfect environment to fuel your creativity and drive success.
        </motion.span>
      </motion.div>
    </div>
  );
};

export default SpaceOffice;