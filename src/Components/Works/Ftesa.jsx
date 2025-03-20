import React from 'react';
import image1 from "../Assets/testYsabel/Ysabel-3.jpg";
import video1 from "../Assets/testYsabel/ysabel-video-1.mp4";
import image3 from "../Assets/testYsabel/Ysabel-222.jpg";
import image4 from "../Assets/testYsabel/Ysabel-111.jpg";

const mediaData = [
  { 
    type: 'image', 
    src: image1, 
    title: 'Hapat se si do paloset ftesa me kënde', 
    description: 'Ftesa paloset me kënde për me kriju një efekt më të thellë e mistik gjatë hapjes, ku secili kënd hapet me kujdes për me zbulu më shumë ilustrime dhe detaje që ndihmojnë në krijimin e një atmosfere të veçantë. Ky lloj dizajni ofron një ndikim vizual që bën që ftesa të duket më e gjallë dhe të krijohet një element surprize kur hapet.' 
  },
  { 
    type: 'video', 
    src: video1, 
    title: 'Kopertina e ftesës me kodin sipër dhe procesi me flakë për shkrirje të ngjyrës së lapsit', 
    description: '' 
  },
  { 
    type: 'image', 
    src: image3, 
    title: 'Dizajni që përmban ftesa brenda', 
    description: 'Te elementet dekorative, ftesa ka ilustrime mistike që pasqyrojnë ringjalljen e Ysabel-it, perëndeshës që ka fuqinë e luleve. Çdo detaj sjell një atmosferë magjike e misterioze, duke e lidhur ngjarjen me botën e saj.' 
  },
  { 
    type: 'image', 
    src: image4, 
    title: 'Ftesa e mbështjellur me gjethe', 
    description: 'Ftesa mbështjellohet me gjethe natyrale, duke krijuar një atmosferë freskuese dhe elegante. Ajo përçon një mesazh nga një botë tjetër, magjike dhe plot gjelbërim, duke na bërë të ndiejmë se po hyjmë në një dimension të veçantë, si një perëndeshë që na fton në një udhëtim të jashtëzakonshëm' 
  }
];

const Ftesa = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-6 mt-4 lg:mt-24">
      {mediaData.map((item, index) => (
        <div 
          key={index} 
          className="flex flex-col lg:flex-row items-center text-left gap-6 pb-4 mb-4 md:border-none"
        >
          {item.type === 'video' ? (
            <video autoPlay playsInline muted loop className="lg:w-1/2 h-auto">
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={item.src} alt={item.title} className="lg:w-1/2 h-auto" />
          )}
          <div className="lg:w-1/2">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-300 mb-2 font-custom4">{item.title}</h2>
            <p className="text-white font-custom4 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ftesa;
