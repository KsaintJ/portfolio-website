// src/app/layout.tsx
import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from 'next-themes'; // Use this if you're using next-themes
import LoadingAnimation from '@/components/LoadingAnimation';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import PageTransition from '@/components/PageTransition';
import { LanguageProvider } from '@/i18n';


const inter = Inter({ subsets: ['latin'] });

// Base metadata for your entire site
export const metadata: Metadata = {
  title: {
    default: 'Kender Saint-Juste | Founder & Solutions Engineer',
    template: '%s | Kender Saint-Juste'
  },
  description: 'Founder & CEO of Juste™ LLC. Builder of Least by Juste™ — access review automation SaaS for Google Workspace. Solutions Engineer candidate with 12+ years of professional experience in IAM, GRC, and full-stack development.',
  keywords: ['Solutions Engineer', 'GRC Analyst', 'IAM', 'Access Governance', 'Founder', 'Juste LLC', 'Least by Juste', 'Full-Stack Developer', 'React', 'Next.js', 'Python', 'TypeScript', 'SOC 2', 'Tampa Florida'],
  authors: [{ name: 'Kender Saint-Juste' }],
  creator: 'Kender Saint-Juste',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.usejuste.com',
    title: 'Kender Saint-Juste | Founder & Solutions Engineer',
    description: 'Founder of Juste™ LLC. Builder of Least by Juste™ — live access review automation SaaS. Solutions Engineer with 12+ years experience in IAM, GRC, and full-stack development.',
    siteName: 'Kender Saint-Juste Portfolio',
    images: [
      {
        url: 'https://portfolio.usejuste.com/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Kender Saint-Juste — Founder & Solutions Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kender Saint-Juste | Founder & Solutions Engineer',
    description: 'Founder of Juste™ LLC. Builder of Least by Juste™. Solutions Engineer with IAM/GRC expertise.',
    images: ['https://portfolio.usejuste.com/images/profile.jpg'],
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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          `
        }} />
      </head>
      <body className={`${inter.className} h-full bg-white dark:bg-gray-900`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <LoadingAnimation />
            <ScrollProgressBar />
            <Navbar />
            <main>{children}</main>
            <GoogleAnalytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}