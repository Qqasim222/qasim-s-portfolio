import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaRobot, FaRocket } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import AnimatedBackground from '../common/AnimatedBackground';

const About = () => {
  const sectionRef = useScrollAnimation();

  const timeline = [
    {
      id: 1,
      year: "5+ Years",
      title: "Professional Software Engineering",
      company: "Delivered web products for multiple business domains",
      icon: FaBriefcase,
    },
    {
      id: 2,
      year: "Frontend",
      title: "React, Next.js & TypeScript Interfaces",
      company: "Dashboards, SaaS screens, portals, landing flows, and design systems",
      icon: FaCode,
    },
    {
      id: 3,
      year: "AI Apps",
      title: "AI-Powered Application Development",
      company: "Chat interfaces, automation workflows, smart tools, and API-driven AI features",
      icon: FaRobot,
    },
    {
      id: 4,
      year: "Full Stack",
      title: "MERN & Spring Boot Solutions",
      company: "API integrations, authentication, databases, and production workflows",
      icon: FaRocket,
    },
  ];

  const strengths = [
    "Clear communication from requirement discovery to delivery",
    "Frontend architecture built for future features, not one-off pages",
    "Reusable components, responsive layouts, and clean UI states",
    "AI feature integration for chat, automation, content, and productivity tools",
    "Backend integration with REST APIs, databases, auth, and admin flows",
  ];

  return (
    <AnimatedBackground>
      <section name="about" className="flex w-full items-center bg-transparent py-16 sm:py-20">
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
              About
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-lg p-5 text-base leading-7 text-text-secondary sm:p-6 sm:text-lg sm:leading-8"
            >
              <p className="mb-4 text-text-primary">
                I am a software engineer with 5+ years of experience building frontend and full-stack solutions for companies that need dependable product execution.
              </p>
              <p className="mb-6">
                My strongest work sits at the intersection of React, Next.js, JavaScript, TypeScript, AI-based applications, Spring Boot, and the MERN stack. I build interfaces that feel polished, connect them to reliable backend services, and keep the codebase maintainable for future teams.
              </p>
              <div className="grid gap-3">
                {strengths.map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-primary-dark/45 p-3 text-base leading-7">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-8">
              {timeline.map(({ id, year, title, company, icon: Icon }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: id * 0.1 }}
                  className="glass flex min-w-0 gap-4 rounded-lg p-5"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 ring-1 ring-secondary/25">
                    <Icon className="text-secondary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary">{year}</p>
                    <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
                    <p className="break-words text-text-secondary">{company}</p>
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
