import {
  Hero,
  Projects,
  Now,
  Skills,
  Uses,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Now />
      <Skills />
      <Uses />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center font-mono text-sm text-text-secondary">
          <p>© 2026 taranveer anand</p>
        </div>
      </footer>
    </main>
  );
}
