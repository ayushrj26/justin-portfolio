/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Play, Quote, Sparkles, Youtube, ExternalLink } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { Testimonial } from '../types';

interface TestimonialsProps {
  onPlayReview: (testimonial: Testimonial) => void;
}

export default function Testimonials({ onPlayReview }: TestimonialsProps) {
  return (
    <section id="testimonials" className="relative w-full py-24 md:py-32 bg-dark-bg overflow-hidden border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-netflix-red/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Creator Channels Section (Now at the top) */}
        <div className="mb-24 pb-16">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-2">
            <div className="flex items-center gap-2 justify-center">
              <Youtube className="w-5 h-5 text-netflix-red" />
              <span className="text-xs font-mono font-bold tracking-widest text-netflix-red uppercase">
                Featured Partner Channels
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tight">
              Channels We Edit & Grow
            </h3>
            <p className="text-xs md:text-sm text-gray-400">
              Direct links to the incredible YouTube channels we craft and manage high-retention video edits for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sahil XP Channel Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative bg-dark-card/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 hover:border-netflix-red/30 apple-stroke-card overflow-hidden"
            >
              {/* Decorative Red Glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-netflix-red/10 rounded-full blur-2xl group-hover:bg-netflix-red/20 transition-all duration-300" />
              
              <div className="flex items-start gap-4">
                {/* Channel Avatar */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10 shrink-0 group-hover:border-netflix-red/40 transition-colors duration-300 bg-zinc-900 shadow-md">
                  <img 
                    src="https://res.cloudinary.com/xcwaqcmp/image/upload/f_auto,q_auto/v1783414204/channels4_profile_1_lrfxgq.jpg" 
                    alt="Sahil XP Profile Avatar" 
                    className="w-full h-full object-cover filter brightness-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Channel Details */}
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <h4 className="font-display font-black text-lg text-white group-hover:text-netflix-red transition-colors duration-300">
                      SAHIL XP
                    </h4>
                    <span className="flex items-center gap-0.5 bg-red-600/10 text-netflix-red text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase font-mono">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium mt-1">
                    IRL, Gaming, Vlogs & Tech Creator
                  </p>
                  <div className="flex flex-col gap-1.5 mt-3 text-left">
                    <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
                      <span className="text-gray-300 font-semibold">27M+ Total Subs</span>
                      <span>•</span>
                      <span>5 Channels Network</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                      Sahil XP has 4 more channels that have over 27+ Million subscribers in total.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono">
                  Average retention increased by 42%
                </span>
                <a
                  href="https://www.youtube.com/@SahilXp2"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-netflix-red hover:text-white font-bold transition-colors font-mono tracking-wider cursor-pointer group-hover:translate-x-0.5 duration-300"
                >
                  VISIT YOUTUBE
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Ayush Bhandari Channel Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative bg-dark-card/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 hover:border-netflix-red/30 apple-stroke-card overflow-hidden"
            >
              {/* Decorative Red Glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-netflix-red/10 rounded-full blur-2xl group-hover:bg-netflix-red/20 transition-all duration-300" />
              
              <div className="flex items-start gap-4">
                {/* Channel Avatar */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10 shrink-0 group-hover:border-netflix-red/40 transition-colors duration-300 bg-zinc-900 shadow-md">
                  <img 
                    src="https://res.cloudinary.com/xcwaqcmp/image/upload/f_auto,q_auto/v1783414209/channels4_profile_2_znexju.jpg" 
                    alt="Ayush Bhandari Profile Avatar" 
                    className="w-full h-full object-cover filter brightness-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Channel Details */}
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <h4 className="font-display font-black text-lg text-white group-hover:text-netflix-red transition-colors duration-300">
                      Ayush Bhandari
                    </h4>
                    <span className="flex items-center gap-0.5 bg-red-600/10 text-netflix-red text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase font-mono">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium mt-1">
                    IRL & Tech Video Creator
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-xs font-mono text-gray-500">
                    <span className="text-gray-300 font-semibold">6M+ Subscribers</span>
                    <span>•</span>
                    <span>Partner Since 2024</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono">
                  Weekly high-production longform
                </span>
                <a
                  href="https://www.youtube.com/@AyushBhandari"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-netflix-red hover:text-white font-bold transition-colors font-mono tracking-wider cursor-pointer group-hover:translate-x-0.5 duration-300"
                >
                  VISIT YOUTUBE
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section Heading (Now below, with top divider) */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 flex flex-col gap-3 pt-16 border-t border-white/5">
          <div className="flex items-center gap-2 justify-center">
            <Sparkles className="w-4.5 h-4.5 text-netflix-red" />
            <span className="text-xs font-mono font-bold tracking-widest text-netflix-red uppercase">
              CRITICS & CLIENTS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight">
            Loved By Producers
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
            What directors, YouTube creators, and global brand media architects say about our narrative pacing and cinematic pacing.
          </p>
        </div>

        {/* Testimonials Bento Cards Layout (Now below) */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ 
                opacity: 0, 
                x: idx % 3 === 0 ? -50 : idx % 3 === 2 ? 50 : 0,
                y: idx % 3 === 1 ? 50 : 0
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, type: 'spring', damping: 20, stiffness: 60 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 15px 35px rgba(0,0,0,0.8)"
              }}
              className="relative bg-dark-card/60 border border-white/5 rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 hover:border-white/10 apple-stroke-card"
            >
              {/* Quotation mark decoration */}
              <div className="absolute top-6 right-8 text-white/5 group-hover:text-netflix-red/10 transition-colors duration-300">
                <Quote className="w-16 h-16 transform scale-x-[-1]" />
              </div>

              {/* Stars & Video Review tag */}
              <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
                {/* 5-Star Ratings */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Autoplay review modal button */}
                {testimonial.videoReviewUrl && (
                  <button
                    onClick={() => onPlayReview(testimonial)}
                    className="flex items-center gap-1.5 bg-netflix-red/10 border border-netflix-red/20 hover:bg-netflix-red/20 text-netflix-red font-mono text-[10px] font-extrabold px-3 py-1.5 rounded-full shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <Play className="w-2.5 h-2.5 fill-netflix-red text-netflix-red" />
                    VIDEO REVIEW
                  </button>
                )}
              </div>

              {/* Quote Content text */}
              <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed italic text-left mb-8 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author Portrait Metadata block */}
              <div className="flex items-center gap-4 text-left border-t border-white/5 pt-6 relative z-10">
                <div>
                  <h4 className="font-display font-bold text-sm text-white group-hover:text-netflix-red transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-mono mt-0.5">
                    {testimonial.role}
                    {testimonial.company && (
                      <>
                        , <span className="text-gray-400 font-medium">{testimonial.company}</span>
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Tiny bottom glow accent */}
              <span className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-netflix-red/20 to-transparent scale-0 group-hover:scale-100 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
