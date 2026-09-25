export const personalInfo = {
  name: 'Ruth',
  title: 'Frontend & Design Developer',
  role: 'Software Engineer',
  institution: 'Addis Ababa University',
  year: '4th-Year Software Engineering Student',
  location: 'Addis Ababa, Ethiopia',
  tagline: 'I build interfaces where thoughtful design meets functional code.',
  statement:
    'I like building things that start as an idea, a Figma frame, or a problem someone keeps running into — and turning them into something people can actually use.',
  bio: `I am a 4th-year Software Engineering student at Addis Ababa University with a deep focus on frontend development, UI/UX, and design-driven engineering. My passion lives at the intersection of how an application looks, feels, and works under the hood. Rather than sticking purely to theory, I thrive by designing interfaces in Figma and writing clean, reactive code across React, Flutter, and the MERN stack.`,
  // ── PHOTO CONFIGURATION ──────────────────────────────────────────────────
  // User photo from assets folder
  photoUrl: '/image.png',
  socials: {
    github: 'https://github.com/RuthInTech',
    linkedin: 'https://www.linkedin.com/in/ruth-seifu-19467b371/',
    email: 'rteklu582@gmail.com',
    portfolioUrl: 'https://ruth-portfolio.vercel.app',
  },
  // ── EMAIL DELIVERY CONFIGURATION ─────────────────────────────────────────
  // Contact form messages are delivered directly to this email:
  emailDelivery: {
    toEmail: 'rteklu582@gmail.com',
    // Optional: To receive emails directly from Vercel without running a Node backend,
    // paste a free Web3Forms Access Key from https://web3forms.com
    web3FormsKey: '',
  },
  currentFocus: [
    'Deepening React & MERN stack component architecture',
    'Exploring design systems & Figma token bridges',
    'Building accessible, fast, and responsive user experiences',
  ],
};

// ── HERO FEATURED PROJECT LINKS ──────────────────────────────────────────
// Direct project links shown in the Hero section.
// Add, edit, or remove your project links and live demo URLs below!
export const heroProjectLinks = [
  {
    id: 'pick-one-cause',
    title: 'Pick One Cause',
    tagline: 'Social-Impact Cause Discovery & Engagement Platform',
    badge: 'Social Impact',
    tech: 'React • Tailwind • REST',
    liveUrl: '', // Add your live deployment link here (e.g. 'https://pickonecause.vercel.app')
    githubUrl: 'https://github.com/RuthInTech',
    accentColor: '#C88346',
  },
  {
    id: 'crust-and-crumbs',
    title: 'Crust & Crumbs',
    tagline: 'Artisanal Bakery Ordering System — Figma to Code',
    badge: 'Internship Prototype',
    tech: 'React • Tailwind • Vite',
    liveUrl: 'https://internship-prototype-ashy.vercel.app/',
    githubUrl: 'https://github.com/RuthInTech',
    accentColor: '#BA9B7B',
  },
  {
    id: 'queueless',
    title: 'Queueless',
    tagline: 'Smart Queue Management for Physical Waiting Lines',
    badge: 'Hackathon (MERN)',
    tech: 'MongoDB • Express • React • Node',
    liveUrl: '', // Add live link when deployed
    githubUrl: 'https://github.com/RuthInTech',
    accentColor: '#7F5E42',
  },
  {
    id: 'flutter-weather-app',
    title: 'Flutter Weather App',
    tagline: 'Real-Time Atmospheric Forecast & Adaptive UI',
    badge: 'Cross-Platform Mobile',
    tech: 'Flutter • Dart • OpenWeather',
    liveUrl: 'https://weather-app-six-sigma-70.vercel.app/',
    githubUrl: 'https://github.com/RuthInTech',
    accentColor: '#5D7E54',
  },
];

