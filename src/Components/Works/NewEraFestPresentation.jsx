import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import newEra01 from "../Assets/newEra/NEW ERA festival 2026-01.png";
import newEra02 from "../Assets/newEra/NEW ERA festival 2026-02.png";
import newEra03 from "../Assets/newEra/NEW ERA festival 2026-03.png";
import newEra04 from "../Assets/newEra/NEW ERA festival 2026-04.png";
import newEra05 from "../Assets/newEra/NEW ERA festival 2026-05.png";
import newEra06 from "../Assets/newEra/NEW ERA festival 2026-06.png";
import newEra07 from "../Assets/newEra/NEW ERA festival 2026-07.png";
import newEra08 from "../Assets/newEra/NEW ERA festival 2026-08.png";
import newEra09 from "../Assets/newEra/NEW ERA festival 2026-09.png";
import newEra10 from "../Assets/newEra/NEW ERA festival 2026-10.png";
import newEra11 from "../Assets/newEra/NEW ERA festival 2026-11.png";
import newEra12 from "../Assets/newEra/NEW ERA festival 2026-12.png";
import newEra13 from "../Assets/newEra/NEW ERA festival 2026-13.png";
import newEra14 from "../Assets/newEra/NEW ERA festival 2026-14.png";
import newEra15 from "../Assets/newEra/NEW ERA festival 2026-15.png";
import newEra16 from "../Assets/newEra/NEW ERA festival 2026-16.png";
import newEra17 from "../Assets/newEra/NEW ERA festival 2026-17.png";
import newEra18 from "../Assets/newEra/NEW ERA festival 2026-18.png";
import newEra19 from "../Assets/newEra/NEW ERA festival 2026-19.png";
import newEra20 from "../Assets/newEra/NEW ERA festival 2026-20.png";
import newEra21 from "../Assets/newEra/NEW ERA festival 2026-21.png";
import newEra22 from "../Assets/newEra/NEW ERA festival 2026-22.png";
import newEra23 from "../Assets/newEra/NEW ERA festival 2026-23.png";
import newEra24 from "../Assets/newEra/NEW ERA festival 2026-24.png";
import newEra25 from "../Assets/newEra/NEW ERA festival 2026-25.png";
import newEra26 from "../Assets/newEra/NEW ERA festival 2026-26.png";
import newEra27 from "../Assets/newEra/NEW ERA festival 2026-27.png";
import newEra28 from "../Assets/newEra/NEW ERA festival 2026-28.png";
import newEra29 from "../Assets/newEra/NEW ERA festival 2026-29.png";
import newEra30 from "../Assets/newEra/NEW ERA festival 2026-30.png";
import newEra31 from "../Assets/newEra/NEW ERA festival 2026-31.png";
import newEra32 from "../Assets/newEra/NEW ERA festival 2026-32.png";
import newEra33 from "../Assets/newEra/NEW ERA festival 2026-33.png";
import newEra34 from "../Assets/newEra/NEW ERA festival 2026-34.png";
import newEra35 from "../Assets/newEra/NEW ERA festival 2026-35.png";
import newEra36 from "../Assets/newEra/NEW ERA festival 2026-36.png";
import newEra37 from "../Assets/newEra/NEW ERA festival 2026-37.png";
import newEra38 from "../Assets/newEra/NEW ERA festival 2026-38.png";
import newEra39 from "../Assets/newEra/NEW ERA festival 2026-39.png";
import newEra40 from "../Assets/newEra/NEW ERA festival 2026-40.png";
import newEra41 from "../Assets/newEra/NEW ERA festival 2026-41.png";
import newEra42 from "../Assets/newEra/NEW ERA festival 2026-42.png";
import newEra43 from "../Assets/newEra/NEW ERA festival 2026-43.png";
import newEra44 from "../Assets/newEra/NEW ERA festival 2026-44.png";
import newEra45 from "../Assets/newEra/NEW ERA festival 2026-45.png";
import newEra46 from "../Assets/newEra/NEW ERA festival 2026-46.png";
import newEra47 from "../Assets/newEra/NEW ERA festival 2026-47.png";
import newEra48 from "../Assets/newEra/NEW ERA festival 2026-48.png";
import newEra49 from "../Assets/newEra/NEW ERA festival 2026-49.png";
import newEra50 from "../Assets/newEra/NEW ERA festival 2026-50.png";
import newEra51 from "../Assets/newEra/NEW ERA festival 2026-51.png";
import newEra52 from "../Assets/newEra/NEW ERA festival 2026-52.png";
import newEra53 from "../Assets/newEra/NEW ERA festival 2026-53.png";
import newEra54 from "../Assets/newEra/NEW ERA festival 2026-54.png";
import newEra55 from "../Assets/newEra/NEW ERA festival 2026-55.png";
import newEra56 from "../Assets/newEra/NEW ERA festival 2026-56.png";
import newEra57 from "../Assets/newEra/NEW ERA festival 2026-57.png";
import newEra58 from "../Assets/newEra/NEW ERA festival 2026-58.png";
import newEra59 from "../Assets/newEra/NEW ERA festival 2026-59.png";

const NewEraFestPresentation = ({ media = [], fullScreenItem }) => {
    const [started, setStarted] = useState(false);
    const importedMedia = [
        newEra01, newEra02, newEra03, newEra04, newEra05, newEra06, newEra07, newEra08, newEra09, newEra10,
        newEra11, newEra12, newEra13, newEra14, newEra15, newEra16, newEra17, newEra18, newEra19, newEra20,
        newEra21, newEra22, newEra23, newEra24, newEra25, newEra26, newEra27, newEra28, newEra29, newEra30,
        newEra31, newEra32, newEra33, newEra34, newEra35, newEra36, newEra37, newEra38, newEra39, newEra40,
        newEra41, newEra42, newEra43, newEra44, newEra45, newEra46, newEra47, newEra48, newEra49, newEra50,
        newEra51, newEra52, newEra53, newEra54, newEra55, newEra56, newEra57, newEra58, newEra59,
    ];
    const presentationMedia = Array.isArray(media) && media.length > 0 ? media : importedMedia;
    const hasMedia = presentationMedia.length > 0;

    const startPresentation = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setStarted(true);
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
                            className="absolute left-4 lg:left-[55px] bottom-24 -translate-y-1/2"
                        >
                            <motion.div
                                initial={{ y: 18, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -24, opacity: 0 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="px-5 py-1 lg:px-0 lg:py-1 w-fit"
                            >
                                <p className="font-custom text-2xl lg:text-7xl tracking-[3px] text-black leading-none">
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
                       

                        {hasMedia ? (
                            <div className="grid grid-cols-1 gap-4">
                                {presentationMedia.map((mediaItem, index) => (
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
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default NewEraFestPresentation;
