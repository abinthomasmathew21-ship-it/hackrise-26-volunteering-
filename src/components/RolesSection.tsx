import React, { useState } from 'react';
import { VOLUNTEER_ROLES } from '../data/rolesData';
import { VolunteerRole } from '../types';
import { Search, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';

interface RolesSectionProps {
  onSelectRole: (roleTitle: string) => void;
  selectedRoleTitle?: string;
}

export const RolesSection: React.FC<RolesSectionProps> = ({ onSelectRole, selectedRoleTitle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Roles (12)' },
    { id: 'Operations', label: 'Operations & Ground' },
    { id: 'Technical', label: 'Technical & Systems' },
    { id: 'Media', label: 'Media, Design & Content' },
    { id: 'Marketing', label: 'Outreach & Partnerships' },
    { id: 'Hospitality', label: 'Hospitality & VIPs' },
  ];

  const filteredRoles = VOLUNTEER_ROLES.filter((role) => {
    const matchesCategory =
      activeCategory === 'all' ||
      role.category === activeCategory ||
      (activeCategory === 'Operations' && (role.category === 'Operations' || role.id === 'logistics' || role.id === 'stage')) ||
      (activeCategory === 'Media' && (role.category === 'Media' || role.id === 'design'));

    const matchesSearch =
      role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.idealSkills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="roles" className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-red-600 font-mono">
              AVAILABLE DEPARTMENTS & TEAMS
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 uppercase tracking-tight">
              VOLUNTEER ROLES
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Explore the 12 specialized squads powering HackRise ’26. Select your preferred department below to prepare your application for the official registration form.
            </p>
          </div>

          {/* Quick search input */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search roles or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-zinc-300 focus:outline-none focus:border-red-600 transition-colors bg-white"
              />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 border ${
                activeCategory === cat.id
                  ? 'bg-zinc-950 text-white border-zinc-950'
                  : 'bg-zinc-100 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200 border-zinc-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Roles Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role) => {
            const isSelected = selectedRoleTitle === role.title;
            return (
              <div
                key={role.id}
                className={`flex flex-col justify-between p-6 bg-white border transition-all duration-200 ${
                  isSelected
                    ? 'border-red-600 ring-2 ring-red-600 bg-red-50/20'
                    : 'border-zinc-200 hover:border-zinc-400 hover:shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar on Card: Number & Slot */}
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                    <span className="font-display font-black text-2xl text-red-600">
                      {role.number}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 font-medium">
                      {role.slotsEstimate}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-zinc-950">
                      {role.title}
                    </h3>
                    <p className="text-sm font-medium text-zinc-700 mt-2 leading-relaxed">
                      {role.summary}
                    </p>
                  </div>

                  {/* Key Duties */}
                  <div className="pt-2 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                      Key Responsibilities
                    </div>
                    <ul className="space-y-1.5 text-xs text-zinc-600">
                      {role.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-600 font-bold mt-0.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills: Unboxed text with subtle typographic separators */}
                  <div className="pt-3 border-t border-zinc-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Ideal Skillset
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-600 font-medium">
                      {role.idealSkills.map((skill, i) => (
                        <React.Fragment key={skill}>
                          <span>{skill}</span>
                          {i < role.idealSkills.length - 1 && (
                            <span className="text-zinc-300 select-none" aria-hidden="true">
                              /
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-6 mt-6 border-t border-zinc-100">
                  <button
                    type="button"
                    onClick={() => onSelectRole(role.title)}
                    className={`w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                      isSelected
                        ? 'bg-red-600 text-white'
                        : 'bg-zinc-100 hover:bg-red-600 hover:text-white text-zinc-800'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Selected in Your Draft</span>
                      </>
                    ) : (
                      <>
                        <UserCheck className="w-4 h-4" />
                        <span>Select for Application</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredRoles.length === 0 && (
          <div className="py-12 text-center border border-dashed border-zinc-300 mt-6">
            <p className="text-sm font-semibold text-zinc-600">
              No volunteer roles matched your search "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
