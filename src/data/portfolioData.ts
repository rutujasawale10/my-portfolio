import type { Skill, Project, ExperienceItem, StatItem, CertificationItem } from '../types/portfolio';

export const HERO_DATA = {
  name: "Rutuja Vitthalrao Sawale",
  shortName: "Rutuja Sawale",
  subtitle: "CSE STUDENT | AI-ML EXPLORER",
  smallLabel: "HELLO, I'M RUTUJA VITTHALRAO SAWALE",
  headline: "Turning Ideas into",
  headlineGradient: "Intelligent Digital Solutions",
  skillBadges: [
    "CSE Student",
    "AI/ML Enthusiast",
    "Full-Stack Developer",
    "Cloud Learner"
  ],
  bio: "Computer Science Engineering student passionate about building intelligent, practical and scalable digital solutions with AI/ML, full-stack development and cloud technologies.",
  availability: "Open for AI/ML, Software Engineering & Cloud Internships",
  location: "Amravati, Maharashtra, India",
  email: "rutujasawale92@gmail.com",
  profileImage: "/profile.png",
  floatingCardTag: "AI/ML • Full Stack • Cloud"
};

export const PERSONAL_DETAILS = {
  fullName: "Rutuja Vitthalrao Sawale",
  roleTitle: "CSE STUDENT | AI-ML EXPLORER",
  location: "Amravati, Maharashtra, India",
  phone: "+91 9022507892",
  email: "rutujasawale92@gmail.com",
  github: "https://github.com/rutujasawale10",
  linkedin: "https://www.linkedin.com/in/rutuja-sawale-62801a339",
  summary: "Proactive Computer Science Engineering student and Accredited AWS Platform Architect with hands-on experience in AI-ML, full-stack web applications, and cloud infrastructure. Committed to mastering modern software engineering practices, artificial intelligence, and cybersecurity."
};

export const ABOUT_CARDS = [
  {
    id: "aiml",
    icon: "Brain",
    title: "AI & Machine Learning",
    description: "Developing intelligent algorithms, predictive anomaly detection models, deep learning, and data analytics pipelines. EduSkills Google-supported AI-ML Virtual Intern (Grade O)."
  },
  {
    id: "fullstack",
    icon: "Code2",
    title: "Full-Stack Development",
    description: "Building responsive, modern web applications with React, Node.js, Express, FastAPI, Java, and robust database architectures (MongoDB & MySQL)."
  },
  {
    id: "cloud",
    icon: "Cloud",
    title: "Cloud Computing",
    description: "Accredited AWS Platform Architect with experience in AWS Academy Cloud Foundations, core cloud infrastructure, and DevOps deployment."
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: "1",
    label: "Google AI-ML Internship",
    value: 100,
    suffix: "%",
    description: "Grade O ('Outstanding') rated EduSkills 10-week intensive AI program",
    iconName: "Award"
  },
  {
    id: "2",
    label: "Cloud & Dev Certifications",
    value: 6,
    suffix: "+",
    description: "Databricks AWS Architect, Copado Salesforce DevOps & HackerRank SQL",
    iconName: "Trophy"
  },
  {
    id: "3",
    label: "Technical Stack",
    value: 20,
    suffix: "+",
    description: "Python, Java, React, Node.js, FastAPI, AWS, MongoDB & MySQL",
    iconName: "FolderGit2"
  },
  {
    id: "4",
    label: "Expected BE CSE Grad",
    value: 2028,
    suffix: "",
    description: "Prof Ram Meghe College of Engineering & Management, Badnera",
    iconName: "GitCommit"
  }
];

