import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectMosaic from "@/components/ProjectMosaic";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Timeline />
      <SkillsGrid />
      <ProjectMosaic />
      
      {/* Simple Footer */}
      <footer className="py-12 bg-black border-t border-brand-charcoal text-center">
        <p className="text-gray-500 font-bebas tracking-[0.2em] text-sm">
          PEDRO VIANA &copy; {new Date().getFullYear()} | TODOS OS DIREITOS RESERVADOS
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/pedroaugustoviana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow hover:text-white transition-colors font-bebas tracking-widest text-lg"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/PedroViana42"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow hover:text-white transition-colors font-bebas tracking-widest text-lg"
          >
            GITHUB
          </a>
          <a
            href="mailto:pedroviana0542@gmail.com"
            className="text-brand-yellow hover:text-white transition-colors font-bebas tracking-widest text-lg"
          >
            CONTATO
          </a>
        </div>
      </footer>
    </main>
  );
}
