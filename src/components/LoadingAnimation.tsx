// components/LoadingAnimation.tsx
"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if page has already loaded (for browser back button, etc.)
    if (document.readyState === 'complete') {
      setIsLoading(false);
      return;
    }

    // Show loading animation for minimum duration to avoid flashes
    const minLoadingTime = 800; // ms
    const startTime = Date.now();
    
    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsed);
      
      // Ensure minimum display time for the loader for better UX
      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };
    
    // Listen for page load complete
    if (typeof window !== 'undefined') {
      window.addEventListener('load', handleLoad);
      
      // Fallback to hide loader after 3 seconds max
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timer);
      };
    }
  }, []);
  
  // Exit animation when loading completes
  return (
    <motion.div 
      className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (!isLoading) {
          // Optional: cleanup if needed after animation completes
          document.body.style.overflow = '';
        }
      }}
      style={{ display: isLoading ? 'flex' : 'none' }}
    >
      <motion.div 
        className="flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative mb-4">
          <motion.div 
            className="h-16 w-16 rounded-full border-4 border-blue-600 border-t-transparent border-b-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-500 text-xl font-bold">KS</span>
          </div>
        </div>
        <motion.p 
          className="text-gray-600 dark:text-gray-400 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading portfolio...
        </motion.p>
      </motion.div>
    </motion.div>
  );
}