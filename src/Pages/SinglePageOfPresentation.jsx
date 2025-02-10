import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaVolumeMute, FaVolumeUp, FaDownload } from 'react-icons/fa';
import { ysabelTest } from '../Components/Works/presentation';
import { useParams } from 'react-router-dom';
import JaffaPlusPresentation from '../Components/Works/JaffaPlusPresentation';
import DataJetPresentation from '../Components/Works/DataJetPresentation';

const SinglePageOfPresentation = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [currentMedia, setCurrentMedia] = useState(null);
    const [isMuted, setIsMuted] = useState(true);
    const { presentationID } = useParams();
    const presentation = ysabelTest?.find((ad) => ad.id === presentationID);

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

    if (!presentation || !presentation.media) {
        return <div className='font-custom text-2xl mt-5 justify-center items-center text-center'>Presentation NOT FOUND. BAD REQUEST!</div>;
    }

    const { title, webLink, media, text1, text2 } = presentation;

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
        <div className={`w-full ${presentationID === "jaffa-plus" ? "py-0" : "lg:px-[55px] px-4 bg-black py-2"} h-fit`}>
    
        {presentationID === "jaffa-plus" ? (
            /** Use the JaffaPlusPresentation Component with JaffaPlus Specific Design */
            <div className="specific-jaffa-design">
                <JaffaPlusPresentation
                    title={title}
                    text1={text1}
                    text2={text2}
                    media={media}
                    fullScreenItem={fullScreenItem}
                />
            </div>
        ) : presentationID === "data-jet" ? (
            /** Use a Different Component for Data Jet Design */
            <div className="specific-data-jet-design">
                <DataJetPresentation
                    title={title}
                    text1={text1}
                    text2={text2}
                    media={media}
                    fullScreenItem={fullScreenItem}
                />
            </div>
        ) : (
            /** The Original Design for All Other IDs */
            <div className='w-full grid grid-cols-1 gap-y-4'>
                <motion.p
                    className='font-custom text-left text-[42px] py-6'
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                >
                    {title.split("").map((letter, index) => (
                        <motion.span key={index} variants={letterVariant}>
                            {letter}
                        </motion.span>
                    ))}
                </motion.p>
    
                {media.map((mediaItem, index) => (
                    <div key={index} className='flex flex-col w-full items-center h-full relative'>
                        {mediaItem.endsWith('.mp4') ? (
                            <div className="relative w-full">
                                <video
                                    src={mediaItem}
                                    playsInline
                                    autoPlay
                                    loop
                                    muted={isMuted}
                                    className='w-full object-cover cursor-pointer'
                                    onClick={() => fullScreenItem(mediaItem)}
                                />
                                <button
                                    onClick={toggleMute}
                                    className="absolute bottom-2 right-2 bg-white p-2 rounded-full"
                                >
                                    {isMuted ? <FaVolumeMute size={15} /> : <FaVolumeUp size={15} />}
                                </button>
                                <a
                                    href={mediaItem}
                                    download
                                    className="absolute top-2 left-2 bg-white p-1 rounded-full hover:bg-black hover:text-white"
                                >
                                    <FaDownload size={8} />
                                </a>
                            </div>
                        ) : (
                            <div className="relative w-full">
                                <img
                                    src={mediaItem}
                                    alt={`Media ${index}`}
                                    className='w-full object-cover cursor-pointer'
                                    onClick={() => fullScreenItem(mediaItem)}
                                />
                                <a
                                    href={mediaItem}
                                    download
                                    className="absolute top-2 left-2 bg-white p-1 rounded-full hover:bg-black hover:text-white"
                                >
                                    <FaDownload size={8} />
                                </a>
                            </div>
                        )}
                    </div>
                ))}
    
                {webLink && (
                    <div className='my-12 w-full'>
                        <a
                            href={webLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black w-full font-custom1 text-white px-16 py-3 hover:bg-white hover:text-black transition duration-300"
                        >
                            Visit Web Link
                        </a>
                    </div>
                )}
            </div>
        )}
    
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
