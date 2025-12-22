import React, { useState, useEffect } from "react";
import emonaImg1 from "../Assets/utopia-theme/UTOPIA-01.png";
import emonaImg2 from "../Assets/utopia-theme/UTOPIA-02.png";
import emonaImg3 from "../Assets/utopia-theme/UTOPIA-03.png";
import emonaImg4 from "../Assets/utopia-theme/UTOPIA-04.png";
import emonaImg5 from "../Assets/utopia-theme/UTOPIA-05.png";
import emonaImg6 from "../Assets/utopia-theme/UTOPIA-06.png";

import utopiayellow1 from "../Assets/utopia-theme/Utopia2-01.png";
import utopiayellow2 from "../Assets/utopia-theme/Utopia2-02.png";
import utopiayellow3 from "../Assets/utopia-theme/Utopia2-03.png";
import utopiayellow4 from "../Assets/utopia-theme/Utopia2-04.png";
import utopiayellow5 from "../Assets/utopia-theme/Utopia2-05.png";
import utopiayellow6 from "../Assets/utopia-theme/Utopia2-06.png";

import mockup from"../Assets/utopia-theme/Utopia-Mockup.jpg";
import mockup1 from"../Assets/utopia-theme/image.png";

const LazyImage = ({ src, alt, className = "", wrapperClassName = "", onClick }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative w-full min-h-[200px] ${wrapperClassName}`}>
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="h-10 w-10 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin" aria-label="Loading" />
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


const UtopiaPresentation = ({ media, title, text1, text2 }) => {
    const items = [
        { src: emonaImg1, title: "06 — Artist Reveal / Brand Entry Point", caption: "This first visual works as a flexible artist-reveal template and, at the same time, as a strong brand statement for UTOPIA RHYTHM. Here, artists can be introduced without relying on classic portrait posters, but instead through a symbolic and emotional system. The illustrated emoji elements are not decorative — they are designed as core brand assets that will repeat across posters, stories, videos, and animations. The smiling face, the three eyes, and the surrounding icons represent the emotional journey of the visitor: starting from a familiar, everyday state and gradually melting into something more fluid, expressive, and free. As the face dissolves and transforms, it visually describes the shift in perception that happens once people enter the UTOPIA RHYTHM experience. The additional smiley icons and symbols function as emotional indicators, describing how the crowd feels throughout the night — curiosity, excitement, release, and connection. This system allows the brand to communicate mood and identity instantly, while also giving space to introduce performers in a way that feels playful, futuristic, and unmistakably UTOPIA." },
        { src: emonaImg2, title: "05 — Concept Teaser / Unity & Curiosity", caption: "The second poster functions as a conceptual teaser that communicates what UTOPIA RHYTHM stands for, without explaining everything at once. The overlapping illustration of two figures is a visual metaphor for unity, connection, and shared experience. It represents the moment where two individuals come together and create something greater than themselves — a key idea behind the UTOPIA concept. The overlay is intentionally designed to feel dynamic and alive, as this visual will later be animated: the two figures slowly aligning, overlapping, and transforming until they generate the UTOPIA star. This transformation symbolizes how collective energy, rhythm, and movement lead to harmony and emotional elevation. As a teaser, this poster invites curiosity rather than answers — it hints at the idea that happiness, connection, and entry into UTOPIA are created through togetherness. It encourages viewers to imagine what happens when people unite on the dancefloor and how that shared moment becomes the gateway into a different reality." },
        { src: emonaImg3, title: "04 — Save the Date / Entering Utopia", caption: "The “Save the Date” visual is designed as a narrative moment of transition — the point where the individual actively chooses to enter UTOPIA. The silhouette represents a person who is ready to leave the ordinary behind and step into a new dimension shaped by rhythm and energy. The radiating element inside the body symbolizes inner desire, excitement, and alignment with the frequency of UTOPIA RHYTHM — the moment when intention becomes movement. This template also allows flexibility: the silhouettes can evolve into artist figures, performers, or symbolic representations of those entering the portal. The portal itself acts as a futuristic gateway, guiding the body toward a new environment. In the background, the moving and layered utopian landscape reinforces the idea of transition, growth, and immersion, while subtle motion and overlays create depth and atmosphere. Together, these elements turn a simple date announcement into an emotional invitation — not just to attend an event, but to step into an experience where sound, environment, and identity merge." },
        { src: emonaImg4, title: "03  UTOPIA PROJECT / Brand & Event Concept", caption: "This visual explains what UTOPIA PROJECT truly represents and how the brand comes to life as an event experience. UTOPIA is not positioned as a traditional party or lineup-based event, but as a constructed space where sound, movement, and perception merge. The 3D head is designed to be animated, slowly rotating and evolving in space, creating an orbital network around it. As the head moves, the orbit lines expand and form a system that visually enters the mind of the viewer, symbolizing how the rhythm travels from the external environment into the brain. This motion reflects the moment when curiosity turns into desire — when the idea of the event begins to live inside the person watching. The animation reinforces the concept that UTOPIA is not something you simply attend, but something that pulls you in mentally and emotionally, guiding you toward a shared rhythm and a new reality shaped by sound." },
        { src: emonaImg5, title: "02 — Slogan / FEEL THE FUTURE", caption: "The “Feel the Future” poster represents the emotional core of UTOPIA RHYTHM and focuses on sensation rather than explanation. The flowing distortion effect is designed as a visual signal, as if the message itself is arriving from another dimension. This movement creates the impression of energy traveling through space and time, reaching the viewer in waves rather than static form. The slogan becomes more than a phrase — it turns into an experience that feels alive, fluid, and slightly unstable, echoing the way sound behaves in a club environment. Through motion, the typography appears to melt, stretch, and pulse, reinforcing the idea that the future is not something to be seen or understood logically, but something to be felt physically through rhythm, vibration, and collective movement." },
        { src: emonaImg6, title: "01 — Logo / UTOPIA RHYTHM Identity", caption: "The logo animation acts as the final and most distilled expression of the UTOPIA RHYTHM identity. Designed to move in a futuristic and minimal way, the logo evolves through subtle orbital motion, light shifts, and clean transformations that emphasize precision and energy. Rather than dramatic effects, the animation focuses on rhythm, balance, and flow — mirroring the core values of the brand. This motion allows the logo to feel alive, as if it exists within the same system of energy and frequency as the event itself. As the final visual signature, the animated logo reinforces consistency across all touchpoints, ensuring that every appearance of UTOPIA RHYTHM feels intentional, recognizable, and connected to the larger universe of the brand." },
    ];

    const yellowItems = [
        { src: utopiayellow1},
        { src: utopiayellow2},
        { src: utopiayellow3},
        { src: utopiayellow4},
        { src: utopiayellow5},
        { src: utopiayellow6},
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
            <div className="pt-6 lg:pt-10">
                <LazyImage
                    src={mockup1}
                    alt=""
                    className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(mockup1)}
                />
            </div>
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
                                className="w-full h-auto object-cover border-[0.5px] border-green-700 cursor-pointer hover:opacity-90 transition-opacity"
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
                <div className="pt-16 lg:pt-6">
                    <LazyImage
                        src={mockup}
                        alt=""
                        className="w-full h-auto object-cover cursor-pointer lg:p-44 hover:opacity-90 transition-opacity"
                        onClick={() => setSelectedImage(mockup)}
                        wrapperClassName="min-h-[250px]"
                    />
                    <div className="pt-10 lg:pt-0">
                        <p className="text-white text-center text-sm lg:text-3xl font-custom3 uppercase">YELLOW color variation</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 pt-8 lg:pt-16">
                {yellowItems.map((item, index) => (
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
                                className="w-full h-auto object-cover border-[0.5px] border-yellow-700 cursor-pointer hover:opacity-90 transition-opacity"
                                onClick={() => setSelectedImage(item.src)}
                            />
                        )}
                        <p className="text-gray-400 text-sm lg:text-xl font-custom tracking-[1px] mt-2">{item.title}</p>

                        <p className="text-white text-[8px] lg:text-sm mt-2 lg:pr-8 font-custom3">{item.caption}</p>
                    </div>
                ))}
                </div>
                </div>

            {/* Full View Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute bottom-2 right-2 text-white text-4xl font-bold hover:text-gray-400 transition-colors z-10"
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

export default UtopiaPresentation;

