/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal, Sliders, Sparkles, Wand2 } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  title?: string;
  description?: string;
  client?: string;
  applyCssGrading?: boolean;
}

export default function BeforeAfterSlider({
  beforeImage = "https://res.cloudinary.com/xcwaqcmp/image/upload/f_auto,q_auto/v1783418568/Gemini_Generated_Image_wn9598wn9598wn95.00_00_00_00.Still001_apsk9g.png",
  afterImage = "https://res.cloudinary.com/xcwaqcmp/image/upload/f_auto,q_auto/v1783413028/Gemini_Generated_Image_wn9598wn9598wn95uuu_jbqli8.png",
  title = "The Cobbler's Workshop",
  description = "Converting desaturated, low-contrast Arri LogC RAW footage of a master leather artisan into a warm, deeply textured theatrical look. Focuses on shadow recovery in organic leather grains, highlight preservation in metallic machinery, and rich skin-tone protection.",
  client = "Artisan Heritage Series",
  applyCssGrading = false
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <div className="w-full bg-dark-card/40 rounded-3xl border border-white/5 p-6 md:p-10 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-2xl apple-stroke-card">
      
      {/* Interactive Slider Frame */}
      <div className="relative w-full lg:w-[55%] aspect-video rounded-2xl overflow-hidden border border-white/10 select-none shadow-[0_15px_35px_rgba(0,0,0,0.8)] cursor-ew-resize"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Graded Image (Background, Full Size) */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={afterImage}
            alt="Color Graded Cinematic After"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            style={{
              filter: applyCssGrading ? "saturate(1.9) contrast(1.4) brightness(0.92) sepia(0.05) hue-rotate(-4deg)" : undefined
            }}
          />
          {/* Cinematic lighting enhancement overlay: Warm amber on the left, cool teal on the right */}
          {applyCssGrading && (
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-color-burn opacity-35"
              style={{
                background: "linear-gradient(105deg, rgba(245, 158, 11, 0.3) 0%, rgba(13, 148, 136, 0.1) 60%, rgba(30, 41, 59, 0.4) 100%)"
              }}
            />
          )}
          {/* Subtle Warm Highlight Overlay for the left-side lamp */}
          {applyCssGrading && (
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
              style={{
                background: "radial-gradient(circle at 10% 50%, rgba(251, 191, 36, 0.5) 0%, transparent 60%)"
              }}
            />
          )}
        </div>

        {/* Flat Raw Image (Overlayed, Width Cut by position) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white pointer-events-none select-none"
          style={{ width: `${sliderPosition}%` }}
        >
          {/* Full-width wrapper to prevent image and watermark from shifting when clipped */}
          <div 
            className="absolute inset-y-0 left-0 pointer-events-none select-none"
            style={{
              width: dimensions.width ? `${dimensions.width}px` : "100%",
              height: dimensions.height ? `${dimensions.height}px` : "100%"
            }}
          >
            <img
              src={beforeImage}
              alt="Flat Raw Log Before"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover max-w-none select-none pointer-events-none"
              style={{
                width: "100%",
                height: "100%"
              }}
            />
            {/* LOG watermark overlay matching the user's uploaded style precisely */}
            <div 
              className="absolute top-6 left-6 font-sans font-black text-2xl md:text-3xl text-white tracking-wider select-none pointer-events-none"
              style={{
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.75)"
              }}
            >
              LOG
            </div>
          </div>
        </div>

        {/* Slider Handle Button */}
        <div
          className="absolute inset-y-0 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-dark-bg border-2 border-netflix-red shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform duration-200 pointer-events-auto hover:scale-110">
            <MoveHorizontal className="w-5 h-5 text-netflix-red animate-pulse" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[10px] font-mono font-bold tracking-wider text-gray-400 select-none z-10">
          LOG / FLAT RAW
        </div>
        <div className="absolute top-4 right-4 bg-netflix-red/90 backdrop-blur-md border border-netflix-red/30 px-3 py-1 rounded text-[10px] font-mono font-bold tracking-wider text-white select-none z-10">
          CINEMATIC GRADED
        </div>
      </div>

      {/* Narrative & LUT Showcase Data */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center text-left">
        <div className="flex items-center gap-2 mb-3">
          <Wand2 className="w-4 h-4 text-netflix-red" />
          <span className="text-[10px] font-mono tracking-widest text-netflix-red font-bold uppercase">
            COLORIST METRICS SHOWCASE
          </span>
        </div>

        <span className="text-xs text-gray-400 font-medium tracking-wide uppercase font-mono">
          {client}
        </span>
        <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tight mt-1 mb-4">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium mb-8">
          {description}
        </p>

        {/* Grading Parameters / Interactive dials */}
        <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
          <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-1 hover:border-white/10 transition-colors">
            <span className="text-[10px] font-mono text-gray-400 uppercase">FILM EMULATION</span>
            <span className="text-sm font-bold text-white">Kodak 2383 D55</span>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-1 hover:border-white/10 transition-colors">
            <span className="text-[10px] font-mono text-gray-400 uppercase">COLOR RECON</span>
            <span className="text-sm font-bold text-white">Arri Log-C Linear</span>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-1 hover:border-white/10 transition-colors">
            <span className="text-[10px] font-mono text-gray-400 uppercase">HALATION INDEX</span>
            <span className="text-sm font-bold text-netflix-red font-mono">R: 0.18px Glow</span>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-1 hover:border-white/10 transition-colors">
            <span className="text-[10px] font-mono text-gray-400 uppercase">ANALOG GRAIN</span>
            <span className="text-sm font-bold text-white font-mono">35mm Medium Cut</span>
          </div>
        </div>
      </div>

    </div>
  );
}
