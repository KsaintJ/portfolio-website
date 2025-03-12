/* eslint-disable @typescript-eslint/no-unused-vars */
// components/StackVisualization.tsx
"use client";

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiAngular } from 'react-icons/si';

const StackVisualization = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  // MERN Stack technologies
  const mernStack = [
    { name: 'MongoDB', icon: <SiMongodb className="w-10 h-10 text-green-500" />, color: 'bg-green-500', description: 'NoSQL Database' },
    { name: 'Express', icon: <SiExpress className="w-10 h-10 text-gray-600 dark:text-gray-300" />, color: 'bg-gray-600', description: 'Backend Framework' },
    { name: 'React', icon: <FaReact className="w-10 h-10 text-blue-400" />, color: 'bg-blue-400', description: 'Frontend Library' },
    { name: 'Node.js', icon: <FaNodeJs className="w-10 h-10 text-green-600" />, color: 'bg-green-600', description: 'JavaScript Runtime' },
  ];

  // MEAN Stack technologies (3 shared with MERN, 1 different)
  const meanStack = [
    { name: 'MongoDB', icon: <SiMongodb className="w-10 h-10 text-green-500" />, color: 'bg-green-500', description: 'NoSQL Database' },
    { name: 'Express', icon: <SiExpress className="w-10 h-10 text-gray-600 dark:text-gray-300" />, color: 'bg-gray-600', description: 'Backend Framework' },
    { name: 'Angular', icon: <SiAngular className="w-10 h-10 text-red-600" />, color: 'bg-red-600', description: 'Frontend Framework' },
    { name: 'Node.js', icon: <FaNodeJs className="w-10 h-10 text-green-600" />, color: 'bg-green-600', description: 'JavaScript Runtime' },
  ];

  return (
    <div className="py-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Full-Stack Development Expertise
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I specialize in building complete web applications with both MERN and MEAN stacks,
          giving me flexibility to use the right tools for each project.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* MERN Stack */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-4 text-white">
            <h3 className="text-xl font-bold">MERN Stack</h3>
            <p className="text-blue-100 text-sm">MongoDB, Express, React, Node.js</p>
          </div>

          <div className="p-6">
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {mernStack.map((tech, index) => (
                <motion.div
                  key={`mern-${tech.name}`}
                  className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg"
                  variants={itemVariants}
                >
                  <div className="mr-4">{tech.icon}</div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{tech.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Connection lines visual */}
            <div className="my-8 relative flex justify-center">
              <svg className="w-full max-w-xs" height="50" viewBox="0 0 200 50">
                <motion.path
                  d="M 30,10 C 70,40 130,40 170,10"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  fill="transparent"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.circle cx="30" cy="10" r="4" fill="#3B82F6" 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                />
                <motion.circle cx="170" cy="10" r="4" fill="#3B82F6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                />
                <motion.circle cx="100" cy="40" r="4" fill="#3B82F6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* MEAN Stack */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-4 text-white">
            <h3 className="text-xl font-bold">MEAN Stack</h3>
            <p className="text-red-100 text-sm">MongoDB, Express, Angular, Node.js</p>
          </div>

          <div className="p-6">
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {meanStack.map((tech, index) => (
                <motion.div
                  key={`mean-${tech.name}`}
                  className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg"
                  variants={itemVariants}
                >
                  <div className="mr-4">{tech.icon}</div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{tech.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Connection lines visual */}
            <div className="my-8 relative flex justify-center">
              <svg className="w-full max-w-xs" height="50" viewBox="0 0 200 50">
                <motion.path
                  d="M 30,10 C 70,40 130,40 170,10"
                  stroke="#EF4444"
                  strokeWidth="2"
                  fill="transparent"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.circle cx="30" cy="10" r="4" fill="#EF4444" 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                />
                <motion.circle cx="170" cy="10" r="4" fill="#EF4444"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                />
                <motion.circle cx="100" cy="40" r="4" fill="#EF4444"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StackVisualization;