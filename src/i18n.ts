export type Lang = 'es' | 'en';

export const contact = {
  email: 'fcabrera1000@gmail.com',
  github: 'https://github.com/14FacundoCabrera',
  githubHandle: '14FacundoCabrera',
};

/**
 * Client sites shown in the carousel.
 * To add one: drop a full-page screenshot (1440 px wide, .webp) in `public/clients/`
 * and add an entry here. `image` is the path under `public/`.
 * The [Cliente N] entries are placeholders — replace them with real clients.
 */
export const clients: {
  name: string;
  url: string;
  image: string;
  industry: { es: string; en: string };
  work: { es: string; en: string };
}[] = [
  {
    name: '[Cliente 1]',
    url: 'https://example.com/',
    image: '/clients/cliente-1.svg',
    industry: { es: '[Rubro]', en: '[Industry]' },
    work: { es: '[Qué hiciste: landing, tienda, sistema…]', en: '[What you did: landing, store, system…]' },
  },
  {
    name: '[Cliente 2]',
    url: 'https://example.com/',
    image: '/clients/cliente-2.svg',
    industry: { es: '[Rubro]', en: '[Industry]' },
    work: { es: '[Qué hiciste]', en: '[What you did]' },
  },
  {
    name: '[Cliente 3]',
    url: 'https://example.com/',
    image: '/clients/cliente-3.svg',
    industry: { es: '[Rubro]', en: '[Industry]' },
    work: { es: '[Qué hiciste]', en: '[What you did]' },
  },
  {
    name: '[Cliente 4]',
    url: 'https://example.com/',
    image: '/clients/cliente-4.svg',
    industry: { es: '[Rubro]', en: '[Industry]' },
    work: { es: '[Qué hiciste]', en: '[What you did]' },
  },
];

