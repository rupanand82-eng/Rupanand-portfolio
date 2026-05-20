import { Project, SkillCategory, Certification } from "./types";

export const PERSONAL_INFO = {
  name: "Rupanand Palakurthi",
  fullName: "Rupanand Palakurthi",
  title: "AI & Full Stack Developer",
  subTitle: "Building Smart Automation & AI Solutions",
  tagline: "Passionate AI & Machine Learning developer experienced in building intelligent web networks and auto-agentic workflows.",
  email: "rupanandpalakurthi@gmail.com",
  phone: "+91 70950 52818",
  location: "Machilipatnam, Andhra Pradesh, India",
  availability: "Open to Remote",
  linkedin: "https://www.linkedin.com/in/rupanand-palakurthi-6315a8339/",
  github: "https://github.com/rupanand123",
  aboutText: "I am a passionate AI & Machine Learning student with hands-on experience in designing and developing intelligent applications using Python, Machine Learning, and Full-Stack Web Development (HTML, CSS, and JavaScript). Skilled in data preprocessing, model training, evaluation, and deployment of AI-driven solutions. Experienced in building real-world projects such as Crop Disease Detection, Speech Emotion Recognition, and NLP-based classifiers, as well as integrating ML models back into web-based platforms for intelligent, automated workflows."
};

export const PROJECTS: Project[] = [
  {
    id: "fake-news-detector",
    title: "Fake News Detector using AI",
    period: "Jan 2025 - Feb 2025",
    description: "Developed an NLP-based Machine Learning model to identify and classify fake news articles using Python, text preprocessing, and supervised learning algorithms.",
    tech: ["Python", "NLP", "Supervised Learning", "Text Preprocessing", "Scikit-Learn"],
    category: "nlp",
    highlights: [
      "Engineered automated text preprocessing pipelines with tokenization and stop-words filtration",
      "Trained TF-IDF vectorizers coupled with Supervised Learning classifiers to identify false narratives",
      "Achieved verified model reliability with precise diagnostic indicators and classification reports"
    ],
    icon: "BookOpen"
  },
  {
    id: "disease-prediction",
    title: "Disease Prediction AI",
    period: "Jan 2026 - Feb 2026",
    description: "Developed a Machine Learning-based disease prediction system using Python and predictive analytics to identify possible health conditions based on user symptoms.",
    tech: ["Python", "Machine Learning", "Predictive Analytics", "Symptom Analysis", "Pandas"],
    category: "ml",
    highlights: [
      "Processed multi-symptom health indicator matrices to map symptoms to primary diagnoses",
      "Integrated predictive data modeling to evaluate disease likelihood structures from live datasets",
      "Implemented a clean, reliable symptoms ingestion algorithm showing risk margins comprehensively"
    ],
    icon: "Activity"
  },
  {
    id: "speech-emotion",
    title: "Speech Emotion Recognition System",
    period: "Jan 2025 - Mar 2025",
    description: "Developed an AI-based speech emotion recognition model using Python and Machine Learning to identify human emotions from voice and audio signals.",
    tech: ["Python", "Machine Learning", "Speech Processing", "Audio Recognition", "Feature Extraction"],
    category: "analytics",
    highlights: [
      "Extracted voice frequency markers and acoustic parameters from raw audio waveforms",
      "Trained classification algorithms to accurately tag emotional states from sample utterances",
      "Designed real-time prediction utilities handling clean spectral feature extraction streams"
    ],
    icon: "ThumbsUp"
  },
  {
    id: "agrismart-ai",
    title: "AgriSmart AI - Smart Farming Assistant",
    period: "Jan 2026 - Mar 2026",
    description: "Developed an AI-powered smart farming platform featuring crop disease detection, fertilizer recommendations, and smart agriculture solutions utilizing ML & web technologies.",
    tech: ["Python", "Machine Learning", "Agricultural AI", "Crop Disease Detection", "Web Tech"],
    category: "agents",
    highlights: [
      "Created predictive algorithms for agricultural disease vector detection on crop symptoms",
      "Built dynamic fertilizer and soil quality recommendations based on environmental criteria",
      "Combined machine learning prediction engines with intuitive web dashboard connectivity"
    ],
    icon: "Compass"
  },
  {
    id: "credit-scoring",
    title: "Credit Scoring Model",
    period: "Feb 2026 - Mar 2026",
    description: "Built an ML model for predicting customer creditworthiness using Python, financial data records, and supervised learning algorithms.",
    tech: ["Python", "Supervised Learning", "Credit Scoring", "Financial AI", "Risk Analysis"],
    category: "analytics",
    highlights: [
      "Evaluated historical financial records to classify buyer creditworthiness risk categories",
      "Applied supervised classification algorithms optimized for high-risk and false-positive avoidance",
      "Structured structured input feature fields for swift credit score simulations"
    ],
    icon: "TrendingUp"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming & Web Development",
    skills: [
      { name: "Python (Flask / FastAPI)", level: 95 },
      { name: "JavaScript (React.js / Node.js)", level: 90 },
      { name: "HTML5 & CSS3 (Tailwind CSS)", level: 92 },
      { name: "Full Stack Development & UI Integration", level: 88 }
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Supervised Learning & Classifiers", level: 92 },
      { name: "Natural Language Processing (NLP)", level: 88 },
      { name: "Data Preprocessing & Audio Analysis", level: 85 },
      { name: "Model Training & Diagnostic Evaluation", level: 90 }
    ]
  },
  {
    category: "Infrastructure & Tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code & Environments", level: 92 },
      { name: "AWS Cloud Deployment & Security", level: 85 },
      { name: "Antigravity & AI Agents (N8n)", level: 80 }
    ]
  },
  {
    category: "Professional Strengths",
    skills: [
      { name: "Problem Solving & Analytical Thinking", level: 95 },
      { name: "Team Collaboration & Communication", level: 92 },
      { name: "Project Management & Quick Learning", level: 88 }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Cloud Computing Virtual Internship",
    issuer: "AWS via SmartBridge & NASSCOM",
    date: "Jan 2026",
    logoColor: "from-orange-500 to-yellow-400"
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud (via Simplilearn)",
    date: "Dec 2025",
    logoColor: "from-blue-600 to-indigo-500"
  },
  {
    title: "AI Agents for Beginners",
    issuer: "Simplilearn SkillUp",
    date: "Dec 2025",
    logoColor: "from-purple-500 to-pink-500"
  },
  {
    title: "ChatGPT 101: What is ChatGPT?",
    issuer: "Simplilearn SkillUp",
    date: "Dec 2025",
    logoColor: "from-emerald-500 to-teal-500"
  },
  {
    title: "Website UI/UX Designing using Chat GPT",
    issuer: "Simplilearn SkillUp",
    date: "Dec 2025",
    logoColor: "from-indigo-500 to-blue-500"
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud (via Simplilearn)",
    date: "Aug 2025",
    logoColor: "from-purple-600 to-sky-400"
  },
  {
    title: "Graphic Design Masterclass: Master Illustrator & Photoshop",
    issuer: "Udemy",
    date: "May 2025",
    logoColor: "from-red-500 to-amber-500"
  },
  {
    title: "Python Software, Application, Games & Automation Development",
    issuer: "Udemy",
    date: "May 2025",
    logoColor: "from-blue-500 to-teal-500"
  },
  {
    title: "Machine Learning using Python",
    issuer: "Simplilearn SkillUp",
    date: "Nov 2024",
    logoColor: "from-violet-600 to-purple-500"
  },
  {
    title: "Introduction to Image Generation",
    issuer: "Google Cloud (via Simplilearn)",
    date: "Sep 2024",
    logoColor: "from-cyan-500 to-blue-400"
  }
];

