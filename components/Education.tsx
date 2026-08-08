import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { certifications, education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section py-24">
      <Reveal>
        <p className="label-mono mb-3">Education</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Academic background.
        </h2>
      </Reveal>

      <div className="mt-12 space-y-4">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 0.05}>
            <div className="flex flex-col justify-between gap-2 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 sm:flex-row sm:items-center">
              <div>
                <p className="font-medium">{item.degree}</p>
                <p className="text-sm text-muted">{item.school}</p>
              </div>
              <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                <p className="label-mono">{item.period}</p>
                <p className="text-sm text-accent">{item.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {certifications.length > 0 && (
        <Reveal delay={0.15}>
          <div className="mt-12">
            <p className="label-mono mb-4">Certifications</p>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
                >
                  <div>
                    <p className="font-medium">{cert.title}</p>
                    <p className="mt-1 text-sm text-muted">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View certificate for ${cert.title}`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      )}
    </section>
  );
}
