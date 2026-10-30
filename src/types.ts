export interface VolunteerRole {
  id: string;
  number: string;
  title: string;
  category: 'Operations' | 'Technical' | 'Media' | 'Marketing' | 'Hospitality';
  summary: string;
  responsibilities: string[];
  idealSkills: string[];
  slotsEstimate?: string;
}

export interface ApplicantDraft {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  courseBranch: string;
  yearOfStudy: string;
  skills: string[];
  otherSkills: string;
  preferredRole: string;
  secondaryRole: string;
  availability: string[];
  experience: string[];
  motivation: string;
  lastSaved?: string;
}
