import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, CheckCircle2, BarChart2, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#070510]/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d0b1d] border border-purple-500/40 rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.35)] z-10"
        >
          <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-t-3xl bg-purple-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b1d] via-[#0d0b1d]/50 to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-purple-950/80 text-white hover:bg-purple-600 transition-colors border border-purple-500/40 backdrop-blur-md"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-950/90 border border-purple-500/40 px-3 py-1 rounded-full backdrop-blur-md">
                {project.category}
              </span>
              {project.projectBadge && (
                <span className="text-xs font-bold uppercase tracking-wider text-purple-200 bg-[#7C3AED]/90 border border-purple-400/40 px-3 py-1 rounded-full backdrop-blur-md shadow-md">
                  {project.projectBadge}
                </span>
              )}
              <div className="w-full mt-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold font-outfit text-white">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-purple-300 font-medium mt-1">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3 pt-1 border-b border-purple-900/40 pb-5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:bg-purple-500 transition-all border border-purple-400"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Project</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-950/80 text-purple-200 font-semibold text-xs sm:text-sm border border-purple-500/40 hover:border-purple-400 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-base font-bold font-outfit text-white mb-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>System Architecture & Overview</span>
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-purple-950/40 p-4 rounded-xl border border-purple-500/20">
                {project.architecture.overview}
              </p>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-base font-bold font-outfit text-white mb-3">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Key Technical Capabilities</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.architecture.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-950/30 border border-purple-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span className="text-xs text-slate-200 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {project.architecture.systemMetrics && (
              <div>
                <h4 className="flex items-center gap-2 text-base font-bold font-outfit text-white mb-3">
                  <BarChart2 className="w-4 h-4 text-purple-400" />
                  <span>Verified Performance Metrics</span>
                </h4>
                <div className="space-y-2">
                  {project.architecture.systemMetrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
                      <span>•</span>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="flex items-center gap-2 text-base font-bold font-outfit text-white mb-3">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Full Component Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.architecture.techStackDetailed.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-purple-950/80 text-purple-200 text-xs font-mono font-medium border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
