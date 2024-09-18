import React, { useState, useEffect } from 'react';
import logotrekuartista from "../Assets/logo-treku.png";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const hamburgerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="white"
    stroke="white"
    strokeWidth="2"
    strokeLinecap=""
    strokeLinejoin=""
  >
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="white"
    stroke="white"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const menuIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="white"
    stroke="white"
    strokeWidth="2"
    strokeLinecap=""
    strokeLinejoin=""
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);



const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && isFixed) {
        // Scrolling down and header is fixed
        setFixed(false);
      } else if (currentScrollY <= prevScrollY && !isFixed) {
        // Scrolling up and header is not fixed
        setFixed(true);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header
        className={`px-4 relative lg:px-[50px] py-3 md:py-4 flex text-[22px] bg-black ${
          isFixed ? 'sticky top-0 left-0 right-0 bg-black z-50' : ''
        }`}
      >
        <div className="block font-custom"><Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
          <svg width="56" height="37" viewBox="0 0 56 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7207 0L22.6107 3.85517L26.8897 8.09425L30.2125 11.4055L35.4154 16.5724L41.0721 22.1872L45.8698 26.9542L49.7112 30.7613L52.807 33.8327L56 37V0H18.7207Z" fill="white"/>
            <path d="M0 0L18.7207 18.476V0H0Z" fill="white"/>
            <path d="M0 18.4919L18.7207 36.9679V18.4919H0Z" fill="white"/>
          </svg>

          </Link></div>

        <div className="text-white flex md:items-center md:justify-center flex-grow">
          {/* <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <img src={logotrekuartista} alt="Logo" className="w-[56px] h-[37px]" />
          </Link> */}
        </div>

        <div
          className={`hidden lg:block font-custom text-xl ${
            isFixed ? 'text-[#DF319A]' : 'text-white'
          } hover:text-black cursor-pointer md:block sm:hidden`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? closeIcon : menuIcon}
        </div>

        <div
          className={`font-custom text-xl hover:text-black cursor-pointer sm:block md:hidden ${
            isFixed ? 'text-black' : 'text-white'
          }`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? closeIcon : hamburgerIcon}
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={headerVariants}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="top-14 lg:top-14 left-0 right-0 bottom-0 fixed flex justify-center items-center bg-black z-50"
            >
              <ul className="font-custom text-6xl lg:text-8xl 2xl:text-9xl lg:leading-[90px] cursor-pointer text-white">
                <motion.li whileHover={{ scale: 1.1 }} onClick={closeMenu} className='hover-stroke transform hover:scale-110 transition-transform duration-300'><Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>HOME</Link></motion.li>
                <motion.li whileHover={{ scale: 1.1 }} onClick={closeMenu} className='hover-stroke transform hover:scale-110 transition-transform duration-300'><Link to="/about-trekuartista" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>ABOUT US</Link></motion.li>
                <motion.li whileHover={{ scale: 1.1 }} onClick={closeMenu} className='hover-stroke transform hover:scale-110 transition-transform duration-300'><Link to="/our-works" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>WORK</Link></motion.li>
                <motion.li whileHover={{ scale: 1.1 }} onClick={closeMenu} className='hover-stroke transform hover:scale-110 transition-transform duration-300'><Link to="/our-team" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>TEAM</Link></motion.li>
                <motion.li whileHover={{ scale: 1.1 }} onClick={closeMenu} className='hover-stroke transform hover:scale-110 transition-transform duration-300'><Link to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>CONTACT</Link></motion.li>
              </ul>

              {isMenuOpen && (
                <>
                <div className="hidden lg:flex flex-col items-end mt-10 fixed bottom-1 right-0 mr-1">
                  <a href='https://www.instagram.com/trekuartista/' target='_blank' rel="noreferrer" className='text-black text-[30px] hover:text-[#DF319A]'>
                    <i className="fab fa-instagram-square"></i>
                  </a>
                  <a href='https://www.linkedin.com/company/trekuartista-advertising-agency/mycompany/' target='_blank' rel="noreferrer" className='text-black text-[30px] hover:text-[#DF319A]'>
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href='https://www.facebook.com/Trekuartista.LLC' target='_blank' rel="noreferrer" className='text-black text-[30px] hover:text-[#DF319A]'>
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
      </header>

      <div className="hidden lg:flex flex-col items-end mt-10 fixed bottom-1 right-0 mr-2 z-30">
        <a href='https://www.instagram.com/trekuartista/' target='_blank' rel="noreferrer" className='text-gray-300 text-[30px] hover:text-[#DF319A] hover:scale-110'>
          <i className="fab fa-instagram-square"></i>
        </a>
        <a href='https://www.linkedin.com/company/trekuartista-advertising-agency/mycompany/' rel="noreferrer" target='_blank' className='text-gray-300 text-[30px] hover:text-[#DF319A] hover:scale-110'>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href='https://www.facebook.com/Trekuartista.LLC' target='_blank' rel="noreferrer" className='text-gray-300 text-[30px] hover:text-[#DF319A] hover:scale-110'>
          <i className="fab fa-facebook-square"></i>
        </a>
      </div>
    </>
  );
};

export default Header;