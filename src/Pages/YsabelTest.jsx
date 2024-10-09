import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'; // Importing sound icons
import ysabel1 from "../Components/Assets/testYsabel/ysabel-1.jpg";
import ysabel2 from "../Components/Assets/testYsabel/ysabel-2.jpg";
import ysabel3 from "../Components/Assets/testYsabel/ysabel-3.jpg";
import ysabel4 from "../Components/Assets/testYsabel/ysabel-4.jpg";
import ysabel5 from "../Components/Assets/testYsabel/ysabel-5.jpg";
import ysabel6 from "../Components/Assets/testYsabel/ysabel-6.jpg";
import ysabel7 from "../Components/Assets/testYsabel/ysabel-7.jpg";
import ysabel8 from "../Components/Assets/testYsabel/ysabel-8.jpg";
import ysabel9 from "../Components/Assets/testYsabel/ysabel-9.jpg";
import ysabel10 from "../Components/Assets/testYsabel/ysabel-10.jpg";

import ysabel12 from "../Components/Assets/testYsabel/ysabel-12.mp4";
import ysabel13 from "../Components/Assets/testYsabel/ysabel-13.jpg";
import ysabel14 from "../Components/Assets/testYsabel/ysabel-14.jpg";
import ysabel15 from "../Components/Assets/testYsabel/ysabel-15.jpg";
import ysabel16 from "../Components/Assets/testYsabel/ysabel-16.jpg";
import ysabel17 from "../Components/Assets/testYsabel/ysabel-17.jpg";
import ysabel18 from "../Components/Assets/testYsabel/ysabel-18.jpg";
import ysabel19 from "../Components/Assets/testYsabel/ysabel-19.jpg";
import ysabel20 from "../Components/Assets/testYsabel/ysabel-20.jpg";
import ysabel21 from "../Components/Assets/testYsabel/ysabel-21.jpg";
import ysabel22 from "../Components/Assets/testYsabel/ysabel-22.jpg";
import ysabel23 from "../Components/Assets/testYsabel/ysabel-23.jpg";
import ysabel24 from "../Components/Assets/testYsabel/ysabel-24.jpg";

const ysabelTest = [
  { name: "Ysabel Image", media: ysabel1 },
  { name: "Ysabel Video", media: ysabel2 },
  { name: "Ysabel Video", media: ysabel3 },
  { name: "Ysabel Video", media: ysabel4 },
  { name: "Ysabel Video", media: ysabel5 },
  { name: "Ysabel Video", media: ysabel6 },
  { name: "Ysabel Video", media: ysabel7 },
  { name: "Ysabel Video", media: ysabel8 },
  { name: "Ysabel Video", media: ysabel9 },
  { name: "Ysabel Video", media: ysabel10 },

  { name: "Ysabel Video", media: ysabel12 },
  { name: "Ysabel Video", media: ysabel13 },
  { name: "Ysabel Video", media: ysabel14 },
  { name: "Ysabel Video", media: ysabel15 },
  { name: "Ysabel Video", media: ysabel16 },
  { name: "Ysabel Video", media: ysabel17 },
  { name: "Ysabel Video", media: ysabel18 },
  { name: "Ysabel Video", media: ysabel19 },
  { name: "Ysabel Video", media: ysabel20 },
  { name: "Ysabel Video", media: ysabel21 },
  { name: "Ysabel Video", media: ysabel22 },
  { name: "Ysabel Video", media: ysabel23 },
  { name: "Ysabel Video", media: ysabel24 },
];

const YsabelTest = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [isMuted, setIsMuted] = useState(true); // Add state for mute/unmute

  const fullScreenItem = (media) => {
    setCurrentMedia(media);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
    setCurrentMedia(null);
  };

  // Close full-screen view with Esc key
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeFullScreen();
    }
  };

  // Add event listener for Esc key
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Toggle mute/unmute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Framer Motion variants for posh text animation
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <div className='w-full lg:px-[55px] px-4 h-fit py-2'>
      <div className='w-full grid grid-cols-1 gap-y-4'>
        {/* Animated YSABEL title */}
        <motion.p
          className='font-custom text-left text-[42px] py-6'
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          {"YSABEL".split("").map((letter, index) => (
            <motion.span key={index} variants={letterVariant}>
              {letter}
            </motion.span>
          ))}
        </motion.p>

        {/* Media section */}
        {ysabelTest.map((item, index) => (
          <div key={index} className='flex flex-col w-full items-center h-full'>
            {item.media.endsWith('.mp4') ? (
              <div className="relative w-full">
                <video
                  src={item.media}
                  playsInline
                  autoPlay
                  loop
                  muted={isMuted} // Set mute state
                  className='w-full object-cover cursor-pointer'
                  onClick={() => fullScreenItem(item.media)}
                />
                <button
                  onClick={toggleMute} // Toggle sound on click
                  className="absolute bottom-2 right-2 bg-white p-2 rounded-full"
                >
                  {isMuted ? (
                    <FaVolumeMute size={15} />
                  ) : (
                    <FaVolumeUp size={15} />
                  )}
                </button>
              </div>
            ) : (
              <img
                src={item.media}
                alt={item.name}
                className='w-full object-cover cursor-pointer'
                onClick={() => fullScreenItem(item.media)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Full-screen view */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={closeFullScreen}
              className="absolute top-16 right-4 text-black bg-white p-2 hover:bg-black hover:text-white"
            >
              X
            </button>
            {currentMedia.endsWith('.mp4') ? (
              <div className="relative">
                <video
                  src={currentMedia}
                  autoPlay
                  loop
                  muted={isMuted}
                  className="max-w-full max-h-full"
                />
                <button
                  onClick={toggleMute}
                  className="absolute bottom-2 right-2 bg-white p-2 rounded-full"
                >
                  {isMuted ? (
                    <FaVolumeMute size={24} />
                  ) : (
                    <FaVolumeUp size={24} />
                  )}
                </button>
              </div>
            ) : (
              <img
                src={currentMedia}
                alt="Fullscreen"
                className="max-w-full max-h-full"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default YsabelTest;
