"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import Footer from '@/components/Footer';
import SafeMotion from '@/components/SafeMotion';

export default function FrontendAssignmentPage() {
  // Project screenshots using your actual images
  const screenshots = [
    {
      src: '/images/projects/frontend-assignment/1-login-page.png',
      alt: 'Login Page',
      caption: 'Secure authentication interface with form validation'
    },
    {
      src: '/images/projects/frontend-assignment/5-dashboard.png',
      alt: 'Dashboard',
      caption: 'Protected dashboard with user-specific content'
    },
    {
      src: '/images/projects/frontend-assignment/3-google-oauth.png',
      alt: 'Google OAuth Integration',
      caption: 'Social login integration for seamless authentication'
    },
    {
      src: '/images/projects/frontend-assignment/4-success-messages.png',
      alt: 'Success Messages',
      caption: 'User-friendly feedback for successful operations'
    },
    {
      src: '/images/projects/frontend-assignment/4-mfa-screen.png',
      alt: 'Multi-Factor Authentication',
      caption: 'Enhanced security with multi-factor authentication'
    },
    {
      src: '/images/projects/frontend-assignment/3-real-time-stats.png',
      alt: 'Real-time Statistics',
      caption: 'Live data visualization for dynamic user metrics'
    }
  ];

  // Code snippets to showcase your technical skills
  const codeSnippets = [
    {
      title: 'Authentication Service',
      code: `// Authentication service with error handling
export const authService = {
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      const { token, user } = response.data;
      
      // Store token in secure storage
      secureStorage.setItem('auth_token', token);
      
      return { user, error: null };
    } catch (error) {
      return {
        user: null,
        error: handleAuthError(error)
      };
    }
  },
  
  logout: async () => {
    try {
      await api.post('/auth/logout');
      secureStorage.removeItem('auth_token');
      return { error: null };
    } catch (error) {
      return { error: handleAuthError(error) };
    }
  },
  
  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      return { success: true, error: null };
    } catch (error) {
      return { success: false, error: handleAuthError(error) };
    }
  },
  
  forgotPassword: async (email) => {
    try {
      await api.post('/auth/forgot-password', { email });
      return { success: true, error: null };
    } catch (error) {
      return { success: false, error: handleAuthError(error) };
    }
  },
  
  resetPassword: async (token, newPassword) => {
    try {
      await api.post('/auth/reset-password', { token, newPassword });
      return { success: true, error: null };
    } catch (error) {
      return { success: false, error: handleAuthError(error) };
    }
  },
  
  getCurrentUser: async () => {
    try {
      const response = await api.get('/auth/me');
      return { user: response.data, error: null };
    } catch (error) {
      return { user: null, error: handleAuthError(error) };
    }
  }
};`,
      language: 'javascript'
    },
    {
      title: 'Form Validation Hook',
      code: `// Custom form validation hook
export const useFormValidation = (initialState, validationRules) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        // Form is valid, can submit
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors, isSubmitting]);
  
  const validate = () => {
    const validationErrors = {};
    
    Object.keys(validationRules).forEach(key => {
      const value = values[key];
      const rules = validationRules[key];
      
      if (rules.required && !value) {
        validationErrors[key] = 'This field is required';
      } else if (rules.pattern && !rules.pattern.test(value)) {
        validationErrors[key] = rules.message || 'Invalid format';
      }
      // Additional validation checks...
    });
    
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  
  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    
    if (validate()) {
      callback(values);
    }
  };
  
  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    setValues
  };
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
        <SafeMotion>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frontend Authentication System
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                Redux Toolkit
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                Vitest
              </span>
            </div>
            
            {/* GitHub Link */}
            <a
              href="https://github.com/KsaintJ/assignment4-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-md transition duration-300"
            >
              <FaGithub className="mr-2" />
              View on GitHub
            </a>
          </motion.div>
        </SafeMotion>
        
        {/* Main Project Image */}
        <SafeMotion>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/projects/frontend-assignment/thumbnail.jpg"
                alt="Frontend Authentication System"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
                className="object-cover"
                style={{ objectPosition: 'center' }}
                onError={(e) => {
                  // Fallback to gradient background if image fails to load
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(to right, #3b82f6, #6366f1)';
                  const div = document.createElement('div');
                  div.className = 'absolute inset-0 flex items-center justify-center';
                  div.innerHTML = '<div class="text-white text-2xl font-bold text-center px-4">Frontend Authentication System</div>';
                  (e.target as HTMLImageElement).parentElement?.appendChild(div);
                }}
              />
            </div>
          </motion.div>
        </SafeMotion>
        
        {/* Project Description */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <SafeMotion>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Project Overview
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  This project implements a modern frontend authentication system with comprehensive error handling and thorough testing coverage. The application features secure login/signup flows, form validation, protected routes, and integration with backend services.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Key Features
                </h2>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                  <li><strong>User Authentication:</strong> Secure login, registration, and password recovery flows</li>
                  <li><strong>OAuth Integration:</strong> Google authentication for simplified login</li>
                  <li><strong>Form Validation:</strong> Client-side validation with meaningful error messages</li>
                  <li><strong>Protected Routes:</strong> Role-based access control for secure navigation</li>
                  <li><strong>Error Handling:</strong> Comprehensive error management with user-friendly messages</li>
                  <li><strong>State Management:</strong> Centralized application state using Redux Toolkit</li>
                  <li><strong>Multi-Factor Authentication:</strong> Enhanced security with MFA implementation</li>
                  <li><strong>Real-time Data Visualization:</strong> Dynamic statistics dashboard</li>
                  <li><strong>Testing:</strong> Extensive test coverage with Vitest and React Testing Library</li>
                  <li><strong>Responsive Design:</strong> Mobile-first approach with Tailwind CSS</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Technical Challenges & Solutions
                </h2>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    Challenge: Secure Authentication Flow
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Implementing a secure authentication flow with proper token management, expiration handling, and refresh mechanisms was complex.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Solution:</strong> I designed a robust authentication service using HTTP-only cookies for token storage, implemented token refresh mechanisms, and built proper logout functionality that cleared all auth state.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    Challenge: Comprehensive Error Handling
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Error handling needed to be comprehensive yet user-friendly, covering network errors, validation errors, and authentication failures.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Solution:</strong> I implemented a centralized error handling system that categorized errors by type and displayed appropriate user-friendly messages without exposing sensitive technical details.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    Challenge: Multi-Factor Authentication
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Adding MFA while maintaining a smooth user experience was challenging.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Solution:</strong> I implemented a step-by-step verification process with clear instructions and fallback options for users. The system supports both app-based and SMS verification methods.
                  </p>
                </div>
              </motion.div>
            </SafeMotion>
          </div>
          
          <div>
            <SafeMotion>
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
                    React with Vite
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    Redux Toolkit
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    Vitest & React Testing Library
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    Google OAuth
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    Axios for API requests
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    React Router
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    JWT Authentication
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    Chart.js for data visualization
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                  Testing Statistics
                </h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Unit Tests</span>
                      <span className="text-gray-700 dark:text-gray-300">24 tests</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Integration Tests</span>
                      <span className="text-gray-700 dark:text-gray-300">12 tests</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Code Coverage</span>
                      <span className="text-gray-700 dark:text-gray-300">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SafeMotion>
          </div>
        </div>
        
        {/* Code Snippets */}
        <SafeMotion>
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
        </SafeMotion>
        
        {/* Project Screenshots Gallery */}
        <SafeMotion>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Screenshots
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {screenshots.map((screenshot, index) => (
                <SafeMotion key={index}>
                  <motion.div
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
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(to right, #3b82f6, #6366f1)';
                          const div = document.createElement('div');
                          div.className = 'absolute inset-0 flex items-center justify-center';
                          div.innerHTML = `<div class="text-white text-xl font-bold text-center px-4">${screenshot.alt}</div>`;
                          (e.target as HTMLImageElement).parentElement!.appendChild(div);
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">{screenshot.alt}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{screenshot.caption}</p>
                    </div>
                  </motion.div>
                </SafeMotion>
              ))}
            </div>
          </motion.div>
        </SafeMotion>
        
        {/* Lessons Learned */}
        <SafeMotion>
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
                <li>Implementing proper authentication flows with security best practices</li>
                <li>Building robust state management with Redux Toolkit</li>
                <li>Writing effective tests to ensure code reliability</li>
                <li>Creating accessible form components with proper validation</li>
                <li>Handling edge cases and error states gracefully</li>
                <li>Balancing user experience with security requirements</li>
                <li>Implementing complex features like MFA and real-time data visualization</li>
                <li>Optimizing front-end performance for a responsive user experience</li>
              </ul>
            </div>
          </motion.div>
        </SafeMotion>
        
        {/* Professional Relevance */}
        <SafeMotion>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Relevance 
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This project demonstrates skills that are directly applicable to professional frontend and full-stack development roles:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Building secure authentication systems - essential for enterprise applications</li>
                <li>Implementing robust error handling and form validation - critical for user experience</li>
                <li>Writing maintainable and testable code - valued in professional development environments</li>
                <li>Using modern frontend technologies (React, Redux, Tailwind) - sought after in the job market</li>
                <li>Working with design patterns and best practices that scale to larger applications</li>
                <li>Applying security considerations from my information security background to frontend development</li>
              </ul>
            </div>
          </motion.div>
        </SafeMotion>
      </div>
      <Footer />
    </div>
  );
}