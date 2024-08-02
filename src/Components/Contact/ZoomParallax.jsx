import styles from './styles.module.scss';
import Picture1 from "../Assets/office2.png"
import Picture2 from "../Assets/office1.png"
import Picture3 from "../Assets/officeTreku.png"
import Picture4 from "../Assets/office5.png"
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';

export default function ZoomParallax() {

    const containerScroll = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerScroll,
        offset: ['start start', 'end end']
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale5
        }
    ]


    return (
        <>
        <div className="py-0 lg:py-[100px] bg-[#E6E6E6] lg:px-[50px]">
      <div className="flex flex-col lg:flex-row p-4 lg:p-0">
        <h1 className="text-4xl md:text-[33px] font-bold font-custom leading-[47px]">
          Our space
        </h1>
        <span className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-[425px] text-base font-medium font-custom1 text-[#1E1E1E]">
          Trekuartista is an advertising agency providing full-scale marketing services. <br /> <br />
          Founded in 2012 in Prishtina, we have consistently garnered successful outcomes for clients through creative and aggressive marketing strategies.
          We believe in research-based recommendations, close tracking wherever possible, and exceptional creative work.
        </span>
      </div>
    </div>
        <div ref={containerScroll} className={styles.containerScroll}>
            <div className={styles.sticky}>
            {
                    pictures.map( ({src, scale}, index) => {
                        return <motion.div key={index} style={{scale}} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={src}
                                    alt="image"
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
        </>
    )
}