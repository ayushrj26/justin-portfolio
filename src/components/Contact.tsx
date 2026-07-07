/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Linkedin, FileText, Sparkles, ArrowRight, Film, Github, Compass } from 'lucide-react';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  const handleContactClick = (platform: string) => {
    alert(`Connecting to ${platform}... (In production this would launch direct deep links or forms)`);
  };

  return (
    <section id="contact" className="relative w-full py-24 md:py-32 bg-dark-bg overflow-hidden border-t border-white/5 flex flex-col justify-between">
      {/* Background flare effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-netflix-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Cinematic Credits Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 flex flex-col gap-6">
          <div className="flex items-center gap-2 justify-center">
            <Sparkles className="w-4.5 h-4.5 text-netflix-red animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-netflix-red uppercase">
              THE END CREDITS
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-none">
            Let's Create Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-netflix-red via-red-500 to-white neon-glow-red">
              Worth Watching.
            </span>
          </h2>

          <p className="text-sm md:text-base text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed mt-4">
            Currently accepting bookings for high-end digital series, corporate showreels, cinematic documentaries, and retention-focused vertical campaigns.
          </p>
        </div>

        {/* Dynamic Bento Social / Call buttons grid */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-20">
          
          {/* Email Card */}
          <a
            href="mailto:jatin787678@gmail.com"
            className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-netflix-red/30 hover:bg-white/10 text-left transition-all duration-300 group cursor-pointer apple-stroke-card"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-netflix-red/10 border border-netflix-red/20 flex items-center justify-center text-netflix-red group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-gray-500 uppercase block">DIRECT EMAIL</span>
                <span className="text-sm font-bold text-white block mt-0.5">jatin787678@gmail.com</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-netflix-red group-hover:translate-x-1 transition-all" />
          </a>

          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/mehh_comrd/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-netflix-red/30 hover:bg-white/10 text-left transition-all duration-300 group cursor-pointer apple-stroke-card"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-gray-500 uppercase block">INSTAGRAM LOGS</span>
                <span className="text-sm font-bold text-white block mt-0.5">@mehh_comrd</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-netflix-red group-hover:translate-x-1 transition-all" />
          </a>

        </div>

      </div>

      {/* Minimalistic Footer */}
      <footer className="w-full border-t border-white/5 bg-black/40 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo and Copyright */}
          <div className="flex items-center gap-3">
            <Film className="w-4 h-4 text-netflix-red" />
            <span className="text-xs font-mono tracking-widest text-gray-500 uppercase">
              © {currentYear} JUSTIN Carmichael. ALL RIGHTS RESERVED.
            </span>
          </div>

          {/* Made with Passion Sign-off */}
          <div className="text-xs font-mono font-bold tracking-widest text-gray-600 uppercase flex items-center gap-1">
            MADE WITH PASSION <span className="text-netflix-red">❤</span> FOR FILMMAKERS
          </div>

        </div>
      </footer>
    </section>
  );
}
