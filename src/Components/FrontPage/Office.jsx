import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import officeImage1 from "../Assets/trekuartista-office/firstOffice.png";
import officeImage2 from "../Assets/trekuartista-office/office5.png";
import officeImage3 from "../Assets/trekuartista-office/office10.jpg";
import officeImage4 from "../Assets/trekuartista-office/office11.jpg";
import officeImage5 from "../Assets/trekuartista-office/office12.jpg";
import officeImage6 from "../Assets/trekuartista-office/office13.jpg";
import officeImage7 from "../Assets/trekuartista-office/office14.jpg";

const imgs = [
  {
    src: officeImage1,
  },
  {
    src: officeImage2,
  },
  {
    src: officeImage3,
  },
  {
    src: officeImage4,
  },
  {
    src: officeImage5,
  },
  {
    src: officeImage6,
  },
  {
    src: officeImage7,
  },
];

const ONE_SECOND = 3000;
const AUTO_DELAY = ONE_SECOND;

const Office = () => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex === imgs.length - 1 ? 0 : prevIndex + 1));
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <div className="relative overflow-hidden bg-black">
      <div className="relative w-full h-[500px] lg:h-[763px] 2xl:h-[863px]">
        <motion.div
          key={imgIndex}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${imgs[imgIndex].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex">
        {imgs.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setImgIndex(idx)}
            whileHover={{ scale: 1.2 }}
            className={`mx-2 h-[5px] w-[25px] transition-colors ${
              idx === imgIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Office;
