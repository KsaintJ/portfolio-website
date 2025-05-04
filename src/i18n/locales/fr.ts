// src/i18n/locales/fr.ts
export default {
  common: {
    language: "Langue",
    themeToggle: "Changer de Mode"
  },
  navigation: {
    home: "Accueil",
    about: "À Propos",
    projects: "Projets",
    contact: "Contact"
  },
  hero: {
    title: "Bonjour, je suis Kender Saint-Juste",
    subtitle: "Développeur Full Stack MERN/MEAN",
    description: "Je crée des applications web réactives et centrées sur l'utilisateur avec React, Next.js et JavaScript moderne. Je poursuis actuellement ma maîtrise en génie logiciel à Penn State.",
    cta: {
      work: "Voir Mon Travail",
      contact: "Me Contacter"
    }
  },
  skills: {
    title: "Mes Compétences",
    description: "J'ai développé une expertise dans diverses technologies à travers le full stack, avec un accent sur les frameworks et bibliothèques JavaScript.",
    categories: {
      all: "Toutes les Compétences",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Outils & Méthodes"
    },
    otherTech: "Autres Technologies que j'Utilise"
  },

projects: {
  // Main projects page
  title: "Mes Projets",
  subtitle: "Voici une collection de mes travaux récents, mettant en valeur mes compétences en développement frontend et full-stack.",
  searchPlaceholder: "Rechercher des projets...",
  noResults: "Aucun projet ne correspond à vos critères. Essayez d'ajuster vos filtres.",
  loadMore: "Charger Plus de Projets",
  viewDetails: "Voir les Détails",
  backToProjects: "Retour aux Projets",
  
  // Project filters
  filters: {
    all: "Tous les Projets",
    frontend: "Frontend",
    backend: "Backend",
    fullStack: "Full Stack"
  },
  
  // More on GitHub section
  moreOnGitHub: {
    title: "Plus sur GitHub",
    description: "Au-delà des projets présentés ci-dessus, vous pouvez explorer davantage de mes travaux et contributions de code sur GitHub. J'apprends et construis constamment de nouvelles choses !",
    viewProfile: "Voir le Profil GitHub"
  },
  
  // Common sections for project detail pages
  details: {
    overview: "Aperçu du Projet",
    keyFeatures: "Fonctionnalités Clés",
    challenges: "Défis Techniques & Solutions",
    technologies: "Technologies Utilisées",
    codeHighlights: "Points Forts du Code",
    screenshots: "Captures d'Écran",
    lessonsLearned: "Leçons Apprises",
    professionalRelevance: "Pertinence Professionnelle",
    viewOnGitHub: "Voir sur GitHub",
    viewLive: "Voir la Démo en Direct",
    viewVideo: "Regarder la Vidéo de Démo",
    testingStats: "Statistiques de Test",
    unit: "Tests Unitaires",
    integration: "Tests d'Intégration",
    coverage: "Couverture de Code",
    tests: "tests"
  },
  
  // Individual project translations
  items: {
    // Elderly Care Management System
    elderlyCare: {
      title: "Système de Gestion des Soins aux Personnes Âgées",
      description: "Une application web complète pour gérer les établissements de soins aux personnes âgées, suivre les informations des patients et coordonner les horaires du personnel.",
      features: [
        "Gestion et suivi des informations des patients",
        "Planification et coordination du personnel",
        "Suivi des médicaments et alertes",
        "Portail de communication familiale",
        "Tableau de bord de rapports et d'analyses"
      ],
      challenges: {
        dataPrivacy: {
          title: "Confidentialité des Données & Conformité HIPAA",
          description: "Mise en œuvre d'un stockage et d'une gestion sécurisés des informations sensibles des patients conformément aux réglementations de santé."
        },
        realTime: {
          title: "Notifications en Temps Réel",
          description: "Construction d'un système de notification fiable pour les alertes concernant les médicaments et les événements de soins critiques."
        }
      },
      technologies: {
        frontend: "React avec Material UI pour des interfaces accessibles",
        backend: "Node.js avec Express pour le développement robuste d'API",
        database: "MongoDB pour un stockage de données flexible",
        security: "Authentification JWT et contrôle d'accès basé sur les rôles"
      }
    },
    
    // Frontend Authentication System
    frontendAuth: {
      title: "Système d'Authentification Frontend",
      description: "Une application web moderne implémentant une authentification sécurisée et une intégration API, avec une gestion complète des erreurs et une couverture de test approfondie.",
      features: [
        "Authentification utilisateur sécurisée avec JWT",
        "Intégration OAuth avec Google",
        "Gestion complète des erreurs",
        "Contrôle d'accès basé sur les rôles",
        "Validation de formulaire avec retour d'information significatif",
        "Couverture de test approfondie"
      ],
      challenges: {
        auth: {
          title: "Flux d'Authentification Sécurisé",
          description: "Mise en œuvre d'un flux d'authentification sécurisé avec une gestion appropriée des jetons, traitement de l'expiration et mécanismes de rafraîchissement."
        },
        error: {
          title: "Gestion Complète des Erreurs",
          description: "Création d'un système de gestion des erreurs intuitif qui fournit un retour d'information significatif sans exposer d'informations sensibles."
        },
        testing: {
          title: "Couverture de Test",
          description: "Maintien d'une couverture de test élevée pour tous les scénarios d'authentification et cas limites."
        }
      },
      codeSnippets: {
        auth: {
          title: "Service d'Authentification",
          description: "Service central gérant la connexion, l'inscription et la gestion des jetons."
        },
        validation: {
          title: "Hook de Validation de Formulaire",
          description: "Hook React personnalisé pour la validation des formulaires avec support pour des règles de validation complexes."
        }
      },
      screenshots: {
        auth: {
          alt: "Interface d'Authentification",
          caption: "Interface d'authentification conviviale avec validation de formulaire"
        },
        error: {
          alt: "Gestion des Erreurs",
          caption: "Gestion complète des erreurs avec retour d'information utilisateur"
        },
        dashboard: {
          alt: "Vue du Tableau de Bord",
          caption: "Tableau de bord protégé avec contenu spécifique à l'utilisateur"
        }
      },
      testingStats: {
        unit: {
          title: "Tests Unitaires",
          count: "24 tests"
        },
        integration: {
          title: "Tests d'Intégration",
          count: "12 tests"
        },
        coverage: {
          title: "Couverture de Code",
          percentage: "92%"
        }
      }
    },
// Backend News API (to complete this section)
backendNews: {
  title: "Service Backend d'API d'Actualités",
  description: "Une API RESTful robuste construite avec Node.js, Express et MongoDB qui fournit une solution complète pour la gestion des articles d'actualités. Cette API prend en charge les opérations CRUD complètes, l'authentification des utilisateurs, le contrôle d'accès basé sur les rôles et des capacités de requête avancées.",
  context: "Développé dans le cadre de mon programme à l'Université Penn State, ce projet démontre ma compétence dans la construction de systèmes backend sécurisés, évolutifs et bien structurés qui suivent les meilleures pratiques de l'industrie.",
  features: [
    "API RESTful avec opérations CRUD complètes",
    "Authentification et autorisation basées sur JWT",
    "Contrôle d'accès basé sur les rôles",
    "Validation et assainissement des données",
    "Gestion complète des erreurs",
    "Pagination, filtrage et tri",
    "Mise en cache pour de meilleures performances",
    "Documentation API détaillée"
  ],
  technologies: [
    "Node.js", "Express", "MongoDB", "Mongoose", 
    "Authentification JWT", "API RESTful", "Test d'API", "Postman"
  ],
  challenges: {
    secure: {
      title: "Défi: Authentification Sécurisée",
      description: "Implémentation d'un système d'authentification sécurisé avec une gestion appropriée des jetons et un accès basé sur les rôles.",
      solution: "J'ai construit un système d'authentification robuste basé sur JWT avec un middleware qui vérifie les jetons, extrait les informations utilisateur et effectue des vérifications de rôle. La solution comprend l'expiration des jetons, des mécanismes de rafraîchissement et une protection contre les vulnérabilités courantes."
    },
    query: {
      title: "Défi: Requêtes Avancées",
      description: "Fournir des points d'accès API flexibles qui prennent en charge la pagination, le filtrage et le tri.",
      solution: "J'ai implémenté un générateur de requêtes dynamique qui traite les paramètres de la requête pour construire des requêtes MongoDB. Cela permet aux clients de filtrer selon plusieurs critères, de trier par n'importe quel champ et de paginer les résultats efficacement."
    }
  },
  techDetails: {
    node: "Node.js pour l'environnement serveur",
    express: "Express.js pour le framework API",
    mongo: "MongoDB pour la base de données",
    mongoose: "Mongoose pour l'ODM",
    jwt: "JWT pour l'authentification",
    validator: "Express Validator pour la validation des données"
  },
  apiMetrics: {
    title: "Métriques API",
    endpoints: "Points d'Accès",
    models: "Modèles de Base de Données"
  },
  codeSnippets: {
    article: {
      title: "Contrôleur d'Articles"
    },
    auth: {
      title: "Middleware d'Authentification"
    }
  },
  screenshotsTitle: "Captures d'Écran de Test API",
  screenshots: {
    apiSave: {
      alt: "Point d'Accès de Sauvegarde API",
      caption: "Requête POST réussie sauvegardant plusieurs articles d'actualités"
    },
    articleCreate: {
      alt: "Création d'Article",
      caption: "Création d'un nouvel article avec payload JSON"
    },
    getAllArticles: {
      alt: "Obtenir Tous les Articles",
      caption: "Récupération de tous les articles avec support de pagination"
    },
    articleUpdate: {
      alt: "Mise à Jour d'Article",
      caption: "Mise à jour du contenu d'un article via requête PATCH"
    },
    articleDelete: {
      alt: "Suppression d'Article",
      caption: "Suppression d'un article de la base de données"
    },
    afterDelete: {
      alt: "Après Suppression",
      caption: "Vérification que l'article a été supprimé de la base de données"
    }
  },
  lessonsIntro: "Ce projet a fourni des perspectives précieuses sur la construction de systèmes backend robustes:",
  lessons: [
    "Conception et implémentation de systèmes d'authentification sécurisés",
    "Création d'architectures API évolutives et maintenables",
    "Construction d'une validation des données et d'une gestion des erreurs efficaces",
    "Travail avec MongoDB et Mongoose pour des opérations de données efficaces",
    "Implémentation d'un contrôle d'accès basé sur les rôles pour la sécurité API"
  ],
  relevanceIntro: "Ce projet met en valeur des compétences backend qui sont précieuses pour divers postes de développement:",
  relevancePoints: [
    "Conception et implémentation d'API RESTful - une compétence fondamentale pour les rôles backend",
    "Création de systèmes d'authentification et d'autorisation sécurisés - essentiels pour la protection des données",
    "Travail avec des bases de données et conception de schémas efficaces - indispensables pour les applications axées sur les données",
    "Implémentation d'une gestion appropriée des erreurs et d'une validation - nécessaires pour des applications robustes en production",
    "Tests et documentation d'API - démontrant des pratiques de développement professionnelles",
    "Exploitation de mon expérience en sécurité informatique pour construire des systèmes backend sécurisés"
  ]
},

// Portfolio Website (to complete this section)
portfolio: {
  title: "Site Web Portfolio Personnel",
  description: "Ce site web portfolio présente mes compétences en développement logiciel et mes projets. Construit avec des technologies web modernes incluant Next.js, React et Tailwind CSS, le site comporte une conception responsive, des animations interactives, un support de mode sombre et des capacités multilingues pour créer une expérience utilisateur engageante.",
  svgTitle: "Site Web Portfolio",
  features: [
    "Conception responsive pour une visualisation optimale sur tous les appareils",
    "Animations interactives utilisant Framer Motion",
    "Mode sombre avec persistance du thème",
    "Support multilingue (Anglais, Français, Espagnol, Créole Haïtien)",
    "Performance optimisée avec Next.js",
    "Pages de projet dynamiques avec informations détaillées",
    "Formulaire de contact avec fonctionnalité email"
  ],
  technologies: [
    "Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript", "i18n"
  ],
  challenges: {
    i18n: {
      title: "Défi: Internationalisation",
      description: "Implémentation du support multilingue tout en maintenant une expérience utilisateur fluide et en gérant efficacement les fichiers de traduction.",
      solution: "J'ai implémenté un système de langue basé sur React Context avec persistance localStorage, créant une structure de traduction flexible qui fonctionne de manière transparente à travers tous les composants."
    },
    animations: {
      title: "Défi: Animations Optimisées pour la Performance",
      description: "Création d'animations fluides sans causer de problèmes de performance ou de désynchronisations d'hydratation avec le rendu côté serveur.",
      solution: "J'ai créé des composants SafeClientOnly personnalisés pour gérer les animations côté client sans désynchronisations d'hydratation, et optimisé les performances d'animation en utilisant les meilleures pratiques de Framer Motion."
    },
    darkMode: {
      title: "Défi: Implémentation du Mode Sombre",
      description: "Implémentation d'un mode sombre qui respecte les préférences de l'utilisateur et persiste à travers les visites.",
      solution: "J'ai utilisé next-themes pour implémenter un système de thème robuste avec persistance appropriée des préférences, détection des préférences système et transitions fluides entre les thèmes."
    }
  },
  techDetails: {
    framework: "Next.js pour le framework",
    styling: "Tailwind CSS pour le style",
    animations: "Framer Motion pour les animations",
    deployment: "Vercel pour le déploiement",
    state: "React Context pour la gestion d'état",
    theme: "next-themes pour le mode clair/sombre",
    email: "Resend pour la fonctionnalité email"
  },
  languages: {
    title: "Langues",
    english: "Anglais",
    french: "Français",
    spanish: "Espagnol",
    creole: "Créole Haïtien"
  },
  screenshots: {
    homepage: {
      alt: "Page d'Accueil du Portfolio",
      caption: "Page d'accueil moderne et responsive avec animations interactives"
    },
    projects: {
      alt: "Page des Projets",
      caption: "Page de liste des projets avec filtrage et fonctionnalité de recherche"
    },
    darkMode: {
      alt: "Mode Sombre",
      caption: "Implémentation fluide du mode sombre avec persistance du thème"
    }
  },
  lessonsIntro: "Ce projet a fourni des perspectives précieuses et des opportunités d'apprentissage:",
  lessons: [
    "Construction avec Next.js pour une performance et un SEO optimisés",
    "Implémentation de l'internationalisation pour le support multilingue",
    "Création d'animations fluides et optimisées pour la performance",
    "Conception de layouts responsives pour toutes les tailles d'appareils",
    "Gestion des préférences de thème avec persistance appropriée",
    "Structuration d'un projet pour la maintenabilité et l'expansion future"
  ],
  relevanceIntro: "Ce projet démontre des compétences qui sont directement applicables aux rôles de développement frontend et full-stack:",
  relevancePoints: [
    "Construction d'applications web modernes avec Next.js et React",
    "Création d'interfaces utilisateur responsives et accessibles avec Tailwind CSS",
    "Implémentation d'animations et de transitions optimisées pour la performance",
    "Support de plusieurs langues avec une internationalisation appropriée",
    "Maintien d'un design cohérent avec des thèmes clairs et sombres",
    "Optimisation pour la performance, l'accessibilité et le SEO"
  ]
}
  }
  },
  cta: {
    title: "Prêt à Travailler Ensemble?",
    description: "Je recherche actuellement des opportunités de stage pour l'été 2025 en tant que Développeur Junior, Développeur Frontend, ou des postes similaires qui correspondent à mon expertise en stack MERN/MEAN. En tant qu'étudiant de premier semestre en génie logiciel, je suis impatient d'appliquer mes compétences dans des contextes réels à travers des stages, des projets freelance et des opportunités de collaboration.",
    button: "Connectons-nous"
  },
  footer: {
    description: "Développeur logiciel spécialisé dans le développement frontend et full-stack avec React, Next.js et JavaScript moderne.",
    rights: "Tous droits réservés",
    madeWith: "Créé avec",
    usingTech: "utilisant Next.js, React, et Tailwind CSS",
    quickLinks: "Liens Rapides",
    contact: "Contact",
    getInTouch: "Me Contacter",
    socialLinks: "Liens Sociaux"
  },
  about: {
    title: "À Propos de Moi",
    intro: {
      subtitle: "Bonjour, je suis Kender Saint-Juste, un Développeur Junior de Tampa, en Floride. Je poursuis actuellement ma maîtrise en génie logiciel à l'Université Penn State (prévu pour 2027).",
      description1: "Avec une solide formation en développement frontend et backend, je suis passionné par la création d'applications web évolutives utilisant JavaScript, React, Node.js et MongoDB. Mon expérience en sécurité informatique et mon expérience récente chez TeamViewer m'ont doté de compétences précieuses en dépannage, en réussite client et en solutions logicielles d'entreprise.",
      description2: "Quand je ne code pas, vous pouvez me trouver en train de jouer au basketball (je suis un grand fan de Kobe Bryant), profiter du football, rester actif ou planifier ma prochaine aventure de voyage. J'équilibre mon éthique de travail diligente avec une pensée créative et l'innovation."
    },
    resumeButtons: {
      primary: "Télécharger CV (Dev)",
      dropdown: "Autres Options de CV",
      general: "CV Général",
      frontend: "CV Frontend"
    },
    internship: {
      title: "À la Recherche d'Opportunités de Stage",
      description: "Je recherche activement des opportunités de stage en génie logiciel où je peux appliquer mes connaissances académiques et contribuer à des projets d'impact. En tant qu'étudiant en maîtrise en génie logiciel à Penn State, je suis désireux d'acquérir une expérience professionnelle dans un environnement d'équipe collaboratif.",
      availability: {
        title: "Disponibilité",
        fullTime: "Été 2025 (Temps plein)",
        partTime: "Automne/Printemps 2024-2025 (Temps partiel)",
        location: "À distance ou région de Tampa, FL"
      },
      interests: {
        title: "Domaines d'Intérêt",
        frontend: "Développement Frontend (React, Next.js)",
        fullstack: "Développement Full-Stack",
        webApp: "Développement d'Applications Web"
      },
      cta: "Me Contacter pour des Opportunités"
    },
    traits: {
      title: "Mes Traits Personnels",
      diligent: "Diligent",
      creative: "Créatif"
    },
    skills: {
      title: "Compétences Techniques",
      additional: "Compétences Supplémentaires"
    },
    journey: {
      title: "Mon Parcours",
      progress: "Progression",
      inProgress: "En Cours (Prévu pour 2027)",
      completed: "Terminé en Décembre 2023"
    },
    passions: {
      title: "Passions & Intérêts",
      sports: {
        title: "Sports & Activités",
        description: "Passionné de basketball (grand fan de Kobe Bryant), joueur de football, et adepte de fitness. Rester actif est une partie essentielle de ma routine qui m'aide à maintenir ma concentration et ma créativité."
      },
      tech: {
        title: "Technologie & Programmation",
        description: "Fasciné par le pouvoir du code pour transformer les idées en réalité. J'aime explorer de nouveaux frameworks, construire des projets et me tenir au courant des technologies émergentes comme l'intelligence artificielle."
      },
      travel: {
        title: "Voyages & Exploration",
        description: "J'aime découvrir de nouvelles cultures, cuisines et perspectives à travers les voyages. Chaque voyage apporte une nouvelle inspiration et élargit ma compréhension des besoins des utilisateurs dans différents contextes."
      }
    },
    goals: {
      title: "Objectifs Professionnels",
      shortTerm: "Mon objectif immédiat est de passer complètement à un rôle de Développeur Junior, en utilisant mon expérience et mon éducation pour créer des applications impactantes qui répondent aux défis du monde réel.",
      midTerm: "Je vise à approfondir mon expertise en développement full-stack, en conception de systèmes et en automatisation CI/CD grâce à mon programme de maîtrise et à des projets pratiques.",
      longTerm: "À long terme, j'aspire à lancer ma propre entreprise technologique, combinant mes compétences en génie logiciel, mon expérience en sécurité informatique et mon esprit entrepreneurial pour développer des solutions innovantes qui font la différence."
    },
    timeline: {
      graduateStudent: {
        title: "Étudiant en Master",
        organization: "Université Penn State",
        description: "Poursuite d'une maîtrise en génie logiciel, en mettant l'accent sur l'architecture logicielle, l'ingénierie de l'IA et la gestion de la qualité des projets pour approfondir l'expertise en développement full-stack."
      },
      supportSpecialist: {
        title: "Spécialiste du Support Client",
        organization: "TeamViewer",
        description: "Fourniture de dépannage technique pour les solutions logicielles d'entreprise avec un taux de résolution au premier contact de 95%, tout en optimisant les flux de travail de support et en réduisant les temps de résolution des problèmes de 20%."
      },
      salesRep: {
        title: "Représentant Commercial",
        organization: "TeamViewer",
        description: "Réalisation de démonstrations techniques de solutions logicielles SaaS et d'entreprise, générant plus de 1,5 million de dollars de revenus et renforçant les relations clients pour augmenter les conversions de ventes additionnelles."
      },
      salesDev: {
        title: "Représentant du Développement Commercial",
        organization: "TeamViewer",
        description: "Dépassement des objectifs de ventes trimestriels grâce à la qualification des prospects et aux consultations, améliorant l'efficacité du pipeline de ventes de 20% via la génération stratégique de leads."
      },
      bachelors: {
        title: "Diplôme de Bachelor",
        organization: "Université de Floride du Sud",
        description: "Obtention d'un Bachelor en Sciences de l'Information avec une concentration en Sécurité de l'Information et une mineure en Entrepreneuriat, diplômé en décembre 2023."
      }
    }
  },
  contact: {
    title: "Me Contacter",
    subtitle: "Je suis actuellement disponible pour des projets freelance, des postes à temps plein et des opportunités de collaboration. N'hésitez pas à me contacter !",
    info: {
      title: "Informations de Contact",
      location: {
        label: "Localisation",
        value: "Tampa, Floride"
      },
      responseTime: {
        label: "Temps de Réponse",
        value: "Je réponds généralement à toutes les demandes dans un délai de 24 à 48 heures. Pour les questions urgentes, veuillez mentionner \"URGENT\" dans l'objet."
      },
      preferredMethods: {
        title: "Méthodes de Contact Préférées",
        methods: [
          "Pour les demandes professionnelles : LinkedIn ou Email",
          "Pour les discussions liées au code : GitHub",
          "Pour les questions rapides : Email"
        ]
      },
      availability: {
        title: "Disponibilité pour Rendez-vous",
        subtitle: "Actuellement disponible pour des réunions virtuelles pendant ces heures :",
        weekdays: {
          label: "Jours de Semaine",
          hours: "18h00 - 21h00 EST"
        },
        weekends: {
          label: "Week-ends", 
          hours: "10h00 - 17h00 EST"
        },
        note: "*D'autres horaires peuvent être disponibles sur demande"
      },
      connect: {
        title: "Me Retrouver",
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email"
      }
    },
    form: {
      title: "Envoyez-moi un Message",
      fields: {
        name: {
          label: "Nom",
          placeholder: "Votre nom",
          error: "Le nom est requis"
        },
        email: {
          label: "Email",
          placeholder: "Votre email",
          error: "L'email est requis",
          invalidError: "L'email est invalide"
        },
        subject: {
          label: "Sujet",
          placeholder: "Sujet de votre message",
          error: "Le sujet est requis"
        },
        message: {
          label: "Message",
          placeholder: "Votre message",
          error: "Le message est requis"
        }
      },
      submit: "Envoyer le Message",
      success: "Votre message a été envoyé ! Je vous répondrai bientôt.",
      error: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.",
      sending: "Envoi de votre message..."
    }
  }
};