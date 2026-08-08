"use client";

import { FileText } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/70 backdrop-blur-md">
      <nav className="section flex h-16 items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight">
          {profile.name}
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent sm:flex"
          >
            <FileText size={14} /> Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            Say hi <span aria-hidden="true">👋</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
