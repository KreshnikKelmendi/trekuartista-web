import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaVolumeMute, FaVolumeUp, FaDownload } from 'react-icons/fa'; // Importing icons
import { ysabelTest } from '../Components/Works/presentation';
import { useParams } from 'react-router-dom';

const SinglePageOfPresentation = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [currentMedia, setCurrentMedia] = useState(null);
    const [isMuted, setIsMuted] = useState(true);
    const { presentationID } = useParams();
    const presentation = ysabelTest?.find((ad) => ad.id == presentationID);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeFullScreen();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!presentation) {
        return <div className='font-custom text-2xl mt-5 justify-center items-center text-center'>presentation NOT FOUND. BAD REQUEST!</div>;
    }

    const { title } = presentation;

    const fullScreenItem = (media) => {
        setCurrentMedia(media);
        setIsFullScreen(true);
    };

    const closeFullScreen = () => {
        setIsFullScreen(false);
        setCurrentMedia(null);
    };

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
                {ysabelTest[0].media.map((media, index) => (
                    <div key={index} className='flex flex-col w-full items-center h-full relative'>
                        {media.endsWith('.mp4') ? (
                            <div className="relative w-full">
                                <video
                                    src={media}
                                    playsInline
                                    autoPlay
                                    loop
                                    muted={isMuted} 
                                    className='w-full object-cover cursor-pointer'
                                    onClick={() => fullScreenItem(media)}
                                />
                                <button
                                    onClick={toggleMute}
                                    className="absolute bottom-2 right-2 bg-white p-2 rounded-full"
                                >
                                    {isMuted ? <FaVolumeMute size={15} /> : <FaVolumeUp size={15} />}
                                </button>
                                {/* Download video */}
                                <a
                                    href={media}
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
                                    src={media}
                                    alt={`Media ${index}`}
                                    className='w-full object-cover cursor-pointer'
                                    onClick={() => fullScreenItem(media)}
                                />
                                {/* Download image */}
                                <a
                                    href={media}
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
                                    {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
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

export default SinglePageOfPresentation;
