import type { Project, Experience, Achievement, SkillCategory, CodingProfile } from "@/types";

export const personalInfo = {
  name: "Varsha Bhaskar",
  title: "AI/ML Engineer",
  subtitle: "Software Developer · Researcher",
  intro:
    "Building AI systems, backend applications, and computational biology projects.",
  location: "New Delhi, India",
  email: "varsha21499@iiitd.ac.in",
  education: {
    institute: "IIIT Delhi",
    degree: "B.Tech in Computer Science and Biosciences",
    period: "2021 – 2025",
  },
  links: {
    github: "https://github.com/varshabhaskar07",
    linkedin: "https://www.linkedin.com/in/varsha-bhaskar/",
    leetcode: "https://leetcode.com/u/varshabhaskar07/",
    twitter: "https://x.com/Kuchbhikartihun",
    resume: "#",
  },
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["Python", "Java", "C", "C++", "SQL", "R"],
  },
  {
    label: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "LangChain", "XGBoost", "RAG"],
  },
  {
    label: "Development",
    skills: ["React", "Next.js", "Flask", "Django", "Node.js", "Streamlit"],
  },
  {
    label: "Tools",
    skills: ["Git", "Linux", "Bash", "Docker"],
  },
];

export const experiences: Experience[] = [
  {
    company: "HORIBA India Pvt. Ltd.",
    role: "AI/ML Trainee",
    period: "2024",
    type: "Industry",
    points: [
      "Built secure financial data pipelines integrating SAP systems with SQL datamarts.",
      "Developed predictive analytics applications using Django and PyTorch.",
      "Improved forecasting accuracy and customer risk prediction systems.",
    ],
  },
  {
    company: "RayLab, IIIT Delhi",
    role: "Undergraduate Researcher",
    period: "2023 – 2024",
    type: "Research",
    topic: "Prediction of Oligomeric States using Machine Learning",
    points: [
      "Built ML models on protein datasets to predict oligomeric states.",
      "Achieved strong accuracy using XGBoost and BiGRU + Attention models.",
      "Applied SMOTE oversampling and feature importance analysis for model interpretability.",
    ],
  },
  {
    company: "TBRL, IIIT Delhi",
    role: "Undergraduate Researcher",
    period: "2023",
    type: "Research",
    topic: "Feature Engineering for Protein-Ligand Interaction Prediction",
    points: [
      "Engineered molecular features for robust protein-ligand interaction prediction.",
      "Built end-to-end ML pipelines for biological interaction analysis.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Spambot",
    description:
      "RAG-based QA and meeting summarization system. Processes transcripts and meeting recordings to extract insights and answer questions using retrieval-augmented generation.",
    tech: ["Python", "LangChain", "Streamlit", "RAG"],
    github: "https://github.com/varshabhaskar07",
    featured: true,
  },
  {
    title: "SHL Assessment Recommender",
    description:
      "AI-powered assessment recommendation system using semantic search and LLM pipelines. Matches candidate profiles to the most relevant SHL assessments intelligently.",
    tech: ["Python", "LLMs", "Semantic Search", "FastAPI"],
    github: "https://github.com/varshabhaskar07",
    featured: true,
  },
  {
    title: "Loan.ly",
    description:
      "AI-powered cold-calling and lead qualification system for banks. Automates outreach using conversational AI and integrates with Twilio for voice and SMS workflows.",
    tech: ["Python", "Flask", "Twilio", "LLMs"],
    github: "https://github.com/varshabhaskar07",
    featured: true,
  },
  {
    title: "Ollama Chat",
    description:
      "Local LLM chat interface with real-time streaming responses. Supports multiple models via Ollama with a clean, responsive UI and conversation history.",
    tech: ["Python", "Flask", "Ollama", "LLMs"],
    github: "https://github.com/varshabhaskar07",
  },
  {
    title: "Google Search Clone",
    description:
      "Fully responsive Google Search clone built with React and Node.js. Integrates the Google Custom Search API with a pixel-perfect UI and advanced search filters.",
    tech: ["React", "Tailwind CSS", "Node.js", "Google API"],
    github: "https://github.com/varshabhaskar07",
  },
  {
    title: "Kernel Development",
    description:
      "Custom kernel built from scratch in C implementing memory management, process scheduling, and system calls. Demonstrates deep understanding of OS internals.",
    tech: ["C", "Operating Systems", "Assembly"],
    github: "https://github.com/varshabhaskar07",
  },
];

export const achievements: Achievement[] = [
  {
    title: "1st Position",
    event: "GenAI Hackathon — Rishihood University",
    icon: "trophy",
  },
  {
    title: "Best AI Hack",
    event: "HackAIthon",
    icon: "star",
  },
  {
    title: "Shortlisted",
    event: "Google Girls Hackathon 2024",
    icon: "award",
  },
  {
    title: "Winner",
    event: "NAB Fintech Hackathon",
    icon: "trophy",
  },
  {
    title: "Winner",
    event: "Rajasthan Digifest",
    icon: "zap",
  },
];

export const codingProfiles: CodingProfile[] = [
  {
    platform: "GitHub",
    username: "varshabhaskar07",
    url: "https://github.com/varshabhaskar07",
    icon: "github",
    description: "Open source projects & contributions",
  },
  {
    platform: "LeetCode",
    username: "varshabhaskar07",
    url: "https://leetcode.com/u/varshabhaskar07/",
    icon: "code",
    description: "DSA practice & problem solving",
  },
  {
    platform: "LinkedIn",
    username: "varsha-bhaskar",
    url: "https://www.linkedin.com/in/varsha-bhaskar/",
    icon: "linkedin",
    description: "Professional network & experience",
  },
  {
    platform: "Twitter / X",
    username: "@Kuchbhikartihun",
    url: "https://x.com/Kuchbhikartihun",
    icon: "twitter",
    description: "Thoughts on AI, tech & building",
  },
];
