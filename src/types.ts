export interface Project {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: 'programming' | 'tools' | 'ai' | 'medical';
}