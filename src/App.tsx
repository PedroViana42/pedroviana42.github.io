import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/30">
      <Nav />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
