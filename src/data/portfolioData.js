// ═══════════════════════════════════════════════════════════
// PORTFOLIO DATA — Single source of truth for all content
// ═══════════════════════════════════════════════════════════

export const personalInfo = {
  name: 'Lokesh Adireddi',
  logoInitials: 'LA',
  designations: [
    'Java Full Stack Developer',
    'React & Spring Boot Engineer',
    'Generative AI Developer',
  ],
  email: 'lokeshadireddim201@gmail.com',
  phone: '+91 9346680419',
  location: 'Hyderabad, Telangana, India',
  github: 'https://github.com/allkp',
  linkedin: 'https://www.linkedin.com/in/lokesh-adireddi',
  resumeUrl: '/images/resume/Lokesh_Adireddy.pdf',
};

export const landingIntro = `I am a Java Full Stack Developer with more than 2 years of experience building scalable, enterprise-grade web applications and AI-driven developer tools. Specializing in Java, Spring Boot, React, and TypeScript, I bridge modern frontend interfaces with resilient backend architectures and legacy SOAP-to-REST integrations. Currently at XIUS Corp, my focus spans cloud-native Kubernetes deployments and local Generative AI pipelines using Spring AI, LangChain4j, and pgvector. Explore my work below to see how I engineer secure, high-performance software solutions.`;

export const aboutSummary = `Currently working as a Java Full Stack Developer at XIUS Corp Pvt. Ltd. in Hyderabad, I design and deliver end-to-end telecom self-service and corporate portals. My core technical expertise covers Spring Boot, Spring Security (JWT/RBAC), React, TypeScript, and Redux Toolkit, alongside Docker and Kubernetes for container orchestration. Beyond traditional full-stack engineering, I actively build Retrieval-Augmented Generation (RAG) pipelines and autonomous AI code-review tools powered by Spring AI, LangChain4j, Ollama, and PostgreSQL (pgvector). Holding a B.Tech degree from JNTUK, I bring an analytical, problem-solving mindset to architecting clean, maintainable systems that reduce development friction and scale reliably.`;

export const mission = `To architect secure, high-performing full-stack applications and intelligent AI workflows that solve complex enterprise challenges and streamline developer productivity.`;

export const vision = `To continuously evolve at the intersection of cloud-native microservices and Generative AI, building resilient software systems that deliver measurable business impact.`;

export const experience = [
  {
    designation: 'Java Full Stack Developer',
    company: 'XIUS Corp Pvt. Ltd.',
    type: 'Full-Time',
    location: 'Hyderabad, India',
    duration: 'Nov 2024 – Present',
    responsibilities: [
      'Develop and maintain enterprise telecom self-service and corporate portals using React, TypeScript, Redux Toolkit, and Spring Boot for subscriber, SIM, and account management.',
      'Architected a layered application structure spanning frontend, Node/Spring proxies, API gateways, and backend services with centralized exception handling and DTO mapping.',
      'Implemented end-to-end JWT authentication, role-based access control (RBAC), and SLF4J logging across multiple application modules.',
      'Managed Docker containerization, Kubernetes deployments (HPA, ConfigMaps, CPU/memory resource tuning), and local RAG pipelines using Spring AI, LangChain4j, Ollama, and pgvector.',
    ],
    achievements: [
      'Built reusable React components and standardized Redux Toolkit state-management patterns, reducing UI development time for new features by approximately 30%.',
      'Engineered a Spring Boot SOAP-to-REST API gateway that enabled seamless integration between modern React frontends and legacy telecom SOAP services without protocol-level rewrites.',
    ],
  },
];

