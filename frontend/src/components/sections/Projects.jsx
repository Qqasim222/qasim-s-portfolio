import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React and Next.js",
      tech: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://via.placeholder.com/500x300"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Real-time dashboard for social media analytics",
      tech: ["React", "Firebase", "Material-UI", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://via.placeholder.com/500x300"
    },
    // Add more projects as needed
  ];

  return (
    <section name="portfolio" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-secondary">Portfolio</h2>
          <p className="py-6 text-textSecondary">Check out some of my work</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
          {projects.map(({ id, title, description, tech, github, demo, image }) => (
            <motion.div 
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              className="rounded-lg overflow-hidden shadow-lg bg-[rgba(255,255,255,0.05)]"
            >
              <img src={image} alt={title} className="w-full h-48 object-cover" />
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-textSecondary text-base mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((item, index) => (
                    <span key={index} className="px-3 py-1 text-sm bg-secondary/10 text-secondary rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-textSecondary hover:text-secondary">
                    <FaGithub /> Code
                  </a>
                  <a href={demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-textSecondary hover:text-secondary">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 