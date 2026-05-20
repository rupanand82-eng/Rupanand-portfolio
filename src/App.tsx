import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutAndEducation from "./components/AboutAndEducation";
import Expertise from "./components/Expertise";
import ProjectsSection from "./components/ProjectsSection";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import AITwinBot from "./components/AITwinBot";
import { MessageSquareCode, Sparkles, X } from "lucide-react";

export default function App() {
  const [botOpen, setBotOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600/35 selection:text-white">
      {/* Dynamic Background subtle ambient meshes */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_70%)]" />
      <div className="absolute top-[800px] left-1/4 -z-10 h-[400px] w-[500px] rounded-full bg-purple-500/5 blur-[120px]" />
      <div className="absolute top-[2000px] right-1/4 -z-10 h-[500px] w-[600px] rounded-full bg-blue-500/5 blur-[140px]" />

      {/* Main Top Navigation Head */}
      <Header onOpenBot={() => setBotOpen(true)} />

      {/* Main content viewport */}
      <main className="relative">
        {/* Visual Hero Block */}
        <Hero onOpenBot={() => setBotOpen(true)} />

        {/* Detailed Education and Bio timelines */}
        <AboutAndEducation />

        {/* Dynamic categorized Expertise skill meters */}
        <Expertise />

        {/* Project logs with filters */}
        <ProjectsSection />

        {/* validated Cloud and ML Certifications */}
        <Certifications />
      </main>

      {/* Core Footer brand markings */}
      <Footer />

      {/* Floating Sparkle AI button in corner when chat is closed */}
      {!botOpen && (
        <button
          onClick={() => setBotOpen(true)}
          id="floating-ai-twin-btn"
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 offset-zinc-900 to-purple-600 text-white shadow-2xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300 animate-float"
          title="Interview AI Twin"
        >
          <div className="relative">
            <MessageSquareCode className="h-6 w-6" />
            <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
          </div>
        </button>
      )}

      {/* Sidebar Overlay Gemini chat assistant */}
      <AITwinBot isOpen={botOpen} onClose={() => setBotOpen(false)} />
    </div>
  );
}
