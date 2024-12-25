import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from "../Assets/pho.jpg";
import image2 from "../Assets/pexels-helena-lopes-711009.jpg";
import image3 from "../Assets/2543-circuit-processor-chip-3d-4k.jpg";
import image4 from "../Assets/darkmode-dunkles-theme-weiss-auf-schwarz-ux-trend-xeit-1000x480.png";
import image5 from "../Assets/desktop-source-code-and-wallpaper-by-coding-and-programming-free-photo.jpg";
import { useInView } from 'react-intersection-observer';

const ServicesOnAbout = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    { title: 'Branding & Identity', image: image1, bgColor: 'bg-[#251810]' },
    { title: 'Creative', image: image2, bgColor: 'bg-[#241810]' },
    { title: 'Animation & 3D Modeling', image: image3, bgColor: 'bg-[#101810]' },
    { title: 'UI & UX DESIGN', image: image4, bgColor: 'bg-black' },
    { title: 'Web Development', image: image5, bgColor: 'bg-black' },
  ];

  return (
    <div className={`bg-black lg:h-screen lg:flex ${hoveredService !== null ? services[hoveredService].bgColor : ''}`}>
      <div className='py-20 lg:h-screen items-center flex lg:w-1/2 text-white px-5 lg:px-[50px] lg:py-[100px]'>
      <div className=''>
      <p className='font-custom1 uppercase font-extrabold text-gray-400'>We specialize in</p>
    
        <div className='grid grid-rows-4 gap-y-10 mt-8 lg:mt-20'>
          
          {services.map((service, index) => (
            <motion.div
              key={index}
              className='flex items-center cursor-pointer'
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              initial={{ x: 0 }}
              animate={{ x: hoveredService === index ? 50 : 0 }}
            >
              <motion.p ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={serviceVariants} transition={{ delay: index * 0.4, ease: "easeOut" }} className={`font-custom uppercase font-extrabold text-[22px] lg:text-3xl 2xl:text-4xl tracking-[1px] lg:tracking-[0px] ${hoveredService === index ? 'hover-stroke1' : ''}`}>
                {service.title}
                {hoveredService === index && (
                  <span className='ml-2'>&rarr;</span>
                )}
              </motion.p>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
      <div className='lg:w-1/2 overflow-hidden hidden lg:block'>
        <>
        <AnimatePresence>
          {hoveredService !== null && (
            <motion.img
              key={hoveredService}
              src={services[hoveredService].image}
              alt={services[hoveredService].title}
              className='w-full h-full object-cover imageService'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            />
          )}
        </AnimatePresence>
        </>
      </div>
    </div>
  );
};

export default ServicesOnAbout;