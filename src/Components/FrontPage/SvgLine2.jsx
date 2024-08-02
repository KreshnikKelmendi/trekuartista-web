import {motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const SvgLine2 = () => {
    const [ref, inView] = useInView({ threshold: 0.6 });
    const controls = useAnimation();
 
  const animationVariants = {
    visible: { pathLength: 1, transition: { duration: 1 } },
    hidden: { pathLength: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  return (
    <div>
        {/* <svg className="mt-2 w-[270px] lg:w-[330px]" 
             ref={ref} 
             height="13" 
             viewBox="0 0 325 13" 
             fill="none" 
             xmlns="http://www.w3.org/2000/svg">
        <motion.path 
             initial="hidden"
             animate={controls}
             variants={animationVariants} 
             d="M2 11C6.20342 11 9.85801 9.01948 14.4903 9.01948C18.5303 9.01948 22.1908 9.18072 26.0091 8.24928C35.4498 5.94624 44.315 6.0487 54.5285 6.0487C94.0864 6.0487 133.534 5.05844 173.117 5.05844C187.658 5.05844 201.698 2.08766 216.278 2.08766C234.134 2.08766 251.99 2.08766 269.847 2.08766C279.885 2.08766 289.924 2.08766 299.962 2.08766C307.761 2.08766 316.182 1.36524 323 4.06818" 
             stroke="white" 
             stroke-width="5" />
        </svg> */}
        <svg className='mt-2 w-[270px] lg:w-[330px]' ref={ref} height="13" viewBox="0 0 320 11" fill="black" xmlns="http://www.w3.org/2000/svg"> 
          <motion.path initial="hidden" animate={controls} variants={animationVariants}  d="M318 2C305.18 2 292.36 2 279.54 2C235.601 2.00001 191.657 1.99506 147.721 2.77779C99.0795 3.64437 50.5788 6.31491 2 9.00003" stroke="black" stroke-width="4" stroke-linecap="round"/>
</svg>

    </div>
  )
}

export default SvgLine2
