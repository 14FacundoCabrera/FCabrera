export type Lang = "es" | "en";

export const contact = {
  email: "fcabrera1000@gmail.com",
  github: "https://github.com/14FacundoCabrera",
  githubHandle: "14FacundoCabrera",
};

/** Technologies shown in the scrolling strip under the hero. */
export const tech = [
  "C#",
  "Python",
  "TypeScript",
  "React",
  "Node.js",
  ".NET",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Linux",
  "AWS",
  "Azure",
  "Vercel",
  "ESP32",
  "Arduino",
];

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
    name: "[Cliente 1]",
    url: "https://example.com/",
    image: "/clients/cliente-1.svg",
    industry: { es: "[Rubro]", en: "[Industry]" },
    work: { es: "[Qué hiciste: landing, tienda, sistema…]", en: "[What you did: landing, store, system…]" },
  },
  {
    name: "[Cliente 2]",
    url: "https://example.com/",
    image: "/clients/cliente-2.svg",
    industry: { es: "[Rubro]", en: "[Industry]" },
    work: { es: "[Qué hiciste]", en: "[What you did]" },
  },
  {
    name: "[Cliente 3]",
    url: "https://example.com/",
    image: "/clients/cliente-3.svg",
    industry: { es: "[Rubro]", en: "[Industry]" },
    work: { es: "[Qué hiciste]", en: "[What you did]" },
  },
  {
    name: "[Cliente 4]",
    url: "https://example.com/",
    image: "/clients/cliente-4.svg",
    industry: { es: "[Rubro]", en: "[Industry]" },
    work: { es: "[Qué hiciste]", en: "[What you did]" },
  },
];

/** Icon shown on each service card, in the same order as `services.items`. */
export type ServiceIcon = "chart" | "database" | "code" | "cloud" | "chip";

