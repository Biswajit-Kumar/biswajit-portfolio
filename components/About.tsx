import {
  Briefcase,
  GraduationCap,
  MapPin,
  Sparkles,
  Radio,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { quickFacts } from "@/lib/data";

const icons: Record<string, React.ComponentType<{ size?: number }>> = {
  Role: Briefcase,
  Currently: GraduationCap,
  Status: Radio,
  Location: MapPin,
  "Off-screen": Sparkles,
};

export default function About() {
  return (
    <section id="about" className="section py-24">
      <Reveal>
        <p className="label-mono mb-3">About</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          A bit about me.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quickFacts.map((fact, i) => {
          const Icon = icons[fact.label];
          return (
            <Reveal key={fact.label} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 text-accent transition-colors group-hover:bg-accent group-hover:text-background">
                  {Icon && <Icon size={18} />}
                </div>
                <p className="label-mono mb-2">{fact.label}</p>
                <p className="text-base text-foreground/90">{fact.value}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
