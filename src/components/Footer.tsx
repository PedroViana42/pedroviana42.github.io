import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
    <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-[10px]">P</div>
                    <span className="font-mono text-xs tracking-tighter text-white/90">PEDRO.ARCHITECT</span>
                </div>
                <p className="text-white/30 text-xs max-w-xs leading-relaxed">
                    Building the bridge between innovative AI concepts and practical, scalable infrastructure.
                </p>
            </div>

            <div className="flex gap-8">
                {[
                    { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/PedroViana42' },
                    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pedroaugustoviana' },
                    { icon: <Mail size={20} />, label: 'Email', href: 'mailto:pedroviana0542@gmail.com' }
                ].map(social => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-blue-400 transition-colors"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
                © 2026 ALL RIGHTS RESERVED // SYSTEM_V1.0
            </div>
        </div>
    </footer>
);

export default Footer;
