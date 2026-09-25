export const defaultProjects = [
  {
    slug: 'pick-one-cause',
    title: 'Pick One Cause',
    subtitle: 'Social-Impact Cause Discovery & Engagement Platform',
    category: 'Featured',
    description: 'A product-focused web platform designed to help people discover, explore, and actively engage with causes they care about most. Built with user-centered design and accessibility at its core.',
    fullDescription: 'Pick One Cause is born from a desire to solve real-world problems through thoughtful digital experiences. Rather than treating social impact as an afterthought, this project balances product thinking, intuitive categorization, and accessible frontend engineering so users can seamlessly find causes, understand their mission, and take meaningful action.',
    keyFeatures: [
      'Cause exploration by categories and urgency',
      'User-centered storytelling and clear call-to-actions',
      'Accessible, high-contrast, responsive interface',
      'Clean component modularity designed for community contributions',
      'Fast client-side navigation and search filtering'
    ],
    technologies: ['React', 'JavaScript', 'CSS Modules / Tailwind', 'Figma', 'REST APIs', 'Responsive Design'],
    githubUrl: 'https://github.com/RuthInTech',
    liveUrl: '',
    figmaUrl: '',
    featured: true,
    order: 1,
    thumbnail: 'pick-one-cause',
    highlights: [
      'Product Thinking & User Journey Mapping',
      'Accessibility & Contrast Hierarchy',
      'Frontend Component Modularity'
    ]
  },
  {
    slug: 'crust-and-crumbs',
    title: 'Crust & Crumbs',
    subtitle: 'Bakery Ordering Prototype — From Figma to Code',
    category: 'Internship',
    description: 'A cozy, visually appealing bakery ordering prototype developed during an internship assignment. Translates handcrafted Figma UI/UX designs into a snappy, responsive web app.',
    fullDescription: 'Created as an end-to-end frontend challenge: taking product requirements and turning them into an artisanal e-commerce experience. Ruth designed the complete aesthetic in Figma — warm bakery tones, tactile cards, intuitive cart drawers — and implemented every interaction with modular component architecture.',
    keyFeatures: [
      'Artisanal bakery hero and seasonal showcase',
      'Category-based menu browsing and real-time search',
      'Reactive shopping cart with live item counts and total calculation',
      'Smooth drawer transitions and tactile micro-interactions',
      'Fully responsive navigation tailored for mobile food ordering'
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Figma', 'Vite', 'CSS3'],
    githubUrl: 'https://github.com/RuthInTech',
    liveUrl: 'https://internship-prototype-ashy.vercel.app/',
    figmaUrl: '',
    featured: true,
    order: 2,
    thumbnail: 'crust-and-crumbs',
    highlights: [
      'UI/UX Design in Figma to Pixel-Perfect Code',
      'Reactive Cart & Component State Architecture',
      'Deployed on Vercel'
    ]
  },
  {
    slug: 'queueless',
    title: 'Queueless',
    subtitle: 'Smart Queue Management for Real-World Waiting Lines',
    category: 'Hackathon',
    description: 'A hackathon-born full-stack web application aimed at eliminating congested physical queues in clinics, customer centers, and service counters using the MERN stack.',
    fullDescription: 'Conceived during a rapid-fire hackathon to tackle a frustrating everyday reality in urban centers: hours lost standing in disorganized queues. Queueless provides digital ticket generation, live queue status polling, and an administrative dashboard for desk operators to manage service flow seamlessly.',
    keyFeatures: [
      'Virtual queue token issuance for walk-in and remote visitors',
      'Real-time queue tracking dashboard with estimated wait times',
      'Operator service station interface for calling next tickets',
      'MERN backend architecture handling concurrent queue updates',
      'Designed under rapid hackathon constraints with high practical utility'
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs'],
    githubUrl: 'https://github.com/RuthInTech',
    liveUrl: '',
    figmaUrl: '',
    featured: true,
    order: 3,
    thumbnail: 'queueless',
    highlights: [
      'Full-Stack MERN Architecture',
      'Hackathon Rapid Prototyping',
      'Practical Business & Utility Focus'
    ]
  },
  {
    slug: 'flutter-weather-app',
    title: 'Flutter Weather App',
    subtitle: 'Real-Time Atmospheric Forecast & Dynamic Visuals',
    category: 'Mobile',
    description: 'A sleek, responsive mobile weather application built with Flutter & Dart, pulling real-time weather metrics from OpenWeather API with dynamic time-of-day themes.',
    fullDescription: 'Developed to master asynchronous network requests and fluid cross-platform UI in Flutter. Features condition-based background transitions, hourly forecasts, humidity, wind indicators, and clean stateful widget organization.',
    keyFeatures: [
      'Live atmospheric conditions via OpenWeather API',
      'Dynamic color schemes shifting with sunrise, daylight, and dusk',
      'Multi-city search with cached recent lookups',
      'Adaptive layout scaling effortlessly across various device viewports'
    ],
    technologies: ['Flutter', 'Dart', 'OpenWeather API', 'HTTP Package'],
    githubUrl: 'https://github.com/RuthInTech',
    liveUrl: 'https://weather-app-six-sigma-70.vercel.app/',
    figmaUrl: '',
    featured: true,
    order: 4,
    thumbnail: 'weather-app',
    highlights: [
      'Asynchronous REST API Integration',
      'Cross-Platform Responsive Mobile UI',
      'Live Web Demo via Flutter Web'
    ]
  },
  {
    slug: 'bmi-calculator',
    title: 'BMI Calculator',
    subtitle: 'Interactive Health Metric App with Custom Flutter Widgets',
    category: 'Mobile',
    description: 'An interactive mobile health utility built with Flutter and Dart, featuring tactile slider controls, gender toggles, and customized health assessment ranges.',
    fullDescription: 'A project designed during Ruth’s deep dive into Flutter widget architecture, modular theme constants, and stateful interaction design. It prioritizes pleasant user feedback, intuitive slider physics, and clear visual interpretations of health indices.',
    keyFeatures: [
      'Interactive height and weight slider selectors',
      'Instantaneous metric calculation with categoric interpretations',
      'Consistent design system tokens (colors, margins, card elevations)',
      'Custom bottom navigation and reusable card components'
    ],
    technologies: ['Flutter', 'Dart', 'Stateful Widgets', 'Material Design'],
    githubUrl: 'https://github.com/RuthInTech/BMI_flutter',
    liveUrl: '',
    figmaUrl: '',
    featured: true,
    order: 5,
    thumbnail: 'bmi-calculator',
    highlights: [
      'Clean Modular Widget Architecture',
      'Published Open Source on GitHub',
      'Hands-on Mobile Learning Journey'
    ]
  },
  {
    slug: 'mern-api-experiments',
    title: 'Express & MongoDB Labs',
    subtitle: 'Backend Architecture & RESTful Experiments',
    category: 'Lab Experiment',
    description: 'A collection of backend services exploring Mongoose schemas, JWT authentication workflows, CRUD endpoints, and middleware pipeline design.',
    fullDescription: 'Hands-on laboratory repositories where Ruth tests backend paradigms: structuring controllers, validating schemas, handling errors gracefully, and connecting Node services to MongoDB Atlas.',
    keyFeatures: [
      'Modular route handlers & controllers',
      'Mongoose schema validation & indexing',
      'Environment configuration and security headers'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Postman'],
    githubUrl: 'https://github.com/RuthInTech',
    liveUrl: '',
    figmaUrl: '',
    featured: false,
    order: 6,
    thumbnail: 'api-labs',
    highlights: ['Backend Schema Engineering', 'API Design & Testing']
  },
  {
    slug: 'figma-design-tokens-lab',
    title: 'Warm UI Design System',
    subtitle: 'Figma Explorations into Design Tokens & Component Libraries',
    category: 'Lab Experiment',
    description: 'Design system experiments exploring warm earth-toned palettes, typography scales, accessibility ratios, and auto-layout components ready for code translation.',
    fullDescription: 'Ruth’s digital sketchbook in Figma where she iterates on typography pairings (serif headers with modern sans), coffee/cream palette balancing, and component states (hover, focus, disabled, active).',
    keyFeatures: [
      'Design token naming conventions',
      'Auto-layout responsive card variants',
      'Accessible WCAG color contrast pairings'
    ],
    technologies: ['Figma', 'UI/UX Design', 'Design Tokens', 'Prototyping'],
    githubUrl: 'https://github.com/RuthInTech',
    liveUrl: '',
    figmaUrl: '',
    featured: false,
    order: 7,
    thumbnail: 'figma-labs',
    highlights: ['Design to Code Pipeline', 'WCAG Accessibility']
  }
];
