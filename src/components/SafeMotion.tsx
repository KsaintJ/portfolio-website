// components/SafeMotion.tsx
"use client";
import { motion } from 'framer-motion';
import { useEffect, useState, ReactNode } from 'react';

interface SafeMotionProps {
  children: ReactNode;
  className?: string;
  initial?: { opacity?: number; x?: number; y?: number; scale?: number };
  animate?: { opacity?: number; x?: number; y?: number; scale?: number };
  transition?: {
    duration?: number;
    ease?: string | number[];
    delay?: number;
    [key: string]: unknown;
  };
  whileHover?: { [key: string]: unknown };
  whileInView?: { [key: string]: unknown };
  viewport?: { once?: boolean; amount?: number };
}

export default function SafeMotion({
  children,
  className,
  initial,
  animate,
  transition,
  whileHover,
  whileInView,
  viewport,
  ...props
}: SafeMotionProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Simple non-animated div as fallback
  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  // Simplified animation props to avoid the positionalValues error
  const safeInitial: { opacity: number; x?: number; y?: number; scale?: number } = { opacity: initial?.opacity || 0 };
  const safeAnimate: { opacity: number; x?: number; y?: number; scale?: number } = { opacity: animate?.opacity || 1 };
  
  // Only add positional values once component is mounted
  if (isMounted) {
    if (initial?.y !== undefined) safeInitial.y = initial.y;
    if (initial?.x !== undefined) safeInitial.x = initial.x;
    if (initial?.scale !== undefined) safeInitial.scale = initial.scale;
    
    if (animate?.y !== undefined) safeAnimate.y = animate.y;
    if (animate?.x !== undefined) safeAnimate.x = animate.x;
    if (animate?.scale !== undefined) safeAnimate.scale = animate.scale;
  }

  return (
    <motion.div
      className={className}
      initial={safeInitial}
      animate={safeAnimate}
      transition={transition}
      whileHover={isMounted ? whileHover : undefined}
      whileInView={isMounted ? whileInView : undefined}
      viewport={viewport}
      {...props}
    >
      {children}
    </motion.div>
  );
}