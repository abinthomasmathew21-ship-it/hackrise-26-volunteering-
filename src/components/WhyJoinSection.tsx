import React from 'react';
import { Shield, Award, Coffee, Shirt, Sparkles, Check } from 'lucide-react';

const HIGHLIGHTS = [
  {
    word: 'LEAD',
    subtitle: 'Take responsibility and lead teams.',
    desc: 'Step into real team management. Direct participant flow, orchestrate keynotes, and steer operational tracks with complete autonomy.',
    number: '01',
  },
  {
    word: 'CREATE',
    subtitle: 'Contribute ideas and build something meaningful.',
    desc: 'Bring your creative vision to life—craft the visual identity, dynamic stage experiences, and social narratives that define HackRise ’26.',
    number: '02',
  },
  {
    word: 'CONNECT',
    subtitle: 'Meet students, developers, mentors and innovators.',
    desc: 'Build strong relationships with tech leaders from Orbinex Innovations, µLearn, top engineers, and hackathon competitors across colleges.',
    number: '03',
  },
  {
    word: 'LEARN',
    subtitle: 'Gain practical event and technology experience.',
    desc: 'Understand how enterprise tech infrastructure, high-stress operational execution, and large-scale hackathon judging rubrics work in practice.',
    number: '04',
  },
  {
    word: 'EXPERIENCE',
    subtitle: 'Be part of a real 12-hour hackathon environment.',
    desc: 'Feel the electrifying buzz of non-stop coding, sudden midnight breakthroughs, countdown tension, and the celebratory finale.',
    number: '05',
  },
];

const PERKS = [
  {
    icon: Award,
    title: 'Official Volunteer Certificate',
    detail: 'Jointly validated by Orbinex Innovations × MBC : 80 & µLearn MBCCET',
  },
  {
    icon: Shirt,
    title: 'Exclusive Volunteer Kit',
    detail: 'Limited-edition HackRise ’26 branded volunteer tee, badge, and goodies',
  },
  {
    icon: Coffee,
    title: 'Full Hospitality & Meals',
    detail: 'Breakfast, energizing snacks, midnight coffee, and complete event catering',
  },
  {
    icon: Shield,
    title: 'Priority Entry & Mentorship',
    detail: 'Direct access to judging rooms, industry speakers, and technical workshops',
  },
];

export const WhyJoinSection: React.FC = () => {
  return (
    <section id="why-join" className="py-20 bg-zinc-950 text-white relative overflow-hidden">
      {/* Subtle tech background accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-tech-grid" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-red-500 font-mono">
            WHY JOIN THE SQUAD?
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            WHY JOIN THE VOLUNTEER TEAM?
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Volunteering at HackRise ’26 isn’t just about helping out—it’s an intensive accelerator for your character, your leadership instinct, and your professional network.
          </p>
        </div>

        {/* Large Visual Highlights Grid (LEAD, CREATE, CONNECT, LEARN, EXPERIENCE) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.word}
              className="bg-zinc-900 border border-zinc-800 p-6 flex flex-col justify-between hover:border-red-600 transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-red-500 transition-colors">
                    {item.number}
                  </span>
                  <div className="w-2 h-2 bg-zinc-700 group-hover:bg-red-600 transition-colors" />
                </div>
                <div>
                  <h3 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white group-hover:text-red-500 transition-colors">
                    {item.word}
                  </h3>
                  <div className="text-sm font-bold text-zinc-200 mt-2">
                    {item.subtitle}
                  </div>
                </div>
              </div>
              <p className="text-xs text-zinc-400 mt-6 leading-relaxed border-t border-zinc-800 pt-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tangible Volunteer Perks Strip */}
        <div className="mt-14 pt-10 border-t border-zinc-800">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
              Tangible Volunteer Perks & Benefits
            </h3>
            <span className="text-xs font-mono text-red-500 uppercase tracking-widest hidden sm:inline">
              GUARANTEED PRIVILEGES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map((perk) => {
              const Icon = perk.icon;
              return (
                <div key={perk.title} className="p-5 bg-zinc-900/60 border border-zinc-800 flex items-start gap-4">
                  <div className="p-2.5 bg-red-600 text-white shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                      {perk.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {perk.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
