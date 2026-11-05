export type Lang = "es" | "en";

export const contact = {
  email: "fcabrera1000@gmail.com",
  github: "https://github.com/14FacundoCabrera",
  githubHandle: "14FacundoCabrera",
};

const es = {
  meta: {
    title: "Facundo Cabrera — Analista TI y BI",
    description:
      "Analista TI y BI en Uruguay. Desarrollo full-stack, datos, inteligencia de negocios y DevOps. Abierto a oportunidades en San José, Montevideo y remoto.",
  },
  nav: {
    about: "Perfil",
    projects: "Proyectos",
    skills: "Habilidades",
    education: "Formación",
    contact: "Contacto",
    switchLabel: "Read in English",
    switchShort: "EN",
  },
  hero: {
    eyebrow: "Analista TI y BI · Uruguay",
    lead: "Combino desarrollo de software con análisis de datos: entiendo la necesidad del negocio, trabajo los datos y convierto soluciones técnicas en herramientas e insights útiles.",
    status:
      "Analista TI y BI, con experiencia en desarrollo full-stack y análisis de datos.",
    ctaPrimary: "Ver proyectos",
    ctaSecondary: "Contactarme",
  },
  about: {
    label: "Perfil",
    title: "Software, datos e infraestructura, con mirada de negocio.",
    body: [
      "Analista TI con foco en BI, explorando la implementación de soluciones robóticas, de software y análisis de datos para tu negocio.",
      "Ofrezco soluciones adaptadas a tus necesidades, aportando mejora de tus procesos actuales y nuevas oportunidades de negocio, focalizando en la eficiencia y la automatización.",
    ],
    strengthsTitle: "Fortalezas",
    strengths: [
      "Mentalidad analítica y orientada a resolver problemas.",
      "Capacidad de trabajar entre software, bases de datos e infraestructura.",
      "Interés por entender procesos de negocio y traducirlos en soluciones técnicas.",
      "Aprendizaje autodirigido y desarrollo de proyectos propios.",
      "Experiencia colaborando en proyectos de software en equipo.",
    ],
  },
  focus: {
    label: "Enfoque actual",
    items: [
      {
        title: "Analista BI",
        body: "Inteligencia de negocios, análisis de datos, reportes y apoyo a decisiones basadas en datos.",
      },
      {
        title: "Analista TI",
        body: "Sistemas, bases de datos, fundamentos de infraestructura y resolución de problemas técnicos.",
      },
      {
        title: "Desarrollo full-stack",
        body: "Diseño y desarrollo de aplicaciones web, APIs y sistemas respaldados por bases de datos.",
      },
      {
        title: "DevOps / Cloud",
        body: "Linux, Docker, flujos de despliegue y plataformas cloud.",
      },
      {
        title: "Robótica y automatización",
        body: "ESP32, Arduino, implementación de IA y automatización de procesos.",
      },
    ],
  },
  projects: {
    label: "Proyectos",
    title: "Experiencia en proyectos",
    repoLink: "Ver código",
    items: [
      {
        name: "Vendú",
        role: "Proyecto de software independiente · En desarrollo",
        summary:
          "Plataforma modular para que los negocios creen y gestionen tiendas online y landing pages.",
        points: [
          "Frontend en React y backend en TypeScript/Express.",
          "PostgreSQL, Prisma y Supabase.",
          "Arquitectura multi-tenant y configuración por dominio.",
          "Flujos de productos, cupones, almacenamiento de imágenes y autenticación.",
        ],
        stack: [
          "React",
          "TypeScript",
          "Express",
          "PostgreSQL",
          "Prisma",
          "Supabase",
        ],
        repo: null,
      },
    ],
  },
  skills: {
    label: "Habilidades",
    title: "Herramientas con las que trabajo",
    groups: [
      {
        title: "Lenguajes",
        items: ["C#", "C++", "Python", "Java", "JavaScript", "TypeScript"],
      },
      {
        title: "Desarrollo web",
        items: [
          "React",
          "Astro",
          "Node.js",
          "Express",
          ".NET",
          "REST APIs",
          "Tailwind CSS",
          "Vite",
        ],
      },
      {
        title: "Bases de datos y datos",
        items: [
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Prisma",
          "Supabase",
          "SQL y diseño relacional",
          "BI y análisis de datos",
        ],
      },
      {
        title: "Cloud, infraestructura y herramientas",
        items: ["Docker", "Linux", "AWS", "Azure", "Vercel", "Git y GitHub"],
      },
      {
        title: "Otras áreas",
        items: [
          "Entrenamiento de modelos de IA e integración de APIs",
          "Visión por computadora",
          "Arduino y ESP32",
          "Hardware de PC y soporte técnico",
        ],
      },
    ],
  },
  education: {
    label: "Formación",
    title: "ORT Uruguay",
    items: [
      {
        title: "Analista en Tecnologías de la Información",
        period: "2022 – 2026",
        note: "foco en DevOps",
      },
      { title: "Analista Programador", period: "2022 – 2025", note: null },
      { title: "Programador Web", period: "2022 – 2024", note: null },
    ],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "B2" },
    ],
  },
  contact: {
    label: "Contacto",
    title: "¿Hablamos?",
    body: "Abierto a oportunidades en BI, análisis de datos, análisis TI, desarrollo de software, soporte técnico y cloud / DevOps.",
    // location: "San José, Uruguay",
    // availability: "Disponible en San José, Montevideo y remoto.",
    emailLabel: "Escribime",
    githubLabel: "GitHub",
  },
  footer: {
    rights: "Facundo Cabrera",
  },
};