const es = {
  meta: {
    title: "Facundo Cabrera — Software, datos y automatización para tu negocio",
    description:
      "Desarrollador freelance en Uruguay: sitios y tiendas online, sistemas a medida, reportes con datos (BI) y automatización de procesos para negocios.",
  },
  nav: {
    services: "Servicios",
    process: "Cómo trabajo",
    projects: "Proyectos",
    clients: "Clientes",
    skills: "Habilidades",
    education: "Formación",
    contact: "Contacto",
    cta: "Pedir presupuesto",
    switchLabel: "Read in English",
    switchShort: "EN",
  },
  hero: {
    badge: "Disponible para nuevos proyectos freelance",
    role: "Software · Datos · Automatización — Freelance",
    lead: "Ayudo a negocios a trabajar mejor con tecnología: sitios y tiendas online, sistemas a medida, reportes con tus datos y automatización de procesos. Entiendo tu negocio primero y después construyo la solución.",
    ctaPrimary: "Pedir presupuesto",
    ctaSecondary: "Ver servicios",
    facts: [
      { label: "Modalidad", value: "Freelance · Uruguay y remoto" },
      { label: "Servicios", value: "Web · Datos · Automatización" },
      { label: "Idiomas", value: "Español · Inglés B2" },
    ],
    floatLabel: "Servicio",
    floatValue: "Datos y BI",
    floatPill: "Robótica · ESP32",
  },
  techLabel: "Tecnologías",
  services: {
    label: "Servicios",
    title: "Software, datos e infraestructura, con mirada de negocio.",
    body: [
      "Analista TI con foco en BI, explorando la implementación de soluciones robóticas, de software y análisis de datos para tu negocio.",
      "Ofrezco soluciones adaptadas a tus necesidades, aportando mejora de tus procesos actuales y nuevas oportunidades de negocio, focalizando en la eficiencia y la automatización.",
    ],
    chips: [
      "Mentalidad analítica",
      "Software · datos · infraestructura",
      "Procesos de negocio",
      "Aprendizaje autodirigido",
      "Trabajo en equipo",
    ],
    heading: "Qué puedo hacer por tu negocio",
    items: [
      {
        icon: "chart" as ServiceIcon,
        title: "Datos y BI",
        body: "Dashboards, reportes y análisis de tus datos para tomar mejores decisiones.",
      },
      {
        icon: "database" as ServiceIcon,
        title: "Sistemas a medida",
        body: "Aplicaciones web, APIs y bases de datos adaptadas a cómo trabaja tu negocio.",
      },
      {
        icon: "code" as ServiceIcon,
        title: "Sitios y tiendas online",
        body: "Landing pages, sitios web y e-commerce, fáciles de administrar.",
      },
      {
        icon: "cloud" as ServiceIcon,
        title: "Infraestructura y cloud",
        body: "Publicación, servidores, Docker, Linux y soporte técnico.",
      },
      {
        icon: "chip" as ServiceIcon,
        title: "Robótica y automatización",
        body: "ESP32, Arduino, implementación de IA y automatización de procesos.",
      },
    ],
  },
  process: {
    label: "Cómo trabajo",
    title: "De la idea a la solución funcionando",
    cta: "Empezar un proyecto",
    steps: [
      { title: "Charla inicial", body: "Me contás tu negocio, el problema y qué querés lograr." },
      { title: "Propuesta", body: "Te paso una solución concreta, con alcance, plazos y presupuesto." },
      { title: "Desarrollo", body: "Construyo por etapas y te muestro avances para validar en el camino." },
      {
        title: "Entrega y soporte",
        body: "Lo dejo publicado y funcionando, y te acompaño después del lanzamiento.",
      },
    ],
  },
  projects: {
    label: "Producto propio",
    title: "Lo que estoy construyendo",
    repoLink: "Ver código",
    items: [
      {
        name: "Vendú",
        status: "En desarrollo",
        kind: "Proyecto independiente",
        summary: "Plataforma modular para que los negocios creen y gestionen tiendas online y landing pages.",
        features: [
          { title: "Multi-tenant", body: "Configuración por dominio" },
          { title: "Catálogo", body: "Productos, cupones e imágenes" },
          { title: "Autenticación", body: "Flujos de acceso seguros" },
          { title: "Full-stack", body: "React + TypeScript/Express" },
        ],
        stack: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma", "Supabase"],
        repo: null as string | null,
        /** Path under public/ for a screenshot; null shows a placeholder. */
        image: null as string | null,
        domain: "[dominio de Vendú]",
        imagePlaceholder: "[Captura del panel de Vendú]",
      },
    ],
  },
  clients: {
    label: "Clientes",
    title: "Trabajos para clientes",
    hint: "Pasá el mouse sobre el sitio para recorrerlo. Clic para visitarlo.",
    hintTouch: "Deslizá para ver más sitios. Tocá uno para visitarlo.",
    visit: "Visitar sitio",
    visitAria: "Visitar el sitio de",
    show: "Ver",
    prev: "Cliente anterior",
    next: "Cliente siguiente",
    pause: "Pausar el carrusel",
    play: "Reproducir el carrusel",
    of: "de",
    region: "Sitios de clientes",
  },
  skills: {
    label: "Habilidades",
    title: "Herramientas con las que trabajo",
    groups: [
      { title: "Lenguajes", items: ["C#", "C++", "Python", "Java", "JavaScript", "TypeScript"] },
      {
        title: "Desarrollo web",
        items: ["React", "Astro", "Node.js", "Express", ".NET", "REST APIs", "Tailwind CSS", "Vite"],
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
      { title: "Cloud e infraestructura", items: ["Docker", "Linux", "AWS", "Azure", "Vercel", "Git y GitHub"] },
      {
        title: "Otras áreas",
        items: ["IA e integración de APIs", "Visión por computadora", "Arduino y ESP32", "Hardware y soporte técnico"],
      },
    ],
    ctaText: "¿Tu negocio usa otra herramienta? Consultame y lo vemos juntos.",
    ctaLink: "Hablemos",
  },
  education: {
    label: "Formación",
    title: "ORT Uruguay",
    items: [
      { title: "Analista en Tecnologías de la Información", period: "2022 – 2026", note: "Foco en DevOps" },
      { title: "Analista Programador", period: "2022 – 2025", note: null as string | null },
      { title: "Programador Web", period: "2022 – 2024", note: null as string | null },
    ],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "B2" },
    ],
  },
  contact: {
    label: "Contacto",
    title: "¿Tenés un proyecto en mente?",
    body: "Contame qué necesitás y te respondo con una propuesta a medida: sitio, sistema, reportes o automatización.",
    cta: "Pedir presupuesto",
    emailLabel: "Escribime",
    githubLabel: "GitHub",
  },
  footer: {
    rights: "Facundo Cabrera",
  },
};

