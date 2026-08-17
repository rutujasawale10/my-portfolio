import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, Globe, FileCode, Palette, Sparkles, Layers, 
  Server, Database, Cpu, BrainCircuit, 
  Cloud, GitBranch, Terminal, Code2, Code, ShieldCheck, Zap, BarChart3, Brain
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import type { SkillCategory } from '../types/portfolio';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All');

  const categories: (SkillCategory | 'All')[] = [
    'All',
    'Languages',
    'Frontend/Backend',
    'Cloud/DevOps',
    'AI/ML',
    'Developer Tools'
  ];

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-[#A855F7]" />,
    Code: <Code className="w-5 h-5 text-indigo-400" />,
    Terminal: <Terminal className="w-5 h-5 text-purple-300" />,
    Cpu: <Cpu className="w-5 h-5 text-fuchsia-400" />,
    Globe: <Globe className="w-5 h-5 text-blue-400" />,
    Database: <Database className="w-5 h-5 text-purple-400" />,
    Atom: <Atom className="w-5 h-5 text-purple-300" />,
    Server: <Server className="w-5 h-5 text-indigo-400" />,
    FileCode: <FileCode className="w-5 h-5 text-pink-400" />,
    Palette: <Palette className="w-5 h-5 text-violet-400" />,
    Cloud: <Cloud className="w-5 h-5 text-amber-400" />,
    Layers: <Layers className="w-5 h-5 text-purple-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-300" />,
    BrainCircuit: <BrainCircuit className="w-5 h-5 text-[#A855F7]" />,
    Brain: <Brain className="w-5 h-5 text-[#A855F7]" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-[#A855F7]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-purple-300" />,
    GitBranch: <GitBranch className="w-5 h-5 text-orange-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />
  };

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  const levelColors = {
    Expert: 'bg-[#7C3AED]/30 text-purple-200 border-[#7C3AED]/50 shadow-[0_0_10px_rgba(124,58,237,0.3)]',
    Advanced: 'bg-indigo-950/80 text-indigo-300 border-indigo-500/50',
    Proficient: 'bg-[#15102A]/80 text-purple-300 border-[#7C3AED]/30'
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0B0F17]">
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-purple-300 bg-[#15102A]/80 px-4 py-1.5 rounded-full border border-[#7C3AED]/30 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
            Skills & Technical Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-outfit text-white mt-4 mb-4">
            Technical Stack & <span className="gradient-text neon-text-purple">Core Competencies</span>
          </h2>
          <p className="text-slate-300 text-base">
            Categorized skills across Programming Languages, Frontend/Backend, Cloud/DevOps, AI/ML, and Developer Tools.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#7C3AED] text-white shadow-[0_0_20px_rgba(124,58,237,0.5)] border border-purple-400 scale-105'
                  : 'bg-[#15102A]/50 text-purple-200/80 hover:text-white hover:bg-purple-950/60 border border-[#7C3AED]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="p-4 rounded-2xl glass-card border border-[#7C3AED]/25 hover:border-purple-400 relative group tilt-card flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#15102A]/80 border border-[#7C3AED]/40 group-hover:scale-110 transition-transform">
                    {iconMap[skill.iconName] || <Code2 className="w-5 h-5 text-purple-400" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-outfit">
                      {skill.name}
                    </h4>
                    <p className="text-[11px] text-purple-300/70 font-medium">
                      {skill.category}
                    </p>
                  </div>
                </div>

                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${levelColors[skill.level]}`}>
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
