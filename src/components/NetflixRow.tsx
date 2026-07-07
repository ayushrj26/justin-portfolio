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
}

export default function NetflixRow({
  title,
  projects,
  layout = 'horizontal',
  onProjectSelect,
  onUpload,
  isUploading,
  onRemoveProject
}: NetflixRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <div className="relative flex flex-col gap-3 group/row py-4 select-none">
      {/* Category Heading */}
      <div className="flex items-center gap-2 px-6 md:px-12">
        <span className="w-1 h-4 bg-netflix-red rounded-full" />
        <h2 className="text-sm md:text-base font-mono font-bold uppercase tracking-widest text-gray-300">
          {title}
        </h2>
        <span className="text-[10px] font-mono font-bold text-gray-600 uppercase tracking-widest ml-3 opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 hidden md:inline">
          Infinite Loops »
        </span>
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

          <div className="flex gap-4 md:gap-5 animate-marquee-right hover:[animation-play-state:paused]">
            {duplicatedProjects.map((project, idx) => (
              <ProjectCard
                key={`${project.id}-marquee-${idx}`}
                project={project}
                layout={layout}
                onSelect={onProjectSelect}
                onRemove={onRemoveProject}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
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

/* Card Component with state & hovering auto-play logic */
function ProjectCard({
  project,
  layout,
  onSelect,
  onRemove
}: {
  key?: string;
  project: Project;
  layout: 'horizontal' | 'vertical';
  onSelect: (project: Project) => void;
  onRemove?: (id: string) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isVertical = layout === 'vertical';

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay failed or was prevented:", err);
      });
    }
  }, [project.videoUrl]);

  return (
    <div
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      onClick={() => onSelect(project)}
      className={`relative flex-shrink-0 snap-start cursor-pointer rounded-xl overflow-visible transition-all duration-500 ease-out z-10 ${
        isVertical ? 'w-[180px] sm:w-[220px]' : 'w-[280px] sm:w-[360px]'
      }`}
    >
      {/* Visual Canvas Wrapper with precise Aspect Ratio */}
      <div
        className={`relative w-full rounded-xl overflow-hidden bg-dark-card border border-white/5 transition-all duration-500 apple-stroke-card ${
          isVertical ? 'aspect-[9/16]' : 'aspect-video'
        } ${isHovered ? 'shadow-[0_15px_30px_rgba(229,9,20,0.3)] border-netflix-red/30 scale-105 z-20' : ''}`}
      >
        {/* Remove Button */}
        {onRemove && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove(project.id);
            }}
            title="Remove video"
            className={`absolute top-2.5 right-2.5 z-40 w-7 h-7 rounded-full bg-black/60 hover:bg-netflix-red hover:scale-110 text-white flex items-center justify-center border border-white/10 transition-all duration-300 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Dynamic Video loop (always autoplaying) */}
        <video
          ref={videoRef}
          src={project.videoUrl}
          muted
          loop
          playsInline
          autoPlay
          className="absolute inset-0 transition-opacity duration-500 opacity-100"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />

        {/* Video Overlay Tint (Always present to preserve text contrast) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 z-10" />

        {/* Static Static-Look Content info */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-5 z-20 flex flex-col justify-end text-left transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2'
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
    </div>
  );
}
