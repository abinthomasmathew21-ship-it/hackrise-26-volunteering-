import React from 'react';
import { SELECTION_STEPS } from '../data/rolesData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-red-600 font-mono">
            SELECTION & ONBOARDING ROADMAP
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-zinc-950 leading-tight">
            VOLUNTEER SELECTION PROCESS
          </h2>
          <p className="text-base text-zinc-600 leading-relaxed">
            From initial registration to live execution, here is the clear roadmap of how volunteer applications are reviewed and teams deployed.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SELECTION_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="bg-white border border-zinc-200 p-6 flex flex-col justify-between hover:border-red-600 transition-colors relative group"
            >
              {/* Corner marker */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                <span className="font-display font-black text-3xl text-red-600">
                  {step.step}
                </span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2 py-0.5">
                  {step.highlight}
                </span>
              </div>

              <div className="py-4 space-y-2">
                <h3 className="font-display text-2xl font-black uppercase tracking-tight text-zinc-900 group-hover:text-red-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-400">
                <span>Stage 0{index + 1} of 06</span>
                <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-10 p-6 bg-white border border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
            <div className="text-xs sm:text-sm text-zinc-700">
              <span className="font-bold text-zinc-900">Fair & Transparent Matching:</span> Role allocation is carried out based on applicant skills, preferences, and availability during the 12-hour hackathon.
            </div>
          </div>
          <a
            href="#application"
            className="text-xs font-bold uppercase tracking-wider text-red-600 hover:text-red-700 whitespace-nowrap"
          >
            Go to Registration Section →
          </a>
        </div>
      </div>
    </section>
  );
};
