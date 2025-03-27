import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ReadyToTalk = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

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
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className='bg-[#D9D9D9] lg:px-[50px] flex flex-col lg:flex-row justify-around items-center h-60 lg:h-[255px]'
    >
      <motion.div 
        variants={itemVariants}
        className='lg:w-1/2 text-left'
      >
        <motion.p 
          className='font-custom text-[33px] lg:text-[45px] tracking-[1px] lg:tracking-[0px]'
        >
          Ready to talk?
        </motion.p>
        <motion.p className='font-custom1'>
          We're here to help you with your next project.
        </motion.p>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className='lg:w-1/2 text-right'
      >
        <Link to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className='border border-[#000000] lg:w-[207px] w-80 h-[50px] font-custom1 text-[16px] hover:bg-black hover:text-white hover:duration-300'
          >
            Start a project
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ReadyToTalk;