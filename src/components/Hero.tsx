/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, ChevronRight, Eye, Film, Award, Flame, Star, Volume2, VolumeX } from 'lucide-react';
import { HERO_SHOWREEL_URL, STATS } from '../data';

interface HeroProps {
  onWatchShowreel: () => void;
  onViewPortfolio: () => void;
}

export default function Hero({ onWatchShowreel, onViewPortfolio }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const scrollToPortfolio = () => {
    const portfolio = document.querySelector('#portfolio');
    if (portfolio) {
      portfolio.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Icons array corresponding to stats items
  const statIcons = [
    <Film className="w-5 h-5 text-blue-400" />,
    <Star className="w-5 h-5 text-purple-400" />,
    <Award className="w-5 h-5 text-amber-500" />
  ];

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg select-none pt-20">
      {/* Background Cinematic Image Canvas */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="https://res.cloudinary.com/xcwaqcmp/image/upload/f_auto,q_auto/JUUUUUSTIIIIIN_xnifs1"
          alt="Cinematic Professional Video Editor Workspace"
          className="absolute min-w-full min-h-full object-cover scale-110 translate-x-[3%] md:translate-x-[5%] filter brightness-[0.7] contrast-[1.05] saturate-[1.1]"
          referrerPolicy="no-referrer"
        />

        {/* Immersive cinematic overlay: fades from light black at top to dark deep black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-dark-bg/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/95 via-dark-bg/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-radial-gradient(circle at 30% 50%, transparent, rgba(11,11,11,0.6) 80%) z-10" />
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center z-20">
        
        {/* Left Columns - Narrative Headline & Buttons */}
        <div className="lg:col-span-8 flex flex-col justify-center text-left">
          
          {/* Accent Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-netflix-red animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-netflix-red neon-glow-red">
              NOW EDITING CO-OP PRODUCTIONS
            </span>
          </motion.div>

          {/* Large Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-[1.1] mb-6"
          >
            Editing Stories That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
              People Actually Watch.
            </span>
          </motion.h1>

          {/* Subheading list with cinematic dots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:text-base text-gray-400 font-medium mb-10 border-l-2 border-netflix-red pl-4"
          >
            <span>Long-form Videos</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span>Short-form Reels</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span>Motion Graphics</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span>Color Grading</span>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            {/* Play Showreel Button */}
            <button
              onClick={onWatchShowreel}
              className="flex items-center justify-center gap-3 bg-white text-dark-bg hover:bg-white/90 font-bold py-4 px-8 rounded-lg shadow-xl group transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-dark-bg text-dark-bg group-hover:scale-115 transition-transform duration-300" />
              <span>Watch Showreel</span>
            </button>

            {/* View Portfolio Button */}
            <button
              onClick={onViewPortfolio}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold py-4 px-8 rounded-lg border border-white/15 hover:border-white/35 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>View Portfolio</span>
              <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* Decorative Red Laser Flare line on bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-netflix-red/60 to-transparent" />
    </section>
  );
}