export const EDUCATION = {
  collegePath: "B.Tech in Artificial Intelligence & Machine Learning",
  college: "Seshadri Rao Gudlavalleru Engineering College",
  location: "Machilipatnam, Andhra Pradesh, India",
  duration: "Jul 2024 - Present",
  gpa: "7.59 / 10.0",
  highlights: [
    "Specialized B.Tech coursework in Artificial Intelligence algorithms, Supervised Machine Learning models, and predictive analytics theory.",
    "Actively involved in developing deep coding loops in Python, integrating ML and NLP models directly into modern web frameworks.",
    "Formulating smart automatic farming solutions and diagnostic risk classifiers while pursuing undergraduate honors."
  ]
};

export const EXPERIENCES = [
  {
    role: "AI & Web Development Intern",
    company: "inamigos foundation",
    location: "Machilipatnam Andhra Pradesh, India (Remote)",
    duration: "May 2026 - Present",
    bullets: [
      "Developed AI-powered web applications using Python, HTML, CSS, and JavaScript.",
      "Integrated Machine Learning models into web-based platforms for intelligent automation.",
      "Built responsive and user-friendly frontend interfaces with backend connectivity.",
      "Worked on application testing, debugging, and performance optimization."
    ]
  },
  {
    role: "AWS Cloud Computing Virtual Intern",
    company: "SmartBridge & NASSCOM FutureSkills Prime",
    location: "Machilipatnam, India",
    duration: "Jan 2026 - Mar 2026",
    bullets: [
      "Completed hands-on virtual internship focused on AWS cloud services, cloud infrastructure, deployment, networking, and cloud security with practical implementation experience.",
      "Gained practical knowledge of cloud security, virtualization, and scalable cloud solutions."
    ]
  }
];

