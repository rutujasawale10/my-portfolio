import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  ShieldCheck, 
  Cloud, 
  Database, 
  Lock, 
  Layers,
  GraduationCap
} from 'lucide-react';
import { EXPERIENCE_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const certIconMap: Record<string, React.ReactNode> = {
    Cloud: <Cloud className="w-5 h-5 text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-purple-400" />,
    Database: <Database className="w-5 h-5 text-cyan-400" />,
    Layers: <Layers className="w-5 h-5 text-indigo-400" />,
    Lock: <Lock className="w-5 h-5 text-red-400" />,
    Award: <Award className="w-5 h-5 text-fuchsia-400" />
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0d0b1d]">
      {/* Background Accent Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
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
          <span className="text-xs font-bold uppercase tracking-widest text-purple-300 bg-purple-950/80 px-4 py-1.5 rounded-full border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            Experience & Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-outfit text-white mt-4 mb-4">
            Chronological <span className="gradient-text neon-text-purple">Timeline & Certifications</span>
          </h2>
          <p className="text-purple-200/80 text-base">
            Google-supported AI/ML virtual internship, AWS Cloud architecture, undergraduate engineering degree, and verified credentials.
          </p>
        </motion.div>

        {/* Vertical Chronological Timeline */}
        <div className="max-w-4xl mx-auto mb-20 relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7C3AED] via-fuchsia-500 to-indigo-600 shadow-[0_0_12px_rgba(124,58,237,0.8)] sm:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Icon Center Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 w-9 h-9 rounded-full bg-[#0d0b1d] border-2 border-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.8)] flex items-center justify-center z-10">
                    {item.type === 'Education' ? (
                      <GraduationCap className="w-4 h-4 text-fuchsia-300" />
                    ) : item.type === 'Internship' ? (
                      <Briefcase className="w-4 h-4 text-purple-300" />
                    ) : (
                      <Award className="w-4 h-4 text-amber-300" />
                    )}
                  </div>

                  {/* Card Content Container */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:text-left'}`}>
                    <div className="p-6 sm:p-7 rounded-2xl glass-card border border-purple-500/30 hover:border-purple-400 relative group transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] tilt-card">
                      
                      <div className={`flex flex-wrap items-center gap-2 mb-3 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-500/30">
                          {item.badgeText}
                        </span>
                        
                        <div className="flex items-center gap-1.5 text-xs font-mono text-purple-300/80 bg-purple-950/40 px-2.5 py-1 rounded-lg border border-purple-500/20">
                          <Calendar className="w-3.5 h-3.5 text-purple-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold font-outfit text-white group-hover:text-purple-300 transition-colors mb-1.5">
                        {item.title}
                      </h3>
                      
                      <div className={`flex flex-wrap items-center gap-2 text-xs font-semibold text-purple-200/90 mb-4 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <span className="text-purple-300">{item.organization}</span>
                        <span className="text-purple-500">•</span>
                        <span className="flex items-center gap-1 text-purple-400">
                          <MapPin className="w-3.5 h-3.5 text-purple-400" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-purple-900/40 text-left">
                        {item.achievements.map((ach, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                            <ChevronRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications & Badges Grid */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-purple-300 bg-purple-950/80 px-4 py-1.5 rounded-full border border-purple-500/30">
              Verified Badges & Accreditation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-outfit text-white mt-3">
              Certifications & Accomplishments
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="p-5 rounded-2xl glass-card border border-purple-500/25 hover:border-purple-400 relative group transition-all duration-300 flex items-start gap-4 tilt-card"
              >
                <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-500/40 group-hover:scale-110 transition-transform">
                  {certIconMap[cert.iconName] || <Award className="w-5 h-5 text-purple-400" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-500/30">
                      {cert.badgeText || "Certified"}
                    </span>
                    {cert.date && (
                      <span className="text-[10px] text-purple-400 font-mono">
                        {cert.date}
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm font-bold text-white font-outfit group-hover:text-purple-300 transition-colors">
                    {cert.name}
                  </h4>
                  
                  <p className="text-xs text-purple-300/80 mt-1">
                    {cert.issuer}
                  </p>

                  {cert.credentialId && (
                    <p className="text-[11px] font-mono text-purple-400 mt-1">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
