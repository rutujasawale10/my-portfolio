import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Cloud, CheckCircle2, Award, Trophy, FolderGit2, GitCommit } from 'lucide-react';
import { PERSONAL_DETAILS, ABOUT_CARDS, STATS_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const statIconMap: Record<string, React.ReactNode> = {
    Award: <Award className="w-6 h-6 text-[#A855F7]" />,
    Trophy: <Trophy className="w-6 h-6 text-purple-400" />,
    FolderGit2: <FolderGit2 className="w-6 h-6 text-indigo-400" />,
    GitCommit: <GitCommit className="w-6 h-6 text-fuchsia-400" />
  };

  const cardIconMap: Record<string, React.ReactNode> = {
    Brain: <Brain className="w-6 h-6 text-[#A855F7]" />,
    Code2: <Code2 className="w-6 h-6 text-purple-400" />,
    Cloud: <Cloud className="w-6 h-6 text-indigo-400" />
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0D0B1D] border-y border-[#7C3AED]/25">
      {/* Background Accent Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-purple-300 bg-[#1E143B]/80 px-4 py-1.5 rounded-full border border-[#7C3AED]/30 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-outfit text-white mt-4 mb-4">
            Passionate Computer Science Student & <span className="gradient-text neon-text-purple">AI/ML Explorer</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Focused on building intelligent digital solutions, full-stack software, and scalable cloud systems.
          </p>
        </motion.div>

        {/* Story Narrative & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed"
          >
            <div className="p-6 rounded-2xl glass-card border border-[#7C3AED]/30">
              <h3 className="text-2xl font-bold font-outfit text-white mb-3">
                Building Scalable & Intelligent Software
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {PERSONAL_DETAILS.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "B.E. Computer Science & Engineering (PRMCEAM)",
                "EduSkills Google AI-ML Virtual Intern (Grade O)",
                "Accredited AWS Platform Architect (Databricks)",
                "Copado Certified AI & Salesforce DevOps",
                "Advanced SQL Certified by HackerRank",
                "Tata Cybersecurity Program Graduate"
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-purple-200 bg-[#15102A]/60 p-2.5 rounded-xl border border-[#7C3AED]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#A855F7] flex-shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {STATS_DATA.map((stat) => (
              <div
                key={stat.id}
                className="p-5 rounded-2xl glass-card border border-[#7C3AED]/30 hover:border-purple-400 transition-all duration-300 tilt-card"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-[#15102A]/80 border border-[#7C3AED]/40">
                    {statIconMap[stat.iconName]}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-purple-400">
                    METRIC
                  </span>
                </div>
                <div className="text-3xl font-black font-outfit text-white mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-xs font-bold text-purple-200 mb-1">
                  {stat.label}
                </p>
                <p className="text-[11px] text-slate-400 leading-normal">
                  {stat.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

        {/* 3 Core Focus Cards */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-outfit text-white">
              Core Technical Focus Areas
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_CARDS.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="p-6 rounded-2xl glass-card border border-[#7C3AED]/30 hover:border-purple-400 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] tilt-card"
              >
                <div>
                  <div className="p-3.5 rounded-xl bg-[#15102A]/80 border border-[#7C3AED]/40 w-fit mb-5 group-hover:scale-110 transition-transform">
                    {cardIconMap[card.icon]}
                  </div>

                  <h4 className="text-xl font-bold font-outfit text-white mb-2.5 group-hover:text-purple-300 transition-colors">
                    {card.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
