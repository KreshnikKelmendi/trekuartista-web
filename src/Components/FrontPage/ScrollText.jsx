import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

const ScrollText = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
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
            subtitle: 'Visual Storytelling',
            content: `At Trekuartista, we believe that every brand has a unique story to tell. We focus on crafting a visual identity that embodies your core values and resonates with your audience. From logo design to brand guidelines, the aim is to establish a distinctive presence that authentically represents you.`,
            color: '#FFFFFF'
        },
        {
            title: 'Creative Design',
            subtitle: 'Innovation Meets Art',
            content: `At Trekuartista, creativity knows no bounds! We thrive on turning ideas into captivating visuals that inspire and engage. Our talented team specializes in a wide range of creative solutions, from eye-catching designs to impactful content.`,
            color: '#FFFFFF'
        },
        {
            title: 'Animation & 3D',
            subtitle: 'Bringing Ideas to Life',
            content: `Bringing ideas to life through stunning animation and intricate 3D modeling is what we do best. With a focus on the latest technology, the skilled team creates captivating visuals that engage and inspire.`,
            color: '#FFFFFF'
        },
        {
            title: 'UI & UX Design',
            subtitle: 'User-Centered Solutions',
            content: `Great design goes beyond aesthetics; it's about creating seamless experiences that users love. The UI & UX design approach prioritizes understanding user behavior to develop interfaces that are both visually striking and highly functional.`,
            color: '#FFFFFF'
        },
        {
            title: 'Web Development',
            subtitle: 'Digital Excellence',
            content: `Building powerful and user-friendly websites is our passion. The web development process combines innovative technology with best practices to create responsive and dynamic sites that meet your unique needs.`,
            color: '#FFFFFF'
        }
    ];

    // New animation variants
    const heroVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.2,
                staggerChildren: 0.2
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const slideVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const scaleVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "backOut"
            }
        }
    };

    return (
        <div className="relative bg-black min-h-screen overflow-hidden">
            {/* Hero Section - New Asymmetric Design */}
            <div 
                ref={titleRef}
                className="relative min-h-screen flex items-center"
            >
                {/* Background Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
                
                <div className="relative w-full px-4 lg:px-[55px]">
                    <motion.div
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={heroVariants}
                        className="grid lg:grid-cols-12 gap-8 items-center"
                    >
                        {/* Left Column - Main Content */}
                        <motion.div variants={slideVariants} className="lg:col-span-7">
                            {/* <motion.div
                                variants={textVariants}
                                className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 font-custom1 tracking-wider mb-8"
                            >
                                DIGITAL CREATIVE AGENCY
                            </motion.div> */}
                            
                            <motion.h1
                                variants={textVariants}
                                className="text-5xl lg:text-7xl 2xl:text-8xl font-custom text-white leading-none mb-8"
                            >
                                <span className="block">WE CRAFT</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">DIGITAL</span>
                                <span className="block">EXPERIENCES</span>
                            </motion.h1>
                            
                            <motion.p
                                variants={textVariants}
                                className="text-sm lg:text-lg text-white/60 font-custom1 leading-relaxed mb-12 max-w-2xl"
                            >
                                Transforming ideas into exceptional digital experiences that inspire, engage, and deliver measurable results.
                            </motion.p>
                            
                            <motion.div variants={textVariants} className="flex flex-wrap gap-6">
                                {/* <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-8 py-4 bg-white text-black font-custom1 text-lg tracking-wider overflow-hidden"
                                >
                                    <span className="relative z-10">START PROJECT</span>
                                    <motion.div
                                        className="absolute inset-0 bg-black"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.span
                                        className="absolute inset-0 flex items-center justify-center text-white font-custom1 text-lg tracking-wider"
                                        initial={{ x: "100%" }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        START PROJECT
                                    </motion.span>
                                </motion.button>
                                
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 border-2 border-white/30 text-white font-custom1 text-lg tracking-wider hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    VIEW WORK
                                </motion.button> */}
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Visual Element with 15+ Years Experience and services around the circle */}
                        <motion.div variants={scaleVariants} className="lg:col-span-5 flex flex-col items-center">
                            <div className="relative flex items-center justify-center">
                                {/* Services around the circle */}
                                <div className="absolute inset-0 w-full h-full pointer-events-none">
                                    {services.map((service, idx) => {
                                        // Calculate angle for each service
                                        const angle = (360 / services.length) * idx - 90; // -90 to start from top
                                        const radius = window.innerWidth < 1024 ? 120 : 180; // smaller radius for mobile
                                        const rad = (angle * Math.PI) / 180;
                                        const x = Math.cos(rad) * radius;
                                        const y = Math.sin(rad) * radius;
                                        return (
                                            <div
                                                key={idx}
                                                style={{
                                                    position: 'absolute',
                                                    left: `calc(50% + ${x}px)` ,
                                                    top: `calc(50% + ${y}px)` ,
                                                    transform: 'translate(-50%, -50%)',
                                                    color: service.color + 'CC', // softer color with transparency
                                                    whiteSpace: 'nowrap',
                                                    fontWeight: 600,
                                                    fontSize: window.innerWidth < 1024 ? '0.9rem' : '1.2rem',
                                                    pointerEvents: 'auto',
                                                    textShadow: '0 1px 4px rgba(0,0,0,0.1)'
                                                }}
                                                className="font-custom text-center"
                                            >
                                                {service.title}
                                            </div>
                                        );
                                    })}
                                </div>
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 0 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative "
                                >
                                    <div className="absolute inset-0 border border-white/20 rounded-full" />
                                    <div className="absolute inset-8 border border-white/10 rounded-full" />
                                    <div className="absolute inset-16 border border-white/5 rounded-full" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={isVisible ? { scale: 1 } : {}}
                                            transition={{ duration: 1, delay: 0.5, type: "spring" }}
                                            className="text-center"
                                        >
                                            <div className="text-4xl lg:text-6xl font-custom text-white mb-4 opacity-10">13+</div>
                                            <div className="text-lg lg:text-xl font-custom1 text-white/60 opacity-25">Years Experience</div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                                {/* Floating Elements */}
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"
                                />
                                <motion.div
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ScrollText;