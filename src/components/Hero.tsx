import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Activity, Server } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Architecting practical intelligence.";

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(timer);
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-widest mb-6">
                        <Activity size={12} className="animate-pulse" />
                        System Status: Operational
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
                        PEDRO <br />
                        <span className="text-blue-500 italic font-serif">AUGUSTO</span>
                    </h1>

                    <div className="h-12">
                        <p className="text-xl md:text-2xl font-mono text-white/60 max-w-2xl">
                            {text}<span className="animate-pulse">_</span>
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-white text-black font-bold rounded hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1 block text-center"
                        >
                            Explore Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border border-white/20 text-white font-bold rounded hover:bg-white/5 transition-all block text-center"
                        >
                            Get in Touch
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Floating Stats */}
            <div className="absolute bottom-12 right-12 hidden lg:block">
                <div className="p-6 border border-white/10 rounded-xl bg-black/40 backdrop-blur-xl">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
                            <Server size={24} />
                        </div>
                        <div>
                            <div className="text-[10px] uppercase tracking-widest text-white/40">Current Stack</div>
                            <div className="text-sm font-mono text-white">Full-Stack AI Solutions</div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-1 w-48 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '85%' }}
                                transition={{ duration: 2, delay: 1 }}
                                className="h-full bg-blue-500"
                            />
                        </div>
                        <div className="flex justify-between text-[10px] font-mono text-white/40">
                            <span>LOGIC LOAD</span>
                            <span>85%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
