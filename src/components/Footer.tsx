// src/components/Footer.tsx
"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '@/i18n';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-tight">
                KSJ<span className="text-blue-400">.</span>
              </span>
              <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">Portfolio</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-sm">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/KsaintJ" target="_blank" rel="noreferrer"
                className="text-slate-500 hover:text-white transition-colors" aria-label="GitHub">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/kendersaintjuste/" target="_blank" rel="noreferrer"
                className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="mailto:ksaintjuste7@gmail.com"
                className="text-slate-500 hover:text-white transition-colors" aria-label="Email">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4">Portfolio</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Contact', href: '/contact' },
                { name: 'GRC / IAM Portfolio', href: 'https://career.usejuste.com', external: true },
              ].map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-1">
                      {item.name} <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    </a>
                  ) : (
                    <Link href={item.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4">Juste™ LLC</h3>
            <ul className="space-y-2.5 mb-6">
              {[
                { name: 'Least by Juste™ — Live', href: 'https://app.getleast.io' },
                { name: 'Contact Card', href: 'https://kender.usejuste.com' },
                { name: 'Company Site', href: 'https://usejuste.com' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-1">
                    {item.name} <FaExternalLinkAlt className="w-2.5 h-2.5" />
                  </a>
                </li>
              ))}
            </ul>
            <a href="mailto:ksaintjuste7@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">
              {t('footer.getInTouch')}
            </a>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>&copy; {currentYear} Kender Saint-Juste · Juste™ LLC · Tampa, FL</p>
          <p className="font-mono text-xs">
            Built with Next.js · React · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
