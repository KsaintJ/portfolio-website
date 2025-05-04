// src/components/ScrollReveal.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import SafeClientOnly from "./SafeClientOnly";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0,
  className = "",
  once = true
}: ScrollRevealProps) {
  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };

  const initialOffset = directionOffset[direction];

  return (
    <SafeClientOnly>
      <motion.div
        className={className}
        initial={{ ...initialOffset, opacity: 0 }}
        whileInView={{ 
          x: 0, 
          y: 0, 
          opacity: 1,
          transition: {
            duration: 0.7,
            delay: delay,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
        viewport={{ once, margin: "-100px" }}
      >
        {children}
      </motion.div>
    </SafeClientOnly>
  );
}