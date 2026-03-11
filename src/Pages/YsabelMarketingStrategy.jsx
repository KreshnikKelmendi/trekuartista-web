import React, { useEffect, useRef, useState } from 'react';
import ysabelLogo from '../Components/Assets/ysabel-logo-1.png';
import video1 from '../Components/Assets/ysabel-work/q (1).mp4';
import video2 from '../Components/Assets/ysabel-work/10 (online-video-cutter.com).mp4';
import video3 from '../Components/Assets/ysabel-work/ScreenRecording_02-18-2026 12-25-29_1.mp4';
import video4 from '../Components/Assets/ysabel-work/ysabel-4-strategy.mp4';

import italian1 from '../Components/Assets/ysabel-work/ysabel-strategy-2.mp4';
import italian2 from '../Components/Assets/ysabel-work/italian-soul-1.webp';
import italian3 from '../Components/Assets/ysabel-work/italian-soul-2.webp';
import italian4 from '../Components/Assets/ysabel-work/ysabel-strategy-3.mp4';
import italian5 from '../Components/Assets/ysabel-work/987.mp4';
import italian6 from '../Components/Assets/ysabel-work/ita-1.mp4';
import video5 from "../Components/Assets/ysabel-work/ASIAN-789.mp4";
import imageasian from "../Components/Assets/ysabel-work/amanzoe-greece-restaurant-nama-sushi.webp";
import video6 from "../Components/Assets/ysabel-work/1234567.mp4";
import imageasian1 from "../Components/Assets/ysabel-work/aman-new-york-usa-fb-nama-dish.webp";
import gardenImage from "../Components/Assets/ysabel-work/image.png";
import video8 from "../Components/Assets/ysabel-work/123456.mp4";
import video9 from "../Components/Assets/ysabel-work/garden-5.mp4";
import video10 from "../Components/Assets/ysabel-work/987654.mp4";
import video11 from "../Components/Assets/ysabel-work/987654321.mp4";
import gardenImage2 from "../Components/Assets/ysabel-work/aman-venice-italy-fb-arva-details.webp";
import video12 from "../Components/Assets/ysabel-work/behind-1.webp";
import video13 from "../Components/Assets/ysabel-work/KlickPin Video.mp4";
import video14 from "../Components/Assets/ysabel-work/behind-2.mp4";
import video15 from "../Components/Assets/ysabel-work/ysabel-strategy-1.mp4";
import video16 from "../Components/Assets/ysabel-work/CRAFTS-1.mp4";
import video17 from "../Components/Assets/ysabel-work/behind-1.mp4";
import emotion1 from "../Components/Assets/ysabel-work/011 (1).webp";
import emotion2 from "../Components/Assets/ysabel-work/011 (2).webp";
import emotion3 from "../Components/Assets/ysabel-work/045.mp4";
import emotion4 from "../Components/Assets/ysabel-work/046.mp4";
import emotion6 from "../Components/Assets/ysabel-work/exp-2.png";
import emotion7 from "../Components/Assets/ysabel-work/exp-3.mp4";
import food1 from "../Components/Assets/ysabel-work/12345678.mp4";
import food2 from "../Components/Assets/ysabel-work/123456789.mp4";
import food3 from "../Components/Assets/ysabel-work/ysabel-2-strategy.mp4";
import food4 from "../Components/Assets/ysabel-work/ysabel-3-strategy.mp4";
import food5 from "../Components/Assets/ysabel-work/258.webp";
import food6 from "../Components/Assets/ysabel-work/259.png";
import food7 from "../Components/Assets/ysabel-work/260.png";
import food8 from "../Components/Assets/ysabel-work/261.png";
import food9 from "../Components/Assets/ysabel-work/263.png";
import video44 from "../Components/Assets/ysabel-work/asian-mainn.mp4";
import pm1 from "../Components/Assets/ysabel-work/789.png";
import pm2 from "../Components/Assets/ysabel-work/6789.mp4";
import pm3 from "../Components/Assets/ysabel-work/56789.png";
import pm4 from "../Components/Assets/ysabel-work/852.mp4";
import pm5 from "../Components/Assets/ysabel-work/2963.mp4";
import pm6 from "../Components/Assets/ysabel-work/night-1.mp4";
import pm7 from "../Components/Assets/ysabel-work/105.mp4";
import pm8 from "../Components/Assets/ysabel-work/11-20.png";
import trekuCircleLogo from "../Components/Assets/treku circle.png";
import collection1 from "../Components/Assets/ysabel-work/collection-1.mp4";
import collection2 from "../Components/Assets/ysabel-work/collection-2.mp4";
import collection3 from "../Components/Assets/ysabel-work/collection-3.mp4";
import collection4 from "../Components/Assets/ysabel-work/collection-4.mp4";
import collection5 from "../Components/Assets/ysabel-work/collection-5.mp4";
import collection6 from "../Components/Assets/ysabel-work/collection-6.mp4";
import collection7 from "../Components/Assets/ysabel-work/collection-7.mp4";
import collection8 from "../Components/Assets/ysabel-work/collection-8.mp4";
import collection9 from "../Components/Assets/ysabel-work/collection-9.mp4";
import collection10 from "../Components/Assets/ysabel-work/collection-10.mp4";
import collection11 from "../Components/Assets/ysabel-work/collection-11.mp4";
import collection12 from "../Components/Assets/ysabel-work/collection-12.mp4";
import collection13 from "../Components/Assets/ysabel-work/collection-13.mp4";
import collection14 from "../Components/Assets/ysabel-work/collection-14.mp4";
import collection15 from "../Components/Assets/ysabel-work/collection-15.mp4";
import collection16 from "../Components/Assets/ysabel-work/collection-16.mp4";
import collection17 from "../Components/Assets/ysabel-work/collection-17.mp4";
import collection18 from "../Components/Assets/ysabel-work/collection-18.mp4";  
import collection19 from "../Components/Assets/ysabel-work/collection-19.mp4";
import collection20 from "../Components/Assets/ysabel-work/collection-20.mp4";
import collection21 from "../Components/Assets/ysabel-work/collection-21.mp4";
import collection22 from "../Components/Assets/ysabel-work/collection-22.mp4";
import collection23 from "../Components/Assets/ysabel-work/collection-23.mp4";


