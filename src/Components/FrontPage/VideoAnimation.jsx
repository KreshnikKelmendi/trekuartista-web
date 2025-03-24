// import React from "react";
// import { motion } from "framer-motion";
// import scrollDown from "../Assets/scrollDown.png";
// import { Link } from "react-router-dom";

// function VideoAnimation() {
//   // Looping animation for the "Let's talk art" text
//   const textVariants = {
//     animate: (i) => ({
//       opacity: 1,
//       rotate: [0, 5, -5, 3, 0],
//       x: [0, -10, 10, -5, 0],
//       transition: {
//         delay: i * 0.6,
//         duration: 2.2,
//         ease: [0.17, 0.67, 0.83, 0.67],
//         repeat: Infinity, // Infinite loop
//         repeatType: "reverse", // Smooth reverse loop
//       },
//     }),
//   };

//   return (
//     <div className="relative slider-content p-0 h-[100vh] z-40 bg-black">
//       <motion.div
//         key="text-animation"
//         className="h-full flex flex-col justify-center items-center overflow-hidden"
//       >
//         <motion.div className="text-white text-5xl lg:text-8xl font-bold mb-4 font-custom">
//           {["Let's", "talk", "art"].map((word, i) => (
//             <motion.span
//               key={word}
//               custom={i}
//               animate="animate"
//               variants={textVariants}
//               className="block"
//               style={{ marginBottom: "10px", color: i === 2 ? "#FF69B4" : "white" }}
//             >
//               {word}
//             </motion.span>
//           ))}
//         </motion.div>
//       </motion.div>
//       <div className="absolute top-[72vh] lg:top-[83vh] 2xl:top-[77vh] inset-0 flex items-center justify-center">
//         <Link
//           onClick={() =>
//             window.scrollTo({
//               top: 770,
//               left: 0,
//               behavior: "smooth",
//             })
//           }
//         >
//           <img
//             src={scrollDown}
//             alt="Scroll down"
//             className="w-[114px] h-[27px] object-contain cursor-pointer transition-transform hover:scale-125"
//           />
//         </Link>
      
//       </div>
//     </div>
//   );
// }

// export default VideoAnimation;

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import testimage from "../Assets/trekuartista-office/lets-talk-art1.jpg";

const gridSize = 4; // 4x4 = 16 pieces
const pieceSize = 100 / gridSize; // Percentage size for each piece

// Generate pieces dynamically
const pieces = [];
for (let row = 0; row < gridSize; row++) {
  for (let col = 0; col < gridSize; col++) {
    pieces.push({
      id: `${row}-${col}`,
      x: (Math.random() - 0.5) * 400, // Bigger movement
      y: (Math.random() - 0.5) * 400,
      delay: (row * gridSize + col) * 0.05, // Fast but smooth delay
      rotate: Math.random() > 0.5 ? Math.random() * 360 - 180 : 0, // Some pieces rotate
      backgroundPosition: `${col * (100 / (gridSize - 1))}% ${row * (100 / (gridSize - 1))}%`,
    });
  }
}

const VideoAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="w-full pt-10 bg-black px-4 lg:px-[55px] flex justify-center items-center overflow-hidden">
      <div ref={ref} className="relative w-full aspect-video rounded-3xl overflow-hidden">
        {pieces.map((piece) => (
          <motion.div
            key={piece.id}
            className="absolute w-1/4 h-1/4"
            style={{
              top: `${Math.floor(piece.id.split('-')[0]) * pieceSize}%`,
              left: `${Math.floor(piece.id.split('-')[1]) * pieceSize}%`,
              backgroundImage: `url(${testimage})`,
              backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
              backgroundPosition: piece.backgroundPosition,
            }}
            initial={{ 
              opacity: 0, 
              x: piece.x, 
              y: piece.y, 
              scale: 1.4, 
              rotate: piece.rotate 
            }}
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : piece.x,
              y: inView ? 0 : piece.y,
              scale: inView ? 1 : 1.4,
              rotate: inView ? 0 : piece.rotate,
            }}
            transition={{ duration: 1, delay: piece.delay, ease: "easeOut" }}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoAnimation;







