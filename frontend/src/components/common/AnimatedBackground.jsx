import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 bg-primary"
      >
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-80 bg-[linear-gradient(120deg,rgba(8,13,20,1)_0%,rgba(18,27,41,0.95)_32%,rgba(53,214,201,0.11)_58%,rgba(245,196,81,0.1)_78%,rgba(8,13,20,1)_100%)] bg-[length:220%_220%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0.12),rgba(5,7,12,0.88))]" />
        <div 
          className="absolute inset-0 opacity-[0.05] text-secondary"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                             linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground; 
