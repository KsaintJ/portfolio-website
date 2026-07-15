// Single source of truth for all project data.
// Both the homepage (top picks) and /projects (full grid) read from this file.
// To feature a project on the homepage, set homepageFeatured: true — order in this
// array is the order both pages render in.

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string | null;
  videoUrl?: string;
  category: 'frontend' | 'backend' | 'full-stack';
  detailsUrl: string;
  homepageFeatured: boolean;
}

export const projects: Project[] = [
  {
    id: 'least-by-juste',
    title: 'Least by Juste™',
    description: 'IAM SaaS — access review autopilot for Google Workspace. 9-rule deterministic risk engine, AI-generated explanations via Claude, automated daily scans, and PDF audit reports. Live product.',
    image: '/images/projects/least-by-juste/thumbnail.png',
    tags: ['Python', 'FastAPI', 'Next.js', 'Supabase', 'Google OAuth', 'Claude AI'],
    githubUrl: 'https://github.com/KsaintJ',
    liveUrl: 'https://app.getleast.io',
    category: 'full-stack',
    detailsUrl: '/projects/least-by-juste',
    homepageFeatured: true
  },
  {
    id: 'elderly-care-management',
    title: 'Elderly Care Management System — Foundation of OneCare™',
    description: 'Full-stack platform connecting caregivers, patients, and family members with medication tracking, real-time updates, and role-based access control. Built as my SWENG 861 capstone at Penn State — now being developed into OneCare by Juste™, an AI-powered elderly care platform.',
    image: '/images/projects/elderly-care-management/thumbnail.jpg',
    tags: ['React', 'Node.js', 'Firebase', 'MongoDB', 'Material UI', 'JWT'],
    githubUrl: 'https://github.com/psu-edu/pswc-se-2025-spring-sweng861-Kender',
    liveUrl: null,
    videoUrl: 'https://www.youtube.com/watch?v=1-amkgJm36M',
    category: 'full-stack',
    detailsUrl: '/projects/elderly-care-management',
    homepageFeatured: true
  },
  {
    id: 'frontend-assignment',
    title: 'Frontend Authentication System',
    description: 'A modern web application implementing secure authentication and API integration, featuring comprehensive error handling and thorough testing coverage.',
    image: '/images/projects/frontend-assignment/thumbnail.jpg',
    tags: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Vitest', 'Google OAuth'],
    githubUrl: 'https://github.com/KsaintJ/assignment4-frontend',
    liveUrl: null,
    category: 'frontend',
    detailsUrl: '/projects/frontend-assignment',
    homepageFeatured: true
  },
  {
    id: 'backend-assignment',
    title: 'News API Backend Service',
    description: 'A backend service implementing REST APIs for news articles, with CRUD operations, third-party API integration, and comprehensive error handling.',
    image: '/images/projects/backend-assignment/thumbnail.jpg',
    tags: ['Node.js', 'Express', 'MongoDB', 'News API', 'CRUD'],
    githubUrl: 'https://github.com/KsaintJ/assignment3-backend',
    liveUrl: null,
    category: 'backend',
    detailsUrl: '/projects/backend-assignment',
    homepageFeatured: false
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS to showcase my projects and skills.',
    image: '/images/projects/portfolio-website/thumbnail.jpg',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/KsaintJ/portfolio-website',
    liveUrl: 'https://portfolio.usejuste.com',
    category: 'frontend',
    detailsUrl: '/projects/portfolio-website',
    homepageFeatured: false
  }
];
