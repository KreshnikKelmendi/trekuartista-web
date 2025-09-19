import React, { useState } from 'react';
import { AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai'; // Import lock and unlock icons
import trekuartistaLogo from '../Components/Assets/logo-treku.png';
import { ysabelTest } from '../Components/Works/presentation';
import { Link } from 'react-router-dom';

const OurPresentation = () => {
  const [presentations, setPresentations] = useState(ysabelTest);

  const handlePinToggle = (id) => {
    setPresentations((prevPresentations) =>
      prevPresentations.map((presentation) =>
        presentation.id === id && presentation.pinned // Allow unpinning only if pinned
          ? { ...presentation, pinned: false }
          : presentation
      )
    );
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-black py-12 px-6 lg:px-[55px]">
      <h2 className="text-4xl text-white mb-4 font-custom2 tracking-[1px]">Our Presentations</h2>
      <p className="text-gray-400 text-sm lg:text-base font-custom1 lg:w-[45%] mb-8">This page is dedicated to showcasing our presentations at Trekuartista, highlighting the innovative projects we deliver for our clients.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {presentations.map((work) => (
          <div key={work.id} className="bg-gray-200 border border-black p-6 hover:border-gray-500 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-custom2 text-black tracking-[1px]">{work.title}</h3>
              <img src={trekuartistaLogo} alt="Logo" className="w-10 h-10 object-contain" />
            </div>
            
            <p className="text-gray-400 text-sm mb-4">{work.description}</p>
            <p className="text-xs text-green-400 font-medium mb-4">{work.publicationDate}</p>
            
            <div className="flex gap-2">
              {work.pinned ? (
                <button disabled className="bg-gray-700 text-gray-500 px-4 py-2 text-sm cursor-not-allowed">
                  <AiOutlineLock className="inline mr-1" />
                  Pinned
                </button>
              ) : (
                <Link to={`/our-presentation/${work.id}`} onClick={handleClick}>
                  <button className="bg-black text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-all duration-300">
                    View Presentation
                  </button>
                </Link>
              )}
              
              <button
                onClick={() => handlePinToggle(work.id)}
                className={`px-3 py-2 text-sm ${
                  work.pinned 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                } transition-colors`}
                disabled={work.pinned}
              >
                {work.pinned ? <AiOutlineUnlock /> : <AiOutlineLock />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPresentation;
