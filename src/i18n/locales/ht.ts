// src/i18n/locales/ht.ts
export default {
  common: {
    language: "Lang",
    themeToggle: "Chanje Mòd"
  },
  navigation: {
    home: "Akèy",
    about: "Sou Mwen",
    projects: "Pwojè",
    contact: "Kontak"
  },
  hero: {
    title: "Alo, mwen se Kender Saint-Juste",
    subtitle: "Devlopè Full Stack MERN/MEAN",
    description: "Mwen kreye aplikasyon web ki reyaktif epi ki santre sou itilizatè yo avèk React, Next.js ak JavaScript modèn. Aktyèlman mwen ap fè metriz mwen nan jeni lojisyèl nan Penn State.",
    cta: {
      work: "Gade Travay Mwen",
      contact: "Kontakte Mwen"
    }
  },
  skills: {
    title: "Konpetans Mwen yo",
    description: "Mwen devlope ekspètiz nan divès teknoloji nan tout stack la, ak yon aksan sou frameworks ak bibliyotèk JavaScript.",
    categories: {
      all: "Tout Konpetans",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Zouti & Metòd"
    },
    otherTech: "Lòt Teknoloji Mwen Itilize"
  },
  projects: {
    // Main projects page
    title: "Pwojè Mwen yo",
    subtitle: "Men yon koleksyon travay resan mwen, ki montre konpetans mwen nan devlopman frontend ak full-stack.",
    searchPlaceholder: "Chèche pwojè...",
    noResults: "Okenn pwojè pa koresponn ak kritè ou yo. Eseye ajiste filtè ou yo.",
    loadMore: "Chaje Plis Pwojè",
    viewDetails: "Gade Detay",
    backToProjects: "Retounen nan Pwojè yo",
    
    // Project filters
    filters: {
      all: "Tout Pwojè",
      frontend: "Frontend",
      backend: "Backend",
      fullStack: "Full Stack"
    },
    
    // More on GitHub section
    moreOnGitHub: {
      title: "Plis sou GitHub",
      description: "Andeyò pwojè ki prezante anwo yo, ou ka eksplore plis travay mwen ak kontribisyon kòd sou GitHub. Mwen toujou ap aprann epi konstwi nouvo bagay!",
      viewProfile: "Gade Pwofil GitHub"
    },
    
    // Common sections for project detail pages
    details: {
      overview: "Apèsi Pwojè",
      keyFeatures: "Fonksyonalite Kle",
      challenges: "Defi Teknik & Solisyon",
      technologies: "Teknoloji Itilize",
      codeHighlights: "Pwen Esansyèl Kòd",
      screenshots: "Captures d'Écran",
      lessonsLearned: "Leson Aprann",
      professionalRelevance: "Pèrtinans Pwofesyonèl",
      viewOnGitHub: "Gade sou GitHub",
      viewLive: "Gade Demo an Dirèk",
      viewVideo: "Gade Videyo Demo",
      testingStats: "Estatistik Tès",
      coverage: "Kouvèti Kòd"
    },
    
    // Individual project translations
    items: {
      // Elderly Care Management System
      elderlyCare: {
        title: "Sistèm Jesyon Swen pou Granmoun Aje",
        description: "Yon aplikasyon web konplè pou jere etablisman swen granmoun aje, swiv enfòmasyon pasyan, ak kowòdone orè anplwaye yo.",
        features: [
          "Jesyon ak swivi enfòmasyon pasyan",
          "Planifikasyon ak kowòdinasyon anplwaye",
          "Swivi medikaman ak avètisman",
          "Pòtay kominikasyon familyal",
          "Tablo rapò ak analiz"
        ],
        challenges: {
          dataPrivacy: {
            title: "Konfidansyalite Done & Konfòmite HIPAA",
            description: "Enplemantasyon estokaj sekirize ak jesyon enfòmasyon sansib pasyan selon règlemantasyon sante yo.",
            solution: "Mwen te enplemante estokaj done chifre, kontwòl aksè strik, ak rejis odit pou kenbe konfòmite avèk estanda konfidansyalite swen sante epi pwoteje enfòmasyon sansib pasyan yo."
          },
          realTime: {
            title: "Notifikasyon an Tan Reyèl",
            description: "Konstriksyon yon sistèm notifikasyon fyab pou alèt medikaman ak evènman swen kritik.",
            solution: "Mwen te entegre Socket.IO pou pèmèt notifikasyon an tan reyèl, enplemante yon sistèm alèt baze sou priyorite, epi asire konfimasyon livrezon mesaj pou kominikasyon kritik yo."
          }
        },
        technologies: [
          "React", "Material UI", "Node.js", "Express", "MongoDB", "Socket.IO", "Otantifikasyon JWT"
        ],
        techDetails: {
          frontend: "React ak Material UI pou entèfas aksesib",
          backend: "Node.js ak Express pou devlopman API solid",
          database: "MongoDB pou estokaj done fleksib",
          security: "Otantifikasyon JWT ak kontwòl aksè baze sou wòl"
        },
        projectType: {
          title: "Tip Pwojè",
          academic: "Pwojè Akademik",
          fullstack: "Aplikasyon Full-Stack",
          domain: "Domèn Sante"
        },
        screenshots: {
          dashboard: {
            alt: "Tablo Administrasyon",
            caption: "Tablo administrasyon ki montre metrik kle ak apèsi pasyan"
          },
          patient: {
            alt: "Pwofil Pasyan",
            caption: "Pwofil detaye pasyan ak istwa medikal ak plan swen"
          },
          scheduling: {
            alt: "Orè Anplwaye",
            caption: "Entèfas kalandriye pou orè anplwaye ak jesyon orè travay"
          }
        },
        lessonsIntro: "Pwojè sa a te bay eklèsisman enpòtan ak opòtinite aprantisaj:",
        lessons: [
          "Kreyasyon aplikasyon swen sante konfòm ak HIPAA avèk mezi sekirite apwopriye",
          "Konsepsyon entèfas entwitif pou plizyè tip itilizatè (administratè, anplwaye, manm fanmi)",
          "Enplemantasyon sistèm kominikasyon an tan reyèl pou notifikasyon kritik",
          "Jesyon egzijans konplèks orè ak rezolisyon konfli",
          "Konstriksyon entèfas aksesib pou itilizatè ki gen nivo diferan konpetans teknik",
          "Entegrasyon fonksyon konplè rapò ak analiz"
        ],
        relevanceIntro: "Pwojè sa a montre konpetans ki dirèkteman aplikab pou wòl devlopman full-stack nan sante ak pi lwen:",
        relevancePoints: [
          "Kreyasyon aplikasyon sekirize ak konfòm pou endistri ki trè reglemante",
          "Konstriksyon sistèm konplèks jesyon done ak plizyè tip itilizatè ak nivo pèmisyon",
          "Enplemantasyon fonksyon an tan reyèl pou aplikasyon kritik",
          "Konsepsyon entèfas aksesib ak entwitif pou popilasyon itilizatè divès",
          "Travay ak konesans domèn sante ak egzijans espesyalize"
        ]
      },
      
      // Frontend Authentication System
      frontendAuth: {
        title: "Sistèm Otantifikasyon Frontend",
        description: "Yon aplikasyon web modèn ki enplemante otantifikasyon sekirize ak entegrasyon API, avèk jesyon konplè erè ak kouvèti tès apwofondi.",
        features: [
          "Otantifikasyon itilizatè sekirize ak JWT",
          "Entegrasyon OAuth ak Google",
          "Jesyon konplè erè",
          "Kontwòl aksè baze sou wòl",
          "Validasyon fòmilè ak fidbak siyifikatif",
          "Kouvèti tès apwofondi"
        ],
        challenges: {
          auth: {
            title: "Fliks Otantifikasyon Sekirize",
            description: "Enplemantasyon yon fliks otantifikasyon sekirize ak jesyon token apwopriye, jesyon ekspirasyon, ak mekanis rafrechisman.",
            solution: "Mwen te konsevwa yon sèvis otantifikasyon solid ki itilize cookies HTTP-only pou estokaj token, enplemante mekanis rafrechisman token, epi konstwi fonksyonalite dekoneksyon apwopriye ki netwaye tout eta otantifikasyon."
          },
          error: {
            title: "Jesyon Konplè Erè",
            description: "Kreyasyon yon sistèm jesyon erè entwitif ki bay fidbak siyifikatif san ekspoze enfòmasyon sansib.",
            solution: "Mwen te enplemante yon sistèm jesyon erè santralize ki kategorize erè pa tip epi ki afiche mesaj apwopriye ak amikal pou itilizatè san ekspoze detay teknik sansib."
          },
          mfa: {
            title: "Otantifikasyon Miltifaktè",
            description: "Ajoute MFA pandan w mentni yon eksperyans itilizatè san pwoblèm te yon defi.",
            solution: "Mwen te enplemante yon pwosesis verifikasyon etap pa etap ak enstriksyon klè ak opsyon altènatif pou itilizatè yo. Sistèm nan sipòte metòd verifikasyon baze sou aplikasyon ak SMS."
          }
        },
        codeSnippets: {
          auth: {
            title: "Sèvis Otantifikasyon"
          },
          validation: {
            title: "Hook Validasyon Fòmilè"
          }
        },
        screenshots: {
          login: {
            alt: "Paj Koneksyon",
            caption: "Entèfas otantifikasyon sekirize ak validasyon fòmilè"
          },
          dashboard: {
            alt: "Tablo Kontwòl",
            caption: "Tablo kontwòl pwoteje ak kontni espesifik itilizatè"
          },
          oauth: {
            alt: "Entegrasyon OAuth Google",
            caption: "Entegrasyon koneksyon sosyal pou otantifikasyon san pwoblèm"
          },
          success: {
            alt: "Mesaj Siksè",
            caption: "Fidbak amikal pou operasyon reyisi"
          },
          mfa: {
            alt: "Otantifikasyon Miltifaktè",
            caption: "Sekirite amelyore ak otantifikasyon miltifaktè"
          },
          stats: {
            alt: "Estatistik an Tan Reyèl",
            caption: "Vizyalizasyon done an dirèk pou metrik dinamik itilizatè"
          }
        },
        testingStats: {
          unit: {
            title: "Tès Inite",
            count: "24 tès"
          },
          integration: {
            title: "Tès Entegrasyon",
            count: "12 tès"
          },
          coverage: {
            title: "Kouvèti Kòd",
            percentage: "92%"
          }
        }
      },
      
      // Backend News API
      backendNews: {
        title: "API Backend Nouvèl",
        description: "Yon API RESTful solid ki konstwi ak Node.js, Express, ak MongoDB ki ofri yon solisyon konplè pou jere atik nouvèl. API sa a sipòte operasyon CRUD konplè, otantifikasyon itilizatè, kontwòl aksè baze sou wòl, ak kapasite chèche avanse.",
        context: "Devlope kòm pati nan kou mwen nan Penn State University, pwojè sa a montre konpetans mwen nan konstwi sistèm backend sekirize, adaptab, ak byen striktire ki swiv pi bon pratik endistri a.",
        features: [
          "API RESTful ak operasyon CRUD konplè",
          "Otantifikasyon ak otorizasyon baze sou JWT",
          "Kontwòl aksè baze sou wòl",
          "Validasyon ak sanitizasyon done",
          "Jesyon konplè erè",
          "Paginasyon, filtraj, ak òdònman",
          "Cache pou pèfòmans amelyore",
          "Dokimantasyon detaye API"
        ],
        technologies: [
          "Node.js", "Express", "MongoDB", "Mongoose", 
          "Otantifikasyon JWT", "API RESTful", "Tès API", "Postman"
        ],
        challenges: {
          secure: {
            title: "Defi: Otantifikasyon Sekirize",
            description: "Enplemantasyon yon sistèm otantifikasyon sekirize ak jesyon token apwopriye ak aksè baze sou wòl.",
            solution: "Mwen te konstwi yon sistèm otantifikasyon solid baze sou JWT ak middleware ki verifye token, ekstrè enfòmasyon itilizatè, epi fè verifikasyon wòl. Solisyon an gen ladan ekspirasyon token, mekanis rafrechisman, ak pwoteksyon kont vilnerabilite komen."
          },
          query: {
            title: "Defi: Chèche Avanse",
            description: "Ofri pwen aksè API fleksib ki sipòte paginasyon, filtraj, ak òdònman.",
            solution: "Mwen te enplemante yon konstriktè chèche dinamik ki trete paramèt demann pou konstwi chèche MongoDB. Sa pèmèt kliyan yo filtre pa plizyè kritè, triye pa nenpòt chan, epi fè paginasyon rezilta yo efikasman."
          }
        },
        techDetails: {
          node: "Node.js pou anviwònman sèvè",
          express: "Express.js pou framework API",
          mongo: "MongoDB pou baz done",
          mongoose: "Mongoose pou ODM",
          jwt: "JWT pou otantifikasyon",
          validator: "Express Validator pou validasyon done"
        },
        apiMetrics: {
          title: "Metrik API",
          endpoints: "Pwen aksè",
          models: "Modèl Baz Done"
        },
        codeSnippets: {
          article: {
            title: "Kontrolè Atik"
          },
          auth: {
            title: "Middleware Otantifikasyon"
          }
        },
        screenshotsTitle: "Captures d'Ecran Tès API",
        screenshots: {
          apiSave: {
            alt: "Pwen aksè Sovgad API",
            caption: "Demann POST reyisi ki sovgade plizyè atik nouvèl"
          },
          articleCreate: {
            alt: "Kreyasyon Atik",
            caption: "Kreyasyon nouvo atik ak chajman JSON"
          },
          getAllArticles: {
            alt: "Jwenn Tout Atik yo",
            caption: "Rekiperasyon tout atik yo ak sipò paginasyon"
          },
          articleUpdate: {
            alt: "Mizajou Atik",
            caption: "Mizajou kontni atik atravè demann PATCH"
          },
          articleDelete: {
            alt: "Sipresyon Atik",
            caption: "Retire yon atik nan baz done a"
          },
          afterDelete: {
            alt: "Aprè Sipresyon",
            caption: "Verifikasyon ke atik la te retire nan baz done a"
          }
        },
        lessonsIntro: "Pwojè sa a te bay eklèsisman enpòtan sou konstriksyon sistèm backend solid:",
        lessons: [
          "Konsepsyon ak enplemantasyon sistèm otantifikasyon sekirize",
          "Kreyasyon achitekti API adaptab ak fasil pou kenbe",
          "Konstriksyon validasyon done ak jesyon erè efikas",
          "Travay ak MongoDB ak Mongoose pou operasyon done efikas",
          "Enplemantasyon kontwòl aksè baze sou wòl pou sekirite API"
        ],
        relevanceIntro: "Pwojè sa a montre konpetans backend ki gen valè pou divès pozisyon devlopman:",
        relevancePoints: [
          "Konsepsyon ak enplemantasyon API RESTful - yon konpetans fondamantal pou wòl backend",
          "Kreyasyon sistèm sekirize otantifikasyon ak otorizasyon - kritik pou pwoteksyon done",
          "Travay ak baz done ak konsepsyon skema efikas - esansyèl pou aplikasyon baze sou done",
          "Enplemantasyon jesyon efikas erè ak validasyon - nesesè pou aplikasyon solid an pwodiksyon",
          "Tès ak dokimantasyon API - montre pratik devlopman pwofesyonèl",
          "Itilizasyon eksperyans mwen nan sekirite enfòmasyon pou konstwi sistèm backend sekirize"
        ]
      },
      
      // Portfolio Website
      portfolio: {
        title: "Sit Web Pòtfolyo Pèsonèl",
        description: "Sit web pòtfolyo sa a montre konpetans devlopman lojisyèl mwen ak pwojè yo. Konstwi ak teknoloji web modèn ki gen ladan Next.js, React, ak Tailwind CSS, sit la gen konsepsyon reponsif, animasyon entèraktif, sipò mod nwa, ak kapasite miltilang pou kreye yon eksperyans itilizatè angajan.",
        svgTitle: "Sit Web Pòtfolyo",
        features: [
          "Konsepsyon reponsif pou vizyalizasyon optimal sou tout aparèy",
          "Animasyon entèraktif ki itilize Framer Motion",
          "Mod nwa ak pèsistans tèm",
          "Sipò miltilang (Anglè, Franse, Panyòl, Kreyòl Ayisyen)",
          "Pèfòmans optimize ak Next.js",
          "Paj pwojè dinamik ak enfòmasyon detaye",
          "Fòmilè kontak ak fonksyonalite imèl"
        ],
        technologies: [
          "Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript", "i18n"
        ],
        challenges: {
          i18n: {
            title: "Defi: Entènasyonalizasyon",
            description: "Enplemantasyon sipò miltilang pandan w mentni yon eksperyans itilizatè san pwoblèm epi jere fichye tradiksyon yo efikasman.",
            solution: "Mwen te enplemante yon sistèm lang baze sou React Context ak pèsistans localStorage, kreye yon estrikti tradiksyon fleksib ki fonksyone san pwoblèm nan tout konpozan yo."
          },
          animations: {
            title: "Defi: Animasyon Optimize pou Pèfòmans",
            description: "Kreyasyon animasyon san pwoblèm san koze pwoblèm pèfòmans oswa dezekilib idatasyon ak randèrizasyon kote sèvè.",
            solution: "Mwen te kreye konpozan SafeClientOnly pèsonalize pou jere animasyon kote kliyan san dezekilib idatasyon, epi optimize pèfòmans animasyon lè l itilize pi bon pratik Framer Motion yo."
          },
          darkMode: {
            title: "Defi: Enplemantasyon Mod Nwa",
            description: "Enplemantasyon yon mod nwa ki respekte preferans itilizatè epi pèsiste pandan vizit yo.",
            solution: "Mwen te itilize next-themes pou enplemante yon sistèm tèm solid ak pèsistans preferans apwopriye, deteksyon preferans sistèm, ak tranzisyon san pwoblèm ant tèm yo."
          }
        },
        techDetails: {
          framework: "Next.js pou framework",
          styling: "Tailwind CSS pou stilizasyon",
          animations: "Framer Motion pou animasyon",
          deployment: "Vercel pou deplwaman",
          state: "React Context pou jesyon eta",
          theme: "next-themes pou mod klè/nwa",
          email: "Resend pou fonksyonalite imèl"
        },
        languages: {
          title: "Lang",
          english: "Anglè",
          french: "Franse",
          spanish: "Panyòl",
          creole: "Kreyòl Ayisyen"
        },
        screenshots: {
          homepage: {
            alt: "Paj Akèy Pòtfolyo",
            caption: "Paj akèy modèn ak reponsif ak animasyon entèraktif"
          },
          projects: {
            alt: "Paj Pwojè",
            caption: "Paj lis pwojè ak filtraj ak fonksyonalite rechèch"
          },
          darkMode: {
            alt: "Mod Nwa",
            caption: "Enplemantasyon san pwoblèm mod nwa ak pèsistans tèm"
          }
        },
        lessonsIntro: "Pwojè sa a te bay eklèsisman enpòtan ak opòtinite aprantisaj:",
        lessons: [
          "Konstriksyon ak Next.js pou pèfòmans ak SEO optimize",
          "Enplemantasyon entènasyonalizasyon pou sipò miltilang",
          "Kreyasyon animasyon san pwoblèm ak optimize pou pèfòmans",
          "Konsepsyon layout reponsif pou tout gwosè aparèy",
          "Jesyon preferans tèm ak pèsistans apwopriye",
          "Striktire yon pwojè pou mentabilite ak ekspansyon fiti"
        ],
        relevanceIntro: "Pwojè sa a montre konpetans ki dirèkteman aplikab pou wòl devlopman frontend ak full-stack:",
        relevancePoints: [
          "Konstriksyon aplikasyon web modèn ak Next.js ak React",
          "Kreyasyon entèfas itilizatè reponsif ak aksesib ak Tailwind CSS",
          "Enplemantasyon animasyon ak tranzisyon optimize pou pèfòmans",
          "Sipò plizyè lang ak entènasyonalizasyon apwopriye",
          "Mentyen konsepsyon konsistan ak tèm klè ak nwa",
          "Optimizasyon pou pèfòmans, aksesibilite, ak SEO"
        ]
      }
    }
  },
  cta: {
    title: "Prè pou Travay Ansanm?",
    description: "Mwen aktyèlman ap chèche opòtinite estaj pou ete 2025 kòm Devlopè Junior, Devlopè Frontend, oswa pozisyon similè ki koresponn ak ekspètiz mwen nan stack MERN/MEAN. Kòm yon etidyan premye semès nan jeni lojisyèl, mwen anvi aplike konpetans mwen nan kontèks reyèl atravè estaj, pwojè freelance, ak opòtinite kolaborasyon.",
    button: "Ann Konekte"
  },
  footer: {
    description: "Devlopè lojisyèl espesyalize nan devlopman frontend ak full-stack ak React, Next.js ak JavaScript modèn.",
    rights: "Tout dwa rezève",
    madeWith: "Fèt ak",
    usingTech: "itilize Next.js, React, ak Tailwind CSS",
    quickLinks: "Lyen Rapid",
    contact: "Kontak",
    getInTouch: "Kontakte Mwen",
    socialLinks: "Lyen Sosyal"
  },
  about: {
    title: "Sou Mwen",
    intro: {
      subtitle: "Alo, mwen se Kender Saint-Juste, yon Devlopè Junior ki soti Tampa, Florid. Mwen aktyèlman ap fè metriz mwen nan jeni lojisyèl nan Penn State University (prevwa pou 2027).",
      description1: "Avèk yon fòmasyon solid nan devlopman frontend ak backend, mwen pasyone pou kreye aplikasyon web ki ka grandi ki itilize JavaScript, React, Node.js ak MongoDB. Eksperyans mwen nan sekirite enfòmatik ak eksperyans resan mwen nan TeamViewer te ban mwen konpetans presye nan rezoud pwoblèm, siksè kliyan, ak solisyon lojisyèl antrepriz.",
      description2: "Lè m pa kodaj, ou ka jwenn mwen ap jwe baskètbòl (mwen se yon gwo fan Kobe Bryant), anvi foutbòl, rete aktif oswa planifye pwochen avanti vwayaj mwen. Mwen ekilibre etik travay diligent mwen ak panse kreyatif ak inovasyon."
    },
    resumeButtons: {
      primary: "Telechaje CV (Dev)",
      dropdown: "Lòt Opsyon CV",
      general: "CV Jeneral",
      frontend: "CV Frontend"
    },
    internship: {
      title: "Chèche Opòtinite Estaj",
      description: "Mwen aktivman ap chèche opòtinite estaj nan jeni lojisyèl kote mwen ka aplike konesans akademik mwen epi kontribye nan pwojè ki gen enpak. Kòm yon etidyan metriz nan jeni lojisyèl nan Penn State, mwen vle pou jwenn eksperyans pwofesyonèl nan yon anviwònman ekip kolaboratif.",
      availability: {
        title: "Disponibilite",
        fullTime: "Ete 2025 (Tan Konplè)",
        partTime: "Otòn/Prentan 2024-2025 (Tan Pasyèl)",
        location: "Adistans oswa zòn Tampa, FL"
      },
      interests: {
        title: "Domèn Enterè",
        frontend: "Devlopman Frontend (React, Next.js)",
        fullstack: "Devlopman Full-Stack",
        webApp: "Devlopman Aplikasyon Web"
      },
      cta: "Kontakte Mwen pou Opòtinite"
    },
    traits: {
      title: "Karakteristik Pèsonèl Mwen",
      diligent: "Dilijan",
      creative: "Kreyatif"
    },
    skills: {
      title: "Konpetans Teknik",
      additional: "Konpetans Adisyonèl"
    },
    journey: {
      title: "Pakou Mwen",
      progress: "Pwogrè",
      inProgress: "An Pwogrè (Prevwa pou 2027)",
      completed: "Konplete an Desanm 2023"
    },
    passions: {
      title: "Pasyon & Enterè",
      sports: {
        title: "Espò & Aktivite",
        description: "Pasyone pou baskètbòl (gwo fan Kobe Bryant), jwè foutbòl, ak antouzyas egzèsis. Rete aktif se yon pati esansyèl nan woutin mwen ki ede m kenbe konsantrasyon ak kreyativite mwen."
      },
      tech: {
        title: "Teknoloji & Pwogramasyon",
        description: "Fasine pa pouvwa kòd pou transfòme lide an reyalite. Mwen renmen eksplore nouvo frameworks, konstwi pwojè, epi rete okouran teknoloji k ap parèt tankou entèlijans atifisyèl."
      },
      travel: {
        title: "Vwayaj & Eksplorasyon",
        description: "Mwen renmen dekouvri nouvo kilti, kwizin, ak pèspektiv atravè vwayaj. Chak vwayaj pote nouvo enspirasyon epi elaji konpreyansyon mwen sou bezwen itilizatè yo nan diferan kontèks."
      }
    },
    goals: {
      title: "Objektif Pwofesyonèl",
      shortTerm: "Objektif imedya mwen se fè yon tranzisyon konplè nan yon wòl Devlopè Junior, itilize eksperyans ak edikasyon mwen pou kreye aplikasyon ki gen enpak ki adrese defi mond reyèl.",
      midTerm: "Mwen vize apwofondi ekspètiz mwen nan devlopman full-stack, konsepsyon sistèm, ak otomatizasyon CI/CD atravè pwogram metriz mwen ak pwojè pratik.",
      longTerm: "Alontèm, mwen aspire lanse pwòp konpayi teknoloji mwen, konbine konpetans mwen nan jeni lojisyèl, eksperyans sekirite enfòmatik, ak lespri antreprenè pou devlope solisyon inovatè ki fè yon diferans."
    },
    timeline: {
      graduateStudent: {
        title: "Etidyan Metriz",
        organization: "Penn State University",
        description: "Fè yon metriz nan jeni lojisyèl, konsantre sou achitekti lojisyèl, jeni AI, ak jesyon kalite pwojè pou apwofondi ekspètiz nan devlopman full-stack."
      },
      supportSpecialist: {
        title: "Espesyalis Sipò Kliyan",
        organization: "TeamViewer",
        description: "Bay solisyon pwoblèm teknik pou solisyon lojisyèl antrepriz ak yon to rezolisyon premye kontak 95%, pandan w optimize workflow sipò ak redwi tan rezolisyon pwoblèm pa 20%."
      },
      salesRep: {
        title: "Reprezantan Vant",
        organization: "TeamViewer",
        description: "Fè demonstrasyon teknik solisyon lojisyèl SaaS ak antrepriz, jenere plis pase $1.5 milyon revni ak ranfòse relasyon kliyan pou ogmante konvèsyon vant adisyonèl."
      },
      salesDev: {
        title: "Reprezantan Devlopman Vant",
        organization: "TeamViewer",
        description: "Depase objektif vant trimestriyèl atravè kalifikasyon pwospè ak konsiltasyon, amelyore efikasite pipeline vant pa 20% atravè jenerasyon lead estratejik."
      },
      bachelors: {
        title: "Diplòm Lisans",
        organization: "University of South Florida",
        description: "Obteni yon Diplòm Lisans nan Syans Enfòmasyon ak yon konsantrasyon nan Sekirite Enfòmasyon ak yon minè nan Antreprenaryat, gradye an desanm 2023."
      }
    }
  },
  contact: {
    title: "Kontakte Mwen",
    subtitle: "Mwen disponib kounye a pou pwojè freelance, pozisyon a plen tan, ak opòtinite kolaborasyon. Pa ezite kontakte mwen!",
    info: {
      title: "Enfòmasyon Kontak",
      location: {
        label: "Lokasyon",
        value: "Tampa, Florid"
      },
      responseTime: {
        label: "Tan Repons",
        value: "Mwen jeneralman reponn tout demann nan 24 a 48 èdtan. Pou kesyon ijan, tanpri mete \"IJAN\" nan sijè a."
      },
      preferredMethods: {
        title: "Metòd Kontak Prefere",
        methods: [
          "Pou demann pwofesyonèl: LinkedIn oswa Email",
          "Pou diskisyon sou kòd: GitHub",
          "Pou kesyon rapid: Email"
        ]
      },
      availability: {
        title: "Disponibilite pou Reyinyon",
        subtitle: "Aktyèlman disponib pou reyinyon vityèl pandan lè sa yo:",
        weekdays: {
          label: "Jou Semèn",
          hours: "6:00 PM - 9:00 PM EST"
        },
        weekends: {
          label: "Weekend", 
          hours: "10:00 AM - 5:00 PM EST"
        },
        note: "*Lòt lè ka disponib sou demand"
      },
      connect: {
        title: "Konekte Avèk Mwen",
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email"
      }
    },
    form: {
      title: "Voye Mwen yon Mesaj",
      fields: {
        name: {
          label: "Non",
          placeholder: "Non ou",
          error: "Non an obligatwa"
        },
        email: {
          label: "Email",
          placeholder: "Email ou",
          error: "Email la obligatwa",
          invalidError: "Email la pa valid"
        },
        subject: {
          label: "Sijè",
          placeholder: "Sijè mesaj ou a",
          error: "Sijè a obligatwa"
        },
        message: {
          label: "Mesaj",
          placeholder: "Mesaj ou",
          error: "Mesaj la obligatwa"
        }
      },
      submit: "Voye Mesaj",
      success: "Mesaj ou a te voye! Mwen pral reponn ou byento.",
      error: "Te gen yon erè lè m ap voye mesaj ou a. Tanpri eseye ankò pita.",
      sending: "Ap voye mesaj ou a..."
    }
  }
};