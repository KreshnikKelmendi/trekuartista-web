import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const ScrollText = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [1, 0], [-105, 750]);
    // Array of services
    const services = [
        {
            title: 'Brandind & Identity',
            content: `Having understood your requirements we embark on a creative journey to develop design ideas. 
            We utilize collaborative brainstorming and prototyping, which in return breathes life into the concepts and we further refine them with valuable user feedback. 
            This iterative process ensures that our final designs are user-centered and all options have been explored to deliver cutting-edge solutions that engage and convert.`
        },
        {
            title: 'Creative',
            content: `Having understood your requirements we embark on a creative journey to develop design ideas. 
            We utilize collaborative brainstorming and prototyping, which in return breathes life into the concepts and we further refine them with valuable user feedback. 
            This iterative process ensures that our final designs are user-centered and all options have been explored to deliver cutting-edge solutions that engage and convert`
        },
        {
            title: 'Animation & 3D Modeling',
            content: `Having understood your requirements we embark on a creative journey to develop design ideas. 
            We utilize collaborative brainstorming and prototyping, which in return breathes life into the concepts and we further refine them with valuable user feedback. 
            This iterative process ensures that our final designs are user-centered and all options have been explored to deliver cutting-edge solutions that engage and convert`
        },
        {
            title: 'UI & UX DESIGN',
            content: `Having understood your requirements we embark on a creative journey to develop design ideas. 
            We utilize collaborative brainstorming and prototyping, which in return breathes life into the concepts and we further refine them with valuable user feedback. 
            This iterative process ensures that our final designs are user-centered and all options have been explored to deliver cutting-edge solutions that engage and convert`
        },
        {
            title: 'Web development',
            content: `Our team of expert developers and designers provides a comprehensive range of web development services. We build dynamic, responsive, and user-friendly web applications tailored to your business needs. Our solutions ensure seamless user experiences and are optimized for performance and security.`
        }
    ];

    // State to keep track of current service index
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const [blurContent, setBlurContent] = useState(true);

    // Function to handle next service
    const nextService = () => {
        setCurrentServiceIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
        setBlurContent(true);
        setTimeout(() => {
            setBlurContent(false);
        }, 1000);
    };

    // Function to handle previous service
    const prevService = () => {
        setCurrentServiceIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
        setBlurContent(true);
        setTimeout(() => {
            setBlurContent(false);
        }, 1000);
    };

    // Automatically change services every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextService();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentServiceIndex]);

    return (
        <>
            <div className='bg-black lg:py-[102px] overflow-hidden textTransition justify-center items-center mx-auto text-center'>
                 <motion.h1 className='hidden lg:flex text-white font-custom text-4xl lg:text-[60px] 2xl:text-[95px]' style={{ x }}>We craft digital experiences</motion.h1>
            </div>
            <div className='bg-black pt-16 lg:py-[102px] lg:hidden justify-center items-center mx-auto px-4'>
                 <motion.h1 className=' text-white font-custom text-4xl lg:text-[60px] 2xl:text-[95px]'>We craft digital experiences</motion.h1>
            </div>
            

            {/* Display current service with smooth transitions */}
            <div className='text-white bg-black lg:h-[60vh] px-5 lg:px-[60px] py-16 lg:py-[100px] flex flex-col lg:flex-row lg:justify-between'>
                <div className='lg:w-1/2'>
                    <p className='font-custom text-4xl lg:text-[45px] leading-tight w-fit lg:w-[520px]'>{services[currentServiceIndex].title}</p>
                </div>
                <div className='lg:w-1/2 py-5'>
                    <p className={`font-custom1 lg:w-[520px] 2xl:w-[665px] lg:h-[342px] text-[16px] transition-all duration-1000 ${blurContent ? '' : ''}`}>
                        {services[currentServiceIndex].content}
                    </p>
                </div>
                <div className='lg:flex flex justify-center lg:justify-normal flex-row lg:flex-col gap-y-2 gap-x-2 lg:gap-x-0'>
                    {services.map((service, index) => (
                        <button
                            key={index}
                            className={`cursor-pointer lg:px-[2px] px-[15px] py-[2px] lg:py-4 ${currentServiceIndex === index ? 'bg-white' : 'bg-gray-500'}`}
                            onClick={() => {
                                setCurrentServiceIndex(index);
                                setBlurContent(true);
                                setTimeout(() => {
                                    setBlurContent(false);
                                }, 1000);
                            }}
                        ></button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ScrollText;