export const education = [
  {
    qualification: 'B.Tech in Mechanical Engineering',
    institution: 'Aditya Institute of Technology & Management (JNTUK)',
    duration: 'Graduated Apr 2023',
    mode: 'Full-time',
    highlights: [
      'Developed strong analytical, quantitative, and systems-engineering foundations.',
      'Transitioned engineering problem-solving methodologies into enterprise software architecture and full-stack web development.',
      'Proficient in English and Telugu for cross-functional technical collaboration.',
    ],
  },
  {
    qualification: 'Diploma in Mechanical Engineering',
    institution: 'Government Polytechnic College, Vijayawada',
    duration: '2017 – 2020',
    mode: '75% · Mechanical Engineering',
    highlights: ['Completed a Diploma in Mechanical Engineering at Government Polytechnic College, Vijayawada.'],
  },
  {
    qualification: 'Secondary Education (SSC)',
    institution: 'ZPHS Kasipuram',
    duration: '2012 – 2017',
    mode: '80% · SSC',
    highlights: ['Completed secondary education at ZPHS Kasipuram, Devarapalli - 531030.'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Corporate-UI',
    subtitle: 'Enterprise Corporate Portal',
    type: 'Enterprise Web Application',
    duration: '2025 – 2026',
    description:
      'An enterprise corporate management portal built with React, Vite, and Redux Toolkit, configured for deployment under the /corporate base path with Nginx and Spring Boot REST APIs.',
    outcomes: [
      'Implemented centralized state management and client-side routing for complex enterprise workflows.',
      'Secured user sessions with JWT authentication and granular role/privilege access controls.',
      'Optimized production builds and routing stability under custom base-path deployments.',
    ],
    technologies: ['React', 'Vite', 'Redux Toolkit', 'React Router', 'Spring Boot', 'JWT', 'REST APIs', 'Nginx'],
  },
  {
    id: 2,
    title: 'Selfcare UI',
    subtitle: 'Telecom Customer Portal',
    type: 'Customer Self-Service Platform',
    duration: '2025 – 2026',
    description:
      'A customer-facing telecom portal enabling subscribers to manage accounts and services with multi-language support, strict form validation, and automated session timeout controls.',
    outcomes: [
      'Integrated i18next internationalization to support diverse regional user bases.',
      'Built resilient form validation workflows using React Hook Form and Yup.',
      'Connected the React frontend to legacy backend infrastructure via an authenticated Spring Boot SOAP proxy.',
    ],
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'i18next', 'Spring Boot', 'SOAP APIs'],
  },
  {
    id: 3,
    title: 'MspApiAuthGW',
    subtitle: 'Middleware API Gateway',
    type: 'Backend Middleware & Integration',
    duration: '2025 – 2026',
    description:
      'A high-reliability Spring Boot middleware gateway designed to modernize legacy telecom systems by exposing SOAP web services as clean, secure REST endpoints.',
    outcomes: [
      'Eliminated frontend protocol bottlenecks through automated SOAP-to-REST translation and DTO mapping.',
      'Standardized error responses across services using centralized exception handling.',
      'Enforced API-level security using Spring Security.',
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'SOAP', 'REST', 'Oracle'],
  },
  {
    id: 4,
    title: 'Customer Care UI',
    subtitle: 'Internal Support Operations Portal',
    type: 'Internal Support Operations Portal',
    duration: '2025',
    description:
      'A real-time support-agent dashboard designed for customer care teams to inspect subscriber profiles, manage tickets, and process service requests efficiently.',
    outcomes: [
      'Streamlined agent workflows with real-time state updates and optimized Redux Toolkit stores.',
      'Reduced ticket resolution friction by unifying subscriber profile and service request views.',
      'Integrated seamlessly with Spring Boot REST APIs for rapid data retrieval.',
    ],
    technologies: ['React', 'Redux Toolkit', 'Spring Boot', 'REST APIs'],
  },
  {
    id: 5,
    title: 'Autonomous AI Code Reviewer',
    subtitle: 'Generative AI Developer Tool',
    type: 'Generative AI Developer Tool',
    duration: '2026',
    description:
      'An automated, event-driven code review agent triggered by Bitbucket webhooks that analyzes commit diffs for security vulnerabilities, bugs, and style compliance using local LLMs.',
    outcomes: [
      'Automated daily code critique using Spring AI, LangChain4j, Ollama, and pgvector semantic context.',
      'Eliminated cloud API costs and preserved code privacy by running inference on local LLMs.',
      'Configured automated email reporting via Outlook SMTP to deliver actionable feedback directly to commit authors.',
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'Spring AI', 'LangChain4j', 'Ollama', 'pgvector', 'Bitbucket Webhooks', 'SMTP'],
  },
  {
    id: 6,
    title: 'React Proxy',
    subtitle: 'Security Middleware',
    type: 'Backend-for-Frontend (BFF) Security Layer',
    duration: '2025',
    description:
      'A dedicated Node.js and Express security proxy sitting between React applications and backend API gateways to manage tokens, enforce RBAC, and handle CORS policies.',
    outcomes: [
      'Decoupled frontend UI code from sensitive token-handling logic.',
      'Enforced strict CORS and role-based routing rules before requests reached core backend services.',
      'Improved session security across multiple enterprise web portals.',
    ],
    technologies: ['Node.js', 'Express', 'React', 'JWT', 'CORS'],
  },
];

