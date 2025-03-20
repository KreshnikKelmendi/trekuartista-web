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
      <p className="text-sm lg:w-1/2 lg:text-lg text-white font-custom4">
        Ysabel është më shumë se një restorant – është një përvojë.<br /> <br/>
        Kjo ftesë nuk është thjesht një copë letër; ajo mban një kod unik, krijuar për të zbuluar
        diçka të veçantë.
      </p>
      <p className="text-sm lg:w-1/2 lg:text-lg text-white mt-4 font-custom4">
        Çfarë e bën unike? <br /> 
        Një ftesë e dizajnuar me kujdes, e frymëzuar nga natyra dhe eleganca, që pasqyron
        thelbin dhe sofistikimin e Ysabel. Secila ftesë përmban një kod, i cili kur zbulohet,
        shfaq emrin Ysabel, duke shtuar një element misteri dhe ekskluziviteti. Më shumë
        se një ftesë, ajo është një parathënie e një eksperience.
      </p>
      <motion.p
        ref={ref}
        className='text-gray-400 font-bold text-2xl mt-6 font-custom4'
      >
        {text}
      </motion.p>
    </div>
  );
};

export default InvitationYsabel;