import React, { useState } from 'react';
import { AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai'; // Import lock and unlock icons
import trekuartistaLogo from '../Components/Assets/whiteLogoTreku.png';
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
    <div className="py-12 w-full px-5 lg:px-[50px] bg-black text-gray-100">
      <h2 className="text-4xl font-extrabold font-custom">Our Presentation</h2>
      <p className="text-lg text-gray-300 font-custom1 mt-2 mb-8">
        This page is dedicated to showcasing our presentations at Trekuartista, highlighting the innovative projects we deliver for our clients.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8">
        {presentations.map((work) => (
          <div
            key={work.id}
            className="bg-[#D9D9D9] lg:h-60 flex flex-col justify-center text-black p-6  relative"
          >
            <img
              src={trekuartistaLogo}
              alt="Trekuartista Logo"
              className="absolute top-2 right-2 h-10"
            />
            <p className="text-2xl font-semibold mb-3 font-custom tracking-[1px] leading-[25px]">{work.title}</p>
            <p className="text-gray-700 mb-4 font-custom1">{work.description}</p>
            <p className="text-xs text-green-700 font-semibold mb-6 font-custom1">{work.publicationDate}</p>
            <div className="flex">
              {work.pinned ? (
                <button
                  disabled
                  className="border border-gray-500 py-2 px-4 font-custom1 text-gray-500 cursor-not-allowed"
                >
                  Pinned - Cannot View
                </button>
              ) : (
                <Link to={`/our-presentation/${work.id}`} onClick={handleClick}>
                  <button className="border border-black text-black hover:bg-black hover:text-white py-2 px-8 font-custom1 transition duration-200">
                    View Presentation
                  </button>
                </Link>
              )}
              <button
                onClick={() => handlePinToggle(work.id)}
                className={`ml-2 flex justify-center items-center py-2 px-4 font-custom1 transition duration-200 ${work.pinned ? 'bg-gray-300' : ''}`}
                disabled={work.pinned} // Disable unpin button if pinned
              >
                {/* Conditionally render the icon based on pinned status */}
                {work.pinned ? (
                  <AiOutlineUnlock className="inline-block mr-1 text-gray-800" />
                ) : work.pinned === false ? null : (
                  <AiOutlineLock className="inline-block mr-1 text-gray-800" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPresentation;
