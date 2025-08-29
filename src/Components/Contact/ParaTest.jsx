import { motion } from "framer-motion";
import { useRef } from "react";

import image1 from "../Assets/trekuartista-office/office10.jpg"
import bgImage from "../Assets/trekuartista-office/office1.png"
import image2 from "../Assets/trekuartista-office/office11.jpg"
import image3 from "../Assets/trekuartista-office/office12.jpg"
import image4 from "../Assets/trekuartista-office/office13.jpg"
import image5 from "../Assets/trekuartista-office/office14.jpg"

export const ParaTest = () => {
  return (
    <div className="bg-black min-h-screen">
      <Nav />
      <BentoGrid />
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="p-6">
      {/* <SiSpacex className="text-3xl mix-blend-difference" />
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        LAUNCH SCHEDULE <FiArrowRight />
      </button> */}
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const BentoGrid = () => {
  const images = [
    { src: bgImage, alt: "Office 1", className: "col-span-2 row-span-2" },
    { src: image1, alt: "Office 2", className: "col-span-1 row-span-1" },
    { src: image2, alt: "Office 3", className: "col-span-1 row-span-1" },
    { src: image3, alt: "Office 4", className: "col-span-1 row-span-2" },
    { src: image4, alt: "Office 5", className: "col-span-2 row-span-1" },
    { src: image5, alt: "Office 6", className: "col-span-1 row-span-1" },
    { src: image5, alt: "Office 6", className: "col-span-1 row-span-1" },
  ];

  return (
    <div className="px-5 lg:px-[55px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=""
      >
       
      </motion.div>
      
      <div className="grid grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[300px] lg:auto-rows-[400px] xl:auto-rows-[500px] mx-auto">
        {images.map((image, index) => (
          <BentoItem key={index} {...image} index={index} />
        ))}
      </div>
    </div>
  );
};

const BentoItem = ({ src, alt, className, index }) => {
  const ref = useRef(null);

  return (
          <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          ease: "easeOut"
        }}
        className={`relative overflow-hidden rounded-xl ${className} group cursor-pointer`}
      >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

