import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import AnimatedBackground from '../common/AnimatedBackground';

const Portfolio = () => {
  const sectionRef = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: "BinariiDSM",
      role: "Software Engineer",
      description: "Secure data security management platform for controlled file storage, team rooms, permissioned sharing, immutable audit records, blockchain proof of record, and built-in secure chats.",
      image: "https://placehold.co/640x420/0A1930/64FFDA?text=BinariiDSM",
      tech: ["React", "Material UI", "Spring Boot", "Blockchain", "Secure Chat"],
      details: ["File upload and access-control workflows", "Hubs, rooms, chat, and audit trail interfaces", "Frontend integration with Spring Boot APIs"],
      live: "https://www.binariidsm.com/",
    },
    {
      id: 2,
      title: "Cyqur",
      role: "Software Engineer",
      description: "Browser-based secret management product for securing passwords, seed phrases, and notes through encryption, fragmentation, multi-cloud distribution, and blockchain-backed proof records.",
      image: "https://placehold.co/640x420/112240/F5C451?text=Cyqur",
      tech: ["Vanilla JavaScript", "Material UI", "AES-256", "Encryption", "Blockchain"],
      details: ["Secret storage and browser-extension user flows", "Encryption-focused UI states and validation", "Responsive landing and product sections"],
      live: "https://cyqur.com/",
    },
    {
      id: 3,
      title: "Obenan",
      role: "Software Engineer",
      description: "AI-native digital presence platform for physical businesses, focused on location management, AI visibility, merchant discovery, and discoverability across modern search channels.",
      image: "https://placehold.co/640x420/172A45/58A7FF?text=Obenan",
      tech: ["React", "Next.js", "Material UI", "Landing Page", "AI Product"],
      details: ["Next.js landing-page implementation", "Reusable React/MUI sections", "Responsive product and industry pages"],
      live: "https://www.obenan.ai/",
    },
    {
      id: 4,
      title: "Pedlar",
      role: "Software Engineer",
      description: "Creator commerce storefront platform that lets creators build personalized stores, select brand products, share with followers, and track commerce performance.",
      image: "https://placehold.co/640x420/121B29/FF7A59?text=Pedlar",
      tech: ["Next.js", "Material UI", "Creator Commerce", "Storefronts", "Shopify"],
      details: ["Creator and brand onboarding flows", "Custom storefront and product-selection UI", "Responsive marketing and commerce pages"],
      live: "https://pedlar.store/",
    },
    {
      id: 5,
      title: "GSoft Consulting",
      role: "Software Engineer",
      description: "Custom software development company website presenting services, industry expertise, work, insights, careers, and multilingual content for an international audience.",
      image: "https://placehold.co/640x420/060F1E/BD34FE?text=GSoft+Consulting",
      tech: ["Next.js", "Material UI", "Responsive UI", "Multilingual", "Corporate Site"],
      details: ["Service and company page development", "Responsive navigation and content sections", "Multilingual interface support"],
      live: "https://gsoftconsulting.com/en",
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
              Selected products I have contributed to as a software engineer, covering secure document systems, encryption products, AI visibility platforms, creator commerce, and corporate web experiences.
            </p>
          </motion.div>

          <div className="grid gap-6 px-0 sm:px-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map(({ id, title, role, description, image, tech, details, live }) => (
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
                    <div className="p-4">
                      <a
                        href={live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${title}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-secondary hover:text-secondary"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col space-y-4 p-5">
                  <div className="space-y-2">
                    <span className="inline-flex w-fit rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary">
                      {role}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary">{title}</h3>
                  </div>
                  <p className="flex-1 text-sm leading-6 text-text-secondary sm:text-base">{description}</p>
                  <ul className="space-y-2 text-sm leading-5 text-text-muted">
                    {details.map((item, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
