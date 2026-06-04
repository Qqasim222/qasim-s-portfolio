import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3, 
  FaGitAlt, 
  FaNode, 
  FaBootstrap 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiTypescript, 
  SiMongodb, 
  SiRedux, 
  SiFirebase,
  SiGraphql,
  SiPostman,
  SiWebflow,
  SiMui,
  SiAxios,
  SiChakraui,
  SiAntdesign
} from 'react-icons/si';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Card3D from '../common/Card3D';
import AnimatedBackground from '../common/AnimatedBackground';

const Skills = () => {
  const sectionRef = useScrollAnimation();

  const skills = [
    {
      title: "Frontend Development",
      items: [
        { name: 'React.js', icon: FaReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
        { name: 'Redux', icon: SiRedux, color: '#764ABC' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3, color: '#1572B6' },
        { name: 'Webflow', icon: SiWebflow, color: '#4353FF' },
      ]
    },
    {
      title: "UI Frameworks",
      items: [
        { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
        { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
        { name: 'Material UI', icon: SiMui, color: '#007FFF' },
        { name: 'Chakra UI', icon: SiChakraui, color: '#319795' },
        { name: 'Ant Design', icon: SiAntdesign, color: '#0170FE' },
      ]
    },
    {
      title: "Backend & APIs",
      items: [
        { name: 'Node.js', icon: FaNode, color: '#339933' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
        { name: 'REST APIs', icon: SiAxios, color: '#5A29E4' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      ]
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      ]
    }
  ];

  return (
    <AnimatedBackground>
      <section 
        name="skills" 
        className="flex min-h-screen w-full items-center bg-transparent py-20"
      >
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
            <h2 className="inline border-b-4 border-secondary p-2 text-4xl font-bold text-text-primary">
              Skills & Technologies
            </h2>
            <p className="py-6 text-text-secondary">Core tools I use to deliver production-ready web solutions.</p>
          </motion.div>

          <div className="space-y-16">
            {skills.map((category, index) => (
              <div key={category.title} className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="border-l-4 border-secondary pl-4 text-2xl font-semibold text-text-primary"
                >
                  {category.title}
                </motion.h3>
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
                  {category.items.map(({ name, icon: Icon }, itemIndex) => (
                    <Card3D
                      key={name}
                      className="group"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (itemIndex * 0.1) }}
                        className="flex min-h-[150px] flex-col items-center gap-4 rounded-lg border border-white/10 bg-gradient-to-br from-primary-light/85 to-primary-soft/35 p-6 text-center shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10"
                      >
                        <motion.div
                          whileHover={{ rotateY: 180 }}
                          transition={{ duration: 0.8, type: "spring" }}
                          className="relative flex h-16 w-16 items-center justify-center"
                        >
                          <Icon size={40} className="absolute text-accent-cyan transition-colors duration-300 backface-hidden group-hover:text-secondary" />
                          <div className="absolute inset-0 flex items-center justify-center rotate-y-180 backface-hidden">
                            <span className="text-sm font-bold text-secondary">PRO</span>
                          </div>
                        </motion.div>
                        <p className="text-center font-medium text-text-primary transition-colors duration-300 group-hover:text-secondary">
                          {name}
                        </p>
                      </motion.div>
                    </Card3D>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Skills; 
