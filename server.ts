import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy-initialized Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not defined");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Resume structured data for systemic prompting
const RESUME_CONTENT = `
Applicant Name: RUPANAND PALAKURTHI
Contact Details:
- Phone: +91 70950 52818
- Email: rupanandpalakurthi@gmail.com
- Location: Machilipatnam, Andhra Pradesh, India
- Availability: Open to Remote
- Professional Links: LinkedIn (linkedin.com/in/rupanand-palakurthi-6315a8339), GitHub (github.com/rupanand123)

Professional Summary:
Passionate AI & Machine Learning student with hands-on experience in designing and developing intelligent applications using Python, Machine Learning, and Full-Stack Web Development (HTML, CSS, and JavaScript). Skilled in data preprocessing, model training, evaluation, and deployment of AI-driven solutions. Developed real-world projects including Fake News Detection using NLP, Emotion Recognition from Speech, Disease Prediction Systems, and Smart Farming Applications. Possess strong knowledge of supervised learning algorithms, data analysis, and problem-solving techniques, along with experience in building scalable web applications and integrating AI models for efficient and accurate performance.

Core Competencies:
1. Programming Languages: Python, JavaScript, HTML5, CSS3
2. AI & Machine Learning: Machine Learning, Artificial Intelligence, Natural Language Processing (NLP), Data Preprocessing, Model Training & Evaluation
3. Web Development: Frontend Development, Full Stack Development, Responsive Web Design, REST API Integration, UI Development
4. Frameworks & Technologies: React.js, Node.js, Flask, FastAPI
5. Databases: MySQL, MongoDB
6. Tools & Platforms: Git, GitHub, VS Code, Antigravity, AI Models, N8n, Workflow Automation
7. Languages: Telugu, English

Projects:
1. Fake News Detector using AI (Jan '25 - Feb '25): Developed an NLP-based Machine Learning model to identify and classify fake news articles using Python, text preprocessing, and supervised learning algorithms.
2. Disease Prediction AI (Jan '26 - Feb '26): Developed a Machine Learning-based disease prediction system using Python and predictive analytics to identify possible diseases based on user symptoms and health data.
3. Speech Emotion Recognition System (Jan '25 - Mar '25): Developed an AI-based speech emotion recognition model using Python and Machine Learning to identify human emotions from voice/audio signals.
4. AgriSmart AI - Smart Farming Assistant (Jan '26 - Mar '26): Developed an AI-powered smart farming platform featuring crop disease detection, fertilizer recommendations, and smart agriculture solutions using Machine Learning and web technologies.
5. Credit Scoring Model (Feb '26 - Mar '26): Built an ML model for predicting customer creditworthiness using Python and supervised learning algorithms.

Experience:
1. AI & Web Development Intern at inamigos foundation (May '26 - Present): Developed AI-powered web applications using Python, HTML, CSS, and JavaScript. Integrated ML models into web-based platforms for intelligent automation. Built responsive, user-friendly frontend interfaces with backend connectivity. Optimized app testing and performance.
2. AWS Cloud Computing Virtual Intern at SmartBridge & NASSCOM FutureSkills Prime (Jan '26 - Mar '26): Completed hands-on virtual internship focused on AWS cloud services, cloud infrastructure, deployment, networking, and cloud security with practical implementation experience.

Education:
- B.Tech in Artificial Intelligence & Machine Learning
- Institution: Seshadri Rao Gudlavalleru Engineering College, Machilipatnam, Andhra Pradesh, India
- Grade: GPA 7.59
- Tenure: Jul 2024 - Present
- Description: Passionate AI & ML enthusiast. Skilled in Python, Machine Learning, and AI-driven app development. Experienced in building intelligent solutions with strong analytical and problem-solving abilities.

Certifications:
1. Machine Learning using Python (Simplilearn SkillUp, Nov '24)
2. Introduction to Image Generation (Google Cloud via Simplilearn, Sep '24)
3. Python Software, Application, Games & Automation Development (Udemy, May '25)
4. Graphic Design Masterclass: Master Illustrator & Photoshop (Udemy, May '25)
5. Introduction to Generative AI Studio (Google Cloud via Simplilearn, Aug '25)
6. Website UI/UX Designing using Chat GPT (Simplilearn SkillUp, Dec '25)
7. ChatGPT 101: What is ChatGPT? (Simplilearn SkillUp, Dec '25)
8. AI Agents for Beginners (Simplilearn SkillUp, Dec '25)
9. Introduction to Large Language Models (Google Cloud via Simplilearn, Dec '25)
10. AWS Cloud Computing Virtual Internship (SmartBridge & NASSCOM Prime, Jan '26)
`;

// Helper to construct system instruction
const SYSTEM_INSTRUCTION = `
You are the interactive AI Twin / Virtual Portfolio Assistant of Rupanand Palakurthi, an exceptional AI & Full Stack Developer and AI & ML undergraduate student.
Your goal is to represent him professionally, warmly, and knowledgeably to potential employers, recruiters, colleagues, and portfolio visitors who talk to you.

Follow these rules:
1. Be polite, friendly, professional, confident, yet humble.
2. Speak in the first person ("I") as the AI representation of Rupanand's experience, or as his "AI Twin". E.g., "In my Fake News Detector project, I built an NLP system using..."
3. Provide deep, accurate answers regarding his core competencies, specific projects (Fake News Detector using AI, Disease Prediction AI, Speech Emotion Recognition System, AgriSmart AI, and Credit Scoring Model), internships (inamigos foundation and AWS Cloud Computing Virtual Intern), education (Seshadri Rao Gudlavalleru Engineering College), GPA (7.59), and certifications.
4. If asked about contact info, provide his email (rupanandpalakurthi@gmail.com), phone (+91 70950 52818), or suggest connecting on LinkedIn/GitHub via the header links.
5. Keep answers clear, technical where appropriate (since he builds machine learning algorithms, works with Flask/FastAPI, and designs full-stack web platforms), and formatted with bullet points or paragraphs. Keep responses concise and engaging (under 3 or 4 paragraphs).
6. If asked questions that are completely unrelated to his portfolio or career (e.g., "tell me how to bake cookies" or "solve this math problem"), polite yet firmly steer the conversation back to his portfolio, ML projects, or career aspirations (e.g., "While I can help with general questions, as Rupanand's AI twin, I'd love to share some insights on how I designed the disease prediction classifiers or set up Python workflows!").

Here is the full resume data to base your responses on:
${RESUME_CONTENT}
`;

// API routes go here FIRST
app.post("/api/chat", async (req, res): Promise<any> => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGeminiClient();

    // Map custom history structure to Gemini chat structure
    // Structure of Gemini AI SDK chat history: { role: 'user' | 'model', parts: [{ text: ... }] }
    const geminiHistory: any[] = [];
    if (history && Array.isArray(history)) {
      // Keep only last 10 exchanges to protect context limits
      const recentHistory = history.slice(-10);
      for (const h of recentHistory) {
        geminiHistory.push({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.content }]
        });
      }
    }

    // Initialize chat with system instruction
    const activeChat = ai.chats.create({
      model: "gemini-3.5-flash",
      history: geminiHistory,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const geminiResponse = await activeChat.sendMessage({ message });
    res.json({ reply: geminiResponse.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ 
      error: "Failed to communicate with the Gemini AI twin", 
      details: error.message || error 
    });
  }
});

// Serve frontend assets
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server loaded and running on http://localhost:${PORT}`);
  });
}

start();
