import { useRef } from 'react';
import styles from '../FrontPage/style.module.scss';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, workImage, url, color, buttonTextColor, id }) => {
    const container = useRef(null);
    const navigate = useNavigate();

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start'],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1]);

    const handleShowMore = () => {
        window.scrollTo(0, 0);
        navigate(`/our-works/${id}`);
    };

    return (
        <div ref={container} className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <motion.div style={{ scale: imageScale }} className={styles.inner}>
                        <img
                            className="w-full lg:h-[100vh] object-cover"
                            src={workImage}
                            alt="photos"
                        />
                    </motion.div>
                    <div className="absolute bottom-4 lg:bottom-44 px-5 lg:px-[50px]">
                        {/* Dynamically set title color */}
                        <p
                            style={{ color }}
                            className="font-custom text-4xl lg:text-[45px] hidden lg:block"
                        >
                            {title}
                        </p>
                        {/* Dynamically set button styles */}
                        <button
                            onClick={handleShowMore}
                            className="mt-6 w-[207px] text-base border font-custom1 py-2 px-4 transition duration-500 ease-in-out hover:scale-105"
                            style={{
                                backgroundColor: color,
                                borderColor: color,
                                color: buttonTextColor, // Dynamically set text color
                            }}
                        >
                            Show More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
