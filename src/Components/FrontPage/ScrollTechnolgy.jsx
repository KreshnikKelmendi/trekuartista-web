import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const ScrollTechnolgy = () => {
  return (
    <div className="bg-black">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[200vh] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>
      <div className="absolute inset-0 z-10 grid">
        <div className="flex justify-center">
            <p className="font-custom justify-start p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
            </p>
            <p className="text-white p-8 w-[650px]">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollTechnolgy;

const cards = [
  {
    title: "Title 1",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae eos soluta, nobis ullam ratione facere adipisci quaerat perspiciatis quibusdam sequi, alias aliquid nostrum fugiat modi incidunt qui consectetur iste praesentium.",
  },
  {
    title: "Title 2",
    description: "34",
  },
  {
    title: "Title 3",
    description: "rere",
  },
  {
    title: "Title 4",
    description: "ffree",
  },
  {
    title: "Title 5",
    description: "fre",
  },
  {
    title: "Title 6",
    description: "gre",
  },
  {
    title: "Title 7",
    description: "ddss",
  },
];