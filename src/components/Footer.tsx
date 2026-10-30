import React from 'react';
import { OFFICIAL_GOOGLE_FORM_URL } from '../data/rolesData';
import { ArrowUpRight, Heart } from 'lucide-react';

interface FooterProps {
  onOpenContactModal?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#"
              className="text-3xl font-black font-display tracking-tight uppercase text-white hover:text-red-500 transition-colors inline-block"
            >
              HACKRISE <span className="text-red-600">’26</span>
            </a>
            <p className="text-base font-bold text-red-500">
              “Where Ideas Rise, Innovation Begins.”
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              The official volunteer and organizing portal for HackRise ’26. Empowering collegiate talent through a fast-paced 12-hour hackathon experience.
            </p>
          </div>

          {/* Col 2: Affiliations & Partners */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
              ASSOCIATION & PARTNERS
            </div>
            <div className="space-y-3 text-sm text-zinc-300">
              <div>
                <span className="text-xs uppercase text-zinc-400 block font-semibold">
                  Associated With:
                </span>
                <strong className="text-white text-base">Orbinex Innovations × MBC : 80</strong>
                <span className="block text-xs text-zinc-400">Wisdom Beyond Walls</span>
              </div>
              <div>
                <span className="text-xs uppercase text-zinc-400 block font-semibold">
                  Supporting Partner:
                </span>
                <strong className="text-white text-base">µLearn MBCCET</strong>
                <span className="block text-xs text-zinc-400">Peer-To-Peer Learning Community</span>
              </div>
            </div>
          </div>

          {/* Col 3: Footer Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
              QUICK NAVIGATION
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-300">
              <li>
                <a
                  href={OFFICIAL_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors flex items-center gap-1 text-red-400"
                >
                  <span>Volunteer Registration</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#roles" className="hover:text-red-500 transition-colors">
                  Volunteer Roles
                </a>
              </li>
              <li>
                <a href="#why-join" className="hover:text-red-500 transition-colors">
                  Why Join
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-red-500 transition-colors">
                  Selection Process
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-red-500 transition-colors">
                  FAQ & Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © 2026–2027 HACKRISE ’26. Organized by Orbinex Innovations & MBC : 80, in collaboration with µLearn MBCCET.
          </div>
          <div className="flex items-center gap-2">
            <span>Volunteer Portal for HackRise ’26</span>
            <span aria-hidden="true">·</span>
            <span className="text-red-500 font-bold">26 JANUARY 2027</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
