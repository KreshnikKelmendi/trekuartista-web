import React, { useState, useEffect } from "react";

import pristine1 from "../Assets/pristineTravel/Pristine_06.mp4";
import pristine2 from "../Assets/pristineTravel/logo-animation.mp4";
import pristine3 from "../Assets/pristineTravel/Pristine_04.webp";
import pristine4 from "../Assets/pristineTravel/Pristine_03.webp";
import pristine5 from "../Assets/pristineTravel/Pristine_02.webp";
import pristine6 from "../Assets/pristineTravel/Pristine_01.webp";



const LazyImage = ({ src, alt, className = "", wrapperClassName = "", onClick }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative w-full min-h-[200px] ${wrapperClassName}`}>
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="h-10 w-10 rounded-full animate-spin" aria-label="Loading" />
                </div>
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                onError={() => setIsLoaded(true)}
                className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                onClick={onClick}
            />
        </div>
    );
};


const PristineTravelPresentation = ({ media, title, text1, text2 }) => {
    const items = [
        { src: pristine6, title: "POST - 06", caption: "Shërben si një mënyrë kreative për të prezantuar identitetin dhe atë që ofron brendi, duke e bërë mesazhin të qartë dhe të dallueshëm. Këto përmbajtje ndihmojnë në ndërtimin e besimit dhe përgatisin terrenin për komunikimet dhe ofertat e ardhshme." },
        { src: pristine5, title: "POST - 05", caption: "Eshtë më kreativ dhe shërbejnë për të prezantuar shërbimet dhe ofertat, duke e lidhur brendin drejtpërdrejt me atë që ofron. Këto postime vendosin tonin e komunikimit dhe krijojnë një bazë të fortë për të gjitha përmbajtjet dhe ofertat që do të vijnë më pas." },
        { src: pristine4, title: "POST - 04", caption: "Eshtë më kreativ dhe shërbejnë për të prezantuar shërbimet dhe ofertat, duke e lidhur brendin drejtpërdrejt me atë që ofron." },
        { src: pristine3, title: "POST - 03", caption: "Fokusohet në prezantimin e sloganit dhe mesazhit kryesor." },
        { src: pristine2, title: "POST - 02", caption: "Është animacioni i logos që prezanton vizualisht brendin." },
        { src: pristine1, title: "POST - 01", caption: "Shërben si teaser dhe krijon kureshtje." },
    ];


    const [itemsSoundOn, setItemsSoundOn] = useState(Array(items.length).fill(false));
    const [selectedImage, setSelectedImage] = useState(null);
    const [expandedCaptions, setExpandedCaptions] = useState({});

    // Helper function to truncate text to 50 words
    const truncateText = (text, maxWords = 30) => {
        if (!text) return '';
        const words = text.trim().split(/\s+/);
        if (words.length <= maxWords) return text;
        return words.slice(0, maxWords).join(' ') + '...';
    };

    // Check if text needs truncation (show button if text is longer than 50 words)
    const needsTruncation = (text) => {
        if (!text) return false;
        const wordCount = text.trim().split(/\s+/).length;
        // Show button if text is longer than 50 words
        return wordCount > 30;
    };

    // Toggle caption expansion
    const toggleCaption = (index) => {
        setExpandedCaptions(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // Close modal on ESC key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                setSelectedImage(null);
            }
        };
        if (selectedImage) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [selectedImage]);

    return (
        <div className="w-full bg-black py-8 lg:py-12">
            <p className="text-white text-4xl lg:text-[55px] font-bold font-custom tracking-[1.5px]">{title}</p>
            <p className="text-white text-base lg:text-lg font-bold font-custom1 pt-4">{text1}</p>
            <p className="text-white text-base lg:text-lg font-custom1 pt-4">
                Postet hyrëse i kemi menduar si momentin e parë të njohjes së audiencës me brendin. Ideja kryesore ka qenë që, që në postimet e para, njerëzit ta ndiejnë se kjo kompani nuk shet vetëm udhëtime, por kujdeset për gjithë përvojën e udhëtimit.
                Çdo post tregon një pjesë të historisë: nga besimi dhe detajet e menduara mirë, te emocionet që sjell udhëtimi dhe destinacionet që ftojnë të eksplorohen. Vizualet janë të pastra, moderne dhe të qeta, ndërsa tekstet janë të thjeshta, të drejtpërdrejta dhe njerëzore – pa e komplikuar mesazhin.
                Qëllimi ynë ka qenë që audienca, përmes këtyre postimeve, të krijojë një ndjenjë të menjëhershme besimi dhe sigurie ndaj brendit.
                <br/><br/>Struktura e postimeve është menduar si një hyrje graduale:
            </p>
           
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 pt-8 lg:pt-8">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        {item.src.endsWith(".mp4") ? (
                            <div className="relative">
                                <video
                                    src={item.src}
                                    autoPlay
                                    playsInline
                                    loop
                                    muted={!itemsSoundOn[index]}
                                    className="w-full h-auto object-cover"
                                />
                              
                            </div>
                        ) : (
                            <LazyImage
                                src={item.src}
                                alt={`Emona ${index + 1}`}
                                className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                onClick={() => setSelectedImage(item.src)}
                            />
                        )}
                        <p className="text-gray-400 text-xs lg:text-xl font-custom1 uppercase tracking-tight lg:tracking-[1px] mt-2">{item.title}</p>

                        <div className="mt-2 lg:pr-8">
                            <p className="text-white text-[8px] lg:text-sm whitespace-pre-wrap">
                                {expandedCaptions[index] ? item.caption : truncateText(item.caption)}
                            </p>
                            {needsTruncation(item.caption) && (
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        toggleCaption(index);
                                    }}
                                    className="text-green-500 hover:text-green-300 text-[8px] lg:text-sm mt-2 font-bold transition-colors underline cursor-pointer block bg-transparent border-none p-0"
                                >
                                    {expandedCaptions[index] ? 'See less' : 'See more'}
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Full View Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-4 text-white text-4xl font-bold hover:text-gray-400 transition-colors z-10"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close"
                    >
                        ×
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full view"
                        className="max-w-full max-h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

        </div>
    );
};

export default PristineTravelPresentation;

