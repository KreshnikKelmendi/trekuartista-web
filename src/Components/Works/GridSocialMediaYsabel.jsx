import React, { useState, useEffect } from "react";
import { FaExpand } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
import video1 from "../Assets/testYsabel/ysabel-video-1.mp4"; // Ensure this path is correct
import video2 from "../Assets/testYsabel/ysabel-video-2.mp4"; // Ensure this path is correct

// Update the `media` array to include both images and videos
const media = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15,
].reverse();

const GridSocialMediaYsabel = () => {
  const [expandedMedia, setExpandedMedia] = useState(null);

  // Intersection Observer for animating the text when in view
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  // Function to open the media
  const openMedia = (media) => {
    setExpandedMedia(media);
  };

  // Function to close the media
  const closeMedia = () => {
    setExpandedMedia(null);
  };

  // Close the media when the ESC key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMedia();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="p-0 mt-6 lg:p-0">
        <div className="grid grid-cols-3 gap-1">
          {media.map((item, index) => {
            const isVideo = typeof item === "string" && item.endsWith(".mp4"); // Check if the item is a video
            return (
              <div key={index} className="relative group cursor-pointer overflow-hidden">
                {/* Render video or image based on file extension */}
                {isVideo ? (
                  <video
                    src={item}
                    className="w-full h-auto object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                ) : (
                  <img src={item} alt={`Social Media ${index + 1}`} className="w-full h-auto object-cover" />
                )}

                {/* Overlay with FaExpand icon */}
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => openMedia(item)}
                >
                  <FaExpand className="text-white text-3xl" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Media Modal */}
        {expandedMedia && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeMedia}
                className="absolute top-2 right-2 text-white text-4xl font-bold bg-black rounded-full p-2 cursor-pointer"
              >
                ×
              </button>
              {/* Render expanded video or image */}
              {typeof expandedMedia === "string" && expandedMedia.endsWith(".mp4") ? (
                <video
                  src={expandedMedia}
                  className="max-w-full max-h-screen object-contain"
                  controls
                  autoPlay
                  muted
                  loop
                />
              ) : (
                <img src={expandedMedia} alt="Expanded" className="max-w-full max-h-screen object-contain" />
              )}
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