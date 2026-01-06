import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaVolumeMute, FaVolumeUp, FaDownload, FaExpand, FaWindowClose, FaCog } from 'react-icons/fa';
import { ysabelTest } from '../Components/Works/presentation';
import { useParams } from 'react-router-dom';
import JaffaPlusPresentation from '../Components/Works/JaffaPlusPresentation';
import DataJetPresentation from '../Components/Works/DataJetPresentation';
import YsabelPresentation from '../Components/Works/YsabelPresentation';
import BruminoPresentation from '../Components/Works/BruminoPresentation';
import SocialMediaEmona from '../Components/Works/SocialMediaEmona';
import EmonaPresentation from '../Components/Works/EmonaPresentation';
import UtopiaPresentation from '../Components/Works/UtopiaPresentation';
import PristineTravelPresentation from '../Components/Works/PristineTravelPresentation';

const SinglePageOfPresentation = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [currentMedia, setCurrentMedia] = useState(null);
    const [mutedStates, setMutedStates] = useState({});
    const [showSettings, setShowSettings] = useState(false);
    const [gridColumns, setGridColumns] = useState(1); // Default to 1 column
    const videoRefs = useRef([]);
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

    // Initialize mute states for all videos
    useEffect(() => {
        if (presentation?.media) {
            const initialMutedStates = {};
            presentation.media.forEach((mediaItem, index) => {
                if (mediaItem.endsWith('.mp4')) {
                    initialMutedStates[index] = true; // Default to muted
                }
            });
            setMutedStates(initialMutedStates);
        }
    }, [presentation]);

    if (!presentation || !presentation.media) {
        return <div className='font-custom text-2xl mt-5 justify-center items-center text-center'>Presentation NOT FOUND. BAD REQUEST!</div>;
    }

    const { title, webLink, media, text1, text2 } = presentation;

    const fullScreenItem = (media, index) => {
        // Pause the original video if it's playing
        if (media.endsWith('.mp4')) {
            const videoElement = videoRefs.current[index];
            if (videoElement) {
                videoElement.pause();
            }
        }
        setCurrentMedia({ url: media, index });
        setIsFullScreen(true);
    };

    const closeFullScreen = () => {
        // Resume the original video if it was playing
        if (currentMedia?.url.endsWith('.mp4')) {
            const videoElement = videoRefs.current[currentMedia.index];
            if (videoElement) {
                videoElement.play();
            }
        }
        setIsFullScreen(false);
        setCurrentMedia(null);
    };

    const toggleMute = (index) => {
        setMutedStates(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const toggleSettings = () => {
        setShowSettings(!showSettings);
    };

    const changeGridColumns = (cols) => {
        setGridColumns(cols);
        setShowSettings(false);
    };

    const getGridClass = () => {
        switch(gridColumns) {
            case 1: return 'lg:grid-cols-1';
            case 2: return 'lg:grid-cols-2';
            case 3: return 'lg:grid-cols-3';
            case 4: return 'lg:grid-cols-4';
            case 5: return 'lg:grid-cols-5';
            case 7: return 'lg:grid-cols-7';
            case 8: return 'lg:grid-cols-8';
            default: return 'lg:grid-cols-1';
        }
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
        <div className={`w-full ${presentationID === "jaffa-plus" || presentationID === "prezantimi-i-lojes-shperblyese-me-cajin-e-zemres" ? "py-0" : "lg:px-[55px] px-4 pb-16 bg-black py-2"} h-fit`}>

            {presentationID === "jaffa-plus" ? (
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
                <div className="specific-data-jet-design">
                    <DataJetPresentation
                        title={title}
                        text1={text1}
                        text2={text2}
                        media={media}
                        fullScreenItem={fullScreenItem}
                    />
                </div>
            ) : presentationID === "ysabel-presentation" ? (
                <div className="specific-ysabel-design">
                    <YsabelPresentation
                        title={title}
                        text1={text1}
                        text2={text2}
                        media={media}
                        fullScreenItem={fullScreenItem}
                    />
                </div>
            ) : presentationID === "brumino-social-media-theme" ? (
                <div className="specific-ysabel-design">
                    <BruminoPresentation
                        title={title}
                        text1={text1}
                        text2={text2}
                        media={media}
                        fullScreenItem={fullScreenItem}
                    />
                </div>): presentationID === "emona-brand-social-media-theme" ? (
                <div className="specific-ysabel-design">
                    <SocialMediaEmona
                        title={title}
                        text1={text1}
                        text2={text2}
                        media={media}
                        fullScreenItem={fullScreenItem}
                    />
                </div>): presentationID === "prezantimi-i-lojes-shperblyese-me-cajin-e-zemres" ? (
                <div className="specific-emona-design">
                    <EmonaPresentation
                        title={title}
                        text1={text1}
                        text2={text2}
                        media={media}
                        fullScreenItem={fullScreenItem}
                    />
                </div>):presentationID === "utopia-rhythm-social-media-theme" ? (
                <div className="utopia-rhythm-social-media-theme">
                    <UtopiaPresentation
                        title={title}
                        text1={text1}
                        text2={text2}
                        media={media}
                        fullScreenItem={fullScreenItem}
                    />
                </div>):presentationID === "pristine-travel" ? (
                <div className="pristine-travel">
                    <PristineTravelPresentation
                        title={title}
                        text1={text1}
                        text2={text2}
                        media={media}
                        fullScreenItem={fullScreenItem}
                    />
                </div>):(
                /** The Original Design for All Other IDs */
                <div className='w-full relative'>
                    <motion.p
                        className='font-custom text-white text-left lg:text-center text-[40px] lg:text-5xl tracking-[2px] lg:tracking-[2px] py-6 lg:py-12'
                        variants={textVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        {title.split("").map((letter, index) => (
                            <motion.span className='hover-stroke2' key={index} variants={letterVariant}>
                                {letter}
                            </motion.span>
                        ))}
                        <p className='text-gray-500 text-left lg:text-center text-base lg:text-xl lg:mt-6 font-custom4 italic'>{text1}</p>
                    </motion.p>
                    {/* Settings Button */}
                    <div className="fixed hidden lg:block right-1 top-20 z-30">
                        <button 
                            onClick={toggleSettings}
                            className="p-2 transition-all hover:rotate-45 hover:scale-110 duration-100 ease-linear"
                            title="Grid Settings"
                        >
                            <FaCog color='white' />
                        </button>
                        
                        {showSettings && (
                            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-40">
                                <div className="py-1">
                                    <button 
                                        onClick={() => changeGridColumns(1)}
                                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        1 Column
                                    </button>
                                    <button 
                                        onClick={() => changeGridColumns(2)}
                                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        2 Columns
                                    </button>
                                    <button 
                                        onClick={() => changeGridColumns(3)}
                                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        3 Columns
                                    </button>
                                    <button 
                                        onClick={() => changeGridColumns(4)}
                                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        4 Columns
                                    </button>
                                    <button 
                                        onClick={() => changeGridColumns(5)}
                                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        5 Columns
                                    </button>
                                    <button 
                                        onClick={() => changeGridColumns(7)}
                                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        7 Columns
                                    </button>
                                    <button 
                                        onClick={() => changeGridColumns(8)}
                                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        8 Columns
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={`grid ${getGridClass()} gap-y-4 gap-x-4`}>
                        {media.map((mediaItem, index) => (
                            <div key={index} className='flex flex-col w-full items-center h-full relative'>
                                {mediaItem.endsWith('.mp4') ? (
                                    <div className="relative w-full">
                                        <video
                                            ref={el => videoRefs.current[index] = el}
                                            src={mediaItem}
                                            playsInline
                                            autoPlay
                                            controls
                                            loop
                                            muted={mutedStates[index] === undefined ? true : mutedStates[index]}
                                            className='w-full object-cover'
                                        />
                                        {/* Fullscreen Button Always Visible */}
                                        <button
                                            onClick={() => fullScreenItem(mediaItem, index)}
                                            className="absolute bottom-2 right-1 lg:right-2 bg-white p-1 hover:scale-105 rounded-full"
                                            title='Full Screen'
                                        >
                                            <FaExpand size={13} />
                                        </button>

                                        <button
                                            onClick={() => toggleMute(index)}
                                            className="absolute bottom-2 left-1 lg:left-2 bg-white p-1 rounded-full"
                                        >
                                            {mutedStates[index] ? <FaVolumeMute size={12} /> : <FaVolumeUp size={12} />}
                                        </button>

                                        <a
                                            href={mediaItem}
                                            download
                                            className="absolute top-2 left-1 lg:left-2 bg-white p-1 rounded-full hover:bg-black hover:text-white"
                                            title='Download'
                                        >
                                            <FaDownload size={8} />
                                        </a>
                                    </div>
                                ) : (
                                    <div className="relative w-full">
                                        <img
                                            src={mediaItem}
                                            alt={`Media ${index}`}
                                            className='w-full object-cover'
                                        />
                                        {/* Fullscreen Button Always Visible */}
                                        <button
                                            onClick={() => fullScreenItem(mediaItem, index)}
                                            className="absolute bottom-2 right-1 lg:right-2 hover:scale-105 bg-white p-1 rounded-full"
                                            title='Full Screen'
                                        >
                                            <FaExpand size={13} />
                                        </button>

                                        <a
                                            href={mediaItem}
                                            download
                                            className="absolute top-2 left-1 lg:left-2 bg-white p-1 rounded-full hover:bg-black hover:text-white"
                                        >
                                            <FaDownload size={8} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

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
                <div className="fixed lg:top-16 inset-0 bg-black flex items-center w-full justify-center z-50">
                    <div className="relative">
                        <button
                            onClick={closeFullScreen}
                            className="absolute z-50 w-fit top-1 lg:top-10 right-1 lg:right-2 text-black bg-white p-[5px] hover:bg-black hover:text-white"
                        >
                            <FaWindowClose />
                        </button>
                        {currentMedia?.url.endsWith('.mp4') ? (
                            <div className="relative">
                                <video
                                    src={currentMedia.url}
                                    autoPlay
                                    loop
                                    muted={mutedStates[currentMedia.index] === undefined ? true : mutedStates[currentMedia.index]}
                                    className="max-w-full max-h-full lg:p-10"
                                />
                                <button
                                    onClick={() => toggleMute(currentMedia.index)}
                                    className="absolute bottom-2 right-1 lg:right-2 bg-white p-1 rounded-full"
                                >
                                    {mutedStates[currentMedia.index] ? <FaVolumeMute size={15} /> : <FaVolumeUp size={15} />}
                                </button>
                            </div>
                        ) : (
                            <img
                                src={currentMedia?.url}
                                alt="Fullscreen"
                                className="max-w-full max-h-full lg:p-10"
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SinglePageOfPresentation;