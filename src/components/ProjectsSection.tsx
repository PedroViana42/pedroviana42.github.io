import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => (
    <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
                        PRACTICAL <br />
                        <span className="text-blue-500 italic font-serif">SOLUTIONS</span>
                    </h2>
                    <p className="text-white/40 font-mono text-sm">Executing end-to-end architectures.</p>
                </div>
                <div className="flex gap-4">
                    <button className="p-3 border border-white/10 rounded-full hover:bg-white/5 text-white/50">
                        <ChevronRight size={20} className="rotate-180" />
                    </button>
                    <button className="p-3 border border-white/10 rounded-full hover:bg-white/5 text-white/50">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((p, i) => (
                    <ProjectCard key={p.id} project={p} index={i} />
                ))}
            </div>
        </div>
    </section>
);

export default ProjectsSection;
