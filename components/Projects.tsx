import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section py-24">
      <Reveal>
        <p className="label-mono mb-3">Projects</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Things I&apos;ve built and extended.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.05}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent/50">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  {project.subtitle && (
                    <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
                  )}
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} source on GitHub`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live site`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
              {project.period && (
                <p className="label-mono mt-2">{project.period}</p>
              )}
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-foreground/80 transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
