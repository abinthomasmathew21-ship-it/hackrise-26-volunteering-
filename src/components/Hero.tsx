import React, { useState, useEffect } from 'react';
import { OFFICIAL_GOOGLE_FORM_URL, POSTER_IMAGE_URL } from '../data/rolesData';
import { ArrowUpRight, ArrowDown, Sparkles, Maximize2, ShieldCheck, Users } from 'lucide-react';

interface HeroProps {
  onOpenPosterModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPosterModal }) => {
  // Live countdown to 26 January 2027, 08:00 AM IST
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2027-01-26T08:00:00+05:30').getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white bg-tech-grid pt-10 sm:pt-16 pb-16 lg:pb-24 border-b border-zinc-200">
      {/* Decorative architectural grid markers */}
      <div className="absolute top-6 left-6 pointer-events-none hidden sm:flex items-center gap-2 text-zinc-300 font-mono text-xs select-none">
        <span>+</span>
        <div className="w-12 h-px bg-zinc-200" />
        <span>SYS.HKR26 // STG.ORG</span>
      </div>
      <div className="absolute top-6 right-6 pointer-events-none hidden sm:flex items-center gap-2 text-zinc-300 font-mono text-xs select-none">
        <span>COORDINATES // 26.01.2027</span>
        <div className="w-12 h-px bg-zinc-200" />
        <span>+</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Value Prop, CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Metadata bar */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-red-600 bg-red-50 border border-red-200 px-3 py-1.5">
              <span>26 JANUARY 2027</span>
              <span className="text-red-300" aria-hidden="true">|</span>
              <span>12 HOURS</span>
              <span className="text-red-300" aria-hidden="true">|</span>
              <span>INTER-COLLEGE HACKATHON</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-zinc-950 tracking-tighter uppercase leading-[0.9]">
                HACKRISE <span className="text-red-600">’26</span>
              </h1>
              <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide uppercase text-zinc-800">
                VOLUNTEER REGISTRATION
              </div>
            </div>

            {/* Tagline & Supporting description */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-lg sm:text-xl font-bold text-red-600 tracking-tight">
                “Where Ideas Rise, Innovation Begins.”
              </p>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                Be part of the team behind the 12-hour hackathon. Join Orbinex Innovations × MBC : 80, supported by µLearn MBCCET, as we orchestrate an unforgettable high-octane engineering marathon.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={OFFICIAL_GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] transition-all shadow-md group whitespace-nowrap"
              >
                <span>Become a Volunteer</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#roles"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold uppercase tracking-wider text-zinc-800 bg-white hover:bg-zinc-50 border border-zinc-300 active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <span>Explore Roles</span>
                <ArrowDown className="w-4 h-4 text-zinc-500" />
              </a>
            </div>

            {/* Countdown Clock */}
            <div className="pt-4 border-t border-zinc-200">
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                Countdown to Event Day // 26 January 2027
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md">
                <div className="p-3 bg-zinc-50 border border-zinc-200 text-center">
                  <div className="text-2xl sm:text-3xl font-black font-display tabular-nums text-zinc-900">
                    {timeLeft.days}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-500">Days</div>
                </div>
                <div className="p-3 bg-zinc-50 border border-zinc-200 text-center">
                  <div className="text-2xl sm:text-3xl font-black font-display tabular-nums text-zinc-900">
                    {timeLeft.hours}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-500">Hours</div>
                </div>
                <div className="p-3 bg-zinc-50 border border-zinc-200 text-center">
                  <div className="text-2xl sm:text-3xl font-black font-display tabular-nums text-zinc-900">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-500">Minutes</div>
                </div>
                <div className="p-3 bg-zinc-50 border border-zinc-200 text-center">
                  <div className="text-2xl sm:text-3xl font-black font-display tabular-nums text-red-600">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-500">Seconds</div>
                </div>
              </div>
            </div>

            {/* Quick trust strip */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-zinc-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                <span>Verified Volunteer Certificates</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-red-600" />
                <span>12 Distinct Operational Teams</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span>Swag, Meals & Mentorship</span>
              </div>
            </div>
          </div>

          {/* Right Column: Official Poster Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full bg-white p-2.5 sm:p-3 border-2 border-zinc-900 shadow-2xl transition-transform hover:-translate-y-1">
              {/* Corner tech accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-red-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-red-600" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-600" />

              {/* Header card badge */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-200 text-[11px] font-mono uppercase tracking-wider text-zinc-600">
                <span className="font-bold text-red-600">MBC : 80 × µLearn MBCCET</span>
                <span>OFFICIAL TEASER</span>
              </div>

              {/* Poster Image */}
              <div className="relative overflow-hidden bg-zinc-100 aspect-[3/4] cursor-pointer" onClick={onOpenPosterModal}>
                <img
                  src={POSTER_IMAGE_URL}
                  alt="HACK RISE '26 - Come With your Moorthy Gang - Official Hackathon Teaser Poster"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenPosterModal();
                  }}
                  className="absolute bottom-3 right-3 bg-zinc-950/90 text-white text-xs font-semibold px-3 py-1.5 flex items-center gap-1.5 hover:bg-red-600 transition-colors backdrop-blur-sm"
                  aria-label="View poster full size"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Poster</span>
                </button>
              </div>

              {/* Footer card note */}
              <div className="mt-3 pt-2 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-700">
                <span className="font-semibold text-zinc-900">“Come With your Moorthy Gang”</span>
                <span className="text-[11px] text-red-600 font-bold uppercase tracking-wider">HACKRISE ’26 SQUAD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
