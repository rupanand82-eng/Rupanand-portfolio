import { GraduationCap, BookOpen, Calendar, MapPin, Award, ArrowUpRight, Flame } from "lucide-react";
import { PERSONAL_INFO, EDUCATION, EXPERIENCES } from "../data";

export default function AboutAndEducation() {
  return (
    <section id="about" className="relative border-t border-slate-900 bg-slate-950/40 py-16 scroll-mt-14">
      {/* Absolute decorative gradient grids */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* About Column (7 cols) */}
          <div className="space-y-6 lg:col-span-7">
            <div>
              <span className="font-mono text-xs font-semibold tracking-wider text-blue-500 uppercase">
                Biography
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                Who stands behind the algorithms?
              </h2>
            </div>

            <div className="space-y-4 font-sans text-base leading-relaxed text-slate-300">
              <p>
                {PERSONAL_INFO.aboutText}
              </p>
              <p>
                Currently an undergraduate learner focusing on the intersect of mathematical modeling and full-stack engineering, 
                I actively seek to translate algorithms into live responsive applications. Whether it is coding classification systems 
                in Python or tuning web interfaces, my design philosophy lies in continuous debugging, testing, and automation loops.
              </p>
            </div>

            {/* Quick stats / Highlights list */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-xl border border-slate-900 bg-slate-900/40 p-4">
                <div className="flex items-center gap-2.5">
                  <Flame className="h-5 w-5 text-amber-500" />
                  <span className="font-display font-semibold text-white">Focus Area</span>
                </div>
                <p className="mt-2 font-sans text-xs text-slate-400">
                  Supervised learning systems, natural language classification pipelines, and real-time speech analytics.
                </p>
              </div>

              <div className="rounded-xl border border-slate-900 bg-slate-900/40 p-4">
                <div className="flex items-center gap-2.5">
                  <Award className="h-5 w-5 text-blue-500" />
                  <span className="font-display font-semibold text-white">Core Strengths</span>
                </div>
                <p className="mt-2 font-sans text-xs text-slate-400">
                  Robust data analysis, feature selection matrices, responsive frontend routing, and workflow automation.
                </p>
              </div>
            </div>

            {/* Internships Timeline */}
            <div className="pt-6 border-t border-slate-900/60">
              <span className="font-mono text-xs font-semibold tracking-wider text-blue-500 uppercase block mb-4">
                Professional Milestones / Experience
              </span>
              <div className="space-y-4">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-900 bg-slate-900/20 p-5 group hover:border-blue-500/20 hover:bg-slate-900/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="font-display text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h4>
                        <span className="font-sans text-xs text-indigo-300">{exp.company}</span>
                      </div>
                      <span className="text-slate-500 font-mono text-[10px] sm:text-right">{exp.duration}</span>
                    </div>
                    <ul className="mt-3 space-y-1.5 list-none pl-0">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-xs text-slate-400 font-sans flex items-start gap-1.5 leading-snug">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education timeline column (5 cols) */}
          <div className="lg:col-span-5" id="education">
            <div className="sticky top-24">
              <div>
                <span className="font-mono text-xs font-semibold tracking-wider text-purple-500 uppercase">
                  Academic Path
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-white">
                  Education
                </h2>
              </div>

              {/* Enhanced timeline card */}
              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/20 p-6 backdrop-blur-sm relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
                <div className="absolute top-0 right-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-blue-500/5 blur-xl group-hover:bg-blue-500/10 transition-all duration-300" />
                
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-3">
                    <GraduationCap className="h-6 w-6 text-blue-400" />
                  </div>
                  <span className="rounded-full bg-slate-805/80 px-2.5 py-1 font-mono text-[10px] font-semibold text-slate-300">
                    {EDUCATION.duration}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="font-display text-base font-bold text-white leading-snug group-hover:text-blue-400 transition-colors">
                    {EDUCATION.college}
                  </h3>
                  <p className="mt-1 font-sans text-sm font-semibold text-indigo-300">
                    {EDUCATION.collegePath}
                  </p>
                  
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-slate-500" />
                      {EDUCATION.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5 text-slate-500" />
                      GPA: <b className="text-white font-semibold">{EDUCATION.gpa}</b>
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="mt-5 space-y-2.5 border-t border-slate-800/60 pt-4">
                  {EDUCATION.highlights.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400 leading-normal">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative Seshadri verification ribbon */}
                <div className="mt-5 flex items-center justify-between rounded-lg bg-indigo-500/5 border border-indigo-500/10 p-2.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Academic Record Validated</span>
                  </div>
                  <span className="font-mono text-[10px] font-semibold text-indigo-400">CGPA {EDUCATION.gpa.split(' ')[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
