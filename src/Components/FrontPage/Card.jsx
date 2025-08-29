import { useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = ({ title, workImage, color, buttonTextColor, id }) => {
    const container = useRef(null);
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    const handleShowMore = () => {
        window.scrollTo(0, 0); // Reset scroll position to top
        navigate(`/our-works/${id}`);
    };

    const handleClick = (e) => {
        // Allow clicking on the image or button to trigger "See More"
        e.stopPropagation(); // Stop propagation to avoid triggering hover event
        handleShowMore();
    };

    // Check if the workImage is a video file
    const isVideo = workImage && typeof workImage === 'string' && workImage.endsWith('.mp4');

    return (
        <div className="relative w-full cursor-pointer" onClick={handleShowMore}>
            <div
                ref={container}
                className="relative w-full overflow-hidden shadow-lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Conditional rendering for Image or Video */}
                {isVideo ? (
                    <motion.video
                        className="w-full h-[22ch] lg:h-[80vh] object-cover transition-transform duration-500"
                        style={{ scale: imageScale }}
                        autoPlay
                        playsInline
                        loop
                        muted
                        controls={false}
                    >
                        <source src={workImage} type="video/mp4" />
                        Your browser does not support the video tag.
                    </motion.video>
                ) : (
                    <motion.img
                        className="w-full h-[22ch] lg:h-[80vh] object-cover transition-transform duration-500"
                        src={workImage}
                        alt="photos"
                        style={{ scale: imageScale }}
                    />
                )}

                {/* Dark Overlay on Hover */}
                <motion.div
                    className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                />

                {/* Simple "See More" text on Hover */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <p className="text-white font-custom1 text-lg font-medium tracking-wide">
                        See More
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Card;
