'use client';
import { useRef } from 'react';
import styles from '../../Components/FrontPage/page.module.scss';
import { ourWorks } from '../Works/workData';
import Card from './Card';
import { useScroll } from 'framer-motion';

export default function HorizontalSlider() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  // Filter the ourWorks array to include only works with IDs 9, 5, and 10
  const displayedWorks = ourWorks.filter(work => [9, 5, 10].includes(work.id));

  return (
    <main className={styles.main}>
      {displayedWorks.map((work, i) => {
        const targetScale = 1 - ((displayedWorks.length - i) * 0.5);
        return (
          <Card
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            key={work.id}
            title={work.workName}
            description={work.workDescription}
            workImage={work.workImage}
            id={work.id}
            color={work.cardColor} 
            i={i}
          />
        );
      })}
    </main>
  );
}
