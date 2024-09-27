import React from 'react';
import LazyLoad from 'react-lazy-load';
import { motion } from 'framer-motion';
import soundOnImage from '../Components/Assets/on.png';
import soundOffImage from '../Components/Assets/off.png';

const FifthPart = ({ fifthMediaItems, soundStates, toggleSound, workID }) => {
  const hasIdFive = fifthMediaItems.some(item => item && item.id === 5);

  return (
    <div className="w-full bg-black px-3 lg:px-[50px] pt-16 lg:pt-0 pb-12">
      <div className={`grid gap-4 ${
        workID == 7 ? 'lg:grid-cols-3' :
        workID == 8 ? 'lg:grid-cols-3' : 
        workID == 9 ? 'lg:grid-cols-3' : // Custom layout for workID 8
        'grid-cols-1 lg:grid-cols-4'
      }`}>
        {fifthMediaItems.map((photo, index) => (
          <LazyLoad key={index} height='100%'>
            <motion.div
              initial={{ opacity: 0, rotateY: -110 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: 'easeInOut',
                delay: index * 0.3
              }}
              viewport={{ once: true }}
              className="w-full h-full object-cover relative"
            >
              {photo && (typeof photo === 'string' && photo.endsWith('.mp4') ? (
                <>
                  <video className="w-full lg:h-[62vh] object-cover" autoPlay playsInline loop muted={!soundStates[index]}>
                    <source src={photo} type="video/mp4" />
                  </video>
                  <button onClick={() => toggleSound(index)} className="absolute bottom-2 left-1">
                    <img className='object-cover w-4 h-4' src={soundStates[index] ? soundOnImage : soundOffImage} alt={soundStates[index] ? 'Sound On' : 'Sound Off'} />
                  </button>
                </>
              ) : (
                <img src={photo} alt='' className="w-full lg:h-[62vh] object-cover" />
              ))}
            </motion.div>
          </LazyLoad>
        ))}
      </div>
    </div>
  );
}

export default FifthPart;
