// src/app/page.tsx
"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SectionDivider from '@/components/SectionDivider';
import StackVisualization from '@/components/StackVisualization';
import SkillsRadar from '@/components/SkillsRadar';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/i18n';

// Sample projects data - replace with your actual projects
const featuredProjects = [
  {
    title: "Frontend Authentication System",
    description: "A comprehensive authentication system with OAuth integration, form validation, and error handling built with React and Redux Toolkit.",
    image: "/images/projects/frontend-assignment/thumbnail.jpg",
    tags: ["React", "Redux", "Tailwind CSS", "Vitest"],
    link: "/projects/frontend-assignment",
    github: "https://github.com/KsaintJ/assignment4-frontend",
    demo: "https://frontend-auth-demo.vercel.app"
  },
  {
    title: "Backend News API",
    description: "A RESTful API for news articles with authentication, authorization, and CRUD operations built with Node.js, Express, and MongoDB.",
    image: "/images/projects/backend-assignment/thumbnail.jpg",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "/projects/backend-assignment",
    github: "https://github.com/KsaintJ/assignment3-backend"
  },
  {
    title: "Elderly Care Management System",
    description: "A full-stack application for managing elderly care services, including patient records, medication tracking, and appointment scheduling.",
    image: "/images/projects/elderly-care-management/thumbnail.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "/projects/elderly-care-management",
    github: "https://github.com/KsaintJ/elderly-care-management",
    demo: "https://www.youtube.com/watch?v=1-amkgJm36M"
  },
];

export default function Home() {
  const controls = useAnimation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Start the animation when user has scrolled a bit
      if (window.scrollY > 100) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut"
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <Hero />
      
      {/* Section Divider */}
      <SectionDivider color="from-white to-gray-50" bgColor="fill-gray-50" />
      
      {/* Stack Visualization Section */}
      <section id="skills-section" className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <StackVisualization />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('skills.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('skills.description')}
            </p>
          </motion.div>

          <SkillsRadar />
        </div>
      </section>
      
      {/* Section Divider */}
      <SectionDivider flip={true} color="from-gray-50 to-white" bgColor="fill-white" />
      
      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('projects.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {t('projects.description')}
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  github={project.github}
                  demo={project.demo}
                  link={project.link}
                />
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={0.5}>
            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 transform hover:translate-y-[-2px] shadow-md"
              >
                {t('projects.viewAll')}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Section Divider */}
      <SectionDivider color="from-white to-blue-600/10" bgColor="fill-blue-600" />
      
      {/* Ready to Work Together Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative">
        <div className="absolute inset-0 bg-blue-600 opacity-20" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t('cta.title')}
            </motion.h2>
            
            <motion.p
              className="text-lg md:text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('cta.description')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
              >
                {t('cta.button')}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}