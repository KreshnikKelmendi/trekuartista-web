import React from 'react';
import LazyLoad from 'react-lazy-load';
import { motion } from 'framer-motion';
import soundOnImage from '../Components/Assets/on.png';
import soundOffImage from '../Components/Assets/off.png';

const FirstPart = ({ firstMediaItems, soundStates, toggleSound, workID }) => {

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
    </div>
  );
};

export default FirstPart;
