import React from 'react';

const AboutSection = () => (
    <section id="about" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em] mb-8">Philosophy</h2>
            <p className="text-3xl md:text-4xl font-serif italic text-white/90 leading-snug">
                "I focus on building practical, end-to-end solutions rather than just talking about hardware. I love getting my hands dirty and turning innovative ideas into reality."
            </p>
            <div className="mt-12 flex justify-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
            </div>
        </div>
    </section>
);

export default AboutSection;