const es = {
  meta: {
    title: 'Facundo Cabrera — Analista TI y BI',
    description:
      'Analista TI y BI en Uruguay. Desarrollo full-stack, datos, inteligencia de negocios y DevOps. Abierto a oportunidades en San José, Montevideo y remoto.',
  },
  nav: {
    about: 'Perfil',
    projects: 'Proyectos',
    skills: 'Habilidades',
    clients: 'Clientes',
    education: 'Formación',
    contact: 'Contacto',
    switchLabel: 'Read in English',
    switchShort: 'EN',
  },
  hero: {
    eyebrow: 'Analista TI y BI · Uruguay',
    lead:
      'Combino desarrollo de software con análisis de datos: entiendo la necesidad del negocio, trabajo los datos y convierto soluciones técnicas en herramientas e insights útiles.',
    status: 'Último semestre de Analista en TI en ORT Uruguay, con foco en DevOps.',
    ctaPrimary: 'Ver proyectos',
    ctaSecondary: 'Contactarme',
  },
  about: {
    label: 'Perfil',
    title: 'Software, datos e infraestructura, con mirada de negocio.',
    body: [
      'Soy Analista TI y Analista BI, con fuerte interés en desarrollo de software, datos, tecnologías cloud y soluciones prácticas para el negocio. Estoy terminando la carrera de Analista en Tecnologías de la Información en ORT Uruguay, con foco en DevOps.',
      'Busco oportunidades donde pueda aportar en proyectos de software, análisis de datos, reportes, mejora de procesos y operaciones de tecnología.',
    ],
    strengthsTitle: 'Fortalezas',
    strengths: [
      'Mentalidad analítica y orientada a resolver problemas.',
      'Capacidad de trabajar entre software, bases de datos e infraestructura.',
      'Interés por entender procesos de negocio y traducirlos en soluciones técnicas.',
      'Aprendizaje autodirigido y desarrollo de proyectos propios.',
      'Experiencia colaborando en proyectos de software en equipo.',
    ],
  },
  focus: {
    label: 'Enfoque actual',
    items: [
      {
        title: 'Analista BI',
        body: 'Inteligencia de negocios, análisis de datos, reportes y apoyo a decisiones basadas en datos.',
      },
      {
        title: 'Analista TI',
        body: 'Sistemas, bases de datos, fundamentos de infraestructura y resolución de problemas técnicos.',
      },
      {
        title: 'Desarrollo full-stack',
        body: 'Diseño y desarrollo de aplicaciones web, APIs y sistemas respaldados por bases de datos.',
      },
      {
        title: 'DevOps / Cloud',
        body: 'Linux, Docker, flujos de despliegue y plataformas cloud.',
      },
    ],
  },
  projects: {
    label: 'Proyectos',
    title: 'Experiencia en proyectos',
    repoLink: 'Ver código',
    items: [
      {
        name: 'Dubra Transporte y Logística',
        role: 'Desarrollador full-stack · Proyecto académico en equipo',
        summary:
          'Aplicación B2B de gestión de logística y órdenes de entrega, desarrollada en un equipo de tres personas.',
        points: [
          'Frontend con React y Vite.',
          'Servicios backend con Node.js y Express.',
          'Base de datos con PostgreSQL, Prisma y Supabase.',
          'Validación de API, autenticación y flujos respaldados por base de datos.',
          'Integración de mapas y geocodificación.',
          'Aporte en el despliegue y la configuración de producción.',
        ],
        stack: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Supabase'],
        repo: 'https://github.com/14FacundoCabrera/api-dubra',
      },
      {
        name: 'SaaS modular de e-commerce y gestión',
        role: 'Proyecto de software independiente · En desarrollo',
        summary:
          'Plataforma modular para que los negocios creen y gestionen tiendas online y landing pages.',
        points: [
          'Frontend en React y backend en TypeScript/Express.',
          'PostgreSQL, Prisma y Supabase.',
          'Arquitectura multi-tenant y configuración por dominio.',
          'Flujos de productos, cupones, almacenamiento de imágenes y autenticación.',
        ],
        stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Supabase'],
        repo: null,
      },
      {
        name: 'Prototipo de analítica de ocupación para restaurantes',
        role: 'Proyecto independiente de IA / BI · Exploración',
        summary:
          'Solución de visión por computadora que usa cámaras para estimar la ocupación de mesas y el uso del local.',
        points: [
          'Experimentación con Python y herramientas de visión por computadora.',
          'Flujos de detección y seguimiento de personas.',
          'Definición de eventos de ocupación y métricas operativas para dashboards de BI.',
          'Prioridad en despliegue de bajo costo y valor práctico para pequeños negocios.',
        ],
        stack: ['Python', 'Visión por computadora', 'BI'],
        repo: null,
      },
    ],
  },
  clients: {
    label: 'Clientes',
    title: 'Sitios que construí',
    hint: 'Pasá el mouse sobre el sitio para recorrerlo. Clic para visitarlo.',
    hintTouch: 'Deslizá para ver más sitios. Tocá uno para visitarlo.',
    visit: 'Visitar sitio',
    visitAria: 'Visitar el sitio de',
    show: 'Ver',
    prev: 'Cliente anterior',
    next: 'Cliente siguiente',
    pause: 'Pausar el carrusel',
    play: 'Reproducir el carrusel',
    of: 'de',
    region: 'Sitios de clientes',
  },
  skills: {
    label: 'Habilidades',
    title: 'Herramientas con las que trabajo',
    groups: [
      { title: 'Lenguajes', items: ['C#', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript'] },
      {
        title: 'Desarrollo web',
        items: ['React', 'Astro', 'Node.js', 'Express', '.NET', 'REST APIs', 'Tailwind CSS', 'Vite'],
      },
      {
        title: 'Bases de datos y datos',
        items: [
          'MySQL',
          'PostgreSQL',
          'MongoDB',
          'Redis',
          'Prisma',
          'Supabase',
          'SQL y diseño relacional',
          'BI y análisis de datos',
        ],
      },
      {
        title: 'Cloud, infraestructura y herramientas',
        items: ['Docker', 'Linux', 'AWS', 'Azure', 'Vercel', 'Git y GitHub'],
      },
      {
        title: 'Otras áreas',
        items: [
          'Entrenamiento de modelos de IA e integración de APIs',
          'Visión por computadora',
          'Arduino y ESP32',
          'Hardware de PC y soporte técnico',
        ],
      },
    ],
  },
  education: {
    label: 'Formación',
    title: 'ORT Uruguay',
    items: [
      {
        title: 'Analista en Tecnologías de la Información',
        period: '2022 – actualidad',
        note: 'Cursando el último semestre, con foco en DevOps.',
      },
      { title: 'Analista Programador', period: '2022 – 2025', note: null },
      { title: 'Programador Web', period: '2022 – 2024', note: null },
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'B2' },
    ],
  },
  contact: {
    label: 'Contacto',
    title: '¿Hablamos?',
    body:
      'Abierto a oportunidades en BI, análisis de datos, análisis TI, desarrollo de software, soporte técnico y cloud / DevOps.',
    location: 'San José, Uruguay',
    availability: 'Disponible en San José, Montevideo y remoto.',
    emailLabel: 'Escribime',
    githubLabel: 'GitHub',
  },
  footer: {
    rights: 'Facundo Cabrera',
  },
};

const en: typeof es = {
  meta: {
    title: 'Facundo Cabrera — IT & BI Analyst',
    description:
      'IT and BI Analyst based in Uruguay. Full-stack development, data, business intelligence and DevOps. Open to roles in San José, Montevideo and remote.',
  },
  nav: {
    about: 'Profile',
    projects: 'Projects',
    skills: 'Skills',
    clients: 'Clients',
    education: 'Education',
    contact: 'Contact',
    switchLabel: 'Leer en español',
    switchShort: 'ES',
  },
  hero: {
    eyebrow: 'IT & BI Analyst · Uruguay',
    lead:
      'I combine a software-development mindset with an analytical approach: understanding business needs, working with data, and turning technical solutions into useful tools and insights.',
    status: 'Final semester of the IT Analyst program at ORT Uruguay, focused on DevOps.',
    ctaPrimary: 'See projects',
    ctaSecondary: 'Get in touch',
  },
  about: {
    label: 'Profile',
    title: 'Software, data and infrastructure, with a business lens.',
    body: [
      'I am an IT Analyst and BI Analyst with a strong interest in software development, data, cloud technologies, and practical business solutions. I am completing the IT Analyst program at ORT Uruguay, with a focus on DevOps.',
      'I am looking for opportunities where I can contribute to software projects, data analysis, reporting, process improvement, and technology operations.',
    ],
    strengthsTitle: 'Strengths',
    strengths: [
      'Analytical, problem-solving mindset.',
      'Able to work across software, databases, and infrastructure.',
      'Interested in understanding business processes and translating needs into technical solutions.',
      'Self-directed learning and hands-on project development.',
      'Collaborative experience in team-based software projects.',
    ],
  },
  focus: {
    label: 'Current focus',
    items: [
      {
        title: 'BI Analyst',
        body: 'Business intelligence, data analysis, reporting, and supporting data-informed decisions.',
      },
      {
        title: 'IT Analyst',
        body: 'Systems, databases, infrastructure fundamentals, and technical problem-solving.',
      },
      {
        title: 'Full-stack development',
        body: 'Designing and building web applications, APIs, and database-backed systems.',
      },
      {
        title: 'DevOps / Cloud',
        body: 'Linux, Docker, deployment workflows, and cloud platforms.',
      },
    ],
  },
  projects: {
    label: 'Projects',
    title: 'Project experience',
    repoLink: 'View code',
    items: [
      {
        name: 'Dubra Transporte y Logística',
        role: 'Full-stack developer · Academic team project',
        summary:
          'A B2B logistics and delivery-order management application, built as part of a three-person team.',
        points: [
          'Frontend features with React and Vite.',
          'Backend services with Node.js and Express.',
          'Data layer with PostgreSQL, Prisma, and Supabase.',
          'API validation, authentication, and database-backed workflows.',
          'Mapping and geocoding integration.',
          'Contributed to deployment and production configuration.',
        ],
        stack: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Supabase'],
        repo: 'https://github.com/14FacundoCabrera/api-dubra',
      },
      {
        name: 'Modular e-commerce & business management SaaS',
        role: 'Independent software project · In progress',
        summary: 'A modular platform for businesses to create and manage online stores and landing pages.',
        points: [
          'React frontend and TypeScript/Express backend.',
          'PostgreSQL, Prisma, and Supabase.',
          'Multi-tenant architecture and domain-based configuration.',
          'Product, coupon, image-storage, and authentication workflows.',
        ],
        stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Supabase'],
        repo: null,
      },
      {
        name: 'Restaurant occupancy analytics prototype',
        role: 'Independent AI / BI project · Exploration',
        summary:
          'A computer-vision solution that uses camera feeds to estimate table occupancy and restaurant usage.',
        points: [
          'Experimenting with Python and computer-vision tooling.',
          'Person detection and tracking workflows.',
          'Defining occupancy events and operational metrics for BI dashboards.',
          'Prioritizing low-cost deployment and practical value for small businesses.',
        ],
        stack: ['Python', 'Computer vision', 'BI'],
        repo: null,
      },
    ],
  },
  clients: {
    label: 'Clients',
    title: 'Sites I built',
    hint: 'Hover over a site to scroll through it. Click to visit.',
    hintTouch: 'Swipe to see more sites. Tap one to visit it.',
    visit: 'Visit site',
    visitAria: 'Visit the website of',
    show: 'Show',
    prev: 'Previous client',
    next: 'Next client',
    pause: 'Pause carousel',
    play: 'Play carousel',
    of: 'of',
    region: 'Client websites',
  },
  skills: {
    label: 'Skills',
    title: 'Tools I work with',
    groups: [
      { title: 'Languages', items: ['C#', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript'] },
      {
        title: 'Web development',
        items: ['React', 'Astro', 'Node.js', 'Express', '.NET', 'REST APIs', 'Tailwind CSS', 'Vite'],
      },
      {
        title: 'Databases & data',
        items: [
          'MySQL',
          'PostgreSQL',
          'MongoDB',
          'Redis',
          'Prisma',
          'Supabase',
          'SQL & relational design',
          'BI & data analysis',
        ],
      },
      {
        title: 'Cloud, infrastructure & tools',
        items: ['Docker', 'Linux', 'AWS', 'Azure', 'Vercel', 'Git & GitHub'],
      },
      {
        title: 'Additional areas',
        items: [
          'AI model training & API integration',
          'Computer vision',
          'Arduino & ESP32',
          'PC hardware & technical support',
        ],
      },
    ],
  },
  education: {
    label: 'Education',
    title: 'ORT Uruguay',
    items: [
      {
        title: 'IT Analyst',
        period: '2022 – present',
        note: 'Completing the final semester, with a focus on DevOps.',
      },
      { title: 'Analyst Programmer', period: '2022 – 2025', note: null },
      { title: 'Web Programmer', period: '2022 – 2024', note: null },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'B2' },
    ],
  },
  contact: {
    label: 'Contact',
    title: "Let's talk",
    body:
      'Open to roles in Business Intelligence, data analysis, IT analysis, software development, technical support, and cloud / DevOps.',
    location: 'San José, Uruguay',
    availability: 'Available in San José, Montevideo, and remote.',
    emailLabel: 'Email me',
    githubLabel: 'GitHub',
  },
  footer: {
    rights: 'Facundo Cabrera',
  },
};

export const content = { es, en };

export type Content = typeof es;
