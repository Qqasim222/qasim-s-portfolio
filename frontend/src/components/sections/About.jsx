import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import AnimatedBackground from '../common/AnimatedBackground';

const About = () => {
  const sectionRef = useScrollAnimation();

  const timeline = [
    {
      id: 1,
      year: "2023",
      title: "Senior Frontend Developer",
      company: "Tech Company",
      icon: FaBriefcase,
    },
    {
      id: 2,
      year: "2021",
      title: "Frontend Developer",
      company: "Startup",
      icon: FaBriefcase,
    },
    {
      id: 3,
      year: "2020",
      title: "Computer Science Degree",
      company: "University",
      icon: FaGraduationCap,
    },
  ];

  return (
    <AnimatedBackground>
      <section name="about" className="flex min-h-screen w-full items-center bg-transparent py-20">
        <div 
          ref={sectionRef}
          className="section-animate mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-8"
          >
            <h2 className="inline border-b-4 border-secondary text-4xl font-bold text-text-primary">
              About Me
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-lg p-6 text-lg leading-8 text-text-secondary"
            >
              <p className="mb-4 text-text-primary">
                I'm a software engineer focused on building modern, maintainable web products for businesses that care about performance, usability, and long-term reliability.
              </p>
              <p>
                My work combines frontend engineering, API integration, product thinking, and clean delivery practices so clients get software that looks polished and works under real business pressure.
              </p>
            </motion.div>

            <div className="space-y-8">
              {timeline.map(({ id, year, title, company, icon: Icon }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: id * 0.1 }}
                  className="glass flex gap-4 rounded-lg p-5"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 ring-1 ring-secondary/25">
                    <Icon className="text-secondary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary">{year}</p>
                    <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
                    <p className="text-text-secondary">{company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default About; 
