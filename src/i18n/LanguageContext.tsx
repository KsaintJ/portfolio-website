// src/i18n/LanguageContext.tsx
"use client";

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import en from './locales/en';
import fr from './locales/fr';
import es from './locales/es';
import ht from './locales/ht';

// Define the translations object
const translations = {
  en,
  fr,
  es,
  ht
};

// Type for the translations
type Translations = typeof translations;
type Languages = keyof Translations;

// Custom type for nested access of translations
type NestedKeyOf<T> = T extends object
  ? { [K in keyof T]: K extends string 
      ? T[K] extends object
        ? `${K}.${NestedKeyOf<T[K]>}`
        : K
      : never 
    }[keyof T]
  : never;

type TranslationKey = NestedKeyOf<typeof en>;

// Context interface with updated t function type
interface LanguageContextType {
  locale: Languages;
  setLocale: (locale: Languages) => void;
  t: (key: string, options?: { returnObjects?: boolean; debug?: boolean }) => any;
  getTranslatedArray: <T>(key: string, fallback: T[]) => T[];
  getTranslatedObject: <T>(key: string, fallback: T) => T;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (key: string) => key,
  getTranslatedArray: <T>(key: string, fallback: T[]) => fallback,
  getTranslatedObject: <T>(key: string, fallback: T) => fallback
});

// Helper to get a user-friendly fallback from a key
const getFriendlyFallback = (key: string): string => {
  // Extract the last part of the key as a readable fallback
  const parts = key.split('.');
  const lastPart = parts[parts.length - 1];
  
  // Convert camelCase to Title Case with spaces
  return lastPart
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
};

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Languages>('en');
  
  // Load saved language on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Languages;
    if (savedLanguage && translations[savedLanguage]) {
      setLocale(savedLanguage);
    }
  }, []);

  // Updated translation function with options parameter
  const t = (key: string, options?: { returnObjects?: boolean; debug?: boolean }): any => {
    // For debugging
    if (options?.debug) {
      console.log(`Trying to translate: ${key}`);
      console.log(`Current locale: ${locale}`);
    }

    let value: any = translations[locale];
    const keys = key.split('.');
    let keyExists = true;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
        if (options?.debug) console.log(`Found key ${k}, value type: ${typeof value}`);
      } else {
        if (options?.debug) console.log(`Key ${k} not found in path`);
        keyExists = false;
        // Try English fallback
        value = getFromEnglish(key, options);
        break;
      }
    }
    
    // Return the object directly if returnObjects is true
    if (options?.returnObjects) {
      // If value doesn't exist or isn't appropriate for returnObjects, return null
      if (!keyExists || (value !== null && typeof value !== 'object' && !Array.isArray(value))) {
        if (options?.debug) console.log(`Value not suitable for returnObjects: ${value}`);
        return null;
      }
      return value;
    }
    
    // For normal string translations, make sure we return a string, not a key
    if (typeof value !== 'string') {
      // If value exists but isn't a string, and we're not doing returnObjects
      if (keyExists && value !== null && value !== undefined) {
        if (options?.debug) console.log(`Value exists but is not a string: ${JSON.stringify(value)}`);
        return String(value); // Try to convert to string
      }
      
      // Get a user-friendly fallback instead of showing raw keys
      return getFriendlyFallback(key);
    }
    
    return value;
  };
  
  // Updated helper to get a value from English locale as fallback
  const getFromEnglish = (key: string, options?: { returnObjects?: boolean; debug?: boolean }): any => {
    if (options?.debug) console.log(`Trying English fallback for: ${key}`);
    
    let value: any = translations.en;
    const keys = key.split('.');
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
        if (options?.debug) console.log(`Found fallback key ${k} in English, value type: ${typeof value}`);
      } else {
        if (options?.debug) console.log(`Fallback key ${k} not found in English`);
        return options?.returnObjects ? null : getFriendlyFallback(key); // Return null for object requests
      }
    }
    
    if (options?.returnObjects) {
      if (options?.debug) console.log(`Returning object from English fallback`);
      return value;
    }
    
    return typeof value === 'string' ? value : getFriendlyFallback(key);
  };

  // Helper for getting translated arrays with fallback
  const getTranslatedArray = <T,>(key: string, fallback: T[]): T[] => {
    const translated = t(key, { returnObjects: true });
    return Array.isArray(translated) && translated.length > 0 ? translated : fallback;
  };

  // Helper for getting translated objects with fallback
  const getTranslatedObject = <T,>(key: string, fallback: T): T => {
    const translated = t(key, { returnObjects: true });
    return translated && typeof translated === 'object' && !Array.isArray(translated) 
      ? translated as T 
      : fallback;
  };

  return (
    <LanguageContext.Provider value={{ 
      locale, 
      setLocale, 
      t,
      getTranslatedArray,
      getTranslatedObject
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook for easy context consumption in components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Export updated static function for usage outside React components
export const t = (key: string, options?: { returnObjects?: boolean; debug?: boolean }): any => {
  const savedLanguage = 
    (typeof localStorage !== 'undefined' && localStorage.getItem('language') as Languages) || 'en';
  let value: any = translations[savedLanguage] || translations.en;
  const keys = key.split('.');
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return options?.returnObjects ? null : getFriendlyFallback(key);
    }
  }
  
  if (options?.returnObjects) {
    return value;
  }
  
  return typeof value === 'string' ? value : getFriendlyFallback(key);
};

// Helper function for static usage of translated arrays
export const getTranslatedArray = <T,>(key: string, fallback: T[]): T[] => {
  const translated = t(key, { returnObjects: true });
  return Array.isArray(translated) && translated.length > 0 ? translated : fallback;
};

// Helper function for static usage of translated objects
export const getTranslatedObject = <T,>(key: string, fallback: T): T => {
  const translated = t(key, { returnObjects: true });
  return translated && typeof translated === 'object' && !Array.isArray(translated) 
    ? translated as T 
    : fallback;
};