// components/SectionDivider.tsx
"use client";

import { motion } from 'framer-motion';

type SectionDividerProps = {
  flip?: boolean;
  color?: string;
  bgColor?: string;
};

const SectionDivider = ({ 
  flip = false, 
  color = "from-blue-100 to-white", 
  bgColor = "fill-white"
}: SectionDividerProps) => {
  return (
    <div className={`relative w-full h-24 ${flip ? 'transform rotate-180' : ''}`}>
      <div className={`absolute inset-0 bg-gradient-to-b ${color} opacity-50`}></div>
      <svg
        className="absolute bottom-0 w-full h-24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`${bgColor} dark:fill-gray-900`}
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></motion.path>
      </svg>
    </div>
  );
};

export default SectionDivider;