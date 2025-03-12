"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import Footer from '@/components/Footer';

export default function ElderlyCareManagementPage() {
  // Technologies used in the project
  const technologies = [
    "React", "Firebase", "Node.js", "Express", "MongoDB",
    "Material UI", "JWT Authentication", "Responsive Design"
  ];

  // Screenshots from the project
  const screenshots = [
    {
      src: '/images/projects/elderly-care-management/elderly-dashboard-overview.png',
      alt: 'Patient Dashboard Overview',
      caption: 'Main dashboard showing patient health metrics and medication schedule'
    },
    {
      src: '/images/projects/elderly-care-management/mark-as-taken-confirmation.png',
      alt: 'Medication Tracking Interface',
      caption: 'Medication tracking system with confirmation dialogs for caregiver accountability'
    },
    {
      src: '/images/projects/elderly-care-management/elderly-dashboard-health.png',
      alt: 'Health Monitoring Panel',
      caption: 'Real-time health metrics monitoring with historical trends'
    },
    {
      src: '/images/projects/elderly-care-management/caregiver-dashboard-main.png',
      alt: 'Caregiver Dashboard',
      caption: 'Caregiver-focused interface showing assigned patients and tasks'
    },
    {
      src: '/images/projects/elderly-care-management/family-dashboard-overview.png',
      alt: 'Family Portal',
      caption: 'Family member view showing care updates and communication options'
    },
    {
      src: '/images/projects/elderly-care-management/role-selector.png',
      alt: 'Role Selection Screen',
      caption: 'Role-based access control for different user types'
    }
  ];

  // Features of the project
  const features = [
    {
      title: "Patient Management",
      description: "Track detailed patient information including medical history, medication schedules, and care requirements."
    },
    {
      title: "Caregiver Scheduling",
      description: "Efficiently assign caregivers to patients with conflict detection and workload balancing."
    },
    {
      title: "Medication Tracking",
      description: "Monitor medication administration with reminders and verification to ensure proper care."
    },
    {
      title: "Family Portal",
      description: "Allow family members to view care updates, communicate with caregivers, and receive alerts."
    },
    {
      title: "Real-time Notifications",
      description: "Immediately alert relevant parties about important updates or emergency situations."
    },
    {
      title: "Analytics Dashboard",
      description: "Visualize care metrics and patient wellness indicators to identify trends and improve care quality."
    }
  ];

  // Code snippets to showcase your technical skills
  const codeSnippets = [
    {
      title: 'Patient Data Model',
      code: `// MongoDB Schema for Patient model
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  contactInfo: {
    phone: String,
    email: String,
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String
    }
  },
  emergencyContact: {
    name: String,
    relationship: String,
    phone: String
  },
  medicalInformation: {
    conditions: [String],
    allergies: [String],
    medications: [{
      name: String,
      dosage: String,
      frequency: String,
      startDate: Date,
      endDate: Date,
      notes: String
    }]
  },
  careNeeds: {
    mobilityAssistance: Boolean,
    feedingAssistance: Boolean,
    medicationManagement: Boolean,
    bathingAssistance: Boolean,
    dementiaSupport: Boolean,
    otherNeeds: [String]
  },
  assignedCaregivers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Caregiver'
  }],
  careSchedule: [{
    day: String,
    startTime: String,
    endTime: String,
    caregiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Caregiver'
    },
    tasks: [String]
  }],
  notes: [{ 
    text: String,
    date: {
      type: Date,
      default: Date.now
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }]
});

// Virtual for patient's full name
patientSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
});

// Virtual for patient's age
patientSchema.virtual('age').get(function() {
  const today = new Date();
  const birthDate = new Date(this.dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
});

module.exports = mongoose.model('Patient', patientSchema);`,
      language: 'javascript'
    },
    {
      title: 'Medication Tracking Component',
      code: `import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Button, Typography, Dialog, 
  DialogTitle, DialogContent, DialogActions, Chip } from '@material-ui/core';
import { format } from 'date-fns';
import { useMutation } from 'react-query';
import { updateMedicationStatus } from '../api/medicationService';

const MedicationCard = ({ medication, patientId, onStatusUpdate }) => {
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  
  // Mutation for updating medication status
  const mutation = useMutation(
    (data) => updateMedicationStatus(patientId, medication.id, data),
    {
      onSuccess: (data) => {
        setStatusMessage('Medication marked as taken successfully');
        onStatusUpdate(medication.id, true);
        setTimeout(() => {
          setStatusMessage('');
          setConfirmDialogOpen(false);
        }, 1500);
      },
      onError: (error) => {
        setStatusMessage('Error: ' + error.message);
      }
    }
  );

  const handleMarkAsTaken = () => {
    setConfirmDialogOpen(true);
  };

  const confirmMedicationTaken = () => {
    const currentTime = new Date();
    mutation.mutate({ 
      status: 'taken', 
      takenAt: currentTime,
      takenBy: 'current-caregiver-id' // In real app, get from auth context
    });
  };

  return (
    <Card className="medication-card">
      <CardHeader 
        title={medication.name}
        subheader={
          <div className="medication-subheader">
            <Chip 
              label={medication.status === 'taken' ? 'Active' : 'Not Taken'} 
              color={medication.status === 'taken' ? 'primary' : 'default'}
            />
          </div>
        }
      />
      <CardContent>
        <Typography variant="body1">
          <strong>Dosage:</strong> {medication.dosage}
        </Typography>
        <Typography variant="body1">
          <strong>Instructions:</strong> {medication.instructions}
        </Typography>
        
        <div className="medication-schedule">
          <Typography variant="h6">Today's Schedule:</Typography>
          {medication.schedule.map((time, index) => (
            <div key={index} className="schedule-item">
              <Typography>{format(new Date(time.scheduledTime), 'h:mm a')}</Typography>
              <Typography className={time.status === 'taken' ? 'taken' : 'not-taken'}>
                {time.status === 'taken' ? 'Taken' : 'Not taken'}
              </Typography>
            </div>
          ))}
        </div>
        
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          onClick={handleMarkAsTaken}
          disabled={medication.status === 'taken'}
        >
          Mark as Taken
        </Button>
      </CardContent>

      {/* Confirmation Dialog */}
      <Dialog open={confirmDialogOpen} onClose={() => setConfirmDialogOpen(false)}>
        <DialogTitle>Confirm Medication</DialogTitle>
        <DialogContent>
          {statusMessage ? (
            <Typography color="primary">{statusMessage}</Typography>
          ) : (
            <Typography>
              Are you sure you want to mark {medication.name} as taken? 
              This action will be recorded in the patient's medical record.
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDialogOpen(false)} color="default">
            Cancel
          </Button>
          <Button 
            onClick={confirmMedicationTaken} 
            color="primary" 
            disabled={!!statusMessage}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default MedicationCard;`,
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
            Elderly Care Management System
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
            href="https://github.com/KsaintJ/elderly-care-management"
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
              src="/images/projects/elderly-care-management/mark-as-taken-confirmation.png"
              alt="Elderly Care Management System"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
              className="object-cover"
              style={{ objectPosition: 'top' }}
              onError={(e) => {
                // Fallback to gradient background if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.style.background = 'linear-gradient(to right, #3b82f6, #6366f1)';
                }
                const div = document.createElement('div');
                div.className = 'absolute inset-0 flex items-center justify-center';
                div.innerHTML = '<div class="text-white text-2xl font-bold text-center px-4">Elderly Care Management System</div>';
                (e.target as HTMLImageElement).parentElement?.appendChild(div);
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
                The Elderly Care Management System is a comprehensive platform designed to improve the quality and efficiency of care provided to elderly individuals. The application connects caregivers, healthcare providers, and family members, enabling better coordination and monitoring of care activities.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This project was developed as part of my coursework at Penn State University, where I implemented a full-stack solution addressing real-world challenges in elderly care management.
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
                  Challenge: Role-Based Access Control
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Creating a system that served different user types (caregivers, family members, administrators) with appropriate permissions and interfaces.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Solution:</strong> I implemented a robust role-based access control system that dynamically renders UI components and restricts API access based on the user&apos;s role. This included custom middleware for API route protection and context-based component rendering.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Challenge: Real-time Medication Tracking
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Ensuring accurate and timely medication administration with verification and accountability.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Solution:</strong> I built a real-time medication tracking system using Firebase for immediate updates. The system includes confirmation dialogs, timestamps, and caregiver verification to ensure proper medication administration and create an audit trail.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Challenge: Data Synchronization Across User Types
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Keeping all users (caregivers, family members, administrators) updated with relevant information in real-time.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Solution:</strong> I implemented a publish-subscribe pattern using Firebase&apos;s real-time database that ensures all authorized users receive immediate updates relevant to their role. This included custom filters and event listeners for efficient data transmission.
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
                  React for frontend development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Node.js & Express for API development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  MongoDB for database storage
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Firebase for real-time updates
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Material UI for component library
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  JWT for secure authentication
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  React Context API for state management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  React Query for data fetching
                </li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Project Metrics
              </h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Backend API Endpoints</span>
                    <span className="text-gray-700 dark:text-gray-300">24+</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">React Components</span>
                    <span className="text-gray-700 dark:text-gray-300">35+</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Database Models</span>
                    <span className="text-gray-700 dark:text-gray-300">8</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Development Time</span>
                    <span className="text-gray-700 dark:text-gray-300">8 weeks</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
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
            Screenshots
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
                      (e.target as HTMLImageElement).style.display = 'none';
                      if ((e.target as HTMLImageElement).parentElement) {
                        if ((e.target as HTMLImageElement).parentElement) {
                          const parentElement = (e.target as HTMLImageElement).parentElement;
                          if (parentElement && parentElement.parentElement) {
                            parentElement.parentElement.style.background = 'linear-gradient(to right, #3b82f6, #6366f1)';
                          }
                        }
                      }
                      const div = document.createElement('div');
                      div.className = 'absolute inset-0 flex items-center justify-center';
                      div.innerHTML = `<div class="text-white text-xl font-bold text-center px-4">${screenshot.alt}</div>`;
                      (e.target as HTMLImageElement).parentElement?.appendChild(div);
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
              This project provided valuable insights and learning opportunities:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Designing systems for multiple user types with varying needs and permissions</li>
              <li>Implementing real-time data synchronization across different client interfaces</li>
              <li>Creating secure, role-based access control systems</li>
              <li>Building intuitive interfaces for users with varying levels of technical proficiency</li>
              <li>Handling sensitive personal and medical data in compliance with best practices</li>
              <li>Developing notification systems for time-critical healthcare events</li>
              <li>Scaling database models to accommodate complex healthcare data relationships</li>
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
              This project demonstrates skills that are directly applicable to software engineering internships:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Full-stack development across React, Node.js, and MongoDB (MERN stack)</li>
              <li>Creating complex data models and relationships for real-world applications</li>
              <li>Implementing secure authentication and authorization systems</li>
              <li>Building accessible and responsive UI interfaces with modern component libraries</li>
              <li>Developing for multiple user types with different access levels and needs</li>
              <li>Working with real-time data and notifications in a critical application domain</li>
              <li>Problem-solving in complex domains with multiple interconnected systems</li>
            </ul>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}