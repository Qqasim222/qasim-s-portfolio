import { motion } from 'framer-motion';

const FloatingElement = ({ children, delay = 0, duration = 3 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement; 