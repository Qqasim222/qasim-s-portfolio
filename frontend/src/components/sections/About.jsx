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
      <section name="about" className="min-h-screen w-full bg-primary py-20 flex items-center">
        <div 
          ref={sectionRef}
          className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full section-animate"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-8"
          >
            <h2 className="text-4xl font-bold inline border-b-4 border-secondary text-textPrimary">
              About Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg"
            >
              <p className="mb-4">
                I'm a passionate Frontend Developer with expertise in building exceptional digital experiences. 
                With a strong foundation in modern web technologies, I create responsive and intuitive user interfaces.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through technical blog posts.
              </p>
            </motion.div>

            <div className="space-y-8">
              {timeline.map(({ id, year, title, company, icon: Icon }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: id * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon className="text-secondary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary">{year}</p>
                    <h3 className="text-lg font-semibold text-textPrimary">{title}</h3>
                    <p className="text-textSecondary">{company}</p>
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