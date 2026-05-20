import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Award, Sparkles, RefreshCw, Smartphone, CheckCircle, Bot } from "lucide-react";
import { ChatMessage } from "../types";
import { PERSONAL_INFO } from "../data";

interface AITwinBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AITwinBot({ isOpen, onClose }: AITwinBotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Set initial greeting
  useEffect(() => {
    const greeting: ChatMessage = {
      id: "initial-greeting",
      role: "model",
      content: `Hello! 👋 I am the AI Twin of **Rupanand Palakurthi**. 

I can answer questions regarding my machine learning models, specific full-stack Python projects (like the Fake News Detector or Disease Prediction AI), current GPA (7.59) at Seshadri Rao Gudlavalleru Engineering College, internship experience, plus cloud-native certifications!

Feel free to ask me anything about my journey—or choose one of the suggested prompts below to test my credentials!`,
      timestamp: new Date()
    };
    setMessages([greeting]);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const promptSuggestions = [
    "Tell me about your Fake News Detector using AI",
    "What are your core programming skills?",
    "Tell me about Seshadri Rao Engineering College",
    "What kind of roles are you looking for?"
  ];

  // Post message to Express API
  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);
    setErrorStatus(null);

    // Prepare clean history formatting for the backend
    const cleanHistory = messages.map((m) => ({
      role: m.role,
      content: m.content
    }));

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: cleanHistory
        }),
      });

      if (!resp.ok) {
        throw new Error("Failed to communicate with the AI-Twin agent");
      }

      const data = await resp.json();
      const modelMsg: ChatMessage = {
        id: `model-${Date.now()}`,
        role: "model",
        content: data.reply || "I didn't receive a response. Try again!",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err: any) {
      console.error(err);
      setErrorStatus("Connection timeout. Please ensure the backend is running and GEMINI_API_KEY is configured.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    const greeting: ChatMessage = {
      id: "initial-greeting",
      role: "model",
      content: `Hello again! 👋 My AI Twin core is refreshed. Ask me about my Python programs, my GPA of 7.59, or my certifications. Let's talk code!`,
      timestamp: new Date()
    };
    setMessages([greeting]);
    setErrorStatus(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md sm:w-[420px] shadow-2xl transition-all duration-300 transform translate-x-0">
      {/* Outer Card Container */}
      <div className="flex h-full flex-col border-l border-slate-800 bg-slate-950/95 backdrop-blur-xl">
        
        {/* Active Title Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-slate-900/60 p-4">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 font-mono text-white text-sm font-bold shadow-lg shadow-blue-500/20">
                AI
              </div>
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-950" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-white flex items-center gap-1">
                Rupanand's AI Twin
                <Sparkles className="h-3 w-3 text-cyan-400 animate-pulse" />
              </h3>
              <p className="font-mono text-[10px] text-slate-400">Powered by Gemini AI Engine</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
               onClick={handleReset}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-white transition-colors"
              title="Reset Conversation"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
            <button
               onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-white transition-colors"
              title="Close Panel"
              id="close-ai-bot-btn"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Informational Credentials Banner */}
        <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800/40 flex items-center justify-between font-mono text-[9px] text-slate-400 uppercase tracking-wider">
          <span className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3 text-emerald-500" />
            Recruiter Verified Match
          </span>
          <span className="text-blue-400 font-bold">GPA 7.59</span>
        </div>

        {/* Chat Bubbles Scroll View Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
            >
              <span className="mb-1 font-mono text-[9px] text-slate-500">
                {msg.role === "user" ? "You" : "AI Twin"} • {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
              <div
                className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs font-sans ring-1 ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white ring-blue-500/10 shadow-lg shadow-blue-500/5"
                    : "bg-slate-900 text-slate-300 ring-slate-800/50 leading-relaxed"
                }`}
                style={{ whiteSpace: "pre-wrap" }}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex flex-col items-start">
              <span className="mb-1 font-mono text-[9px] text-slate-500">AI Twin is conceptualizing...</span>
              <div className="flex gap-1.5 rounded-xl bg-slate-900 px-4 py-3 ring-1 ring-slate-800/50">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.15s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500" />
              </div>
            </div>
          )}

          {/* Error Message Box */}
          {errorStatus && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3 text-center text-xs text-red-400 font-sans">
              <p>{errorStatus}</p>
              <div className="mt-2 text-[10px] text-slate-500 bg-slate-950 p-1.5 rounded font-mono">
                API: /api/chat error
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Prompt Chips */}
        {messages.length < 5 && (
          <div className="border-t border-slate-800/60 p-3 bg-slate-950/40">
            <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-500 mb-2">
              Recruiter Quick Prompts
            </span>
            <div className="flex flex-wrap gap-1.5">
              {promptSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSendMessage(suggestion)}
                  className="rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-left font-sans text-[11px] text-slate-300 hover:border-slate-700 hover:text-white transition-all duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Form input */}
        <div className="border-t border-slate-800 p-3 bg-slate-950">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about AI models, GPA, projects..."
              disabled={isLoading}
              className="flex-1 rounded-xl border border-slate-900 bg-slate-900/50 px-3.5 py-2 font-sans text-xs text-white placeholder-slate-500 outline-none focus:border-blue-500/50"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/10 hover:bg-blue-500 transition-colors disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
