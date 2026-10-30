import { VolunteerRole } from '../types';

export const OFFICIAL_GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScrIHqU5vO8ys4kby_xedowOvlrzIh-AHAaJ-BAcfjyfYPzxg/viewform?usp=publish-editor';

export const POSTER_IMAGE_URL = '/assets/aistudio/IMG-20261022-WA0004_1__c2941550.jpg';

export const VOLUNTEER_ROLES: VolunteerRole[] = [
  {
    id: 'operations',
    number: '01',
    title: 'Operations Team',
    category: 'Operations',
    summary: 'Manage event flow, coordination, schedules and on-ground execution.',
    responsibilities: [
      'Coordinate the minute-by-minute schedule during the 12-hour sprint',
      'Oversee hackathon arena movement and resolve physical operational bottlenecks',
      'Serve as rapid on-ground response liaison across all functional teams',
    ],
    idealSkills: ['Event Management', 'Crisis Handling', 'Time Management', 'Team Coordination'],
    slotsEstimate: '8–10 Volunteers',
  },
  {
    id: 'technical',
    number: '02',
    title: 'Technical Team',
    category: 'Technical',
    summary: 'Support technical infrastructure, participants, submissions and hackathon platforms.',
    responsibilities: [
      'Maintain stable high-speed Wi-Fi, LAN, power drops, and network backup',
      'Assist teams with Devpost/GitHub repository creation and project submission queries',
      'Troubleshoot platform logins, API access tokens, and sandbox test environments',
    ],
    idealSkills: ['Networking Basics', 'Git/GitHub', 'Cloud/APIs', 'Technical Troubleshooting'],
    slotsEstimate: '6–8 Volunteers',
  },
  {
    id: 'registration',
    number: '03',
    title: 'Registration & Help Desk',
    category: 'Operations',
    summary: 'Handle participant check-in, registration verification and queries.',
    responsibilities: [
      'Verify student college IDs, tickets, and attendance upon morning arrival',
      'Issue participant smart badges, delegate kits, and access lanyards',
      'Run the central 24/7 help desk answering participant and mentor inquiries',
    ],
    idealSkills: ['Clear Communication', 'Data Entry & Spreadsheets', 'Friendly Demeanor', 'Attention to Detail'],
    slotsEstimate: '6–8 Volunteers',
  },
  {
    id: 'hospitality',
    number: '04',
    title: 'Hospitality Team',
    category: 'Hospitality',
    summary: 'Coordinate guests, mentors, judges and participant requirements.',
    responsibilities: [
      'Host industry mentors, jury members, keynote speakers, and VIP dignitaries',
      'Coordinate meal distribution, midnight energy snacks, coffee bars, and resting areas',
      'Ensure comfort, dietary requirements, and first-aid point assistance for all attendees',
    ],
    idealSkills: ['Interpersonal Relations', 'Guest Care', 'Empathy', 'Resourcefulness'],
    slotsEstimate: '8–10 Volunteers',
  },
  {
    id: 'media',
    number: '05',
    title: 'Media & Content Team',
    category: 'Media',
    summary: 'Create photos, videos, reels, posts and event documentation.',
    responsibilities: [
      'Capture high-res candid photography of hacking sessions, pitches, and key moments',
      'Record short-form video reels, participant soundbites, and hype clips in real-time',
      'Coordinate with the editing bench for rapid sameday video recap releases',
    ],
    idealSkills: ['DSLR/Mirrorless Photography', 'Videography', 'Premiere / CapCut', 'Storytelling'],
    slotsEstimate: '5–6 Volunteers',
  },
  {
    id: 'social-media',
    number: '06',
    title: 'Social Media Team',
    category: 'Media',
    summary: 'Manage Instagram, LinkedIn, WhatsApp and promotional content.',
    responsibilities: [
      'Publish live Instagram stories, countdown updates, and milestone announcements',
      'Draft LinkedIn broadcasts highlighting our industry partners, judges, and sponsors',
      'Moderate official WhatsApp broadcast channels and participant announcements',
    ],
    idealSkills: ['Social Media Copywriting', 'Real-time Posting', 'Community Engagement', 'Trends Savvy'],
    slotsEstimate: '4–5 Volunteers',
  },
  {
    id: 'design',
    number: '07',
    title: 'Design Team',
    category: 'Media',
    summary: 'Create posters, certificates, social media creatives and event graphics.',
    responsibilities: [
      'Produce instant on-demand presentation slides, winner certificates, and social banners',
      'Design digital signage displayed on projector screens and venue directional displays',
      'Ensure strict adherence to HackRise ’26 brand guidelines and red-and-white visual identity',
    ],
    idealSkills: ['Figma', 'Adobe Photoshop/Illustrator', 'Typography', 'Visual Layout'],
    slotsEstimate: '3–4 Volunteers',
  },
  {
    id: 'marketing',
    number: '08',
    title: 'Marketing & Outreach',
    category: 'Marketing',
    summary: 'Promote HackRise ’26 and coordinate with colleges and student communities.',
    responsibilities: [
      'Liaise with student campus ambassadors across colleges and technical institutes',
      'Conduct WhatsApp outreach and direct promotions in developer societies and IEEE/µLearn cells',
      'Drive applicant enthusiasm and field questions from competing teams',
    ],
    idealSkills: ['Outreach & Networking', 'Public Speaking', 'Persuasion', 'Campaign Coordination'],
    slotsEstimate: '5–6 Volunteers',
  },
  {
    id: 'sponsorship',
    number: '09',
    title: 'Sponsorship & Partnerships',
    category: 'Marketing',
    summary: 'Assist with sponsor communication and partner coordination.',
    responsibilities: [
      'Support brand sponsor booths, demo tables, and mentor lounge setups',
      'Ensure sponsor deliverables (logos on banners, promotional flyers, shoutouts) are fulfilled',
      'Gather event metrics, photos, and post-event sponsor recap dossiers',
    ],
    idealSkills: ['Corporate Communication', 'Stakeholder Management', 'Professionalism'],
    slotsEstimate: '3–4 Volunteers',
  },
  {
    id: 'stage',
    number: '10',
    title: 'Stage & Event Management',
    category: 'Operations',
    summary: 'Manage stage activities, announcements, sessions and event transitions.',
    responsibilities: [
      'Oversee stage AV, microphone testing, lighting cues, and screen feeds',
      'Cue speakers, mentors, and finalists during opening ceremonies and demo showdowns',
      'Time project pitching rounds with strict digital timer alerts',
    ],
    idealSkills: ['Stage Coordination', 'Audio/Visual Familiarity', 'Punctuality', 'Composure'],
    slotsEstimate: '4–5 Volunteers',
  },
  {
    id: 'logistics',
    number: '11',
    title: 'Logistics Team',
    category: 'Operations',
    summary: 'Handle equipment, materials, venue setup and operational requirements.',
    responsibilities: [
      'Set up hacking bays, extension boards, signage standees, and participant tables',
      'Manage inventory of badges, swag kits, stationery, water stations, and cables',
      'Lead pack-down operations and ensure clean handback of the venue facilities',
    ],
    idealSkills: ['Logistics Planning', 'Physical Endurance', 'Inventory Tracking', 'Resourcefulness'],
    slotsEstimate: '8–10 Volunteers',
  },
  {
    id: 'documentation',
    number: '12',
    title: 'Documentation Team',
    category: 'Operations',
    summary: 'Maintain event records, reports, attendance and official documentation.',
    responsibilities: [
      'Record precise time stamps, jury scoring tallies, and judge deliberation sheets',
      'Compile attendance logs, participant feedback surveys, and incident reports',
      'Draft the official HackRise ’26 Post-Event Summary Report for Orbinex & MBC',
    ],
    idealSkills: ['Technical Writing', 'Data Accuracy', 'Google Docs / Sheets', 'Archiving'],
    slotsEstimate: '3–4 Volunteers',
  },
];

