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
  once,
  repeatDelay,
  animation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, type: 'spring', stiffness: 100 } }
  }
}) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const [ref, inView] = useInView({ triggerOnce: once, threshold: 0.2 });

  React.useEffect(() => {
    let timeout;
    const show = () => {
      controls.start('visible');
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start('hidden');
          controls.start('visible');
        }, repeatDelay);
      }
    };

    if (inView) {
      show();
    } else {
      controls.start('hidden');
    }

    return () => clearTimeout(timeout);
  }, [inView, controls, repeatDelay]);

  return (
    <Wrapper className={className}>
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

const ThirdPart = ({ thirdMediaItems, secondWorkName, textDescription, soundStates, toggleSound }) => {
  return (
    <div className="w-full relative bg-black grid grid-cols-1 lg:grid-cols-3 px-3 lg:px-[50px] py-0 lg:pb-[15px] gap-x-[20px] gap-y-[20px] lg:gap-y-[23px] overflow-hidden">
      {/* Media Section 1 */}
      {thirdMediaItems?.[0] && (
        <div className="w-full h-80 lg:h-fit relative col-span-1">
          <LazyLoad height="100%">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full h-80 lg:h-[62vh] object-cover"
            >
              {thirdMediaItems[0].endsWith('.mp4') ? (
                <>
                  <video className="w-full h-full object-cover" autoPlay playsInline loop muted={!soundStates[1]}>
                    <source src={thirdMediaItems[0]} type="video/mp4" />
                  </video>
                  <button onClick={() => toggleSound(1)} className="absolute bottom-2 left-0">
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
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
          animation={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 50 } }
          }}
        />
        <AnimatedText
          text={textDescription}
          el="p"
          className="text-[18px] font-custom1 pt-2"
          animation={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 50 } }
          }}
        />
      </div>
    </div>
  );
};

export default ThirdPart;
