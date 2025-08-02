import React from 'react';
import { motion } from 'framer-motion';

const ProfilePlaceholder = ({ initials = "QN", className = "" }) => {
  return (
    <motion.div
      className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full glass bg-gradient-to-br from-primary-light/50 to-primary-dark/50 flex items-center justify-center border-4 border-secondary-DEFAULT/20 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="absolute inset-4 rounded-full bg-gradient-to-br from-accent-blue/10 via-accent-purple/10 to-accent-pink/10 blur-sm"
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
        className="text-6xl md:text-7xl font-bold text-secondary-DEFAULT"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {initials}
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-secondary-DEFAULT/20 border-dashed"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

export default ProfilePlaceholder; 