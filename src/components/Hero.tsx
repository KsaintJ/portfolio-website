// src/components/Hero.tsx
"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n';

const Hero = () => {
  const { t } = useLanguage();
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

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('skills-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 dark:bg-gray-900">
      {/* Fixed position social links on left side */}
      <motion.div 
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex flex-col gap-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a 
          href="https://github.com/KsaintJ" 
          target="_blank" 
          rel="noreferrer" 
          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
          aria-label="GitHub"
        >
          <FaGithub className="h-6 w-6" />
        </a>
        
        <a 
          href="https://linkedin.com/in/kendersaintjuste" 
          target="_blank" 
          rel="noreferrer" 
          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
        
        <a 
         href="/resumes/Kender_Saint-Juste_Solutions_Engineer.pdf" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
         aria-label="Resume"
        >
         <FaFileAlt className="h-6 w-6" />
        </a>
        
        <div className="h-24 w-px bg-gray-300 dark:bg-gray-700 mx-auto mt-2"></div>
      </motion.div>

      {/* Code background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-600/10 dark:to-purple-600/10"></div>
        
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <pre className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 overflow-hidden h-full">
            {`# Least by Juste™ — Access Review Automation
# FastAPI · Supabase · Google Admin SDK · Claude AI

from fastapi import APIRouter, Query
from risk_engine import run_risk_engine
from ai_explain import explain_findings_batch

RULES = ["RULE-001","RULE-002","RULE-003",
         "RULE-004","RULE-005","RULE-006",
         "RULE-007","RULE-008","RULE-009"]

# 4 HIGH severity · 5 MEDIUM severity
# Deterministic. No ML. Pure Python.
# SOC 2 CC6.1 · CC6.3 · CC6.6 · CC6.7`}
          </pre>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ background: 'rgba(45,89,252,0.12)', color: '#2d59fc', border: '1px solid rgba(45,89,252,0.25)' }}>
              Founder · Solutions Engineer · Builder
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              variants={itemVariants}
            >
              {t('hero.subtitle')}
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl"
              variants={itemVariants}
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              <Link href="/projects"
                className="px-6 py-3 text-white font-semibold rounded-lg transition duration-300 hover:-translate-y-0.5 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #2d59fc 0%, #1a3ee0 100%)', boxShadow: '0 4px 20px rgba(45,89,252,0.4)' }}>
                {t('hero.cta.work')}
              </Link>
              
              <Link href="/contact"
                className="px-6 py-3 font-semibold rounded-lg transition duration-300 hover:-translate-y-0.5"
                style={{ border: '2px solid #2d59fc', color: '#2d59fc' }}>
                {t('hero.cta.contact')}
              </Link>
            </motion.div>
            
            {/* Mobile social links (visible only on mobile) */}
            <motion.div 
              className="flex md:hidden space-x-5 mb-8"
              variants={itemVariants}
            >
              <a 
                href="https://github.com/KsaintJ" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              
              <a 
                href="https://linkedin.com/in/kendersaintjuste" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              
              <a 
                href="/resumes/Kender_Saint-Juste_Solutions_Engineer.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                download
               >
               <FaFileAlt className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right — Least by Juste™ product preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind the card */}
              <div className="absolute -inset-1 rounded-2xl blur-xl opacity-30"
                style={{ background: 'linear-gradient(135deg, #2d59fc, #1a3ee0)' }} />
              {/* Product card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                style={{ background: '#0f172a' }}>
                {/* Fake browser chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10"
                  style={{ background: '#1e293b' }}>
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <div className="ml-4 flex-1 rounded px-3 py-1 text-xs text-slate-400"
                    style={{ background: '#0f172a', fontFamily: 'monospace' }}>
                    app.getleast.io
                  </div>
                </div>
                {/* Dashboard screenshot */}
                <div className="relative">
                  <Image
                    src="/images/projects/least-by-juste/thumbnail.png"
                    alt="Least by Juste™ — Access Review Dashboard"
                    width={600}
                    height={375}
                    className="w-full object-cover"
                    priority
                  />
                  {/* Live badge overlay */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(45,89,252,0.9)', color: 'white' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Live Product
                  </div>
                </div>
                {/* Product label below */}
                <div className="px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">Least by Juste™</p>
                    <p className="text-xs text-slate-400">Access Review Automation · SOC 2 CC6.x</p>
                  </div>
                  <a href="https://app.getleast.io" target="_blank" rel="noopener noreferrer"
                    className="text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                    style={{ background: 'rgba(45,89,252,0.2)', color: '#7ba3ff', border: '1px solid rgba(45,89,252,0.3)' }}>
                    Try it →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern scroll indicator at bottom center */}
      <motion.button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 group"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-label="Scroll to skills section"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          Explore
        </span>
        <div className="w-5 h-9 border border-gray-300 dark:border-gray-600 rounded-full flex justify-center group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors">
          <motion.div 
            className="w-1 h-1 bg-gray-500 dark:bg-gray-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 rounded-full mt-1.5"
            animate={{ y: [0, 4, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;