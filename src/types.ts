export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  tech: string[];
  category: "all" | "ml" | "nlp" | "agents" | "analytics";
  highlights: string[];
  icon: string; // Lucide icon name or emoji representation
  demoLink?: string;
  githubLink?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[]; // Level out of 100 for visual bar graphs
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logoColor: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: Date;
}
