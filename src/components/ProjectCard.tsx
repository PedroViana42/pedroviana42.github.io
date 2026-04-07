import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const primaryUrl = project.liveUrl || project.githubUrl;
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-all"
        >
            <div className="absolute top-0 right-0 p-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                        <Github size={18} />
                    </a>
                )}
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink size={18} />
                    </a>
                )}
            </div>

            <a href={primaryUrl} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className="mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2 block">
                        {project.category} // 0{index + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                        {project.title}
                    </h3>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-8 h-20 overflow-hidden text-ellipsis">
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
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-white/5">
                        {project.metrics.map(m => (
                            <div key={m.label}>
                                <div className="text-[10px] uppercase tracking-widest text-white/30 whitespace-nowrap">{m.label}</div>
                                <div className="text-sm font-mono text-white truncate">{m.value}</div>
                            </div>
                        ))}
                    </div>
                )}
            </a>
        </motion.div>
    );
};

export default ProjectCard;
