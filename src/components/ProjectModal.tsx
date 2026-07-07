/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Briefcase, Cpu, Layers, Play, Eye, Clock, Film, Award, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  relatedProjects: Project[];
  onSelectProject: (p: Project) => void;
}

export default function ProjectModal({
  project,
  onClose,
  relatedProjects,
  onSelectProject
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md py-10 px-4">
        
        {/* Backdrop overlay (dismisses modal on click outside) */}
        <div className="fixed inset-0 cursor-zoom-out" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 180 }}
          className="relative w-full max-w-4xl bg-[#141414] border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.9)] mx-auto z-10"
        >
          {/* Close Trigger Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-black/95 text-gray-400 hover:text-white transition-all cursor-pointer border border-white/5"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Cinematic Poster Header */}
          <div className="relative aspect-video w-full bg-black border-b border-white/5">
            {project.fullVideoUrl && (project.fullVideoUrl.includes('youtube.com') || project.fullVideoUrl.includes('youtu.be')) ? (
              <iframe
                src={`https://www.youtube.com/embed/${
                  project.fullVideoUrl.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)?.[2] || ''
                }?autoplay=1&rel=0&controls=1&mute=0`}
                title={project.title}
                className="w-full h-full absolute inset-0 border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <video
                src={project.fullVideoUrl}
                autoPlay
                loop
                controls
                playsInline
                className="w-full h-full object-cover"
                poster={project.thumbnailUrl}
              />
            )}
            {/* Subtle gradient vignette */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#141414] to-transparent pointer-events-none" />
          </div>

          {/* Title Info Row */}
          <div className="p-6 md:p-10 flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-netflix-red uppercase">
                {project.client}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight">
                {project.title}
              </h2>
              
              {/* Quick Specs */}
              <div className="flex items-center gap-4 text-xs font-mono font-medium text-gray-400 mt-2">
                <span className="text-netflix-red bg-netflix-red/10 border border-netflix-red/20 px-2.5 py-1 rounded">
                  4K MASTER
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {project.duration}
                </span>
              </div>
            </div>

            {/* Split Details & Technical Metadata Specs */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 text-left border-t border-white/5 pt-8">
              {/* Left Column - Story Description */}
              <div className="md:col-span-8 flex flex-col gap-6">
                <div>
                  <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-2">
                    Narrative Objective
                  </h4>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Behind the scenes gallery (if available) */}
                {project.btsImages && project.btsImages.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Film className="w-3.5 h-3.5 text-netflix-red" />
                      Behind the Scenes
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {project.btsImages.map((bts, idx) => (
                        <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-white/5 group">
                          <img
                            src={bts}
                            alt="Workspace bts"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-[10px] font-mono tracking-widest bg-black/80 text-white px-2.5 py-1 rounded-full border border-white/10">
                              SET LOG
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Tech Specs */}
              <div className="md:col-span-4 bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col gap-6">
                <div>
                  <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-netflix-red" /> Role
                  </h4>
                  <span className="text-sm font-bold text-white block">
                    {project.role}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-blue-400" /> Software Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.software.map((sw) => (
                      <span
                        key={sw}
                        className="text-[10px] font-mono bg-[#141414] border border-white/5 text-gray-300 px-2.5 py-1 rounded"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-400" /> Timeline
                  </h4>
                  <span className="text-sm font-bold text-white block">
                    {project.timeline}
                  </span>
                </div>
              </div>
            </div>

            {/* Related recommendations section: "More Like This" */}
            {relatedProjects.length > 0 && (
              <div className="border-t border-white/5 pt-10">
                <div className="flex items-center gap-2 mb-6">
                  <Award className="w-4.5 h-4.5 text-netflix-red" />
                  <h3 className="font-display font-black text-xl text-white tracking-tight">
                    More Like This
                  </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 text-left">
                  {relatedProjects.slice(0, 3).map((related) => (
                    <div
                      key={related.id}
                      onClick={() => onSelectProject(related)}
                      className="group bg-white/5 border border-white/5 rounded-xl overflow-hidden cursor-pointer hover:border-white/15 transition-all duration-300 shadow-lg"
                    >
                      <div className="relative aspect-video bg-dark-card overflow-hidden">
                        <img
                          src={related.thumbnailUrl}
                          alt={related.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-3">
                          <span className="text-[9px] font-mono bg-netflix-red text-white px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold shadow-lg">
                            {related.duration}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">
                            {related.client}
                          </span>
                          <h4 className="text-xs md:text-sm font-display font-bold text-white tracking-wide truncate mt-0.5">
                            {related.title}
                          </h4>
                        </div>
                        <p className="text-[11px] text-gray-400 line-clamp-2 mt-2 leading-relaxed">
                          {related.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
