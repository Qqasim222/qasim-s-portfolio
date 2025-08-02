import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div name="home" className="h-screen w-full bg-primary">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-7xl font-bold text-textPrimary"
          >
            Frontend Developer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-textSecondary py-4 max-w-md"
          >
            I specialize in building responsive web applications using React.js, Next.js, and modern UI frameworks.
          </motion.p>

          <div className="flex gap-4">
            <Link to="portfolio" smooth duration={500}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={25} className="ml-1" />
                </span>
              </button>
            </Link>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub size={25} className="text-textSecondary hover:text-secondary cursor-pointer" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin size={25} className="text-textSecondary hover:text-secondary cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 