export const SKILL_OPTIONS = [
  'Technical Skills (Coding, APIs, Hardware)',
  'Communication & Public Speaking',
  'Event Management & Operations',
  'Design (Figma, Photoshop, UI/UX)',
  'Social Media & Content Strategy',
  'Photography & Videography',
  'Leadership & Team Handling',
  'Logistics & Ground Setup',
  'Stage & AV Coordination',
];

export const AVAILABILITY_OPTIONS = [
  'Pre-event activities (Prep & Dry Runs)',
  'Event day (Full 12-Hour Sprint — 26 Jan 2027)',
  'Post-event activities (Wrap-up & Reviews)',
];

export const EXPERIENCE_OPTIONS = [
  'Hackathons (Participant or Volunteer)',
  'College Technical Fests & Symposia',
  'Club / Community Activities (µLearn, IEEE, GDG, etc.)',
  'Large-scale Event Management',
  'None yet (Eager first-time volunteer!)',
];

export const SELECTION_STEPS = [
  {
    step: '01',
    title: 'APPLY',
    desc: 'Submit the official Volunteer Registration Form with your skillsets, past experiences, and preferred teams.',
    highlight: 'Open Now',
  },
  {
    step: '02',
    title: 'REVIEW',
    desc: 'The organizing committee reviews all submissions against department staffing requirements.',
    highlight: 'Rolling Basis',
  },
  {
    step: '03',
    title: 'SHORTLIST',
    desc: 'Shortlisted candidates are selected based on interest alignment and volunteer availability.',
    highlight: 'Notification via WhatsApp/Email',
  },
  {
    step: '04',
    title: 'TEAM ALLOCATION',
    desc: 'Selected volunteers are assigned to specific departments (Tech, Ops, Media, Stage, etc.).',
    highlight: 'Role Matching',
  },
  {
    step: '05',
    title: 'ORIENTATION',
    desc: 'Mandatory briefing, handbook walkthrough, duty rosters, and volunteer kit handover.',
    highlight: 'Pre-Event Briefing',
  },
  {
    step: '06',
    title: 'HACKRISE ’26',
    desc: 'Execute the high-energy 12-hour hackathon, support participants, and celebrate the build.',
    highlight: '26 January 2027',
  },
];

