import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaVolumeMute, FaVolumeUp, FaDownload } from 'react-icons/fa'; // Importing icons

import ysabel1 from "../Components/Assets/testYsabel/ysabel-1.png";
import ysabel2 from "../Components/Assets/testYsabel/ysabel-2.png";
import ysabel3 from "../Components/Assets/testYsabel/ysabel-3.png";
import ysabel4 from "../Components/Assets/testYsabel/ysabel-4.png";
import ysabel5 from "../Components/Assets/testYsabel/ysabel-5.png";
import ysabelAnimation1 from "../Components/Assets/testYsabel/ysabel-animation-1.mp4"
import ysabelAnimation2 from "../Components/Assets/testYsabel/ysabel-animation-2.mp4"
// import ysabel6 from "../Components/Assets/testYsabel/ysabel-6.png";
// import ysabel7 from "../Components/Assets/testYsabel/ysabel-7.png";
import ysabel8 from "../Components/Assets/testYsabel/ysabel-8.png";
import ysabel9 from "../Components/Assets/testYsabel/ysabel-9.png";
import ysabel10 from "../Components/Assets/testYsabel/ysabel-10.png";
import ysabel11 from "../Components/Assets/testYsabel/ysabel-11.png"
import ysabel12 from "../Components/Assets/testYsabel/ysabel-12.png";
import ysabel13 from "../Components/Assets/testYsabel/ysabel-13.png";
import ysabel14 from "../Components/Assets/testYsabel/ysabel-14.png";
import ysabel15 from "../Components/Assets/testYsabel/ysabel-15.png";
import ysabel16 from "../Components/Assets/testYsabel/ysabel-16.png";
import ysabel17 from "../Components/Assets/testYsabel/ysabel-17.png";
import ysabel18 from "../Components/Assets/testYsabel/ysabel-18.png";
import ysabel19 from "../Components/Assets/testYsabel/ysabel-19.png";
import ysabel20 from "../Components/Assets/testYsabel/ysabel-20.png";
import ysabel21 from "../Components/Assets/testYsabel/ysabel-21.png";
import ysabel22 from "../Components/Assets/testYsabel/ysabel-22.png";

const ysabelTest = [
    { name: "Ysabel Image", media: ysabel1 },
    { name: "Ysabel Image", media: ysabel2 },
    { name: "Ysabel Image", media: ysabel3 },
    { name: "Ysabel Image", media: ysabel4 },
    { name: "Ysabel Image", media: ysabel5 },
    { name: "Ysabel Image", media: ysabelAnimation1 },
    { name: "Ysabel Image", media: ysabel8 },
    { name: "Ysabel Image", media: ysabel9 },
    { name: "Ysabel Image", media: ysabelAnimation2 },
    // { name: "Ysabel Image", media: ysabel6 },
    // { name: "Ysabel Image", media: ysabel7 },
   
    { name: "Ysabel Image", media: ysabel11 },
   
  
    { name: "Ysabel Video", media: ysabel12 },
    { name: "Ysabel Image", media: ysabel10 },
    { name: "Ysabel Image", media: ysabel13 },
    { name: "Ysabel Image", media: ysabel14 },
    { name: "Ysabel Image", media: ysabel15 },
    { name: "Ysabel Image", media: ysabel16 },
    { name: "Ysabel Image", media: ysabel17 },
    { name: "Ysabel Image", media: ysabel18 },
    { name: "Ysabel Image", media: ysabel19 },
    { name: "Ysabel Image", media: ysabel20 },
    { name: "Ysabel Image", media: ysabel21 },
    { name: "Ysabel Image", media: ysabel22 },
];

const YsabelTest = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [currentMedia, setCurrentMedia] = useState(null);
    const [isMuted, setIsMuted] = useState(true);

    const fullScreenItem = (media) => {
        setCurrentMedia(media);
        setIsFullScreen(true);
    };

    const closeFullScreen = () => {
        setIsFullScreen(false);
        setCurrentMedia(null);
    };

    // Close full-screen view with Esc key
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            closeFullScreen();
        }
    };

    // Add event listener for Esc key
    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Toggle mute/unmute
    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 1,
                ease: "easeOut",
                staggerChildren: 0.1,
            },
        },
    };

    const letterVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
    };

    return (
        <div className='w-full lg:px-[55px] px-4 h-fit py-2'>
            <div className='w-full grid grid-cols-1 gap-y-4'>
                {/* Animated YSABEL title */}
                <motion.p
                    className='font-custom text-left text-[42px] py-6'
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                >
                    {"YSABEL".split("").map((letter, index) => (
                        <motion.span key={index} variants={letterVariant}>
                            {letter}
                        </motion.span>
                    ))}
                </motion.p>

                {/* Media section */}
                {ysabelTest.map((item, index) => (
                    <div key={index} className='flex flex-col w-full items-center h-full relative'>
                        {item.media.endsWith('.mp4') ? (
                            <div className="relative w-full">
                                <video
                                    src={item.media}
                                    playsInline
                                    autoPlay
                                    loop
                                    muted={isMuted} // Set mute state
                                    className='w-full object-cover cursor-pointer'
                                    onClick={() => fullScreenItem(item.media)}
                                />
                                <button
                                    onClick={toggleMute} // Toggle sound on click
                                    className="absolute bottom-2 right-2 bg-white p-2 rounded-full"
                                >
                                    {isMuted ? (
                                        <FaVolumeMute size={15} />
                                    ) : (
                                        <FaVolumeUp size={15} />
                                    )}
                                </button>
                                {/* Download video */}
                                <a
                                    href={item.media}
                                    download
                                    className="absolute top-2 left-2 bg-white p-1 rounded-full hover:bg-black hover:text-white"
                                >
                                    <div className='flex justify-center items-center gap-x-1'>
                                        <FaDownload size={8} />
                                        <p className='font-custom text-[8px]'>download</p>
                                    </div>
                                </a>
                            </div>
                        ) : (
                            <div className="relative w-full">
                                <img
                                    src={item.media}
                                    alt={item.name}
                                    className='w-full object-cover cursor-pointer'
                                    onClick={() => fullScreenItem(item.media)}
                                />
                                {/* Download image */}
                                <a
                                    href={item.media}
                                    download
                                    className="absolute top-2 left-2 bg-white p-1 rounded-full hover:bg-black hover:text-white"
                                >
                                    <div className='flex justify-center items-center gap-x-1'>
                                        <FaDownload size={8} />
                                        <p className='font-custom text-[7px] lg:text-[8px]'>download</p>
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Full-screen view */}
            {isFullScreen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            onClick={closeFullScreen}
                            className="absolute z-50 w-fit top-1 lg:top-16 right-1 lg:right-4 rounded-full text-black bg-white p-[5px] hover:bg-black hover:text-white"
                        >
                            X
                        </button>
                        {currentMedia.endsWith('.mp4') ? (
                            <div className="relative">
                                <video
                                    src={currentMedia}
                                    autoPlay
                                    loop
                                    muted={isMuted}
                                    className="max-w-full max-h-full"
                                />
                                <button
                                    onClick={toggleMute}
                                    className="absolute bottom-2 right-2 bg-white p-2 rounded-full"
                                >
                                    {isMuted ? (
                                        <FaVolumeMute size={24} />
                                    ) : (
                                        <FaVolumeUp size={24} />
                                    )}
                                </button>
                            </div>
                        ) : (
                            <img
                                src={currentMedia}
                                alt="Fullscreen"
                                className="max-w-full max-h-full"
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default YsabelTest;
