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
        className="min-h-screen w-full bg-primary py-20 flex items-center"
      >
        <div 
          ref={sectionRef}
          className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full section-animate"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-8"
          >
            <h2 className="text-4xl font-bold border-b-4 border-secondary-DEFAULT p-2 inline text-text-primary">
              Skills & Technologies
            </h2>
            <p className="py-6 text-text-secondary">These are the technologies I work with</p>
          </motion.div>

          <div className="space-y-16">
            {skills.map((category, index) => (
              <div key={category.title} className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-2xl font-semibold text-text-primary border-l-4 border-secondary-DEFAULT pl-4"
                >
                  {category.title}
                </motion.h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                  {category.items.map(({ name, icon: Icon }, itemIndex) => (
                    <Card3D
                      key={name}
                      className="group"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (itemIndex * 0.1) }}
                        className="p-6 rounded-lg bg-gradient-to-br from-primary-light/50 to-primary-light/10 backdrop-blur-sm flex flex-col items-center gap-4 hover:shadow-lg hover:shadow-secondary-DEFAULT/10 border border-primary-light/50 transition-all duration-300"
                      >
                        <motion.div
                          whileHover={{ rotateY: 180 }}
                          transition={{ duration: 0.8, type: "spring" }}
                          className="relative w-16 h-16 flex items-center justify-center"
                        >
                          <Icon size={40} className="text-accent-blue group-hover:text-secondary-DEFAULT transition-colors duration-300 absolute backface-hidden" />
                          <div className="absolute inset-0 flex items-center justify-center rotate-y-180 backface-hidden">
                            <span className="text-4xl">⚡</span>
                          </div>
                        </motion.div>
                        <p className="text-text-primary group-hover:text-secondary-DEFAULT transition-colors duration-300 text-center font-medium">
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