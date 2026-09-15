export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socials = {
  github: "https://github.com/Alien-dev-ai",
  linkedin: "https://www.linkedin.com/in/noah-amu-860b6448",
  // Sourced from the resume (public/resume.pdf) — swap if you'd rather
  // publish a different address.
  email: "amu0496@gmail.com",
  // Sourced from the resume (public/resume.pdf).
  phone: "09169190713",
};
