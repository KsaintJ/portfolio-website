// components/ProjectCard.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  link: string;
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  github,
  demo,
  link,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full"
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Project Image with overlay on hover */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        
        {/* Overlay with buttons */}
        <motion.div 
          className="absolute inset-0 bg-blue-600/70 dark:bg-blue-800/80 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-colors duration-300"
              aria-label={`View ${title} source code on GitHub`}
            >
              <FaGithub className="w-5 h-5 text-white" />
            </a>
          )}
          
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-colors duration-300"
              aria-label={`View ${title} live demo`}
            >
              <FaExternalLinkAlt className="w-5 h-5 text-white" />
            </a>
          )}
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* View Details Link */}
        <Link
          href={link}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors"
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
    </motion.div>
  );
};

export default ProjectCard;