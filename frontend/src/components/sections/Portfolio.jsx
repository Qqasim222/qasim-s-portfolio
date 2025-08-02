import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import AnimatedBackground from '../common/AnimatedBackground';

const Portfolio = () => {
  const sectionRef = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with real-time cart updates and secure payments",
      image: "https://via.placeholder.com/500x300",
      tech: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Analytics dashboard with real-time data visualization and user management",
      image: "https://via.placeholder.com/500x300",
      tech: ["React", "Firebase", "Chart.js", "Material-UI"],
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features",
      image: "https://via.placeholder.com/500x300",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com",
      live: "https://demo.com",
    },
  ];

  return (
    <AnimatedBackground>
      <section name="portfolio" className="min-h-screen w-full bg-primary py-20 flex items-center">
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
            <h2 className="text-4xl font-bold inline border-b-4 border-secondary">
              Portfolio
            </h2>
            <p className="py-6 text-textSecondary">Check out some of my recent work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-0 sm:px-0">
            {projects.map(({ id, title, description, image, tech, github, live }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: id * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[rgba(255,255,255,0.05)] rounded-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 space-y-2">
                      <div className="flex gap-4">
                        <a
                          href={github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white hover:text-secondary"
                        >
                          <FaGithub size={20} />
                        </a>
                        <a
                          href={live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white hover:text-secondary"
                        >
                          <FaExternalLinkAlt size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-textSecondary">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-secondary/10 text-secondary rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Portfolio; 