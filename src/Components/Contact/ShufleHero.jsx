import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import office1 from "../Assets/trekuartista-office/office1.png"
import office2 from "../Assets/trekuartista-office/office2.png"
import office3 from "../Assets/trekuartista-office/office5.png"
import { Test } from "./Test";

const images = [
  {
        id: 1,
        src: office1,
      },
      {
        id: 2,
        src: office2,
      },
      {
        id: 3,
        src: office3,
      },
      {
        id: 4,
        src: office1,
      },
      {
        id: 5,
        src: office2,
      },
      {
        id: 6,
        src: office3,
      },
      {
        id: 7,
        src: office1,
      },
      {
        id: 8,
        src: office2,
      },
      {
        id: 9,
        src: office3,
      },
];

const ShuffleHero = () => {
  return (
    <>
    <div className="py-0 lg:py-[100px] bg-black lg:px-[50px]">
      <div className="flex flex-col lg:flex-row p-4 lg:p-0">
        <h1 className="text-4xl md:text-[33px] font-bold text-white font-custom leading-[47px]">
          Our space
        </h1>
        <span className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-[505px] text-base font-medium font-custom1 text-white">
          Nestled in the heart of Prishtina, our space is a dynamic workspace where creativity knows no bounds. <br /> <br />
          It's more than just a place to work—it's a vibrant hub where ideas come to life. From warm collaborative nooks to top-notch amenities, our space is designed to inspire innovation and foster collaboration.<br /> <br />
          Whether you're brainstorming with colleagues, hosting client meetings, or diving into focused work, our space provides the perfect environment to fuel your creativity and drive success.
        </span>
      </div>
    </div>
    <section className="w-full bg-black px-5 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-1 items-center gap-8 overflow-hidden">
      
      {/* <ShuffleGrid /> */}
      <Test images={images} />;
    </section>
    </>
  );
};

export default ShuffleHero