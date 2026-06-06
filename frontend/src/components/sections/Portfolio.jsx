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
      title: "Scalable E-Commerce Experience",
      description: "Product catalog, cart flow, checkout-ready architecture, responsive storefront pages, and admin-friendly frontend patterns for online sales.",
      image: "https://placehold.co/500x300/121B29/F5C451?text=E-Commerce+Solution",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://github.com",
    },
    {
      id: 2,
      title: "Business Analytics Dashboard",
      description: "Interactive dashboard interface for metrics, filters, user roles, data views, and reporting workflows that help teams monitor operations.",
      image: "https://placehold.co/500x300/121B29/35D6C9?text=Analytics+Dashboard",
      tech: ["React", "Redux", "REST APIs", "Material UI"],
      github: "https://github.com",
      live: "https://github.com",
    },
    {
      id: 3,
      title: "AI Assistant & Automation Tools",
      description: "AI-based application patterns for chat interfaces, prompt-driven workflows, content helpers, business automation, and API-connected smart features.",
      image: "https://placehold.co/500x300/121B29/F5C451?text=AI+Application",
      tech: ["React", "AI APIs", "Node.js", "Automation"],
      github: "https://github.com",
      live: "https://github.com",
    },
    {
      id: 4,
      title: "Full-Stack Operations Platform",
      description: "MERN and Spring Boot style application patterns covering authentication, CRUD workflows, file/data handling, and team productivity screens.",
      image: "https://placehold.co/500x300/121B29/5AA9FF?text=Full-Stack+Platform",
      tech: ["MERN", "Spring Boot", "MongoDB", "JWT Auth"],
      github: "https://github.com",
      live: "https://github.com",
    },
    {
      id: 5,
      title: "Frontend Modernization",
      description: "Improved legacy screens with component-based React architecture, responsive layouts, cleaner state handling, and sharper client-facing UI.",
      image: "https://placehold.co/500x300/121B29/FF7A59?text=Frontend+Modernization",
      tech: ["React", "JavaScript", "UI Systems", "Performance"],
      github: "https://github.com",
      live: "https://github.com",
    },
    {
      id: 6,
      title: "SaaS Admin Portal",
      description: "Reusable tables, forms, role-aware navigation, dashboard cards, and API-connected workflows designed for everyday business users.",
      image: "https://placehold.co/500x300/121B29/BD34FE?text=SaaS+Admin+Portal",
      tech: ["Next.js", "TypeScript", "REST APIs", "Tailwind"],
      github: "https://github.com",
      live: "https://github.com",
    },
    {
      id: 7,
      title: "API-Connected Client Portal",
      description: "Secure client portal concepts for profile management, records, messaging-style interfaces, and backend integration with clean frontend states.",
      image: "https://placehold.co/500x300/121B29/64FFDA?text=Client+Portal",
      tech: ["React", "Spring Boot", "SQL", "API Integration"],
      github: "https://github.com",
      live: "https://github.com",
    },
  ];

  return (
    <AnimatedBackground>
      <section name="portfolio" className="flex w-full items-center bg-transparent py-16 sm:py-20">
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
            <h2 className="inline border-b-4 border-secondary text-3xl font-bold text-text-primary sm:text-4xl">
              Portfolio
            </h2>
            <p className="max-w-2xl py-6 text-text-secondary">
              Selected solution types I build for clients, from AI-powered workflows and polished frontend experiences to full-stack systems with reliable integrations.
            </p>
          </motion.div>

          <div className="grid gap-6 px-0 sm:px-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map(({ id, title, description, image, tech, github, live }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(id * 0.08, 0.35) }}
                whileHover={{ y: -10 }}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-primary-light/80 shadow-xl shadow-black/20 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-110 sm:h-48"
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
                <div className="flex flex-1 flex-col space-y-4 p-5">
                  <h3 className="text-xl font-bold text-text-primary">{title}</h3>
                  <p className="flex-1 text-sm leading-6 text-text-secondary sm:text-base">{description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
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
