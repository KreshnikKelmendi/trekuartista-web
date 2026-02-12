import React from 'react';
import { Link } from 'react-router-dom';
import { videoData } from './videoData';

const VideoLinks = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-black py-12 px-5 lg:px-[55px]">
      <h2 className="text-4xl text-white mb-4 font-custom2 tracking-[1px]">Video Productions</h2>
      <p className="text-gray-400 text-sm lg:text-base font-custom1 lg:w-[45%] mb-8">
        Explore our video production work.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {videoData.map((item) => (
          <Link
            key={item.id}
            to={`/${item.id}`}
            onClick={handleClick}
            className="group border border-white/20 hover:border-white/60 transition-all duration-300 p-3 lg:p-12"
          >
            <h3 className="text-xl text-white font-custom2 tracking-[1px] mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm font-custom1">{item.textDescription}</p>
            <span className="inline-block mt-4 text-sm text-white font-custom1 group-hover:underline">
              View Project →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoLinks;
