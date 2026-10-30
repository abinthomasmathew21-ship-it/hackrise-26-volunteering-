import React, { useState } from 'react';
import { OFFICIAL_GOOGLE_FORM_URL } from '../data/rolesData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenForm?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-18">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#"
          className="text-2xl font-black tracking-tight text-zinc-950 font-display uppercase whitespace-nowrap shrink-0 hover:text-red-600 transition-colors"
        >
          HACKRISE <span className="text-red-600">’26</span>
        </a>

        {/* Zone 2: 4-5 concise single-line text links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-700 tracking-wide uppercase">
          <a
            href="#about"
            className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#roles"
            className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0"
          >
            Roles
          </a>
          <a
            href="#why-join"
            className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0"
          >
            Why Join
          </a>
          <a
            href="#process"
            className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0"
          >
            Process
          </a>
          <a
            href="#faq"
            className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={OFFICIAL_GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] rounded-none shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            <span>Become a Volunteer</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-700 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-6 py-4 space-y-3">
          <div className="flex flex-col space-y-3 text-sm font-bold uppercase text-zinc-800 tracking-wider">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-600 transition-colors"
            >
              About
            </a>
            <a
              href="#roles"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-600 transition-colors"
            >
              Volunteer Roles (12 Teams)
            </a>
            <a
              href="#why-join"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-600 transition-colors"
            >
              Why Join
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-600 transition-colors"
            >
              Selection Process
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-600 transition-colors"
            >
              FAQ
            </a>
          </div>
          <div className="pt-2 border-t border-zinc-100">
            <a
              href={OFFICIAL_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-red-600 rounded-none shadow-sm"
            >
              <span>Open Google Form</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
