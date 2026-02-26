import React from 'react';

const ContactSection = () => (
    <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="relative p-12 md:p-20 rounded-3xl bg-blue-600 overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/20 transition-all duration-700" />

                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                        READY TO BUILD <br /> SOMETHING REAL?
                    </h2>
                    <p className="text-blue-100 text-lg mb-12 max-w-md">
                        Whether it's a data pipeline, an AI logic system, or a full-stack web app, let's turn your vision into a practical solution.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="mailto:pedroviana0542@gmail.com"
                            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all block text-center"
                        >
                            Start a Conversation
                        </a>
                        <a
                            href="/Pedro Augusto - Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all"
                        >
                            View My Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactSection;
