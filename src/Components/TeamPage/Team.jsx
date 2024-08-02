import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { teamMembers } from './teamMembers';
import { FaLinkedin } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';

const TeamMember = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const delay = index * 0.15;

  return (
    <LazyLoad height='100%'>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.5, delay }}
        className="text-white justify-center p-2 lg:p-0 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img
          src={isHovered ? member.hoverImage : member.image}
          alt={member.name}
          className="w-full h-[58vh] lg:h-[82vh] object-cover"
          whileHover={{ scale: isHovered ? 1.019 : 1 }} 
          transition={{ duration: 0.9, ease: "easeIn" }} 
        />
        <div className='absolute bottom-4 left-4'>
          <h2 className="text-lg font-custom1 mt-2 font-bold">{member.name}</h2>
          <p className="text-base font-custom1">{member.position}</p>
        </div>
        {isHovered && (
          <motion.div
            className='absolute bottom-4 right-4'
            initial="hidden"
            animate="visible"
            variants={iconVariants}
            transition={{ duration: 0.5 }}
          >
            {member.linkedinLink && (
              <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            )}
          </motion.div>
        )}
      </motion.div>
    </LazyLoad>
  );
};

const Team = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] pb-10 gap-y-[0px] lg:gap-y-[20px] lg:px-[50px] bg-black">
      {teamMembers.map((member, index) => (
        <TeamMember key={member.id} member={member} index={index} />
      ))}
    </div>
  );
};

export default Team;

