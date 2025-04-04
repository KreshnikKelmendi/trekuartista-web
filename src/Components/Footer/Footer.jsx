import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import footerLogo from "../Assets/trekuartistaLogoFooter.png";
import ScrollToTopButton from '../ScrollToTop/ScrollToTopButton';
import { Link } from 'react-router-dom';
import styles from "./bubble.module.css";
import ReadyToTalk from './ReadyToTalk';
import SignInLink from '../sign-in/SignInLink';

const AnimatedText = ({ text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger when 50% of the element is in view
    triggerOnce: true // Only trigger once
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      }
    }
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className="text-2xl text-center lg:text-left lg:text-[45px] 2xl:text-[50px] tracking-[1px] lg:tracking-[2px] font-custom lg:w-[1109px] 2xl:w-3/4 leading-tight hover-stroke2"
    >
      {text.split("").map((char, idx) => (
        <motion.span 
          className={styles.hoverText} 
          key={idx}
          variants={child}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Footer = () => {
  return (
    <>
      <ReadyToTalk />
      <div className='bg-black pt-20 px-4 md:px-8 lg:px-12 text-white'>
        <AnimatedText text="We love creating unforgettable digital experiences, brands and websites with people like you." />
        
        <div className='py-16 lg:mt-16 md:py-12 lg:py-20 2xl:py-24 flex flex-col md:flex-col lg:flex-row justify-between'>
          <div className='text-center lg:text-left mt-10 lg:mt-5'>
            <img src={footerLogo} className='w-[220px] h-[26px] object-cover mx-auto lg:mx-0' alt='' />
            <p className='font-custom text-xl mt-[20px] tracking-[1px] lg:tracking-[0px]'>
              We drive your business growth
            </p>
            <p className='font-custom1 text-base mt-[20px] font-light'>Trekuartista, 2025.</p>
          </div>
          <div className='mt-8 md:mt-0 flex flex-col lg:flex-row lg:space-x-16 text-center lg:text-start'>
            <div className='text-white py-10 lg:py-0 flex flex-col space-y-[23px]'>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-base font-custom1 hover:text-[#DF319A]'>
                Home
              </Link>
              <Link to="/about-trekuartista" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-base font-custom1 hover:text-[#DF319A]'>
                About us
              </Link>
              <Link to="/our-works" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-base font-custom1 hover:text-[#DF319A]'>
                Work
              </Link>
              <Link to="/our-team" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-base font-custom1 hover:text-[#DF319A]'>
                Team
              </Link>
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-base font-custom1 hover:text-[#DF319A]'>
                Contact
              </Link>
              <SignInLink />
            </div>
            <div className='text-white py-10 lg:py-0 flex flex-col space-y-[23px]'>
              <p className='text-base font-custom1 font-semibold hover:text-[#DF319A]'>
                WHAT WE DO
              </p>
              <p className='text-base font-custom1 font-light hover:text-[#DF319A] hover:scale-105 hover:duration-700'>
                Drive success
              </p>
              <p className='text-base font-custom1 font-light hover:text-[#DF319A] hover:scale-105 hover:duration-700'>
                Marketing strategies
              </p>
              <p className='text-base font-custom1 font-light hover:text-[#DF319A] hover:scale-105 hover:duration-700'>
                Brand Identities
              </p>
              <p className='text-base font-custom1 font-light hover:text-[#DF319A] hover:scale-105 hover:duration-700'>
                Advertising
              </p>
              <p className='text-base font-custom1 font-light hover:text-[#DF319A] hover:scale-105 hover:duration-700'>
                Web Design & Development
              </p>
              <p className='text-base font-custom1 font-light hover:text-[#DF319A] hover:scale-105 hover:duration-700'>
                Consulting and Training
              </p>
            </div>
            <div className='text-white py-10 lg:py-0 flex flex-col space-y-[23px]'>
              <p className='text-base line-through font-custom1  font-semibold hover:text-[#DF319A]'>
                WHAT WE DON'T
              </p>
              <p className='text-base font-custom1 font-light hover:text-[#DF319A] hover:scale-105 hover:duration-700'>
                Work on weekends
              </p>
              <p className='text-base font-custom1 font-light hover:text-[#DF319A] hover:scale-105 hover:duration-700'>
                Say no to coffee
              </p>
              <p className='text-base font-custom1 font-light hover:text-[#DF319A] hover:scale-105 hover:duration-700'>
                Take no for an answer
              </p>
              <p className='text-base font-custom1 font-light hover:text-[#DF319A] hover:scale-105 hover:duration-700'>
                Accept mediocrity
              </p>
              <p className='text-base font-custom1 font-light hover:text-[#DF319A] hover:scale-105 hover:duration-700'>
                Sacrifice quality for profit
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between py-[38px]">
          <p className='text-base font-custom1 font-light'>
            © 2025 Trekuartista L.L.C All rights reserved.
          </p>
          <div className="lg:hidden flex space-x-16 mt-10 lg:mt-0">
            <a href='https://www.instagram.com/trekuartista/' target='_blank' rel="noreferrer" className='text-white text-[25px] hover:text-[#DF319A]'>
              <i className="fab fa-instagram"></i>
            </a>
            <a href='https://www.facebook.com/Trekuartista.LLC' target='_blank' rel="noreferrer" className='text-white text-[25px] hover:text-[#DF319A]'>
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href='https://www.linkedin.com/company/trekuartista-advertising-agency/mycompany/' rel="noreferrer" target='_blank' className='text-white text-[25px] hover:text-[#DF319A]'>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Footer;