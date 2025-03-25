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

    return (
        <div className="relative w-full">
            <div
                ref={container}
                className="relative w-full overflow-hidden shadow-lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Image with Smooth Scaling */}
                <motion.img
                    className="w-full h-[22ch] lg:h-[80vh] object-cover transition-transform duration-500"
                    src={workImage}
                    alt="photos"
                    style={{ scale: imageScale }}
                    onClick={handleClick}  // Trigger "See More" on click of image
                />

                {/* Dark Overlay on Hover */}
                <motion.div
                    className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                />

                {/* Title & Button Appear in the Center on Hover */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                >
                    <p style={{ color }} className="font-bold font-custom text-3xl lg:text-4xl text-white tracking-[1.5px]">
                        {title}
                    </p>
                    <button
                        onClick={handleClick} // Also trigger "See More" on button click
                        className="mt-4 font-custom1 bg-white w-[200px] text-base border py-2 px-4 transition duration-300 ease-in-out hover:scale-110"
                        style={{
                            backgroundColor: color,
                            borderColor: color,
                            color: buttonTextColor,
                        }}
                    >
                        See More
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Card;