const en: typeof es = {
  meta: {
    title: "Facundo Cabrera — Software, data and automation for your business",
    description:
      "Freelance developer in Uruguay: websites and online stores, custom systems, data reporting (BI) and process automation for businesses.",
  },
  nav: {
    services: "Services",
    process: "How I work",
    projects: "Projects",
    clients: "Clients",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
    cta: "Get a quote",
    switchLabel: "Leer en español",
    switchShort: "ES",
  },
  hero: {
    badge: "Available for new freelance projects",
    role: "Software · Data · Automation — Freelance",
    lead: "I help businesses work better with technology: websites and online stores, custom systems, reports built on your data, and process automation. I learn how your business works first, then build the solution.",
    ctaPrimary: "Get a quote",
    ctaSecondary: "See services",
    facts: [
      { label: "Engagement", value: "Freelance · Uruguay & remote" },
      { label: "Services", value: "Web · Data · Automation" },
      { label: "Languages", value: "Spanish · English B2" },
    ],
    floatLabel: "Service",
    floatValue: "Data & BI",
    floatPill: "Robotics · ESP32",
  },
  techLabel: "Technologies",
  services: {
    label: "Services",
    title: "Software, data and infrastructure, with a business lens.",
    body: [
      "IT Analyst focused on BI, exploring robotics, software and data-analysis solutions for your business.",
      "I offer solutions tailored to your needs, improving your current processes and opening new business opportunities, with a focus on efficiency and automation.",
    ],
    chips: [
      "Analytical mindset",
      "Software · data · infrastructure",
      "Business processes",
      "Self-directed learning",
      "Teamwork",
    ],
    heading: "What I can do for your business",
    items: [
      {
        icon: "chart",
        title: "Data & BI",
        body: "Dashboards, reports and analysis of your data to make better decisions.",
      },
      {
        icon: "database",
        title: "Custom systems",
        body: "Web apps, APIs and databases shaped around how your business works.",
      },
      {
        icon: "code",
        title: "Websites & online stores",
        body: "Landing pages, websites and e-commerce that are easy to manage.",
      },
      {
        icon: "cloud",
        title: "Infrastructure & cloud",
        body: "Hosting, servers, Docker, Linux and technical support.",
      },
      {
        icon: "chip",
        title: "Robotics & automation",
        body: "ESP32, Arduino, AI implementation and process automation.",
      },
    ],
  },
  process: {
    label: "How I work",
    title: "From idea to a working solution",
    cta: "Start a project",
    steps: [
      { title: "Intro call", body: "You tell me about your business, the problem and what you want to achieve." },
      { title: "Proposal", body: "I send you a concrete solution with scope, timeline and price." },
      { title: "Build", body: "I build in stages and show you progress so we can validate along the way." },
      { title: "Launch & support", body: "I leave it live and working, and stay with you after launch." },
    ],
  },
  projects: {
    label: "Own product",
    title: "What I'm building",
    repoLink: "View code",
    items: [
      {
        name: "Vendú",
        status: "In progress",
        kind: "Independent project",
        summary: "A modular platform for businesses to create and manage online stores and landing pages.",
        features: [
          { title: "Multi-tenant", body: "Domain-based configuration" },
          { title: "Catalog", body: "Products, coupons and images" },
          { title: "Authentication", body: "Secure sign-in flows" },
          { title: "Full-stack", body: "React + TypeScript/Express" },
        ],
        stack: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma", "Supabase"],
        repo: null,
        image: null,
        domain: "[Vendú domain]",
        imagePlaceholder: "[Screenshot of the Vendú dashboard]",
      },
    ],
  },
  clients: {
    label: "Clients",
    title: "Client work",
    hint: "Hover over a site to scroll through it. Click to visit.",
    hintTouch: "Swipe to see more sites. Tap one to visit it.",
    visit: "Visit site",
    visitAria: "Visit the website of",
    show: "Show",
    prev: "Previous client",
    next: "Next client",
    pause: "Pause carousel",
    play: "Play carousel",
    of: "of",
    region: "Client websites",
  },
  skills: {
    label: "Skills",
    title: "Tools I work with",
    groups: [
      { title: "Languages", items: ["C#", "C++", "Python", "Java", "JavaScript", "TypeScript"] },
      {
        title: "Web development",
        items: ["React", "Astro", "Node.js", "Express", ".NET", "REST APIs", "Tailwind CSS", "Vite"],
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
      { title: "Cloud & infrastructure", items: ["Docker", "Linux", "AWS", "Azure", "Vercel", "Git & GitHub"] },
      {
        title: "Additional areas",
        items: ["AI & API integration", "Computer vision", "Arduino & ESP32", "Hardware & technical support"],
      },
    ],
    ctaText: "Does your business use another tool? Ask me and we'll look at it together.",
    ctaLink: "Let's talk",
  },
  education: {
    label: "Education",
    title: "ORT Uruguay",
    items: [
      { title: "IT Analyst", period: "2022 – 2026", note: "Focus on DevOps" },
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
    title: "Have a project in mind?",
    body: "Tell me what you need and I'll reply with a tailored proposal: website, system, reports or automation.",
    cta: "Get a quote",
    emailLabel: "Email me",
    githubLabel: "GitHub",
  },
  footer: {
    rights: "Facundo Cabrera",
  },
};

export const content = { es, en };

export type Content = typeof es;
