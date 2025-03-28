import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

const ScrollText = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -800]);
    const titleRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (titleRef.current) observer.observe(titleRef.current);
        return () => observer.disconnect();
    }, []);

    const services = [
        {
            title: 'Branding & Identity',
            content: `At Trekuartista, we believe that every brand has a unique story to tell. We focus on crafting a visual identity that embodies your core values and resonates with your audience. From logo design to brand guidelines, the aim is to establish a distinctive presence that authentically represents you. Let's work together to create a brand that makes a lasting impact!`
        },
        {
            title: 'Creative',
            content: `At Trekuartista, creativity knows no bounds! We thrive on turning ideas into captivating visuals that inspire and engage. Our talented team specializes in a wide range of creative solutions, from eye-catching designs to impactful content. We're passionate about collaborating with you to craft unique and engaging projects that stand out. Let's unleash our creativity together and make something amazing!`
        },
        {
            title: 'Animation & 3D Modeling',
            content: `Bringing ideas to life through stunning animation and intricate 3D modeling is what we do best. With a focus on the latest technology, the skilled team creates captivating visuals that engage and inspire. Whether it's for a promotional video, product visualization, or immersive storytelling, the commitment is to deliver high-quality animations that elevate any project.`
        },
        {
            title: 'UI & UX DESIGN',
            content: `Great design goes beyond aesthetics; it's about creating seamless experiences that users love. The UI & UX design approach prioritizes understanding user behavior to develop interfaces that are both visually striking and highly functional. From initial concepts to final prototypes, every detail is crafted to ensure ease of use and delight.`
        },
        {
            title: 'Web development',
            content: `Building powerful and user-friendly websites is our passion. The web development process combines innovative technology with best practices to create responsive and dynamic sites that meet your unique needs. Whether it's an e-commerce platform, a portfolio site, or a blog, every project is crafted with attention to detail and functionality.`
        }
    ];

    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const nextService = () => {
        setDirection(1);
        setCurrentServiceIndex((prevIndex) => 
            prevIndex === services.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevService = () => {
        setDirection(-1);
        setCurrentServiceIndex((prevIndex) => 
            prevIndex === 0 ? services.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextService();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentServiceIndex]);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        },
        exit: (direction) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        })
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // NEW TEXT ANIMATION - SLICING REVEAL EFFECT
    const titleAnimation = {
        hidden: { 
            opacity: 0,
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'
        },
        visible: {
            opacity: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            transition: {
                duration: 1.2,
                ease: [0.2, 0.65, 0.3, 0.9],
                delay: 0.3
            }
        }
    };

    const wordContainer = {
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const wordAnimation = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "backOut"
            }
        }
    };

    const titleText = "WE CRAFT DIGITAL EXPERIENCES".split(" ");

    return (
        <div className="bg-black overflow-hidden">
            {/* Hero Text Section with NEW animation */}
            <div 
                ref={titleRef}
                className="relative pt-16 lg:pt-24 flex items-center justify-center overflow-hidden"
            >
                <div className="relative w-full px-4 lg:px-[55px]">
                    <motion.div
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={titleAnimation}
                        className="overflow-hidden"
                    >
                        <motion.h1 
                            variants={wordContainer}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            className="text-white tracking-[1.5px] font-custom text-4xl lg:text-[60px] 2xl:text-[95px] leading-tight"
                        >
                            {titleText.map((word, i) => (
                                <motion.span
                                    key={i}
                                    variants={wordAnimation}
                                    className="inline-block mr-4 last:mr-0"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </motion.div>

                    {/* Decorative elements */}
               
                </div>
            </div>

            {/* Services Section (unchanged) */}
            <div className="relative px-5 lg:px-[60px] py-20 lg:py-[120px] 2xl:py-[150px] flex flex-col lg:flex-row gap-12 lg:gap-16">
                <div className="lg:w-1/2 relative">
                    <AnimatePresence custom={direction} mode="wait">
                        <motion.h2
                            key={currentServiceIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="font-custom text-4xl lg:text-[45px] 2xl:text-[55px] leading-tight tracking-[1px] text-white mb-8"
                        >
                            {services[currentServiceIndex].title}
                        </motion.h2>
                    </AnimatePresence>
                    
                    <div className="flex gap-4 mt-12 lg:absolute lg:bottom-0">
                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevService}
                            className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white transition-all"
                            aria-label="Previous service"
                        >
                            ←
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextService}
                            className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white transition-all"
                            aria-label="Next service"
                        >
                            →
                        </motion.button>
                    </div>
                </div>

                <div className="lg:w-1/2 relative">
                    <AnimatePresence custom={direction}>
                        <motion.div
                            key={currentServiceIndex}
                            custom={direction}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            className="font-custom1 text-[16px] lg:text-[18px] 2xl:text-[20px] text-white/80 leading-normal lg:leading-normal"
                        >
                            {services[currentServiceIndex].content}
                        </motion.div>
                    </AnimatePresence>
                    
                    <div className="flex gap-2 mt-12 justify-center lg:justify-start">
                        {services.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentServiceIndex ? 1 : -1);
                                    setCurrentServiceIndex(index);
                                }}
                                className="h-1"
                                initial={{ width: 20, backgroundColor: "#555" }}
                                animate={{ 
                                    width: index === currentServiceIndex ? 40 : 20,
                                    backgroundColor: index === currentServiceIndex ? "#fff" : "#555"
                                }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ backgroundColor: "#aaa" }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
            <motion.div 
                className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: [0, 0.3, 0],
                    transition: { duration: 4, repeat: Infinity }
                }}
            />
        </div>
    );
};

export default ScrollText;