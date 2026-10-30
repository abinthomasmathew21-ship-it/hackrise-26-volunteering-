import React, { useState, useEffect } from 'react';
import {
  OFFICIAL_GOOGLE_FORM_URL,
  VOLUNTEER_ROLES,
  SKILL_OPTIONS,
  AVAILABILITY_OPTIONS,
  EXPERIENCE_OPTIONS,
} from '../data/rolesData';
import { ApplicantDraft } from '../types';
import confetti from 'canvas-confetti';
import {
  ArrowUpRight,
  ClipboardCopy,
  Check,
  Save,
  RotateCcw,
  Sparkles,
  FileText,
  AlertCircle,
  ExternalLink,
  HelpCircle,
  CheckCircle,
} from 'lucide-react';

interface ApplicationSectionProps {
  selectedRoleFromCards?: string;
  onClearSelectedRole?: () => void;
}

const STORAGE_KEY = 'hackrise26_volunteer_draft_v1';

export const ApplicationSection: React.FC<ApplicationSectionProps> = ({
  selectedRoleFromCards,
}) => {
  const [activeTab, setActiveTab] = useState<'drafter' | 'preview'>('drafter');
  const [copied, setCopied] = useState(false);
  const [savedNotification, setSavedNotification] = useState(false);

  // Applicant Draft Form State
  const [draft, setDraft] = useState<ApplicantDraft>({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    courseBranch: '',
    yearOfStudy: '1st Year',
    skills: [],
    otherSkills: '',
    preferredRole: selectedRoleFromCards || 'Operations Team',
    secondaryRole: 'None',
    availability: ['Event day (Full 12-Hour Sprint — 26 Jan 2027)'],
    experience: [],
    motivation: '',
    lastSaved: '',
  });

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setDraft((prev) => ({
          ...prev,
          ...parsed,
          preferredRole: selectedRoleFromCards || parsed.preferredRole || 'Operations Team',
        }));
      } else if (selectedRoleFromCards) {
        setDraft((prev) => ({ ...prev, preferredRole: selectedRoleFromCards }));
      }
    } catch {
      // ignore JSON parse error
    }
  }, [selectedRoleFromCards]);

  // Sync when selectedRoleFromCards updates from parent
  useEffect(() => {
    if (selectedRoleFromCards) {
      setDraft((prev) => ({ ...prev, preferredRole: selectedRoleFromCards }));
    }
  }, [selectedRoleFromCards]);

  const handleSaveToLocalStorage = () => {
    const updated = {
      ...draft,
      lastSaved: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setDraft(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 3000);
  };

  const handleToggleSkill = (skill: string) => {
    setDraft((prev) => {
      const exists = prev.skills.includes(skill);
      const newSkills = exists ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill];
      return { ...prev, skills: newSkills };
    });
  };

  const handleToggleAvailability = (item: string) => {
    setDraft((prev) => {
      const exists = prev.availability.includes(item);
      const newAvail = exists ? prev.availability.filter((a) => a !== item) : [...prev.availability, item];
      return { ...prev, availability: newAvail };
    });
  };

  const handleToggleExperience = (item: string) => {
    setDraft((prev) => {
      const exists = prev.experience.includes(item);
      const newExp = exists ? prev.experience.filter((e) => e !== item) : [...prev.experience, item];
      return { ...prev, experience: newExp };
    });
  };

  const handleClearDraft = () => {
    if (window.confirm('Reset all drafted responses?')) {
      const resetState: ApplicantDraft = {
        fullName: '',
        email: '',
        phone: '',
        college: '',
        courseBranch: '',
        yearOfStudy: '1st Year',
        skills: [],
        otherSkills: '',
        preferredRole: 'Operations Team',
        secondaryRole: 'None',
        availability: ['Event day (Full 12-Hour Sprint — 26 Jan 2027)'],
        experience: [],
        motivation: '',
      };
      setDraft(resetState);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const handleCopyToClipboard = () => {
    const textToCopy = `=== HACKRISE ’26 VOLUNTEER REGISTRATION DRAFT ===
Full Name: ${draft.fullName || '[Not provided]'}
Email: ${draft.email || '[Not provided]'}
Phone Number: ${draft.phone || '[Not provided]'}
College / Institution: ${draft.college || '[Not provided]'}
Course & Branch: ${draft.courseBranch || '[Not provided]'}
Year of Study: ${draft.yearOfStudy}

Preferred Volunteer Role: ${draft.preferredRole}
Secondary Role: ${draft.secondaryRole}

Skills:
${draft.skills.length > 0 ? draft.skills.map((s) => `- ${s}`).join('\n') : '- Not selected'}
${draft.otherSkills ? `Other Skills: ${draft.otherSkills}` : ''}

Availability:
${draft.availability.length > 0 ? draft.availability.map((a) => `- ${a}`).join('\n') : '- Not selected'}

Previous Experience:
${draft.experience.length > 0 ? draft.experience.map((e) => `- ${e}`).join('\n') : '- Not selected'}

Motivation (Why volunteer for HackRise ’26):
${draft.motivation || '[Not provided]'}
==================================================`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleLaunchGoogleForm = () => {
    handleSaveToLocalStorage();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#DC2626', '#991B1B', '#FFFFFF'],
      });
    } catch {
      // fallback
    }
    window.open(OFFICIAL_GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="application" className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-red-600 font-mono">
            OFFICIAL APPLICATION DESTINATION
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-zinc-950 leading-tight">
            READY TO JOIN THE TEAM?
          </h2>
          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
            Fill out the official Volunteer Registration Form with your details, skills, preferred roles and availability. You can use our draft assistant below to organize your answers beforehand, or jump straight to the Google Form.
          </p>
        </div>

        {/* Primary Callout with Direct Register Button */}
        <div className="mt-8 p-6 sm:p-8 bg-zinc-950 text-white border-2 border-red-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span>Official Google Form Link Active</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              OFFICIAL VOLUNTEER REGISTRATION FORM
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Submissions are recorded directly on the official HackRise ’26 Google Form. No external or placeholder forms.
            </p>
          </div>

          <button
            type="button"
            onClick={handleLaunchGoogleForm}
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] transition-all whitespace-nowrap shadow-lg cursor-pointer"
          >
            <span>Register as Volunteer</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Switcher: Application Drafter & Local Storage vs Question Overview */}
        <div className="mt-12">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('drafter')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors border ${
                  activeTab === 'drafter'
                    ? 'bg-zinc-900 text-white border-zinc-900'
                    : 'bg-zinc-100 text-zinc-700 hover:text-zinc-950 border-zinc-200'
                }`}
              >
                Volunteer Form Drafter (Saved Locally)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors border ${
                  activeTab === 'preview'
                    ? 'bg-zinc-900 text-white border-zinc-900'
                    : 'bg-zinc-100 text-zinc-700 hover:text-zinc-950 border-zinc-200'
                }`}
              >
                Form Questions Preview
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-xs text-zinc-500 font-mono">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span>{draft.lastSaved ? `Draft Saved at ${draft.lastSaved}` : 'Auto-saves to Browser'}</span>
            </div>
          </div>

          {/* TAB 1: FORM DRAFTER & LOCAL STORAGE HELPER */}
          {activeTab === 'drafter' && (
            <div className="mt-6 p-6 sm:p-8 bg-zinc-50 border border-zinc-200 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200">
                <div>
                  <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-zinc-900">
                    Draft & Store Your Volunteer Profile
                  </h4>
                  <p className="text-xs text-zinc-600 mt-1">
                    Fill in your details here to prepare thoughtful answers. When you’re ready, copy your answers to clipboard and open the official form.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleSaveToLocalStorage}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-zinc-300 hover:border-zinc-400 text-xs font-bold uppercase text-zinc-800"
                  >
                    <Save className="w-3.5 h-3.5 text-red-600" />
                    <span>Save Draft</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyToClipboard}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <ClipboardCopy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Answers'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleClearDraft}
                    className="p-2 text-zinc-400 hover:text-zinc-700"
                    title="Reset draft"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {savedNotification && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Your volunteer details have been saved to local storage!</span>
                </div>
              )}

              {/* 1. Personal Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-900 border-b border-zinc-200 pb-2">
                  <span className="w-5 h-5 bg-red-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                  <span>Personal Details</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={draft.fullName}
                      onChange={(e) => setDraft({ ...draft, fullName: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-zinc-300 text-sm focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={draft.email}
                      onChange={(e) => setDraft({ ...draft, email: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-zinc-300 text-sm focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 9876543210"
                      value={draft.phone}
                      onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-zinc-300 text-sm focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                      College / Institution *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mar Baselios Christian College of Engg"
                      value={draft.college}
                      onChange={(e) => setDraft({ ...draft, college: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-zinc-300 text-sm focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                      Course & Branch *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. B.Tech Computer Science"
                      value={draft.courseBranch}
                      onChange={(e) => setDraft({ ...draft, courseBranch: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-zinc-300 text-sm focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                      Year of Study *
                    </label>
                    <select
                      value={draft.yearOfStudy}
                      onChange={(e) => setDraft({ ...draft, yearOfStudy: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-zinc-300 text-sm focus:outline-none focus:border-red-600"
                    >
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Postgraduate / Other">Postgraduate / Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 2. Preferred Roles */}
              <div className="space-y-4 pt-4 border-t border-zinc-200">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-900 border-b border-zinc-200 pb-2">
                  <span className="w-5 h-5 bg-red-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                  <span>Preferred Volunteer Role</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                      Primary Preferred Team / Department *
                    </label>
                    <select
                      value={draft.preferredRole}
                      onChange={(e) => setDraft({ ...draft, preferredRole: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-zinc-300 text-sm focus:outline-none focus:border-red-600 font-semibold"
                    >
                      {VOLUNTEER_ROLES.map((r) => (
                        <option key={r.id} value={r.title}>
                          {r.number} — {r.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                      Secondary Choice (Optional)
                    </label>
                    <select
                      value={draft.secondaryRole}
                      onChange={(e) => setDraft({ ...draft, secondaryRole: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-zinc-300 text-sm focus:outline-none focus:border-red-600"
                    >
                      <option value="None">None / Any department</option>
                      {VOLUNTEER_ROLES.map((r) => (
                        <option key={r.id} value={r.title}>
                          {r.number} — {r.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* 3. Skills */}
              <div className="space-y-4 pt-4 border-t border-zinc-200">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-900 border-b border-zinc-200 pb-2">
                  <span className="w-5 h-5 bg-red-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                  <span>Skills & Competencies</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {SKILL_OPTIONS.map((skill) => {
                    const isChecked = draft.skills.includes(skill);
                    return (
                      <label
                        key={skill}
                        className={`flex items-start gap-2.5 p-3 border cursor-pointer select-none text-xs transition-colors ${
                          isChecked ? 'bg-white border-red-600 font-semibold text-zinc-900' : 'bg-white/50 border-zinc-200 text-zinc-700 hover:bg-white'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleSkill(skill)}
                          className="mt-0.5 accent-red-600"
                        />
                        <span>{skill}</span>
                      </label>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">
                    Other Relevant Skills or Tools
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Canva, Video Audio Editing, First Aid, Driving License"
                    value={draft.otherSkills}
                    onChange={(e) => setDraft({ ...draft, otherSkills: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-zinc-300 text-sm focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              {/* 4. Availability & Experience */}
              <div className="space-y-4 pt-4 border-t border-zinc-200">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-900 border-b border-zinc-200 pb-2">
                  <span className="w-5 h-5 bg-red-600 text-white text-xs flex items-center justify-center font-bold">4</span>
                  <span>Availability & Past Experience</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <span className="block text-xs font-bold uppercase text-zinc-700 mb-2">
                      Availability Windows
                    </span>
                    <div className="space-y-2">
                      {AVAILABILITY_OPTIONS.map((avail) => {
                        const checked = draft.availability.includes(avail);
                        return (
                          <label
                            key={avail}
                            className={`flex items-center gap-2.5 p-2.5 border text-xs cursor-pointer ${
                              checked ? 'bg-white border-red-600 font-semibold text-zinc-900' : 'bg-white/60 border-zinc-200 text-zinc-700'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => handleToggleAvailability(avail)}
                              className="accent-red-600"
                            />
                            <span>{avail}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <span className="block text-xs font-bold uppercase text-zinc-700 mb-2">
                      Previous Experience in
                    </span>
                    <div className="space-y-2">
                      {EXPERIENCE_OPTIONS.map((exp) => {
                        const checked = draft.experience.includes(exp);
                        return (
                          <label
                            key={exp}
                            className={`flex items-center gap-2.5 p-2.5 border text-xs cursor-pointer ${
                              checked ? 'bg-white border-red-600 font-semibold text-zinc-900' : 'bg-white/60 border-zinc-200 text-zinc-700'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => handleToggleExperience(exp)}
                              className="accent-red-600"
                            />
                            <span>{exp}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Motivation */}
              <div className="space-y-3 pt-4 border-t border-zinc-200">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-900 border-b border-zinc-200 pb-2">
                  <span className="w-5 h-5 bg-red-600 text-white text-xs flex items-center justify-center font-bold">5</span>
                  <span>Motivation</span>
                </div>

                <label className="block text-xs font-bold uppercase text-zinc-700">
                  Why do you want to volunteer for HackRise ’26? *
                </label>
                <textarea
                  rows={3}
                  placeholder="Share what excites you about HackRise ’26 and what unique energy you will bring to the team..."
                  value={draft.motivation}
                  onChange={(e) => setDraft({ ...draft, motivation: e.target.value })}
                  className="w-full p-3 bg-white border border-zinc-300 text-sm focus:outline-none focus:border-red-600"
                />
              </div>

              {/* Bottom Actions Bar */}
              <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleSaveToLocalStorage}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-zinc-300 hover:border-zinc-500 text-xs font-bold uppercase text-zinc-900"
                  >
                    <Save className="w-4 h-4 text-red-600" />
                    <span>Save Draft Locally</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyToClipboard}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-xs font-bold uppercase text-white"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <ClipboardCopy className="w-4 h-4" />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Form Summary'}</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleLaunchGoogleForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Submit via Official Google Form</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: STATIC PREVIEW OF QUESTIONS */}
          {activeTab === 'preview' && (
            <div className="mt-6 p-6 sm:p-8 bg-zinc-50 border border-zinc-200 space-y-6">
              <div>
                <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-zinc-900">
                  Volunteer Registration Form Preview
                </h4>
                <p className="text-xs text-zinc-600 mt-1">
                  Below is the exact outline of what the official Google Form will request from applicants.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-5 bg-white border border-zinc-200 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-red-600 font-mono">
                    SECTION A
                  </div>
                  <h5 className="font-bold text-zinc-900 text-sm">Personal Details</h5>
                  <ul className="text-xs text-zinc-600 space-y-1.5 list-disc list-inside">
                    <li>Full Name</li>
                    <li>Official Email Address</li>
                    <li>Phone / WhatsApp Number</li>
                    <li>College / Institution Name</li>
                    <li>Course & Branch of Study</li>
                    <li>Current Year of Study (1st to 4th / PG)</li>
                  </ul>
                </div>

                <div className="p-5 bg-white border border-zinc-200 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-red-600 font-mono">
                    SECTION B
                  </div>
                  <h5 className="font-bold text-zinc-900 text-sm">Skills & Role Preferences</h5>
                  <ul className="text-xs text-zinc-600 space-y-1.5 list-disc list-inside">
                    <li>Technical Skills (Dev, Hardware, Network)</li>
                    <li>Communication & Stage Handling</li>
                    <li>Design (Figma, Photoshop, Video)</li>
                    <li>Social Media & Outreach</li>
                    <li>Preferred Team (Select from 12 Teams)</li>
                    <li>Alternative Secondary Department</li>
                  </ul>
                </div>

                <div className="p-5 bg-white border border-zinc-200 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-red-600 font-mono">
                    SECTION C
                  </div>
                  <h5 className="font-bold text-zinc-900 text-sm">Availability & Motivation</h5>
                  <ul className="text-xs text-zinc-600 space-y-1.5 list-disc list-inside">
                    <li>Pre-event setup availability</li>
                    <li>26 January 2027 full 12-hour commitment</li>
                    <li>Post-event wrap-up availability</li>
                    <li>Prior hackathon / fest experience</li>
                    <li>Statement of Motivation ("Why HackRise ’26?")</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleLaunchGoogleForm}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs"
                >
                  <span>Open Official Google Form Now</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
