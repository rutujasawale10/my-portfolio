import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'AI/ML', 'Cybersecurity', 'Full Stack', 'Web Apps'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0D0B1D] border-y border-[#7C3AED]/25">
      {/* Background Accent Glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

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
            Featured Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-outfit text-white mt-4 mb-4">
            Recent Projects & <span className="gradient-text neon-text-purple">Innovations</span>
          </h2>
          <p className="text-slate-300 text-base">
            Explore AI-powered anomaly detection, network threat intelligence, smart campus administration, and high-performance developer platforms.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#7C3AED] text-white shadow-[0_0_20px_rgba(124,58,237,0.5)] border border-purple-400 scale-105'
                  : 'bg-[#15102A]/50 text-purple-200/80 hover:text-white hover:bg-purple-950/60 border border-[#7C3AED]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid (Responsive 2x2 on Desktop / 4 columns on XL) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group rounded-3xl glass-card overflow-hidden flex flex-col justify-between hover:shadow-[0_0_35px_rgba(124,58,237,0.4)] transition-all duration-300 border border-[#7C3AED]/25 hover:border-purple-400 cursor-pointer tilt-card"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-[#0F172A]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      width={600}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute top-3 left-3 right-3 flex flex-wrap items-center justify-between gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-[#0B0F17]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#7C3AED]/40">
                        {project.category}
                      </span>
                      {project.projectBadge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200 bg-[#7C3AED]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-purple-400/40 shadow-sm">
                          {project.projectBadge}
                        </span>
                      )}
                      {project.featured && !project.projectBadge && (
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-500/40">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-[#7C3AED] text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 border border-purple-400"
                      aria-label="View project details"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold font-outfit text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-purple-400 mb-2">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-[#15102A]/80 text-purple-200 border border-[#7C3AED]/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-6 pb-6 pt-3 flex flex-wrap items-center justify-between gap-2 border-t border-purple-900/40 mt-auto" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-purple-300 hover:text-white flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-lg bg-[#7C3AED]/15 border border-[#7C3AED]/30 hover:bg-[#7C3AED]/30"
                  >
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    <span>Project Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-[#15102A]/80 border border-[#7C3AED]/30 text-purple-300 hover:text-white hover:border-purple-400 text-xs font-bold transition-all flex items-center gap-1.5"
                        aria-label="View Source Code"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-[#7C3AED] text-white border border-purple-400 hover:bg-purple-600 text-xs font-bold transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                        aria-label="Live Preview"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
