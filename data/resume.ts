// Sourced from Noah_Sam_Amu_FlowCV_Resume.pdf (public/resume.pdf).
//
// Two date conflicts exist in the source resume itself and were NOT
// silently resolved — the structured header dates are used below; the
// resume's own prose text disagrees with them in both cases:
//   - Bigstack internship: header says 07/2025–09/2025, body text says
//     "march 2023-august 2023."
//   - Gao Tek contract: header says 08/2025–03/2026, body text says
//     "December 2025 to march 2026."
// The resume also credits a full-time promotion to "Big Stack
// Technologizs" under Achievements, but the only full-time role listed
// under Experience is at Codesphere, not Bigstack. Worth fixing at the
// source (the PDF) rather than in this file.

export type ExperienceEntry = {
  role: string;
  organization: string;
  start: string;
  end: string; // "Present" if ongoing
  location?: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Full-Time AI Engineer",
    organization: "Codesphere",
    start: "10/2024",
    end: "02/2025",
    points: ["Hired by Codesphere to work as a full-time AI Engineer."],
  },
  {
    role: "AI Engineer Intern",
    organization: "Bigstack",
    start: "07/2025",
    end: "09/2025",
    points: ["Worked as an AI Engineer intern at Bigstack."],
  },
  {
    role: "AI Engineer (Contract)",
    organization: "Gao Tek",
    start: "08/2025",
    end: "03/2026",
    points: ["Hired on a contract basis to work as a contract AI Engineer."],
  },
];

export type EducationEntry = {
  institution: string;
  credential: string;
  start: string;
  end: string;
  notes?: string;
};

export const education: EducationEntry[] = [
  {
    institution: "Aptech",
    credential: "Data Science Program",
    start: "2022",
    end: "2022",
    notes: "Covered Python, C++, and data science fundamentals.",
  },
  {
    institution: "University of Calabar",
    credential: "BSc, Computer Science",
    start: "2022",
    end: "2026",
  },
  {
    institution: "MIT OpenCourseWare",
    credential: "AI & Machine Learning (self-directed study)",
    start: "08/2024",
    end: "03/2025",
  },
];

export type AchievementEntry = {
  title: string;
  detail?: string;
  date?: string;
};

export const achievements: AchievementEntry[] = [
  {
    title: "3rd Place, Google Hackathon",
    date: "01/12/2022",
  },
  {
    title: "Promoted from intern to full-time AI Engineer",
    detail:
      "At Big Stack Technologizs (as credited on the source resume — see note above on the Experience-section discrepancy).",
  },
  { title: "Deployed Quantum" },
  { title: "Deployed AIN v1" },
];
