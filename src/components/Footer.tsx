// src/components/Footer.tsx
"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '@/i18n';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/KsaintJ', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/kendersaintjuste/', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <FaEnvelope />, url: 'mailto:ksaintjuste7@gmail.com', label: 'Email' }
  ];

  const navItems = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.about'), href: '/about' },
    { name: t('navigation.projects'), href: '/projects' },
    { name: t('navigation.contact'), href: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold mb-4 block">
              KSJ<span className="text-blue-500">Dev</span>
            </Link>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <p className="text-gray-400 mb-2">
              Tampa, Florida
            </p>
            <p className="text-gray-400 mb-4">
              <a 
                 href="mailto:ksaintjuste7@gmail.com"
                 className="hover:text-white transition-colors duration-300"
               >
                 ksaintjuste7@gmail.com
               </a>
            </p>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition duration-300"
            >
              {t('footer.getInTouch')}
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; {currentYear} Kender Saint-Juste. {t('footer.rights')}</p>
          <p className="mt-2 text-sm">
          {t('footer.madeWith')} <span className="text-red-500 mx-1">♥</span> {t('footer.usingTech')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;