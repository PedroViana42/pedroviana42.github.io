import React from 'react';

const Nav = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <button
                    onClick={scrollToTop}
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">P</div>
                    <span className="font-mono text-sm tracking-tighter text-white/90">PEDRO.INIT()</span>
                </button>
                <div className="hidden md:flex items-center gap-8">
                    {['Projects', 'Skills', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-xs uppercase tracking-widest text-white/50 hover:text-blue-400 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>
                <a
                    href="/Pedro Augusto - Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded border border-blue-500/30 text-blue-400 text-xs font-mono hover:bg-blue-500/10 transition-all"
                >
                    RESUME.PDF
                </a>
            </div>
        </nav>
    );
};

export default Nav;
