import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';

const SkillsSection = () => (
    <section id="skills" className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl font-bold text-white mb-4">ENGINEERING STACK</h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {SKILLS.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex flex-col items-center p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-blue-400 group-hover:bg-blue-400/10 transition-all mb-4">
                            {skill.icon}
                        </div>
                        <span className="text-sm font-mono text-white/60 group-hover:text-white transition-colors">
                            {skill.name}
                        </span>
                        <span className="text-[10px] text-white/20 uppercase tracking-widest mt-1">
                            {skill.category}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default SkillsSection;
