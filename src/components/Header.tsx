import { useState } from "react";
import { Mail, Phone, Linkedin, Github, MessageSquareCode, Menu, X, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeaderProps {
  onOpenBot: () => void;
}

export default function Header({ onOpenBot }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Credentials", href: "#credentials" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-900/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo Area */}
        <a href="#" className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white sm:text-xl">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-mono text-base font-bold shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-500">
            RP
          </div>
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:text-blue-400">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 font-mono text-[10px] text-blue-400 sm:inline-block">
            AI & Full Stack
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden items-center gap-3 sm:flex">
          {/* GitHub Key */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            id="header-github-btn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-850 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            title="GitHub Profile"
          >
            <Github className="h-4 w-4" />
          </a>

          {/* LinkedIn Key */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            id="header-linkedin-btn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-850 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            title="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          {/* AI Companion Button */}
          <button
            onClick={onOpenBot}
            id="header-ai-bot-btn"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1.5 font-display text-sm font-semibold text-white shadow-lg shadow-blue-500/15 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Chat AI Twin</span>
          </button>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenBot}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/15"
            title="Chat AI Twin"
          >
            <Sparkles className="h-4 w-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-850 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-900 px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-3 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-base font-medium text-slate-300 transition-colors hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-red-400">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
