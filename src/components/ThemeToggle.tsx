"use client";

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { HiSun, HiMoon } from 'react-icons/hi';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Prevent hydration mismatch by only rendering after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to toggle the theme
  const toggleTheme = () => {
    // Use resolvedTheme instead of theme for more reliable detection
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    console.log('Theme toggled to:', newTheme);
  };

  // While not mounted, render a placeholder of the same size to prevent layout shift
  if (!mounted) {
    return (
      <button 
        aria-label="Toggle theme" 
        className="w-10 h-10 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        <span className="sr-only">Toggle theme</span>
        <div className="w-6 h-6" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
      className="w-10 h-10 p-2 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
    >
      {resolvedTheme === 'dark' ? (
        <HiSun className="w-6 h-6 text-yellow-400" />
      ) : (
        <HiMoon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
}