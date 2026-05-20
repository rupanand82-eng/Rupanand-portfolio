import { PERSONAL_INFO } from "../data";
import { Mail, Phone, MapPin, Linkedin, Github, Sparkles, CheckSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-900 bg-slate-950 py-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-mono text-sm font-bold text-white shadow-lg">
                RP
              </div>
              <span className="font-display text-base font-bold text-white">
                {PERSONAL_INFO.name} Portfolio
              </span>
            </div>
            <p className="font-sans text-xs leading-relaxed text-slate-400">
              Passionate Artificial Intelligence, Machine Learning, and Full-Stack Web developer. Experienced in NLP text classification, health symptoms modeling, speech emotion tracking, and cloud networking.
            </p>
            <div className="flex items-center gap-2 rounded-lg bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 w-max">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] text-slate-400">STATUS: OPEN TO WORK & ENGAGEMENTS</span>
            </div>
          </div>

          {/* Contact Col */}
          <div className="space-y-4 md:col-span-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-500">
              Direct Contact
            </h4>
            <ul className="space-y-2 font-mono text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Social and verification */}
          <div className="space-y-4 md:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-500">
              Social Connect
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-850 bg-slate-900 text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-850 bg-slate-900 text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
                title="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-lg border border-dashed border-slate-800 bg-slate-950 p-2.5 flex items-center gap-2">
              <CheckSquare className="h-4 w-4 text-emerald-500 shrink-0" />
              <span className="font-mono text-[9px] text-slate-500 leading-snug">
                7.59 CGPA credentials verified in cooperation with Seshadri Rao College.
              </span>
            </div>
          </div>

        </div>

        {/* Legal area */}
        <div className="mt-8 border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-slate-500">
          <p>© {currentYear} {PERSONAL_INFO.name}. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 hover:text-slate-400 transition-colors">
            <Sparkles className="h-3 w-3 text-blue-400" />
            Designed & Built with AI Studio Integration
          </p>
        </div>
      </div>
    </footer>
  );
}
