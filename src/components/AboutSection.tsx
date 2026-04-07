import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const PHILOSOPHIES = [
    {
        title: 'Architectural Vision',
        quote: "Data infrastructure is the backbone of modern intelligence. I focus on designing high-availability systems that prioritize fault tolerance, scalability, and deterministic performance."
    },
    {
        title: 'Business Impact',
        quote: "Engineering is not just about writing code; it's about solving organizational challenges. I leverage my Computer Science background to build systems that deliver measurable business value and operational excellence."
    },
    {
        title: 'Engineering Standard',
        quote: "Resilience is non-negotiable. I implement secure-by-default architectures and robust ETL pipelines that ensure data integrity and system stability under high-concurrency loads."
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
