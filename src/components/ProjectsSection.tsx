import { useState } from "react";
import { PROJECTS, PERSONAL_INFO } from "../data";
import { Project } from "../types";
import { 
  Activity, 
  TrendingUp, 
  BookOpen, 
  ThumbsUp, 
  Compass, 
  Gamepad2, 
  ArrowUpRight, 
  Github, 
  Calendar,
  Layers,
  Sparkles,
  Search,
  CheckCircle2
} from "lucide-react";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { value: "all", label: "All Systems" },
    { value: "agents", label: "Autonomous Agents" },
    { value: "nlp", label: "NLP & Tutoring" },
    { value: "ml", label: "Classifiers & health" },
    { value: "analytics", label: "Quant & Analytics" }
  ];

  // Helper to map icon names to Lucide icons
  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case "Activity": return <Activity className="h-5 w-5 text-emerald-400" />;
      case "TrendingUp": return <TrendingUp className="h-5 w-5 text-blue-400" />;
      case "BookOpen": return <BookOpen className="h-5 w-5 text-indigo-400" />;
      case "ThumbsUp": return <ThumbsUp className="h-5 w-5 text-purple-400" />;
      case "Compass": return <Compass className="h-5 w-5 text-amber-500" />;
      case "Gamepad2": return <Gamepad2 className="h-5 w-5 text-pink-400" />;
      default: return <Layers className="h-5 w-5 text-slate-400" />;
    }
  };

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = filter === "all" || proj.category === filter;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="relative border-t border-slate-900 bg-slate-950/40 py-16 scroll-mt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-900 pb-8">
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-blue-500 uppercase">
              Demonstrated Innovations
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              Projects Portfolio
            </h2>
            <p className="mt-2 max-w-xl font-sans text-sm text-slate-400">
              Interactive systems and functional solutions built during academic tenures, demonstrating data parsing, automation scripting, and model fine-tuning.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full max-w-xs shrink-0">
            <Search className="absolute top-2.5 left-3 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search tech, title, scope..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900/40 py-2 pl-9 pr-4 font-sans text-xs text-white placeholder-slate-500 outline-none focus:border-blue-500/50 focus:bg-slate-900"
            />
          </div>
        </div>

        {/* Tab category filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`rounded-lg px-4 py-2 font-sans text-xs font-semibold transition-all duration-200 ${
                filter === cat.value
                  ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                  : "bg-slate-900/40 text-slate-400 border border-slate-800/80 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/60 to-slate-950/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700/80 hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-900 p-2.5">
                    {getProjectIcon(project.icon)}
                  </div>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-slate-500">
                    <Calendar className="h-3 w-3" />
                    {project.period}
                  </span>
                </div>

                {/* Title and Main Description */}
                <div>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 border-t border-slate-900 pt-3">
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-500">
                    Technical Deliverables
                  </span>
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-slate-300 font-sans text-[11px] leading-snug">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 text-blue-500 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies tags and Footer */}
              <div className="mt-5 space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-slate-900 px-1.5 py-0.5 font-mono text-[9px] text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Simulated links / Info drawer tag */}
                <div className="flex items-center justify-between border-t border-slate-900 pt-3">
                  <span className="font-mono text-[10px] text-slate-500 flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-blue-500 animate-pulse" />
                    Active Pipeline Ready
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-7 w-7 items-center justify-center rounded bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                      title="GitHub Repository"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-full rounded-2xl border border-slate-850 p-12 text-center">
              <span className="block text-sm text-slate-500">
                No matching AI artifacts or systems found. Try clearing your search parameters.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
