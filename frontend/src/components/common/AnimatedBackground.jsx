import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        {/* Main gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-accent-purple/30 via-accent-purple/10 to-transparent blur-[80px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-radial from-accent-blue/30 via-accent-blue/10 to-transparent blur-[80px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-secondary-DEFAULT/20 via-secondary-DEFAULT/5 to-transparent blur-[100px] animate-pulse" />
        
        {/* Floating orbs */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-1/4 w-64 h-64 bg-gradient-radial from-accent-pink/20 via-accent-pink/5 to-transparent blur-[60px]"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-1/4 w-72 h-72 bg-gradient-radial from-secondary-light/20 via-secondary-light/5 to-transparent blur-[70px]"
        />

        {/* Mesh gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.3))]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] text-text-secondary"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                             linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground; 