import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import trek from "../Assets/trekuartistaLogoFooter.png";

const LogoComponent = () => {
  const [showFirstLogo, setShowFirstLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstLogo(false); // Switch to the second logo after a delay
    }, 2000); // Change 2000 to your desired delay in milliseconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Define the variants for animations
  const logoVariants = {
    initial: { x: -100, opacity: 0, scale: 0.8 }, // Start off-screen left, faded, and scaled down
    enter: { x: 0, opacity: 1, scale: 1 }, // End position
    exit: { x: 100, opacity: 0, scale: 0.8 }, // Exit off-screen right, faded, and scaled down
  };

  const typingVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <div className="block font-custom">
      <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
        {showFirstLogo ? (
          // First logo SVG with animation
          <motion.img
            className='w-[200px] h-[47px] object-contain'
            src={trek}
            alt=''
            variants={logoVariants} // Apply variants
            initial="initial" // Initial state
            animate="enter" // Animate to enter
            exit="exit" // Animate to exit
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }} // Use a custom easing function
          />
        ) : (
          // Second logo SVG with auto-typing animation
          <motion.svg
            width="56"
            height="37"
            viewBox="0 0 56 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={typingVariants} // Apply typing animation variants
            initial="initial" // Initial state
            animate="enter" // Animate to enter
            exit="exit" // Animate to exit
          >
            <motion.path
              d="M18.7207 0L22.6107 3.85517L26.8897 8.09425L30.2125 11.4055L35.4154 16.5724L41.0721 22.1872L45.8698 26.9542L49.7112 30.7613L52.807 33.8327L56 37V0H18.7207Z"
              fill="white"
              variants={pathVariants} // Apply path animation variants
              initial="hidden" // Initial state for the path
              animate="visible" // Animate to visible
            />
            <motion.path
              d="M0 0L18.7207 18.476V0H0Z"
              fill="white"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }} // Delay for the second path
            />
            <motion.path
              d="M0 18.4919L18.7207 36.9679V18.4919H0Z"
              fill="white"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }} // Delay for the third path
            />
          </motion.svg>
        )}
      </Link>
    </div>
  );
};

export default LogoComponent;