export const skillsData = {
  frontend: [
    { name: 'React', level: 'Core Stack', desc: 'Building modular component trees, custom hooks, and responsive interfaces' },
    { name: 'Next.js', level: 'Framework', desc: 'Server components, client-side routing, and optimized web apps' },
    { name: 'State Management (Redux / Context)', level: 'State Architecture', desc: 'Predictable state flow, context providers, and action workflows' },
    { name: 'JavaScript (ES6+)', level: 'Core Language', desc: 'Modern async/await, closures, DOM manipulation' },
    { name: 'HTML5 & Semantic Markup', level: 'Foundation', desc: 'Accessible structures, semantic hierarchy, SEO' },
    { name: 'CSS3 & Responsive Design', level: 'Styling Craft', desc: 'Flexbox, CSS Grid, animations, mobile-first design' },
    { name: 'Tailwind CSS', level: 'Utility Styling', desc: 'Rapid prototyping, custom theme tokens, dark mode' },
    { name: 'Component-Based UI', level: 'Architecture', desc: 'Reusable, testable, atomic design principles' },
  ],
  backend: [
    { name: 'Node.js', level: 'Runtime', desc: 'Event-driven server logic and micro-utilities' },
    { name: 'Express.js', level: 'Framework', desc: 'RESTful API routing, middleware pipelines, error handling' },
    { name: 'MongoDB', level: 'Database', desc: 'NoSQL document modeling, indexing, queries' },
    { name: 'Mongoose', level: 'ODM', desc: 'Schema validation, relationships, pre/post hooks' },
    { name: 'REST APIs', level: 'Integration', desc: 'Clean endpoint contracts, status codes, payload design' },
  ],
  mobile: [
    { name: 'Flutter', level: 'Cross-Platform', desc: 'Stateful widgets, smooth animations, native feel' },
    { name: 'Dart', level: 'Language', desc: 'Object-oriented programming, async futures, streams' },
    { name: 'Supabase', level: 'Backend Service', desc: 'Auth, relational data, and realtime hooks' },
    { name: 'MongoDB Atlas', level: 'Cloud Database', desc: 'Managed cloud clusters and secure connection strings' },
    { name: 'Authentication & Deployments', level: 'DevOps & Auth', desc: 'JWT fundamentals, Vercel, and Render workflows' },
  ],
  design: [
    { name: 'Figma', level: 'Design Hub', desc: 'Wireframing, high-fidelity mockups, auto-layout, interactive prototypes' },
    { name: 'UI/UX Design', level: 'Methodology', desc: 'User flows, information architecture, visual hierarchy, ergonomics' },
    { name: 'Prototyping', level: 'Interactive', desc: 'Clickable mockups, micro-interaction transitions' },
    { name: 'Design Systems', level: 'Systems Thinking', desc: 'Color palettes, typography scales, design tokens' },
    { name: 'Responsive Layouts', level: 'Layout Strategy', desc: 'Breakpoints, adaptive spacing, touch targets' },
    { name: 'Design → Code Translation', level: 'Specialty', desc: 'Bridging Figma frames directly into pixel-precise code' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 'Version Control', desc: 'Branching, PRs, collaborative workflows' },
    { name: 'VS Code', level: 'Development IDE', desc: 'Extensions, linting, snippets, debugging' },
    { name: 'Vite', level: 'Build Tool', desc: 'Lightning-fast HMR and optimized bundler' },
    { name: 'npm & pnpm', level: 'Package Managers', desc: 'Dependency management and workspace scripts' },
    { name: 'Linux / Ubuntu', level: 'OS Environment', desc: 'Terminal navigation, bash scripting, dev tooling' },
  ],
};

