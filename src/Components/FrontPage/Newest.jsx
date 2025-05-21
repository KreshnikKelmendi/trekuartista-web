import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ourWorks } from '../Works/workData';
import { FaSpinner } from 'react-icons/fa';

const Newest = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [isPaused, setIsPaused] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const marqueeRef = useRef(null);
  
  // Use all works
  const allWorks = ourWorks;
  
  // Handle image/video loading
  const handleMediaLoaded = (id) => {
    setImagesLoaded(prev => ({...prev, [id]: true}));
  };

  // Duplicate the works array multiple times to create the infinite effect
  const duplicatedWorks = [...allWorks, ...allWorks, ...allWorks];

  // Handle pause/resume without jumping
  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      // Get the current transform value
      const computedStyle = window.getComputedStyle(marqueeRef.current);
      const transform = computedStyle.getPropertyValue('transform');
      
      // Apply the current position as an inline style
      marqueeRef.current.style.transform = transform;
      marqueeRef.current.style.animation = 'none';
    }
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      // Get the current transform matrix
      const computedStyle = window.getComputedStyle(marqueeRef.current);
      const transform = computedStyle.getPropertyValue('transform');
      
      // Extract the translateX value from the matrix
      let translateX = 0;
      if (transform !== 'none') {
        const matrix = transform.match(/matrix.*\((.+)\)/);
        if (matrix) {
          const values = matrix[1].split(', ');
          translateX = parseFloat(values[4]);
        }
      }
      
      // Calculate how far through the animation we are
      const containerWidth = marqueeRef.current.scrollWidth / 3; // Divide by 3 because we tripled the content
      const progress = (translateX % containerWidth) / containerWidth;
      
      // Create a new keyframe animation starting from the current position
      const styleSheet = document.styleSheet || document.createElement('style');
      document.head.appendChild(styleSheet);
      
      const keyframes = `
        @keyframes resumeMarquee {
          0% {
            transform: translateX(${translateX}px);
          }
          100% {
            transform: translateX(${translateX - containerWidth}px);
          }
        }
      `;
      
      if (styleSheet.sheet) {
        styleSheet.sheet.insertRule(keyframes, 0);
      } else {
        styleSheet.innerHTML = keyframes;
      }
      
      // Apply the new animation
      marqueeRef.current.style.animation = 'resumeMarquee 60s linear infinite';
    }
    setIsPaused(false);
  };

  return (
    <div 
      className="py-12 relative overflow-hidden hidden lg:block"
      ref={ref}
    >
      <div className="relative">
        
        {/* Marquee container */}
        <div 
          className="w-full overflow-hidden position-relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={marqueeRef}
            className="flex"
            style={{
              animation: 'marquee 60s linear infinite',
              width: 'fit-content'
            }}
          >
            {duplicatedWorks.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-none"
              >
                <div className="relative h-[60vh] w-[60vh] overflow-hidden group mx-4">
                  {/* Loading spinner for each item */}
                  {!imagesLoaded[`${item.id}-${index}`] && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
                      <FaSpinner className="animate-spin text-white text-4xl" />
                    </div>
                  )}
                  
                  {item?.workImage?.endsWith('.mp4') ? (
                    <video 
                      className="w-full h-full object-cover" 
                      autoPlay 
                      playsInline 
                      loop 
                      muted
                      onLoadedData={() => handleMediaLoaded(`${item.id}-${index}`)}
                    >
                      <source src={item?.workImage} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={item?.workImage}
                      alt={item.workName}
                      onLoad={() => handleMediaLoaded(`${item.id}-${index}`)}
                    />
                  )}

                  {/* Overlay with work info */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-custom text-2xl mb-2">{item.workName}</h3>
                    <p className="text-white text-center font-custom1 text-sm mb-4 max-w-xs px-4">
                      {item.category}
                    </p>
                    <Link
                      to={`/our-works/${item.id}`}
                      onClick={() => window.scrollTo({ top: 0, left: 0 })}
                      className="px-6 py-2 bg-white text-black font-custom text-sm hover:bg-opacity-90 transition-all duration-300"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles for the animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </div>
  );
};

export default Newest;