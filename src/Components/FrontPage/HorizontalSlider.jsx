'use client';
import { useRef } from 'react';
import styles from '../../Components/FrontPage/page.module.scss'
import { ourWorks } from '../Works/workData';
import Card from './Card';
import { useScroll } from 'framer-motion';

export default function HorizontalSlider() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const displayedWorks = ourWorks.slice(0, 3);

  return (
    <main className={styles.main}>
      {displayedWorks.map((work, i) => {
        const targetScale = 1 - ((displayedWorks.length - i) * 0.05);
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
