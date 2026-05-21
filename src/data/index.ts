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
    resume: "https://drive.google.com/file/d/1VeDP_HJhz_OzSxjsn_aaRDUvw93A4E4w/view?usp=sharing",
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
    period: "Jul 2025 – Dec 2025",
    type: "Industry",
    points: [
      "Built a secure financial data pipeline connecting SAP systems to a SQL datamart, enabling the Accounts Receivable team to access clean, structured data for decision-making.",
      "Developed a predictive analytics application using Django and PyTorch to identify high-risk customers, improve payment forecasting, and support faster, data-driven credit and collection strategies.",
    ],
  },
  {
    company: "RayLab, IIIT Delhi",
    role: "Undergraduate Researcher",
    period: "Aug 2024 – May 2025",
    type: "Research",
    topic: "Prediction of Oligomeric States using ML · Advisor: Dr. Arjun Ray",
    points: [
      "Built ML models to predict protein oligomeric states using 5,000+ RCSB PDB samples.",
      "Achieved 91% accuracy and 0.89 F1-score using XGBoost; BiGRU + Attention on ESM reached 88% accuracy.",
      "Handled class imbalance (SMOTE), performed label merging, and identified key predictors via feature importance.",
    ],
  },
  {
    company: "The Translational Biology Lab (TBRL), IIIT Delhi",
    role: "Undergraduate Researcher",
    period: "Jan 2024 – May 2024",
    type: "Research",
    topic: "Feature Engineering for Protein-Ligand Interaction (PLI) Prediction · Advisor: Dr. Jaspreet Kaur Dhanjal",
    points: [
      "Engineered diverse molecular features from proteins and ligands using multiple extraction techniques for robust PLI prediction.",
      "Applied ML models to identify key interaction-driving features, ensuring generalization across varied protein-ligand datasets.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Spambot",
    description:
      "RAG-based QA and meeting summarization system. Processes transcripts and meeting recordings to extract insights and answer questions using retrieval-augmented generation.",
    tech: ["Python", "LangChain", "Streamlit", "RAG"],
    github: "https://github.com/varshabhaskar07/Spambot",
    featured: true,
  },{
    title: "Loan.ly",
    description:
      "AI-powered cold-calling and lead qualification system for banks. Automates outreach using conversational AI and integrates with Twilio for voice and SMS workflows.",
    tech: ["Python", "Flask", "Twilio", "LLMs"],
    github: "https://github.com/varshabhaskar07/Loan.ly",
    featured: true,
  },

  {
    title: "ReelOS",
    description:
      "AI Content Operating System that generates complete Instagram Reel briefs — scripts, captions, hooks, hashtags, and B-roll — in ~30 seconds. Lets a single operator manage 10+ content channels by automating cognitive creative work.",
    tech: ["Python", "FastAPI", "GPT-4o", "React", "Supabase", "ElevenLabs"],
    github: "https://github.com/varshabhaskar07/ReelOS",
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