export const FAQS = [
  {
    q: 'Is this registration form for hackathon participants/coders?',
    a: 'No. This website and application form are strictly for the Organizing & Volunteer Team. If you want to compete as a participant or submit a project, please stay tuned for the official HackRise ’26 Participant Registration portal.',
  },
  {
    q: 'Who is eligible to apply as a volunteer?',
    a: 'Any currently enrolled college student with dedication, passion, and excitement for technology and events can apply. Prior hackathon experience is welcomed but not mandatory—motivation and reliability matter most!',
  },
  {
    q: 'Will volunteers receive a certificate?',
    a: 'Yes. All active volunteers who complete their duties during HackRise ’26 receive an official Volunteer & Leadership Certificate jointly issued by Orbinex Innovations, MBC : 80, and µLearn MBCCET.',
  },
  {
    q: 'Are food and volunteer merchandise provided?',
    a: 'Yes. All designated volunteers are provided with official HackRise ’26 volunteer kits/merchandise, all meals, energy snacks, and refreshments throughout the 12-hour event.',
  },
  {
    q: 'Can I apply for more than one team role?',
    a: 'In the registration form, you can indicate your primary preferred role as well as secondary interests. The core organizing committee will evaluate your skill profile to place you in the most impactful position.',
  },
  {
    q: 'What is the schedule for 26 January 2027?',
    a: 'Volunteers report early morning for the final walkthrough and participant registration. The hackathon runs for 12 continuous hours, followed by evaluations, grand presentations, and victory celebrations.',
  },
];
