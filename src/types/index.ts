export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  topic?: string;
  points: string[];
}

export interface Achievement {
  title: string;
  event: string;
  icon: string;
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  icon: string;
  description: string;
}
