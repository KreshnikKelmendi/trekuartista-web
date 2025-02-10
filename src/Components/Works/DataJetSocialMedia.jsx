import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { motion } from 'framer-motion';
import soundOnImage from '../Assets/on.png';
import soundOffImage from '../Assets/off.png';
import data1 from '../Assets/datajet/datajet-1.mp4';
import data2 from '../Assets/datajet/datajet-2.png';
import data3 from "../Assets/datajet/datajet-3.mp4"
import data4 from "../Assets/datajet/datajet-4.png"
import data5 from "../Assets/datajet/DataJet Feed Fianle-08.png"
import data6 from "../Assets/datajet/datajet-6.png"
import data7 from "../Assets/datajet/datajet-7.png"
import data8 from "../Assets/datajet/datajet-8.png"
import data9 from "../Assets/datajet/datajet-9.png"
import data10 from "../Assets/datajet/datajet-10.png"
import data11 from "../Assets/datajet/datajet-11.png"
import data12 from "../Assets/datajet/datajet-12.png"

const DataJetSocialMedia = () => {
    const mediaItems = [
        data12,
        data11,
        data10,
        data9,
        data8,
        data7,
        data6,
        data5,
        data4,
        data3,
        data2,
        data1,
      
    ];

    const [soundStates, setSoundStates] = useState(mediaItems.map(() => false));

    const toggleSound = (index) => {
        setSoundStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <div className="w-full bg-black gap-2 py-16">
            <div className="grid gap-1 lg:grid-cols-3 md:grid-cols-3 grid-cols-3">
                {mediaItems.map((media, index) => (
                    <LazyLoad key={index} height="100%">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-full object-cover relative"
                        >
                            {/* Number on top-right (Reversed order) */}
                            {/* <div className="absolute top-0 right-1 w-7 h-7 font-custom3 rounded-full bg-[#D2BADD] text-black flex items-center justify-center">
                                {mediaItems.length - index} 
                            </div> */}


                            {typeof media === 'string' && media.endsWith('.mp4') ? (
                                <>
                                    <video
                                        className="w-full lg:h-[62vh] object-cover"
                                        autoPlay
                                        playsInline
                                        loop
                                        muted={!soundStates[index]}
                                    >
                                        <source src={media} type="video/mp4" />
                                    </video>
                                    <button onClick={() => toggleSound(index)} className="absolute bottom-2 right-2">
                                        <img
                                            className="object-cover h-3 w-3 lg:w-6 lg:h-6"
                                            src={soundStates[index] ? soundOnImage : soundOffImage}
                                            alt={soundStates[index] ? 'Sound On' : 'Sound Off'}
                                        />
                                    </button>
                                </>
                            ) : (
                                <img src={media} alt="" className="w-full lg:h-[62vh] object-cover" />
                            )}
                        </motion.div>
                    </LazyLoad>
                ))}
            </div>
        </div>
    );
};

export default DataJetSocialMedia;
