import React from 'react';
import {
  CalendarDays,
  Clock,
  Sparkles,
  Trophy,
  Users2,
  Code2,
  Share2,
  Network,
  Briefcase,
  Layers,
} from 'lucide-react';

const GAINS = [
  {
    icon: CalendarDays,
    title: 'Event Management Experience',
    desc: 'Learn on-ground operations, crowd routing, scheduling, and live logistics under high-tempo hackathon conditions.',
  },
  {
    icon: Users2,
    title: 'Teamwork Experience',
    desc: 'Collaborate with cross-functional teams spanning developers, stage managers, media creatives, and guest hosts.',
  },
  {
    icon: Trophy,
    title: 'Leadership Skills',
    desc: 'Take direct ownership of tracks, departments, and real-time decision-making when participants need guidance.',
  },
  {
    icon: Code2,
    title: 'Technical Exposure',
    desc: 'Work alongside cutting-edge student projects, platform architectures, hackathon evaluation tooling, and APIs.',
  },
  {
    icon: Share2,
    title: 'Communication Skills',
    desc: 'Interact with industry executives, collegiate mentors, faculty representatives, and hundreds of hacking delegates.',
  },
  {
    icon: Network,
    title: 'Networking Opportunities',
    desc: 'Connect with tech community leaders from µLearn, Orbinex Innovations founders, judges, and collegiate visionaries.',
  },
  {
    icon: Briefcase,
    title: 'Real-World Organizing Experience',
    desc: 'Add a verified milestone to your resume that demonstrates reliability, problem-solving, and operational mastery.',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-red-600 font-mono">
            ORGANIZING SQUAD & MISSION
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 uppercase tracking-tight leading-tight">
            BEHIND EVERY GREAT HACKATHON IS A GREAT TEAM.
          </h2>
          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
            HackRise ’26 is looking for passionate students who want to be part of the organizing and operations team. Volunteers will help manage participants, technical activities, registrations, communication, logistics, social media, hospitality, and the overall execution of the hackathon.
          </p>
        </div>

        {/* Partnership / Association Strip */}
        <div className="mt-10 p-6 bg-white border border-zinc-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center font-display font-black text-xl shrink-0">
              OX
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-600">Associated With</div>
              <div className="font-bold text-zinc-900 text-sm">Orbinex Innovations</div>
              <div className="text-xs text-zinc-500">Innovation & Incubation Engine</div>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-zinc-200 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 bg-zinc-900 text-white flex items-center justify-center font-display font-black text-xl shrink-0">
              80
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-600">Associated With</div>
              <div className="font-bold text-zinc-900 text-sm">MBC : 80</div>
              <div className="text-xs text-zinc-500">Wisdom Beyond Walls</div>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-zinc-200 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 bg-red-100 text-red-700 flex items-center justify-center font-display font-black text-xl shrink-0">
              µL
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-600">Supporting Partner</div>
              <div className="font-bold text-zinc-900 text-sm">µLearn MBCCET</div>
              <div className="text-xs text-zinc-500">Peer-Led Tech Learning Ecosystem</div>
            </div>
          </div>
        </div>

        {/* 7 Gains Grid */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-200">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-zinc-950">
                What You Gain as a HackRise ’26 Volunteer
              </h3>
              <p className="text-sm text-zinc-600 mt-1">
                Beyond certificates and perks, volunteering puts you at the core of university innovation leadership.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Layers className="w-4 h-4 text-red-600" />
              <span>7 CORE PILLARS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GAINS.map((gain, index) => {
              const Icon = gain.icon;
              return (
                <div
                  key={gain.title}
                  className="bg-white p-6 border border-zinc-200 hover:border-red-600 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-red-50 text-red-600 border border-red-100 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-zinc-400">
                        0{index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 text-lg group-hover:text-red-600 transition-colors">
                        {gain.title}
                      </h4>
                      <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                        {gain.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Special Highlight Card */}
            <div className="bg-red-600 text-white p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-white/20 text-xs font-bold tracking-wider uppercase font-mono">
                    EVENT FACTOR
                  </span>
                  <Sparkles className="w-5 h-5 text-white/90" />
                </div>
                <div>
                  <h4 className="font-display text-2xl font-black uppercase tracking-tight">
                    12 HOURS. ENDLESS IMPACT.
                  </h4>
                  <p className="text-sm text-white/90 mt-2 leading-relaxed">
                    A sprint like no other. Experience the adrenaline of a live inter-college hackathon from inside the command center.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono">
                <span>DATE: 26 JAN 2027</span>
                <span>VOLUNTEER CREW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
