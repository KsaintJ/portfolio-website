// src/components/LanguageSelector.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoLanguage } from 'react-icons/io5';
import { useLanguage } from '@/i18n';
import SafeClientOnly from './SafeClientOnly';

// Define available languages
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ht', name: 'Kreyòl Ayisyen', flag: '🇭🇹' }
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  // Handle mounting for hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to change language
  const changeLanguage = (langCode: 'en' | 'fr' | 'es' | 'ht') => {
    // Update language context
    setLocale(langCode);
    
    // Save the selection to localStorage
    localStorage.setItem('language', langCode);
    
    // Close the dropdown
    setIsOpen(false);
  };

  if (!mounted) return null;

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <SafeClientOnly>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={t('common.language')}
        >
          <span className="text-lg">{currentLanguage.flag}</span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1.5">{locale.toUpperCase()}</span>
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="py-1" role="menu" aria-orientation="vertical">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => changeLanguage(language.code as 'en' | 'fr' | 'es' | 'ht')}
                  className={`${
                    locale === language.code
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      : 'text-gray-700 dark:text-gray-300'
                  } flex items-center px-4 py-2 text-sm w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700`}
                  role="menuitem"
                >
                  <span className="mr-2 text-lg">{language.flag}</span>
                  <span>{language.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </SafeClientOnly>
  );
}