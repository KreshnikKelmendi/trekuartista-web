import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InvitationYsabel = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [text, setText] = useState('');
  const fullText = 'Mirësevini në Ysabel – aty ku gjithçka është art.';

  useEffect(() => {
    if (inView) {
      let i = 0;
      const interval = setInterval(() => {
        setText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div className="mx-auto lg:mt-10">
      <h1 className="text-lg lg:text-3xl font-bold underline underline-offset-8 mb-4 text-white">INVITATION</h1>
      
      {/* Opacity Animation for Large Text */}
      <motion.p
        ref={ref}
        initial={{ opacity: 0.5 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="text-sm lg:w-1/2 lg:text-lg text-white font-custom4"
      >
        Ysabel është më shumë se një restorant – është një ndjenjë që nuk e ke përjetuar kurrë më parë.
        Është një stil i veçantë që shfaqet në çdo detaj, qoftë në ambientin e brendshëm, qoftë në ushqim.
      </motion.p>

      <p className="text-sm lg:w-1/2 lg:text-lg text-white mt-4 font-custom4">
        Çfarë e bën unike? <br />
        Kjo ftesë është më shumë se një copë letër – ajo mban një kod unik, krijuar për t'ju drejtuar
        drejt një eksperiencës inovative dhe misterioze. Ftesa përmban ilustrime mistike dhe një hartë
        që do t'ju udhëzojë në rrugën drejt ngjarjes që është më shumë se thjesht një event – është një
        përvojë që sfidon pritshmëritë.
      </p>

      {/* Letter-by-Letter Animation */}
      <motion.p
        ref={ref}
        className="text-gray-400 font-bold text-2xl mt-6 font-custom4"
      >
        {text}
      </motion.p>
    </div>
  );
};

export default InvitationYsabel;