export const skillCategories = [
  {
    title: 'Backend & Languages',
    icon: 'Server',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Spring Security', level: 80 },
      { name: 'RESTful APIs & Microservices', level: 85 },
      { name: 'SOAP Web Services', level: 80 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: 'Monitor',
    skills: [
      { name: 'React', level: 85 },
      { name: 'TypeScript & JavaScript', level: 85 },
      { name: 'Redux Toolkit', level: 85 },
      { name: 'HTML5, CSS3 & Bootstrap', level: 85 },
      { name: 'React Hook Form, Yup & i18next', level: 80 },
    ],
  },
  {
    title: 'Generative AI & RAG',
    icon: 'Brain',
    skills: [
      { name: 'Spring AI & LangChain4j', level: 80 },
      { name: 'Ollama / Local LLMs', level: 80 },
      { name: 'RAG & Semantic Retrieval', level: 80 },
      { name: 'pgvector', level: 75 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: 'Cloud',
    skills: [
      { name: 'Docker', level: 75 },
      { name: 'Kubernetes (Deployments, HPA, ConfigMaps)', level: 75 },
      { name: 'Argo CD', level: 70 },
      { name: 'Image CI', level: 70 },
      { name: 'AWS (S3, EC2, IAM)', level: 70 },
      { name: 'Nginx', level: 75 },
    ],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'Oracle', level: 75 },
    ],
  },
  {
    title: 'Security & Tooling',
    icon: 'Shield',
    skills: [
      { name: 'JWT, RBAC & CORS', level: 85 },
      { name: 'Git & Bitbucket', level: 85 },
      { name: 'Jira & Agile/Scrum', level: 80 },
    ],
  },
];

export const achievementStats = [
  { label: 'Years Experience', value: 2, suffix: '+' },
  { label: 'Enterprise & AI Projects', value: 6, suffix: '+' },
  { label: 'Faster UI Delivery', value: 30, suffix: '%' },
  { label: 'Sports Certificates', value: 5, suffix: '' },
];

export const achievements = [
  {
    category: 'Professional',
    year: 2025,
    title: 'UI Architecture Optimization',
    institution: 'XIUS Corp Pvt. Ltd.',
    description:
      'Engineered modular React and Redux Toolkit component patterns that accelerated new feature UI development by ~30% across enterprise portals.',
    image: null,
    icon: 'Code',
  },
  {
    category: 'Professional',
    year: 2026,
    title: 'Autonomous AI Code Review Pipeline',
    institution: 'XIUS Corp Pvt. Ltd.',
    description:
      'Built an internal webhook-driven AI code reviewer using Spring AI, LangChain4j, and local Ollama models to automate commit security and quality checks.',
    image: null,
    icon: 'Bot',
  },
  {
    category: 'Sports & Extracurricular',
    year: 2023,
    title: 'National & State Ball Badminton Recognition',
    institution: 'Inter-University / State Sports',
    description:
      'Awarded 1 National-level and 4 State-level certificates in competitive Ball Badminton, demonstrating discipline and teamwork.',
    image: '/images/achievements/ball_badminton1.jpg',
    gallery: [
      '/images/achievements/ball_badminton2.jpg',
      '/images/achievements/ball_badminton3.jpg',
      '/images/achievements/ball_badminton4.jpg',
    ],
    icon: 'Trophy',
  },
];

export const navLinks = [
  { label: 'Home', href: '#landing' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];
