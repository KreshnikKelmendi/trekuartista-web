import React from 'react';
import { Link } from 'react-router-dom';

const ReadyToTalk = () => {
  return (
    <div className='bg-[#D9D9D9] lg:px-[50px] flex flex-col lg:flex-row justify-around items-center h-60 lg:h-[255px]'>
      <div className='lg:w-1/2 text-left'>
        <p className='font-custom text-[33px] lg:text-[45px]'>Ready to talk?</p>
        <p className='font-custom1'>We're here to help you with your next project.</p>
      </div>
      <div className='lg:w-1/2 text-right'>
        <Link to="/contact" onClick={() => window.scrollTo({ top: 2100, left: 0 })}>
          <button className='border border-[#000000] lg:w-[207px] w-80 h-[50px] font-custom1 text-[16px] hover:bg-black hover:text-white hover:duration-300'>Start a project</button>
        </Link>
      </div>
    </div>
  );
};

export default ReadyToTalk;
