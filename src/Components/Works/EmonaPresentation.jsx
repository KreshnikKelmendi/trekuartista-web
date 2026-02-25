import React, { useState } from "react";
import emonaImg1 from "../Assets/emona-social-media/emona-loja/loja-3.png";
import emonaImg2 from "../Assets/emona-social-media/emona-loja/loja-2.png";
import emonaImg3 from "../Assets/emona-social-media/emona-loja/loja-1.png";

import socialMediaEmona1 from "../Assets/emona-social-media/emona-social-media-theme/emona-3.png";
import socialMediaEmona2 from "../Assets/emona-social-media/emona-social-media-theme/emona-2.png";
import socialMediaEmona3 from "../Assets/emona-social-media/emona-social-media-theme/emona-1.png";
import socialMediaEmona4 from "../Assets/emona-social-media/emona-social-media-theme/emona-4.png";
import socialMediaEmona5 from "../Assets/emona-social-media/emona-social-media-theme/emona-5.png";
import socialMediaEmona6 from "../Assets/emona-social-media/emona-social-media-theme/emona-6.png";
import socialMediaEmona7 from "../Assets/emona-social-media/emona-social-media-theme/emona-7.png";
import socialMediaEmona8 from "../Assets/emona-social-media/emona-social-media-theme/emona-8.png";
import socialMediaEmona9 from "../Assets/emona-social-media/emona-social-media-theme/emona-9.png";
import socialMediaEmona10 from "../Assets/emona-social-media/emona-social-media-theme/emona-10.png";
import socialMediaEmona11 from "../Assets/emona-social-media/emona-social-media-theme/emona-11.png";
import socialMediaEmona12 from "../Assets/emona-social-media/emona-social-media-theme/emona-12.png";
import socialMediaEmona13 from "../Assets/emona-social-media/emona-social-media-theme/emona-13.png";
import socialMediaEmona14 from "../Assets/emona-social-media/emona-social-media-theme/emona-14.png";
import socialMediaEmona15 from "../Assets/emona-social-media/emona-social-media-theme/emona-15.png";
import socialMediaEmona16 from "../Assets/emona-social-media/emona-social-media-theme/emona-16.png";
import socialMediaEmona17 from "../Assets/emona-social-media/emona-social-media-theme/emona-17.png";
import socialMediaEmona18 from "../Assets/emona-social-media/emona-social-media-theme/emona-18.png";

import emonaVideo1 from "../Assets/emona-social-media/emona-social-media-theme/animation-3-3.mp4";
import emonaVideo2 from "../Assets/emona-social-media/emona-social-media-theme/animation-2-2.mp4";
import emonaVideo3 from "../Assets/emona-social-media/emona-social-media-theme/animation-1-1.mp4";

import soundOnImage from "../Assets/on.png";
import soundOffImage from "../Assets/off.png";

const EmonaPresentation = ({ media, title, text1, text2 }) => {
    const items = [
        { src: emonaImg1, title: "Post 3", caption: "Ky post është kulmi. Shpërblimet dalin një nga një, me lëvizje, ndriçim e dinamike që i bën krejt me u ndal. Pse? Se në fund, njeriut i intereson çka fiton. Këtu loja merr formë emocioni, çaji, edhe shpërblimet lidhen bashkë n’një ndjesi “nxehëse” që s’të len indiferent. Tamon ajo ndjesia që t’ban me thon: “hajde, po luj – se kurrë s’din çka t’pret!”" },
        { src: emonaImg2, title: "Post 2", caption: "Këtu hyn loja n’aksion. Një animacion i shkurtë, i qartë e i rrjedhshëm, prej momentit që e blen çajin, deri te ngarkimi i kuponit e pritja për me fitu. Kjo video e kallxon krejt procesin me energji, me tone të freskëta e storytelling që lidhet me krejt brezat. Qëllimi: me i bo njerëzit me kuptu shpejt, me u ngroh n’vibe, e me u fut n’garë me lujt." },
        { src: emonaImg3, title: "Post 1", caption: "Krejt loja nis prej këtu. Një gotë çaji që gufon, avulli që s’pushon, e një sticker që t’kap sytë “Kush u nxeh n’çaj e don me fitu”. Ky post o teaser i lojës, e lëshon sinjalin e parë që diçka po vlon n’Emona. Me tone të ngrohta, pak humor, që me i bo krejt me u ndal n’scroll e me mendu: “hajde po shoh çka po ndodh e cka mundem me fitu.“" },
    ];

    const socialMediaEmona = [
        { src: socialMediaEmona18 },
        { src: socialMediaEmona17 },
        { src: socialMediaEmona16 },
        { src: socialMediaEmona15 },
        { src: socialMediaEmona14 },
        { src: socialMediaEmona13 },
        { src: socialMediaEmona12 },
        { src: socialMediaEmona11 },
        { src: socialMediaEmona10 },
        { src: socialMediaEmona9 },
        { src: socialMediaEmona8 },
        { src: socialMediaEmona7 },
        { src: socialMediaEmona6 },
        { src: socialMediaEmona5 },
        { src: socialMediaEmona4 },
        { src: socialMediaEmona1 },
        { src: socialMediaEmona2 },
        { src: socialMediaEmona3 },

    ];

    const videos = [
        { src: emonaVideo1 },
        { src: emonaVideo2 },
        { src: emonaVideo3 },
    ];

    const [itemsSoundOn, setItemsSoundOn] = useState(Array(items.length).fill(false));
    const [smSoundOn, setSmSoundOn] = useState(Array(socialMediaEmona.length).fill(false));
    const [videosSoundOn, setVideosSoundOn] = useState(Array(videos.length).fill(false));

    const toggleItemSound = (index) => {
        setItemsSoundOn((prev) => {
            const next = [...prev];
            next[index] = !next[index];
            return next;
        });
    };

    const toggleSmSound = (index) => {
        setSmSoundOn((prev) => {
            const next = [...prev];
            next[index] = !next[index];
            return next;
        });
    };

    const toggleVideoSound = (index) => {
        setVideosSoundOn((prev) => {
            const next = [...prev];
            next[index] = !next[index];
            return next;
        });
    };

    return (
        <div className="w-full bg-black px-4 lg:px-[55px] py-8 lg:py-12">
            <p className="text-white text-4xl lg:text-[55px] font-bold font-custom">{title}</p>
            <p className="text-white text-base lg:text-lg font-bold font-custom1 pt-4">{text1}</p>
            <div className="grid grid-cols-3 gap-2 pt-8 lg:pt-8">
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
                                <button
                                    onClick={() => toggleItemSound(index)}
                                    className="absolute bottom-2 right-2"
                                >
                                    <img
                                        className="object-cover h-4 w-4 lg:w-5 lg:h-5"
                                        src={itemsSoundOn[index] ? soundOnImage : soundOffImage}
                                        alt="Sound Toggle"
                                    />
                                </button>
                            </div>
                        ) : (
                            <img
                                src={item.src}
                                alt={`Emona ${index + 1}`}
                                className="w-full h-auto object-cover"
                            />
                        )}
                        <p className="text-gray-400 text-sm lg:text-xl font-custom tracking-[1px] mt-2">{item.title}</p>

                        <p className="text-white text-[8px] lg:text-sm mt-2 lg:pr-8 font-custom3">{item.caption}</p>
                    </div>
                ))}
            </div>

            <div>

