/**
 * Diccionario único de contenido del sitio.
 * Todo el texto visible vive aquí, en español e inglés.
 */

const es = {
  code: 'es',
  htmlLang: 'es',
  meta: {
    title: 'Sebastián Quiqui — Desarrollador junior · Python, automatización y web',
    description:
      'Portafolio de Sebastián Quiqui (qSEBASp), desarrollador junior autodidacta en Bogotá. Python, automatización, FastAPI y desarrollo web. Estudiante de Psicología.',
    ogAlt: 'Sebastián Quiqui, desarrollador junior en Bogotá',
  },
  nav: {
    about: 'Sobre mí',
    stack: 'Stack',
    projects: 'Proyectos',
    path: 'Trayectoria',
    contact: 'Contacto',
  },
  a11y: {
    skip: 'Saltar al contenido',
    menu: 'Abrir menú',
    close: 'Cerrar',
    palette: 'Abrir paleta de comandos',
    mainNav: 'Navegación principal',
    top: 'Volver arriba',
    external: 'se abre en una pestaña nueva',
  },
  actions: {
    talk: 'Hablemos',
    cv: 'CV',
    cvEs: 'CV en español',
    cvEn: 'CV en inglés',
    case: 'Ver caso de estudio',
    repo: 'Ver repositorio',
    allProjects: 'Ver todos los proyectos',
    copy: 'Copiar',
    copied: 'Copiado',
    switchLang: 'Ver en inglés',
  },
  hero: {
    status: 'Disponible · primera oportunidad',
    titleFirst: 'Sebastián',
    titleLast: 'Quiqui',
    role: ['Python', 'Automatización', 'Desarrollo web'],
    lead: 'Estudio Psicología y aprendo a programar por mi cuenta. Construyo herramientas que resuelven problemas reales: un <strong>coach de Valorant que analiza tus partidas</strong>, un bot que administra canales de voz 24/7 y este sitio, <strong>escrito a mano</strong>.',
    meta: {
      location: 'Bogotá, Colombia',
      coords: '4.7110° N, 74.0721° W',
      time: 'Hora local',
    },
    caption: {
      alias: 'qSEBASp',
      year: 'Portafolio · 2026',
    },
    rail: 'Desarrollador junior — Bogotá',
    ticker: [
      { label: 'Buscando', value: 'Desarrollo · Automatización · QA' },
      { label: 'Modalidad', value: 'Remoto · Full o part-time' },
      { label: 'Idiomas', value: 'Español nativo · Inglés intermedio' },
      { label: 'Ahora', value: 'Quiqu.ia + portafolio nuevo' },
    ],
  },
  about: {
    eyebrow: '01 — Sobre mí',
    title: 'Psicología y código, en la misma cabeza',
    lead: 'No llegué a programar por un título: llegué por curiosidad y me quedé por los proyectos.',
    paragraphs: [
      'Estudio <strong>Psicología</strong> en la Fundación Universitaria Areandina y aprendo desarrollo de software por mi cuenta. Esa mezcla no es un plan B: me enseñó a entender a la persona antes de escribir código, a escuchar, preguntar y resolver problemas de forma estructurada.',
      'Empecé automatizando tareas con scripts de <strong>Python</strong> y terminé construyendo aplicaciones completas: API con <strong>FastAPI</strong>, base de datos SQLite, interfaz en <strong>Next.js</strong> y despliegues en Google Cloud. Hoy busco mi primera oportunidad en desarrollo, automatización o QA donde pueda aportar desde el primer día.',
    ],
    principles: [
      {
        title: 'Autodidacta por defecto',
        text: 'Dado un reto, investigo, pruebo y construyo. La documentación y los errores son mi material de estudio.',
      },
      {
        title: 'La IA es copiloto, no atajo',
        text: 'Arranco con una base generada, pero la reviso, la ajusto y la reescribo hasta que el resultado sea mío: limpio y funcional.',
      },
      {
        title: 'Diseño para personas',
        text: 'La Psicología me hace pensar en cómo la gente usa, se frustra y aprende, no solo en cómo funciona el código.',
      },
      {
        title: 'Terminado gana a perfecto',
        text: 'Prefiero publicar, medir y mejorar. Mis proyectos están en producción, no en un cajón.',
      },
    ],
  },
  stack: {
    eyebrow: '02 — Stack',
    title: 'Lo que sé usar, y dónde lo usé',
    lead: 'Sin barras de porcentaje ni niveles inventados. Esto es lo que aparece en el código de mis proyectos.',
    groups: [
      {
        title: 'Lenguajes',
        items: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
      },
      {
        title: 'Web y APIs',
        items: ['FastAPI', 'Next.js', 'APIs REST', 'fetch / async', 'discord.py', 'asyncio', 'SQLAlchemy'],
      },
      {
        title: 'Datos y calidad',
        items: ['SQLite', 'pytest', 'Git', 'GitHub', 'GitHub Pages', 'HTML semántico'],
      },
      {
        title: 'Cloud y automatización',
        items: ['Google Cloud Platform', 'Scripts de automatización', 'Bots', 'Flujos y permisos'],
      },
      {
        title: 'Sistemas y soporte',
        items: ['Ensamblaje de PC', 'Diagnóstico y optimización', 'Soporte técnico', 'Office · Google Workspace'],
      },
      {
        title: 'Con personas',
        items: ['Escucha activa', 'Comunicación clara', 'Trabajo en equipo', 'Aprendizaje rápido'],
      },
    ],
    note: '<b>Dónde se ve:</b> Quiqu.ia usa FastAPI, SQLAlchemy, Next.js y pytest. EclipseBot usa discord.py, asyncio y Google Cloud. <b>Ahora:</b> profundizando TypeScript y pruebas automatizadas.',
  },
  projects: {
    eyebrow: '03 — Proyectos',
    title: 'Dos proyectos, dos problemas resueltos',
    lead: 'Nada de tutoriales copiados: ambos están publicados y los sigo manteniendo.',
    caseLabel: 'Caso',
    study: {
      problem: 'El problema',
      built: 'Qué construí',
      learned: 'Qué aprendí',
      stack: 'Stack',
      links: 'Enlaces',
    },
    list: [
      {
        index: 'Caso 01',
        title: 'Quiqu.ia — Coach de Valorant',
        kicker: ['Full-stack', 'IA', 'Local-first'],
        summary:
          'Convierte tu historial de partidas en un plan de mejora: métricas por ronda, hallazgos priorizados y ejercicios de práctica, con un informe en español.',
        tags: ['Python', 'FastAPI', 'SQLite', 'Next.js', 'IA'],
        problem:
          'Los analizadores de Valorant te dan números sueltos. Saber qué practicar exige cruzar métricas por partida y por ronda —ACS, KAST, primeras sangres, economía— y traducirlas en algo accionable.',
        built: [
          'Sincronización del historial de partidas con la API de HenrikDev, sin duplicados.',
          'Cálculo de métricas por partida y por ronda.',
          'Motor de reglas que convierte las métricas en hallazgos priorizados y tareas de práctica, con resultados reproducibles para una misma partida.',
          'Informe en español, con integración opcional de un modelo de lenguaje (API compatible con OpenAI) para reescribirlo.',
          'API REST con FastAPI y SQLite (SQLAlchemy), interfaz web en Next.js y pruebas unitarias con pytest.',
        ],
        learned:
          'Que un dato no es un consejo: el valor está en la lógica que lo prioriza. Y que separar API, base de datos e interfaz hace posible probar cada capa.',
      },
      {
        index: 'Caso 02',
        title: 'EclipseBot — Canales de voz',
        kicker: ['Bot', 'Tiempo real', 'Cloud'],
        summary:
          'Bot de Discord que crea y administra canales de voz temporales. Cada persona controla su sala con botones, sin necesidad de moderadores.',
        tags: ['Python', 'discord.py', 'asyncio', 'Google Cloud'],
        problem:
          'En comunidades grandes los canales de voz temporales se acumulan vacíos, y crear uno a mano depende de un moderador disponible.',
        built: [
          'Creación y eliminación automática de canales según demanda.',
          'Paneles con botones y lógica de permisos para que cada usuario administre su propia sala.',
          'Paneles persistentes que siguen funcionando después de reiniciar el bot, usando eventos en tiempo real.',
          'Despliegue en Google Cloud Platform para mantenerlo activo 24/7.',
        ],
        learned:
          'Programación asíncrona y eventos en tiempo real: el bot reacciona a lo que pasa en el servidor, no solo a comandos. Y que la persistencia es lo que separa una demo de una herramienta.',
      },
    ],
    othersTitle: 'También',
    others: [
      {
        name: 'Este portafolio',
        desc: 'Diseñado y programado a mano sobre Astro: retícula editorial, un solo acento y JavaScript solo donde hace falta.',
        linkLabel: 'Código',
        href: 'https://github.com/qSEBASp/mi-portafolio',
      },
      {
        name: 'Scripts de automatización',
        desc: 'Scripts en Python y PowerShell para tareas repetitivas: archivos, permisos y flujos de trabajo.',
        linkLabel: '',
        href: '',
      },
    ],
  },
  path: {
    eyebrow: '04 — Trayectoria',
    title: 'Cómo llegué hasta acá',
    lead: 'Sin atajos: formación académica, aprendizaje autodidacta y proyectos propios en paralelo.',
    items: [
      {
        when: '2023 — hoy',
        title: 'Psicología',
        place: 'Fundación Universitaria Areandina · Bogotá',
        text: 'Análisis del comportamiento, escucha activa, resolución estructurada de problemas y comunicación en equipo. En curso.',
      },
      {
        when: 'Continuo',
        title: 'Desarrollo autodidacta',
        place: 'Documentación, cursos y proyectos propios',
        text: 'Python, JavaScript, APIs REST, Git y Google Cloud Platform, aplicados directamente en proyectos reales.',
      },
      {
        when: '2021 — 2022',
        title: 'Cursos en Platzi',
        place: 'Excel básico · Algoritmos y pensamiento lógico · Entorno de desarrollo en Windows · Computación básica',
        text: 'La base técnica que vino antes de los proyectos.',
      },
      {
        when: 'Ahora',
        title: 'Primera oportunidad profesional',
        place: 'Desarrollo · Automatización · QA',
        text: 'Buscando un equipo donde aportar desde el primer día y seguir creciendo.',
      },
    ],
    foot: [
      { label: 'Idiomas', value: 'Español nativo · Inglés intermedio' },
      { label: 'Disponibilidad', value: 'Remoto · full-time, part-time o por horas' },
    ],
  },
  contact: {
    eyebrow: '05 — Contacto',
    title: 'Hablemos',
    statement: '¿Buscas a alguien que <em>aprenda rápido</em> y resuelva?',
    text: 'Estoy disponible para mi primera oportunidad en desarrollo, automatización o QA, y para proyectos puntuales. Respondo en menos de 24 horas.',
    form: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Correo',
      emailPlaceholder: 'tu@correo.com',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame qué necesitas…',
      submit: 'Enviar mensaje',
      note: 'El formulario llega directo a mi correo. Sin spam.',
      subject: 'Contacto desde el portafolio',
    },
    rows: {
      email: 'Correo',
      phone: 'WhatsApp',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
  footer: {
    tagline: 'Diseñado y programado a mano. Sin plantillas, sin temas comprados.',
    navTitle: 'Navegación',
    docsTitle: 'Documentos',
    metaTitle: 'En vivo',
    rights: '© 2026 Sebastián Quiqui Fonque',
    builtNote: 'Hecho con Astro + CSS a mano',
  },
  palette: {
    open: 'Buscar',
    placeholder: 'Ir a una sección, abrir un proyecto o copiar mi correo…',
    empty: 'Sin resultados. Prueba con «proyectos», «CV» o «correo».',
    groups: {
      go: 'Secciones',
      projects: 'Proyectos',
      actions: 'Acciones',
    },
    copyEmail: 'Copiar correo',
    copyPhone: 'Copiar WhatsApp',
    lang: 'Switch to English',
    whatsapp: 'Abrir WhatsApp',
    github: 'Abrir GitHub',
    linkedin: 'Abrir LinkedIn',
    top: 'Ir arriba',
    hint: '↑↓ para moverte · ↵ para abrir · esc para cerrar',
  },
};

const en: typeof es = {
  code: 'en',
  htmlLang: 'en',
  meta: {
    title: 'Sebastián Quiqui — Junior developer · Python, automation & web',
    description:
      'Portfolio of Sebastián Quiqui (qSEBASp), a self-taught junior developer in Bogotá. Python, automation, FastAPI and web development. Psychology student.',
    ogAlt: 'Sebastián Quiqui, junior developer in Bogotá',
  },
  nav: {
    about: 'About',
    stack: 'Stack',
    projects: 'Projects',
    path: 'Path',
    contact: 'Contact',
  },
  a11y: {
    skip: 'Skip to content',
    menu: 'Open menu',
    close: 'Close',
    palette: 'Open command palette',
    mainNav: 'Main navigation',
    top: 'Back to top',
    external: 'opens in a new tab',
  },
  actions: {
    talk: "Let's talk",
    cv: 'CV',
    cvEs: 'CV in Spanish',
    cvEn: 'CV in English',
    case: 'Read case study',
    repo: 'View repository',
    allProjects: 'See all projects',
    copy: 'Copy',
    copied: 'Copied',
    switchLang: 'Ver en español',
  },
  hero: {
    status: 'Available · first opportunity',
    titleFirst: 'Sebastián',
    titleLast: 'Quiqui',
    role: ['Python', 'Automation', 'Web development'],
    lead: 'I study Psychology and I am teaching myself to code. I build tools that solve real problems: a <strong>Valorant coach that analyses your matches</strong>, a bot that manages voice channels 24/7, and this site, <strong>written by hand</strong>.',
    meta: {
      location: 'Bogotá, Colombia',
      coords: '4.7110° N, 74.0721° W',
      time: 'Local time',
    },
    caption: {
      alias: 'qSEBASp',
      year: 'Portfolio · 2026',
    },
    rail: 'Junior developer — Bogotá',
    ticker: [
      { label: 'Looking for', value: 'Development · Automation · QA' },
      { label: 'Setup', value: 'Remote · Full or part-time' },
      { label: 'Languages', value: 'Spanish native · English intermediate' },
      { label: 'Now', value: 'Quiqu.ia + new portfolio' },
    ],
  },
  about: {
    eyebrow: '01 — About',
    title: 'Psychology and code, in the same head',
    lead: "I didn't get into programming through a degree: I got in through curiosity and stayed for the projects.",
    paragraphs: [
      'I study <strong>Psychology</strong> at Fundación Universitaria Areandina and I am learning software development on my own. That mix is not a plan B: it taught me to understand the person before writing code — to listen, ask, and solve problems in a structured way.',
      'I started automating tasks with <strong>Python</strong> scripts and ended up building full applications: a <strong>FastAPI</strong> API, a SQLite database, a <strong>Next.js</strong> interface and deployments on Google Cloud. Now I am looking for my first opportunity in development, automation or QA where I can contribute from day one.',
    ],
    principles: [
      {
        title: 'Self-taught by default',
        text: 'Given a challenge, I research, test and build. Documentation and error messages are my study material.',
      },
      {
        title: 'AI is a copilot, not a shortcut',
        text: 'I start from a generated base, but I review it, adjust it and rewrite it until the result is mine: clean and functional.',
      },
      {
        title: 'I design for people',
        text: 'Psychology makes me think about how people use, get frustrated and learn — not only about how the code works.',
      },
      {
        title: 'Done beats perfect',
        text: 'I would rather ship, measure and improve. My projects are in production, not in a drawer.',
      },
    ],
  },
  stack: {
    eyebrow: '02 — Stack',
    title: 'What I can use, and where I used it',
    lead: 'No percentage bars or invented levels. This is what actually appears in my projects.',
    groups: [
      {
        title: 'Languages',
        items: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
      },
      {
        title: 'Web & APIs',
        items: ['FastAPI', 'Next.js', 'REST APIs', 'fetch / async', 'discord.py', 'asyncio', 'SQLAlchemy'],
      },
      {
        title: 'Data & quality',
        items: ['SQLite', 'pytest', 'Git', 'GitHub', 'GitHub Pages', 'Semantic HTML'],
      },
      {
        title: 'Cloud & automation',
        items: ['Google Cloud Platform', 'Automation scripts', 'Bots', 'Permissions & workflows'],
      },
      {
        title: 'Systems & support',
        items: ['PC building', 'Diagnostics & tuning', 'Tech support', 'Office · Google Workspace'],
      },
      {
        title: 'With people',
        items: ['Active listening', 'Clear communication', 'Teamwork', 'Fast learner'],
      },
    ],
    note: '<b>Where it shows:</b> Quiqu.ia uses FastAPI, SQLAlchemy, Next.js and pytest. EclipseBot uses discord.py, asyncio and Google Cloud. <b>Now:</b> going deeper into TypeScript and automated testing.',
  },
  projects: {
    eyebrow: '03 — Projects',
    title: 'Two projects, two solved problems',
    lead: 'No copied tutorials: both are published and I still maintain them.',
    caseLabel: 'Case',
    study: {
      problem: 'The problem',
      built: 'What I built',
      learned: 'What I learned',
      stack: 'Stack',
      links: 'Links',
    },
    list: [
      {
        index: 'Case 01',
        title: 'Quiqu.ia — Valorant Coach',
        kicker: ['Full-stack', 'AI', 'Local-first'],
        summary:
          'Turns your match history into an improvement plan: per-round metrics, prioritized findings and practice drills, with a report in Spanish.',
        tags: ['Python', 'FastAPI', 'SQLite', 'Next.js', 'AI'],
        problem:
          'Valorant analyzers give you loose numbers. Knowing what to practise means crossing per-match and per-round metrics — ACS, KAST, first bloods, economy — and turning them into something actionable.',
        built: [
          'Syncs match history through the HenrikDev API, without duplicates.',
          'Computes per-match and per-round metrics.',
          'A rules engine that turns metrics into prioritized findings and practice drills, with reproducible results for the same match.',
          'Report in Spanish, with an optional language-model integration (OpenAI-compatible API) to rewrite it.',
          'REST API with FastAPI and SQLite (SQLAlchemy), Next.js web interface and unit tests with pytest.',
        ],
        learned:
          'That data is not advice: the value is in the logic that prioritizes it. And that separating API, database and interface makes each layer testable.',
      },
      {
        index: 'Case 02',
        title: 'EclipseBot — Voice channels',
        kicker: ['Bot', 'Real time', 'Cloud'],
        summary:
          'A Discord bot that creates and manages temporary voice channels. Everyone controls their own room with buttons, no moderators needed.',
        tags: ['Python', 'discord.py', 'asyncio', 'Google Cloud'],
        problem:
          'In large communities, temporary voice channels pile up empty, and creating one by hand depends on a moderator being available.',
        built: [
          'Automatic creation and deletion of channels on demand.',
          'Button panels and permission logic so each user can manage their own room.',
          'Persistent panels that keep working after a bot restart, using real-time events.',
          'Deployed on Google Cloud Platform to keep it running 24/7.',
        ],
        learned:
          'Async programming and real-time events: the bot reacts to what happens in the server, not only to commands. And that persistence is what separates a demo from a tool.',
      },
    ],
    othersTitle: 'Also',
    others: [
      {
        name: 'This portfolio',
        desc: 'Designed and coded by hand on Astro: editorial grid, a single accent colour and JavaScript only where it is needed.',
        linkLabel: 'Code',
        href: 'https://github.com/qSEBASp/mi-portafolio',
      },
      {
        name: 'Automation scripts',
        desc: 'Python and PowerShell scripts for repetitive tasks: files, permissions and workflows.',
        linkLabel: '',
        href: '',
      },
    ],
  },
  path: {
    eyebrow: '04 — Path',
    title: 'How I got here',
    lead: 'No shortcuts: academic training, self-taught learning and personal projects in parallel.',
    items: [
      {
        when: '2023 — now',
        title: 'Psychology',
        place: 'Fundación Universitaria Areandina · Bogotá',
        text: 'Behaviour analysis, active listening, structured problem solving and teamwork. In progress.',
      },
      {
        when: 'Ongoing',
        title: 'Self-taught development',
        place: 'Documentation, courses and personal projects',
        text: 'Python, JavaScript, REST APIs, Git and Google Cloud Platform, applied directly to real projects.',
      },
      {
        when: '2021 — 2022',
        title: 'Platzi courses',
        place: 'Basic Excel · Algorithms and logical thinking · Windows dev environment · Basic computing',
        text: 'The technical base that came before the projects.',
      },
      {
        when: 'Now',
        title: 'First professional opportunity',
        place: 'Development · Automation · QA',
        text: 'Looking for a team where I can contribute from day one and keep growing.',
      },
    ],
    foot: [
      { label: 'Languages', value: 'Spanish native · English intermediate' },
      { label: 'Availability', value: 'Remote · full-time, part-time or hourly' },
    ],
  },
  contact: {
    eyebrow: '05 — Contact',
    title: "Let's talk",
    statement: 'Looking for someone who <em>learns fast</em> and gets things done?',
    text: 'I am available for my first opportunity in development, automation or QA, and for one-off projects. I answer within 24 hours.',
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      message: 'Message',
      messagePlaceholder: 'Tell me what you need…',
      submit: 'Send message',
      note: 'The form goes straight to my inbox. No spam.',
      subject: 'Contact from the portfolio',
    },
    rows: {
      email: 'Email',
      phone: 'WhatsApp',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
  footer: {
    tagline: 'Designed and coded by hand. No templates, no bought themes.',
    navTitle: 'Navigation',
    docsTitle: 'Documents',
    metaTitle: 'Live',
    rights: '© 2026 Sebastián Quiqui Fonque',
    builtNote: 'Built with Astro + hand-written CSS',
  },
  palette: {
    open: 'Search',
    placeholder: 'Jump to a section, open a project or copy my email…',
    empty: 'No results. Try “projects”, “CV” or “email”.',
    groups: {
      go: 'Sections',
      projects: 'Projects',
      actions: 'Actions',
    },
    copyEmail: 'Copy email',
    copyPhone: 'Copy WhatsApp',
    lang: 'Cambiar a español',
    whatsapp: 'Open WhatsApp',
    github: 'Open GitHub',
    linkedin: 'Open LinkedIn',
    top: 'Go to top',
    hint: '↑↓ to move · ↵ to open · esc to close',
  },
};

export const ui = { es, en };
export type Lang = keyof typeof ui;
export type Copy = typeof es;
export const langs: Lang[] = ['es', 'en'];
