import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NewEraSocialMedia from "./NewEraSocialMedia";
import { FaCog } from "react-icons/fa";
import newEra01 from "../Assets/newEra/NEW ERA FESTIVAL 2026-001.png";
import newEra02 from "../Assets/newEra/NEW ERA FESTIVAL 2026-002.png";
import newEra03 from "../Assets/newEra/NEW ERA FESTIVAL 2026-003.png";
import newEra04 from "../Assets/newEra/NEW ERA FESTIVAL 2026-004.png";
import newEra05 from "../Assets/newEra/NEW ERA FESTIVAL 2026-005.png";
import newEra06 from "../Assets/newEra/NEW ERA FESTIVAL 2026-006.png";
import newEra07 from "../Assets/newEra/NEW ERA FESTIVAL 2026-007.png";
import newEra08 from "../Assets/newEra/Logo Construction 3D.mp4";
import newEra09 from "../Assets/newEra/NEW ERA FESTIVAL 2026-009.png";
import newEra10 from "../Assets/newEra/NEW ERA FESTIVAL 2026-010.png";
import newEra11 from "../Assets/newEra/NEW ERA FESTIVAL 2026-011.png";
import newEra12 from "../Assets/newEra/NEW ERA FESTIVAL 2026-012.png";
import newEra13 from "../Assets/newEra/NEW ERA FESTIVAL 2026-013.png";
import newEra14 from "../Assets/newEra/NEW ERA FESTIVAL 2026-014.png";
import newEra15 from "../Assets/newEra/NEW ERA FESTIVAL 2026-015.png";
import newEra16 from "../Assets/newEra/NEW ERA FESTIVAL 2026-016.png";
import newEra17 from "../Assets/newEra/NEW ERA FESTIVAL 2026-017.png";
import newEra18 from "../Assets/newEra/NEW ERA FESTIVAL 2026-018.png";
import newEra19 from "../Assets/newEra/NEW ERA FESTIVAL 2026-019.png";
import newEra20 from "../Assets/newEra/NEW ERA FESTIVAL 2026-020.png";
import newEra21 from "../Assets/newEra/NEW ERA FESTIVAL 2026-021.png";
import newEra22 from "../Assets/newEra/NEW ERA FESTIVAL 2026-022.png";
import newEra23 from "../Assets/newEra/NEW ERA FESTIVAL 2026-023.png";
import newEra24 from "../Assets/newEra/NEW ERA FESTIVAL 2026-024.png";
import newEra25 from "../Assets/newEra/NEW ERA FESTIVAL 2026-025.png";
import newEra26 from "../Assets/newEra/NEW ERA FESTIVAL 2026-026.png";
import newEra27 from "../Assets/newEra/NEW ERA FESTIVAL 2026-027.png";
import newEra28 from "../Assets/newEra/NEW ERA FESTIVAL 2026-028.png";
import newEra29 from "../Assets/newEra/NEW ERA FESTIVAL 2026-029.png";
import newEra30 from "../Assets/newEra/NEW ERA FESTIVAL 2026-030.png";
import newEra31 from "../Assets/newEra/NEW ERA FESTIVAL 2026-031.png";
import newEra32 from "../Assets/newEra/NEW ERA FESTIVAL 2026-032.png";
import newEra33 from "../Assets/newEra/NEW ERA FESTIVAL 2026-033.png";
import newEra34 from "../Assets/newEra/NEW ERA FESTIVAL 2026-034.png";
import newEra35 from "../Assets/newEra/NEW ERA FESTIVAL 2026-035.png";
import newEra36 from "../Assets/newEra/NEW ERA FESTIVAL 2026-036.png";
import newEra37 from "../Assets/newEra/NEW ERA FESTIVAL 2026-037.png";
import newEra38 from "../Assets/newEra/NEW ERA FESTIVAL 2026-038.png";
import newEra39 from "../Assets/newEra/NEW ERA FESTIVAL 2026-039.png";
import newEra40 from "../Assets/newEra/NEW ERA FESTIVAL 2026-040.png";
import newEra41 from "../Assets/newEra/NEW ERA FESTIVAL 2026-041.png";
import newEra42 from "../Assets/newEra/NEW ERA FESTIVAL 2026-042.png";
import newEra43 from "../Assets/newEra/NEW ERA FESTIVAL 2026-043.png";
import newEra44 from "../Assets/newEra/NEW ERA FESTIVAL 2026-044.png";
import newEra45 from "../Assets/newEra/NEW ERA FESTIVAL 2026-045.png";
import newEra46 from "../Assets/newEra/NEW ERA FESTIVAL 2026-046.png";
import newEra47 from "../Assets/newEra/NEW ERA FESTIVAL 2026-047.png";
import newEra48 from "../Assets/newEra/NEW ERA FESTIVAL 2026-048.png";
import newEra49 from "../Assets/newEra/NEW ERA FESTIVAL 2026-049.png";
import newEra50 from "../Assets/newEra/NEW ERA FESTIVAL 2026-050.png";
import newEra51 from "../Assets/newEra/NEW ERA FESTIVAL 2026-051.png";
import newEra52 from "../Assets/newEra/NEW ERA FESTIVAL 2026-052.png";
import newEra53 from "../Assets/newEra/NEW ERA FESTIVAL 2026-053.png";
import newEra54 from "../Assets/newEra/NEW ERA FESTIVAL 2026-054.png";
import newEra55 from "../Assets/newEra/NEW ERA FESTIVAL 2026-055.png";
import newEra56 from "../Assets/newEra/NEW ERA FESTIVAL 2026-056.png";
import newEra57 from "../Assets/newEra/NEW ERA FESTIVAL 2026-057.png";
import newEra58 from "../Assets/newEra/NEW ERA FESTIVAL 2026-058.png";
import newEra59 from "../Assets/newEra/NEW ERA FESTIVAL 2026-059.png";
import newEra60 from "../Assets/newEra/NEW ERA FESTIVAL 2026-060.png";
import newEra61 from "../Assets/newEra/NEW ERA FESTIVAL 2026-061.png";
import newEra62 from "../Assets/newEra/NEW ERA FESTIVAL 2026-062.png";
import newEra63 from "../Assets/newEra/NEW ERA FESTIVAL 2026-063.png";
import newEra64 from "../Assets/newEra/NEW ERA FESTIVAL 2026-064.png";
import newEra65 from "../Assets/newEra/NEW ERA FESTIVAL 2026-065.png";
import newEra66 from "../Assets/newEra/NEW ERA FESTIVAL 2026-066.png";
import newEra67 from "../Assets/newEra/NEW ERA FESTIVAL 2026-067.png";
import newEra68 from "../Assets/newEra/NEW ERA FESTIVAL 2026-068.png";
import newEra69 from "../Assets/newEra/NEW ERA FESTIVAL 2026-069.png";       import newEra70 from "../Assets/newEra/NEW ERA FESTIVAL 2026-070.png";   
import newEra71 from "../Assets/newEra/NEW ERA FESTIVAL 2026-071.png";
import newEra72 from "../Assets/newEra/NEW ERA FESTIVAL 2026-072.png";
import newEra73 from "../Assets/newEra/NEW ERA FESTIVAL 2026-073.png";
import newEra74 from "../Assets/newEra/NEW ERA FESTIVAL 2026-074.png";
import newEra75 from "../Assets/newEra/NEW ERA FESTIVAL 2026-075.png";
import newEra76 from "../Assets/newEra/NEW ERA FESTIVAL 2026-076.png";
import newEra77 from "../Assets/newEra/NEW ERA FESTIVAL 2026-077.png";
import newEra78 from "../Assets/newEra/NEW ERA FESTIVAL 2026-078.png";

