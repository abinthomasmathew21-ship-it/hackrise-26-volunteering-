import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { NoticeBanner } from './components/NoticeBanner';
import { Hero } from './components/Hero';
import { PosterModal } from './components/PosterModal';
import { AboutSection } from './components/AboutSection';
import { RolesSection } from './components/RolesSection';
import { WhyJoinSection } from './components/WhyJoinSection';
import { ProcessSection } from './components/ProcessSection';
import { ApplicationSection } from './components/ApplicationSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);
  const [selectedRoleForApplication, setSelectedRoleForApplication] = useState<string>('Operations Team');

  const handleSelectRole = (roleTitle: string) => {
    setSelectedRoleForApplication(roleTitle);
    // Smooth scroll down to application section so the applicant sees it loaded
    const appSection = document.getElementById('application');
    if (appSection) {
      appSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Navbar adhering to the strict Top Bar Contract */}
      <Navbar />

      {/* Prominent Red & White Notice: Volunteer Registration != Participant Registration */}
      <NoticeBanner />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenPosterModal={() => setIsPosterModalOpen(true)} />

        {/* 2. About Volunteering & Partners */}
        <AboutSection />

        {/* 3. 12 Volunteer Roles (Interactive cards with filter & select) */}
        <RolesSection
          onSelectRole={handleSelectRole}
          selectedRoleTitle={selectedRoleForApplication}
        />

        {/* 4. Why Join: LEAD, CREATE, CONNECT, LEARN, EXPERIENCE */}
        <WhyJoinSection />

        {/* 5. Volunteer Selection Process (01 to 06 Roadmap) */}
        <ProcessSection />

        {/* 6. Volunteer Registration & Form Preview / Companion Drafter */}
        <ApplicationSection
          selectedRoleFromCards={selectedRoleForApplication}
          onClearSelectedRole={() => setSelectedRoleForApplication('')}
        />

        {/* 7. Frequently Asked Questions */}
        <FAQSection />

        {/* 8. Final High-Impact CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Resolution Poster Modal */}
      <PosterModal
        isOpen={isPosterModalOpen}
        onClose={() => setIsPosterModalOpen(false)}
      />
    </div>
  );
}
