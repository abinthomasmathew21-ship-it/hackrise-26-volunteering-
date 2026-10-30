import React from 'react';
import { OFFICIAL_GOOGLE_FORM_URL } from '../data/rolesData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-red-600 text-white py-20 lg:py-28">
      {/* Decorative architectural background styling */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-xs font-mono font-bold tracking-widest uppercase border border-white/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN THE TEAM. BUILD THE EXPERIENCE. MAKE HACKRISE ’26 HAPPEN.</span>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white">
            DON’T JUST ATTEND THE HACKATHON. <br className="hidden sm:inline" />
            BE PART OF THE TEAM THAT BUILDS IT.
          </h2>

          <div className="pt-2 text-xl sm:text-2xl font-bold uppercase tracking-wider text-red-100 font-display">
            HACKRISE ’26 <span className="text-white">|</span> 26 JANUARY 2027
          </div>
        </div>

        <p className="text-sm sm:text-base text-red-100 max-w-2xl mx-auto leading-relaxed">
          Step up to the challenge. Work with student leaders, mentors, and innovators across Kerala for the premier 12-hour collegiate hackathon.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={OFFICIAL_GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 text-base font-bold uppercase tracking-wider text-red-600 bg-white hover:bg-zinc-100 active:scale-[0.98] transition-all shadow-xl group whitespace-nowrap"
          >
            <span>Become a Volunteer</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#roles"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold uppercase tracking-wider text-white bg-red-700/60 hover:bg-red-700 border border-white/30 transition-all whitespace-nowrap"
          >
            <span>View All 12 Roles</span>
          </a>
        </div>
      </div>
    </section>
  );
};
