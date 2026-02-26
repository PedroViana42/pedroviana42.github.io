import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const PHILOSOPHIES = [
    {
        title: 'Philosophy',
        quote: "I focus on building practical, end-to-end solutions rather than just talking about hardware. I love getting my hands dirty and turning innovative ideas into reality."
    },
    {
        title: 'The Mindset',
        quote: "Code is just a tool; the real goal is solving the puzzle. Whether I'm architecting a complex data pipeline or crafting a smooth web interface, I look for the most creative and efficient path to connect the dots."
    },
    {
        title: 'The Standard',
        quote: "Great software is built on transparency, security, and good architecture. I take pride in creating well-structured, responsible solutions that are as robust behind the scenes as they are clean on the surface."
    }
];

const AboutSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % PHILOSOPHIES.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="about" className="py-32 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center min-h-[300px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em] mb-8">
                            {PHILOSOPHIES[activeIndex].title}
                        </h2>
                        <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed md:px-12">
                            "{PHILOSOPHIES[activeIndex].quote}"
                        </p>
                    </motion.div>
                </AnimatePresence>

                <div className="mt-12 flex justify-center gap-4">
                    {PHILOSOPHIES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-500 ${i === activeIndex ? 'bg-blue-500 w-8' : 'bg-white/10 hover:bg-white/20'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
