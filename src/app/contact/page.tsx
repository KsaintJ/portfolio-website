"use client";

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n';
import SafeMotion from '@/components/SafeMotion';

interface FormData { name: string; email: string; subject: string; message: string; }
interface FormStatus { submitted: boolean; success: boolean; message: string; }
interface FormErrors { name?: string; email?: string; subject?: string; message?: string; [key: string]: string | undefined; }

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<FormStatus>({ submitted: false, success: false, message: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      setFormStatus({ submitted: true, success: true, message: 'Sending your message...' });
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setFormStatus({ submitted: true, success: true, message: 'Message sent! I\'ll respond within 24 hours.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({ submitted: true, success: false, message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch {
      setFormStatus({ submitted: true, success: false, message: 'There was an error. Please email me directly at ksaintjuste7@gmail.com' });
    }
  };

  const links = [
    { icon: <FaLinkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kendersaintjuste/', sub: 'linkedin.com/in/kendersaintjuste' },
    { icon: <FaGithub className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com/KsaintJ', sub: 'github.com/KsaintJ' },
    { icon: <FaEnvelope className="w-5 h-5" />, label: 'Email', href: 'mailto:ksaintjuste7@gmail.com', sub: 'ksaintjuste7@gmail.com' },
  ];

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors";
  const errorClass = "mt-1 text-sm text-red-500";

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 pb-0">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <SafeMotion>
            <motion.div className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">Get In Touch</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t('contact.title')}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                Open to Solutions Engineer and GRC Analyst roles in Tampa or remote. I respond within 24 hours.
              </p>
            </motion.div>
          </SafeMotion>

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT — Contact info */}
            <SafeMotion>
              <motion.div className="order-2 md:order-1"
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>

                {/* Location */}
                <div className="flex items-start mb-6">
                  <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Tampa, Florida</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Permanently based · Remote-first · Open to hybrid</p>
                  </div>
                </div>

                {/* Response note */}
                <div className="border-l-4 border-blue-500 pl-4 py-2 mb-8">
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Reach out via LinkedIn or email — I respond within 24 hours. Currently in active job search and highly responsive.
                  </p>
                </div>

                {/* Live product */}
                <a href="https://app.getleast.io" target="_blank" rel="noopener noreferrer"
                  className="block bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-4 hover:border-blue-400 transition-colors group">
                  <p className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-1">Live Product</p>
                  <p className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
                    Least by Juste™ <FaExternalLinkAlt className="w-3 h-3" />
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Access review automation for Google Workspace — SOC 2 audit evidence for SMBs.
                  </p>
                </a>

                {/* Contact card */}
                <a href="https://kender.usejuste.com" target="_blank" rel="noopener noreferrer"
                  className="block bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 mb-8 hover:border-gray-400 transition-colors group">
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">Digital Card</p>
                  <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
                    kender.usejuste.com <FaExternalLinkAlt className="w-3 h-3" />
                  </p>
                </a>

                {/* Social links */}
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
                <div className="flex flex-col gap-3">
                  {links.map((link) => (
                    <a key={link.label} href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
                      className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors group">
                      <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors flex-shrink-0">
                        {link.icon}
                      </span>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{link.label}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{link.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>

              </motion.div>
            </SafeMotion>

            {/* RIGHT — Contact form */}
            <SafeMotion>
              <motion.div className="order-1 md:order-2"
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>

                {formStatus.submitted && (
                  <div className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'}`}>
                    {formStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="your@email.com" />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} className={inputClass} placeholder="What's this about?" />
                    {errors.subject && <p className={errorClass}>{errors.subject}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className={inputClass} placeholder="Your message..." />
                    {errors.message && <p className={errorClass}>{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={formStatus.submitted && formStatus.success}
                    className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md">
                    {formStatus.submitted && !formStatus.success ? 'Sending...' : 'Send Message'}
                  </button>
                </form>

              </motion.div>
            </SafeMotion>

          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
