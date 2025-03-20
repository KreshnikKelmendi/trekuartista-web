import React from 'react';
import image1 from "../Assets/testYsabel/Ysabel-3.jpg";
import video1 from "../Assets/testYsabel/ysabel-video-1.mp4"
import image3 from "../Assets/testYsabel/Ysabel-222.jpg";
import image4 from "../Assets/testYsabel/Ysabel-111.jpg";


const mediaData = [
  { type: 'image', src: image1, title: 'Hapat se si do paloset ftesa me kënde:', description: 'Ftesa paloset në kënde të saktë për të krijuar një formë të pastër dhe të drejtpërdrejtë. Çdo anë paloset në mënyrë të kujdesshme për të siguruar që struktura e ftesës të jetë e qëndrueshme dhe e saktë.' },
  { type: 'video', src: video1, title: 'Kopërtina e ftesës me kodin sipër dhe procesi me flakë për shkrirje të ngjyrës së lapsit:', description: 'Ftesa paloset në kënde të saktë për të krijuar një formë të pastër dhe të drejtpërdrejtë. Çdo anë paloset në mënyrë të kujdesshme për të siguruar që struktura e ftesës të jetë e qëndrueshme dhe e saktë.' },
  { type: 'image', src: image3, title: 'Dizajni që përmban ftesa brenda:', description: 'Ftesa përmban një dizajn brenda që pasqyron elementet unike të Ysabel, duke përdorur elementë dekorativë që pasqyrojnë stilin dhe sofistikimin e restoranti.' },
  { type: 'image', src: image4, title: 'Ftesa e mbështjellur me gjethe:', description: 'Ftesa mbështjellohet me gjethe natyrale ose artificiale, duke krijuar një pamje të bukur dhe natyrale, duke i dhënë asaj një element të natyrës dhe elegancës.' }
];

const Ftesa = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-6 mt-4 lg:mt-24">
      {mediaData.map((item, index) => (
        <div key={index} className="flex flex-col lg:flex-row items-center text-left rounded-lg shadow-lg gap-4">
          {item.type === 'video' ? (
            <video autoPlay playsInline muted  loop className="lg:w-1/2 h-auto">
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={item.src} alt={item.title} className="lg:w-1/2 h-auto" />
          )}
          <div className="lg:w-1/2">
            <h2 className="text-lg lg:text-2xl font-bold text-white mb-2 font-custom4">{item.title}</h2>
            <p className="text-white font-custom4 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ftesa;