import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import ProfilePlaceholder from '../common/ProfilePlaceholder';
//import""from '../../assets/profile.jpg'; // Add your profile picture to assets folder

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
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-primary pt-20"
    >
      <motion.div
        className="absolute inset-0 z-0 bg-primary"
        variants={backgroundAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,13,20,1)_0%,rgba(18,27,41,0.98)_35%,rgba(53,214,201,0.14)_58%,rgba(245,196,81,0.13)_76%,rgba(255,122,89,0.1)_100%)] bg-[length:220%_220%]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,12,0.92)_0%,rgba(5,7,12,0.54)_48%,rgba(5,7,12,0.88)_100%)]" />
        
        <div 
          className="absolute inset-0 opacity-[0.06] text-secondary"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                             linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      <div className="z-10 mx-auto flex h-full max-w-screen-lg flex-col-reverse items-center justify-center gap-10 px-4 md:flex-row">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex h-full flex-col justify-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex w-fit items-center rounded-full border border-secondary/25 bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-normal text-secondary"
          >
            Software Engineer & Solution Provider
          </motion.span>
          <motion.h1 
            variants={nameAnimation}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-x-3 text-4xl font-bold leading-tight text-text-primary sm:text-7xl"
          >
            {name.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                className={letter === " " ? "mr-2" : "cursor-default hover:text-secondary"}
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
            <span className="gradient-text inline-block text-2xl font-bold sm:text-4xl">
              Building Modern Web Products
            </span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl py-5 text-lg leading-8 text-text-secondary"
          >
            I design and develop scalable frontend systems, dashboards, and digital products for businesses that need reliable software with a polished client experience.
          </motion.p>

          <div className="flex gap-6">
            <Link to="portfolio" smooth duration={500}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group my-2 flex cursor-pointer items-center rounded-md bg-gradient-to-r from-secondary via-accent-cyan to-accent-blue px-6 py-3 font-semibold text-primary-dark shadow-lg shadow-secondary/10 hover:shadow-secondary/25"
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
                className="text-text-secondary hover:text-secondary"
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                href="https://linkedin.com/in/your-username" 
                target="_blank" 
                rel="noreferrer"
                className="text-text-secondary hover:text-secondary"
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
            <div className="h-24 w-1 rounded-full bg-gradient-to-b from-secondary to-accent-cyan" />
            <div className="h-12 w-1 rounded-full bg-gradient-to-b from-secondary/50 to-accent-cyan/50" />
            <div className="h-8 w-1 rounded-full bg-gradient-to-b from-secondary/30 to-accent-cyan/30" />
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
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 transform flex-col items-center"
      >
        <span className="text-text-secondary text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-8 w-1 rounded-full bg-gradient-to-b from-secondary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero; 
