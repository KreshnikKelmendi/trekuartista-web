import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { motion } from "framer-motion";
import soundOnImage from "../Assets/on.png";
import soundOffImage from "../Assets/off.png";
import data1 from "../Assets/brumino/br-1.mp4";
import data2 from "../Assets/brumino/2.mp4";
import data3 from "../Assets/brumino/5.mp4";
import data4 from "../Assets/brumino/br-4.png";
import data5 from "../Assets/brumino/3.mp4";
import data6 from "../Assets/brumino/br-6.png";
import data7 from "../Assets/brumino/br-7.png";
import data8 from "../Assets/brumino/4.mp4";
import data9 from "../Assets/brumino/br-9.png";


const BruminoSocialMedia = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [soundStates, setSoundStates] = useState(new Array(12).fill(false));

    const mediaItems = [ data9, data8, data7, data6, data5, data4, data3, data2, data1];

    // Toggle full-screen modal
    const toggleFullScreen = (media) => {
        setSelectedMedia(media);
        setIsFullScreen(true);
    };

    // Close full-screen mode
    const closeFullScreen = () => {
        setIsFullScreen(false);
        setSelectedMedia(null);
    };

    // Handle escape key press to close the modal
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === "Escape") {
                closeFullScreen();
            }
        };

        if (isFullScreen) {
            window.addEventListener("keydown", handleEscKey);
        }

        return () => {
            window.removeEventListener("keydown", handleEscKey);
        };
    }, [isFullScreen]);

    // Handle click outside the media to close the full-screen modal
    const handleOutsideClick = (event) => {
        if (event.target.id === "fullscreen-modal") {
            closeFullScreen();
        }
    };

    // Toggle sound for videos
    const toggleSound = (index) => {
        setSoundStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <div className="w-full bg-black py-8 lg:py-8">
            <div className="grid grid-cols-3">
                {mediaItems.map((media, index) => (
                    <LazyLoad key={index} height="100%">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full object-cover group cursor-pointer"
                            onClick={() => toggleFullScreen(media)}
                        >
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>

                          
                            {typeof media === "string" && media.endsWith(".mp4") ? (
                                <>
                                    <video className="w-full lg:h-full object-cover" autoPlay playsInline loop muted={!soundStates[index]}>
                                        <source src={media} type="video/mp4" />
                                    </video>
                                    <button onClick={(e) => { e.stopPropagation(); toggleSound(index); }} className="absolute bottom-2 right-2">
                                        <img className="object-cover h-3 w-3 lg:w-4 lg:h-4" src={soundStates[index] ? soundOnImage : soundOffImage} alt="Sound Toggle" />
                                    </button>
                                </>
                            ) : (
                                <img src={media} alt="" className="w-full lg:h-full object-cover" />
                            )}
                        </motion.div>
                    </LazyLoad>
                ))}
            </div>

            {/* Full-Screen Modal */}
            {isFullScreen && selectedMedia && (
                <div
                    id="fullscreen-modal"
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    onClick={handleOutsideClick} // Click outside to close
                >
                    <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeFullScreen}>
                        ✕
                    </button>
                    {typeof selectedMedia === "string" && selectedMedia.endsWith(".mp4") ? (
                        <video className="w-[90%] h-[90vh] object-contain" controls autoPlay>
                            <source src={selectedMedia} type="video/mp4" />
                        </video>
                    ) : (
                        <img src={selectedMedia} alt="Full View" className="w-[90%] h-[90vh] object-contain" />
                    )}
                </div>
            )}
        </div>
    );
};

export default BruminoSocialMedia;
