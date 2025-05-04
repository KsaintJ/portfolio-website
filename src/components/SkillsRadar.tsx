// src/components/SkillsRadar.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiGit,
  SiHtml5, SiTypescript, SiMongodb, SiExpress, SiFirebase, SiAngular,
  SiDocker, SiJira, SiBootstrap, SiRedux } from 'react-icons/si';
import { FaServer, FaDatabase } from 'react-icons/fa';
import SafeClientOnly from './SafeClientOnly';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '@/i18n';

// Skill item interface
interface SkillItem {
  skill: string;
  percentage: number;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'tools';
}

const categories = [
  { id: 'all', label: 'All Skills' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'tools', label: 'Tools & Methods' },
];

// Skill data collection
const skillsData: SkillItem[] = [
  // Frontend skills
  { skill: "JavaScript", percentage: 90, icon: <SiJavascript className="w-5 h-5 text-yellow-500" />, category: 'frontend' },
  { skill: "React", percentage: 85, icon: <SiReact className="w-5 h-5 text-blue-500" />, category: 'frontend' },
  { skill: "HTML5/CSS3", percentage: 95, icon: <SiHtml5 className="w-5 h-5 text-orange-500" />, category: 'frontend' },
  { skill: "Next.js", percentage: 80, icon: <SiNextdotjs className="w-5 h-5" />, category: 'frontend' },
  { skill: "Tailwind CSS", percentage: 85, icon: <SiTailwindcss className="w-5 h-5 text-teal-500" />, category: 'frontend' },
  { skill: "TypeScript", percentage: 70, icon: <SiTypescript className="w-5 h-5 text-blue-600" />, category: 'frontend' },
  { skill: "Angular", percentage: 70, icon: <SiAngular className="w-5 h-5 text-red-600" />, category: 'frontend' },
  { skill: "Redux", percentage: 75, icon: <SiRedux className="w-5 h-5 text-purple-600" />, category: 'frontend' },
  { skill: "Bootstrap", percentage: 90, icon: <SiBootstrap className="w-5 h-5 text-purple-500" />, category: 'frontend' },
  
  // Backend skills
  { skill: "Node.js", percentage: 75, icon: <SiNodedotjs className="w-5 h-5 text-green-600" />, category: 'backend' },
  { skill: "Express.js", percentage: 70, icon: <SiExpress className="w-5 h-5" />, category: 'backend' },
  { skill: "MongoDB", percentage: 65, icon: <SiMongodb className="w-5 h-5 text-green-500" />, category: 'backend' },
  { skill: "Firebase", percentage: 75, icon: <SiFirebase className="w-5 h-5 text-yellow-600" />, category: 'backend' },
  { skill: "REST APIs", percentage: 85, icon: <FaServer className="w-5 h-5 text-blue-400" />, category: 'backend' },
  { skill: "SQL Databases", percentage: 60, icon: <FaDatabase className="w-5 h-5 text-blue-300" />, category: 'backend' },
  
  // Tools skills
  { skill: "Git/GitHub", percentage: 85, icon: <SiGit className="w-5 h-5 text-red-500" />, category: 'tools' },
  { skill: "Docker", percentage: 55, icon: <SiDocker className="w-5 h-5 text-blue-500" />, category: 'tools' },
  { skill: "CI/CD", percentage: 65, icon: <FaServer className="w-5 h-5 text-gray-500" />, category: 'tools' },
  { skill: "Agile/Scrum", percentage: 80, icon: <SiJira className="w-5 h-5 text-blue-500" />, category: 'tools' }
];

const SkillCard = ({ skill, percentage, icon, index }: { skill: string; percentage: number; icon: React.ReactNode; index: number }) => {
  return (
    <ScrollReveal delay={index * 0.05} className="h-full">
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow h-full"
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="mr-3 text-gray-700 dark:text-gray-300 text-xl">
              {icon}
            </span>
            <span className="font-medium text-gray-800 dark:text-white">{skill}</span>
          </div>
          <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{percentage}%</span>
        </div>
        
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

export default function SkillsRadar() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { t } = useLanguage();
  
  const filteredSkills = skillsData.filter(
    skill => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <SafeClientOnly>
      <div className="mb-10">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {t(`skills.categories.${category.id}`)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.skill}
              skill={skill.skill}
              percentage={skill.percentage}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
        
        {/* Other Technologies */}
        <ScrollReveal direction="up" delay={0.2} className="mt-16">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              {t('skills.otherTech')}
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "GraphQL", "Jest", "Webpack", "SASS", 
                "Material UI", "PostgreSQL", "RESTful APIs", "GitHub Actions",
                "Responsive Design", "Figma", "Accessibility (WCAG)",
                "MERN Stack", "MEAN Stack", "JWT Authentication", "OAuth"
              ].map((tech, index) => (
                <motion.span 
                  key={tech} 
                  className="px-3 py-2 bg-white dark:bg-gray-800 shadow-sm text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ 
                    y: -3, 
                    backgroundColor: "var(--blue-50)", 
                    color: "var(--blue-600)",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SafeClientOnly>
  );
}