import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ourWorks } from '../Components/Works/workData';
import transition from '../transition';
import LazyLoad from 'react-lazy-load';
import { useInView } from 'react-intersection-observer';
import soundOnImage from '../Components/Assets/on.png';
import soundOffImage from '../Components/Assets/off.png';

const SinglePageOfWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSoundOn, setIsSoundOn] = useState(false); // State to manage sound
  const sliderRef = useRef(null);
  const { workID } = useParams();
  const work = ourWorks?.find((ad) => ad.id == workID);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  if (!work) {
    return <div className='font-custom text-2xl mt-5 justify-center items-center text-center'>WORK NOT FOUND. BAD REQUEST !</div>;
  }

  const { workName, textDescription, workDescription, firstSinglePhoto, secondSinglePhoto, thirdSinglePhoto, fourthSinglePhoto, fifthSinglePhoto, sixthSinglePhoto, seventhSinglePhoto, eightSinglePhoto, ninthSinglePhoto, tenthSinglePhoto, eleventhSinglePhoto, twelfthSinglePhoto, thirteenSinglePhoto, fourteenthSinglePhoto, fifteenthSinglePhoto, sixteenthSinglePhoto, seventeenthSinglePhoto } = work;

  // Filter out undefined or null media items
  const mediaItems = [secondSinglePhoto, thirdSinglePhoto, fourthSinglePhoto, fifthSinglePhoto, sixthSinglePhoto, seventhSinglePhoto, eightSinglePhoto, ninthSinglePhoto, tenthSinglePhoto, eleventhSinglePhoto, twelfthSinglePhoto, thirteenSinglePhoto, fourteenthSinglePhoto, fifteenthSinglePhoto, sixteenthSinglePhoto, seventeenthSinglePhoto].filter(Boolean);

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  return (
    <div>
      <div className="py-0 md:py-[50px] bg-black lg:px-[50px]">
        <div className="flex flex-col lg:flex-row p-4 lg:p-0">
          <h1 className="text-4xl md:text-[33px] text-white font-bold font-custom leading-[47px]">
            {workName}
            <p className='font-custom1 mt-[11px] text-lg text-white w-[207px] font-normal leading-[24px]'></p>
          </h1>
          <span className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-fit 2xl:w-1/2 text-lg font-medium font-custom1 text-white">
            {textDescription}
          </span>
        </div>
      </div>

      <div className="w-full h-80 lg:h-screen bg-black px-3 lg:px-[50px]">
        <LazyLoad height='100%'>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full lg:h-[555px] 2xl:h-[100vh] object-cover"
            src={firstSinglePhoto}
            alt=""
          />
        </LazyLoad>
      </div> 

      <div className='grid grid-cols-1 bg-black lg:grid-cols-2 px-3 lg:px-[50px] py-[20px] lg:py-[15px] gap-x-[20px] gap-y-[20px] lg:gap-y-[23px] overflow-hidden'>
        {mediaItems?.map((media, index) => (
          <div key={index} className="w-full h-80 lg:h-fit relative">
            <LazyLoad height='100%'>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                className="w-full h-80 lg:h-[510px] 2xl:h-[82vh] object-cover"
              >
                {media && (media.endsWith('.mp4') ? (
                  <>
                    <video className="w-full h-full object-cover" autoPlay playsInline loop muted={!isSoundOn}>
                      <source src={media} type="video/mp4" />
                    </video>
                    <button onClick={toggleSound} className="absolute bottom-2 left-0">
                      <img className='object-cover w-4 h-4' src={isSoundOn ? soundOnImage : soundOffImage} alt={isSoundOn ? 'Sound On' : 'Sound Off'} />
                    </button>
                  </>
                ) : (
                  <img src={media} alt='' className="w-full h-full object-cover" />
                ))}
              </motion.div>
            </LazyLoad>
          </div>
        ))}
      </div>
    </div>
  );
};

export default transition(SinglePageOfWork);