const NewEraFestPresentation = ({ media = [], fullScreenItem }) => {
    const [started, setStarted] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [gridColumns, setGridColumns] = useState(1);
    const importedMedia = [
        newEra01, newEra02, newEra03, newEra04, newEra05, newEra06, newEra07, newEra08, newEra09, newEra10,
        newEra11, newEra12, newEra13, newEra14, newEra15, newEra16, newEra17, newEra18, newEra19, newEra20,
        newEra21, newEra22, newEra23, newEra24, newEra25, newEra26, newEra27, newEra28, newEra29, newEra30,
        newEra31, newEra32, newEra33, newEra34, newEra35, newEra36, newEra37, newEra38, newEra39, newEra40,
        newEra41, newEra42, newEra43, newEra44, newEra45, newEra46, newEra47, newEra48, newEra49, newEra50,
        newEra51, newEra52, newEra53, newEra54, newEra55, newEra56, newEra57, newEra58, newEra59, newEra60,
        newEra61, newEra62, newEra63, newEra64, newEra65,
        newEra66,
        newEra67,
        newEra68,
        newEra69,   
        newEra70,
        newEra71,
        newEra72,
        newEra73,
        newEra74,
        newEra75,
        newEra76,
        newEra77,
        newEra78,
    ];
    const presentationMedia = Array.isArray(media) && media.length > 0 ? media : importedMedia;
    const hasMedia = presentationMedia.length > 0;
    const splitAfterIndex = presentationMedia.findIndex(
        (item) => typeof item === "string" && item.includes("2026-43")
    );
    const firstPartMedia = splitAfterIndex >= 0 ? presentationMedia.slice(0, splitAfterIndex + 1) : presentationMedia;
    const secondPartMedia = splitAfterIndex >= 0 ? presentationMedia.slice(splitAfterIndex + 1) : [];

    const startPresentation = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setStarted(true);
    };

    const getGridClass = () => {
        if (gridColumns === 2) {
            return "grid-cols-1 lg:grid-cols-2";
        }
        return "grid-cols-1";
    };

    return (
        <section className="w-full min-h-screen bg-transparent text-black relative overflow-hidden">
            <AnimatePresence mode="wait">
                {!started ? (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="min-h-screen relative"
                    >
                        <motion.div
                            initial={{ x: -70, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -120, opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                            className="absolute left-4 lg:left-[55px] bottom-32 lg:bottom-24 -translate-y-1/2"
                        >
                            <motion.div
                                initial={{ y: 18, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -24, opacity: 0 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="px-0 py-1 lg:px-0 lg:py-1 w-fit"
                            >
                                <p className="font-custom text-5xl lg:text-7xl tracking-[3px] text-black leading-none">
                                    NEW ERA <br /> FESTIVAL
                                </p>
                            </motion.div>
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, y: 25 }}
                                transition={{ duration: 0.3, delay: 0.25 }}
                                onClick={startPresentation}
                                className="text-xs pt-6 lg:text-sm font-custom4 border-b-[1px] border-black/30 uppercase tracking-[2px] text-black/90 hover:text-black bg-transparent"
                            >
                                Start Presentation
                            </motion.button>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="w-full min-h-screen pt-6 px-5 lg:px-[55px] pb-16"
                    >
                        <div className="fixed hidden lg:block right-1 top-20 z-30">
                            <button
                                onClick={() => setShowSettings(!showSettings)}
                                className="p-2 transition-all hover:rotate-45 hover:scale-110 duration-100 ease-linear"
                                title="Grid Settings"
                            >
                                <FaCog color="black" />
                            </button>

                            {showSettings && (
                                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-40">
                                    <div className="py-1">
                                        <button
                                            onClick={() => {
                                                setGridColumns(1);
                                                setShowSettings(false);
                                            }}
                                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                        >
                                            1 Column
                                        </button>
                                        <button
                                            onClick={() => {
                                                setGridColumns(2);
                                                setShowSettings(false);
                                            }}
                                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                        >
                                            2 Columns
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {hasMedia ? (
                            <div className={`grid ${getGridClass()} gap-0`}>
                                {firstPartMedia.map((mediaItem, index) => (
                                    <div
                                        key={index}
                                        className="relative group overflow-hidden cursor-pointer"
                                        onClick={() => fullScreenItem(mediaItem, index)}
                                    >
                                        {mediaItem.endsWith(".mp4") ? (
                                            <video src={mediaItem} autoPlay muted loop playsInline className="w-full object-cover" />
                                        ) : (
                                            <img src={mediaItem} alt={`New Era Fest media ${index + 1}`} className="w-full object-cover" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : null}

                        <div className="pt-12 lg:pt-20">
                            <p className="font-custom text-3xl lg:text-6xl tracking-[1px] text-black leading-[30px]">NEW ERA <br />SOCIAL MEDIA</p>
                            <div className="pt-4 lg:pt-6">
                                <NewEraSocialMedia fullScreenItem={fullScreenItem} />
                            </div>
                        </div>

                        {secondPartMedia.length > 0 ? (
                            <div className={`pt-6 lg:pt-10 grid ${getGridClass()} gap-0`}>
                                {secondPartMedia.map((mediaItem, index) => (
                                    <div
                                        key={`after-social-${index}`}
                                        className="relative group overflow-hidden cursor-pointer"
                                        onClick={() => fullScreenItem(mediaItem, firstPartMedia.length + index)}
                                    >
                                        {mediaItem.endsWith(".mp4") ? (
                                            <video src={mediaItem} autoPlay muted loop playsInline className="w-full object-cover" />
                                        ) : (
                                            <img src={mediaItem} alt={`New Era Fest media after social ${index + 1}`} className="w-full object-cover" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default NewEraFestPresentation;
