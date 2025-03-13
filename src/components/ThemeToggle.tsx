// src/components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted, we can show the toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10"></div>; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      {resolvedTheme === 'dark' ? (
        <FaSun className="text-yellow-300 h-5 w-5" />
      ) : (
        <FaMoon className="text-gray-700 h-5 w-5" />
      )}
    </button>
  );
}