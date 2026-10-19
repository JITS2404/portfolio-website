export const projects = [
  {
    id: 'echelonx',
    title: 'EchelonX — Economic Shock Simulation Engine',
    period: 'Jan 2026 – Mar 2026',
    category: 'Macroeconomic Simulation & Graph-Based Modeling',
    summary: 'A graph-based economic shock simulation engine that models how policy changes, interest rate adjustments, and macroeconomic shocks propagate across an interconnected economic network in real-time.',
    problem: 'Economic systems are interconnected, but most tools treat indicators in isolation. This makes it difficult to answer: “If one variable changes, what happens to the rest of the system?”',
    solutionPoints: [
      'Economic indicators are modeled as interconnected nodes in a weighted directed graph',
      'Relationships are mathematically defined using weighted causal dependencies',
      'External shocks propagate dynamically across multiple network layers',
      'Multi-step simulation uncovers cascading second- and third-order effects'
    ],
    deliverables: [
      'Structured simulation of macroeconomic impact under various stress scenarios',
      'Scenario-based monetary and fiscal policy comparison',
      'Risk correlation mapping and dependency clustering across variables',
      'Regime classification across growth, stress, and stability indicators'
    ],
    results: [
      'Simulated multi-step propagation showing ~1.5–2% GDP variation under rate shocks',
      'Identified strong inter-variable dependencies (~0.7 correlation clusters)',
      'Enabled evaluation of multiple policy scenarios in real-time (<2 seconds)',
      'Achieved consistent deterministic outputs across repeated simulations'
    ],
    keyInsight: 'This system is not designed to predict exact future values, but to model how changes propagate through a structured, interconnected economic system.',
    tags: ['PERN Stack', 'PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'Graph Modeling'],
    linkedinUrl: 'https://www.linkedin.com/in/jerom-issac-t-s/details/projects/',
    githubUrl: 'https://github.com/JITS2404/echelonx'
  },
  {
    id: 'edumetric',
    title: 'EDUMETRIC — Institutional Placement Intelligence System',
    period: 'Nov 2025 – Jan 2026',
    category: 'Operational Analytics & Decision System',
    summary: 'A centralized decision intelligence platform used by institutional leadership (CEO, AGM, IT Head) to track, benchmark, and optimize placement and internship performance across multi-disciplinary academic programs.',
    problem: 'Placement tracking was fragmented across departments, relying on spreadsheets and manual reporting. This makes it difficult for leadership to answer: “How are different programs performing, and where should we intervene?”',
    solutionPoints: [
      'Unified student, placement, and internship data into a centralized relational data store',
      'Implemented a configurable formula engine (weights, caps, targets) for performance evaluation',
      'Delivered real-time executive dashboards with KPI-based insights and program benchmarking',
      'Enabled systematic tracking of internship-to-placement conversion rates'
    ],
    deliverables: [
      'Centralized analytics dashboard for institutional C-suite and department heads',
      'Automated cohort performance evaluation and KPI scoring engines',
      'Automated reporting pipelines replacing manual spreadsheet aggregation'
    ],
    results: [
      'Processed 10,000+ student records annually across engineering, arts, management, and pharmacy',
      'Reduced reporting turnaround time by ~40% for administrative teams',
      'Enabled real-time, data-driven decision-making for institutional leadership',
      'Improved cross-department visibility and standardized performance evaluation'
    ],
    keyInsight: 'This system is not just a dashboard, but a decision intelligence layer for institutional operations, transforming fragmented data into structured, actionable insights.',
    tags: ['PERN Stack', 'PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'Recharts', 'REST APIs'],
    linkedinUrl: 'https://www.linkedin.com/in/jerom-issac-t-s/details/projects/',
    githubUrl: 'https://github.com/JITS2404/edumetric-placement-intelligence'
  },
  {
    id: 'eoga',
    title: 'Enterprise Operational Governance Architecture',
    period: 'Sep 2025 – Oct 2025',
    category: 'Operational Governance & Workflow Systems',
    summary: 'A production-grade governance platform engineered on the PERN stack to replace fragmented, manual maintenance workflows with a structured, audit-ready operational system.',
    problem: 'Organizations lacked visibility, financial control, and standardized lifecycle progression across departments. Tickets were lost, approvals were informal, and there was no measurable accountability.',
    solutionPoints: [
      'Engineered a multi-role workflow system enforcing structured lifecycle states and approval thresholds',
      'Eliminated informal approvals via enforced multi-tier financial validation and quota controls',
      'Implemented full audit traceability with timestamped state transition logs and root cause logging'
    ],
    deliverables: [
      'Role-Based Access Control (Reporter → Admin → Technician → Manager → Finance)',
      'Quotation & invoice approval engine with automated spend checks',
      'Root Cause Analysis logging and failure pattern categorization',
      'Real-time operational KPI dashboards across 8+ departments'
    ],
    results: [
      'Reduced operational turnaround time by 35–50% through structured automation',
      'Standardized 16 lifecycle states with role-based transition control',
      'Enabled real-time KPI tracking across 8+ departments handling 10,000+ records monthly',
      'Established 100% audit traceability from maintenance request to final invoice settlement'
    ],
    keyInsight: 'Operational efficiency stems from deterministic state machines and strict accountability layers rather than unstructured communication tools.',
    tags: ['PERN Stack', 'PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'RBAC', 'Audit Architecture'],
    linkedinUrl: 'https://www.linkedin.com/in/jerom-issac-t-s/details/projects/',
    githubUrl: 'https://github.com/JITS2404/operational-governance-architecture'
  },
  {
    id: 'cerebra',
    title: 'Cerebra — Real-Time Voice & AI Assistant',
    period: 'Aug 2025 – Sep 2025',
    category: 'Conversational AI & Real-Time Audio',
    summary: 'A real-time voice intelligence assistant designed to interact with users with ultra-low latency, process spoken audio commands, and provide context-aware responses via LLM APIs and mobile integrations.',
    problem: 'Traditional voice interfaces suffer from high latency, rigid command structures, and complex bridging between mobile frontends and Python AI model pipelines.',
    solutionPoints: [
      'Connected Python backends with LiveKit sandbox environment for bi-directional audio streaming',
      'Integrated external generative AI and speech models to handle natural multi-turn conversations',
      'Integrated with Android Studio to deliver a seamless, high-performance native mobile experience'
    ],
    deliverables: [
      'Sub-second voice recognition and audio response streaming pipeline',
      'Modular Python backend for LLM agent integration and external API execution',
      'Android client integration with native audio recording and playback'
    ],
    results: [
      'Demonstrated sub-second latency for end-to-end voice turnaround',
      'Enabled hands-free task automation and intelligent real-time queries',
      'Seamless communication bridge across WebRTC audio channels and Python ML services'
    ],
    keyInsight: 'Real-time conversational agents require end-to-end audio streaming architecture rather than turn-based request-response HTTP cycles.',
    tags: ['Python', 'LiveKit', 'Generative AI APIs', 'Android Studio', 'Speech AI', 'WebRTC'],
    linkedinUrl: 'https://www.linkedin.com/in/jerom-issac-t-s/details/projects/',
    githubUrl: 'https://github.com/JITS2404/conversational-ai-assistant'
  }
];

export const patents = [
  {
    id: 'medical-reminder',
    title: 'Medical Reminder and Health Logger System',
    appNumber: '202541119394',
    status: 'Published / Issued',
    date: 'Dec 19, 2025',
    jurisdiction: 'Indian Patent Office (IPO)',
    problem: 'High rates of medication non-adherence and "siloed" health data. Most reminder apps notify a user but fail to track the physiological impact of the medication or ensure the dose was actually taken.',
    solution: 'An integrated architecture that synchronizes medication schedules with a real-time health-logging engine.',
    howItIsSolved: 'The system uses a feedback-loop logic where alerts are not just time-based but state-based. It correlates vitals (logged by the user or sensors) with medication cycles to provide a holistic view of treatment efficacy, allowing for data-driven adjustments by healthcare providers.',
    tags: ['HealthTech', 'State-Based Architecture', 'Bio-Informatics', 'IoT Sensors']
  },
  {
    id: 'hospital-finder',
    title: 'Hospital Finder in Urgent Situations',
    appNumber: '202341070111',
    status: 'Published / Issued',
    date: 'Nov 24, 2023',
    jurisdiction: 'Indian Patent Office (IPO)',
    problem: '“Proximity Paradox” in emergencies. Standard navigation tools (like Google Maps) find the nearest hospital, but that hospital may lack the specific department (e.g., Trauma, Cardiac, Neonatal) or available beds needed for the specific emergency.',
    solution: 'A multi-criteria decision-making (MCDM) framework for emergency medical facility identification.',
    howItIsSolved: 'The system filters facilities based on a "Priority-Urgency Index." It evaluates real-time hospital capabilities, specialized department availability, and traffic-adjusted transit times rather than simple radius-based searching, significantly reducing the "time-to-care" window.',
    tags: ['Emergency Systems', 'MCDM Algorithm', 'Decision Science', 'Real-Time Telemetry']
  }
];

export const certifications = [
  {
    title: 'Generative AI for Business',
    issuer: 'IBM',
    category: 'AI & Machine Learning',
    tags: ['Gen AI', 'LLMs', 'Enterprise AI']
  },
  {
    title: 'Prompt Engineering for ChatGPT',
    issuer: 'DeepLearning.AI / Vanderbilt',
    category: 'AI & Machine Learning',
    tags: ['Prompting', 'Agentic AI', 'Workflows']
  },
  {
    title: 'Deep Learning using PyTorch',
    issuer: 'PyTorch / Specialized Academy',
    category: 'AI & Machine Learning',
    tags: ['PyTorch', 'Neural Networks', 'Computer Vision']
  },
  {
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Google',
    category: 'AI & Machine Learning',
    tags: ['AI Principles', 'ML Systems', 'Algorithms']
  },
  {
    title: 'Machine Learning 101',
    issuer: 'Professional Certification',
    category: 'AI & Machine Learning',
    tags: ['Supervised ML', 'Classification', 'Regression']
  },
  {
    title: 'Back-End Architecture with Node.js & Express',
    issuer: 'IBM / Meta Specialized',
    category: 'Full-Stack & Cloud',
    tags: ['Node.js', 'Express.js', 'RESTful APIs']
  },
  {
    title: 'Front-End Development with React',
    issuer: 'Meta',
    category: 'Full-Stack & Cloud',
    tags: ['React', 'State Management', 'Component Architecture']
  },
  {
    title: 'Meta Mobile Development & React Native',
    issuer: 'Meta',
    category: 'Full-Stack & Cloud',
    tags: ['React Native', 'Mobile Apps', 'Cross-Platform']
  },
  {
    title: 'Containers & Microservices Architecture',
    issuer: 'Cloud Native / Industry Standard',
    category: 'Full-Stack & Cloud',
    tags: ['Docker', 'Microservices', 'System Scalability']
  },
  {
    title: 'AWS Cloud Fundamentals',
    issuer: 'Amazon Web Services (AWS)',
    category: 'Full-Stack & Cloud',
    tags: ['Cloud Infrastructure', 'EC2', 'S3', 'Serverless']
  },
  {
    title: 'Qlik Sense Business Analyst',
    issuer: 'Qlik',
    category: 'Data & Business Intelligence',
    tags: ['Business Intelligence', 'Analytics', 'Dashboards']
  },
  {
    title: 'Financial Markets & Investment Risk Management',
    issuer: 'Yale University',
    category: 'Data & Business Intelligence',
    tags: ['Risk Modeling', 'Asset Pricing', 'Portfolio Theory']
  },
  {
    title: 'Data Visualization & Analytics using Python',
    issuer: 'Python Software Foundation / Industry',
    category: 'Data & Business Intelligence',
    tags: ['Pandas', 'NumPy', 'Matplotlib', 'EDA']
  },
  {
    title: 'Microsoft Enterprise Product Management',
    issuer: 'Microsoft',
    category: 'Data & Business Intelligence',
    tags: ['Product Strategy', 'Lifecycle Governance', 'Enterprise Systems']
  },
  {
    title: 'UI/UX Design Principles & Figma',
    issuer: 'Design Academy / Meta',
    category: 'UI/UX Design',
    tags: ['Figma', 'Prototyping', 'Design Systems', 'UX Research']
  },
  {
    title: 'Cybersecurity Fundamentals & Version Control',
    issuer: 'Industry Certification',
    category: 'Security & Engineering',
    tags: ['Git', 'GitHub', 'Secure Coding', 'Access Control']
  }
];

export const TimeLineData = [
  { year: 2022, text: 'Commenced Bachelor of Engineering in Computer Science (Hons) at Rathinam Technical Campus' },
  { year: 2023, text: 'Filed & Published Patent: Hospital Finder in Urgent Situations (Priority-Urgency MCDM framework)' },
  { year: 2025, text: 'Data Analytics Specialist at Rathinam Technical Campus; built KPI analytics & academic data frameworks' },
  { year: 2025, text: 'AI Application Developer at Rathinam Group of Institutions; built enterprise AI systems & EOGA' },
  { year: 2025, text: 'Filed & Published Patent: Medical Reminder and Health Logger System' },
  { year: 2026, text: 'Architected EchelonX economic shock engine and EduMetric placement intelligence system' },
  { year: 2026, text: 'Incoming MSc Data Science, AI & Digital Business at GISMA University of Applied Sciences, Berlin' }
];