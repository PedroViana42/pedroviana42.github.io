import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group block relative p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-pointer"
        >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={18} className="text-blue-400" />
            </div>

            <div className="mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2 block">
                    {project.category} // 0{index + 1}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-8">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-[10px] font-mono border border-white/10 rounded text-white/40">
                        {tag}
                    </span>
                ))}
            </div>

            {project.metrics && (
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                    {project.metrics.map(m => (
                        <div key={m.label}>
                            <div className="text-[10px] uppercase tracking-widest text-white/30">{m.label}</div>
                            <div className="text-lg font-mono text-white">{m.value}</div>
                        </div>
                    ))}
                </div>
            )}
        </motion.a>
    );
};

export default ProjectCard;
