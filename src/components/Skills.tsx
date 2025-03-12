// src/components/Skills.tsx
"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiGit,
  SiHtml5,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiAngular,
  SiDocker,
  SiJira,
  SiBootstrap,
  SiRedux,
  SiAew
} from 'react-icons/si';
import { FaServer, FaDatabase } from 'react-icons/fa';

const SkillBar = ({ skill, percentage, icon }: { skill: string, percentage: number, icon: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.2
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1, ease: "easeOut" }
      });
    }
  }, [controls, inView, percentage]);

  return (
    <div className="mb-5" ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="mr-2 text-gray-700 dark:text-gray-300">
            {icon}
          </span>
          <span className="font-medium text-gray-700 dark:text-gray-300">{skill}</span>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Frontend skills
  const frontendSkills = [
    { skill: "JavaScript", percentage: 90, icon: <SiJavascript className="w-5 h-5 text-yellow-500" /> },
    { skill: "React", percentage: 85, icon: <SiReact className="w-5 h-5 text-blue-500" /> },
    { skill: "HTML5/CSS3", percentage: 95, icon: <SiHtml5 className="w-5 h-5 text-orange-500" /> },
    { skill: "Next.js", percentage: 80, icon: <SiNextdotjs className="w-5 h-5" /> },
    { skill: "Tailwind CSS", percentage: 85, icon: <SiTailwindcss className="w-5 h-5 text-teal-500" /> },
    { skill: "TypeScript", percentage: 70, icon: <SiTypescript className="w-5 h-5 text-blue-600" /> },
    { skill: "Angular", percentage: 70, icon: <SiAngular className="w-5 h-5 text-red-600" /> },
    { skill: "Redux", percentage: 75, icon: <SiRedux className="w-5 h-5 text-purple-600" /> },
    { skill: "Bootstrap", percentage: 90, icon: <SiBootstrap className="w-5 h-5 text-purple-500" /> }
  ];

  // Backend skills
  const backendSkills = [
    { skill: "Node.js", percentage: 75, icon: <SiNodedotjs className="w-5 h-5 text-green-600" /> },
    { skill: "Express.js", percentage: 70, icon: <SiExpress className="w-5 h-5" /> },
    { skill: "MongoDB", percentage: 65, icon: <SiMongodb className="w-5 h-5 text-green-500" /> },
    { skill: "Firebase", percentage: 75, icon: <SiFirebase className="w-5 h-5 text-yellow-600" /> },
    { skill: "REST APIs", percentage: 85, icon: <FaServer className="w-5 h-5 text-blue-400" /> },
    { skill: "SQL Databases", percentage: 60, icon: <FaDatabase className="w-5 h-5 text-blue-300" /> }
  ];

  // Tools skills
  const toolsSkills = [
    { skill: "Git/GitHub", percentage: 85, icon: <SiGit className="w-5 h-5 text-red-500" /> },
    { skill: "AWS", percentage: 60, icon: <SiAew className="w-5 h-5 text-orange-400" /> },
    { skill: "Docker", percentage: 55, icon: <SiDocker className="w-5 h-5 text-blue-500" /> },
    { skill: "CI/CD", percentage: 65, icon: <FaServer className="w-5 h-5 text-gray-500" /> },
    { skill: "Agile/Scrum", percentage: 80, icon: <SiJira className="w-5 h-5 text-blue-500" /> }
  ];

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, staggerChildren: 0.2 }
      });
    }
  }, [controls, inView]);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="skills-section">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technical Skills
          </h2>
          
          {/* Frontend Skills */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-12">
            {frontendSkills.map((item) => (
              <SkillBar
                key={item.skill}
                skill={item.skill}
                percentage={item.percentage}
                icon={item.icon}
              />
            ))}
          </div>
          
          {/* Backend Skills */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-12">
            {backendSkills.map((item) => (
              <SkillBar
                key={item.skill}
                skill={item.skill}
                percentage={item.percentage}
                icon={item.icon}
              />
            ))}
          </div>
          
          {/* Tools Skills */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-12">
            {toolsSkills.map((item) => (
              <SkillBar
                key={item.skill}
                skill={item.skill}
                percentage={item.percentage}
                icon={item.icon}
              />
            ))}
          </div>
          
          {/* Other Technologies */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              Other Technologies I Work With
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "GraphQL", "Jest", "Webpack", "SASS", 
                "Material UI", "PostgreSQL", "RESTful APIs", "GitHub Actions",
                "Responsive Design", "Figma", "Accessibility (WCAG)",
                "MERN Stack", "MEAN Stack", "JWT Authentication", "OAuth"
              ].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-2 bg-white dark:bg-gray-800 shadow-sm text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;