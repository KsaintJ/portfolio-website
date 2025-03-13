"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Footer from '@/components/Footer';
import SafeMotion from '@/components/SafeMotion';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [displayCount, setDisplayCount] = useState(6);
  
  // Project data with image paths
  const projects = [
    {
      id: 'elderly-care-management',
      title: 'Elderly Care Management System',
      description: 'A comprehensive web application for managing elderly care facilities, tracking patient information, and coordinating staff schedules.',
      image: '/images/projects/elderly-care-management/thumbnail.jpg',
      tags: ['React', 'Material UI', 'Node.js', 'Express'],
      githubUrl: 'https://github.com/psu-edu/pswc-se-2025-spring-sweng861-Kender',
      videoUrl: 'https://www.youtube.com/watch?v=1-amkgJm36M',
      category: 'full-stack',
      featured: true,
      detailsUrl: '/projects/elderly-care-management'
    },
    {
      id: 'frontend-assignment',
      title: 'Frontend Authentication System',
      description: 'A modern web application implementing secure authentication and API integration, featuring comprehensive error handling and thorough testing coverage.',
      image: '/images/projects/frontend-assignment/thumbnail.jpg',
      tags: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Vitest', 'Google OAuth'],
      githubUrl: 'https://github.com/KsaintJ/assignment4-frontend',
      liveUrl: null,
      category: 'frontend',
      featured: true,
      detailsUrl: '/projects/frontend-assignment'
    },
    {
      id: 'backend-assignment',
      title: 'News API Backend Service',
      description: 'A backend service implementing REST APIs for news articles, with CRUD operations, third-party API integration, and comprehensive error handling.',
      image: '/images/projects/backend-assignment/thumbnail.jpg',
      tags: ['Node.js', 'Express', 'MongoDB', 'News API', 'CRUD'],
      githubUrl: 'https://github.com/KsaintJ/assignment3-backend',
      liveUrl: null,
      category: 'backend',
      featured: true,
      detailsUrl: '/projects/backend-assignment'
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS to showcase my projects and skills.',
      // Optional: You can use a placeholder or comment this out if no image is available
      // image: '/images/projects/portfolio-website/thumbnail.jpg',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/KsaintJ/portfolio-website',
      liveUrl: 'https://kendersaintjuste.dev',
      category: 'frontend',
      featured: true,
      detailsUrl: '/projects/portfolio-website'
    }
  ];
  
  // Filter categories
  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'full-stack', label: 'Full Stack' }
  ];
  
  // Apply filters
  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  // Only display a subset of projects based on the displayCount
  const displayedProjects = filteredProjects.slice(0, displayCount);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-10">
        <SafeMotion 
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </SafeMotion>
        
        <SafeMotion 
          className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here&apos;s a collection of my recent work, showcasing my skills in frontend and full-stack development.
        </SafeMotion>
        
        {/* Filter and Search */}
        <SafeMotion 
          className="mb-12 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  filter === option.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          
          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 outline-none transition duration-300"
            />
          </div>
        </SafeMotion>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project, index) => (
              <SafeMotion
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={index < 6} // Prioritize loading for first 6 images
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold p-4 text-center">
                      {project.title}
                    </div>
                  )}
                  
                  {/* Hover overlay with action buttons */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <motion.a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <FaGithub className="h-5 w-5 text-white" />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <FaExternalLinkAlt className="h-5 w-5 text-white" />
                        </motion.a>
                      )}
                      {project.videoUrl && (
                        <motion.a 
                          href={project.videoUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          aria-label={`Video demo for ${project.title}`}
                        >
                          <FaExternalLinkAlt className="h-5 w-5 text-white" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <Link
                    href={project.detailsUrl}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </SafeMotion>
            ))
          ) : (
            <SafeMotion 
              className="col-span-full text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No projects match your criteria. Try adjusting your filters.
              </p>
            </SafeMotion>
          )}
        </div>
        
        {/* Load More Button */}
        {filteredProjects.length > displayCount && (
          <SafeMotion 
            className="flex justify-center mt-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setDisplayCount(prev => prev + 3)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md transition duration-300 flex items-center"
            >
              <span>Load More Projects</span>
              <svg 
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </SafeMotion>
        )}
        
        {/* Additional Projects / GitHub Repositories Section */}
        <SafeMotion 
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            More on GitHub
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Beyond the featured projects above, you can explore more of my work and code contributions on GitHub. I&apos;m constantly learning and building new things!
          </p>
          
          
          <a
            href="https://github.com/KsaintJ"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-md transition duration-300"
          >
            <FaGithub className="mr-2 h-5 w-5" />
            View GitHub Profile
          </a>
        </SafeMotion>
      </div>
      <Footer />
    </div>
  );
}