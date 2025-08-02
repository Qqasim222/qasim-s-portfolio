import React from 'react';
import { motion } from 'framer-motion';

const Cube3D = ({ imageSrc }) => {
  return (
    <div className="perspective-1000 w-64 h-64 md:w-80 md:h-80 relative">
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-full h-full relative transform-style-preserve-3d"
      >
        {/* Front face */}
        <div className="absolute w-full h-full">
          <img
            src={imageSrc}
            alt="profile"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Back face */}
        <div className="absolute w-full h-full transform rotate-y-180 backface-hidden">
          <img
            src={imageSrc}
            alt="profile"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Add more faces as needed */}
      </motion.div>
    </div>
  );
};

export default Cube3D; 