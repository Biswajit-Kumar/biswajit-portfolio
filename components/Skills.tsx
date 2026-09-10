import Reveal from "@/components/Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section py-24">
      <Reveal>
        <p className="label-mono mb-3">Skills</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          What I build with.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50">
              <p className="mb-4 text-sm font-medium text-accent">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-foreground/80 transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    {skill}
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
