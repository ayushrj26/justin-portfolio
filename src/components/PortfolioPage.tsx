/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Film, ArrowLeft, Sparkles, Filter, Sliders, Youtube, Palette, Smartphone, Layers, X, Upload, Loader2, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface PortfolioPageProps {
  onBackToHome: () => void;
  onProjectSelect: (project: Project) => void;
  projects?: Project[];
  onRemoveProject?: (id: string) => void;
  onUpload?: (file: File, category: Project['category'], subcategory?: string) => void;
  uploadingCategory?: Project['category'] | null;
  uploadingSubcategory?: string | null;
}

export default function PortfolioPage({
  onBackToHome,
  onProjectSelect,
  projects = PROJECTS,
  onRemoveProject,
  onUpload,
  uploadingCategory,
  uploadingSubcategory
}: PortfolioPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeYoutubeId, setActiveYoutubeId] = useState<string>('3c-hKV5g1JM');
  const [customUrlInput, setCustomUrlInput] = useState<string>('');
  const [inputError, setInputError] = useState<string>('');

  // Reusable unified marquee row component with hover pause
  const PortfolioDraggableRow = ({ children, slideDirection = 'left' }: { children: React.ReactNode, slideDirection?: 'left' | 'right' }) => {
    const childrenArray = React.Children.toArray(children);
    const duplicatedChildren = (() => {
      if (childrenArray.length === 0) return [];
      const minItems = 12;
      const repeatCount = Math.max(2, Math.ceil(minItems / childrenArray.length));
      const result: React.ReactNode[] = [];
      for (let i = 0; i < repeatCount; i++) {
        result.push(...childrenArray);
      }
      return result;
    })();

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative group/slider w-full py-4 overflow-hidden"
      >
        {/* Cinematic Gradient Mask Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-12 md:w-20 bg-gradient-to-r from-dark-bg to-transparent pointer-events-none z-20" />
        <div className="absolute top-0 bottom-0 right-0 w-12 md:w-20 bg-gradient-to-l from-dark-bg to-transparent pointer-events-none z-20" />

        <div className={`flex gap-4 md:gap-6 hover:[animation-play-state:paused] ${
          slideDirection === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}>
          {duplicatedChildren}
        </div>
      </motion.div>
    );
  };

  const FEATURED_YOUTUBE_VIDEOS = [
    {
      id: "3c-hKV5g1JM",
      title: "I Tested 1 Star Vs 5 Star Waterparks",
      creator: "SAHIL XP",
      views: "1.5M Views",
      retention: "72% Retention Rate",
      duration: "15:42",
      tags: ["IRL Challenge", "Retention Engine", "Sound Design"],
      description: "Edited with rapid-fire pacing, dynamic sound design, and precise retention tricks to maximize viewer watch time.",
    },
    {
      id: "a-iu78SRdiE",
      title: "Hiding in Youtubers Houses until i get Caught! ",
      creator: "SAHIL XP",
      views: "19M Views",
      retention: "65% Retention Rate",
      duration: "14:18",
      tags: ["Extreme Hide & Seek", "High-Stakes Pacing", "Kinetic Subtitles"],
      description: "An ultra-high engagement video featuring fast-paced cuts, sound-effect-driven tension peaks, and extreme comedic timing.",
    },
    {
      id: "bCvgZvcgMSA",
      title: "iPhone 17 Pro vs Samsung S26 Ultra ft. Ayush Bhandari!",
      creator: "TECH BATTLE",
      views: "367k Views",
      retention: "74% Retention Rate",
      duration: "12:45",
      tags: ["Tech Review", "Comparison Edit", "Cinematic Motion"],
      description: "Edited with sleek side-by-side split screens, customized kinetic text callouts, premium sound effects, and professional color matching.",
    },
  ];

  const extractYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleLoadCustomVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrlInput) return;
    const extractedId = extractYoutubeId(customUrlInput) || customUrlInput.trim();
    if (extractedId && extractedId.length === 11) {
      setActiveYoutubeId(extractedId);
      setInputError('');
      setCustomUrlInput('');
    } else {
      setInputError('Invalid 11-char ID or YouTube URL');
    }
  };

  const categories = [
    { id: 'all', name: 'All Masterpieces' },
    { id: 'longform', name: 'Long Form Masterpieces' },
    { id: 'shortform', name: 'Short Form Reels' },
    { id: 'freestyle', name: 'Freestyle Edits' },
  ];

  // Distribute projects into requested categories precisely
  const youtubeProjects = projects.filter(p => p.subcategory === 'youtube');
  const documentaryProjects = projects.filter(p => p.subcategory === 'documentary' || (p.category === 'featured' && p.id.startsWith('uploaded-')));
  const motionProjects = projects.filter(p => p.category === 'motion');
  const gradingProjects = projects.filter(p => p.category === 'grading');
  const shortProjects = projects.filter(p => p.category === 'shortform');
  const freestyleProjects = projects.filter(p => p.category === 'freestyle');

  const showLongForm = selectedCategory === 'all' || selectedCategory === 'longform';
  const showShortForm = selectedCategory === 'all' || selectedCategory === 'shortform';
  const showFreestyle = selectedCategory === 'all' || selectedCategory === 'freestyle';

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-28 pb-24 relative overflow-hidden">
      {/* Background glowing flares */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-netflix-red/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-netflix-red/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Floating Header Actions */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-netflix-red group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-netflix-red animate-pulse" />
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
              Catalog: {projects.length} Masterpieces
            </span>
          </div>
        </div>

        {/* Headings */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Film className="w-4 h-4 text-netflix-red animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-netflix-red uppercase">
              THE PREVIEW GALLERY
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight leading-none">
            Justin's Director & <span className="text-transparent bg-clip-text bg-gradient-to-r from-netflix-red to-white neon-glow-red">Colorist Showcase.</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl leading-relaxed">
            Explore premium cinematic narratives, retention-optimized short-form reels, high-energy automotive freestyle montages, and state-of-the-art color grading showcases.
          </p>
        </div>

        {/* Interactive YouTube Video Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-white/[0.02] border border-white/5 hover:border-netflix-red/20 rounded-3xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden transition-all duration-500 text-left"
        >
          {/* Subtle background red glow */}
          <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-netflix-red/5 blur-[120px] pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <Youtube className="w-5 h-5 text-netflix-red animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest text-netflix-red uppercase">
                  Interactive Theater Screen
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-black text-white tracking-tight">
                Featured YouTube Masterpieces
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Watch actual high-retention video edits on our live screen or load any YouTube video.
              </p>
            </div>

            {/* Custom URL Input Form */}
            <form onSubmit={handleLoadCustomVideo} className="flex flex-col gap-1.5 w-full md:max-w-md">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={customUrlInput}
                    onChange={(e) => {
                      setCustomUrlInput(e.target.value);
                      if (inputError) setInputError('');
                    }}
                    placeholder="Paste YouTube Link or Video ID..."
                    className="w-full bg-black/40 border border-white/10 hover:border-white/20 focus:border-netflix-red rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors pr-8 font-mono"
                  />
                  {customUrlInput && (
                    <button
                      type="button"
                      onClick={() => setCustomUrlInput('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white text-sm"
                    >
                      &times;
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-netflix-red hover:bg-red-700 text-white font-bold text-xs rounded-xl tracking-wider uppercase transition-colors shrink-0 font-mono shadow-lg hover:shadow-netflix-red/20 cursor-pointer"
                >
                  Load Play
                </button>
              </div>
              {inputError && (
                <p className="text-[10px] font-mono text-netflix-red text-left pl-1">{inputError}</p>
              )}
            </form>
          </div>

          {/* Player + Selector Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch relative z-10">
            {/* Left: Video Player */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center relative">
              {/* Backlight Glow Behind Screen */}
              <div className="absolute inset-0 bg-netflix-red/10 rounded-2xl blur-3xl pointer-events-none scale-95 opacity-50 transition-all duration-500" />
              
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black z-10 group/player">
                <iframe
                  src={`https://www.youtube.com/embed/${activeYoutubeId}?autoplay=0&rel=0`}
                  title="Featured YouTube Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Right: Curated Selector List */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between gap-6 z-10">
              <div className="space-y-3 text-left">
                <span className="text-[10px] font-mono font-black text-gray-500 uppercase tracking-widest block mb-2">
                  Select a Blockbuster Edit
                </span>
                
                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                  {FEATURED_YOUTUBE_VIDEOS.map((video) => {
                    const isActive = activeYoutubeId === video.id;
                    return (
                      <button
                        key={video.id}
                        type="button"
                        onClick={() => {
                          setActiveYoutubeId(video.id);
                          if (inputError) setInputError('');
                        }}
                        onMouseEnter={() => {
                          setActiveYoutubeId(video.id);
                          if (inputError) setInputError('');
                        }}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-start gap-3.5 group/btn cursor-pointer ${
                          isActive
                            ? 'bg-netflix-red/10 border-netflix-red/50 shadow-[0_4px_15px_rgba(229,9,20,0.1)]'
                            : 'bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.03]'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                          isActive
                            ? 'bg-netflix-red text-white border-netflix-red/30'
                            : 'bg-white/5 text-gray-500 border-white/10 group-hover/btn:text-white'
                        }`}>
                          <Youtube className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${
                              isActive ? 'text-netflix-red' : 'text-gray-500'
                            }`}>
                              {video.creator}
                            </span>
                            <span className="text-[9px] font-mono text-gray-500">
                              {video.duration}
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-white mt-1 group-hover/btn:text-netflix-red transition-colors line-clamp-1">
                            {video.title}
                          </h4>
                          <p className="text-[10px] text-gray-400 mt-1 line-clamp-1">
                            {video.views} • {video.retention}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Video Overview Details */}
              {(() => {
                const currentVideo = FEATURED_YOUTUBE_VIDEOS.find(v => v.id === activeYoutubeId);
                return currentVideo ? (
                  <motion.div
                    key={currentVideo.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-4 rounded-xl bg-white/[0.01] border border-white/5 text-left space-y-3"
                  >
                    <div className="flex flex-wrap gap-1.5">
                      {currentVideo.tags.map(tag => (
                        <span key={tag} className="text-[8px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-white/5 text-netflix-red">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-gray-400 leading-relaxed">
                      {currentVideo.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-[10px] font-mono">
                      <div>
                        <span className="text-gray-500 block">AUDIENCE SCALE</span>
                        <span className="text-white font-bold">{currentVideo.views}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">RETENTION INDEX</span>
                        <span className="text-netflix-red font-black">{currentVideo.retention}</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 text-left">
                    <p className="text-[11px] font-mono text-netflix-red animate-pulse">
                      Custom Video loaded.
                    </p>
                    <p className="text-[10px] text-gray-500 mt-1">
                      Load native YouTube videos to preview live retention sync coordinates.
                    </p>
                  </div>
                );
              })()}
            </div>
          </div>
        </motion.div>

        {/* Filters Section */}
        <div className="bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 mb-16 backdrop-blur-md apple-stroke-card">
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-netflix-red text-white shadow-[0_4px_20px_rgba(229,9,20,0.4)] scale-102 border border-netflix-red'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Dynamic Content */}
        <div className="space-y-20">
          
          {/* LONG FORM MASTERPIECES */}
          {showLongForm && (
            <div className="space-y-16">
              
              {/* Grand Title if showing everything */}
              {selectedCategory === 'all' && (
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-netflix-red" />
                  <span className="text-xs font-mono font-black tracking-widest text-gray-400 uppercase">
                    LONG FORM STORIES & CREATIVE SERIES
                  </span>
                </div>
              )}

              {/* Subsection 1: YouTube Videos */}
              {youtubeProjects.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 text-netflix-red border border-white/10">
                        <Youtube className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg md:text-xl font-display font-black text-white tracking-tight uppercase">
                          1. YouTube & Retention Edits
                        </h2>
                        <p className="text-gray-400 text-xs mt-0.5">Pacing, rhythm, and structural sound design optimized for peak audience watch time.</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded">
                      {youtubeProjects.length} Edits
                    </span>
                  </div>

                  <PortfolioDraggableRow slideDirection="left">
                    {youtubeProjects.map((project) => (
                      <PortfolioProjectCard
                        key={project.id}
                        project={project}
                        onSelect={onProjectSelect}
                        shineBorder={true}
                      />
                    ))}
                  </PortfolioDraggableRow>
                </motion.section>
              )}

              {/* Subsection 2: Cinematic Documentaries */}
              {documentaryProjects.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 text-netflix-red border border-white/10">
                        <Film className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg md:text-xl font-display font-black text-white tracking-tight uppercase">
                          2. Cinematic Documentaries & Features
                        </h2>
                        <p className="text-gray-400 text-xs mt-0.5">Immersive visuals, rich color mapping, and detailed soundscapes built for narrative scale.</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded">
                      {documentaryProjects.length} Features
                    </span>
                  </div>

                  <PortfolioDraggableRow slideDirection="right">
                    {documentaryProjects.map((project) => (
                      <PortfolioProjectCard
                        key={project.id}
                        project={project}
                        onSelect={onProjectSelect}
                        shineBorder={true}
                      />
                    ))}
                  </PortfolioDraggableRow>
                </motion.section>
              )}

              {/* Subsection 3: Motion Graphics */}
              {motionProjects.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 text-netflix-red border border-white/10">
                        <Layers className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg md:text-xl font-display font-black text-white tracking-tight uppercase">
                          3. Motion Graphics & VFX
                        </h2>
                        <p className="text-gray-400 text-xs mt-0.5">Dynamic typography, 2D vector elements, and customized product showcase transitions.</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded">
                      {motionProjects.length} Projects
                    </span>
                  </div>

                  <PortfolioDraggableRow slideDirection="left">
                    {motionProjects.map((project) => (
                      <PortfolioProjectCard
                        key={project.id}
                        project={project}
                        onSelect={onProjectSelect}
                        shineBorder={true}
                      />
                    ))}
                  </PortfolioDraggableRow>
                </motion.section>
              )}

              {/* Subsection 4: Color Grading */}
              {gradingProjects.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 text-netflix-red border border-white/10">
                        <Sliders className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg md:text-xl font-display font-black text-white tracking-tight uppercase">
                          4. Color Grading Showcases
                        </h2>
                        <p className="text-gray-400 text-xs mt-0.5">Theatrical log LUT matching, Kodak film emulation, and premium skin-tone preservation.</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded">
                      {gradingProjects.length} Studies
                    </span>
                  </div>

                  <PortfolioDraggableRow slideDirection="right">
                    {gradingProjects.map((project) => (
                      <PortfolioProjectCard
                        key={project.id}
                        project={project}
                        onSelect={onProjectSelect}
                        shineBorder={true}
                      />
                    ))}
                  </PortfolioDraggableRow>
                </motion.section>
              )}

            </div>
          )}

          {/* SHORT FORM REELS SECTION */}
          {showShortForm && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6 pt-6"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 text-netflix-red border border-white/10">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-display font-black text-white tracking-tight uppercase">
                      5. Short Form & Vertical Reels
                    </h2>
                    <p className="text-gray-400 text-xs mt-0.5">High-retention 9:16 vertical hooks, captions, and loops designed to capture attention instantly.</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded">
                  {shortProjects.length} Reels
                </span>
              </div>

              <PortfolioDraggableRow slideDirection="left">
                {shortProjects.map((project) => (
                  <PortfolioProjectCard
                    key={project.id}
                    project={project}
                    onSelect={onProjectSelect}
                    shineBorder={true}
                  />
                ))}
              </PortfolioDraggableRow>
            </motion.section>
          )}

          {/* FREESTYLE EDITS SECTION */}
          {showFreestyle && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-6 pt-6"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 text-netflix-red border border-white/10">
                    <Sparkles className="w-5 h-5 text-netflix-red" />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-display font-black text-white tracking-tight uppercase">
                      6. Freestyle Edits & Hype Montages
                    </h2>
                    <p className="text-gray-400 text-xs mt-0.5">Automotive and sport visual styling, retro synthwave aesthetics, and precise audio sync.</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded">
                  {freestyleProjects.length} Edits
                </span>
              </div>

              <PortfolioDraggableRow slideDirection="right">
                {freestyleProjects.map((project) => (
                  <PortfolioProjectCard
                    key={project.id}
                    project={project}
                    onSelect={onProjectSelect}
                    shineBorder={true}
                  />
                ))}
              </PortfolioDraggableRow>
            </motion.section>
          )}

        </div>

        {/* Call To Action Box */}
        <div className="mt-28 bg-gradient-to-r from-netflix-red/10 via-white/5 to-transparent border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 apple-stroke-card">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-netflix-red" />
              <span className="text-xs font-mono font-black tracking-widest text-netflix-red uppercase">BOOKINGS OPEN</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-black text-white">
              Ready to edit your next blockbuster?
            </h3>
            <p className="text-gray-400 text-sm mt-2 max-w-xl">
              From vertical content to cinematic series and commercials, let's create something high-fidelity and retention-optimized.
            </p>
          </div>
          <button
            onClick={() => {
              onBackToHome();
              // Scroll to contact form
              setTimeout(() => {
                const contact = document.getElementById('contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }}
            className="px-8 py-4 bg-white text-dark-bg hover:bg-netflix-red hover:text-white font-bold text-sm rounded-xl tracking-wide uppercase transition-all duration-300 shadow-xl cursor-pointer"
          >
            Start a Project
          </button>
        </div>

      </div>
    </div>
  );
}

/* Upload zone matching the portfolio grid system */
function UploadCard({
  onUpload,
  isUploading,
  isVertical = false,
  title = "Upload Video"
}: {
  onUpload: (file: File) => void;
  isUploading: boolean;
  isVertical?: boolean;
  title?: string;
}) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('video/')) {
        onUpload(file);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('video/')) {
        onUpload(file);
      }
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      className={`group relative flex flex-col items-center justify-center border-2 border-dashed rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
        isDragOver
          ? 'border-netflix-red bg-netflix-red/10 scale-[0.98]'
          : 'border-white/10 bg-white/[0.02] hover:border-netflix-red/40 hover:bg-white/[0.05]'
      } ${
        isVertical ? 'aspect-[9/16]' : 'aspect-video'
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {isUploading ? (
        <div className="flex flex-col items-center justify-center p-4 text-center space-y-3 z-10">
          <div className="w-12 h-12 rounded-full bg-netflix-red/10 border border-netflix-red/20 flex items-center justify-center text-netflix-red animate-pulse">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider animate-pulse">Encoding...</p>
            <p className="text-[10px] font-mono text-gray-500 mt-1">Generating high-fidelity frames</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-4 text-center space-y-2 z-10 transition-transform duration-300 group-hover:scale-105">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-netflix-red group-hover:text-white group-hover:border-netflix-red transition-all duration-300">
            <Upload className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-tight leading-snug">
              {title}
            </h4>
            <p className="text-[10px] font-mono text-gray-400 mt-1 uppercase tracking-widest block">
              Drag & Drop
            </p>
            <p className="text-[9px] text-gray-500 mt-0.5">
              or click to browse local files
            </p>
          </div>
        </div>
      )}

      {/* Aesthetic glass glow on dragover */}
      {isDragOver && (
        <div className="absolute inset-0 bg-netflix-red/5 backdrop-blur-[2px] transition-all duration-300" />
      )}
    </div>
  );
}

/* Card Component with state & hover play / hover controls logic */
function PortfolioProjectCard({
  project,
  onSelect,
  shineBorder = false
}: {
  project: Project;
  onSelect: (project: Project) => void;
  onRemove?: (id: string) => void;
  shineBorder?: boolean;
  key?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const isVertical = project.category === 'shortform' || project.category === 'freestyle';

  const innerContent = (
    <>
      {/* Visual Canvas Wrapper with precise Aspect Ratio */}
      <div
        className={`overflow-hidden bg-dark-card border-b border-white/5 transition-all duration-500 ${
          isHovered 
            ? 'absolute inset-0 z-0 w-full h-full' 
            : `relative w-full ${isVertical ? 'aspect-[9/16]' : 'aspect-video'}`
        }`}
      >
        <video
          src={`${project.videoUrl}#t=2`}
          poster={project.thumbnailUrl}
          muted
          loop
          playsInline
          autoPlay
          controls={isHovered}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Video Overlay Tint (Hidden on hover when controls are active for clean interaction) */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 z-10 ${
          isHovered ? 'opacity-0 pointer-events-none' : 'opacity-70'
        }`} />

        {/* Floating duration and views stats */}
        <div className={`absolute top-3 right-3 flex gap-2 z-20 transition-opacity duration-300 ${
          isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          <span className="text-[10px] font-mono font-bold bg-black/60 backdrop-blur-md px-2 py-1 rounded text-white border border-white/10">
            {project.duration}
          </span>
        </div>

        {/* Play Icon Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-20 pointer-events-none ${
          isHovered ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
        }`}>
          <div className="w-12 h-12 rounded-full bg-netflix-red flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-5 h-5 text-white fill-white translate-x-0.5" />
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div className={`p-6 text-left flex-grow flex flex-col justify-between transition-all duration-300 ${
        isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div>
          <span className="text-[10px] font-mono font-black text-netflix-red tracking-widest uppercase block mb-1">
            {project.client}
          </span>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-netflix-red transition-colors line-clamp-1 leading-tight">
            {project.title}
          </h3>
          <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Metadata tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-mono font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (shineBorder) {
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative p-[1.5px] overflow-hidden rounded-2xl cursor-default transition-all duration-500 shadow-xl flex-shrink-0 bg-white/5 hover:bg-white/10 ${
          isVertical ? 'w-[200px] sm:w-[250px]' : 'w-[320px] sm:w-[420px]'
        } ${isHovered ? 'shadow-[0_20px_40px_rgba(229,9,20,0.35)] -translate-y-2 scale-[1.03] z-20' : 'translate-y-0'}`}
      >
        <div
          className="absolute inset-[-150%] animate-spin pointer-events-none z-0"
          style={{
            background: 'conic-gradient(from 0deg, transparent 35%, #E50914 45%, #ffffff 50%, #E50914 55%, transparent 65%)',
            animationDuration: '4s',
          }}
        />
        <div className="relative z-10 w-full h-full bg-[#141414] rounded-[14.5px] overflow-hidden flex flex-col">
          {innerContent}
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-white/5 border border-white/5 rounded-2xl overflow-hidden cursor-default hover:border-netflix-red/30 hover:bg-white/10 transition-all duration-500 shadow-xl apple-stroke-card flex-shrink-0 ${
        isVertical ? 'w-[200px] sm:w-[250px]' : 'w-[320px] sm:w-[420px]'
      } ${isHovered ? 'shadow-[0_20px_40px_rgba(229,9,20,0.35)] -translate-y-2 scale-[1.03] z-20' : 'translate-y-0'}`}
    >
      {innerContent}
    </div>
  );
}
