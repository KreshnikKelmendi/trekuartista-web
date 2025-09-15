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







