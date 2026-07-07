/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { X, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
}

export default function ShowreelModal({ isOpen, onClose, videoUrl, title = "2026 Filmmaker Showreel" }: ShowreelModalProps) {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!isOpen) return null;

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const defaultShowreel = "https://player.vimeo.com/external/459389137.hd.mp4?s=811eef2a85e492b4eb130e9d10e5461c33c3e2dc&profile_id=174&oauth2_token_id=57447761";
  const activeVideo = videoUrl || defaultShowreel;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-zoom-out"
      />

      {/* Cinematic Theater Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 180 }}
        className="relative w-full max-w-5xl bg-dark-bg border border-white/10 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(229,9,20,0.25)] z-10"
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-dark-card/50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-netflix-red animate-pulse" />
            <h3 className="font-display font-bold text-lg text-white tracking-wide">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Frame (16:9 Aspect Ratio) */}
        <div className="relative aspect-video w-full bg-black">
          <video
            ref={videoRef}
            src={activeVideo}
            autoPlay
            loop
            controls
            playsInline
            muted={isMuted}
            className="w-full h-full object-contain"
          />

          {/* Quick Sound Hotkey */}
          <div className="absolute bottom-16 right-4 z-10">
            <button
              onClick={toggleMute}
              className="p-2.5 rounded-full bg-black/80 text-white/80 hover:text-white hover:scale-105 border border-white/5 flex items-center justify-center transition-all cursor-pointer"
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? <VolumeX className="w-4.5 h-4.5" /> : <Volume2 className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>

        {/* Modal Footer Info */}
        <div className="p-6 bg-dark-card/40 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-t border-white/5">
          <div className="text-left">
            <span className="text-[10px] font-mono tracking-wider text-netflix-red font-bold uppercase">
              SHOWREEL BLOCKBUSTER EDITION
            </span>
            <p className="text-sm text-gray-400 mt-1 max-w-xl">
              Featuring raw action sequencing, multi-camera pacing, narrative voiceover logic, and heavy DaVinci Resolve color workspace grading.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="text-xs bg-white/5 px-3 py-1.5 rounded-md border border-white/5 text-gray-300 font-medium">
              4K ProRes Master
            </span>
            <span className="text-xs bg-netflix-red/10 px-3 py-1.5 rounded-md border border-netflix-red/20 text-netflix-red font-bold">
              Dolby Atmos 5.1
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
