// src/i18n/locales/es.ts
export default {
  common: {
    language: "Idioma",
    themeToggle: "Cambiar de Modo"
  },
  navigation: {
    home: "Inicio",
    about: "Sobre Mí",
    projects: "Proyectos",
    contact: "Contacto"
  },
  hero: {
    title: "Hola, soy Kender Saint-Juste",
    subtitle: "Desarrollador Full Stack MERN/MEAN",
    description: "Creo aplicaciones web responsivas y centradas en el usuario con React, Next.js y JavaScript moderno. Actualmente estoy cursando mi maestría en ingeniería de software en Penn State.",
    cta: {
      work: "Ver Mi Trabajo",
      contact: "Contactarme"
    }
  },
  skills: {
    title: "Mis Habilidades",
    description: "He desarrollado experiencia en diversas tecnologías en todo el stack, con énfasis en marcos y bibliotecas de JavaScript.",
    categories: {
      all: "Todas las Habilidades",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Herramientas & Métodos"
    },
    otherTech: "Otras Tecnologías que Uso"
  },
  projects: {
    // Main projects page
    title: "Mis Proyectos",
    subtitle: "Aquí hay una colección de mis trabajos recientes, destacando mis habilidades en desarrollo frontend y full-stack.",
    searchPlaceholder: "Buscar proyectos...",
    noResults: "Ningún proyecto coincide con tus criterios. Intenta ajustar tus filtros.",
    loadMore: "Cargar Más Proyectos",
    viewDetails: "Ver Detalles",
    backToProjects: "Volver a Proyectos",
    
    // Project filters
    filters: {
      all: "Todos los Proyectos",
      frontend: "Frontend",
      backend: "Backend",
      fullStack: "Full Stack"
    },
    
    // More on GitHub section
    moreOnGitHub: {
      title: "Más en GitHub",
      description: "Más allá de los proyectos presentados arriba, puedes explorar más de mis trabajos y contribuciones de código en GitHub. ¡Constantemente estoy aprendiendo y construyendo cosas nuevas!",
      viewProfile: "Ver Perfil de GitHub"
    },
    
    // Common sections for project detail pages
    details: {
      overview: "Descripción General del Proyecto",
      keyFeatures: "Características Clave",
      challenges: "Desafíos Técnicos & Soluciones",
      technologies: "Tecnologías Utilizadas",
      codeHighlights: "Aspectos Destacados del Código",
      screenshots: "Capturas de Pantalla",
      lessonsLearned: "Lecciones Aprendidas",
      professionalRelevance: "Relevancia Profesional",
      viewOnGitHub: "Ver en GitHub",
      viewLive: "Ver Demo en Vivo",
      viewVideo: "Ver Video Demo",
      testingStats: "Estadísticas de Pruebas",
      coverage: "Cobertura de Código"
    },
    
    // Individual project translations
    items: {
      // Elderly Care Management System
      elderlyCare: {
        title: "Sistema de Gestión de Cuidado de Ancianos",
        description: "Una aplicación web completa para gestionar instalaciones de cuidado de ancianos, rastrear información de pacientes y coordinar horarios del personal.",
        features: [
          "Gestión y seguimiento de información de pacientes",
          "Programación y coordinación de personal",
          "Seguimiento de medicamentos y alertas",
          "Portal de comunicación familiar",
          "Tablero de informes y análisis"
        ],
        challenges: {
          dataPrivacy: {
            title: "Privacidad de Datos & Cumplimiento HIPAA",
            description: "Implementación de almacenamiento y gestión seguros de información sensible de pacientes de acuerdo con las regulaciones de salud.",
            solution: "Implementé almacenamiento de datos cifrados, controles de acceso estrictos y registro de auditoría para mantener el cumplimiento con los estándares de privacidad de atención médica y proteger la información sensible de los pacientes."
          },
          realTime: {
            title: "Notificaciones en Tiempo Real",
            description: "Construcción de un sistema de notificación confiable para alertas de medicamentos y eventos críticos de atención.",
            solution: "Integré Socket.IO para permitir notificaciones en tiempo real, implementé un sistema de alerta basado en prioridades y aseguré la confirmación de entrega de mensajes para comunicaciones críticas."
          }
        },
        technologies: [
          "React", "Material UI", "Node.js", "Express", "MongoDB", "Socket.IO", "Autenticación JWT"
        ],
        techDetails: {
          frontend: "React con Material UI para interfaces accesibles",
          backend: "Node.js con Express para desarrollo robusto de API",
          database: "MongoDB para almacenamiento flexible de datos",
          security: "Autenticación JWT y control de acceso basado en roles"
        },
        projectType: {
          title: "Tipo de Proyecto",
          academic: "Proyecto Académico",
          fullstack: "Aplicación Full-Stack",
          domain: "Dominio de Salud"
        },
        screenshots: {
          dashboard: {
            alt: "Tablero Administrativo",
            caption: "Tablero administrativo mostrando métricas clave y resumen de pacientes"
          },
          patient: {
            alt: "Perfil de Paciente",
            caption: "Perfil detallado de paciente con historial médico y plan de cuidado"
          },
          scheduling: {
            alt: "Programación de Personal",
            caption: "Interfaz de calendario para programación de personal y gestión de turnos"
          }
        },
        lessonsIntro: "Este proyecto proporcionó valiosas perspectivas y oportunidades de aprendizaje:",
        lessons: [
          "Creación de aplicaciones de salud compatibles con HIPAA con medidas de seguridad adecuadas",
          "Diseño de interfaces intuitivas para múltiples tipos de usuarios (administradores, personal, familiares)",
          "Implementación de sistemas de comunicación en tiempo real para notificaciones críticas",
          "Gestión de requisitos complejos de programación y resolución de conflictos",
          "Construcción de interfaces accesibles para usuarios con diversos niveles de competencia técnica",
          "Integración de funciones completas de informes y análisis"
        ],
        relevanceIntro: "Este proyecto demuestra habilidades que son directamente aplicables a roles de desarrollo full-stack en salud y más allá:",
        relevancePoints: [
          "Creación de aplicaciones seguras y compatibles para industrias altamente reguladas",
          "Construcción de sistemas complejos de gestión de datos con múltiples tipos de usuarios y niveles de permisos",
          "Implementación de funciones en tiempo real para aplicaciones críticas",
          "Diseño de interfaces accesibles e intuitivas para poblaciones diversas de usuarios",
          "Trabajo con conocimiento del dominio de la salud y requisitos especializados"
        ]
      },
      
      // Frontend Authentication System
      frontendAuth: {
        title: "Sistema de Autenticación Frontend",
        description: "Una aplicación web moderna que implementa autenticación segura e integración de API, con gestión completa de errores y cobertura exhaustiva de pruebas.",
        features: [
          "Autenticación segura de usuarios con JWT",
          "Integración OAuth con Google",
          "Gestión completa de errores",
          "Control de acceso basado en roles",
          "Validación de formularios con retroalimentación significativa",
          "Cobertura exhaustiva de pruebas"
        ],
        challenges: {
          auth: {
            title: "Flujo de Autenticación Seguro",
            description: "Implementación de un flujo de autenticación seguro con gestión adecuada de tokens, manejo de vencimiento y mecanismos de actualización.",
            solution: "Diseñé un servicio de autenticación robusto utilizando cookies HTTP-only para el almacenamiento de tokens, implementé mecanismos de actualización de tokens y construí una funcionalidad de cierre de sesión adecuada que limpiaba todo el estado de autenticación."
          },
          error: {
            title: "Gestión Completa de Errores",
            description: "Creación de un sistema de gestión de errores intuitivo que proporciona retroalimentación significativa sin exponer información sensible.",
            solution: "Implementé un sistema centralizado de manejo de errores que categorizaba los errores por tipo y mostraba mensajes apropiados y amigables para el usuario sin exponer detalles técnicos sensibles."
          },
          mfa: {
            title: "Autenticación de Múltiples Factores",
            description: "Agregar MFA mientras se mantiene una experiencia de usuario fluida fue desafiante.",
            solution: "Implementé un proceso de verificación paso a paso con instrucciones claras y opciones alternativas para los usuarios. El sistema soporta métodos de verificación basados tanto en aplicaciones como en SMS."
          }
        },
        codeSnippets: {
          auth: {
            title: "Servicio de Autenticación",
            description: "Servicio central que gestiona el inicio de sesión, registro y gestión de tokens."
          },
          validation: {
            title: "Hook de Validación de Formularios",
            description: "Hook personalizado de React para validación de formularios con soporte para reglas de validación complejas."
          }
        },
        screenshots: {
          login: {
            alt: "Página de Inicio de Sesión",
            caption: "Interfaz de autenticación segura con validación de formularios"
          },
          dashboard: {
            alt: "Dashboard",
            caption: "Dashboard protegido con contenido específico del usuario"
          },
          oauth: {
            alt: "Integración OAuth de Google",
            caption: "Integración de inicio de sesión social para autenticación sin problemas"
          },
          success: {
            alt: "Mensajes de Éxito",
            caption: "Retroalimentación amigable para operaciones exitosas"
          },
          mfa: {
            alt: "Autenticación de Múltiples Factores",
            caption: "Seguridad mejorada con autenticación de múltiples factores"
          },
          stats: {
            alt: "Estadísticas en Tiempo Real",
            caption: "Visualización de datos en vivo para métricas dinámicas de usuarios"
          }
        },
        testingStats: {
          unit: {
            title: "Pruebas Unitarias",
            count: "24 pruebas"
          },
          integration: {
            title: "Pruebas de Integración",
            count: "12 pruebas"
          },
          coverage: {
            title: "Cobertura de Código",
            percentage: "92%"
          }
        }
      },
      
      // Backend News API
      backendNews: {
        title: "API Backend de Noticias",
        description: "Una API RESTful robusta construida con Node.js, Express y MongoDB que proporciona una solución integral para gestionar artículos de noticias. Esta API soporta operaciones CRUD completas, autenticación de usuarios, control de acceso basado en roles y capacidades avanzadas de consulta.",
        context: "Desarrollado como parte de mi curso en la Universidad Penn State, este proyecto demuestra mi competencia en la construcción de sistemas backend seguros, escalables y bien estructurados que siguen las mejores prácticas de la industria.",
        features: [
          "API RESTful con operaciones CRUD completas",
          "Autenticación y autorización basadas en JWT",
          "Control de acceso basado en roles",
          "Validación y sanitización de datos",
          "Manejo integral de errores",
          "Paginación, filtrado y ordenamiento",
          "Caché para mejor rendimiento",
          "Documentación detallada de API"
        ],
        technologies: [
          "Node.js", "Express", "MongoDB", "Mongoose", 
          "Autenticación JWT", "API RESTful", "Pruebas de API", "Postman"
        ],
        challenges: {
          secure: {
            title: "Desafío: Autenticación Segura",
            description: "Implementación de un sistema de autenticación seguro con manejo adecuado de tokens y acceso basado en roles.",
            solution: "Construí un sistema de autenticación robusto basado en JWT con middleware que verifica tokens, extrae información del usuario y realiza verificaciones de rol. La solución incluye vencimiento de tokens, mecanismos de actualización y protección contra vulnerabilidades comunes."
          },
          query: {
            title: "Desafío: Consultas Avanzadas",
            description: "Proporcionar endpoints de API flexibles que soporten paginación, filtrado y ordenamiento.",
            solution: "Implementé un generador de consultas dinámico que procesa parámetros de solicitud para construir consultas de MongoDB. Esto permite a los clientes filtrar por múltiples criterios, ordenar por cualquier campo y paginar resultados de manera eficiente."
          }
        },
        techDetails: {
          node: "Node.js para entorno de servidor",
          express: "Express.js para framework de API",
          mongo: "MongoDB para base de datos",
          mongoose: "Mongoose para ODM",
          jwt: "JWT para autenticación",
          validator: "Express Validator para validación de datos"
        },
        apiMetrics: {
          title: "Métricas de API",
          endpoints: "Endpoints",
          models: "Modelos de Base de Datos"
        },
        codeSnippets: {
          article: {
            title: "Controlador de Artículos"
          },
          auth: {
            title: "Middleware de Autenticación"
          }
        },
        screenshotsTitle: "Capturas de Pantalla de Pruebas de API",
        screenshots: {
          apiSave: {
            alt: "Endpoint de Guardado de API",
            caption: "Solicitud POST exitosa guardando múltiples artículos de noticias"
          },
          articleCreate: {
            alt: "Creación de Artículo",
            caption: "Creando un nuevo artículo con carga útil JSON"
          },
          getAllArticles: {
            alt: "Obtener Todos los Artículos",
            caption: "Recuperando todos los artículos con soporte de paginación"
          },
          articleUpdate: {
            alt: "Actualización de Artículo",
            caption: "Actualizando contenido de artículo vía solicitud PATCH"
          },
          articleDelete: {
            alt: "Eliminación de Artículo",
            caption: "Eliminando un artículo de la base de datos"
          },
          afterDelete: {
            alt: "Después de Eliminación",
            caption: "Verificación de que el artículo ha sido eliminado de la base de datos"
          }
        },
        lessonsIntro: "Este proyecto proporcionó valiosas perspectivas sobre la construcción de sistemas backend robustos:",
        lessons: [
          "Diseño e implementación de sistemas de autenticación seguros",
          "Creación de arquitecturas de API escalables y mantenibles",
          "Construcción de validación de datos y manejo de errores efectivos",
          "Trabajo con MongoDB y Mongoose para operaciones eficientes de datos",
          "Implementación de control de acceso basado en roles para seguridad de API"
        ],
        relevanceIntro: "Este proyecto muestra habilidades de backend que son valiosas para varios puestos de desarrollo:",
        relevancePoints: [
          "Diseño e implementación de APIs RESTful - una habilidad fundamental para roles de backend",
          "Creación de sistemas seguros de autenticación y autorización - críticos para la protección de datos",
          "Trabajo con bases de datos y diseño de esquemas eficientes - esencial para aplicaciones basadas en datos",
          "Implementación de manejo adecuado de errores y validación - necesarios para aplicaciones robustas en producción",
          "Prueba y documentación de APIs - demuestra prácticas profesionales de desarrollo",
          "Aprovechamiento de mi experiencia en seguridad de información para construir sistemas backend seguros"
        ]
      },
      
      // Portfolio Website
      portfolio: {
        title: "Sitio Web de Portfolio Personal",
        description: "Este sitio web de portfolio muestra mis habilidades de desarrollo de software y proyectos. Construido con tecnologías web modernas incluyendo Next.js, React y Tailwind CSS, el sitio cuenta con diseño responsivo, animaciones interactivas, soporte para modo oscuro y capacidades multilingües para crear una experiencia de usuario atractiva.",
        svgTitle: "Sitio Web de Portfolio",
        features: [
          "Diseño responsivo para visualización óptima en todos los dispositivos",
          "Animaciones interactivas usando Framer Motion",
          "Modo oscuro con persistencia de tema",
          "Soporte multilingüe (Inglés, Francés, Español, Criollo Haitiano)",
          "Rendimiento optimizado con Next.js",
          "Páginas de proyectos dinámicas con información detallada",
          "Formulario de contacto con funcionalidad de correo electrónico"
        ],
        technologies: [
          "Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript", "i18n"
        ],
        challenges: {
          i18n: {
            title: "Desafío: Internacionalización",
            description: "Implementación de soporte multilingüe mientras se mantiene una experiencia de usuario fluida y se gestionan eficazmente los archivos de traducción.",
            solution: "Implementé un sistema de idioma basado en React Context con persistencia localStorage, creando una estructura de traducción flexible que funciona sin problemas en todos los componentes."
          },
          animations: {
            title: "Desafío: Animaciones Optimizadas para Rendimiento",
            description: "Creación de animaciones fluidas sin causar problemas de rendimiento o desajustes de hidratación con renderizado del lado del servidor.",
            solution: "Creé componentes SafeClientOnly personalizados para manejar animaciones del lado del cliente sin desajustes de hidratación, y optimicé el rendimiento de animaciones utilizando las mejores prácticas de Framer Motion."
          },
          darkMode: {
            title: "Desafío: Implementación de Modo Oscuro",
            description: "Implementación de un modo oscuro que respete las preferencias del usuario y persista a través de las visitas.",
            solution: "Utilicé next-themes para implementar un sistema de tema robusto con persistencia adecuada de preferencias, detección de preferencias del sistema y transiciones suaves entre temas."
          }
        },
        techDetails: {
          framework: "Next.js para framework",
          styling: "Tailwind CSS para estilización",
          animations: "Framer Motion para animaciones",
          deployment: "Vercel para despliegue",
          state: "React Context para gestión de estado",
          theme: "next-themes para modo claro/oscuro",
          email: "Resend para funcionalidad de correo electrónico"
        },
        languages: {
          title: "Idiomas",
          english: "Inglés",
          french: "Francés",
          spanish: "Español",
          creole: "Criollo Haitiano"
        },
        screenshots: {
          homepage: {
            alt: "Página de Inicio del Portfolio",
            caption: "Página de inicio moderna y responsiva con animaciones interactivas"
          },
          projects: {
            alt: "Página de Proyectos",
            caption: "Página de listado de proyectos con filtrado y funcionalidad de búsqueda"
          },
          darkMode: {
            alt: "Modo Oscuro",
            caption: "Implementación fluida de modo oscuro con persistencia de tema"
          }
        },
        lessonsIntro: "Este proyecto proporcionó valiosas perspectivas y oportunidades de aprendizaje:",
        lessons: [
          "Construcción con Next.js para rendimiento y SEO optimizados",
          "Implementación de internacionalización para soporte multilingüe",
          "Creación de animaciones fluidas y optimizadas para rendimiento",
          "Diseño de layouts responsivos para todos los tamaños de dispositivos",
          "Gestión de preferencias de tema con persistencia adecuada",
          "Estructuración de un proyecto para mantenibilidad y expansión futura"
        ],
        relevanceIntro: "Este proyecto demuestra habilidades que son directamente aplicables a roles de desarrollo frontend y full-stack:",
        relevancePoints: [
          "Construcción de aplicaciones web modernas con Next.js y React",
          "Creación de interfaces de usuario responsivas y accesibles con Tailwind CSS",
          "Implementación de animaciones y transiciones optimizadas para rendimiento",
          "Soporte de múltiples idiomas con internacionalización adecuada",
          "Mantenimiento de diseño consistente con temas claros y oscuros",
          "Optimización para rendimiento, accesibilidad y SEO"
        ]
      }
    }
  },
  cta: {
    title: "¿Listo para Trabajar Juntos?",
    description: "Actualmente estoy buscando oportunidades de pasantía para el verano 2025 como Desarrollador Junior, Desarrollador Frontend, o puestos similares que se alineen con mi experiencia en stack MERN/MEAN. Como estudiante de primer semestre en ingeniería de software, estoy ansioso por aplicar mis habilidades en contextos reales a través de pasantías, proyectos freelance y oportunidades de colaboración.",
    button: "Conectémonos"
  },
  footer: {
    description: "Desarrollador de software especializado en desarrollo frontend y full-stack con React, Next.js y JavaScript moderno.",
    rights: "Todos los derechos reservados",
    madeWith: "Hecho con",
    usingTech: "utilizando Next.js, React y Tailwind CSS",
    quickLinks: "Enlaces Rápidos",
    contact: "Contacto",
    getInTouch: "Ponerse en Contacto",
    socialLinks: "Enlaces Sociales"
  },
  about: {
    title: "Sobre Mí",
    intro: {
      subtitle: "Hola, soy Kender Saint-Juste, un Desarrollador Junior de Tampa, Florida. Actualmente estoy cursando mi maestría en ingeniería de software en la Universidad Penn State (prevista para 2027).",
      description1: "Con una sólida formación en desarrollo frontend y backend, me apasiona crear aplicaciones web escalables utilizando JavaScript, React, Node.js y MongoDB. Mi experiencia en seguridad informática y mi reciente experiencia en TeamViewer me han proporcionado valiosas habilidades en resolución de problemas, éxito del cliente y soluciones de software empresarial.",
      description2: "Cuando no estoy programando, puedes encontrarme jugando baloncesto (soy un gran fan de Kobe Bryant), disfrutando del fútbol, manteniéndome activo o planificando mi próxima aventura de viaje. Equilibro mi ética de trabajo diligente con pensamiento creativo e innovación."
    },
    resumeButtons: {
      primary: "Descargar CV (Dev)",
      dropdown: "Otras Opciones de CV",
      general: "CV General",
      frontend: "CV Frontend"
    },
    internship: {
      title: "Buscando Oportunidades de Pasantía",
      description: "Estoy buscando activamente oportunidades de pasantía en ingeniería de software donde pueda aplicar mi conocimiento académico y contribuir a proyectos impactantes. Como estudiante de maestría en ingeniería de software en Penn State, estoy ansioso por obtener experiencia profesional en un entorno de equipo colaborativo.",
      availability: {
        title: "Disponibilidad",
        fullTime: "Verano 2025 (Tiempo completo)",
        partTime: "Otoño/Primavera 2024-2025 (Tiempo parcial)",
        location: "Remoto o área de Tampa, FL"
      },
      interests: {
        title: "Áreas de Interés",
        frontend: "Desarrollo Frontend (React, Next.js)",
        fullstack: "Desarrollo Full-Stack",
        webApp: "Desarrollo de Aplicaciones Web"
      },
      cta: "Contáctame para Oportunidades"
    },
    traits: {
      title: "Mis Rasgos Personales",
      diligent: "Diligente",
      creative: "Creativo"
    },
    skills: {
      title: "Habilidades Técnicas",
      additional: "Habilidades Adicionales"
    },
    journey: {
      title: "Mi Trayectoria",
      progress: "Progreso",
      inProgress: "En Progreso (Previsto para 2027)",
      completed: "Completado en Diciembre 2023"
    },
    passions: {
      title: "Pasiones e Intereses",
      sports: {
        title: "Deportes y Actividades",
        description: "Apasionado del baloncesto (gran fan de Kobe Bryant), jugador de fútbol y entusiasta del fitness. Mantenerme activo es una parte esencial de mi rutina que me ayuda a mantener mi enfoque y creatividad."
      },
      tech: {
        title: "Tecnología y Programación",
        description: "Fascinado por el poder del código para transformar ideas en realidad. Me encanta explorar nuevos frameworks, construir proyectos y mantenerme al día con tecnologías emergentes como la inteligencia artificial."
      },
      travel: {
        title: "Viajes y Exploración",
        description: "Me encanta descubrir nuevas culturas, cocinas y perspectivas a través de los viajes. Cada viaje aporta nueva inspiración y amplía mi comprensión de las necesidades de los usuarios en diferentes contextos."
      }
    },
    goals: {
      title: "Metas Profesionales",
      shortTerm: "Mi objetivo inmediato es hacer una transición completa a un rol de Desarrollador Junior, utilizando mi experiencia y educación para crear aplicaciones impactantes que aborden desafíos del mundo real.",
      midTerm: "Aspiro a profundizar mi experiencia en desarrollo full-stack, diseño de sistemas y automatización CI/CD a través de mi programa de maestría y proyectos prácticos.",
      longTerm: "A largo plazo, aspiro a lanzar mi propia empresa tecnológica, combinando mis habilidades en ingeniería de software, experiencia en seguridad informática y espíritu emprendedor para desarrollar soluciones innovadoras que marquen la diferencia."
    },
    timeline: {
      graduateStudent: {
        title: "Estudiante de Maestría",
        organization: "Universidad Penn State",
        description: "Cursando una maestría en ingeniería de software, con enfoque en arquitectura de software, ingeniería de IA y gestión de calidad de proyectos para profundizar la experiencia en desarrollo full-stack."
      },
      supportSpecialist: {
        title: "Especialista de Soporte al Cliente",
        organization: "TeamViewer",
        description: "Proporcionando resolución de problemas técnicos para soluciones de software empresarial con una tasa de resolución de primer contacto del 95%, mientras optimizaba los flujos de trabajo de soporte y reducía los tiempos de resolución de problemas en un 20%."
      },
      salesRep: {
        title: "Representante de Ventas",
        organization: "TeamViewer",
        description: "Realizando demostraciones técnicas de soluciones de software SaaS y empresarial, generando más de $1.5 millones en ingresos y fortaleciendo las relaciones con los clientes para aumentar las conversiones de ventas adicionales."
      },
      salesDev: {
        title: "Representante de Desarrollo de Ventas",
        organization: "TeamViewer",
        description: "Superando los objetivos de ventas trimestrales a través de la calificación de prospectos y consultas, mejorando la eficiencia del proceso de ventas en un 20% mediante la generación estratégica de leads."
      },
      bachelors: {
        title: "Licenciatura",
        organization: "Universidad del Sur de Florida",
        description: "Obteniendo una Licenciatura en Ciencias de la Información con concentración en Seguridad de la Información y una especialización secundaria en Emprendimiento, graduado en diciembre de 2023."
      }
    }
  },
  contact: {
    title: "Contáctame",
    subtitle: "Actualmente estoy disponible para proyectos freelance, puestos a tiempo completo y oportunidades de colaboración. ¡No dudes en contactarme!",
    info: {
      title: "Información de Contacto",
      location: {
        label: "Ubicación",
        value: "Tampa, Florida"
      },
      responseTime: {
        label: "Tiempo de Respuesta",
        value: "Normalmente respondo a todas las consultas en un plazo de 24 a 48 horas. Para asuntos urgentes, por favor menciona \"URGENTE\" en el asunto."
      },
      preferredMethods: {
        title: "Métodos de Contacto Preferidos",
        methods: [
          "Para consultas profesionales: LinkedIn o Email",
          "Para discusiones relacionadas con código: GitHub",
          "Para preguntas rápidas: Email"
        ]
      },
      availability: {
        title: "Disponibilidad para Reuniones",
        subtitle: "Actualmente disponible para reuniones virtuales durante estas horas:",
        weekdays: {
          label: "Días Laborables",
          hours: "6:00 PM - 9:00 PM EST"
        },
        weekends: {
          label: "Fines de Semana", 
          hours: "10:00 AM - 5:00 PM EST"
        },
        note: "*Otros horarios pueden estar disponibles bajo petición"
      },
      connect: {
        title: "Conéctate Conmigo",
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email"
      }
    },
    form: {
      title: "Envíame un Mensaje",
      fields: {
        name: {
          label: "Nombre",
          placeholder: "Tu nombre",
          error: "El nombre es obligatorio"
        },
        email: {
          label: "Email",
          placeholder: "Tu email",
          error: "El email es obligatorio",
          invalidError: "El email no es válido"
        },
        subject: {
          label: "Asunto",
          placeholder: "Asunto de tu mensaje",
          error: "El asunto es obligatorio"
        },
        message: {
          label: "Mensaje",
          placeholder: "Tu mensaje",
          error: "El mensaje es obligatorio"
        }
      },
      submit: "Enviar Mensaje",
      success: "¡Tu mensaje ha sido enviado! Te responderé pronto.",
      error: "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.",
      sending: "Enviando tu mensaje..."
    }
  }
};