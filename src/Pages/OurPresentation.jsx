import React from 'react';
import trekuartistaLogo from '../Components/Assets/whiteLogoTreku.png'; // Update with the correct path to your logo
import { ysabelTest } from '../Components/Works/presentation';
import { Link } from 'react-router-dom';

// const workData = [
//   {
//     id: 1,
//     title: 'YSABEL',
//     description: 'A description of project one, showcasing the main features and success.',
//     publicationDate: 'Published on September 15, 2024'
//   },
//   {
//     id: 2,
//     title: 'Project Two',
//     description: 'A description of project two, focusing on the results and achievements.',
//     publicationDate: 'Published on August 10, 2024'
//   },
//   {
//     id: 3,
//     title: 'Project Three',
//     description: 'A description of project three, highlighting the client satisfaction.',
//     publicationDate: 'Published on October 1, 2024'
//   },
//   {
//     id: 4,
//     title: 'Project Four',
//     description: 'A description of project four, highlighting the client satisfaction.',
//     publicationDate: 'Published on July 25, 2024'
//   }
// ];

const OurPresentation = () => {

  const handleClick = () => {
    
    window.scrollTo({ top: 0, behavior: 'smoth' });
  };

  return (
    <div className="py-12 w-full px-5 lg:px-[50px] bg-black text-gray-100">
      <h2 className="text-4xl font-extrabold font-custom">Our Presentation</h2>
      <p className="text-lg text-gray-300 font-custom1 mt-2 mb-8">
        This page is dedicated to showcasing our presentations at Trekuartista, highlighting the innovative projects we deliver for our clients.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8">
        {ysabelTest.map((work) => (
          <div
            key={work.id}
            className="bg-[#D9D9D9] lg:h-60 flex flex-col justify-center text-black p-6 shadow-lg border border-gray-200 relative"
          >
            <img
              src={trekuartistaLogo}
              alt="Trekuartista Logo"
              className="absolute top-2 right-2 h-10" // Adjust position and size as needed
            />
            <h3 className="text-2xl font-semibold mb-3 font-custom">{work.title}</h3>
            <p className="text-gray-700 mb-4 font-custom1">{work.description}</p>
            <p className="text-xs text-green-500 font-semibold mb-6 font-custom1">{work.publicationDate}</p>
            <div className="flex">
            <Link to={`/our-presentation/${work.id}`} onClick={handleClick}>
              <button className="border border-black text-black hover:bg-black hover:text-white py-2 px-4 font-custom1 transition duration-200">
                View Presentation
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPresentation;
