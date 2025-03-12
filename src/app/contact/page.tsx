// src/app/contact/page.tsx
"use client";

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import Footer from '@/components/Footer';

// Define types for better TypeScript support
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  submitted: boolean;
  success: boolean;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  [key: string]: string | undefined;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Sending your message...'
      });
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Your message has been sent! I will get back to you soon.'
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setFormStatus({
          submitted: true,
          success: false,
          message: data.error || 'There was an error sending your message. Please try again later.'
        });
      }
    } catch {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    }
  };
  
  const socialLinks = [
    { 
      icon: <FaGithub size={24} />, 
      url: 'https://github.com/KsaintJ', 
      label: 'GitHub',
      username: '@KsaintJ'
    },
    { 
      icon: <FaLinkedin size={24} />, 
      url: 'https://www.linkedin.com/in/kendersaintjuste/', 
      label: 'LinkedIn',
      username: 'Kender Saint-Juste'
    },
    { 
      icon: <FaEnvelope size={24} />, 
      url: 'mailto:ksaintjuste7@gmail.com', 
      label: 'Email',
      username: 'ksaintjuste7@gmail.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-10">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h1>
        
        <motion.p 
          className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I&apos;m currently available for freelance projects, full-time positions, and collaborative opportunities. 
          Feel free to reach out!
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>
            
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 mt-1 mr-4" size={20} />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-700 dark:text-gray-300">Tampa, Florida</p>
                </div>
              </div>
              
              {/* Response Time Expectation */}
              <div className="mt-6 border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-medium text-gray-900 dark:text-white">Response Time</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I typically respond to all inquiries within 24-48 hours. For urgent matters, 
                  please mention &quot;URGENT&quot; in the subject line.
                </p>
              </div>
            </div>
            
            {/* Preferred Contact Methods */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                Preferred Contact Methods
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  </span>
                  <span>For professional inquiries: LinkedIn or Email</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  </span>
                  <span>For code-related discussions: GitHub</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  </span>
                  <span>For quick questions: Email</span>
                </li>
              </ul>
            </div>
            
            {/* Availability Calendar */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-8">
              <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                <FaCalendarAlt className="mr-2 text-blue-600 dark:text-blue-400" />
                Meeting Availability
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                Currently available for virtual meetings during these hours:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <h4 className="text-gray-900 dark:text-white font-medium">Weekdays</h4>
                  <p className="text-gray-700 dark:text-gray-300">6:00 PM - 9:00 PM EST</p>
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-medium">Weekends</h4>
                  <p className="text-gray-700 dark:text-gray-300">10:00 AM - 5:00 PM EST</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic text-xs mt-2">
                *Other times may be available upon request
              </p>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Connect With Me
            </h3>
            
            <ul className="space-y-4">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center group"
                  >
                    <span className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                      {link.icon}
                    </span>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {link.label}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {link.username}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h2>
            
            {formStatus.submitted && (
              <div className={`p-4 mb-6 rounded-md ${
                formStatus.success ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
              }`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                    errors.name ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 dark:text-red-400 text-sm">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                    errors.email ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 dark:text-red-400 text-sm">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                    errors.subject ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Subject of your message"
                />
                {errors.subject && (
                  <p className="mt-1 text-red-500 dark:text-red-400 text-sm">{errors.subject}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                    errors.message ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Your message"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 dark:text-red-400 text-sm">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300 transform hover:scale-105 shadow-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}