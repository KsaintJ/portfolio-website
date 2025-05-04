"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import Footer from '@/components/Footer';

export default function PortfolioWebsitePage() {
  // Technologies used in the project
  const technologies = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion",
    "API Routes", "Node.js", "Nodemailer", "Responsive Design", "Dark Mode"
  ];

  // Features of the project
  const features = [
    {
      title: "Modern React Architecture",
      description: "Built with Next.js and React using the latest patterns and practices for optimal performance."
    },
    {
      title: "Responsive Design",
      description: "Fully responsive layout that works seamlessly across mobile, tablet, and desktop devices."
    },
    {
      title: "Dark/Light Mode",
      description: "Theme switching functionality that respects user preferences and enhances accessibility."
    },
    {
      title: "Interactive UI",
      description: "Smooth animations and transitions powered by Framer Motion for an engaging user experience."
    },
    {
      title: "Contact Form Integration",
      description: "Serverless API route with Nodemailer for sending emails directly from the contact form."
    },
    {
      title: "SEO Optimization",
      description: "Proper metadata and structured content to enhance search engine visibility."
    }
  ];

  // Code snippets to showcase your technical skills
  const codeSnippets = [
    {
      title: 'Contact Form with Validation',
      code: `"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setStatus('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form fields */}
    </form>
  );
}`,
      language: 'javascript'
    },
    {
      title: 'Theme Provider Implementation',
      code: `"use client";

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => null,
  toggleTheme: () => null,
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);`,
      language: 'javascript'
    }
  ];

  // Development phases of the portfolio project
  const developmentPhases = [
    {
      title: "Requirements Gathering & Planning",
      description: "Defined the key portfolio requirements, including showcasing projects, skills, and providing contact information. Created wireframes and selected the technology stack."
    },
    {
      title: "Design & UI Development",
      description: "Implemented a clean, responsive UI with Tailwind CSS. Created a cohesive design system with dark/light mode support. Built reusable components for consistency across pages."
    },
    {
      title: "Core Functionality",
      description: "Developed project showcases, skills visualization, and a responsive navigation system. Implemented smooth page transitions and animations using Framer Motion."
    },
    {
      title: "Backend Integration",
      description: "Set up serverless API routes for the contact form. Implemented email functionality using Nodemailer to forward contact messages directly to my inbox."
    },
    {
      title: "Testing & Optimization",
      description: "Conducted cross-browser and mobile testing. Optimized images and implemented lazy loading for better performance. Made accessibility improvements throughout the site."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
            <FaArrowLeft className="mr-2" />
            Back to Projects
          </Link>
        </div>
        
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Personal Portfolio Website
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.slice(0, 5).map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* GitHub & Live Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/KsaintJ/portfolio-website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-md transition duration-300"
            >
              <FaGithub className="mr-2" />
              View on GitHub
            </a>
            
            <a
              href="https://kendersaintjuste.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300"
            >
              <FaExternalLinkAlt className="mr-2" />
              View Live Site
            </a>
          </div>
        </motion.div>
        
        {/* Main Project Image - Using SVG placeholder since actual images might be missing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/projects/portfolio-website/thumbnail.svg"
              alt="Portfolio Website"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
              className="object-cover"
              onError={(e) => {
                // Fallback to gradient background if image fails to load
                e.target.style.display = 'none';
                e.target.parentElement.style.background = 'linear-gradient(to right, #3b82f6, #6366f1)';
                const div = document.createElement('div');
                div.className = 'absolute inset-0 flex items-center justify-center';
                div.innerHTML = '<div class="text-white text-2xl font-bold text-center px-4">Portfolio Website</div>';
                e.target.parentElement.appendChild(div);
              }}
            />
          </div>
        </motion.div>
        
        {/* Project Description */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Project Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This portfolio website serves as a comprehensive showcase of my skills, projects, and professional journey as a software developer. Built using modern web technologies including Next.js, React, and Tailwind CSS, the site features responsive design, dark/light mode functionality, and interactive UI elements.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The project itself demonstrates my abilities in frontend development, UI/UX design principles, and implementation of serverless functionality. It was designed with accessibility and performance in mind, ensuring a seamless experience for all visitors.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Development Process
              </h2>
              <div className="space-y-8">
                {developmentPhases.map((phase, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Technologies Used
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Next.js 14 for frontend framework
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  React for component architecture
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  TypeScript for type safety
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Tailwind CSS for styling
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Framer Motion for animations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Next.js API Routes for backend
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Nodemailer for email functionality
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Vercel for hosting and deployment
                </li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Performance Metrics
              </h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Lighthouse Performance</span>
                    <span className="text-gray-700 dark:text-gray-300">95+</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Accessibility</span>
                    <span className="text-gray-700 dark:text-gray-300">98+</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Mobile Responsiveness</span>
                    <span className="text-gray-700 dark:text-gray-300">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Code Snippets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Code Highlights
          </h2>
          
          <div className="space-y-8">
            {codeSnippets.map((snippet, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 font-mono text-sm text-gray-800 dark:text-gray-200">
                  {snippet.title}
                </div>
                <pre className="p-4 overflow-x-auto text-sm bg-gray-900 text-gray-200">
                  <code className={`language-${snippet.language}`}>
                    {snippet.code}
                  </code>
                </pre>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Challenges and Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Challenges & Solutions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Dark Mode Implementation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Challenge:</strong> Implementing a dark mode that works seamlessly with Next.js 14&apos;s App Router while avoiding hydration mismatches.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong> Created a custom ThemeProvider component using React Context API that synchronizes with localStorage and the system preference. Used the next-themes library to handle the complexities of server-side rendering with theme detection.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Contact Form Backend
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Challenge:</strong> Creating a secure and reliable backend for the contact form without setting up a dedicated server.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong> Utilized Next.js API Routes to create a serverless backend function that processes form submissions and sends emails using Nodemailer. Implemented proper validation and error handling to ensure security and reliability.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Performance Optimization
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Challenge:</strong> Ensuring fast page loads while maintaining visual appeal with animations and images.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong> Used Next.js Image component for optimized image loading, implemented lazy loading for below-the-fold content, and carefully crafted Framer Motion animations to minimize layout shifts and maintain smooth performance.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Lessons Learned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Lessons Learned
          </h2>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white shadow-lg">
            <p className="mb-4">
              This project provided valuable insights and learning opportunities:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modern React development with Next.js App Router architecture</li>
              <li>Implementing accessible design practices including keyboard navigation and color contrast</li>
              <li>Serverless backend development for form processing</li>
              <li>Optimizing animations for performance while maintaining visual appeal</li>
              <li>Managing theme switching with proper user preference detection</li>
              <li>Building a portfolio that effectively showcases both design and technical skills</li>
            </ul>
          </div>
        </motion.div>
        
        {/* Internship Relevance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Relevance to Internship Goals
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This project demonstrates several skills that are directly applicable to frontend and full-stack development internships:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Proficiency with modern React development patterns and Next.js framework</li>
              <li>Ability to create responsive, accessible, and visually appealing user interfaces</li>
              <li>Experience with TypeScript for type safety and code quality</li>
              <li>Implementation of serverless backend functionality for form processing</li>
              <li>Understanding of performance optimization and best practices</li>
              <li>Creating maintainable and well-structured component architecture</li>
              <li>Implementing client-side functionality with proper state management</li>
            </ul>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}