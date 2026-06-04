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
      image: "https://placehold.co/500x300/121B29/F5C451?text=E-Commerce+Platform",
      tech: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Analytics dashboard with real-time data visualization and user management",
      image: "https://placehold.co/500x300/121B29/35D6C9?text=Analytics+Dashboard",
      tech: ["React", "Firebase", "Chart.js", "Material-UI"],
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features",
      image: "https://placehold.co/500x300/121B29/5AA9FF?text=Task+Management",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com",
      live: "https://demo.com",
    },
  ];

  return (
    <AnimatedBackground>
      <section name="portfolio" className="flex min-h-screen w-full items-center bg-transparent py-20">
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
              Portfolio
            </h2>
            <p className="py-6 text-text-secondary">Selected work shaped for real business use cases.</p>
          </motion.div>

          <div className="grid gap-8 px-0 sm:px-0 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ id, title, description, image, tech, github, live }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: id * 0.1 }}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-lg border border-white/10 bg-primary-light/80 shadow-xl shadow-black/20 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary-dark/95 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
                <div className="space-y-4 p-5">
                  <h3 className="text-xl font-bold text-text-primary">{title}</h3>
                  <p className="text-text-secondary">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.map((item, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-sm text-secondary"
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
