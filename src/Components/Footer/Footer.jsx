import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import footerLogo from "../Assets/trekuartistaLogoFooter.png";
import ScrollToTopButton from '../ScrollToTop/ScrollToTopButton';
import { Link } from 'react-router-dom';
import styles from "./bubble.module.css";
import ReadyToTalk from './ReadyToTalk';
import SignInLink from '../sign-in/SignInLink';

const Footer = () => {
  const [textRef, textInView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const [footerRef, footerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.2,
      color: "#DF319A",
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <ReadyToTalk />
      <motion.div 
        ref={footerRef}
        initial="hidden"
        animate={footerInView ? "visible" : "hidden"}
        variants={containerVariants}
        className='bg-black pt-20 px-4 md:px-8 lg:px-12 text-white overflow-hidden'
      >
        <motion.p 
          ref={textRef}
          className="text-2xl text-left lg:text-[45px] font-custom lg:w-[1109px] leading-tight tracking-[1px]"
        >
          {"We love creating unforgettable digital experiences, brands and websites with people like you."
            .split("")
            .map((child, idx) => (
              <motion.span
                className={styles.hoverText}
                key={idx}
                custom={idx}
                initial="hidden"
                animate={textInView ? "visible" : "hidden"}
                variants={textVariants}
              >
                {child}
              </motion.span>
            ))}
        </motion.p>

        <motion.div 
          variants={containerVariants}
          className='py-16 lg:mt-16 md:py-12 lg:py-20 2xl:py-24 flex flex-col md:flex-col lg:flex-row justify-between'
        >
          <motion.div variants={itemVariants} className='text-center lg:text-left mt-10 lg:mt-5'>
            <img src={footerLogo} className='w-[220px] h-[26px] object-cover mx-auto lg:mx-0' alt='Trekuartista Logo' />
            <p className='font-custom text-xl mt-[20px] tracking-[1px] lg:tracking-[0px]'>
              We drive your business growth
            </p>
            <p className='font-custom1 text-base mt-[20px] font-light'>Trekuartista, 2024.</p>
          </motion.div>

          <motion.div variants={itemVariants} className='mt-8 md:mt-0 flex flex-col lg:flex-row lg:space-x-16 text-center lg:text-start'>
            <div className='text-white py-10 lg:py-0 flex flex-col space-y-[23px]'>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-base font-custom1 hover:text-[#DF319A] transition-colors duration-300'>
                Home
              </Link>
              <Link to="/about-trekuartista" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-base font-custom1 hover:text-[#DF319A] transition-colors duration-300'>
                About us
              </Link>
              <Link to="/our-works" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-base font-custom1 hover:text-[#DF319A] transition-colors duration-300'>
                Work
              </Link>
              <Link to="/our-team" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-base font-custom1 hover:text-[#DF319A] transition-colors duration-300'>
                Team
              </Link>
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-base font-custom1 hover:text-[#DF319A] transition-colors duration-300'>
                Contact
              </Link>
              <SignInLink />
            </div>

            <div className='text-white py-10 lg:py-0 flex flex-col space-y-[23px]'>
              <p className='text-base font-custom1 font-semibold hover:text-[#DF319A] transition-colors duration-300'>
                WHAT WE DO
              </p>
              {["Drive success", "Marketing strategies", "Brand Identities", "Advertising", 
                "Web Design & Development", "Consulting and Training"].map((item, index) => (
                <motion.p 
                  key={index}
                  whileHover={{ x: 5, color: "#DF319A" }}
                  transition={{ duration: 0.3 }}
                  className='text-base font-custom1 font-light'
                >
                  {item}
                </motion.p>
              ))}
            </div>

            <div className='text-white py-10 lg:py-0 flex flex-col space-y-[23px]'>
              <p className='text-base line-through font-custom1 font-semibold hover:text-[#DF319A] transition-colors duration-300'>
                WHAT WE DON'T
              </p>
              {["Work on weekends", "Say no to coffee", "Take no for an answer", 
                "Accept mediocrity", "Sacrifice quality for profit"].map((item, index) => (
                <motion.p 
                  key={index}
                  whileHover={{ x: 5, color: "#DF319A" }}
                  transition={{ duration: 0.3 }}
                  className='text-base font-custom1 font-light'
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col lg:flex-row items-center justify-between py-[38px]"
        >
          <p className='text-base font-custom1 font-light'>
            © 2024 Trekuartista L.L.C All rights reserved.
          </p>
          <div className="lg:hidden flex space-x-16 mt-10 lg:mt-0">
            {[
              { icon: "instagram", url: "https://www.instagram.com/trekuartista/" },
              { icon: "facebook-square", url: "https://www.facebook.com/Trekuartista.LLC" },
              { icon: "linkedin", url: "https://www.linkedin.com/company/trekuartista-advertising-agency/mycompany/" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target='_blank'
                rel="noreferrer"
                variants={socialVariants}
                initial="hidden"
                animate={footerInView ? "visible" : "hidden"}
                whileHover="hover"
                className='text-white text-[25px]'
              >
                <i className={`fab fa-${social.icon}`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>
        <ScrollToTopButton />
      </motion.div>
    </>
  );
};

export default Footer;