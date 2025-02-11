import React, { useEffect, useRef, useState } from 'react'
import logo from "../Assets/treku circle.png";
import DataJetSocialMedia from './DataJetSocialMedia';
import { FaCalendar, FaCalendarCheck } from 'react-icons/fa';

const DataJetPresentation = ({ title, text1, text2, media, fullScreenItem }) => {
    const videoRef1 = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isFullScreen, setIsFullScreen] = useState(false); // state for full-screen modal

    const toggleMute = () => {
        setIsMuted((prevMuted) => {
            const newMuted = !prevMuted;
            if (videoRef1.current) {
                videoRef1.current.muted = newMuted;
            }
            return newMuted;
        });
    };

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    // Handle escape key press to close the full-screen modal
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === "Escape") {
                setIsFullScreen(false); // Close modal if escape is pressed
            }
        };

        // Add event listener for escape key
        if (isFullScreen) {
            window.addEventListener("keydown", handleEscKey);
        }

        // Clean up the event listener when the component unmounts or modal is closed
        return () => {
            window.removeEventListener("keydown", handleEscKey);
        };
    }, [isFullScreen]);
    return (
        <div className="w-full">
            <div className='flex justify-center'>
                <img src={logo} alt='' className='py-5 lg:py-10 w-32 lg:w-52' />
            </div>
            <div className=' pb-6 pt-0 lg:pt-10'>
                <div className='text-white lg:w-1/2'>
                    <p className="text-4xl lg:text-6xl font-custom3 text-left">{title}</p>
                    <p className='pt-6 font-custom4 text-gray-500 text-sm lg:text-base'>To reflect <span className='font-extrabold text-[#68A5FC]'>DataJet’s</span> new identity, we have developed a <span className='text-white'> modern,
                        dynamic, </span> and <span className='text-white font-extrabold'>direct communication style.</span> <br /> <br />
                        Our approach focuses on <span className='text-white font-extrabold'>simplicity, innovation,</span> and <span className='text-white font-extrabold'>global connectivity</span>, ensuring that <span className='text-white font-extrabold'>every message</span> is <span className='text-white font-extrabold'>clear, engaging,</span> and <span className='text-white font-extrabold'>easy to understand</span> for our users. <br /> <br />
                        Through our posts, we will introduce the <span className='text-white font-extrabold'>rebrand,</span> highlight the <span className='text-white font-extrabold'>benefits</span> of <span className='text-[#68A5FC] font-extrabold'>DataJet eSIM,</span> showcase its <span className='text-white font-extrabold'>advantages,</span> and <span className='text-white font-extrabold'>present exclusive offers.</span></p>

                </div>
                <div className='w-full pt-16 lg:pt-20'>
                    <p className="text-4xl lg:text-6xl font-custom3 text-white uppercase text-left">COMMUNICATION STYLE</p>
                    <div className='lg:w-full pt-6'>
                        <p className='font-custom4 text-sm lg:text-base text-gray-500 lg:w-1/2'>
                            For the launch of <span className='text-[#68A5FC] font-extrabold'>Datajet’s eSIM</span><span className='text-white font-extrabold'>rebrand,</span> the <span className='text-white font-extrabold'>first three posts</span> will feature <span className='text-white font-extrabold'>engaging animations,</span> showcasing our <span className='text-white font-extrabold'>new logo</span> and <span className='text-white font-extrabold'>refreshed identity.</span> <br /> <br />
                            These will be the introduction to our <span className='text-white font-extrabold'>modern, dynamic communication style</span> that highlights
                            <span className='text-[#68A5FC] font-extrabold'> DataJet’s</span> innovative approach.<br /> <br />
                            Following these, the next posts will <span className='text-white font-extrabold'>focus on building brand awareness,</span> <span className='text-white font-extrabold'>teasing</span> the <span className='text-white font-extrabold'>upcoming</span> <span className='text-[#68A5FC] font-extrabold'>DataJet</span> app, and emphasizing the <span className='text-white font-extrabold'>ease of use</span> and <span className='text-white font-extrabold'>efficiency</span> of the <span className='text-[#68A5FC] font-extrabold'>DataJet</span> eSIM.<br/> <br />
                            We will show how <span className='text-white font-extrabold'>our technology</span> enables <span className='text-white font-extrabold'>seamless global connectivity,</span> positioning <span className='text-[#68A5FC] font-extrabold'>DataJet</span> as the
                            <span className='text-white font-extrabold'>most efficient</span> and <span className='text-white font-extrabold'>user-friendly solution</span> for staying <span className='text-white font-extrabold'>connected anywhere.</span> <br /> <br />
                            <span className='text-pink-600 font-extrabold'>This is the start of a new chapter of</span> <span className='font-extrabold text-[#68A5FC]'>Datajet’s eSIM.</span>
                        </p>
                    </div>
                </div>
            </div>
            <DataJetSocialMedia />
            <div className="pt-0 lg:py-10 ">
                <div className="block space-y-8">
                    <p className='text-white font-custom3 text-4xl lg:text-6xl'>POST DESCRIPTIONS</p>
                    {/* Number 1 */}
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-[#D2BADD] text-black flex items-center justify-center font-bold font-custom3 text-3xl">1</div>
                        <div className='flex flex-col w-full lg:w-[100%]'>
                            <p className='font-custom4 text-gray-500 font-bold text-sm lg:text-xl uppercase'>POST 1:
                            Introducing the Rebrand (New Logo & Identity)</p>
                            <p className='font-custom4 text-green-500 underline underline-offset-4 font-bold text-sm lg:text-sm flex items-center'>Posting: 12.02.2025<FaCalendarCheck className='ml-[4px]' /></p>
                            <p className="font-custom4 text-white text-sm lg:text-base">A new look, the same limitless connection! <span className='text-pink-600 ml-4'> // Animation</span></p>
                        </div>
                    </div>
                    {/* Number 2 */}
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-[#D2BADD] text-black flex items-center justify-center font-bold font-custom3 text-3xl">2</div>
                        <div className='flex flex-col w-full lg:w-[100%]'>
                            <p className='font-custom4 font-bold text-gray-500 text-sm lg:text-xl uppercase'>POST 2:
                            Introducing Icons of Datajet's eSIM  (Europe, Africa, Asia, ...)</p>
                            <p className='font-custom4 text-green-500 underline underline-offset-4 font-bold text-sm lg:text-sm flex items-center'>Posting: 14.02.2025<FaCalendarCheck className='ml-[4px]' /></p>

                            <p className="font-custom4 text-sm lg:text-base text-white">This post is currently in work with some final pieces <span className='text-pink-600 ml-4'> // Animation</span></p>
                        </div>
                    </div>
                    {/* Number 3 */}
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-[#D2BADD] text-black flex items-center justify-center font-bold font-custom3 text-3xl">3</div>
                        <div className='flex flex-col w-full lg:w-[100%]'>
                            <p className='font-custom4 text-gray-500 font-bold text-sm lg:text-xl uppercase'>POST 3:
                            Introducing eSIM app teaser – The Technology That Changes Everything</p>
                            <p className='font-custom4 text-green-500 underline underline-offset-4 font-bold text-sm lg:text-sm flex items-center'>Posting: 16.02.2025<FaCalendarCheck className='ml-[4px]' /></p>

                            <p className="font-custom4 text-white text-sm lg:text-base">DataJet eSIM is the fastest way to get internet anywhere in the world. <span className='text-pink-600 ml-4'> // Animation</span></p>
                        </div>
                    </div>
                    {/* Number 4 */}
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-[#D2BADD] text-black flex items-center justify-center font-bold font-custom3 text-3xl">4</div>
                        <div className='flex flex-col w-full lg:w-[100%]'>
                            <p className='font-custom4 text-gray-500 font-bold text-sm lg:text-xl uppercase'>POST 4:</p>
                            <p className='font-custom4 text-green-500 underline underline-offset-4 font-bold text-sm lg:text-sm flex items-center'>Posting: 17.02.2025<FaCalendarCheck className='ml-[4px]' /></p>

                            <p className="font-custom4 text-white text-sm lg:text-base">New Identity of DataJet App / Rebrand</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-[#D2BADD] text-black flex items-center justify-center font-bold font-custom3 text-3xl">5</div>
                        <div className='flex flex-col w-full lg:w-[100%]'>
                            <p className='font-custom4 text-gray-500 font-bold text-sm lg:text-xl uppercase'>POST 5: Using DataJet – For Business & Travel</p>
                            <p className='font-custom4 text-green-500 font-bold underline underline-offset-4 text-sm lg:text-sm flex items-center'>Posting: 19.02.2025<FaCalendarCheck className='ml-[4px]' /></p>

                            <p className="font-custom4 text-white text-sm lg:text-base">Just activate DataJet and work from anywhere.</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-[#D2BADD] text-black flex items-center justify-center font-bold font-custom3 text-3xl">6</div>
                        <div className='flex flex-col w-full lg:w-[100%]'>
                            <p className='font-custom4 text-gray-500 font-bold text-sm lg:text-xl uppercase'>POST 6:</p>
                            <p className='font-custom4 text-green-500 font-bold underline underline-offset-4 text-sm lg:text-sm flex items-center'>Posting: 21.02.2025<FaCalendarCheck className='ml-[4px]' /></p>

                            <p className="font-custom4 text-white text-sm lg:text-base">Brand Awareness, Slogan, Quote.</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-[#D2BADD] text-black flex items-center justify-center font-bold font-custom3 text-3xl">7</div>
                        <div className='flex flex-col w-full lg:w-[100%]'>
                            <p className='font-custom4 text-gray-500 font-bold text-sm lg:text-xl uppercase'>POST 7:
                            Advantages of DataJet – Flexibility & Speed</p>
                            <p className='font-custom4 text-green-500 font-bold underline underline-offset-4 text-sm lg:text-sm flex items-center'>Posting: 24.02.2025<FaCalendarCheck className='ml-[4px]' /></p>

                            <p className="font-custom4 text-white text-sm lg:text-base">The smartest solution for global internet!</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-[#D2BADD] text-black flex items-center justify-center font-bold font-custom3 text-3xl">8</div>
                        <div className='flex flex-col w-full lg:w-[100%]'>
                            <p className='font-custom4 text-gray-500 font-bold text-sm lg:text-xl uppercase'>POST 8:</p>
                            <p className='font-custom4 text-green-500 font-bold underline underline-offset-4 text-sm lg:text-sm flex items-center'>Posting: 26.02.2025<FaCalendarCheck className='ml-[4px]' /></p>

                            <p className="font-custom4 text-white text-sm lg:text-base">Places where Datajet's eSIM is available.</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-[#D2BADD] text-black flex items-center justify-center font-bold font-custom3 text-3xl">9</div>
                        <div className='flex flex-col w-full lg:w-[100%]'>
                            <p className='font-custom4 text-gray-500 font-bold text-sm lg:text-xl uppercase'>POST 9:</p>
                            <p className='font-custom4 text-green-500 font-bold underline underline-offset-4 text-sm lg:text-sm flex items-center'>Posting: 28.02.2025<FaCalendarCheck className='ml-[4px]' /></p>

                            <p className="font-custom4 text-white text-sm lg:text-base">The Power of DataJet</p>
                        </div>
                    </div>

                    <p className='text-pink-600 font-custom3 text-sm lg:text-base'>The final three posts <span className='text-white'> (10,11,12)</span> will be posted and adapted for offers and packages of <span className='text-white'>Datajet's eSIM.</span></p>

                    <div className='text-center flex justify-center items-center pt-6 lg:py-16'>
                        <p className='text-white font-custom3 text-sm lg:text-base lg:w-1/2 '>The Social Media journey starts with exciting animations, and moving forward, we’ll keep going with exclusive offers, new GB packages, and a seamless app experience. <br /> <br />With our new identity, advanced eSIM technology, and the upcoming app and website launch,DataJet will position itself as a leader in the eSIM industry.</p>
                    </div>
                    <p className='text-white text-5xl py-8 font-custom3 text-center'>THANK YOU</p>
                </div>
            </div>
        </div>
    )
}

export default DataJetPresentation