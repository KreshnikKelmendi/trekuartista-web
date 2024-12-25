import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const ScrollText = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [1, 0], [-105, 750]);

    const services = [
        {
            title: 'Branding & Identity',
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

    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const [blurContent, setBlurContent] = useState(true);

    const nextService = () => {
        setCurrentServiceIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
        setBlurContent(true);
        setTimeout(() => {
            setBlurContent(false);
        }, 1000);
    };

    const prevService = () => {
        setCurrentServiceIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
        setBlurContent(true);
        setTimeout(() => {
            setBlurContent(false);
        }, 1000);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextService();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentServiceIndex]);

    return (
        <>
            <div className='bg-black lg:py-[102px] overflow-hidden textTransition justify-center items-center mx-auto text-center'>
                <motion.h1 
                    className='hidden lg:flex text-white font-custom text-4xl lg:text-[60px] 2xl:text-[95px]'
                    style={{ x }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    We craft digital experiences
                </motion.h1>
            </div>
            <div className='bg-black pt-16 lg:py-[102px] lg:hidden justify-center items-center mx-auto px-4'>
                <motion.h1 className='text-white font-custom text-4xl lg:text-[60px] 2xl:text-[95px] tracking-[1px]'>
                    We craft digital experiences
                </motion.h1>
            </div>

            <div className='text-white bg-black lg:h-[60vh] px-5 lg:px-[60px] py-16 lg:py-[100px] flex flex-col lg:flex-row lg:justify-between'>
                <div className='lg:w-1/2'>
                    <motion.p 
                        className='font-custom text-4xl lg:text-[45px] leading-tight w-fit lg:w-[520px] tracking-[1px] lg:tracking-[0px]'
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        {services[currentServiceIndex].title}
                    </motion.p>
                </div>
                <div className='lg:w-1/2 py-5'>
                    <motion.p 
                        className={`font-custom1 lg:w-[520px] 2xl:w-[665px] lg:h-[342px] text-[16px] transition-all duration-1000`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        {services[currentServiceIndex].content}
                    </motion.p>
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