export const featuredProjects = [
  {
    id: 'pick-one-cause',
    title: 'Pick One Cause',
    tagline: 'Social-Impact Cause Discovery & Engagement Platform',
    category: 'Featured',
    badge: 'Social Impact & Product Thinking',
    description:
      'A product-focused web platform designed to help people discover and engage with causes they care about most. Built to solve real-world engagement barriers through user-centered storytelling.',
    fullStory:
      'Pick One Cause is born from a desire to solve real-world problems through thoughtful digital experiences. Rather than treating social impact as a dry list of charities, this project balances product thinking, intuitive categorization, and accessible frontend engineering so visitors can seamlessly discover grassroots causes, understand their mission, and take action.',
    problemStatement:
      'People frequently want to contribute to meaningful social causes, but encounter overwhelming choices, opaque organization missions, and clunky donation interfaces that cause drop-offs.',
    solutionApproach:
      'Designed a clean, welcoming discovery journey with category badges, high-contrast typography, and concise mission briefs that make finding and supporting causes transparent and intuitive.',
    keyFeatures: [
      'Cause exploration by categories and urgency',
      'User-centered storytelling and clear call-to-actions',
      'Accessible, high-contrast, responsive interface',
      'Clean component modularity designed for community contributions',
      'Fast client-side navigation and search filtering',
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Figma', 'REST APIs', 'Responsive Design'],
    githubUrl: 'https://github.com/RuthInTech',
    liveUrl: '',
    figmaMockup: 'Figma Component Hierarchy & High-Fidelity Prototype',
    highlights: [
      'User Journey & Wireframing in Figma',
      'Accessibility & Contrast Hierarchy',
      'Frontend Component Modularity',
    ],
    coffeeVibe: 'Ethiopian Yirgacheffe — Bright, purposeful, uplifting',
  },
  {
    id: 'crust-and-crumbs',
    title: 'Crust & Crumbs',
    tagline: 'Artisanal Bakery Ordering System — From Figma to Production UI',
    category: 'Internship',
    badge: 'Figma to Code Prototype',
    description:
      'A warm, visually appealing bakery ordering prototype created during an internship assignment. Demonstrates end-to-end execution: UI/UX design in Figma turned into a responsive modern web application.',
    fullStory:
      'Created as an internship prototype assignment to demonstrate how modern frontend engineering and thoughtful UI design merge. Ruth conceptualized the brand aesthetic in Figma — warm bakery aromas, tactile product cards, intuitive category selectors — and then engineered the entire application with modular state management and responsive component architecture.',
    problemStatement:
      'Local artisanal bakeries struggle with generic ordering platforms that fail to convey the warmth, freshness, and craft of their baked goods while complicating mobile ordering.',
    solutionApproach:
      'Engineered a cozy, responsive web app with a reactive cart drawer, real-time total calculation, search filter, and reusable modern components deployed live on Vercel.',
    keyFeatures: [
      'Bakery hero section with warm atmosphere and brand story',
      'Category-based menu browsing and real-time search',
      'Reactive shopping cart with item quantity updates and total calculation',
      'Smooth drawer animations and tactile micro-interactions',
      'Responsive mobile navigation tailored for effortless one-handed ordering',
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Figma', 'Vite', 'CSS3'],
    githubUrl: 'https://github.com/RuthInTech',
    liveUrl: 'https://internship-prototype-ashy.vercel.app/',
    figmaMockup: 'Full Bakery Design System & Component Library in Figma',
    highlights: [
      'UI/UX Design in Figma to Pixel-Perfect Code',
      'State Management & Reactive Cart Store',
      'Live Production Deployment on Vercel',
    ],
    coffeeVibe: 'Sidama Medium Roast — Sweet pastry notes, warm & comforting',
  },
  {
    id: 'queueless',
    title: 'Queueless',
    tagline: 'Smart Queue Management for Physical Waiting Lines',
    category: 'Hackathon',
    badge: 'MERN Stack Hackathon Project',
    description:
      'A hackathon-born full-stack web application designed around solving physical queues and waiting congestion in customer centers and clinics using the MERN stack.',
    fullStory:
      'Conceived during a high-energy hackathon to tackle a frustrating everyday reality in urban spaces: hours lost standing in disorganized queues. Queueless provides digital ticket generation, live queue tracking, and an administrative dashboard for desk operators to manage service flow seamlessly.',
    problemStatement:
      'Physical lines in service centers waste customer time, cause physical exhaustion, and create chaotic counter environments for service operators.',
    solutionApproach:
      'Built a full-stack MERN solution with ticket generation, real-time queue position calculation, and an intuitive operator dispatch panel to streamline customer intake.',
    keyFeatures: [
      'Virtual queue token issuance for walk-in and remote visitors',
      'Real-time queue tracking dashboard with estimated wait times',
      'Operator service station interface for calling next tickets',
      'MERN backend architecture handling concurrent queue updates',
      'Designed under rapid hackathon constraints with high practical utility',
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'Tailwind CSS'],
    githubUrl: 'https://github.com/RuthInTech',
    liveUrl: '',
    figmaMockup: 'Operator & User Dashboard UI Wireframes',
    highlights: [
      'Full-Stack MERN Architecture',
      'Rapid Hackathon Prototype Under Constraints',
      'Practical Business & Utility Focus',
    ],
    coffeeVibe: 'Harrar Dark Roast — Bold, punchy, high-energy hackathon fuel',
  },
  {
    id: 'flutter-weather-app',
    title: 'Flutter Weather App',
    tagline: 'Real-Time Atmospheric Forecast & Adaptive Flutter UI',
    category: 'Mobile',
    badge: 'Cross-Platform Mobile App',
    description:
      'A weather application built using Flutter, Dart, and OpenWeather API. Features dynamic atmospheric visuals, hourly forecasts, and responsive layouts across mobile viewports.',
    fullStory:
      'Built to explore asynchronous API integration and reactive stateful UI design in Flutter. Ruth architected clean widget components that adapt their visual atmosphere depending on whether it is raining, sunny, or dusk in the searched city.',
    problemStatement:
      'Weather applications often cram excessive unreadable data onto the screen without giving users an immediate visual snapshot of current conditions.',
    solutionApproach:
      'Constructed a clean, card-based interface with high visual readability, intuitive temperature/humidity metric cards, and fast multi-city search powered by OpenWeather API.',
    keyFeatures: [
      'Live atmospheric conditions via OpenWeather API',
      'Dynamic visual themes shifting with weather conditions',
      'Multi-city search with cached recent lookups',
      'Adaptive layout scaling effortlessly across various device viewports',
    ],
    technologies: ['Flutter', 'Dart', 'OpenWeather API', 'HTTP Package'],
    githubUrl: 'https://github.com/RuthInTech',
    liveUrl: 'https://weather-app-six-sigma-70.vercel.app/',
    figmaMockup: 'Mobile Layout & Card Elevation Guidelines',
    highlights: [
      'Asynchronous REST API Integration',
      'Cross-Platform Responsive Mobile UI',
      'Live Web Demo via Flutter Web on Vercel',
    ],
    coffeeVibe: 'Guji Light Roast — Crisp, refreshing, clean balance',
  },
  {
    id: 'bmi-calculator',
    title: 'BMI Calculator',
    tagline: 'Tactile Health Metric Calculator with Custom Flutter Widgets',
    category: 'Mobile',
    badge: 'Mobile Health Tool',
    description:
      'A Flutter BMI calculator application created as part of Ruth’s Flutter development learning journey. Features tactile sliders, gender selectors, and instant health assessment cards.',
    fullStory:
      'Created while mastering Flutter widget architecture, modular theme constants, and stateful interaction design. It prioritizes pleasant user feedback, intuitive slider physics, and clear visual interpretations of health indices.',
    problemStatement:
      'Most BMI calculators are simple rigid tables that do not offer interactive feedback or visual explanations of what the calculated index represents.',
    solutionApproach:
      'Implemented custom slider controls, reactive state calculation, and visual health interpretation cards with clear color-coded zones.',
    keyFeatures: [
      'Interactive height and weight slider selectors',
      'Instantaneous metric calculation with categoric interpretations',
      'Consistent design system tokens (colors, margins, card elevations)',
      'Custom bottom navigation and reusable card components',
    ],
    technologies: ['Flutter', 'Dart', 'Stateful Widgets', 'Material Design'],
    githubUrl: 'https://github.com/RuthInTech/BMI_flutter',
    liveUrl: '',
    figmaMockup: 'Component Architecture & Slider Physics',
    highlights: [
      'Clean Modular Widget Architecture',
      'Published Open Source on GitHub',
      'Hands-on Mobile Learning Journey',
    ],
    coffeeVibe: 'Limu Roast — Smooth, balanced, everyday essential',
  },
];

export const labExperiments = [
  {
    title: 'Node.js + Express REST APIs',
    description: 'Exploring route controllers, middleware error handling, and structured REST API contracts.',
    tech: ['Node.js', 'Express.js', 'REST'],
    status: 'Active Lab',
    type: 'Backend',
  },
  {
    title: 'MongoDB & Mongoose Schemas',
    description: 'Data modeling, schema validations, query optimizations, and Atlas database connections.',
    tech: ['MongoDB', 'Mongoose', 'Atlas'],
    status: 'Active Lab',
    type: 'Database',
  },
  {
    title: 'EJS Server-Side Rendered Apps',
    description: 'Experimenting with dynamic server-rendered HTML templates and partials.',
    tech: ['EJS', 'Express', 'HTML5'],
    status: 'Completed Exploration',
    type: 'Full-Stack',
  },
  {
    title: 'API-Driven UI Dashboards',
    description: 'Consuming third-party public APIs and rendering clean, cached client-side dashboards.',
    tech: ['JavaScript', 'Fetch API', 'CSS Grid'],
    status: 'Continuous',
    type: 'Frontend',
  },
  {
    title: 'React State & Context Experiments',
    description: 'Testing custom hooks, reducer patterns, action workflows, and persistent local storage sync.',
    tech: ['React', 'Custom Hooks', 'Vite'],
    status: 'Lab Project',
    type: 'Frontend',
  },
  {
    title: 'Figma Warm UI Design System',
    description: 'Exploring coffee and earth-tone palettes, auto-layout components, and design token naming.',
    tech: ['Figma', 'UI/UX', 'Design Tokens'],
    status: 'Design Lab',
    type: 'Design',
  },
];

export const experiences = [
  {
    role: 'Flutter Developer Intern',
    organization: 'Sof Omar Technologies',
    period: 'Internship',
    type: 'Mobile Development',
    location: 'Ethiopia',
    description:
      'Gained hands-on professional experience building mobile applications, working within team development environments, and turning feature requests into working Flutter code.',
    bullets: [
      'Developed and refined cross-platform mobile application user interfaces in Flutter & Dart',
      'Integrated backend REST APIs for dynamic application data fetching and authentication flows',
      'Maintained collaborative Git/GitHub workflows, code reviews, and sprint tasks',
      'Learned directly through team feedback, structured debugging, and real-world deployment challenges',
    ],
    tags: ['Flutter', 'Dart', 'REST API', 'Git & GitHub', 'Team Collaboration'],
  },
  {
    role: 'Frontend / UI Development Internship',
    organization: 'Internship Assignment & Project Work',
    period: 'Internship Project',
    type: 'Frontend & UI/UX',
    location: 'Remote / Project-based',
    description:
      'Focused on taking product concepts from initial Figma wireframes to full functional frontend prototypes, specifically delivering the Crust & Crumbs bakery ordering system.',
    bullets: [
      'Crafted high-fidelity UI/UX mockups, typography systems, and interaction flows in Figma',
      'Architected reusable component hierarchy using React and Vite for high performance',
      'Implemented responsive state management to handle multi-item cart states, quantity mutations, and totals',
      'Turned complex product requirements into an intuitive, responsive prototype deployed live on Vercel',
    ],
    tags: ['React', 'Tailwind CSS', 'Figma', 'Vite', 'Component Architecture', 'Vercel'],
  },
  {
    role: 'BSc in Software Engineering (4th Year)',
    organization: 'Addis Ababa University (AAU)',
    period: '2021 – Present (Graduating 2026)',
    type: 'Education',
    location: 'Addis Ababa, Ethiopia',
    description:
      'Pursuing software engineering with academic rigor in data structures, algorithms, software architecture, database management, and web engineering.',
    bullets: [
      'Active participant in university developer communities, peer study groups, and hackathons',
      'Bridging academic software principles with modern industry web frameworks (MERN, React, Flutter)',
      'Mentoring junior students in web fundamentals and UI design principles',
    ],
    tags: ['Software Engineering', 'Algorithms', 'Databases', 'Web Architecture', 'AAU'],
  },
];

export const ethiopianRoasts = [
  {
    name: 'Yirgacheffe',
    region: 'Gedeo Zone, Southern Ethiopia',
    notes: 'Floral, jasmine, lemongrass, bright acidity',
    vibe: 'Ideal for creative coding and design flow',
    color: '#D97736',
  },
  {
    name: 'Sidama',
    region: 'Great Rift Valley, Ethiopia',
    notes: 'Berry sweetness, apricot, chocolate finish',
    vibe: 'Smooth and balanced for component architecture',
    color: '#C88346',
  },
  {
    name: 'Harrar',
    region: 'Eastern Highlands, Ethiopia',
    notes: 'Wild blueberry, mocha, heavy winey body',
    vibe: 'Bold and punchy for late-night hackathons',
    color: '#7F5E42',
  },
  {
    name: 'Guji',
    region: 'Oromia Region, Southern Ethiopia',
    notes: 'Peach nectar, honey, bergamot',
    vibe: 'Crisp and elegant for pixel-perfect polishing',
    color: '#BA9B7B',
  },
];
