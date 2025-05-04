// src/components/PageTransition.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import SafeClientOnly from "./SafeClientOnly"; // Fixed import

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <SafeClientOnly>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ 
          duration: 0.4, 
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {children}
      </motion.div>
    </SafeClientOnly>
  );
}