import React, { useRef } from 'react';
import ysabelLogo from '../Components/Assets/ysabel-logo-1.png';
import video1 from '../Components/Assets/ysabel-work/ysabel-1-strategy.mp4';
import video2 from '../Components/Assets/ysabel-work/10.mp4';
import video3 from '../Components/Assets/ysabel-work/ScreenRecording_02-18-2026 12-25-29_1.mp4';
import video4 from '../Components/Assets/ysabel-work/ysabel-4-strategy.mp4';

import italian1 from '../Components/Assets/ysabel-work/ysabel-strategy-2.mp4';
import italian2 from '../Components/Assets/ysabel-work/italian-soul-1.webp';
import italian3 from '../Components/Assets/ysabel-work/italian-soul-2.webp';
import italian4 from '../Components/Assets/ysabel-work/ysabel-strategy-3.mp4';
import italian5 from '../Components/Assets/ysabel-work/987.mp4';
import video5 from "../Components/Assets/ysabel-work/12345678.mp4";
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
import video13 from "../Components/Assets/ysabel-work/10.mp4";

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

    const asianMedia = [video5, imageasian];

    const asianMedia2 = [imageasian1, video6];

    const gardenVideos = [video8, gardenImage, video9];

    const gardenVideos2 = [video10, gardenImage2, video11];

    const behindTheCraft = [video12, video13];

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

                    <div className="space-y-10">
                        <div>
                            <h3 className="text-2xl lg:text-[32px] font-bold font-custom5 leading-tight">1. The World of Ysabel</h3>
                            <p className="text-[14px] lg:text-[16px] font-custom6 leading-relaxed mt-1 text-white/90">Rubrike brandi dhe identiteti. Video cinematike me ambient, drite, hije dhe tekst poetik. Foto Artisike dhe video detaje se qka te afron ambienti perveq ushqimit, po si nje experience arkitekture dhe kulture, elemente mistike qe eshte arma me forte e Ysabel.</p>
                        </div>

                        <div>
                            <h3 className="text-2xl lg:text-[32px] font-bold font-custom5 leading-tight">2. Italian Soul <span className="text-sm lg:text-xl font-custom4">(Kati 1)</span></h3>
                            <p className="text-[14px] lg:text-[16px] font-custom6 leading-relaxed mt-1 text-white/90">Fokus ne ushqimin italian, emocione, detaje te duarve dhe emocion te njerzve, vere dhe atmosfer te ngrohte.</p>
                        </div>

                        <div>
                            <h3 className="text-2xl lg:text-[32px] font-bold font-custom5 leading-tight">3. Asian Ritual <span className="text-sm lg:text-xl font-custom4">(Kati 2)</span></h3>
                            <p className="text-[14px] lg:text-[16px] font-custom6 leading-relaxed mt-1 text-white/90">Presentim i ushqimit si bundle po edhe vetem se nje piate, Minimalizem, precision, teknik, plating elegant dhe tone te qeta premium feel.</p>
                        </div>

                        <div>
                            <h3 className="text-2xl lg:text-[32px] font-bold font-custom5 leading-tight">4. Rooftop Society <span className="text-sm lg:text-xl font-custom4">(Kati 3)</span></h3>
                            <p className="text-[14px] lg:text-[16px] font-custom6 leading-relaxed mt-1 text-white/90">Skyline, sunset, DJ, cocktails dhe energji urbane, vallzim dhe presentim te ushqimit ne rroof ne atmosfere.</p>
                        </div>

                        <div>
                            <h3 className="text-2xl lg:text-[32px] font-bold font-custom5 leading-tight">5. Behind the Craft</h3>
                            <p className="text-[14px] lg:text-[16px] font-custom6 leading-relaxed mt-1 text-white/90">Pamje nga kuzhina, chef ne veprim dhe procesi i pergatitjes.</p>
                        </div>

                        <div>
                            <h3 className="text-2xl lg:text-[32px] font-bold font-custom5 leading-tight">6. Emotion & Experience</h3>
                            <p className="text-[14px] lg:text-[16px] font-custom6 leading-relaxed mt-1 text-white/90">Momente me miq, gezim, lidhje dhe perjetim emocional.</p>
                        </div>

                        <div>
                            <h3 className="text-2xl lg:text-[32px] font-bold font-custom5 leading-tight">7. Food Presentation</h3>
                            <p className="text-[14px] lg:text-[16px] font-custom6 leading-relaxed mt-1 text-white/90">Momente me miq, gezim, lidhje dhe perjetim emocional.</p>
                        </div>
                    </div>
                </div>

                {/* 1. Rubrika Kryesore - The World of Ysabel */}
                <div className="mb-12 mt-20">
                    <p className="text-2xl lg:text-3xl font-bold font-custom5 py-3 border-b border-white/30 mb-10">
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
                    <p className='text-sm lg:text-[17px] leading-relaxed mt-10 font-custom6 mb-10'>
                        Ky dokument paraqet strategjine e qartë të komunikimit dhe publikimit të përmbajtjes për Ysabel Society, një koncept unik i ndarë në tre kate: restaurant italian, restaurant asian dhe rooftop garden me jetë nate..
                    </p>
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
                    <p className="text-2xl lg:text-3xl font-bold font-custom5 py-3 border-b border-white/30 mb-10">
                        2. Italian Soul
                    </p>

                    <div className="grid grid-cols-2 gap-3" style={{ gridTemplateRows: 'auto auto auto auto auto auto' }}>
                        <div className="overflow-hidden" style={{ gridColumn: '1', gridRow: '1 / 3' }}>
                            {renderMedia(italian1, 10)}
                        </div>
                        <div className="flex items-end pb-4 px-2" style={{ gridColumn: '2', gridRow: '1' }}>
                            <p className="text-[13px] lg:text-[15px] font-custom6 leading-relaxed text-white/80">
                            Fokus ne ushqimin italian, emocione, detaje te duarve dhe emocion te njerzve, vere dhe atmosfer te ngrohte.
                            Fokus ne ushqimin italian, emocione, detaje te duarve dhe emocion te njerzve, vere dhe atmosfer te ngrohte.
                            </p>
                           
                        </div>
                        <div className="overflow-hidden" style={{ gridColumn: '2', gridRow: '2 / 4' }}>
                            {renderMedia(italian2, 11)}
                        </div>
                        <div className="overflow-hidden" style={{ gridColumn: '1', gridRow: '3 / 5' }}>
                            {renderMedia(italian3, 12)}
                        </div>
                        <div className="overflow-hidden" style={{ gridColumn: '2', gridRow: '4 / 6' }}>
                            {renderMedia(italian4, 13)}
                        </div>
                        <div className="overflow-hidden" style={{ gridColumn: '1', gridRow: '5 / 7' }}>
                            {renderMedia(italian5, 14)}
                        </div>
                        <div className="flex items-start pt-4 px-2" style={{ gridColumn: '2', gridRow: '6' }}>
                            <p className="text-[13px] lg:text-[15px] font-custom6 leading-relaxed text-white/80">
                            Prezantim i ushqimit me detaje, plating elegant dhe ndjesi premium. Çdo pjate tregon nje histori te veten.
                            Prezantim i ushqimit me detaje, plating elegant dhe ndjesi premium. Çdo pjate tregon nje histori te veten.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. Asian Ritual */}
                <div className="mb-12 mt-20">
                    <p className="text-2xl lg:text-3xl font-bold font-custom5 py-3 border-b border-white/30 mb-10">
                        3. Asian Ritual
                    </p>

                    <div className="grid grid-cols-2">
                        {asianMedia.map((src, index) => (
                            <div key={index} className="overflow-hidden">
                                {renderMedia(src, 20 + index)}
                            </div>
                        ))}
                    </div>
                    <p className='text-sm lg:text-[17px] leading-relaxed mt-10 font-custom6 mb-10'>
                        Ky dokument paraqet strategjine e qartë të komunikimit dhe publikimit të përmbajtjes për Ysabel Society, një koncept unik i ndarë në tre kate: restaurant italian, restaurant asian dhe rooftop garden me jetë nate..
                    </p>
                    <div className="relative">
                        <video
                            ref={el => videoRefs.current[3] = el}
                            src={video4}
                            autoPlay
                            loop
                            playsInline
                            muted
                            className="w-full object-cover"
                        />
                        <button
                            onClick={() => togglePlay(3)}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        >
                            <img src={ysabelLogo} alt="Play" className="w-16 lg:w-20 drop-shadow-lg" />
                        </button>
                    </div>
                    <p className='text-sm lg:text-[17px] leading-relaxed mt-10 font-custom6 mb-10'>
                        Ky dokument paraqet strategjine e qartë të komunikimit dhe publikimit të përmbajtjes për Ysabel Society, një koncept unik i ndarë në tre kate: restaurant italian, restaurant asian dhe rooftop garden me jetë nate..
                    </p>
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
                    <p className="text-2xl lg:text-3xl font-bold font-custom5 py-3 border-b border-white/30 mb-10">
                        4. Rooftop Society
                    </p>

                      <div className="grid grid-cols-3">
                        {gardenVideos.map((src, index) => (
                            <div key={index} className="overflow-hidden">
                                {renderMedia(src, 20 + index)}
                            </div>
                        ))}
                    </div>
                    <p className='text-sm lg:text-[17px] leading-relaxed mt-10 font-custom6 mb-10'>
                        Ky dokument paraqet strategjine e qartë të komunikimit dhe publikimit të përmbajtjes për Ysabel Society, një koncept unik i ndarë në tre kate: restaurant italian, restaurant asian dhe rooftop garden me jetë nate..
                    </p>
                    <div className="grid grid-cols-3">
                        {gardenVideos2.map((src, index) => (
                            <div key={index} className="overflow-hidden">
                                {renderMedia(src, 20 + index)}
                            </div>
                        ))}
                    </div>
                </div>
              
                <div className="mb-12 mt-20">
                    <p className="text-2xl lg:text-3xl font-bold font-custom5 py-3 border-b border-white/30 mb-10">
                        5. Behind the Craft
                    </p>

                      <div className="grid grid-cols-3">
                        {behindTheCraft.map((src, index) => (
                            <div key={index} className="overflow-hidden">
                                {renderMedia(src, 20 + index)}
                            </div>
                        ))}
                    </div>
                    <p className='text-sm lg:text-[17px] leading-relaxed mt-10 font-custom6 mb-10'>
                        Ky dokument paraqet strategjine e qartë të komunikimit dhe publikimit të përmbajtjes për Ysabel Society, një koncept unik i ndarë në tre kate: restaurant italian, restaurant asian dhe rooftop garden me jetë nate..
                    </p>
                    <div className="grid grid-cols-3">
                        {gardenVideos2.map((src, index) => (
                            <div key={index} className="overflow-hidden">
                                {renderMedia(src, 20 + index)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YsabelMarketingStrategy;
