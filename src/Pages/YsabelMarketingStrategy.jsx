import React, { useRef, useState } from 'react';
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

const YsabelMarketingStrategy = ({ title, text1, text2, media, fullScreenItem }) => {
    const videoRefs = useRef([]);

    const togglePlay = (index) => {
        const video = videoRefs.current[index];
        if (video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    };

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
            title: "8. 11 a.m – 20 p.m",
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

    const renderMedia = (src, idx) => {
        if (isVideo(src)) {
            return (
                <div className="relative w-full h-full">
                    <video
                        ref={el => videoRefs.current[idx] = el}
                        src={src}
                        autoPlay
                        loop
                        playsInline
                        muted
                        className="w-full h-full object-cover"
                    />
                    <button
                        onClick={() => togglePlay(idx)}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                        <img src={ysabelLogo} alt="Play" className="w-16 lg:w-20 drop-shadow-lg" />
                    </button>
                </div>
            );
        }
        return <img src={src} alt={`Media ${idx}`} className="w-full h-full object-cover" />;
    };

    const renderRubricElements = (index) => (
        <div className="border-l-2 border-white/30 pl-4 mb-8">
            <p className="text-sm lg:text-[17px] font-custom1 font-bold mb-2">Elementet e përmbajtjes:</p>
            <ul className="list-disc pl-5 text-sm lg:text-[17px] leading-relaxed font-custom1 space-y-1 text-white/90">
                {rubricItems[index].elements.map((element) => (
                    <li key={element}>{element}</li>
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

                <p className="text-sm lg:text-[17px] leading-relaxed mb-6 font-custom6">
                    Ky dokument paraqet strategjinë e qartë të komunikimit dhe publikimit të përmbajtjes për Ysabel Society, një koncept unik i ndarë në tre kate:<br /> <br />- restaurant italian, <br />- restaurant asian dhe <br />- rooftop garden me jetë nate.
                </p>
                <p className="text-sm lg:text-[17px] leading-relaxed mb-6 font-custom6">
                    Qëllimi i kësaj strategjie është të krijojë një identitet të qartë vizual, të strukturuar në rubrika, duke kombinuar estetikë, emocion dhe energji.
                </p>
                <p className="text-sm lg:text-[17px] leading-relaxed mb-16 font-custom6">
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
                                <video
                                    ref={el => videoRefs.current[index] = el}
                                    src={src}
                                    autoPlay
                                    loop
                                    playsInline
                                    muted={true}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={() => togglePlay(index)}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"
                                >
                                    <img src={ysabelLogo} alt="Play" className="w-16 lg:w-20 drop-shadow-lg" />
                                </button>
                              
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
                        <video
                            ref={el => videoRefs.current[3] = el}
                            src={video4}
                            autoPlay
                            loop
                            playsInline
                            muted={true}
                            className="w-full object-cover"
                        />
                        <button
                            onClick={() => togglePlay(3)}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        >
                            <img src={ysabelLogo} alt="Play" className="w-16 lg:w-20 drop-shadow-lg" />
                        </button>
                     
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
                        <video
                            ref={el => videoRefs.current[3] = el}
                            src={video44}
                            autoPlay
                            loop
                            playsInline
                            muted
                            className="w-full object-cover lg:h-[60vh]"
                        />
                        <button
                            onClick={() => togglePlay(3)}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        >
                            <img src={ysabelLogo} alt="Play" className="w-16 lg:w-20 drop-shadow-lg" />
                        </button>
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
                   

                    <div className="hidden lg:grid grid-cols-4 grid-flow-dense auto-rows-[300px] gap-3">
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
                        <div className="grid grid-cols-4 grid-rows-4 gap-3" style={{ height: '80vh', maxHeight: '900px' }}>
                            <div className="col-span-2 row-span-2 overflow-hidden">
                                {renderMedia(food2, 50)}
                            </div>
                            <div className="col-span-1 row-span-1 overflow-hidden">
                                {renderMedia(food5, 51)}
                            </div>
                            <div className="col-span-1 row-span-2 overflow-hidden">
                                {renderMedia(food3, 52)}
                            </div>
                            <div className="col-span-1 row-span-1 overflow-hidden">
                                {renderMedia(food6, 53)}
                            </div>
                            <div className="col-span-1 row-span-2 overflow-hidden">
                                {renderMedia(food1, 54)}
                            </div>
                            <div className="col-span-2 row-span-2 overflow-hidden">
                                {renderMedia(food4, 55)}
                            </div>
                            <div className="col-span-1 row-span-1 overflow-hidden">
                                {renderMedia(food7, 56)}
                            </div>
                            <div className="col-span-1 row-span-1 overflow-hidden">
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
            </div>
        </div>
    );
};

export default YsabelMarketingStrategy;
