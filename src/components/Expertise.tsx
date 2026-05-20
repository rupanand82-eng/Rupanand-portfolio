import { useState } from "react";
import { SKILLS } from "../data";
import { Award, CheckCircle, Zap } from "lucide-react";

export default function Expertise() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", ...SKILLS.map((c) => c.category)];

  const filteredSkills = activeTab === "All" 
    ? SKILLS 
    : SKILLS.filter((c) => c.category === activeTab);

  return (
    <section id="expertise" className="relative border-t border-slate-900 bg-slate-950/60 py-16 scroll-mt-14">
      {/* Absolute visual glows */}
      <div className="absolute top-1/2 left-1/4 -z-10 h-72 w-72 rounded-full bg-purple-500/5 blur-[100px]" />
      <div className="absolute bottom-1/2 right-1/4 -z-10 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-xs font-semibold tracking-wider text-purple-500 uppercase">
            Power Matrix
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            Core Competencies & Skills
          </h2>
          <p className="mt-2 max-w-xl font-sans text-sm text-slate-400">
            A comprehensive overview of my capabilities in mathematical programming, intelligence modeling, workflow creation, and structured deployment.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`rounded-lg px-3.5 py-1.5 font-sans text-xs font-semibold transition-all duration-200 ${
                activeTab === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:text-white hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Level Meter Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filteredSkills.map((catObj) => (
            <div
              key={catObj.category}
              className="rounded-2xl border border-slate-800 bg-slate-900/20 p-5 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80"
            >
              <div className="flex items-center gap-2 border-b border-slate-800/60 pb-3">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <h3 className="font-display text-sm font-bold text-slate-200">
                  {catObj.category}
                </h3>
              </div>

              <div className="mt-4 space-y-4">
                {catObj.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-slate-300 font-sans">{skill.name}</span>
                      <span className="font-mono text-slate-400">{skill.level}% Mastery</span>
                    </div>
                    {/* Progress Track */}
                    <div className="h-2 w-full rounded-full bg-slate-950 overflow-hidden border border-slate-800/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tech Notes Bar */}
        <div className="mt-8 rounded-xl border border-dashed border-slate-800 bg-slate-900/10 p-4 text-center">
          <p className="font-mono text-[11px] text-slate-400 inline-flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-amber-500" />
            <span>Passionate about continuing knowledge in: <b>AWS Cloud Ecosystems, Predictive Disease Analytics, Advanced NLP, and Automated Agentic Workflows.</b></span>
          </p>
        </div>
      </div>
    </section>
  );
}
