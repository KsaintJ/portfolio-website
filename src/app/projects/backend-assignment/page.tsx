"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import Footer from '@/components/Footer';

export default function BackendAssignmentPage() {
  // Technologies used in the project
  const technologies = [
    "Node.js", "Express", "MongoDB", "Mongoose", 
    "JWT Authentication", "RESTful API", "API Testing", "Postman"
  ];

  // Screenshots from the project
  const screenshots = [
    {
      src: '/images/projects/backend-assignment/07_news_api_save.png',
      alt: 'API Save Endpoint',
      caption: 'Successful POST request saving multiple news articles'
    },
    {
      src: '/images/projects/backend-assignment/08_article_create.png',
      alt: 'Article Creation',
      caption: 'Creating a new article with JSON payload'
    },
    {
      src: '/images/projects/backend-assignment/09_articles_get_all.png',
      alt: 'Get All Articles',
      caption: 'Retrieving all articles with pagination support'
    },
    {
      src: '/images/projects/backend-assignment/11_article_update.png',
      alt: 'Article Update',
      caption: 'Updating article content via PATCH request'
    },
    {
      src: '/images/projects/backend-assignment/12_article_delete.png',
      alt: 'Article Deletion',
      caption: 'Removing an article from the database'
    },
    {
      src: '/images/projects/backend-assignment/13_article_get_after_delete.png',
      alt: 'After Deletion',
      caption: 'Verification that article has been removed from database'
    }
  ];

  // Features of the project
  const features = [
    {
      title: "RESTful API Structure",
      description: "Complete CRUD operations for news articles following RESTful principles."
    },
    {
      title: "Authentication & Authorization",
      description: "Secure API endpoints with JWT tokens and role-based authorization."
    },
    {
      title: "Data Validation",
      description: "Robust request validation ensuring data integrity and error prevention."
    },
    {
      title: "Error Handling",
      description: "Comprehensive error handling with appropriate HTTP status codes and messages."
    },
    {
      title: "MongoDB Integration",
      description: "Efficient database operations using Mongoose with proper schema design."
    },
    {
      title: "Pagination & Filtering",
      description: "Advanced querying capabilities for retrieving subsets of data."
    }
  ];

  // Code snippets to showcase your technical skills
  const codeSnippets = [
    {
      title: 'Article Controller',
      code: `// Article controller methods for CRUD operations
const Article = require('../models/Article');
const { validationResult } = require('express-validator');

// Get all articles with pagination and filtering
exports.getAllArticles = async (req, res) => {
  try {
    const { page = 1, limit = 10, category, sortBy = 'createdAt', order = 'desc' } = req.query;
    
    // Build filter object
    const filter = {};
    if (category) filter.category = category;
    
    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Build sort object
    const sort = {};
    sort[sortBy] = order === 'desc' ? -1 : 1;
    
    // Execute query with pagination
    const articles = await Article.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit))
      .exec();
    
    // Get total count for pagination info
    const totalArticles = await Article.countDocuments(filter);
    
    res.status(200).json({
      success: true,
      count: articles.length,
      total: totalArticles,
      totalPages: Math.ceil(totalArticles / limit),
      currentPage: parseInt(page),
      articles
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while retrieving articles',
      error: error.message
    });
  }
};

// Create a new article
exports.createArticle = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false, 
      errors: errors.array()
    });
  }
  
  try {
    // Add user as author
    req.body.author = req.user.id;
    
    // Create new article
    const article = new Article(req.body);
    await article.save();
    
    res.status(201).json({
      success: true,
      message: 'Article created successfully',
      article
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while creating article',
      error: error.message
    });
  }
};`,
      language: 'javascript'
    },
    {
      title: 'Authentication Middleware',
      code: `// Authentication middleware to protect routes
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;
  
  // Check for token in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    // Extract token from Bearer header
    token = req.headers.authorization.split(' ')[1];
  }
  
  // Check if token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route'
    });
  }
  
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Get user from token
    req.user = await User.findById(decoded.id).select('-password');
    
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'User not found'
      });
    }
    
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route',
      error: error.message
    });
  }
};`,
      language: 'javascript'
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
            Backend News API
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* GitHub Link */}
          <a
            href="https://github.com/KsaintJ/backend-assignment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-md transition duration-300"
          >
            <FaGithub className="mr-2" />
            View on GitHub
          </a>
        </motion.div>
        
        {/* Main Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/projects/backend-assignment/07_news_api_save.png"
              alt="Backend News API"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
              className="object-cover"
              style={{ objectPosition: 'top' }}
              onError={(e) => {
                // Fallback to gradient background if image fails to load
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(to right, #3b82f6, #6366f1)';
                const div = document.createElement('div');
                div.className = 'absolute inset-0 flex items-center justify-center';
                div.innerHTML = '<div class="text-white text-2xl font-bold text-center px-4">Backend News API</div>';
                (e.target as HTMLImageElement).parentElement!.appendChild(div);
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
                The Backend News API is a robust RESTful API built with Node.js, Express, and MongoDB that provides a comprehensive solution for managing news articles. This API supports full CRUD operations, user authentication, role-based access control, and advanced querying capabilities.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Developed as part of my coursework at Penn State University, this project demonstrates my proficiency in building secure, scalable, and well-structured backend systems that follow industry best practices.
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
                Technical Challenges & Solutions
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Challenge: Secure Authentication
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Implementing a secure authentication system with proper token handling and role-based access.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Solution:</strong> I built a robust JWT-based authentication system with middleware that verifies tokens, extracts user information, and performs role checks. The solution includes token expiration, refresh mechanisms, and protection against common vulnerabilities.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Challenge: Advanced Querying
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Providing flexible API endpoints that support pagination, filtering, and sorting.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Solution:</strong> I implemented a dynamic query builder that processes request parameters to construct MongoDB queries. This allows clients to filter by multiple criteria, sort by any field, and paginate results efficiently.
                </p>
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
                  Node.js for server runtime
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Express.js for API framework
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  MongoDB for database
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Mongoose for ODM
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  JWT for authentication
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Express Validator for data validation
                </li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                API Metrics
              </h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Endpoints</span>
                    <span className="text-gray-700 dark:text-gray-300">15+</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Database Models</span>
                    <span className="text-gray-700 dark:text-gray-300">4</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
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
        
        {/* Project Screenshots Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            API Testing Screenshots
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative h-64">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'linear-gradient(to right, #3b82f6, #6366f1)';
                      const div = document.createElement('div');
                      div.className = 'absolute inset-0 flex items-center justify-center';
                      div.innerHTML = `<div class="text-white text-xl font-bold text-center px-4">${screenshot.alt}</div>`;
                      e.target.parentElement.appendChild(div);
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">{screenshot.alt}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{screenshot.caption}</p>
                </div>
              </motion.div>
            ))}
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
              This project provided valuable insights into building robust backend systems:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Designing and implementing secure authentication systems</li>
              <li>Creating scalable and maintainable API architectures</li>
              <li>Building effective data validation and error handling</li>
              <li>Working with MongoDB and Mongoose for efficient data operations</li>
              <li>Implementing role-based access control for API security</li>
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
              This project demonstrates skills that are directly applicable to backend and full-stack development internships:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Building secure and scalable Node.js/Express.js APIs</li>
              <li>Implementing JWT authentication and authorization systems</li>
              <li>Working with MongoDB/Mongoose for database operations</li>
              <li>Creating comprehensive API documentation</li>
              <li>Developing custom middleware for error handling and request processing</li>
              <li>Testing and debugging API endpoints</li>
            </ul>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}