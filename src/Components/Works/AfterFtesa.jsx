import React from 'react';
import image1 from "../Assets/testYsabel/Ysabel-44.jpg";
import image2 from "../Assets/testYsabel/Ysabel-45.jpg";
import video2 from "../Assets/testYsabel/ysabel-video-2.mp4";

const AfterFtesa = () => {
    return (
        <div className='mt-16 lg:mt-24'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='w-full'>
                    <video autoPlay playsInline loop muted className='w-full h-full object-cover'>
                        <source src={video2} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <img src={image1} alt='' className='w-full h-full object-cover' />
                <img src={image2} alt='' className='w-full h-full object-cover' />
            </div>
        </div>
    );
};

export default AfterFtesa;
