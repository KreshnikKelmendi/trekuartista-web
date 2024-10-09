import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazy-load';
import { motion } from 'framer-motion';
import soundOnImage from '../Components/Assets/on.png';
import soundOffImage from '../Components/Assets/off.png';

const FirstPart = ({ firstMediaItems, soundStates, toggleSound, workID }) => {
  const [fullScreenItem, setFullScreenItem] = useState(null); // State to track the full-screen item

  // Close full-screen on ESC key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setFullScreenItem(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const openFullScreen = (item) => {
    setFullScreenItem(item);
  };

  const closeFullScreen = () => {
    setFullScreenItem(null);
  };

  return (
    <div className="w-full bg-black px-3 lg:px-[50px] gap-4">
      <div className={`grid gap-4 ${
        workID == 11 
          ? 'lg:grid-cols-1' 
          : workID == 99 
          ? 'lg:grid-cols-2' 
          : 'grid-cols-1 lg:grid-cols-3'
      }`}>
        {firstMediaItems?.map((photo, index) => (
          <LazyLoad key={index} height="100%">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full object-cover relative"
              onClick={() => openFullScreen(photo)} // Open full-screen on click
            >
              {photo && (typeof photo === 'string' && photo.endsWith('.mp4') ? (
                <>
                  <video
                    className={`w-full object-cover ${
                      workID == 11 ? 'h-[62vh] lg:h-[100vh]' : 'lg:h-[62vh]'
                    }`}
                    autoPlay
                    playsInline
                    loop
                    muted={!soundStates[index]}
                  >
                    <source src={photo} type="video/mp4" />
                  </video>
                  <button onClick={() => toggleSound(index)} className="absolute bottom-2 left-1">
                    <img
                      className="object-cover w-4 h-4"
                      src={soundStates[index] ? soundOnImage : soundOffImage}
                      alt={soundStates[index] ? 'Sound On' : 'Sound Off'}
                    />
                  </button>
                </>
              ) : (
                <img src={photo} alt="" className="w-full lg:h-[62vh] object-cover" />
              ))}
            </motion.div>
          </LazyLoad>
        ))}
      </div>

      {fullScreenItem && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-50"
        >
          {/* Full-screen content */}
          <div className="relative w-full h-full max-w-8xl max-h-[90vh]">
            {typeof fullScreenItem === 'string' && fullScreenItem.endsWith('.mp4') ? (
              <video className="w-full h-full object-cover" autoPlay playsInline loop muted>
                <source src={fullScreenItem} type="video/mp4" />
              </video>
            ) : (
              <img src={fullScreenItem} alt="Full Screen" className="w-full h-full object-cover" />
            )}
            {/* Close Button */}
            <button
              onClick={closeFullScreen}
              className="absolute top-4 right-4 text-black bg-white rounded-full p-2"
            >
              X
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FirstPart;
