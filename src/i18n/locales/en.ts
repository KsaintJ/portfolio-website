// src/i18n/locales/en.ts
export default {
  common: {
    language: "Language",
    themeToggle: "Toggle Theme"
  },
  navigation: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact"
  },
  hero: {
    title: "Hi, I'm Kender Saint-Juste",
    subtitle: "Founder · Solutions Engineer · Builder",
    description: "I build products at the intersection of access governance, AI, and software engineering. Founder & CEO of Juste™ LLC — creator of Least by Juste™, a live SaaS product for Google Workspace access review automation.",
    cta: {
      work: "View My Work",
      contact: "Get In Touch"
    }
  },
  skills: {
    title: "My Skills",
    description: "Full-stack technical background spanning access governance, SaaS product development, and enterprise security — built through 12+ years of professional experience and live product work.",
    categories: {
      all: "All Skills",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools & Methods"
    },
    otherTech: "Other Technologies I Use"
  },
  projects: {
    title: "My Projects",
    subtitle: "A collection of work spanning SaaS product development, healthcare systems, and full-stack engineering.",
    searchPlaceholder: "Search projects...",
    noResults: "No projects match your criteria. Try adjusting your filters.",
    loadMore: "Load More Projects",
    viewDetails: "View Details",
    backToProjects: "Back to Projects",
    filters: {
      all: "All Projects",
      frontend: "Frontend",
      backend: "Backend",
      fullStack: "Full Stack"
    },
    moreOnGitHub: {
      title: "More on GitHub",
      description: "Beyond the projects showcased here, explore more of my work on GitHub — including my IAM/GRC portfolio demonstrating access governance, RBAC, and SOC 2 audit evidence artifacts.",
      viewProfile: "View GitHub Profile"
    },
    details: {
      overview: "Project Overview",
      keyFeatures: "Key Features",
      challenges: "Technical Challenges & Solutions",
      technologies: "Technologies Used",
      codeHighlights: "Code Highlights",
      screenshots: "Screenshots",
      lessonsLearned: "Lessons Learned",
      professionalRelevance: "Professional Relevance",
      viewOnGitHub: "View on GitHub",
      viewLive: "View Live Site",
      viewVideo: "Watch Demo",
      testingStats: "Testing Statistics",
      coverage: "Code Coverage"
    },
    items: {
      elderlyCare: {
        title: "OneCare — Elderly Care Management System",
        description: "A comprehensive web application for managing elderly care facilities, tracking patient information, and coordinating staff schedules. The foundation of OneCare by Juste™, now being developed into an AI-powered elderly care platform.",
        features: [
          "Patient information management and tracking",
          "Staff scheduling and coordination",
          "Medication tracking and alerts",
          "Family communication portal",
          "Reporting and analytics dashboard"
        ],
        challenges: {
          dataPrivacy: {
            title: "Challenge: Data Privacy & HIPAA Compliance",
            description: "Ensuring sensitive patient data was securely stored and accessed while maintaining compliance with healthcare privacy regulations.",
            solution: "Implemented encrypted data storage, strict access controls, and audit logging to maintain compliance with healthcare privacy standards and protect sensitive patient information."
          },
          realTime: {
            title: "Challenge: Real-time Communication",
            description: "Creating a reliable system for real-time alerts and notifications for critical patient events.",
            solution: "Integrated Socket.IO to enable real-time notifications, implemented a priority-based alert system, and ensured message delivery confirmation for critical communications."
          }
        },
        technologies: [
          "React", "Material UI", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT Authentication"
        ],
        techDetails: {
          frontend: "React with Material UI for accessible interfaces",
          backend: "Node.js with Express for robust API development",
          database: "MongoDB for flexible data storage",
          security: "JWT authentication and role-based access control"
        },
        projectType: {
          title: "Project Type",
          academic: "Academic Project → Active Product",
          fullstack: "Full-Stack Application",
          domain: "Healthcare Domain"
        },
        screenshots: {
          dashboard: {
            alt: "Admin Dashboard",
            caption: "Administrative dashboard showing key metrics and patient overview"
          },
          patient: {
            alt: "Patient Profile",
            caption: "Detailed patient profile with medical history and care plan"
          },
          scheduling: {
            alt: "Staff Scheduling",
            caption: "Calendar interface for staff scheduling and shift management"
          }
        },
        lessonsIntro: "This project provided valuable insights and learning opportunities:",
        lessons: [
          "Creating HIPAA-compliant healthcare applications with proper security measures",
          "Designing intuitive interfaces for multiple user types (administrators, staff, family members)",
          "Implementing real-time communication systems for critical notifications",
          "Managing complex scheduling requirements and conflict resolution",
          "Building accessible interfaces for users with varying technical proficiency",
          "Integrating comprehensive reporting and analytics features"
        ],
        relevanceIntro: "This project demonstrates skills directly applicable to full-stack development roles in healthcare and beyond:",
        relevancePoints: [
          "Creating secure, compliant applications for highly regulated industries",
          "Building complex data management systems with multiple user types and permission levels",
          "Implementing real-time features for critical applications",
          "Designing accessible, intuitive interfaces for diverse user populations",
          "Working with healthcare domain knowledge and specialized requirements"
        ]
      },
      frontendAuth: {
        title: "Frontend Authentication System",
        description: "A modern web application implementing secure authentication and API integration, with comprehensive error handling and thorough testing coverage.",
        features: [
          "Secure user authentication with JWT",
          "OAuth integration with Google",
          "Comprehensive error handling",
          "Role-based access control",
          "Form validation with meaningful feedback",
          "Thorough testing coverage"
        ],
        challenges: {
          auth: {
            title: "Challenge: Secure Authentication Flow",
            description: "Implementing a secure authentication flow with proper token management, expiration handling, and refresh mechanisms.",
            solution: "Designed a robust authentication service using HTTP-only cookies for token storage, implemented token refresh mechanisms, and built proper logout functionality that cleared all auth state."
          },
          error: {
            title: "Challenge: Comprehensive Error Handling",
            description: "Error handling needed to be comprehensive yet user-friendly, covering network errors, validation errors, and authentication failures.",
            solution: "Implemented a centralized error handling system that categorized errors by type and displayed appropriate user-friendly messages without exposing sensitive technical details."
          },
          mfa: {
            title: "Challenge: Multi-Factor Authentication",
            description: "Adding MFA while maintaining a smooth user experience.",
            solution: "Implemented a step-by-step verification process with clear instructions and fallback options. The system supports both app-based and SMS verification methods."
          }
        },
        codeSnippets: {
          auth: {
            title: "Authentication Service",
            description: "Central service managing login, registration, and token handling."
          },
          validation: {
            title: "Form Validation Hook",
            description: "Custom React hook for form validation with support for complex validation rules."
          }
        },
        screenshots: {
          login: { alt: "Login Page", caption: "Secure authentication interface with form validation" },
          dashboard: { alt: "Dashboard", caption: "Protected dashboard with user-specific content" },
          oauth: { alt: "Google OAuth Integration", caption: "Social login integration for seamless authentication" },
          success: { alt: "Success Messages", caption: "User-friendly feedback for successful operations" },
          mfa: { alt: "Multi-Factor Authentication", caption: "Enhanced security with multi-factor authentication" },
          stats: { alt: "Real-time Statistics", caption: "Live data visualization for dynamic user metrics" }
        },
        testingStats: {
          unit: { title: "Unit Tests", count: "24 tests" },
          integration: { title: "Integration Tests", count: "12 tests" },
          coverage: { title: "Code Coverage", percentage: "92%" }
        }
      },
      backendNews: {
        title: "Backend News API Service",
        description: "A robust RESTful API built with Node.js, Express, and MongoDB providing full CRUD operations, JWT authentication, role-based access control, and advanced querying capabilities.",
        context: "Developed as part of Penn State University coursework, this project demonstrates proficiency in building secure, scalable backend systems following industry best practices.",
        features: [
          "RESTful API with complete CRUD operations",
          "JWT-based authentication and authorization",
          "Role-based access control",
          "Data validation and sanitization",
          "Comprehensive error handling",
          "Pagination, filtering, and sorting",
          "Caching for improved performance",
          "Detailed API documentation"
        ],
        technologies: [
          "Node.js", "Express", "MongoDB", "Mongoose",
          "JWT Authentication", "RESTful API", "API Testing", "Postman"
        ],
        challenges: {
          secure: {
            title: "Challenge: Secure Authentication",
            description: "Implementing a secure authentication system with proper token handling and role-based access.",
            solution: "Built a robust JWT-based authentication system with middleware that verifies tokens, extracts user information, and performs role checks — including token expiration, refresh mechanisms, and protection against common vulnerabilities."
          },
          query: {
            title: "Challenge: Advanced Querying",
            description: "Providing flexible API endpoints that support pagination, filtering, and sorting.",
            solution: "Implemented a dynamic query builder that processes request parameters to construct MongoDB queries, allowing clients to filter by multiple criteria, sort by any field, and paginate results efficiently."
          }
        },
        techDetails: {
          node: "Node.js for server runtime",
          express: "Express.js for API framework",
          mongo: "MongoDB for database",
          mongoose: "Mongoose for ODM",
          jwt: "JWT for authentication",
          validator: "Express Validator for data validation"
        },
        apiMetrics: {
          title: "API Metrics",
          endpoints: "Endpoints",
          models: "Database Models"
        },
        codeSnippets: {
          article: { title: "Article Controller" },
          auth: { title: "Authentication Middleware" }
        },
        screenshotsTitle: "API Testing Screenshots",
        screenshots: {
          apiSave: { alt: "API Save Endpoint", caption: "Successful POST request saving multiple news articles" },
          articleCreate: { alt: "Article Creation", caption: "Creating a new article with JSON payload" },
          getAllArticles: { alt: "Get All Articles", caption: "Retrieving all articles with pagination support" },
          articleUpdate: { alt: "Article Update", caption: "Updating article content via PATCH request" },
          articleDelete: { alt: "Article Deletion", caption: "Removing an article from the database" },
          afterDelete: { alt: "After Deletion", caption: "Verification that article has been removed from database" }
        },
        lessonsIntro: "This project provided valuable insights into building robust backend systems:",
        lessons: [
          "Designing and implementing secure authentication systems",
          "Creating scalable and maintainable API architectures",
          "Building effective data validation and error handling",
          "Working with MongoDB and Mongoose for efficient data operations",
          "Implementing role-based access control for API security"
        ],
        relevanceIntro: "This project showcases backend skills valuable for development and solutions engineering positions:",
        relevancePoints: [
          "Designing and implementing RESTful APIs — a fundamental skill for backend and SE roles",
          "Creating secure authentication and authorization systems — critical for enterprise SaaS",
          "Working with databases and designing efficient schemas — essential for data-driven applications",
          "Implementing proper error handling and validation — necessary for production applications",
          "Testing and documenting APIs — demonstrates professional development practices",
          "Leveraging information security background to build secure backend systems"
        ]
      },
      portfolio: {
        title: "Personal Portfolio Website",
        description: "This portfolio website showcases software development skills and live product work. Built with Next.js, React, and Tailwind CSS — featuring responsive design, interactive animations, dark mode, and multi-language support (English, French, Haitian Creole, Spanish).",
        svgTitle: "Portfolio Website",
        features: [
          "Responsive design for optimal viewing on all devices",
          "Interactive animations using Framer Motion",
          "Dark mode with theme persistence",
          "Multi-language support (English, French, Spanish, Haitian Creole)",
          "Optimized performance with Next.js",
          "Dynamic project pages with detailed information",
          "Contact form with email functionality"
        ],
        technologies: [
          "Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript", "i18n"
        ],
        challenges: {
          i18n: {
            title: "Challenge: Internationalization",
            description: "Implementing multi-language support while maintaining a smooth user experience and managing translation files effectively.",
            solution: "Implemented a React Context-based language system with localStorage persistence, creating a flexible translation structure that works seamlessly across all components."
          },
          animations: {
            title: "Challenge: Performance-Optimized Animations",
            description: "Creating smooth animations without causing performance issues or hydration mismatches with server-side rendering.",
            solution: "Created custom SafeClientOnly components to handle client-side animations without hydration mismatches, and optimized animation performance using Framer Motion's best practices."
          },
          darkMode: {
            title: "Challenge: Dark Mode Implementation",
            description: "Implementing a dark mode that respects user preferences and persists across visits.",
            solution: "Used next-themes to implement a robust theme system with proper preference persistence, system preference detection, and smooth transitions between themes."
          }
        },
        techDetails: {
          framework: "Next.js for framework",
          styling: "Tailwind CSS for styling",
          animations: "Framer Motion for animations",
          deployment: "Vercel for deployment",
          state: "React Context for state management",
          theme: "next-themes for dark/light mode",
          email: "Resend for email functionality"
        },
        languages: {
          title: "Languages",
          english: "English",
          french: "French",
          spanish: "Spanish",
          creole: "Haitian Creole"
        },
        screenshots: {
          homepage: { alt: "Portfolio Homepage", caption: "Modern, responsive homepage with interactive animations" },
          projects: { alt: "Projects Page", caption: "Project listing page with filtering and search functionality" },
          darkMode: { alt: "Dark Mode", caption: "Seamless dark mode implementation with theme persistence" }
        },
        lessonsIntro: "This project provided valuable insights and learning opportunities:",
        lessons: [
          "Building with Next.js for optimized performance and SEO",
          "Implementing internationalization for multi-language support",
          "Creating smooth, performance-optimized animations",
          "Designing responsive layouts for all device sizes",
          "Managing theme preferences with proper persistence",
          "Structuring a project for maintainability and future expansion"
        ],
        relevanceIntro: "This project demonstrates skills directly applicable to frontend and full-stack development roles:",
        relevancePoints: [
          "Building modern web applications with Next.js and React",
          "Creating responsive, accessible user interfaces with Tailwind CSS",
          "Implementing performance-optimized animations and transitions",
          "Supporting multiple languages with proper internationalization",
          "Maintaining consistent design with light and dark themes",
          "Optimizing for performance, accessibility, and SEO"
        ]
      }
    }
  },
  cta: {
    title: "Let's Build Something Together",
    description: "I'm actively pursuing Solutions Engineer, GRC Analyst, and Information Security Analyst roles in Tampa, FL. As the founder of Juste™ LLC and builder of Least by Juste™, I bring 12+ years of professional experience, live product credibility, and technical depth across IAM, access governance, and full-stack engineering.",
    button: "Get In Touch"
  },
  footer: {
    description: "Founder & CEO of Juste™ LLC. Builder of Least by Juste™ — access review automation for Google Workspace. Pursuing Solutions Engineer and GRC Analyst roles.",
    rights: "All rights reserved",
    madeWith: "Made with",
    usingTech: "using Next.js, React, and Tailwind CSS",
    quickLinks: "Quick Links",
    contact: "Contact",
    getInTouch: "Get In Touch",
    socialLinks: "Social Links"
  },
  about: {
    title: "About Me",
    intro: {
      subtitle: "I'm Kender Saint-Juste — Founder & CEO of Juste™ LLC, Solutions Engineer candidate, and full-stack builder based in Tampa, Florida.",
      description1: "I build products at the intersection of access governance, AI, and software engineering. Least by Juste™ (app.getleast.io) is my live SaaS product — an access review automation tool for Google Workspace that generates SOC 2-aligned audit evidence for SMBs. OneCare by Juste™ is my early-stage elderly care AI platform.",
      description2: "My background spans 12+ years across enterprise SaaS sales and support (TeamViewer), IAM and GRC consulting, and hands-on product development. I hold a B.S. in Information Science with a concentration in Information Security and a minor in Entrepreneurship from USF (3.76 GPA). I'm trilingual — English, French, and Haitian Creole."
    },
    resumeButtons: {
      primary: "Download Resume",
      dropdown: "Resume Options",
      general: "Solutions Engineer Resume",
      frontend: "GRC Analyst Resume"
    },
    internship: {
      title: "Currently Seeking",
      description: "I'm a founder with a live product and 12+ years of professional experience — actively pursuing my next role while continuing to build Juste™ LLC. I bring real technical depth, not just credentials.",
      availability: {
        title: "Active Now",
        fullTime: "Solutions Engineer / Pre-Sales Engineer",
        partTime: "GRC Analyst / Information Security Analyst",
        location: "Implementation Lead / Technical Account Manager"
      },
      interests: {
        title: "Building Toward",
        frontend: "Full-Stack Developer / Founding Engineer",
        fullstack: "Product Manager / Technical Product Owner",
        webApp: "Founder / CEO — Juste™ LLC full-time"
      },
      cta: "Let's Talk"
    },
    traits: {
      title: "Personal Traits",
      diligent: "Diligent",
      creative: "Creative"
    },
    skills: {
      title: "Technical Skills",
      additional: "Additional Skills"
    },
    journey: {
      title: "My Journey",
      progress: "Progress",
      inProgress: "On Pause — Exploring CS/AI Master's Programs",
      completed: "Completed December 2023"
    },
    passions: {
      title: "Passions & Interests",
      sports: {
        title: "Sports & Activities",
        description: "Passionate about basketball (lifelong Kobe Bryant fan), soccer, and staying active. Sport keeps me disciplined, competitive, and creative — the same mindset I bring to building products."
      },
      tech: {
        title: "Technology & Building",
        description: "I build things. Least by Juste™ is live. OneCare is in development. The goal is genuine technical fluency and building products that solve real problems — not credential collection."
      },
      travel: {
        title: "Travel & Culture",
        description: "Originally from Haiti and Port St. Lucie, FL — now permanently based in Tampa. Travel shaped how I think about building for diverse users and why I built multilingual support into this very portfolio."
      }
    },
    goals: {
      title: "Professional Goals",
      shortTerm: "Land a Solutions Engineer or GRC Analyst role where I can apply IAM domain expertise, technical depth, and live product experience — and keep building Juste™ LLC in parallel.",
      midTerm: "Grow Least by Juste™ to its first paying customers, pursue a graduate degree in Computer Science or AI, and deepen full-stack engineering capability through real product work.",
      longTerm: "Build Juste™ LLC into a company that solves real problems in access governance and elderly care AI — carrying the Saint-Juste name forward through what I build, not just what I say."
    },
    timeline: {
      graduateStudent: {
        title: "Founder & CEO",
        organization: "Juste™ LLC",
        description: "Founded March 2026. Building Least by Juste™ (app.getleast.io) — access review automation SaaS for Google Workspace — and OneCare by Juste™, an early-stage elderly care AI platform."
      },
      supportSpecialist: {
        title: "Customer Support Specialist",
        organization: "TeamViewer",
        description: "Technical troubleshooting for enterprise remote access software. IAM, SSO/SAML, 2FA/MFA configuration, Conditional Access policy support, and SOC 2/HIPAA compliance-adjacent customer environments."
      },
      salesRep: {
        title: "Inside Sales Representative",
        organization: "TeamViewer",
        description: "Technical demonstrations of enterprise SaaS solutions, generating over $1.5M in revenue and strengthening customer relationships through consultative selling."
      },
      salesDev: {
        title: "Sales Development Representative",
        organization: "TeamViewer",
        description: "Exceeded quarterly sales targets through prospect qualification and consultations. Improved pipeline efficiency through strategic lead generation."
      },
      bestBuy: {
        title: "Sales Consultant & Team Trainer",
        organization: "Best Buy",
        description: "Top-performing consultant generating $40K+ in monthly personal sales. Trained 10+ new consultants on product knowledge and consultative sales techniques across consumer electronics and enterprise technology solutions."
      },
      bachelors: {
        title: "Bachelor's Degree — Information Science",
        organization: "University of South Florida",
        description: "B.S. Information Science, Information Security concentration, Entrepreneurship minor. 3.76 GPA. Graduated December 2023. Completed entirely online."
      }
    }
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Open to Solutions Engineer, GRC Analyst, and Implementation Lead roles in Tampa or remote. Also open to technical collaboration and conversations about Least by Juste™.",
    info: {
      title: "Contact Information",
      location: {
        label: "Location",
        value: "Tampa, Florida (permanently based)"
      },
      responseTime: {
        label: "Response Time",
        value: "I respond to all inquiries within 24-48 hours. For urgent matters, please mention URGENT in the subject line."
      },
      preferredMethods: {
        title: "Preferred Contact Methods",
        methods: [
          "Professional inquiries: LinkedIn or Email",
          "Code and technical discussions: GitHub",
          "Product demos (Least by Juste™): Email"
        ]
      },
      availability: {
        title: "Meeting Availability",
        subtitle: "Available for virtual meetings:",
        weekdays: {
          label: "Weekdays",
          hours: "Flexible — reach out to schedule"
        },
        weekends: {
          label: "Weekends",
          hours: "10:00 AM - 5:00 PM EST"
        },
        note: "*Currently in active job search — responsive and available"
      },
      connect: {
        title: "Connect With Me",
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email"
      }
    },
    form: {
      title: "Send Me a Message",
      fields: {
        name: { label: "Name", placeholder: "Your name", error: "Name is required" },
        email: { label: "Email", placeholder: "Your email", error: "Email is required", invalidError: "Email is invalid" },
        subject: { label: "Subject", placeholder: "Subject of your message", error: "Subject is required" },
        message: { label: "Message", placeholder: "Your message", error: "Message is required" }
      },
      submit: "Send Message",
      success: "Your message has been sent! I will get back to you soon.",
      error: "There was an error sending your message. Please try again later.",
      sending: "Sending your message..."
    }
  }
};
