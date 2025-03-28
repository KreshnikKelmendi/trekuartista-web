import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FirstContentOfAbout = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="py-0 lg:py-[100px] bg-[#E6E6E6] lg:px-[50px] overflow-hidden">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col p-4 lg:p-0 lg:flex-row mx-auto"
      >
        {/* Left Column - Title */}
        <motion.div 
          variants={itemVariants}
          className="lg:w-1/3 2xl:w-1/2"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold font-custom leading-[47px] tracking-[1px] lg:tracking-[1px] text-[#1E1E1E]"
            whileHover={{ scale: 1.02 }}
          >
            About us
          </motion.h1>
          <motion.div 
            className="hidden lg:block h-1 bg-[#DF319A] mt-4 w-20"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
        </motion.div>

        {/* Right Column - Content */}
        <motion.div 
          variants={itemVariants}
          className="lg:w-2/3 lg:pl-12 mt-8 lg:mt-0"
        >
          <motion.p 
            className="text-lg font-medium font-custom1 text-[#1E1E1E] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Welcome to Trekuartista, your premier destination for cutting-edge marketing and advertising solutions. Founded in 2012 amidst the vibrant cityscape of Prishtina, Kosovo, our agency has since solidified its reputation as a powerhouse in the industry.
          </motion.p>
          
          <motion.p 
            className="text-lg font-medium font-custom1 text-[#1E1E1E] leading-relaxed mt-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            At Trekuartista, we provide a full range of tailored marketing and advertising services, ensuring exceptional results through our creative strategies. Our approach is grounded in meticulous research, driving data-driven recommendations and close campaign monitoring for maximum impact. What truly sets us apart is our unwavering commitment to exceptional creativity, infusing passion into every project to push the boundaries of innovation.
          </motion.p>

          {/* Decorative elements */}
          <motion.div 
            className="hidden lg:flex space-x-4 mt-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={i}
                className="h-1 bg-[#DF319A]"
                initial={{ width: 0 }}
                animate={inView ? { width: i === 1 ? "60px" : "30px" } : {}}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FirstContentOfAbout;