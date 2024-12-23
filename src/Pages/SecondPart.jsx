import React, { useEffect } from 'react';
import LazyLoad from 'react-lazy-load';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import soundOnImage from '../Components/Assets/on.png';
import soundOffImage from '../Components/Assets/off.png';

const AnimatedText = ({
  text = '',
  el: Wrapper = 'p',
  className,
  once,
  repeatDelay,
  animation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } }
  }
}) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const [ref, inView] = useInView({ triggerOnce: once });

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (inView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [inView, controls, repeatDelay]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.02 } },
          hidden: {}
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ")?.map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

const SecondPart = ({ secondMediaItems, secondWorkName, secondDescription, soundStates, toggleSound }) => {
  const showTextSection = secondWorkName || secondDescription; // Check if text exists

  return (
    <div className={`w-full relative bg-black flex flex-col lg:flex-row lg:justify-between px-3 lg:px-[50px] py-6 lg:py-[15px] gap-x-[20px] gap-y-[20px] lg:gap-y-[23px] overflow-hidden`}>
      {secondMediaItems?.map((media, index) => (
        <React.Fragment key={index}>
          {/* Conditionally Render Text Section */}
          {showTextSection && (
            <div className="lg:w-1/2 justify-center flex flex-col text-white lg:px-[100px]">
              {secondWorkName && (
                <AnimatedText
                  text={secondWorkName}
                  el="p"
                  className="font-custom text-[33px]"
                  animation={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 50 } }
                  }}
                />
              )}
              {secondDescription && (
                <AnimatedText
                  text={secondDescription}
                  el="p"
                  className="text-[18px] font-custom1 pt-2 2xl:w-3/4"
                  animation={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 50 } }
                  }}
                />
              )}
            </div>
          )}

          {/* Media Section */}
          <div className={`${showTextSection ? 'lg:w-1/2' : 'w-full'} h-80 lg:h-fit relative`}>
            <LazyLoad height="100%">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                className="w-full h-80 lg:h-[550px] 2xl:h-[86vh] object-cover"
              >
                {media && (media.endsWith('.mp4') ? (
                  <>
                    <video className="w-full h-full object-cover" autoPlay playsInline loop muted={!soundStates[index + 1]}>
                      <source src={media} type="video/mp4" />
                    </video>
                    <button onClick={() => toggleSound(index + 1)} className="absolute bottom-2 left-1">
                      <img className="object-cover w-4 h-4" src={soundStates[index + 1] ? soundOnImage : soundOffImage} alt={soundStates[index + 1] ? 'Sound On' : 'Sound Off'} />
                    </button>
                  </>
                ) : (
                  <img src={media} alt="" className="w-full h-full object-cover" />
                ))}
              </motion.div>
            </LazyLoad>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SecondPart;
