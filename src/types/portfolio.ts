export type SkillCategory = 
  | 'Languages'
  | 'Frontend/Backend'
  | 'Cloud/DevOps'
  | 'AI/ML'
  | 'Developer Tools'
  | 'Programming'
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Cloud'
  | 'Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: 'Expert' | 'Advanced' | 'Proficient';
  iconName: string;
  featured?: boolean;
}

export type ProjectCategory = 'All' | 'AI/ML' | 'Cybersecurity' | 'Full Stack' | 'Web Apps';

export interface ProjectArchitecture {
  overview: string;
  keyFeatures: string[];
  systemMetrics?: string[];
  techStackDetailed: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: Exclude<ProjectCategory, 'All'>;
  projectBadge?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  architecture: ProjectArchitecture;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship' | 'Work Experience' | 'Hackathon Leadership' | 'Certification' | 'Education';
  description: string;
  achievements: string[];
  badgeText: string;
  grade?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  credentialId?: string;
  badgeText?: string;
  iconName: string;
  date?: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
