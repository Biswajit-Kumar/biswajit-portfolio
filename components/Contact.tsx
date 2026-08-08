import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section py-24">
      <Reveal>
        <div className="rounded-3xl border border-border bg-surface p-10 text-center sm:p-16">
          <p className="label-mono mb-3">Contact</p>
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s talk about a role, a project, or anything interesting
            you&apos;re building.
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} /> {profile.email}
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
