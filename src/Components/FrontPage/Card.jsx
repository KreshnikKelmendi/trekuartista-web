import { useRef } from 'react';
import styles from '../FrontPage/style.module.scss';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const Card = ({title, description, workImage, url, color, i, id}) => {
    const container = useRef(null);
    const navigate = useNavigate(); // useNavigate for navigation in React Router v6

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1])

    const handleShowMore = () => {
        // Scroll to the top of the window
        window.scrollTo(0, 0);
        // Navigate to the single page of the work using the workID
        navigate(`/our-works/${id}`);
    };

    return (
        <div ref={container} className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <motion.div style={{scale: imageScale}} className={styles.inner}>
                        <img
                            className='w-full lg:h-[100vh] object-cover'
                            src={workImage}
                            alt="image"
                        />
                    </motion.div>
                    <div className='absolute top-1/2 px-5 lg:px-[50px]'>
                        <p className='font-custom text-white text-4xl lg:text-[45px]'>{title}</p>
                        <button onClick={handleShowMore} className="mt-6 w-[207px] text-white hover:bg-black hover:text-white hover:scale-105 transition duration-500 ease-in-out hover:border-black text-base border border-white font-custom1 py-2 px-4">
                            <p>Show More</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