export const SKILLS_DATA: Skill[] = [
  // Languages
  { name: "Python", category: "Languages", level: "Expert", iconName: "Terminal", featured: true },
  { name: "Java", category: "Languages", level: "Expert", iconName: "Code2", featured: true },
  { name: "C++", category: "Languages", level: "Advanced", iconName: "Cpu", featured: true },
  { name: "JavaScript", category: "Languages", level: "Advanced", iconName: "Globe", featured: true },
  { name: "TypeScript", category: "Languages", level: "Advanced", iconName: "FileCode", featured: true },
  { name: "SQL", category: "Languages", level: "Expert", iconName: "Database", featured: true },

  // Frontend & Backend
  { name: "React", category: "Frontend/Backend", level: "Expert", iconName: "Atom", featured: true },
  { name: "Node.js", category: "Frontend/Backend", level: "Advanced", iconName: "Server", featured: true },
  { name: "Express", category: "Frontend/Backend", level: "Advanced", iconName: "Layers", featured: true },
  { name: "FastAPI", category: "Frontend/Backend", level: "Advanced", iconName: "Zap", featured: true },
  { name: "HTML5 / CSS3", category: "Frontend/Backend", level: "Expert", iconName: "Palette" },
  { name: "Tailwind CSS", category: "Frontend/Backend", level: "Advanced", iconName: "Palette", featured: true },
  { name: "MongoDB", category: "Frontend/Backend", level: "Advanced", iconName: "Database", featured: true },
  { name: "MySQL", category: "Frontend/Backend", level: "Expert", iconName: "Database", featured: true },

  // AI & Machine Learning
  { name: "Machine Learning", category: "AI/ML", level: "Expert", iconName: "BrainCircuit", featured: true },
  { name: "Deep Learning", category: "AI/ML", level: "Advanced", iconName: "Brain", featured: true },
  { name: "Data Analytics", category: "AI/ML", level: "Advanced", iconName: "BarChart3", featured: true },
  { name: "Computer Vision", category: "AI/ML", level: "Advanced", iconName: "Sparkles", featured: true },
  { name: "Scikit-Learn & OpenCV", category: "AI/ML", level: "Expert", iconName: "Cpu", featured: true },

  // Cloud & DevOps
  { name: "AWS Cloud Foundations", category: "Cloud/DevOps", level: "Advanced", iconName: "Cloud", featured: true },
  { name: "Databricks AWS Architect", category: "Cloud/DevOps", level: "Advanced", iconName: "Cloud", featured: true },
  { name: "Copado Salesforce DevOps", category: "Cloud/DevOps", level: "Advanced", iconName: "ShieldCheck", featured: true },

  // Developer Tools
  { name: "Git & GitHub", category: "Developer Tools", level: "Expert", iconName: "GitBranch", featured: true },
  { name: "VS Code", category: "Developer Tools", level: "Expert", iconName: "Terminal" },
  { name: "Vite", category: "Developer Tools", level: "Advanced", iconName: "Zap" },
  { name: "Vercel & Netlify", category: "Developer Tools", level: "Advanced", iconName: "Globe" }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "aws-virtual-internship",
    title: "AWS Academy Graduate / EduSkills Virtual Intern",
    organization: "AWS Academy & EduSkills",
    location: "Remote / India",
    period: "Jan 2026 – Mar 2026",
    type: "Internship",
    badgeText: "AWS Cloud Certified",
    description: "Completed intensive cloud architecture and hands-on infrastructure modules under the AWS Cloud Virtual Internship powered by AWS Academy & EduSkills.",
    achievements: [
      "Mastered foundational cloud architecture, IAM access controls, EC2 compute instances, and S3 storage management.",
      "Engineered secure Virtual Private Cloud (VPC) network topologies and automated auto-scaling groups.",
      "Earned official AWS Academy Cloud Foundations digital badge and platform architecture accreditation."
    ]
  },
  {
    id: "eduskills-aiml",
    title: "AI-ML Virtual Intern",
    organization: "EduSkills (Supported by Google for Developers)",
    location: "Remote / India",
    period: "Jul 2025 – Sep 2025",
    type: "Internship",
    badgeText: "Grade Outstanding (O)",
    grade: "Grade O",
    description: "Participated in an intensive 10-week AI/ML virtual internship supported by Google for Developers, focusing on advanced machine learning algorithms and practical AI workflow implementations.",
    achievements: [
      "Mastered core machine learning algorithms including supervised/unsupervised learning, feature engineering, and neural network fundamentals.",
      "Designed and deployed practical AI-integrated workflow solutions during real-world hands-on project modules.",
      "Awarded 'Grade O (Outstanding)' rating for overall project performance and technical proficiency."
    ]
  },
  {
    id: "prmceam-degree",
    title: "B.E. Computer Science & Engineering",
    organization: "Prof Ram Meghe College of Engineering & Management",
    location: "Badnera, Amravati, Maharashtra",
    period: "2024 – 2028 (Expected)",
    type: "Education",
    badgeText: "Undergraduate Degree",
    description: "Pursuing Bachelor of Engineering degree in Computer Science and Engineering with specialization in Artificial Intelligence, Machine Learning, Data Structures, Algorithms, and Software Engineering.",
    achievements: [
      "Core Coursework: Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming (Java/C++), Operating Systems, Software Engineering.",
      "Active participant in technical coding symposiums, open-source workshops, and AI innovation challenges.",
      "Maintained top academic standing across core engineering semesters."
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-aws-arch",
    name: "Accredited AWS Platform Architect",
    issuer: "Databricks Academy",
    badgeText: "Accredited",
    iconName: "Cloud",
    date: "2026"
  },
  {
    id: "cert-aws-academy-foundations",
    name: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    badgeText: "Cloud Certified",
    iconName: "Cloud",
    date: "2026"
  },
  {
    id: "cert-databricks-lakehouse",
    name: "Databricks Lakehouse Fundamentals",
    issuer: "Databricks Academy",
    badgeText: "Certified",
    iconName: "Layers",
    date: "2026"
  },
  {
    id: "cert-copado-ai",
    name: "Copado Certified AI & Salesforce DevOps Professional",
    issuer: "Copado",
    credentialId: "063347",
    badgeText: "ID: 063347",
    iconName: "ShieldCheck",
    date: "2026"
  },
  {
    id: "cert-copado-rpa",
    name: "Copado Certified Robotic Process Automation (RPA)",
    issuer: "Copado",
    badgeText: "Certified",
    iconName: "Cpu",
    date: "2026"
  },
  {
    id: "cert-sql-advanced",
    name: "SQL (Advanced) Certification",
    issuer: "HackerRank",
    badgeText: "Advanced",
    iconName: "Database",
    date: "2026"
  },
  {
    id: "cert-tata-cyber",
    name: "Tata Cybersecurity Virtual Internship Program",
    issuer: "Tata / Forage",
    badgeText: "Completed",
    iconName: "Lock",
    date: "2025"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "finrisk-intelligence",
    title: "AI Fraud Detection System",
    subtitle: "FinRisk Anomaly & Fraud Analytics",
    description: "AI-powered transaction and invoice fraud detection platform with real-time risk scoring, anomaly alerts, and executive fraud analytics powered by React, Node.js, FastAPI, and Machine Learning.",
    category: "AI/ML",
    projectBadge: "Hackathon MVP / Research",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Node.js", "FastAPI", "Python", "Scikit-Learn", "Machine Learning"],
    githubUrl: "https://github.com/rutujasawale10",
    featured: true,
    architecture: {
      overview: "FinRisk Intelligence processes live financial transaction streams and invoice uploads to compute real-time anomaly scores, identify suspicious transaction jumps, and trigger executive risk alerts.",
      keyFeatures: [
        "Real-time machine learning anomaly risk scoring engine with FastAPI backend.",
        "Interactive analytics dashboard displaying high-risk transaction alerts.",
        "Automated invoice OCR parsing with field threshold verification.",
        "TypeScript typed client interface with responsive Tailwind CSS components."
      ],
      systemMetrics: [
        "Sub-100ms anomaly analysis latency per transaction event",
        "Sub-2s automated invoice parsing latency",
        "Featured FinTech Anomaly Detection Solution"
      ],
      techStackDetailed: ["React", "Node.js", "FastAPI", "Python / Scikit-Learn", "TypeScript", "Tailwind CSS"]
    }
  },
  {
    id: "smart-college-portal",
    title: "Student Management System",
    subtitle: "Smart Campus Role-Based Administration Platform",
    description: "Full-stack smart college management platform for students, faculty, and administrators engineered with Java, MySQL, Node.js, Express, and JWT role-based access controls.",
    category: "Full Stack",
    projectBadge: "Java Desktop & Database App",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    tags: ["Java", "MySQL", "Node.js", "Express", "React", "JWT"],
    githubUrl: "https://github.com/rutujasawale10",
    featured: true,
    architecture: {
      overview: "A comprehensive campus administration system that unifies student attendance tracking, course management, assignment submissions, and faculty record management with relational MySQL storage.",
      keyFeatures: [
        "Secure JSON Web Token (JWT) role-based authentication for Students, Faculty, and Admin.",
        "Relational MySQL database schemas with optimized indices for attendance logs and grade sheets.",
        "Automated attendance percentage calculator with threshold alert warnings.",
        "Modern React dashboard interface with live statistical metrics."
      ],
      systemMetrics: [
        "Role-Based Access Control for 1000+ student profiles",
        "Indexed MySQL queries for sub-50ms grade retrieval",
        "Campus Management Engine @ PRMCEAM"
      ],
      techStackDetailed: ["Java", "MySQL", "Node.js", "Express", "React", "JWT"]
    }
  },
  {
    id: "developer-portfolio",
    title: "Modern Developer Portfolio Website",
    subtitle: "Interactive High-Performance Developer Showcase",
    description: "Production-grade, highly responsive developer portfolio featuring glassmorphic dark mode, Framer Motion entrance animations, 3D tilt interactions, and dynamic section indicators.",
    category: "Web Apps",
    projectBadge: "Live Web Application",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "https://github.com/rutujasawale10",
    githubUrl: "https://github.com/rutujasawale10",
    featured: true,
    architecture: {
      overview: "Architected using React 18, TypeScript, and Vite for fast client hydration, zero layout shift, accessibility compliance, and silky smooth Framer Motion micro-interactions.",
      keyFeatures: [
        "Fixed top scroll progress bar and sticky glassmorphic navigation bar.",
        "3D tilt hover micro-interactions on project and credential cards.",
        "One-click Copy-to-Clipboard toast notifications for email and phone contact.",
        "Single-source modular data model ensuring clean maintainability."
      ],
      systemMetrics: [
        "100/100 Lighthouse Performance & Accessibility Rating",
        "Sub-50ms interactivity response across desktop and mobile",
        "Responsive across all breakpoint dimensions"
      ],
      techStackDetailed: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide Icons", "Vite"]
    }
  },
  {
    id: "cybershield-security",
    title: "CyberShield - Threat Intelligence & Security Monitoring",
    subtitle: "Cybersecurity Vulnerability & Network Defense Suite",
    description: "Automated cybersecurity defense and vulnerability assessment tool designed for network anomaly detection, log parsing, threat intelligence mapping, and incident mitigation.",
    category: "Cybersecurity",
    projectBadge: "SECURITY SUITE / AUDIT",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80",
    tags: ["Python", "Cybersecurity", "Network Security", "Linux", "Threat Analysis", "Wireshark"],
    githubUrl: "https://github.com/rutujasawale10",
    featured: true,
    architecture: {
      overview: "CyberShield is an enterprise-grade security monitoring solution that inspects network packet flows, parses system audit logs, and correlates threat intelligence feeds to detect intrusion attempts in real time.",
      keyFeatures: [
        "Network packet sniffing and traffic anomaly detection engine.",
        "Automated log analyzer for authentication failures and port scanning.",
        "Real-time IP threat intelligence lookups and risk scoring.",
        "Incident mitigation alerts with actionable defense recommendation reports."
      ],
      systemMetrics: [
        "Sub-50ms log parsing & threat signature correlation",
        "Tested against OWASP Top 10 vulnerability patterns",
        "Tata Cybersecurity Virtual Internship Inspired Architecture"
      ],
      techStackDetailed: ["Python", "Wireshark / Scapy", "Linux System Audit", "Logstash", "Threat Intelligence APIs", "Bash"]
    }
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/rutujasawale10",
  linkedin: "https://www.linkedin.com/in/rutuja-sawale-62801a339",
  email: "rutujasawale92@gmail.com",
  phone: "+91 9022507892",
  whatsapp: "https://wa.me/919022507892",
  resume: "/resume.pdf"
};
