import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const ScrollText = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [1, 0], [-105, 750]);
    // Array of services
    const services = [
        {
            title: 'Brandind & Identity',
            content: `At Trekuartista, we believe that every brand has a unique story to tell. We focus on crafting a visual identity that embodies your core values and resonates with your audience. From logo design to brand guidelines, the aim is to establish a distinctive presence that authentically represents you. Let’s work together to create a brand that makes a lasting impact!`
        },
        {
            title: 'Creative',
            content: `At Trekuartista, creativity knows no bounds! We thrive on turning ideas into captivating visuals that inspire and engage. Our talented team specializes in a wide range of creative solutions, from eye-catching designs to impactful content. We’re passionate about collaborating with you to craft unique and engaging projects that stand out. Let’s unleash our creativity together and make something amazing!`
        },
        {
            title: 'Animation & 3D Modeling',
            content: `Bringing ideas to life through stunning animation and intricate 3D modeling is what we do best. With a focus on the latest technology, the skilled team creates captivating visuals that engage and inspire. Whether it's for a promotional video, product visualization, or immersive storytelling, the commitment is to deliver high-quality animations that elevate any project.`
        },
        {
            title: 'UI & UX DESIGN',
            content: `Great design goes beyond aesthetics; it’s about creating seamless experiences that users love. The UI & UX design approach prioritizes understanding user behavior to develop interfaces that are both visually striking and highly functional. From initial concepts to final prototypes, every detail is crafted to ensure ease of use and delight.`
        },
        {
            title: 'Web development',
            content: `Building powerful and user-friendly websites is our passion. The web development process combines innovative technology with best practices to create responsive and dynamic sites that meet your unique needs. Whether it’s an e-commerce platform, a portfolio site, or a blog, every project is crafted with attention to detail and functionality.`
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
