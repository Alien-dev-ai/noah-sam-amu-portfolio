import { socials } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft py-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 container-px text-xs text-ink-faint sm:flex-row">
        <p>© {new Date().getFullYear()} Noah Sam Amu. Built from scratch.</p>
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer noopener"
          className="transition-colors hover:text-ink-dim"
        >
          github.com/Alien-dev-ai
        </a>
      </div>
    </footer>
  );
}
