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
    subtitle: "MERN/MEAN Stack Developer",
    description: "I craft responsive, user-focused web applications with React, Next.js, and modern JavaScript. Currently pursuing my Master's in Software Engineering at Penn State.",
    cta: {
      work: "View My Work",
      contact: "Get In Touch"
    }
  },
  skills: {
    title: "My Skills",
    description: "I've developed expertise in various technologies across the full stack, with an emphasis on JavaScript frameworks and libraries.",
    categories: {
      all: "All Skills",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools & Methods"
    },
    otherTech: "Other Technologies I Use"
  },
  projects: {
    // Main projects page
    title: "My Projects",
    subtitle: "Here's a collection of my recent work, showcasing my skills in frontend and full-stack development.",
    searchPlaceholder: "Search projects...",
    noResults: "No projects match your criteria. Try adjusting your filters.",
    loadMore: "Load More Projects",
    viewDetails: "View Details",
    backToProjects: "Back to Projects",
    
    // Project filters
    filters: {
      all: "All Projects",
      frontend: "Frontend",
      backend: "Backend",
      fullStack: "Full Stack"
    },
    
    // More on GitHub section
    moreOnGitHub: {
      title: "More on GitHub",
      description: "Beyond the projects showcased above, you can explore more of my work and code contributions on GitHub. I'm constantly learning and building new things!",
      viewProfile: "View GitHub Profile"
    },
    
    // Common sections for project detail pages
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
    
    // Individual project translations
    items: {
      // Elderly Care Management System
      elderlyCare: {
        title: "Elderly Care Management System",
        description: "A comprehensive web application for managing elderly care facilities, tracking patient information, and coordinating staff schedules.",
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
            solution: "I implemented encrypted data storage, strict access controls, and audit logging to maintain compliance with healthcare privacy standards and protect sensitive patient information."
          },
          realTime: {
            title: "Challenge: Real-time Communication",
            description: "Creating a reliable system for real-time alerts and notifications for critical patient events.",
            solution: "I integrated Socket.IO to enable real-time notifications, implemented a priority-based alert system, and ensured message delivery confirmation for critical communications."
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
          academic: "Academic Project",
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
        relevanceIntro: "This project demonstrates skills that are directly applicable to full-stack development roles in healthcare and beyond:",
        relevancePoints: [
          "Creating secure, compliant applications for highly regulated industries",
          "Building complex data management systems with multiple user types and permission levels",
          "Implementing real-time features for critical applications",
          "Designing accessible, intuitive interfaces for diverse user populations",
          "Working with healthcare domain knowledge and specialized requirements"
        ]
      },
      
      // Frontend Authentication System
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
            description: "Implementing a secure authentication flow with proper token management, expiration handling, and refresh mechanisms was complex.",
            solution: "I designed a robust authentication service using HTTP-only cookies for token storage, implemented token refresh mechanisms, and built proper logout functionality that cleared all auth state."
          },
          error: {
            title: "Challenge: Comprehensive Error Handling",
            description: "Error handling needed to be comprehensive yet user-friendly, covering network errors, validation errors, and authentication failures.",
            solution: "I implemented a centralized error handling system that categorized errors by type and displayed appropriate user-friendly messages without exposing sensitive technical details."
          },
          mfa: {
            title: "Challenge: Multi-Factor Authentication",
            description: "Adding MFA while maintaining a smooth user experience was challenging.",
            solution: "I implemented a step-by-step verification process with clear instructions and fallback options for users. The system supports both app-based and SMS verification methods."
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
          login: {
            alt: "Login Page",
            caption: "Secure authentication interface with form validation"
          },
          dashboard: {
            alt: "Dashboard",
            caption: "Protected dashboard with user-specific content"
          },
          oauth: {
            alt: "Google OAuth Integration",
            caption: "Social login integration for seamless authentication"
          },
          success: {
            alt: "Success Messages",
            caption: "User-friendly feedback for successful operations"
          },
          mfa: {
            alt: "Multi-Factor Authentication",
            caption: "Enhanced security with multi-factor authentication"
          },
          stats: {
            alt: "Real-time Statistics",
            caption: "Live data visualization for dynamic user metrics"
          }
        },
        testingStats: {
          unit: {
            title: "Unit Tests",
            count: "24 tests"
          },
          integration: {
            title: "Integration Tests",
            count: "12 tests"
          },
          coverage: {
            title: "Code Coverage",
            percentage: "92%"
          }
        }
      },
      
      // Backend News API
      backendNews: {
        title: "Backend News API Service",
        description: "A robust RESTful API built with Node.js, Express, and MongoDB that provides a comprehensive solution for managing news articles. This API supports full CRUD operations, user authentication, role-based access control, and advanced querying capabilities.",
        context: "Developed as part of my coursework at Penn State University, this project demonstrates my proficiency in building secure, scalable, and well-structured backend systems that follow industry best practices.",
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
            solution: "I built a robust JWT-based authentication system with middleware that verifies tokens, extracts user information, and performs role checks. The solution includes token expiration, refresh mechanisms, and protection against common vulnerabilities."
          },
          query: {
            title: "Challenge: Advanced Querying",
            description: "Providing flexible API endpoints that support pagination, filtering, and sorting.",
            solution: "I implemented a dynamic query builder that processes request parameters to construct MongoDB queries. This allows clients to filter by multiple criteria, sort by any field, and paginate results efficiently."
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
          article: {
            title: "Article Controller"
          },
          auth: {
            title: "Authentication Middleware"
          }
        },
        screenshotsTitle: "API Testing Screenshots",
        screenshots: {
          apiSave: {
            alt: "API Save Endpoint",
            caption: "Successful POST request saving multiple news articles"
          },
          articleCreate: {
            alt: "Article Creation",
            caption: "Creating a new article with JSON payload"
          },
          getAllArticles: {
            alt: "Get All Articles",
            caption: "Retrieving all articles with pagination support"
          },
          articleUpdate: {
            alt: "Article Update",
            caption: "Updating article content via PATCH request"
          },
          articleDelete: {
            alt: "Article Deletion",
            caption: "Removing an article from the database"
          },
          afterDelete: {
            alt: "After Deletion",
            caption: "Verification that article has been removed from database"
          }
        },
        lessonsIntro: "This project provided valuable insights into building robust backend systems:",
        lessons: [
          "Designing and implementing secure authentication systems",
          "Creating scalable and maintainable API architectures",
          "Building effective data validation and error handling",
          "Working with MongoDB and Mongoose for efficient data operations",
          "Implementing role-based access control for API security"
        ],
        relevanceIntro: "This project showcases backend skills that are valuable for various development positions:",
        relevancePoints: [
          "Designing and implementing RESTful APIs - a fundamental skill for backend roles",
          "Creating secure authentication and authorization systems - critical for data protection",
          "Working with databases and designing efficient schemas - essential for data-driven applications",
          "Implementing proper error handling and validation - necessary for robust production applications",
          "Testing and documenting APIs - demonstrates professional development practices",
          "Leveraging my information security background to build secure backend systems"
        ]
      },
      
      // Portfolio Website
      portfolio: {
        title: "Personal Portfolio Website",
        description: "This portfolio website showcases my software development skills and projects. Built with modern web technologies including Next.js, React, and Tailwind CSS, the site features responsive design, interactive animations, dark mode support, and multi-language capabilities to create an engaging user experience.",
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
            solution: "I implemented a React Context-based language system with localStorage persistence, creating a flexible translation structure that works seamlessly across all components."
          },
          animations: {
            title: "Challenge: Performance-Optimized Animations",
            description: "Creating smooth animations without causing performance issues or hydration mismatches with server-side rendering.",
            solution: "I created custom SafeClientOnly components to handle client-side animations without hydration mismatches, and optimized animation performance using Framer Motion's best practices."
          },
          darkMode: {
            title: "Challenge: Dark Mode Implementation",
            description: "Implementing a dark mode that respects user preferences and persists across visits.",
            solution: "I used next-themes to implement a robust theme system with proper preference persistence, system preference detection, and smooth transitions between themes."
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
          homepage: {
            alt: "Portfolio Homepage",
            caption: "Modern, responsive homepage with interactive animations"
          },
          projects: {
            alt: "Projects Page",
            caption: "Project listing page with filtering and search functionality"
          },
          darkMode: {
            alt: "Dark Mode",
            caption: "Seamless dark mode implementation with theme persistence"
          }
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
        relevanceIntro: "This project demonstrates skills that are directly applicable to frontend and full-stack development roles:",
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
    title: "Ready to Work Together?",
    description: "I'm currently seeking internship opportunities for Summer 2025 as a Junior Developer, Frontend Developer, or similar positions that align with my MERN/MEAN stack expertise. As a first-semester software engineering student, I'm eager to apply my skills in real-world contexts through internships, freelance projects, and collaboration opportunities.",
    button: "Let's Connect"
  },
  footer: {
    description: "Software developer specializing in frontend and full-stack development with React, Next.js, and modern JavaScript.",
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
      subtitle: "Hello, I'm Kender Saint-Juste, a Junior Developer from Tampa, Florida. I'm currently pursuing my Master's in Software Engineering at Penn State University (expected 2027).",
      description1: "With a strong foundation in frontend and backend development, I'm passionate about creating scalable web applications using JavaScript, React, Node.js, and MongoDB. My information security background and recent experience at TeamViewer have equipped me with valuable skills in troubleshooting, customer success, and enterprise software solutions.",
      description2: "When I'm not coding, you can find me playing basketball (I'm a big Kobe Bryant fan), enjoying soccer, staying active, or planning my next travel adventure. I balance my diligent work ethic with creative thinking and innovation."
    },
    resumeButtons: {
      primary: "Download Resume (Dev)",
      dropdown: "Other Resume Options",
      general: "General Resume",
      frontend: "Frontend Resume"
    },
    internship: {
      title: "Looking for Internship Opportunities",
      description: "I'm actively seeking software engineering internship opportunities where I can apply my academic knowledge and contribute to impactful projects. As a Master's student in Software Engineering at Penn State, I'm eager to gain professional experience in a collaborative team environment.",
      availability: {
        title: "Availability",
        fullTime: "Summer 2025 (Full-time)",
        partTime: "Fall/Spring 2024-2025 (Part-time)",
        location: "Remote or Tampa, FL area"
      },
      interests: {
        title: "Areas of Interest",
        frontend: "Frontend Development (React, Next.js)",
        fullstack: "Full-Stack Development",
        webApp: "Web Application Development"
      },
      cta: "Contact Me for Opportunities"
    },
    traits: {
      title: "My Personal Traits",
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
      inProgress: "In Progress (Expected 2027)",
      completed: "Completed December 2023"
    },
    passions: {
      title: "Passions & Interests",
      sports: {
        title: "Sports & Activities",
        description: "Passionate about basketball (big Kobe Bryant fan), soccer player, and fitness enthusiast. Staying active is an essential part of my routine that helps me maintain my focus and creativity."
      },
      tech: {
        title: "Technology & Programming",
        description: "Fascinated by the power of code to transform ideas into reality. I love exploring new frameworks, building projects, and staying current with emerging technologies like artificial intelligence."
      },
      travel: {
        title: "Travel & Exploration",
        description: "I love discovering new cultures, cuisines, and perspectives through travel. Each trip brings new inspiration and broadens my understanding of users' needs in different contexts."
      }
    },
    goals: {
      title: "Professional Goals",
      shortTerm: "My immediate goal is to fully transition into a Junior Developer role, using my experience and education to create impactful applications that address real-world challenges.",
      midTerm: "I aim to deepen my expertise in full-stack development, system design, and CI/CD automation through my Master's program and hands-on projects.",
      longTerm: "Long-term, I aspire to launch my own technology company, combining my software engineering skills, information security experience, and entrepreneurial spirit to develop innovative solutions that make a difference."
    },
    timeline: {
      graduateStudent: {
        title: "Graduate Student",
        organization: "Penn State University",
        description: "Pursuing a Master's in Software Engineering, focusing on software architecture, AI engineering, and project quality management to deepen full-stack development expertise."
      },
      supportSpecialist: {
        title: "Customer Support Specialist",
        organization: "TeamViewer",
        description: "Providing technical troubleshooting for enterprise software solutions with a 95% first-contact resolution rate, while optimizing support workflows and reducing problem resolution times by 20%."
      },
      salesRep: {
        title: "Sales Representative",
        organization: "TeamViewer",
        description: "Conducting technical demonstrations of SaaS and enterprise software solutions, generating over $1.5 million in revenue and strengthening customer relationships to increase upsell conversions."
      },
      salesDev: {
        title: "Sales Development Representative",
        organization: "TeamViewer",
        description: "Exceeding quarterly sales targets through prospect qualification and consultations, improving sales pipeline efficiency by 20% through strategic lead generation."
      },
      bachelors: {
        title: "Bachelor's Degree",
        organization: "University of South Florida",
        description: "Earning a Bachelor of Science in Information Science with a concentration in Information Security and a minor in Entrepreneurship, graduating in December 2023."
      }
    }
  },
  contact: {
    title: "Get In Touch",
    subtitle: "I'm currently available for freelance projects, full-time positions, and collaborative opportunities. Feel free to reach out!",
    info: {
      title: "Contact Information",
      location: {
        label: "Location",
        value: "Tampa, Florida"
      },
      responseTime: {
        label: "Response Time",
        value: "I typically respond to all inquiries within 24-48 hours. For urgent matters, please mention \"URGENT\" in the subject line."
      },
      preferredMethods: {
        title: "Preferred Contact Methods",
        methods: [
          "For professional inquiries: LinkedIn or Email",
          "For code-related discussions: GitHub",
          "For quick questions: Email"
        ]
      },
      availability: {
        title: "Meeting Availability",
        subtitle: "Currently available for virtual meetings during these hours:",
        weekdays: {
          label: "Weekdays",
          hours: "6:00 PM - 9:00 PM EST"
        },
        weekends: {
          label: "Weekends", 
          hours: "10:00 AM - 5:00 PM EST"
        },
        note: "*Other times may be available upon request"
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
        name: {
          label: "Name",
          placeholder: "Your name",
          error: "Name is required"
        },
        email: {
          label: "Email",
          placeholder: "Your email",
          error: "Email is required",
          invalidError: "Email is invalid"
        },
        subject: {
          label: "Subject",
          placeholder: "Subject of your message",
          error: "Subject is required"
        },
        message: {
          label: "Message",
          placeholder: "Your message",
          error: "Message is required"
        }
      },
      submit: "Send Message",
      success: "Your message has been sent! I will get back to you soon.",
      error: "There was an error sending your message. Please try again later.",
      sending: "Sending your message..."
    }
  }
};