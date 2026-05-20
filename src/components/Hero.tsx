import { Sparkles, ArrowRight, MessageSquareCode, Award, GraduationCap, MapPin, CheckCircle2, FileJson } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeroProps {
  onOpenBot: () => void;
}

export default function Hero({ onOpenBot }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:py-24">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/4 -left-20 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute top-1/3 -right-20 -z-10 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Main Visual Profile & Copy */}
          <div className="space-y-6 lg:col-span-7">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-mono text-xs text-blue-400">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Available for Remote Work & ML Internships</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block text-slate-300 text-sm font-mono tracking-widest uppercase">
                Hello, I am
              </span>
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.fullName}
              </span>
            </h1>

            <p className="font-display text-lg font-medium text-slate-300 md:text-xl">
              {PERSONAL_INFO.title} • <span className="text-blue-400">{PERSONAL_INFO.subTitle}</span>
            </p>

            <p className="max-w-xl font-sans text-base leading-relaxed text-slate-400 md:text-lg">
              {PERSONAL_INFO.tagline} Focused on Natural Language Processing (NLP), workflow automations, and building real-world software products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBot}
                id="hero-ai-chat-btn"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-display text-base font-bold text-white shadow-xl shadow-blue-500/10 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 active:scale-95"
              >
                <MessageSquareCode className="h-5 w-5" />
                <span>Interview My AI Twin</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#projects"
                className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/40 px-6 py-3 font-display text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <span>View Portfolio Highlights</span>
              </a>
            </div>

            {/* Quick Micro Credentials Icons of his tech stack */}
            <div className="pt-6 border-t border-slate-800/60">
              <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-500">
                Core Specialty Stack
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Python & ML Algorithms", "Supervised Learning", "NLP / Audio Processing", "Full-Stack (React & Node)", "AWS & Cloud Deployment"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-800/80 bg-slate-900/50 px-2.5 py-1 font-mono text-xs text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Metrics Dashboard Bento Widget */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 p-6 shadow-xl shadow-slate-950/50">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-slate-400">EXPERT PROFILE HUB</span>
                </div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Active State</span>
              </div>

              {/* Grid of Micro stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {/* Academic CGMA */}
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-4 transition-all duration-300 hover:border-blue-500/30">
                  <div className="flex items-center gap-2 text-blue-400">
                    <GraduationCap className="h-5 w-5" />
                    <span className="font-display text-sm font-semibold text-slate-300">Degree</span>
                  </div>
                  <p className="mt-2 font-display text-2xl font-bold text-white">7.59 CGPA</p>
                  <span className="mt-1 block font-mono text-[10px] text-slate-500">Seshadri Rao College</span>
                </div>

                {/* Automation & Agents */}
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-4 transition-all duration-300 hover:border-purple-500/30">
                  <div className="flex items-center gap-2 text-purple-400">
                    <Award className="h-5 w-5" />
                    <span className="font-display text-sm font-semibold text-slate-300">Certifications</span>
                  </div>
                  <p className="mt-2 font-display text-2xl font-bold text-white">10 Honors</p>
                  <span className="mt-1 block font-mono text-[10px] text-slate-500">AWS + GCP + Udemy</span>
                </div>

                {/* Multi-Agent Portfolio */}
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-4 transition-all duration-300 hover:border-emerald-500/30">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <FileJson className="h-5 w-5" />
                    <span className="font-display text-sm font-semibold text-slate-300">Code Artifacts</span>
                  </div>
                  <p className="mt-2 font-display text-2xl font-bold text-white">5 Projects</p>
                  <span className="mt-1 block font-mono text-[10px] text-slate-500">Robust systems built</span>
                </div>

                {/* Location Availability */}
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-4 transition-all duration-300 hover:border-amber-500/30">
                  <div className="flex items-center gap-2 text-amber-400">
                    <MapPin className="h-5 w-5" />
                    <span className="font-display text-sm font-semibold text-slate-300">Available</span>
                  </div>
                  <p className="mt-2 font-display text-base font-bold text-white">Open to Remote</p>
                  <span className="mt-1 block font-mono text-[10px] text-slate-500">Global Location Alignment</span>
                </div>
              </div>

              {/* Quick Resume Link Box */}
              <div className="mt-5 rounded-xl border border-dashed border-slate-800 bg-slate-950/80 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-blue-500" />
                  <div>
                    <span className="block font-sans text-xs font-semibold text-white">Contact Validation OK</span>
                    <span className="block font-mono text-[10px] text-slate-500">{PERSONAL_INFO.email}</span>
                  </div>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 px-3 py-1 font-sans text-xs font-medium text-slate-300 transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
