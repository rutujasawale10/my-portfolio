import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Code2, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { SOCIAL_LINKS, HERO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface NavbarProps {
  onShowToast?: (msg: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onShowToast }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    onShowToast?.("Resume download initiated for Rutuja Sawale!");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#0B0F17]/90 backdrop-blur-xl border-b border-[#7C3AED]/30 shadow-[0_4px_30px_rgba(124,58,237,0.2)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Subtitle */}
          <a
            href="#hero"
            className="flex items-center gap-3 group cursor-pointer"
            aria-label="Rutuja Sawale Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7C3AED] via-fuchsia-600 to-indigo-600 p-0.5 shadow-[0_0_15px_rgba(124,58,237,0.4)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0B0F17] rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-purple-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight font-outfit leading-none text-white group-hover:text-purple-300 transition-colors">
                Rutuja Sawale
              </span>
              <span className="text-[10px] text-purple-400 font-mono tracking-wider uppercase mt-1">
                {HERO_DATA.subtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#15102A]/80 p-1.5 rounded-full border border-[#7C3AED]/30 backdrop-blur-md">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.5)] border border-purple-400'
                      : 'text-purple-200/80 hover:text-white hover:bg-purple-900/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 rounded-full border border-purple-300 pointer-events-none"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#15102A]/90 text-purple-300 hover:text-white hover:bg-[#7C3AED]/30 border border-[#7C3AED]/40 transition-all duration-300 hover:scale-105"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#15102A]/90 text-purple-300 hover:text-white hover:bg-[#7C3AED]/30 border border-[#7C3AED]/40 transition-all duration-300 hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-[#15102A]/90 text-purple-300 hover:text-white border border-[#7C3AED]/40 transition-all duration-300 hover:scale-105"
              aria-label="Toggle dark/light theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href={SOCIAL_LINKS.resume}
              onClick={handleResumeDownload}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4.5 py-2 text-xs font-bold rounded-full bg-gradient-to-r from-[#7C3AED] to-indigo-600 text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300 border border-purple-400/40 hover:scale-105"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[#15102A]/90 text-purple-300 border border-[#7C3AED]/40"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#15102A]/90 text-purple-300 border border-[#7C3AED]/40"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0B0F17]/95 border-b border-[#7C3AED]/30 backdrop-blur-xl px-4 pt-3 pb-6 mt-2 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-purple-200 hover:bg-purple-950/60 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-purple-900/40 flex items-center justify-between gap-2">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#15102A]/90 text-purple-300 border border-[#7C3AED]/40 flex items-center justify-center gap-2 text-xs font-semibold hover:text-white hover:border-purple-400 flex-1"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#15102A]/90 text-purple-300 border border-[#7C3AED]/40 flex items-center justify-center gap-2 text-xs font-semibold hover:text-white hover:border-purple-400 flex-1"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={SOCIAL_LINKS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleResumeDownload();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-bold rounded-xl bg-[#7C3AED] text-white justify-center shadow-[0_0_15px_rgba(124,58,237,0.4)] flex-1"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