const en: typeof es = {
  meta: {
    title: "Facundo Cabrera — IT & BI Analyst",
    description:
      "IT and BI Analyst based in Uruguay. Full-stack development, data, business intelligence and DevOps. Open to roles in San José, Montevideo and remote.",
  },
  nav: {
    about: "Profile",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
    switchLabel: "Leer en español",
    switchShort: "ES",
  },
  hero: {
    eyebrow: "IT & BI Analyst · Uruguay",
    lead: "I combine a software-development mindset with an analytical approach: understanding business needs, working with data, and turning technical solutions into useful tools and insights.",
    status:
      "IT & BI Analyst, with experience in full-stack development and data analysis.",
    ctaPrimary: "See projects",
    ctaSecondary: "Get in touch",
  },
  about: {
    label: "Profile",
    title: "Software, data and infrastructure, with a business lens.",
    body: [
      "I am an IT & BI Analyst, exploring the implementation of robotic, software and data-analysis solutions for your business.",
      "I offer solutions tailored to your needs, improving your current processes and creating new business opportunities, focusing on efficiency and automation.",
    ],
    strengthsTitle: "Strengths",
    strengths: [
      "Analytical, problem-solving mindset.",
      "Able to work across software, databases, and infrastructure.",
      "Interested in understanding business processes and translating needs into technical solutions.",
      "Self-directed learning and hands-on project development.",
      "Collaborative experience in team-based software projects.",
    ],
  },
  focus: {
    label: "Current focus",
    items: [
      {
        title: "BI Analyst",
        body: "Business intelligence, data analysis, reporting, and supporting data-informed decisions.",
      },
      {
        title: "IT Analyst",
        body: "Systems, databases, infrastructure fundamentals, and technical problem-solving.",
      },
      {
        title: "Full-stack development",
        body: "Designing and building web applications, APIs, and database-backed systems.",
      },
      {
        title: "DevOps / Cloud",
        body: "Linux, Docker, deployment workflows, and cloud platforms.",
      },
      {
        title: "Robotics and automation",
        body: "ESP32, Arduino, AI implementation, and process automation.",
      },
    ],
  },
  projects: {
    label: "Projects",
    title: "Project experience",
    repoLink: "View code",
    items: [
      {
        name: "Dubra Transporte y Logística",
        role: "Full-stack developer · Academic team project",
        summary:
          "A B2B logistics and delivery-order management application, built as part of a three-person team.",
        points: [
          "Frontend features with React and Vite.",
          "Backend services with Node.js and Express.",
          "Data layer with PostgreSQL, Prisma, and Supabase.",
          "API validation, authentication, and database-backed workflows.",
          "Mapping and geocoding integration.",
          "Contributed to deployment and production configuration.",
        ],
        stack: [
          "React",
          "Vite",
          "Node.js",
          "Express",
          "PostgreSQL",
          "Prisma",
          "Supabase",
        ],
        repo: "https://github.com/14FacundoCabrera/api-dubra",
      },
      {
        name: "Modular e-commerce & business management SaaS",
        role: "Independent software project · In progress",
        summary:
          "A modular platform for businesses to create and manage online stores and landing pages.",
        points: [
          "React frontend and TypeScript/Express backend.",
          "PostgreSQL, Prisma, and Supabase.",
          "Multi-tenant architecture and domain-based configuration.",
          "Product, coupon, image-storage, and authentication workflows.",
        ],
        stack: [
          "React",
          "TypeScript",
          "Express",
          "PostgreSQL",
          "Prisma",
          "Supabase",
        ],
        repo: null,
      },
      {
        name: "Restaurant occupancy analytics prototype",
        role: "Independent AI / BI project · Exploration",
        summary:
          "A computer-vision solution that uses camera feeds to estimate table occupancy and restaurant usage.",
        points: [
          "Experimenting with Python and computer-vision tooling.",
          "Person detection and tracking workflows.",
          "Defining occupancy events and operational metrics for BI dashboards.",
          "Prioritizing low-cost deployment and practical value for small businesses.",
        ],
        stack: ["Python", "Computer vision", "BI"],
        repo: null,
      },
    ],
  },
  skills: {
    label: "Skills",
    title: "Tools I work with",
    groups: [
      {
        title: "Languages",
        items: ["C#", "C++", "Python", "Java", "JavaScript", "TypeScript"],
      },
      {
        title: "Web development",
        items: [
          "React",
          "Astro",
          "Node.js",
          "Express",
          ".NET",
          "REST APIs",
          "Tailwind CSS",
          "Vite",
        ],
      },
      {
        title: "Databases & data",
        items: [
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Prisma",
          "Supabase",
          "SQL & relational design",
          "BI & data analysis",
        ],
      },
      {
        title: "Cloud, infrastructure & tools",
        items: ["Docker", "Linux", "AWS", "Azure", "Vercel", "Git & GitHub"],
      },
      {
        title: "Additional areas",
        items: [
          "AI model training & API integration",
          "Computer vision",
          "Arduino & ESP32",
          "PC hardware & technical support",
        ],
      },
    ],
  },
  education: {
    label: "Education",
    title: "ORT Uruguay",
    items: [
      {
        title: "IT Analyst",
        period: "2022 – present",
        note: "Completing the final semester, with a focus on DevOps.",
      },
      { title: "Analyst Programmer", period: "2022 – 2025", note: null },
      { title: "Web Programmer", period: "2022 – 2024", note: null },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "B2" },
    ],
  },
  contact: {
    label: "Contact",
    title: "Let's talk",
    body: "Open to roles in Business Intelligence, data analysis, IT analysis, software development, technical support, and cloud / DevOps.",
    location: "San José, Uruguay",
    availability: "Available in San José, Montevideo, and remote.",
    emailLabel: "Email me",
    githubLabel: "GitHub",
  },
  footer: {
    rights: "Facundo Cabrera",
  },
};

export const content = { es, en };

export type Content = typeof es;
