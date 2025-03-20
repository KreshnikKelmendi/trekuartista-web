import React from 'react';
import image1 from "../Assets/testYsabel/Ysabel-44.jpg";
import image2 from "../Assets/testYsabel/Ysabel-45.jpg";
import video2 from "../Assets/testYsabel/ysabel-video-2.mp4";

const AfterFtesa = () => {
    return (
        <div className='mt-6 lg:mt-24 px-4'>
            <div className='flex flex-col lg:flex-row w-full gap-6'>
                <div className='lg:w-1/2 flex flex-col items-center lg:items-start'>
                    <video autoPlay playsInline loop muted className='w-full  mb-4 '>
                        <source src={video2} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <div className='flex flex-col justify-center lg:p-16'>
                    <p className='text-white font-bold text-lg lg:text-3xl font-custom4 mb-2'>Shembull</p>
                    <p className='text-white font-custom4 mb-2 text-sm lg:text-lg'>
                        Ftesa paloset në kënde të saktë për të krijuar një formë të pastër
                        dhe të drejtpërdrejtë. Çdo anë paloset në mënyrë të kujdesshme
                        për të siguruar që struktura e ftesës të jetë e qëndrueshme dhe e
                        saktë.
                    </p>
                    <p className='text-white text-sm font-custom4 lg:text-lg'>
                        Ftesa mbështjellohet me gjethe natyrale ose artificiale, duke krijuar
                        një pamje të bukur dhe natyrale, duke i dhënë asaj një element
                        të natyrës dhe elegancës.
                    </p>
                    </div>
                </div>
                <div className='lg:w-1/2 flex flex-col gap-4'>
                    <img src={image1} alt='' className='object-contain w-full h-[50vh] lg:h-[70vh] ' />
                    <img src={image2} alt='' className='object-contain w-full h-[50vh] lg:h-[70vh]' />
                </div>
            </div>
        </div>
    );
};

export default AfterFtesa;