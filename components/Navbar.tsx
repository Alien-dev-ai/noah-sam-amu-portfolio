"use client";

import { useEffect, useState } from "react";
import { navItems, socials } from "@/data/nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-base/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between container-px">
        <a
          href="#home"
          className="font-mono text-sm font-medium tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Noah<span className="text-accent">.</span>Sam Amu
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-ink-dim transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-accent/60 hover:text-accent"
          >
            GitHub
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-5 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 top-16 z-40 bg-base/98 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pt-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line-soft py-4 text-lg text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer noopener"
          className="mx-6 mt-6 block rounded-md border border-line px-4 py-3 text-center text-sm text-ink"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
