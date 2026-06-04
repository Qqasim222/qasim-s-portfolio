import React from 'react';
import { motion } from 'framer-motion';

const ProfilePlaceholder = ({ initials = "QN", className = "" }) => {
  return (
    <motion.div
      className={`glass relative flex h-64 w-64 items-center justify-center rounded-full border-4 border-secondary/20 bg-gradient-to-br from-primary-light/80 to-primary-dark/80 md:h-80 md:w-80 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="absolute inset-4 rounded-full bg-gradient-to-br from-secondary/15 via-accent-cyan/10 to-accent-blue/10 blur-sm"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="gradient-text text-6xl font-bold md:text-7xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {initials}
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-dashed border-secondary/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

export default ProfilePlaceholder; 
