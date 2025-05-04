"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaDownload, FaBasketballBall, FaCode, FaGlobeAmericas, FaLightbulb, FaUserTie, FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n';
import SafeClientOnly from '@/components/SafeClientOnly';

const AboutPage = () => {
  const { t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Career timeline data
  const getTimelineItems = () => [
    {
      year: '2025 - 2027',
      title: t('about.timeline.graduateStudent.title'),
      organization: t('about.timeline.graduateStudent.organization'),
      description: t('about.timeline.graduateStudent.description')
    },
    {
      year: '2023 - Present',
      title: t('about.timeline.supportSpecialist.title'),
      organization: t('about.timeline.supportSpecialist.organization'),
      description: t('about.timeline.supportSpecialist.description')
    },
    {
      year: '2022 - 2023',
      title: t('about.timeline.salesRep.title'),
      organization: t('about.timeline.salesRep.organization'),
      description: t('about.timeline.salesRep.description')
    },
    {
      year: '2021 - 2022',
      title: t('about.timeline.salesDev.title'),
      organization: t('about.timeline.salesDev.organization'),
      description: t('about.timeline.salesDev.description')
    },
    {
      year: '2019 - 2023',
      title: t('about.timeline.bachelors.title'),
      organization: t('about.timeline.bachelors.organization'),
      description: t('about.timeline.bachelors.description')
    }
  ];
  
  const timelineItems = getTimelineItems();

  // Personal traits based on assessment
  const getPersonalTraits = () => [
    {
      category: t('about.traits.diligent'),
      traits: ["Focused", "Goal-Oriented", "Dependable", "Determined", "Ambitious", "Organized"]
    },
    {
      category: t('about.traits.creative'),
      traits: ["Imaginative", "Original", "Artistic", "Curious", "Visionary", "Unconventional"]
    }
  ];
  
  const personalTraits = getPersonalTraits();

  return (
    <SafeClientOnly>
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Hero Section */}
            <motion.div 
              className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Image */}
              <motion.div 
                className="w-64 h-64 lg:w-80 lg:h-80 relative rounded-xl overflow-hidden shadow-xl"
                variants={itemVariants}
              >
                <Image
                  src="/images/profile.jpg" 
                  alt="Kender Saint-Juste" 
                  fill
                  sizes="(max-width: 768px) 16rem, 20rem"
                  className="object-cover"
                  priority
                />
              </motion.div>
              
              {/* Intro Text */}
              <motion.div variants={itemVariants} className="max-w-2xl">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('about.title')}
                </h1>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {t('about.intro.subtitle')}
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {t('about.intro.description1')}
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  {t('about.intro.description2')}
                </p>
                
                {/* Resume Downloads */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/resumes/Resume_Junior_Dev.pdf" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md transition duration-300 transform hover:scale-105"
                  >
                    <FaDownload className="mr-2" />
                    {t('about.resumeButtons.primary')}
                  </Link>
                  
                  {/* Dropdown for other resume options */}
                  <div className="relative">
                    <button 
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 font-medium rounded-md transition duration-300"
                    >
                      {t('about.resumeButtons.dropdown')}
                      <FaChevronDown className="ml-2 h-4 w-4" />
                    </button>
                    
                    {dropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
                        <Link
                          href="/resumes/Resume_General.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {t('about.resumeButtons.general')}
                        </Link>
                        <Link
                          href="/resumes/Resume_Frontend.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-md"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {t('about.resumeButtons.frontend')}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Internship Section - Added here after introduction */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="py-12 px-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl mb-20"
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {t('about.internship.title')}
                </h2>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    {t('about.internship.description')}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {t('about.internship.availability.title')}
                      </h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 text-blue-600 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="ml-2">{t('about.internship.availability.fullTime')}</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 text-blue-600 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="ml-2">{t('about.internship.availability.partTime')}</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 text-blue-600 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="ml-2">{t('about.internship.availability.location')}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {t('about.internship.interests.title')}
                      </h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 text-blue-600 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="ml-2">{t('about.internship.interests.frontend')}</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 text-blue-600 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="ml-2">{t('about.internship.interests.fullstack')}</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 text-blue-600 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="ml-2">{t('about.internship.interests.webApp')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300 transform hover:scale-105 shadow-md"
                    >
                      {t('about.internship.cta')}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>
            
            {/* Personal Traits Section */}
            <section className="mb-20">
              <motion.h2 
                className="text-2xl lg:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {t('about.traits.title')}
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {personalTraits.map((traitGroup) => (
                  <motion.div 
                    key={traitGroup.category}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      {traitGroup.category === "Diligent" ? (
                        <FaUserTie className="text-blue-600 dark:text-blue-400 mr-2" />
                      ) : (
                        <FaLightbulb className="text-blue-600 dark:text-blue-400 mr-2" />
                      )}
                      {traitGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {traitGroup.traits.map((trait) => (
                        <span 
                          key={trait} 
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
            
            {/* Core Competencies */}
            <section className="mb-20">
              <motion.h2 
                className="text-2xl lg:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {t('about.skills.title')}
              </motion.h2>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { skill: "JavaScript/TypeScript", level: 85 },
                  { skill: "React/Next.js", level: 82 },
                  { skill: "HTML/CSS", level: 90 },
                  { skill: "Node.js/Express", level: 78 },
                  { skill: "MongoDB", level: 75 },
                  { skill: "Tailwind CSS", level: 88 },
                  { skill: "RESTful APIs", level: 80 },
                  { skill: "Git/GitHub", level: 85 },
                  { skill: "Responsive Design", level: 90 },
                  { skill: "Angular", level: 72 }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item.skill}</span>
                      <span className="text-gray-700 dark:text-gray-300">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        className="bg-blue-600 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
  
              <motion.h3 
                className="text-xl font-bold text-gray-900 dark:text-white mt-12 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {t('about.skills.additional')}
              </motion.h3>
  
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Software & Web Development (MERN/MEAN Stack)",
                  "Version Control & CI/CD (Git, GitHub, GitLab)",
                  "Cloud Computing (AWS, Azure)",
                  "Software Testing & Debugging",
                  "Database Management (SQL, NoSQL)",
                  "Agile & Scrum Methodologies",
                  "RESTful APIs & Microservices",
                  "IT Support & Technical Troubleshooting",
                  "Customer Success & Account Management"
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <p className="text-gray-700 dark:text-gray-300">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </section>
            
            {/* My Journey Section */}
            <section className="mb-20">
              <motion.h2 
                className="text-2xl lg:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {t('about.journey.title')}
              </motion.h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
                
                {/* Timeline Items */}
                <div className="space-y-16">
                  {timelineItems.map((item, index) => (
                    <motion.div 
                      key={index}
                      className={`relative flex flex-col lg:flex-row items-center lg:items-start ${
                        index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                      }`}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 z-10"></div>
                      
                      {/* Date */}
                      <div className={`lg:w-1/2 pb-4 lg:pb-0 lg:px-8 text-center lg:text-right ${
                        index % 2 === 0 ? 'lg:text-left' : ''
                      }`}>
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium mb-2">
                          {item.year}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className={`lg:w-1/2 pl-8 lg:px-8 ${
                        index % 2 === 0 ? 'lg:text-right' : ''
                      }`}>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">
                          {item.organization}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {item.description}
                        </p>
                        
                        {/* Progress indicator for education items */}
                        {(item.title.includes('Student') || item.title.includes('Degree') || 
                          item.title.includes(t('about.timeline.graduateStudent.title')) || 
                          item.title.includes(t('about.timeline.bachelors.title'))) && (
                          <div className="mt-4 mb-2">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-gray-600 dark:text-gray-400">{t('about.journey.progress')}</span>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {item.title.includes('Graduate') || item.organization.includes('Penn State') ? '25%' : '100%'}
                              </span>
                            </div>
                            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                              <div 
                                className="bg-blue-600 h-2.5 rounded-full" 
                                style={{ 
                                  width: item.title.includes('Graduate') || item.organization.includes('Penn State') ? '25%' : '100%' 
                                }} 
                              ></div>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              {item.title.includes('Graduate') || item.organization.includes('Penn State') 
                                ? t('about.journey.inProgress')
                                : t('about.journey.completed')
                              }
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Passion & Interests */}
            <section className="mb-20">
              <motion.h2 
                className="text-2xl lg:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {t('about.passions.title')}
              </motion.h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">
                    <FaBasketballBall />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {t('about.passions.sports.title')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('about.passions.sports.description')}
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">
                    <FaCode />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {t('about.passions.tech.title')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('about.passions.tech.description')}
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">
                    <FaGlobeAmericas />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {t('about.passions.travel.title')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('about.passions.travel.description')}
                  </p>
                </motion.div>
              </div>
            </section>
            
           {/* Goals Section */}
<section className="pb-20">
  <motion.h2 
    className="text-2xl lg:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {t('about.goals.title')}
  </motion.h2>
  
  <motion.div 
    className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-lg mb-6">
      {t('about.goals.shortTerm')}
    </p>
    <p className="text-lg mb-6">
      {t('about.goals.midTerm')}
    </p>
    <p className="text-lg">
      {t('about.goals.longTerm')}
    </p>
  </motion.div>
</section>
</div>
        </div>
      </div>
      <Footer />
    </SafeClientOnly>
  );
};

export default AboutPage;