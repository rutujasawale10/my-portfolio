import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  Sparkles, 
  MapPin, 
  Mail, 
  ArrowRight,
  Brain,
  Code2,
  Cloud,
  Download
} from 'lucide-react';
import { HERO_DATA, SOCIAL_LINKS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import profileImg from '../assets/profile.png';

interface HeroProps {
  onShowToast?: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onShowToast }) => {
  const [imageError, setImageError] = useState(false);
  const resolvedProfileImg = profileImg || HERO_DATA.profileImage;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } 
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0B0F17]">
      {/* Dark Futuristic Background & Glowing Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-[#7C3AED]/20 via-[#A855F7]/15 to-indigo-900/20 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gradient-to-br from-[#7C3AED]/15 via-fuchsia-600/10 to-indigo-950/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7C3AED0c_1px,transparent_1px),linear-gradient(to_bottom,#7C3AED0c_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Availability Badge */}
        <div className="flex justify-end items-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E143B]/80 border border-[#7C3AED]/40 text-purple-200 text-xs font-semibold shadow-[0_0_15px_rgba(124,58,237,0.3)] backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7C3AED]"></span>
            </span>
            <span>{HERO_DATA.availability}</span>
          </motion.div>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Text Content with Staggered Animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Greeting Label */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>{HERO_DATA.smallLabel}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-outfit mb-5 leading-[1.15]">
              {HERO_DATA.headline}{" "}
              <span className="gradient-text neon-text-purple block mt-1">
                {HERO_DATA.headlineGradient}
              </span>
            </motion.h1>

            {/* Skill Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 mb-6">
              {HERO_DATA.skillBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-[#1E143B]/60 border border-[#7C3AED]/30 text-purple-200 text-xs font-semibold backdrop-blur-sm shadow-sm hover:border-[#A855F7] transition-colors"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Short Description */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-300 mb-6 max-w-2xl font-normal leading-relaxed">
              {HERO_DATA.bio}
            </motion.p>

            {/* Location & Contact Info */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300 mb-8 bg-[#15102A]/60 p-3 rounded-xl border border-[#7C3AED]/20">
              <div className="flex items-center gap-1.5 text-purple-200">
                <MapPin className="w-4 h-4 text-[#A855F7]" />
                <span>{HERO_DATA.location}</span>
              </div>
              <span className="text-purple-600">|</span>
              <a href={`mailto:${HERO_DATA.email}`} className="flex items-center gap-1.5 text-purple-200 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#A855F7]" />
                <span>{HERO_DATA.email}</span>
              </a>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] via-purple-600 to-[#A855F7] text-white font-bold text-sm shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:shadow-[0_0_40px_rgba(124,58,237,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 border border-purple-400/40 w-full sm:w-auto"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={SOCIAL_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onShowToast?.("Opening Rutuja Sawale Resume PDF...")}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#15102A]/80 hover:bg-[#7C3AED] text-purple-200 hover:text-white font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-[#7C3AED]/40 w-full sm:w-auto shadow-[0_0_15px_rgba(124,58,237,0.2)]"
              >
                <Download className="w-4 h-4 text-purple-300" />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-card text-purple-100 font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-[#7C3AED]/30 w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 text-[#A855F7]" />
                <span>Contact Me</span>
              </a>

              <div className="flex items-center gap-2.5">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl glass-card text-purple-200 hover:text-white border border-[#7C3AED]/30 hover:border-purple-400 hover:scale-105 transition-all shadow-[0_0_15px_rgba(124,58,237,0.2)] flex items-center justify-center"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl glass-card text-purple-200 hover:text-white border border-[#7C3AED]/30 hover:border-purple-400 hover:scale-105 transition-all shadow-[0_0_15px_rgba(124,58,237,0.2)] flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE: Circular Profile Photo Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center w-full"
          >
            {/* Glowing Aura Background */}
            <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-tr from-[#7C3AED]/35 via-[#A855F7]/30 to-indigo-600/30 blur-3xl animate-pulse" />

            <div className="relative flex flex-col items-center">
              {/* Large Circular Profile Photo */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full shadow-[0_0_40px_rgba(124,58,237,0.5)] group border-2 border-purple-500/40"
              >
                <div className="w-full h-full rounded-full overflow-hidden relative flex items-center justify-center bg-[#15102A]">
                  {!imageError ? (
                    <img
                      src={resolvedProfileImg}
                      alt="Rutuja Sawale Profile Portrait"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      width={350}
                      height={350}
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1E143B] via-[#15102A] to-[#0B0F17] flex flex-col items-center justify-center p-4 text-center border border-[#7C3AED]/40">
                      <div className="w-24 h-24 rounded-full bg-[#7C3AED]/25 border-2 border-[#A855F7] flex items-center justify-center mb-3 shadow-[0_0_25px_rgba(124,58,237,0.4)]">
                        <span className="text-4xl font-black text-purple-200 font-outfit tracking-wider">RS</span>
                      </div>
                      <span className="text-base font-bold text-white font-outfit">Rutuja Sawale</span>
                      <span className="text-xs font-mono text-purple-300 mt-1">CSE Student & AI/ML</span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Floating Tag Card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="mt-5 px-4.5 py-2.5 rounded-2xl bg-[#1E143B]/90 text-white border border-[#7C3AED]/50 shadow-[0_0_25px_rgba(124,58,237,0.4)] backdrop-blur-md flex items-center gap-2.5 z-10"
              >
                <div className="p-1.5 rounded-xl bg-[#7C3AED]/30 text-purple-200">
                  <Brain className="w-4 h-4 text-[#A855F7]" />
                </div>
                <span className="text-xs font-bold text-purple-200 font-mono tracking-wide">
                  {HERO_DATA.floatingCardTag}
                </span>
              </motion.div>
            </div>

          </motion.div>

        </div>

        {/* 3 Core Highlight Pillars */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-purple-900/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#15102A]/60 border border-[#7C3AED]/20 flex items-center gap-3 tilt-card">
              <div className="p-2.5 rounded-lg bg-[#7C3AED]/20 text-[#A855F7]">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">AI & Machine Learning</p>
                <p className="text-[11px] text-slate-400">EduSkills Google Virtual Intern (Grade O)</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#15102A]/60 border border-[#7C3AED]/20 flex items-center gap-3 tilt-card">
              <div className="p-2.5 rounded-lg bg-[#7C3AED]/20 text-[#A855F7]">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Full-Stack Engineering</p>
                <p className="text-[11px] text-slate-400">React, Node.js, Java, FastAPI, MySQL</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#15102A]/60 border border-[#7C3AED]/20 flex items-center gap-3 tilt-card">
              <div className="p-2.5 rounded-lg bg-[#7C3AED]/20 text-[#A855F7]">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">AWS Cloud Architecture</p>
                <p className="text-[11px] text-slate-400">Accredited AWS Platform Architect</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
