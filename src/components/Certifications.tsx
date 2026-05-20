import { CERTIFICATIONS } from "../data";
import { Award, ShieldCheck, Zap, CloudLightning } from "lucide-react";

export default function Certifications() {
  return (
    <section id="credentials" className="relative border-t border-slate-900 bg-slate-950/60 py-16 scroll-mt-14">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/3 -z-10 h-64 w-64 rounded-full bg-cyan-500/5 blur-[80px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-500 uppercase">
            Validated Accreditation
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            Certifications & Training
          </h2>
          <p className="mt-2 max-w-xl font-sans text-sm text-slate-400">
            Professional credentials validated by top systems to support secure cloud architectures and deep machine learning implementations.
          </p>
        </div>

        {/* Certificate Card Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert) => {
            const isCloud = cert.title.toLowerCase().includes("cloud") || cert.title.toLowerCase().includes("aws");
            
            return (
              <div
                key={cert.title}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/10 p-5 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/30"
              >
                {/* Visual Accent stripe */}
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${cert.logoColor} rounded-t-xl`} />

                <div className="space-y-4">
                  {/* Icon Area */}
                  <div className="flex items-center justify-between">
                    <div className="rounded-lg bg-slate-900/60 border border-slate-800 p-2 text-slate-300">
                      {isCloud ? (
                        <CloudLightning className="h-5 w-5 text-indigo-400" />
                      ) : (
                        <ShieldCheck className="h-5 w-5 text-amber-500" />
                      )}
                    </div>
                    <span className="font-mono text-[9px] text-slate-500 font-semibold uppercase">
                      {cert.date}
                    </span>
                  </div>

                  {/* Cert Title and Issuer */}
                  <div>
                    <h3 className="font-display text-xs font-bold text-white line-clamp-3 group-hover:text-blue-400 transition-colors leading-relaxed">
                      {cert.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-[11px] font-semibold text-slate-400">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Award className="h-3.5 w-3.5 text-blue-500" />
                    Verified Badge
                  </span>
                  <span className="truncate max-w-[120px]" title={cert.issuer}>{cert.issuer}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cloud Native Deployment Footer */}
        <div className="mt-8 rounded-xl border border-slate-900 bg-slate-950/80 p-4">
          <p className="font-mono text-[10px] text-slate-400 text-center">
            Credentials evaluated under academic guidelines in Seshadri Rao Gudlavalleru Engineering College aligning with Cloud Security standards.
          </p>
        </div>
      </div>
    </section>
  );
}
