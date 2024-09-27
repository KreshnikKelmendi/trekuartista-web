import React from 'react';
import LazyLoad from 'react-lazy-load';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import soundOnImage from '../Components/Assets/on.png';
import soundOffImage from '../Components/Assets/off.png';

const AnimatedText = ({
  text = '',
  el: Wrapper = 'p',
  className,
  once = true,
  repeatDelay,
  animation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: 'easeOut' } }
  }
}) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const [ref, inView] = useInView({ triggerOnce: once }); // Using triggerOnce

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <Wrapper className={className}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{ visible: { transition: { staggerChildren: 0.02 } }, hidden: {} }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(' ').map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split('').map((char, charIndex) => (
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

const ThirdPart = ({ thirdMediaItems, secondWorkName, thirdDescription, soundStates, toggleSound }) => {
  const mediaAnimations = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <div className="w-full relative bg-black grid grid-cols-1 lg:grid-cols-3 px-3 lg:px-[50px] py-0 lg:pb-[15px] gap-x-[20px] gap-y-[20px] lg:gap-y-[23px] overflow-hidden">
      {/* Media Section 1 */}
      {thirdMediaItems?.[0] && (
        <div className="w-full h-80 lg:h-fit relative col-span-1">
          <LazyLoad height="100%">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={mediaAnimations}
              className="w-full h-80 lg:h-[62vh] object-cover"
            >
              {thirdMediaItems[0].endsWith('.mp4') ? (
                <>
                  <video className="w-full h-full object-cover" autoPlay playsInline loop muted={!soundStates[1]}>
                    <source src={thirdMediaItems[0]} type="video/mp4" />
                  </video>
                  <button onClick={() => toggleSound(1)} className="absolute bottom-2 left-1">
                    <img className="object-cover w-4 h-4" src={soundStates[1] ? soundOnImage : soundOffImage} alt={soundStates[1] ? 'Sound On' : 'Sound Off'} />
                  </button>
                </>
              ) : (
                <img src={thirdMediaItems[0]} alt="" className="w-full h-full object-cover" />
              )}
            </motion.div>
          </LazyLoad>
        </div>
      )}

      {/* Media Section 2 */}
      {thirdMediaItems?.[1] && (
        <div className="w-full h-80 lg:h-fit relative col-span-1">
          <LazyLoad height="100%">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={mediaAnimations}
              className="w-full h-80 lg:h-[62vh] object-cover"
            >
              {thirdMediaItems[1].endsWith('.mp4') ? (
                <>
                  <video className="w-full h-full object-cover" autoPlay playsInline loop muted={!soundStates[2]}>
                    <source src={thirdMediaItems[1]} type="video/mp4" />
                  </video>
                  <button onClick={() => toggleSound(2)} className="absolute bottom-2 left-0">
                    <img className="object-cover w-4 h-4" src={soundStates[2] ? soundOnImage : soundOffImage} alt={soundStates[2] ? 'Sound On' : 'Sound Off'} />
                  </button>
                </>
              ) : (
                <img src={thirdMediaItems[1]} alt="" className="w-full h-full object-cover" />
              )}
            </motion.div>
          </LazyLoad>
        </div>
      )}

      {/* Text Section */}
      <div className="w-full lg:w-auto flex flex-col justify-center text-white col-span-1 lg:px-[20px] 2xl:px-[80px]">
        <AnimatedText
          text={secondWorkName}
          el="p"
          className="font-custom text-[33px]"
          once={true}
          animation={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
          }}
        />
        <AnimatedText
          text={thirdDescription}
          el="p"
          className="text-[18px] font-custom1 pt-2"
          once={true}
          animation={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
          }}
        />
      </div>
    </div>
  );
};

export default ThirdPart;
