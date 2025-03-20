import React, { useState, useEffect } from "react";
import { FaExpand } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import { useInView } from "react-intersection-observer"; // Import Intersection Observer
import img1 from "../Assets/testYsabel/feed-1.png";
import img2 from "../Assets/testYsabel/feed-2.png";
import img3 from "../Assets/testYsabel/feed-3.png";
import img4 from "../Assets/testYsabel/feed-4.png";
import img5 from "../Assets/testYsabel/feed-5.png";
import img6 from "../Assets/testYsabel/feed-6.png";
import img7 from "../Assets/testYsabel/feed-7.png";
import img8 from "../Assets/testYsabel/feed-8.png";
import img9 from "../Assets/testYsabel/feed-9.png";
import img10 from "../Assets/testYsabel/feed-10.png";
import img11 from "../Assets/testYsabel/feed-11.png";
import img12 from "../Assets/testYsabel/feed-12.png";
import img13 from "../Assets/testYsabel/feed-13.png";
import img14 from "../Assets/testYsabel/feed-14.png";
import img15 from "../Assets/testYsabel/feed-15.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15].reverse();

const GridSocialMediaYsabel = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  // Intersection Observer for animating the text when in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation replays if scrolled back into view
    threshold: 0.3, // Triggers when 30% of the text is visible
  });

  // Function to open the image
  const openImage = (image) => {
    setExpandedImage(image);
  };

  // Function to close the image
  const closeImage = () => {
    setExpandedImage(null);
  };

  // Close the image when the ESC key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="p-0 mt-6 lg:p-12">
        <div className="grid grid-cols-3 gap-1">
          {images.map((image, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden">
              {/* Image */}
              <img src={image} alt={`Social Media ${index + 1}`} className="w-full h-auto object-cover" />

              {/* Overlay with FaExpand icon */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={() => openImage(image)}
              >
                <FaExpand className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Image Modal */}
        {expandedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeImage}
                className="absolute top-2 right-2 text-white text-4xl font-bold bg-black rounded-full p-2 cursor-pointer"
              >
                ×
              </button>
              {/* Expanded Image */}
              <img src={expandedImage} alt="Expanded" className="max-w-full max-h-screen object-contain" />
            </div>
          </div>
        )}
      </div>

      {/* Animated Text */}
      <div className="my-8 lg:my-24 flex justify-center">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50, letterSpacing: "0.2em" }}
          animate={inView ? { opacity: 1, y: 0, letterSpacing: "0.05em" } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-white text-center font-custom4 text-2xl lg:text-7xl"
        >
          the upcoming days
        </motion.p>
      </div>
    </>
  );
};

export default GridSocialMediaYsabel;