<p className="text-gray-300 text-2xl lg:text-4xl font-bold font-custom pt-20 text-center">SOCIAL MEDIA THEME</p>
                <div className="grid grid-cols-3 gap-2 pt-8 lg:pt-12 max-w-7xl mx-auto">
                    {socialMediaEmona.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            {item.src.endsWith(".mp4") ? (
                                <div className="relative">
                                    <video
                                        src={item.src}
                                        autoPlay
                                        playsInline
                                        loop
                                        muted={!smSoundOn[index]}
                                        className="w-full h-auto object-cover"
                                    />
                                    <button
                                        onClick={() => toggleSmSound(index)}
                                        className="absolute bottom-2 right-2"
                                    >
                                        <img
                                            className="object-cover h-4 w-4 lg:w-5 lg:h-5"
                                            src={smSoundOn[index] ? soundOnImage : soundOffImage}
                                            alt="Sound Toggle"
                                        />
                                    </button>
                                </div>
                            ) : (
                                <img
                                    src={item.src}
                                    alt={`Social Media Emona ${index + 1}`}
                                    className="w-full h-auto object-cover"
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-3 gap-2 pt-16 max-w-7xl mx-auto">
                    {videos.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            {item.src.endsWith(".mp4") ? (
                                <div className="relative">
                                    <video
                                        src={item.src}
                                        autoPlay
                                        playsInline
                                        controls
                                        loop
                                        muted={!videosSoundOn[index]}
                                        className="w-full h-auto object-cover"
                                    />
                                    <button
                                        onClick={() => toggleVideoSound(index)}
                                        className="absolute bottom-2 right-2"
                                    >
                                        <img
                                            className="object-cover h-4 w-4 lg:w-5 lg:h-5"
                                            src={videosSoundOn[index] ? soundOnImage : soundOffImage}
                                            alt="Sound Toggle"
                                        />
                                    </button>
                                </div>
                            ) : (
                                <img
                                    src={item.src}
                                    alt={`Video ${index + 1}`}
                                    className="w-full h-auto object-cover"
                                />
                            )}
                        </div>
                    ))}
                </div>
                <p className="text-white text-sm lg:text-base font-custom3 pt-16">Ky social media theme është ndërtu rreth "Cajit të Zemrës", si një univers i vogël
                    vizual ku çdo post e çdo ngjyrë tregon ngrohtësi, dashni e pak nostalgji. Kemi dashtë me i lidh njerëzit me zemër, jo veç nëpërmjet çajit,
                    po edhe përmes ndjenjës që del prej çdo posti, çdo shprehje, e sidomos prej vetë frazës "Çaji i Zemrës". Ky s'është veç slogan, po është ftesë
                    me u ndal pak, me marrë frymë, me u kujtu pse momentet e vogla kanë rëndësi. E kemi përqafuar frymën e dimrit, ngjyrat e tokës e të dashurisë,
                    t'kuqe, t' ngrohta, pak vintage, me një estetikë që lidhet natyrshëm me njeriun.
                    Ilustrimet, motivet e zemrës, tripat dhe detajet e dizajnit janë ndërtu për me dhanë një ndjenjë lidhjeje midis njerëzve, si me u përcjell
                    nxehtësia prej zemrës në zemër, prej filxhanit në shpirt. Kështu, çdo post bëhet një copëz historie e përbashkët, një kombinim i dashnisë,
                    kujdesit dhe traditës, që e bon brandin me u ndi si diçka ma shumë se produkt, një përvojë që të ngroh, të kujton, e të lidh.
                </p>
                
                <div className="pt-12 lg:pt-16 w-full">
                    <a
                        href="https://lojaezemres.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-5 bg-gradient-to-r from-white to-gray-100 text-black font-bold text-base lg:text-xl font-custom hover:from-black hover:to-black hover:text-white border-2 border-white transition-all duration-300 uppercase tracking-widest shadow-lg hover:shadow-2xl transform hover:scale-105"
                    >
                        🔗 Shiko Web Aplikacionin - Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EmonaPresentation;

