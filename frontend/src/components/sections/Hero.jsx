import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import ProfilePlaceholder from '../common/ProfilePlaceholder';
//import""from '../../assets/profile.jpg'; // Add your profile picture to assets folder

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/400x400/0F172A/64FFDA?text=QN"; // Using our theme colors

const colors = {
  text: {
    secondary: 'rgba(136, 146, 176, 0.5)', // Using our theme's text-secondary color with opacity
  }
};

const Hero = () => {
  const nameAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const backgroundAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const textAnimation = {
    hidden: {
      opacity: 0,
      rotateX: -90,
      translateY: 50,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const name = "Muhammad Qasim Nouman".split("");

  return (
    <section 
      name="home" 
      className="min-h-screen w-full bg-primary pt-20 flex items-center relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        variants={backgroundAnimation}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-accent-purple/30 via-accent-purple/10 to-transparent blur-[80px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-radial from-accent-blue/30 via-accent-blue/10 to-transparent blur-[80px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-secondary-DEFAULT/20 via-secondary-DEFAULT/5 to-transparent blur-[100px] animate-pulse" />
        
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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.3))]" />
        
        <div 
          className="absolute inset-0 opacity-[0.02] text-text-secondary"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                             linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4 gap-8 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center h-full"
        >
          <motion.h1 
            variants={nameAnimation}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-7xl font-bold text-text-primary flex flex-wrap gap-x-3"
          >
            {name.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                className={letter === " " ? "mr-2" : "hover:text-secondary-DEFAULT cursor-default"}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textAnimation}
            className="perspective-1000"
          >
            <span className="text-2xl sm:text-4xl font-bold text-secondary-DEFAULT inline-block">
              Frontend Developer
            </span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-secondary py-4 max-w-md text-lg"
          >
            Crafting beautiful and responsive web experiences with modern technologies.
          </motion.p>

          <div className="flex gap-6">
            <Link to="portfolio" smooth duration={500}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink cursor-pointer shadow-lg hover:shadow-accent-purple/25"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={25} className="ml-2" />
                </span>
              </motion.button>
            </Link>
            
            <div className="flex items-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                href="https://github.com/your-username" 
                target="_blank" 
                rel="noreferrer"
                className="text-text-secondary hover:text-secondary-DEFAULT"
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                href="https://linkedin.com/in/your-username" 
                target="_blank" 
                rel="noreferrer"
                className="text-text-secondary hover:text-secondary-DEFAULT"
              >
                <FaLinkedin size={28} />
              </motion.a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4"
          >
            <div className="w-1 h-24 bg-gradient-to-b from-accent-blue to-accent-purple rounded-full" />
            <div className="w-1 h-12 bg-gradient-to-b from-accent-blue/50 to-accent-purple/50 rounded-full" />
            <div className="w-1 h-8 bg-gradient-to-b from-accent-blue/30 to-accent-purple/30 rounded-full" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <ProfilePlaceholder initials="QN" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-text-secondary text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-8 bg-gradient-to-b from-secondary to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero; 