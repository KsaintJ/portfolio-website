// src/app/layout.tsx
import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import LoadingAnimation from '@/components/LoadingAnimation';
import ScrollProgressBar from '@/components/ScrollProgressBar';

// export { metadata } from './home-metadata';

const inter = Inter({ subsets: ['latin'] });

// Base metadata for your entire site
export const metadata: Metadata = {
  title: {
    default: 'Kender Saint-Juste | Software Developer',
    template: '%s | Kender Saint-Juste'
  },
  description: 'Junior Software Developer specializing in MERN and MEAN stack development. Penn State graduate with expertise in React, Node.js, and full-stack development.',
  keywords: ['Software Developer', 'MERN Stack', 'MEAN Stack', 'React Developer', 'Node.js', 'Frontend Developer', 'Full-stack Developer', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Kender Saint-Juste' }],
  creator: 'Kender Saint-Juste',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kendersaintjuste.com',
    title: 'Kender Saint-Juste | Software Developer',
    description: 'Junior Software Developer specializing in MERN and MEAN stack development',
    siteName: 'Kender Saint-Juste Portfolio',
    images: [
      {
        url: 'https://kendersaintjuste.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kender Saint-Juste - Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kender Saint-Juste | Software Developer',
    description: 'Junior Software Developer specializing in MERN and MEAN stack development',
    images: ['https://kendersaintjuste.com/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingAnimation />
          <ScrollProgressBar />
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}