const YsabelMarketingStrategy = ({ title, text1, text2, media, fullScreenItem }) => {
    const thankYouRef = useRef(null);
    const trekuLogoRef = useRef(null);
    const thankYouText = "THANK YOU";
    const [typedThankYou, setTypedThankYou] = useState("");
    const [hasStartedTyping, setHasStartedTyping] = useState(false);
    const [showTrekuLogo, setShowTrekuLogo] = useState(false);
    const [previewSrc, setPreviewSrc] = useState(null);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [openCollectionIdeas, setOpenCollectionIdeas] = useState(false);

    useEffect(() => {
        if (!thankYouRef.current || hasStartedTyping) return;
        if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
            setHasStartedTyping(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStartedTyping(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.45 }
        );

        observer.observe(thankYouRef.current);

        return () => observer.disconnect();
    }, [hasStartedTyping]);

    useEffect(() => {
        if (!hasStartedTyping) return;
        if (typedThankYou.length >= thankYouText.length) return;

        const timeout = setTimeout(() => {
            setTypedThankYou(thankYouText.slice(0, typedThankYou.length + 1));
        }, 110);

        return () => clearTimeout(timeout);
    }, [hasStartedTyping, typedThankYou, thankYouText]);

    useEffect(() => {
        if (!trekuLogoRef.current || showTrekuLogo) return;
        if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
            setShowTrekuLogo(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowTrekuLogo(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(trekuLogoRef.current);

        return () => observer.disconnect();
    }, [showTrekuLogo]);

    useEffect(() => {
        if (!previewOpen) return;

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setPreviewOpen(false);
                setPreviewSrc(null);
            }
        };

        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [previewOpen]);

    const videos = [video2, video1, video3];
    const italianMedia = [italian1, italian2, italian3, italian4, italian5, italian6];

    const asianMedia = [video5, imageasian];

    const asianMedia2 = [imageasian1, video6];

    const gardenVideos = [video8, gardenImage, video9];

    const gardenVideos2 = [video10, gardenImage2, video11];

    const behindTheCraft = [video12, video13, video14, video15, video17, video16];
    const emotionMedia = [
        emotion1,
        emotion2,
        emotion3,
        emotion4,
        emotion6,
        emotion7,
    ];

    const pmData = [pm2, pm1, pm3, pm4, pm5, pm6, pm7, pm8];

    const collectionIdeasData = [
        { src: collection1, description: "Japanese filling – Asian flavor" },
        { src: collection2, description: "Extra Shot at Garden Society" },
        { src: collection3, description: "Behind the Craft: Food Presentation Inspired by Asian or Italian Cuisine" },
        { src: collection4, description: "The World of Ysabel – Dynamic" },
        { src: collection5, description: "Asian" },
        { src: collection6, description: "Asian" },
        { src: collection7, description: "Behind the Craft – Italian Restaurant" },
        { src: collection8, description: "The World of Ysabel Food" },
        { src: collection9, description: "Food Presentation" },
        { src: collection10, description: "Italian Food: Behind the Craft" },
        { src: collection11, description: "Macro Food Presentation" },
        { src: collection12, description: "Food Presentation" },
        { src: collection13, description: "Food Presentation" },
        { src: collection14, description: "Behind the Craft: The Sound of the Kitchen" },
        { src: collection15, description: "Behind the Craft: The Sound of the Kitchen" },
        { src: collection16, description: "Behind the Craft – Staff" },
        { src: collection17, description: "Food Presentation Bundle" },
        { src: collection18, description: "Emotional Moments" },
        { src: collection19, description: "Behind the Craft" },
        { src: collection20, description: "Garden Food" },
        { src: collection21, description: "Behind the Craft" },
        { src: collection22, description: "Food Presentation" },
        { src: collection23, description: "Italian Food Night" },
    ];
    const rubricItems = [
        {
            title: "1. The World of Ysabel (Rubrika Kryesore)",
            description:
                "Kjo është rubrika themelore e komunikimit të brandit dhe prezanton botën e Ysabel si një experience arkitekture, kulture dhe emocioni. Qëllimi është të krijohet atmosfera dhe misteri që e dallon Ysabel nga vendet tjera. Përmes përmbajtjes cinematike dhe artistike, ambienti prezantohet si një univers më vete ku ushqimi, arkitektura dhe energjia sociale bashkohen në një përjetim unik.",
            elements: [
                "video cinematike të ambientit",
                "lojë me dritë dhe hije",
                "lëvizje elegante të perdeve",
                "reflektime dhe tekstura arkitekture",
                "silueta njerëzish në ambient",
                "detaje dekorative dhe artistike",
                "slow motion ambient shots",
                "tekst poetik ose reflektiv",
                "ndërtim i misterit dhe atmosferës",
            ],
        },
        {
            title: "2. Italian Soul (Kati 1)",
            description:
                "Kjo rubrikë prezanton shpirtin e kuzhinës italiane dhe atmosferën e ngrohtë të katit të parë të Ysabel. Fokusin e ka tek emocioni që krijon ushqimi dhe momentet sociale rreth tavolinës. Përmbajtja tregon se ushqimi italian nuk është vetëm një pjatë, por një përvojë që bashkon njerëzit.",
            elements: [
                "përgatitja e ushqimit italian",
                "duar që punojnë brumin dhe pastën",
                "derdhja e verës në gotë",
                "servimi i pjatave në tavolinë",
                "momentet sociale mes miqve",
                "atmosfera e ngrohtë e darkës",
                "reagime dhe emocione të klientëve",
                "detaje të ushqimit dhe tavolinës",
            ],
        },
        {
            title: "3. Asian Ritual (Kati 2)",
            description:
                "Kjo rubrikë prezanton dimensionin më minimalist dhe elegant të Ysabel. Ushqimi aziatik trajtohet si një ritual ku rëndësi kanë teknika, precizioni dhe estetika e plating-ut. Atmosfera është më e qetë dhe premium, duke krijuar ndjesinë e një experience fine dining.",
            elements: [
                "plating minimalist dhe elegant",
                "teknika të kuzhinës aziatike",
                "precision në përgatitje",
                "detaje të përbërësve dhe teksturave",
                "momente të procesit të gatimit",
                "prezantim artistik i pjatave",
                "tone vizuale të qeta dhe premium",
                "atmosferë fine dining",
            ],
        },
        {
            title: "4. Rooftop Society (Kati 3)",
            description:
                "Rooftop Society prezanton dimensionin më urban dhe social të Ysabel. Kjo rubrikë kap energjinë e rooftop-it përmes muzikës, skyline-it të qytetit dhe jetës së natës. Atmosfera është dinamike dhe festive, duke e pozicionuar Ysabel si një pikë takimi për jetën urbane.",
            elements: [
                "skyline i qytetit",
                "sunset në rooftop",
                "DJ dhe muzikë",
                "bartending dhe koktejle",
                "energjia e turmës",
                "vallëzim dhe socializim",
                "atmosfera e nightlife",
                "prezantim i ushqimit në rooftop",
            ],
        },
        {
            title: "5. Behind the Craft",
            description:
                "Kjo rubrikë prezanton botën pas skenës së Ysabel dhe punën që qëndron pas çdo experience që merr klienti. Ajo tregon procesin e krijimit nga kuzhina deri te organizimi i gjithë ekipit. Rreth 70% e përmbajtjes fokusohet në ushqim dhe mjeshtërinë e chef-ave, ndërsa pjesa tjetër prezanton njerëzit që kontribuojnë në funksionimin e vendit.",
            elements: [
                "chef në veprim",
                "teknika të gatimit",
                "procesi i plating-ut",
                "përgatitjet para shërbimit",
                "momentet e tensionit në kuzhinë",
                "koordinimi i stafit",
                "puna e menaxherit dhe CEO",
                "host dhe staf në organizim",
                "intervista të shkurtra me ekipin",
                "procesi nga ideja deri te pjata finale",
            ],
        },
        {
            title: "6. Emotion & Experience",
            description:
                "Kjo rubrikë i kushtohet përjetimit të klientëve në Ysabel. Fokusin e ka tek emocionet dhe momentet që krijohen gjatë vizitës. Përmbajtja përfshin të gjitha katet e Ysabel dhe tregon mënyra të ndryshme se si njerëzit e përjetojnë ambientin – nga një kafe e qetë gjatë ditës deri te energjia e nightlife. Pas The World of Ysabel, kjo është një nga rubrikat më të rëndësishme sepse tregon drejtpërdrejt se si klientët e jetojnë brandin.",
            elements: [
                "reagimet dhe emocionet e klientëve",
                "momente me miq dhe familje",
                "darka dhe degustime",
                "momente spontane në tavolinë",
                "festa dhe socializim",
                "përjetimi i ambientit në kate të ndryshme",
                "vibe i nightlife",
                "komente dhe intervista me klientë",
            ],
        },
        {
            title: "7. Food Presentation",
            description:
                "Kjo rubrikë fokusohet në prezantimin estetik të pjatave dhe detajet vizuale të ushqimit. Përmbajtja është shumë vizuale dhe synon të rrisë dëshirën për ushqim përmes prezantimit artistik të pjatave.",
            elements: [
                "plating i pjatave",
                "detaje të ushqimit",
                "tekstura dhe përbërës",
                "slow motion food shots",
                "momenti i servimit të pjatës",
                "detaje të salcave dhe përbërësve",
                "kombinime ngjyrash në ushqim",
                "estetika vizuale e ushqimit",
            ],
        },
        {
            title: "8. 11 a.m – 11 p.m",
            description:
                "Kjo rubrikë prezanton transformimin e Ysabel gjatë ditës dhe mbrëmjes. Përmes videove tregohet si ndryshon atmosfera e vendit nga momentet e qeta të ditës deri te energjia e natës. Qëllimi është të tregojë se Ysabel është një vend që jeton në dy ritme: një ambient për kafe dhe relaks gjatë ditës dhe një hapësirë me energji dhe vibe social gjatë mbrëmjes.",
            elements: [
                "ambienti me rreze dielli gjatë ditës",
                "kafe dhe takime të qeta",
                "njerëz që shijojnë ambientin gjatë ditës",
                "ndryshimi gradual i dritës dhe atmosferës",
                "ndezja e dritave dhe ambienti i mbrëmjes",
                "transformimi i vendit nga day vibe në night vibe",
                "socializim dhe energji e mbrëmjes",
                "kontrasti mes ditës dhe natës",
            ],
        },
    ];

    const isVideo = (src) => {
        if (!src) return false;
        const lower = src.toLowerCase();
        return lower.endsWith('.mp4') || lower.endsWith('.webm');
    };

    const openPreview = (src) => {
        setPreviewSrc(src);
        setPreviewOpen(true);
    };

    const closePreview = () => {
        setPreviewOpen(false);
        setPreviewSrc(null);
    };

    const renderMedia = (src, idx) => {
        if (isVideo(src)) {
            return (
                <div className="relative w-full h-full cursor-pointer" onClick={() => openPreview(src)}>
                    <video
                        src={src}
                        autoPlay
                        loop
                        playsInline
                        muted
                        className="w-full h-full object-cover"
                    />
                </div>
            );
        }
        return (
            <img
                src={src}
                alt={`Media ${idx}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openPreview(src)}
            />
        );
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const renderRubricElements = (index) => (
        <div className="mb-8">
            <p className="text-sm lg:text-[17px] font-custom1 font-bold mb-3">Elementet e përmbajtjes:</p>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 text-white/95">
                {rubricItems[index].elements.map((element) => (
                    <li key={element} className="list-none">
                        <div className="w-full h-full flex items-center rounded-2xl overflow-hidden border border-white/10 bg-[#1D3428]">
                            <div className="w-2 bg-[#BA8424]" />
                            <p className="text-[12px] lg:text-[16px] leading-relaxed font-custom1 px-3 py-2">
                                {element}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="w-full min-h-screen bg-black text-white px-6 lg:px-16 py-12 lg:py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <img src={ysabelLogo} alt="YSABEL Logo" className="w-1/2 lg:w-[35vh] mx-auto" />
                    <p className="text-xl lg:text-4xl tracking-[1px] py-3 mt-10 font-custom5 uppercase border-t border-b border-white/30 w-fit mx-auto">{title}</p>
                </div>

                <p className="text-sm lg:text-[17px] leading-relaxed mb-6 font-custom1">
                    Ky dokument paraqet strategjinë e qartë të komunikimit dhe publikimit të përmbajtjes për Ysabel Society, një koncept unik i ndarë në tre kate:<br /> <br />- restaurant italian, <br />- restaurant asian dhe <br />- rooftop garden me jetë nate.
                </p>
                <p className="text-sm lg:text-[17px] leading-relaxed mb-6 font-custom1">
                    Qëllimi i kësaj strategjie është të krijojë një identitet të qartë vizual, të strukturuar në rubrika, duke kombinuar estetikë, emocion dhe energji.
                </p>
                <p className="text-sm lg:text-[17px] leading-relaxed mb-16 font-custom1">
                    Strategjia synon të balancojë storytelling, prezantimin e ushqimit dhe lifestyle urban, duke e pozicionuar Ysabel-in si një destinacion referencë për qytetin, por edhe në nivel ndërkombëtar.
                </p>

                <div className="mb-12">
                    <p className="text-2xl lg:text-3xl font-bold font-custom5 border-b border-t py-3 text-center w-fit mx-auto uppercase border-white/30 mb-10">
                        Rubrikat Kryesore
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">
                        {rubricItems.map((item) => (
                            <div key={item.title} className="bg-[#1D3428] text-white p-5 rounded-2xl border border-white/10 h-full flex flex-col justify-start items-start transition-all duration-300 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                                <h3 className="text-2xl lg:text-[32px] font-bold font-custom5 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[14px] lg:text-[16px] font-custom6 leading-relaxed mt-2 text-white/90">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 1. Rubrika Kryesore - The World of Ysabel */}
                <div className="mb-12 mt-20">
                    <p className="text-2xl lg:text-2xl text-center uppercase font-bold font-custom5 py-3 border p-5 rounded-2xl bg-[#1D3428] border-none mb-10">
                        1. Rubrika Kryesore - The World of Ysabel
                    </p>

                    <div className="grid grid-cols-3">
                        {videos.map((src, index) => (
                            <div key={index} className="relative">
                                {renderMedia(src, index)}
                            </div>
                        ))}
                    </div>
                    <div className='text-sm lg:text-base mt-10 font-custom1 mb-10 leading-relaxed'>
                        <p className='mb-4'>
                            Qëllimi i kësaj rubrike është të prezantojë botën e Ysabel-it, jo vetëm si restorant apo rooftop, por si një eksperiencë të arkitekturës, kulturës dhe emocionit. Ajo ndërton atmosferën dhe misterin që e dallon Ysabel-in nga vendet e tjera.
                        </p>
                        <p className='mb-5'>
                            Përmbajtja është kryesisht kinematike dhe artistike, ku përdoren drita, hije, reflektime, perde dhe lëvizje të ngadalta për të krijuar një ndjenjë mistike dhe elegante.
                        </p>

                        <div className='bg-[#1D3428] text-white px-5 py-4 rounded-xl border-l-4 border-[#BA8424] mb-5'>
                            <p className='italic'>
                                Kamera fokusohet në ambientin si një univers më vete, duke treguar detaje të arkitekturës, silueta njerëzish dhe elemente dekorative.
                            </p>
                        </div>

                        <p className='mb-4'>
                            Shpesh shoqërohet me tekst poetik ose reflektiv, që i jep komunikimit një dimension emocional.
                        </p>
                        <p className='text-white/90'>
                            Në thelb, kjo rubrikë e pozicionon Ysabel-in si një vend ku njerëzit nuk vijnë vetëm për ushqim, por për një përjetim estetik dhe social — një botë më vete brenda qytetit.
                        </p>
                    </div>
                    {renderRubricElements(0)}
                    <div className="relative">
                        {renderMedia(video4, 4)}
                    </div>
                </div>

                {/* 2. Italian Soul */}
                <div className="mb-12 mt-20">
                    <p className="text-2xl lg:text-2xl text-center uppercase font-bold font-custom5 py-3 border p-5 rounded-2xl bg-[#1D3428] border-none mb-10">
                        2. Italian Soul
                    </p>

                    <p className="text-sm lg:text-base font-custom1 text-white/80 mb-8">
                        Kjo rubrikë prezanton shpirtin e kuzhinës italiane dhe atmosferën e ngrohtë të katit të parë të Ysabel-it. Fokusi është tek emocioni i ushqimit, momentet sociale dhe kultura e ndarjes së tavolinës. Përmbajtja kap detaje si duart që përgatisin ushqimin, vera që derdhet në gotë, pjatat që servohen dhe reagimet e njerëzve në tavolinë.
                    </p>
                    <p className="text-sm lg:text-base font-custom1 text-white/80 mb-8">
                        Atmosfera është e ngrohtë dhe autentike, duke treguar se ushqimi italian nuk është vetëm një pjatë, por një moment që bashkon njerëzit dhe krijon kujtime.
                    </p>
                    {renderRubricElements(1)}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                        {italianMedia.map((src, index) => (
                            <div key={index} className="overflow-hidden">
                                {renderMedia(src, 10 + index)}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Asian Ritual */}
                <div className="mb-12 mt-20">
                    <p className="text-2xl lg:text-2xl text-center uppercase font-bold font-custom5 py-3 border p-5 rounded-2xl bg-[#1D3428] border-none mb-10">
                        3. Asian Ritual
                    </p>
                    <div className='mt-10 mb-10 space-y-5'>
                        <p className='text-sm lg:text-[17px] leading-relaxed font-custom6'>
                            Asian Ritual (Kati 2) prezanton dimensionin me minimalist dhe elegant te Ysabel. Ushqimi aziatik trajtohet si nje ritual, ku fokusi eshte ne precision, teknike dhe estetik te plating-ut.
                        </p>

                        <div className='bg-[#1D3428] text-white px-5 py-4 rounded-xl border-l-4 border-white/40'>
                            <p className='text-sm lg:text-[17px] leading-relaxed font-custom6 italic'>
                                Atmosfera eshte me e qete dhe premium, duke krijuar ndjesine e nje experience fine dining ku cdo pjate trajtohet si nje veper e vogel arti.
                            </p>
                        </div>
                    </div>
                    {renderRubricElements(2)}
                    <div className="grid grid-cols-2">
                        {asianMedia.map((src, index) => (
                            <div key={index} className="overflow-hidden">
                                {renderMedia(src, 20 + index)}
                            </div>
                        ))}
                    </div>
                    
                    <div className="relative">
                        {renderMedia(video44, 44)}
                    </div>
                    <div className="grid grid-cols-2">
                        {asianMedia2.map((src, index) => (
                            <div key={index} className="overflow-hidden">
                                {renderMedia(src, 20 + index)}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Rooftop Society */}
                <div className="mb-12 mt-20">
                    <p className="text-2xl lg:text-2xl text-center uppercase font-bold font-custom5 py-3 border p-5 rounded-2xl bg-[#1D3428] border-none mb-10">
                        4. Rooftop Society
                    </p>
                    <div className="mb-10 space-y-5">
                        <p className="text-sm lg:text-[17px] leading-relaxed font-custom6">
                            Rooftop Society është dimensioni më urban dhe social i brandit Ysabel. Kjo rubrikë prezanton energjinë e rooftop-it përmes pamjeve të skyline-it të qytetit, sunset-it, muzikës dhe jetës së natës.
                        </p>

                        <p className="text-sm lg:text-[17px] leading-relaxed font-custom1">
                            Atmosfera është më dinamike dhe festive. Kjo rubrikë e pozicionon Ysabel si një pikë takimi për jetën urbane dhe socializimin në qytet.
                        </p>
                    </div>
                    {renderRubricElements(3)}
                      <div className="grid grid-cols-3">
                        {gardenVideos.map((src, index) => (
                            <div key={index} className="overflow-hidden">
                                {renderMedia(src, 20 + index)}
                            </div>
                        ))}
                    </div>
                    <div className="py-12">
                            <p className="text-sm lg:text-[17px] font-custom1 font-bold mb-2">Këtu shfaqen:</p>
                            <ul className="list-disc pl-5 text-sm lg:text-[17px] leading-relaxed font-custom1 space-y-1">
                                <li>Miq që qeshin</li>
                                <li>Çiftet në darkë</li>
                                <li>Grupet që festojnë</li>
                                <li>Momente spontane dhe të sinqerta</li>
                            </ul>
                        </div>

                        <p className="text-sm lg:text-[17px] leading-relaxed font-custom1 italic text-white/80">
                            Qëllimi është të tregojë se Ysabel nuk është vetëm një vend, por një hapësirë ku krijohen kujtime dhe emocione.
                        </p>
                    <div className="grid grid-cols-3 mt-12">
                        {gardenVideos2.map((src, index) => (
                            <div key={index} className="overflow-hidden">
                                {renderMedia(src, 20 + index)}
                            </div>
                        ))}
                    </div>
                </div>
              
                {/* 5. Behind the Craft */}
                <div className="mb-12 mt-20">
                    <p className="text-2xl lg:text-2xl text-center uppercase font-bold font-custom5 py-3 border p-5 rounded-2xl bg-[#1D3428] border-none mb-10">
                        5. Behind the Craft
                    </p>

                    <div className="mb-10 space-y-5">
                        <p className="text-sm lg:text-[17px] leading-relaxed font-custom6">
                            Kjo rubrike tregon boten pas skenes se Ysabel dhe procesin qe qendron pas cdo experience qe merr klienti. Qellimi eshte te prezantohet puna, pasioni dhe perkushtimi i gjithe ekipit qe nga ideja deri te produkti final.
                        </p>
                        <p className="text-sm lg:text-[17px] leading-relaxed font-custom6">
                            Rreth 70% e permbajtjes fokusohet ne ushqimin, ku shfaqen chef-at duke pergatitur pjatat, teknikat e kuzhines, procesi i plating-ut dhe detajet e punes se tyre. Kamera kap momentet reale te kuzhines: pergatitjet para sherbimit, koncentrimin e stafit dhe energjine qe krijohet ne kuzhine.
                        </p>
                        <p className="text-sm lg:text-[17px] leading-relaxed font-custom6">
                            Pjesa tjeter e rubrikes prezanton edhe njerezit qe qendrojne pas eksperiences, si menaxhmenti, CEO, hostet dhe stafi tjeter qe kontribuon ne funksionimin e vendit.
                        </p>
                        {/* <div className="border-l-2 border-white/30 pl-4">
                            <p className="text-sm lg:text-[17px] font-custom1 font-bold mb-2">Ne kete rubrike mund te shfaqen edhe:</p>
                            <ul className="list-disc pl-5 text-sm lg:text-[17px] leading-relaxed font-custom1 space-y-1">
                                <li>video nga procesi i pergatitjes se ushqimit</li>
                                <li>teknika dhe mjeshteria e chef-ave</li>
                                <li>pergatitjet para sherbimit</li>
                                <li>momente tensioni dhe koncentrimi ne kuzhine</li>
                                <li>intervista te shkurtra me chef, staf dhe menaxhment</li>
                                <li>krahasimi i procesit te punes me rezultatin final ne pjate</li>
                            </ul>
                        </div> */}
                        {renderRubricElements(4)}
                        <p className="text-sm lg:text-[17px] leading-relaxed font-custom1 italic text-white/80">
                            Kjo e ben rubriken shume autentike dhe interesante, sepse publiku sheh sa pune, art dhe koordinim qendron pas cdo experience qe ofron Ysabel.
                        </p>
                    </div>
                   

                      <div className="grid grid-cols-3">
                        {behindTheCraft.map((src, index) => (
                            <div key={index} className="overflow-hidden">
                                {renderMedia(src, 20 + index)}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 6. Emotion & Experience */}
                <div className="mb-12 mt-20">
                    <p className="text-2xl lg:text-2xl text-center uppercase font-bold font-custom5 py-3 border p-5 rounded-2xl bg-[#1D3428] border-none mb-10">
                        6. Emotion & Experience
                    </p>

                    <div className="mb-10 space-y-5">
                        <p className="text-sm lg:text-[17px] leading-relaxed font-custom6">
                            Kjo rubrike i kushtohet kryesisht perjetimit te klientit ne Ysabel. Fokusin nuk e ka vetem tek vendi apo ushqimi, por tek emocionet dhe momentet qe krijohen gjate vizites.
                        </p>
                        <p className="text-sm lg:text-[17px] leading-relaxed font-custom6">
                            Permbajtja tregon se si klientet e perjetojne Ysabel: momentet me miq, darkat, degustimet, festimet dhe energjine e nightlife. Kjo rubrike perfshin te gjitha katet e Ysabel, duke treguar eksperienca te ndryshme - nga nje dreke apo kafe e qete, te darkat elegante dhe atmosfera e gjalle e rooftop-it.
                        </p>
                       
                        <p className="text-sm lg:text-[17px] leading-relaxed font-custom1">
                            Qellimi eshte te tregohet se Ysabel nuk eshte vetem nje vend ku hahet, por nje hapesire ku krijohen kujtime, emocione dhe eksperienca qe mbeten.
                        </p>
                        {renderRubricElements(5)}
                        <p className="text-sm lg:text-[17px] leading-relaxed font-custom1 italic text-white/80">
                            Pas "The World of Ysabel", kjo eshte rubrika me e rendesishme sepse tregon direkt se si e jeton klienti boten e Ysabel.
                        </p>
                    </div>
                   

                    <div className="hidden lg:grid grid-cols-4 grid-flow-dense auto-rows-[400px] gap-3">
                        {emotionMedia.map((src, index) => (
                            <div
                                key={index}
                                className={`overflow-hidden ${
                                    index === 0
                                        ? "col-span-2 row-span-2"
                                        : index === 1
                                            ? "col-span-2 row-span-1"
                                            : index === 2
                                            ? "col-span-1 row-span-1"
                                                : index === 3
                                                ? "col-span-1 row-span-1"
                                                    : index === 4
                                                ? "col-span-2 row-span-1"
                                                : "col-span-2 row-span-1"
                                }`}
                            >
                                {renderMedia(src, 40 + index)}
                            </div>
                        ))}
                    </div>

                    <div className="lg:hidden grid grid-cols-2 gap-3">
                        {emotionMedia.map((src, index) => (
                            <div key={index} className="overflow-hidden">
                                {renderMedia(src, 40 + index)}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 7. Food Presentation */}
                <div className="mb-12 mt-20">
                    <p className="text-2xl lg:text-2xl text-center uppercase font-bold font-custom5 py-3 border p-5 rounded-2xl bg-[#1D3428] border-none mb-10">
                        7. Food Presentation
                    </p>
                    <div className='mb-10 space-y-5'>
                        <p className='text-sm lg:text-[17px] leading-relaxed font-custom1'>
                            Kjo rubrikë është e dedikuar për prezantimin vizual të pjatave.
                        </p>
                        {/* <div className='border-l-2 border-white/30 pl-4'>
                            <p className='text-sm lg:text-[17px] font-custom1 mb-2 font-bold'>Kamera fokusohet në:</p>
                            <ul className='list-disc pl-5 text-sm lg:text-[17px] leading-relaxed font-custom1 space-y-1'>
                                <li>Plating të pjatave</li>
                                <li>Teksturat e ushqimit</li>
                                <li>Lëvizje slow motion</li>
                                <li>Detaje të përbërësve</li>
                            </ul>
                        </div> */}
                          {renderRubricElements(6)}
                        <p className='text-sm lg:text-[17px] leading-relaxed font-custom1 italic text-white/80'>
                            Kjo përmbajtje është më estetike dhe përdoret për të rritur dëshirën vizuale për ushqimin.
                        </p>
                    </div>
                  

                    <div className="hidden lg:block relative overflow-hidden">
                        <div className="grid grid-cols-12 auto-rows-[120px] xl:auto-rows-[14vh] gap-3">
                            <div className="col-span-6 row-span-4 overflow-hidden">
                                {renderMedia(food2, 50)}
                            </div>
                            <div className="col-span-3 row-span-2 overflow-hidden">
                                {renderMedia(food5, 51)}
                            </div>
                            <div className="col-span-3 row-span-4 overflow-hidden">
                                {renderMedia(food3, 52)}
                            </div>
                            <div className="col-span-3 row-span-2 overflow-hidden">
                                {renderMedia(food6, 53)}
                            </div>
                            <div className="col-span-3 row-span-4 overflow-hidden">
                                {renderMedia(food1, 54)}
                            </div>
                            <div className="col-span-6 row-span-4 overflow-hidden">
                                {renderMedia(food4, 55)}
                            </div>
                            <div className="col-span-3 row-span-2 overflow-hidden">
                                {renderMedia(food7, 56)}
                            </div>
                            <div className="col-span-3 row-span-2 overflow-hidden">
                                {renderMedia(food8, 57)}
                            </div>
                        </div>
                    </div>

                    <div className="lg:hidden grid grid-cols-3 gap-1">
                        <div className="col-span-2 row-span-2 overflow-hidden">{renderMedia(food2, 60)}</div>
                        <div className="col-span-1 overflow-hidden">{renderMedia(food5, 61)}</div>
                        <div className="col-span-1 overflow-hidden">{renderMedia(food3, 62)}</div>
                        <div className="col-span-1 overflow-hidden">{renderMedia(food6, 63)}</div>
                        <div className="col-span-2 row-span-2 overflow-hidden">{renderMedia(food1, 64)}</div>
                        <div className="col-span-1 overflow-hidden">{renderMedia(food4, 65)}</div>
                        <div className="col-span-1 overflow-hidden">{renderMedia(food7, 66)}</div>
                        <div className="col-span-1  overflow-hidden">{renderMedia(food8, 67)}</div>
                        <div className="col-span-1  overflow-hidden">{renderMedia(food9, 68)}</div>

                    </div>

                
                </div>

                {/* 8. 11a.m - 20p.m */}
                <div className="mb-12 mt-20">
                    <p className="text-2xl lg:text-2xl text-center uppercase font-bold font-custom5 py-3 border p-5 rounded-2xl bg-[#1D3428] border-none mb-10">
                        8. 11a.m - 11p.m
                    </p>
                    <p className="text-sm lg:text-[17px] leading-relaxed font-custom1 mb-10">
                        Kjo rubrikë tregon transformimin e Ysabel gjatë dites dhe mbrëmjes. Përmes videove prezantohet si ndryshon atmosfera e vendit nga drita e dites në energjinë e nates.
                        <br /><br />
                        Ne fillim shfaqet ambienti me rreze dielli, kafe, takime të qeta dhe momentet relaksuese të dites. Me kalimin e orës, atmosfera fillon të ndryshojë gradualisht drejt një vibe më energjik, me drita, muzikë dhe nightlife.
                        <br /><br />
                        Ideja është të tregohet se Ysabel është një vend që jeton në dy ritme: per ata që vijnë për kafe dhe qetesi gjatë dites, dhe per ata që vijnë për vibe dhe nightlife në mbremje.
                    </p>
                    {renderRubricElements(7)}

                    <div className="hidden lg:grid grid-cols-4 gap-3">
                        {pmData.map((src, index) => (
                            <div
                                key={index}
                                className={`overflow-hidden aspect-[9/16] ${index % 2 === 1 ? "mt-8" : ""}`}
                            >
                                {renderMedia(src, 80 + index)}
                            </div>
                        ))}
                    </div>

                    <div className="lg:hidden grid grid-cols-2 gap-3">
                        {pmData.map((src, index) => (
                            <div key={index} className="overflow-hidden aspect-[9/16]">
                                {renderMedia(src, 80 + index)}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-12 mt-24">
                    <div className="p-0 lg:p-0">
                    <p className="text-2xl lg:text-3xl font-custom1 tracking-[1px] mb-6">
    Strategjia e Përmbajtjes <br/ ><b className='font-bold uppercase'>Social Media – Ysabel</b>
</p>

<p className="text-sm lg:text-[17px] leading-relaxed font-custom1 text-white/90">
    Për të ndërtuar një komunikim të qëndrueshëm dhe një identitet të fortë në rrjetet sociale, strategjia e përmbajtjes së Ysabel bazohet në disa rubrika kryesore që reflektojnë dimensionet e ndryshme të eksperiencës që ofron restoranti. Këto rubrika përfshijnë botën e brandit, kulturën gastronomike, përjetimin e klientëve dhe energjinë sociale të ambientit.
</p>

<p className="text-sm lg:text-[17px] leading-relaxed font-custom1 text-white/90 mt-5">
    Bazuar në këto shtylla, për çdo muaj planifikohet një kalendar veprimi me 8 postime strategjike, ku secili postim ka rol të ndryshëm në ndërtimin e identitetit dhe prezantimin e eksperiencës së Ysabel në mënyrë të vazhdueshme dhe të strukturuar.
</p>
                    </div>
                </div>

                

                <div className="mb-16">
                    <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-[2px] p-4 lg:p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
                            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
                                <p className="font-custom5 text-base mb-2">Postimi 1 - The World of Ysabel</p>
                                <p className="font-custom1 text-sm text-white/80"><span className="text-white font-semibold">Lloji:</span> Reel Cinematic</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Koncepti:</span> Ambient shots, drite, hije, perde, reflektime dhe tekst poetik</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Qellimi:</span> Ndertimi i botes dhe identitetit mistik te Ysabel</p>
                            </div>
                            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
                                <p className="font-custom5 text-base mb-2">Postimi 2 - Italian Soul</p>
                                <p className="font-custom1 text-sm text-white/80"><span className="text-white font-semibold">Lloji:</span> Reel Food</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Koncepti:</span> Pergatitje pastash, derdhje vere, momentet e tavolines dhe atmosfera italiane</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Qellimi:</span> Prezantimi i shpirtit te kuzhines italiane</p>
                            </div>
                            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
                                <p className="font-custom5 text-base mb-2">Postimi 3 - Asian Ritual</p>
                                <p className="font-custom1 text-sm text-white/80"><span className="text-white font-semibold">Lloji:</span> Reel Food</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Koncepti:</span> Plating minimalist, teknika kuzhine dhe prezantim elegant i pjatave</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Qellimi:</span> Tregimi i dimensionit premium dhe fine dining</p>
                            </div>
                            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
                                <p className="font-custom5 text-base mb-2">Postimi 4 - Behind the Craft</p>
                                <p className="font-custom1 text-sm text-white/80"><span className="text-white font-semibold">Lloji:</span> Reel Documentary</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Koncepti:</span> Chef ne veprim, procesi i gatimit dhe pergatitjet para sherbimit</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Qellimi:</span> Tregimi i punes dhe mjeshterise se ekipit</p>
                            </div>
                            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
                                <p className="font-custom5 text-base mb-2">Postimi 5 - Emotion & Experience</p>
                                <p className="font-custom1 text-sm text-white/80"><span className="text-white font-semibold">Lloji:</span> Reel Social</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Koncepti:</span> Momente te klienteve, qeshje, degustime dhe socializim</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Qellimi:</span> Tregimi i perjetimit te klienteve</p>
                            </div>
                            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
                                <p className="font-custom5 text-base mb-2">Postimi 6 - Food Presentation</p>
                                <p className="font-custom1 text-sm text-white/80"><span className="text-white font-semibold">Lloji:</span> Foto / Reel</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Koncepti:</span> Close-up te pjatave, plating dhe detaje te ushqimit</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Qellimi:</span> Rritja e deshires vizuale per ushqim</p>
                            </div>
                            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
                                <p className="font-custom5 text-base mb-2">Postimi 7 - Cocktail Presentation</p>
                                <p className="font-custom1 text-sm text-white/80"><span className="text-white font-semibold">Lloji:</span> Reel / Foto</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Koncepti:</span> Bartender duke pergatitur koktejle, mixing, garnish dhe servim</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Qellimi:</span> Prezantimi i miksologjise dhe koktejleve</p>
                            </div>
                            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
                                <p className="font-custom5 text-base mb-2">Postimi 8 - Rooftop Society</p>
                                <p className="font-custom1 text-sm text-white/80"><span className="text-white font-semibold">Lloji:</span> Reel Lifestyle</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Koncepti:</span> Sunset, skyline, DJ, koktejle dhe energji rooftop</p>
                                <p className="font-custom1 text-sm text-white/80 mt-1"><span className="text-white font-semibold">Qellimi:</span> Prezantimi i vibe-it urban dhe nightlife</p>
                            </div>
                        </div>

                        <div className="hidden lg:block rounded-xl border border-white/15 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-[#1D3428]">
                                    <tr className="text-xs lg:text-sm uppercase tracking-wide text-white/90">
                                        <th className="px-4 py-3 font-custom5">Postimi</th>
                                        <th className="px-4 py-3 font-custom5">Rubrika</th>
                                        <th className="px-4 py-3 font-custom5">Lloji i Postimit</th>
                                        <th className="px-4 py-3 font-custom5">Koncepti i Videos / Fotos</th>
                                        <th className="px-4 py-3 font-custom5">Qellimi</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm lg:text-[15px] font-custom1">
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-4">Postimi 1</td>
                                        <td className="px-4 py-4">The World of Ysabel</td>
                                        <td className="px-4 py-4">Reel Cinematic</td>
                                        <td className="px-4 py-4">Ambient shots, drite, hije, perde, reflektime dhe tekst poetik</td>
                                        <td className="px-4 py-4">Ndertimi i botes dhe identitetit mistik te Ysabel</td>
                                    </tr>
                                    <tr className="border-t border-white/10 bg-white/[0.03]">
                                        <td className="px-4 py-4">Postimi 2</td>
                                        <td className="px-4 py-4">Italian Soul</td>
                                        <td className="px-4 py-4">Reel Food</td>
                                        <td className="px-4 py-4">Pergatitje pastash, derdhje vere, momentet e tavolines dhe atmosfera italiane</td>
                                        <td className="px-4 py-4">Prezantimi i shpirtit te kuzhines italiane</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-4">Postimi 3</td>
                                        <td className="px-4 py-4">Asian Ritual</td>
                                        <td className="px-4 py-4">Reel Food</td>
                                        <td className="px-4 py-4">Plating minimalist, teknika kuzhine dhe prezantim elegant i pjatave</td>
                                        <td className="px-4 py-4">Tregimi i dimensionit premium dhe fine dining</td>
                                    </tr>
                                    <tr className="border-t border-white/10 bg-white/[0.03]">
                                        <td className="px-4 py-4">Postimi 4</td>
                                        <td className="px-4 py-4">Behind the Craft</td>
                                        <td className="px-4 py-4">Reel Documentary</td>
                                        <td className="px-4 py-4">Chef ne veprim, procesi i gatimit dhe pergatitjet para sherbimit</td>
                                        <td className="px-4 py-4">Tregimi i punes dhe mjeshterise se ekipit</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-4">Postimi 5</td>
                                        <td className="px-4 py-4">Emotion & Experience</td>
                                        <td className="px-4 py-4">Reel Social</td>
                                        <td className="px-4 py-4">Momente te klienteve, qeshje, degustime dhe socializim</td>
                                        <td className="px-4 py-4">Tregimi i perjetimit te klienteve</td>
                                    </tr>
                                    <tr className="border-t border-white/10 bg-white/[0.03]">
                                        <td className="px-4 py-4">Postimi 6</td>
                                        <td className="px-4 py-4">Food Presentation</td>
                                        <td className="px-4 py-4">Foto / Reel</td>
                                        <td className="px-4 py-4">Close-up te pjatave, plating dhe detaje te ushqimit</td>
                                        <td className="px-4 py-4">Rritja e deshires vizuale per ushqim</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-4">Postimi 7</td>
                                        <td className="px-4 py-4">Cocktail Presentation</td>
                                        <td className="px-4 py-4">Reel / Foto</td>
                                        <td className="px-4 py-4">Bartender duke pergatitur koktejle, mixing, garnish dhe servim</td>
                                        <td className="px-4 py-4">Prezantimi i miksologjise dhe koktejleve</td>
                                    </tr>
                                    <tr className="border-t border-white/10 bg-white/[0.03]">
                                        <td className="px-4 py-4">Postimi 8</td>
                                        <td className="px-4 py-4">Rooftop Society</td>
                                        <td className="px-4 py-4">Reel Lifestyle</td>
                                        <td className="px-4 py-4">Sunset, skyline, DJ, koktejle dhe energji rooftop</td>
                                        <td className="px-4 py-4">Prezantimi i vibe-it urban dhe nightlife</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="mb-14">
                    <button
                        type="button"
                        onClick={() => setOpenCollectionIdeas((prev) => !prev)}
                        className="w-full flex items-center justify-between border border-white/20 bg-white/5 px-4 lg:px-6 py-3 lg:py-4 rounded-xl transition-colors hover:bg-white/10"
                    >
                        <span className="font-custom5 uppercase text-lg lg:text-2xl tracking-[1px]">Collection Ideas</span>
                        <span className={`text-xl lg:text-2xl transition-transform duration-300 ${openCollectionIdeas ? "rotate-180" : "rotate-0"}`}>
                            ▾
                        </span>
                    </button>

                    <div
                        className={`transition-all duration-500 ease-out overflow-hidden ${
                            openCollectionIdeas ? "max-h-[5000px] opacity-100 mt-5" : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                            {collectionIdeasData.map((item, index) => (
                                <div key={`collection-idea-${index}`} className="bg-white/[0.03] flex flex-col">
                                    <div className="overflow-hidden">
                                        {renderMedia(item.src, 200 + index)}
                                    </div>
                                    <p className="font-custom1 text-sm lg:text-[14px] text-white leading-tight px-4 py-4 bg-[#1D3428] min-h-[68px] flex items-center">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-24 mb-8 flex justify-center">
                    <img
                        ref={trekuLogoRef}
                        src={trekuCircleLogo}
                        alt="Treku Circle Logo"
                        className={`w-16 h-16 lg:w-20 lg:h-20 object-contain transition-all duration-1000 ease-out ${
                            showTrekuLogo
                                ? "opacity-100 blur-0 scale-100 rotate-0"
                                : "opacity-0 blur-md scale-90 rotate-[-8deg]"
                        }`}
                    />
                </div>

                <div ref={thankYouRef} className="mb-10 text-center">
                    <p className="font-custom5 text-4xl lg:text-7xl tracking-[4px] uppercase text-white/95 min-h-[56px] lg:min-h-[100px]">
                        {typedThankYou}
                        <span
                            className={`inline-block align-middle ml-1 w-[2px] h-[0.9em] bg-white ${
                                hasStartedTyping && typedThankYou.length < thankYouText.length ? "animate-pulse" : "opacity-0"
                            }`}
                        />
                    </p>
                    <button
                        type="button"
                        onClick={scrollToTop}
                        aria-label="Go to top"
                        className={`mt-3 mx-auto flex items-center justify-center rounded-full border border-white/35 bg-white/10 backdrop-blur-sm text-white text-[11px] lg:text-xs px-4 py-1.5 shadow-[0_8px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white/20 active:scale-95 ${
                            hasStartedTyping ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                        }`}
                    >
                        Go to top
                    </button>
                </div>
            </div>

            {previewOpen && previewSrc && (
                <div
                    className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8"
                    onClick={closePreview}
                >
                    <button
                        type="button"
                        onClick={closePreview}
                        aria-label="Close preview"
                        className="absolute top-4 right-4 lg:top-6 lg:right-6 w-10 h-10 rounded-full border border-white/30 bg-black/40 text-white text-xl leading-none flex items-center justify-center hover:bg-white/15 transition-colors"
                    >
                        x
                    </button>

                    <div
                        className="w-full h-full flex items-center justify-center"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {isVideo(previewSrc) ? (
                            <video
                                src={previewSrc}
                                controls
                                autoPlay
                                className="max-w-full max-h-[88vh] rounded-xl object-contain"
                            />
                        ) : (
                            <img
                                src={previewSrc}
                                alt="Preview"
                                className="max-w-full max-h-[88vh] rounded-xl object-contain"
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default YsabelMarketingStrategy;
