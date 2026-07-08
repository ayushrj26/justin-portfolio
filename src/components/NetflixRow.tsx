/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Eye, Clock, Sparkles, Upload, Loader2, X } from 'lucide-react';
import { Project } from '../types';

interface NetflixRowProps {
  title: string;
  projects: Project[];
  layout?: 'horizontal' | 'vertical';
  onProjectSelect: (project: Project) => void;
  onUpload?: (file: File) => void;
  isUploading?: boolean;
  onRemoveProject?: (id: string) => void;
  isDraggable?: boolean;
  shineBorder?: boolean;
  slideDirection?: 'left' | 'right';
}

export default function NetflixRow({
  title,
  projects,
  layout = 'horizontal',
  onProjectSelect,
  onUpload,
  isUploading,
  onRemoveProject,
  isDraggable = false,
  shineBorder = false,
  slideDirection = 'left'
}: NetflixRowProps) {
  const duplicatedProjects = (() => {
    if (projects.length === 0) return [];
    const minItems = 12;
    const repeatCount = Math.max(2, Math.ceil(minItems / projects.length));
    const result: Project[] = [];
    for (let i = 0; i < repeatCount; i++) {
      result.push(...projects);
    }
    return result;
  })();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col gap-3 group/row py-4 select-none"
    >
      {/* Category Heading */}
      <div className="flex items-center gap-2 px-6 md:px-12">
        <span className="w-1 h-4 bg-netflix-red rounded-full animate-pulse" />
        <h2 className="text-sm md:text-base font-mono font-bold uppercase tracking-widest text-gray-300">
          {title}
        </h2>
      </div>

      {/* Continuous Marquee Row */}
      <div className="relative flex items-center gap-4 md:gap-5 overflow-hidden py-4 w-full">
        {onUpload && (
          <div className="pl-6 md:pl-12 flex-shrink-0 z-30">
            <UploadCard onUpload={onUpload} isUploading={isUploading} layout={layout} />
          </div>
        )}

        <div className="flex-grow overflow-hidden select-none relative z-10">
          {/* Cinematic Gradient Mask Fades */}
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-20 bg-gradient-to-r from-dark-bg to-transparent pointer-events-none z-20" />
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-20 bg-gradient-to-l from-dark-bg to-transparent pointer-events-none z-20" />

          <div className={`flex gap-4 md:gap-5 hover:[animation-play-state:paused] ${
            slideDirection === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
          }`}>
            {duplicatedProjects.map((project, idx) => (
              <ProjectCard
                key={`${project.id}-marquee-${idx}`}
                project={project}
                layout={layout}
                onSelect={onProjectSelect}
                shineBorder={shineBorder}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function UploadCard({
  onUpload,
  isUploading,
  layout
}: {
  onUpload: (file: File) => void;
  isUploading?: boolean;
  layout: 'horizontal' | 'vertical';
}) {
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('video/')) {
        onUpload(file);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('video/')) {
        onUpload(file);
      }
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const isVertical = layout === 'vertical';

  return (
    <div
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      onClick={onButtonClick}
      className={`relative flex-shrink-0 snap-start cursor-pointer rounded-xl transition-all duration-500 ease-out z-10 ${
        isVertical ? 'w-[180px] sm:w-[220px]' : 'w-[280px] sm:w-[360px]'
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={handleChange}
        className="hidden"
      />

      <div
        className={`relative w-full rounded-xl overflow-hidden border-2 border-dashed flex flex-col items-center justify-center p-4 text-center transition-all duration-500 ${
          isVertical ? 'aspect-[9/16]' : 'aspect-video'
        } ${
          isDragActive
            ? 'border-netflix-red bg-netflix-red/10 text-white scale-105 shadow-[0_15px_30px_rgba(229,9,20,0.3)]'
            : 'border-white/20 bg-dark-card hover:border-netflix-red/50 hover:bg-white/[0.02] text-gray-400 hover:text-white'
        }`}
      >
        <div className="flex flex-col items-center gap-2.5">
          {isUploading ? (
            <Loader2 className="w-8 h-8 text-netflix-red animate-spin" />
          ) : (
            <div className="p-3 rounded-full bg-white/5 border border-white/5 group-hover:border-netflix-red/20 transition-all duration-300">
              <Upload className="w-6 h-6 text-netflix-red animate-pulse" />
            </div>
          )}
          
          <div className="text-center px-2">
            <p className="text-xs sm:text-sm font-display font-bold tracking-wide">
              {isUploading ? 'Encoding Stream...' : 'Upload Video'}
            </p>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-relaxed hidden sm:block">
              Drag & drop video or click to browse
            </p>
            <p className="text-[9px] font-mono text-gray-600 mt-1 uppercase tracking-wider block sm:hidden">
              Tap to pick file
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none opacity-45">
          <span className="text-[8px] font-mono tracking-wider uppercase">
            LOCAL INGEST
          </span>
          <span className="text-[8px] font-mono">
            H.264 / HEVC
          </span>
        </div>
      </div>
    </div>
  );
}

/* Card Component with state & hover play / hover controls logic */
function ProjectCard({
  project,
  layout,
  onSelect,
  shineBorder = false
}: {
  key?: string;
  project: Project;
  layout: 'horizontal' | 'vertical';
  onSelect: (project: Project) => void;
  onRemove?: (id: string) => void;
  shineBorder?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const isVertical = layout === 'vertical';

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  const innerContent = (
    <div
      className={`relative w-full rounded-xl overflow-hidden bg-dark-card border border-white/5 transition-all duration-500 flex flex-col h-full ${
        isVertical ? 'aspect-[9/16]' : 'aspect-video'
      } ${!shineBorder && isHovered ? 'shadow-[0_20px_40px_rgba(229,9,20,0.35)] border-netflix-red/30 scale-[1.03] z-20' : ''}`}
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
      <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition-opacity duration-300 z-10 ${
        isHovered ? 'opacity-0 pointer-events-none' : 'opacity-80'
      }`} />

      {/* Static Static-Look Content info */}
      <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-5 z-20 flex flex-col justify-end text-left transition-all duration-300 ${
        isHovered ? 'translate-y-2 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}>
        <span className="text-[10px] font-mono tracking-widest text-netflix-red font-bold uppercase mb-1">
          {project.client}
        </span>
        <h3 className="text-sm sm:text-base font-display font-bold text-white tracking-wide leading-tight truncate">
          {project.title}
        </h3>

        {/* Details revealed on hover */}
        <div className={`flex items-center gap-3 text-gray-400 text-xs font-mono font-medium mt-2.5 transition-all duration-300 ${
          isHovered ? 'opacity-100 max-h-12' : 'opacity-0 max-h-0 overflow-hidden'
        }`}>
          <span className="flex items-center gap-1 text-white">
            <Clock className="w-3.5 h-3.5 text-netflix-red" /> {project.duration}
          </span>
        </div>

        {/* Action pill tags */}
        <div className={`flex flex-wrap gap-1 mt-2.5 transition-all duration-500 ${
          isHovered ? 'opacity-100 max-h-16' : 'opacity-0 max-h-0 overflow-hidden'
        }`}>
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[9px] font-mono bg-white/5 border border-white/5 text-gray-300 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (shineBorder) {
    return (
      <div
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        className={`relative p-[1.5px] overflow-hidden rounded-xl cursor-default transition-all duration-500 ease-out z-10 flex-shrink-0 bg-white/5 hover:bg-white/10 ${
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
        <div className="relative z-10 w-full h-full bg-[#141414] rounded-[11px] overflow-hidden flex flex-col">
          {innerContent}
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      className={`relative flex-shrink-0 snap-start cursor-default rounded-xl overflow-visible transition-all duration-500 ease-out z-10 ${
        isVertical ? 'w-[200px] sm:w-[250px]' : 'w-[320px] sm:w-[420px]'
      } ${isHovered ? '-translate-y-2 z-20' : 'translate-y-0'}`}
    >
      {innerContent}
    </div>
  );
}
