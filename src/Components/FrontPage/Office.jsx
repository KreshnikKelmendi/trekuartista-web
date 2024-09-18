import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import officeImage1 from "../Assets/firstOffice.png";
import officeImage2 from "../Assets/office5.png";
import officeImage3 from "../Assets/office10.jpg"
import officeImage4 from "../Assets/office11.jpg"
import officeImage5 from "../Assets/office12.jpg"
import officeImage6 from "../Assets/office13.jpg"
import officeImage7 from "../Assets/office14.jpg"

const imgs = [
  {
    src: officeImage1,
    text: "Text for image",
    description: "Lorem ipsum dolor sit amet consectour, lorem apis dolis"
  },
  {
    src: officeImage2,
    text: "Text for image",
    description: "Lorem ipsum dolor sit amet consectour, lorem apis dolis"
  },
  {
    src: officeImage3,
    text: "Text for image",
    description: "Lorem ipsum dolor sit amet consectour, lorem apis dolis"
  },
  {
    src: officeImage4,
    text: "Text for image",
    description: "Lorem ipsum dolor sit amet consectour, lorem apis dolis"
  },
   {
    src: officeImage5,
    text: "Text for image",
    description: "Lorem ipsum dolor sit amet consectour, lorem apis dolis"
  },
  {
    src: officeImage6,
    text: "Text for image",
    description: "Lorem ipsum dolor sit amet consectour, lorem apis dolis"
  },
  {
    src: officeImage7,
    text: "Text for image",
    description: "Lorem ipsum dolor sit amet consectour, lorem apis dolis"
  }
];

const ONE_SECOND = 3000;
const AUTO_DELAY = ONE_SECOND ;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 1,
  stiffness: 170,
  damping: 70,
};

const Office = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-black pt-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />

    </div>
  );
};

export default Office

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgData, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              position: "relative", // Ensuring relative positioning for text maps
              backgroundImage: `url(${imgData.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 1 : 0.90,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full h-96 lg:h-[763px] 2xl:h-[863px] shrink-0 object-cover"
          >
            {/* Text overlay */}
            {imgIndex === idx && (
              <div className="px-4" style={{ position: "absolute", top: "50%", left: "5%", transform: "translate(-5%, -50%)" }}>
                {/* <p className="text-[36px] lg:text-[45px] text-white font-custom">{imgData.text}</p>
                <p className="text-white text-[16px] font-custom1 mt-[24px] lg:w-[514px]">{imgData.description}</p> */}
              </div>
            )}
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2 absolute bottom-2 lg:bottom-16">
      {imgs?.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-[6px] w-[20px] transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};