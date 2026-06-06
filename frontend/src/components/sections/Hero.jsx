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

  const name = "Muhammad Qasim Nouman";

  const highlights = [
    "5+ years experience",
    "React, Next.js, NodeJS & TypeScript",
    "AI apps, Spring Boot & MERN",
  ];

  return (
    <section 
      name="home" 
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-primary px-0 pb-14 pt-24 sm:pb-16 md:pt-20"
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

      <div className="z-10 mx-auto flex h-full max-w-screen-lg flex-col-reverse items-center justify-center gap-7 px-4 text-center sm:gap-8 md:flex-row md:text-left lg:gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex h-full w-full min-w-0 flex-col items-center justify-center md:items-start"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex max-w-full items-center rounded-full border border-secondary/25 bg-secondary/10 px-3 py-2 text-center text-xs font-semibold tracking-normal text-secondary sm:px-4 sm:text-sm mt-3"
          >
            Software Engineer for scalable web products
          </motion.span>
          <motion.h1
            variants={nameAnimation}
            initial="hidden"
            animate="visible"
            className="max-w-full text-[clamp(2.15rem,11vw,4.75rem)] font-bold leading-tight text-text-primary"
          >
            {name.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                className="mr-2 inline-block cursor-default break-words hover:text-secondary sm:mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textAnimation}
            className="perspective-1000"
          >
            <span className="gradient-text inline-block max-w-full text-2xl font-bold leading-tight sm:text-4xl">
              React, Next.js, Node.js, AI Apps & Full-Stack Solutions
            </span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl py-5 text-base leading-7 text-text-secondary sm:text-lg sm:leading-8"
          >
            I help startups, agencies, and growing companies turn complex requirements into fast, maintainable web applications, AI-powered workflows, polished interfaces, reliable APIs, and clean delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-5 grid w-full max-w-2xl gap-3 sm:grid-cols-3"
          >
            {highlights.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-primary-light/55 px-4 py-3 text-sm font-medium text-text-primary shadow-lg shadow-black/10 backdrop-blur-sm">
                {item}
              </div>
            ))}
          </motion.div>

          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
            <Link to="portfolio" smooth duration={500} className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group my-1 flex w-full cursor-pointer items-center justify-center rounded-md bg-gradient-to-r from-secondary via-accent-cyan to-accent-blue px-6 py-3 font-semibold text-primary-dark shadow-lg shadow-secondary/10 hover:shadow-secondary/25 sm:my-2 sm:w-auto"
              >
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={25} className="ml-2" />
                </span>
              </motion.button>
            </Link>
            <Link to="contact" smooth duration={500} className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="my-1 w-full rounded-md border border-white/15 px-6 py-3 font-semibold text-text-primary transition-colors duration-300 hover:border-secondary/50 hover:text-secondary sm:my-2 sm:w-auto"
              >
                Hire Me
              </motion.button>
            </Link>
            
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                href="https://github.com/Qqasim222" 
                target="_blank" 
                rel="noreferrer"
                className="text-text-secondary hover:text-secondary"
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                href="https://www.linkedin.com/in/muhammad-qasim-nouman850/" 
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
          className="relative flex-shrink-0"
        >
          <ProfilePlaceholder initials="QN" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 transform flex-col items-center md:flex"
      >
        <span className="text-text-secondary text-sm mb-2">Explore</span>
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
