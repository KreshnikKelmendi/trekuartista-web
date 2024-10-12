import React from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex justify-center items-center py-1">
      <button
        onClick={scrollToTop}
        className="flex font-custom1 justify-center items-center gap-x-1 hover:text-[#DF319A] text-white p-[5px] text-[11px] lg:mt-[-50px] transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        title='Go to Top'
      ><p className='font-custom1 text-[12px]'>Go to Top</p>
        <FaAngleDoubleUp />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
