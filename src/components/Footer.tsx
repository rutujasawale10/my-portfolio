import React from 'react';
import { ArrowUp, Code2, Heart, Mail, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07090E] text-slate-400 py-12 border-t border-[#7C3AED]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-950/60">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7C3AED] via-fuchsia-600 to-indigo-600 p-0.5 shadow-[0_0_15px_rgba(124,58,237,0.4)]">
              <div className="w-full h-full bg-[#07090E] rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-purple-300" />
              </div>
            </div>
            <div>
              <p className="text-base font-bold text-white font-outfit">Rutuja Sawale</p>
              <p className="text-xs text-purple-400 font-mono">CSE STUDENT | AI-ML EXPLORER</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-bold">
            <a href="#about" className="hover:text-purple-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-purple-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-300 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-purple-300 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#15102A]/80 border border-[#7C3AED]/30 text-purple-300 hover:text-white hover:border-purple-400 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#15102A]/80 border border-[#7C3AED]/30 text-purple-300 hover:text-white hover:border-purple-400 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="p-2.5 rounded-xl bg-[#15102A]/80 border border-[#7C3AED]/30 text-purple-300 hover:text-white hover:border-purple-400 transition-all"
              aria-label="Email Direct Action"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#15102A]/80 border border-[#7C3AED]/30 text-purple-300 hover:text-white hover:border-purple-400 transition-all"
              aria-label="WhatsApp Direct Action"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#7C3AED] border border-purple-400 text-white transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:scale-110 ml-2"
              title="Scroll to Top"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Rutuja Sawale. Built with passion, code and AI.</p>
          <div className="flex items-center gap-1.5 text-purple-300/60">
            <span>Designed & Engineered for AI/ML & Cloud</span>
            <Heart className="w-3.5 h-3.5 text-purple-500 fill-purple-500 inline ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
};
