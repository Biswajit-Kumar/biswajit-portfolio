import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="section flex flex-col items-center justify-between gap-2 border-t border-border py-8 text-xs text-muted sm:flex-row">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
    </footer>
  );
}
