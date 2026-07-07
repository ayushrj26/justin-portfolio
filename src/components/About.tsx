/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Camera, 
  Tv, 
  Flame, 
  Sparkles, 
  Award, 
  Sliders, 
  Volume2, 
  VolumeX, 
  Layers, 
  Video, 
  Eye, 
  Play, 
  Music, 
  Zap,
  CheckCircle2,
  Maximize2,
  ChevronDown
} from 'lucide-react';
import { BRANDS } from '../data';

const MILESTONES = [
  {
    year: "2019",
    tag: "01 / THE GENESIS",
    title: "The Spark & Raw Cuts",
    role: "Freelance Vlog Editor",
    story: "Began editing standard YouTube vlogs on an entry-level laptop. This raw phase taught me the fundamentals of micro-pacing, surgical jump-cuts, and the supreme priority of continuous retention loops. I learned that every frame matters when fighting for a viewer's split-second attention.",
    highlight: "Achieved first 1M+ views project for a breakthrough tech creator.",
    icon: Flame,
    stats: "1M+ Cumulative Views",
    accent: "from-amber-500 to-red-500",
    color: "#F59E0B"
  },
  {
    year: "2021",
    tag: "02 / ACCELERATION",
    title: "Commercial Breakthrough",
    role: "Lead Creative Editor at Agency",
    story: "Transitioned into agency life, crafting high-profile cinematic social campaigns for international streetwear, lifestyle, and retail brands. Mastered professional color science (ACES), complex multitrack sound design, and narrative pacing under extreme tight deadlines.",
    highlight: "Directed & graded 12+ ad campaigns with peak retention scores.",
    icon: Camera,
    stats: "14+ Brands Served",
    accent: "from-blue-500 to-cyan-500",
    color: "#3B82F6"
  },
  {
    year: "2023",
    tag: "03 / MATURITY",
    title: "Deep Narrative Immersion",
    role: "Independent Documentary Editor",
    story: "Shifted focus towards deep, high-production documentary narratives and long-form storytelling. Integrated psychological pacing patterns, cinematic auditory sweeps, and tension-buildup techniques to maintain absolute attention spans over 30+ minute video durations.",
    highlight: "Edited high-production YouTube docuseries hitting 10M+ collective views.",
    icon: Tv,
    stats: "63+ Cuts Completed",
    accent: "from-purple-500 to-netflix-red",
    color: "#E50914"
  },
  {
    year: "2026",
    tag: "04 / SYNTHESIS",
    title: "AI-Spliced Video Futures",
    role: "Generative Video Integrator",
    story: "Currently pioneering the bleeding-edge fusion of high-end manual timeline editing with advanced generative video systems like Higgsfield AI. I craft custom B-Roll sequences, photorealistic transitions, and dynamic visual assets that supercharge production efficiency and elevate creative storytelling.",
    highlight: "Pioneered neural-assisted B-Roll workflows for master director workflows.",
    icon: Sparkles,
    stats: "Higgsfield AI Certified",
    accent: "from-lime-400 to-[#CCFF00]",
    color: "#CCFF00"
  }
];

const CREED_QUESTIONS = [
  {
    id: 0,
    question: "What is your philosophy on keeping viewers hooked?",
    answer: "Viewer retention is a psychological rhythm. It's not about making a cut every 2 seconds—that causes cognitive fatigue. It is about matching the visual pacing to the breathing pattern, speech cadence, and musical undertone of the video. I use micro-sound cues, split-second B-roll insertions, and subtle grade shifts to keep the viewer sub-consciously re-engaged every single second."
  },
  {
    id: 1,
    question: "How do you integrate generative AI tools like Higgsfield in your edits?",
    answer: "AI tools are not replacements for human taste; they are creative force multipliers. I use Higgsfield AI to generate custom, photorealistic visual assets and high-impact B-roll that are otherwise impossible to capture or source on a budget. This allows me to perfectly match the director's script with custom-tailored visual assets in seconds, bridging the gap between imagination and timeline rendering."
  },
  {
    id: 2,
    question: "Why do you emphasize sound design so heavily in your portfolio?",
    answer: "Sound design is 70% of what makes a video feel cinematic. Without deep sub-bass drops, spatial stereo soundscapes, ambient room tones, and polished voice dynamics, even the most beautiful 4K footage feels flat. Sound triggers primitive emotional responses that lock the audience into the scene."
  },
  {
    id: 3,
    question: "What is your favorite type of project to collaborate on?",
    answer: "I love projects that challenge traditional pacing rules—immersive brand documentaries, high-octane commercial teasers, and cinematic storytelling vlogs. Any project where the creator wants to build an authentic, emotional world rather than just put together superficial clips is where my skills shine best."
  }
];

interface AboutProps {
  detailed?: boolean;
}

export default function About({ detailed = false }: AboutProps) {
  // Detailed Section Interactive States
  const [activeMilestone, setActiveMilestone] = useState(3); // Default to the latest milestone (2026)
  const [openQues, setOpenQues] = useState<number | null>(0); // Default open first question

  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-[#0B0B0B] overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-netflix-red/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-blue-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Split Narrative Block */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center text-left mb-24">
          
          {/* Left Column - Large Stylized Portrait */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-netflix-red to-blue-500 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-700" />
            
            <div className="relative aspect-[3/4] w-full bg-dark-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl apple-stroke-card">
              <img
                src="https://i.ibb.co/m5yC9NS4/Picsart-26-06-12-20-42-20-724-jpg.jpg"
                alt="Professional Video Editor Director Portrait"
                referrerPolicy="no-referrer"
                draggable="false"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 select-none pointer-events-none"
              />
              
              {/* Glassmorphic floating tag over image */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/75 backdrop-blur-md border border-white/10 p-5 rounded-xl text-left flex items-center gap-4 shadow-2xl">
                <div className="w-10 h-10 rounded-full bg-netflix-red/20 border border-netflix-red/30 flex items-center justify-center text-netflix-red">
                  <Camera className="w-5 h-5 text-netflix-red animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-netflix-red font-bold uppercase block">
                    FOUNDER & LEAD
                  </span>
                  <h4 className="font-display font-bold text-sm text-white">
                    Justin
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Who I Am & Vision */}
          <div className="lg:col-span-7 flex flex-col justify-center bg-dark-card/40 border border-white/5 rounded-3xl p-6 md:p-10 apple-stroke-card">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-4.5 h-4.5 text-netflix-red" />
              <span className="text-xs font-mono font-bold tracking-widest text-netflix-red uppercase">
                THE STORYTELLER
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight leading-tight mb-6">
              I edit stories that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                demand attention.
              </span>
            </h2>

            <div className="space-y-6 text-gray-300 font-medium text-sm md:text-base leading-relaxed mb-8">
              <p>
                Hi, I'm Justin. Over the last 5+ years, I've worked as a high-end commercial, documentary, and short-form editor collaborating with <strong className="text-white">top tier creators</strong> across YouTube, Instagram, and premium streaming networks.
              </p>
              <p>
                To me, editing isn't just about putting clips together—it's an emotional and mathematical formula. It is about understanding tension, pacing, sound orchestration, and color architecture to capture the audience's sub-second attention span.
              </p>
              <p>
                Whether it is a 30-second rapid-cut street shoe campaign or a 25-minute immersive historical documentary, I build visual structures that viewers do not want to click away from.
              </p>
            </div>

            {/* Micro visual stats block */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-8">
              <div>
                <span className="font-mono text-2xl md:text-3xl font-black text-white block">
                  14+
                </span>
                <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider block mt-1">
                  BRANDS SERVED
                </span>
              </div>
              <div>
                <span className="font-mono text-2xl md:text-3xl font-black text-netflix-red block neon-glow-red">
                  63+
                </span>
                <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider block mt-1">
                  PROJECTS DELIVERED
                </span>
              </div>
              <div>
                <span className="font-mono text-2xl md:text-3xl font-black text-white block">
                  4K
                </span>
                <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider block mt-1">
                  MASTER FORMATS
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* COOL DETAILED SECTION: ONLY visible in About & Gear page */}
        {detailed && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-24 space-y-16"
          >
            {/* Section Header */}
            <div className="text-center md:text-left border-t border-white/5 pt-16">
              <span className="text-[10px] font-mono font-bold text-netflix-red uppercase tracking-widest block mb-2">
                BEHIND THE LENS
              </span>
              <h3 className="text-2xl md:text-4xl font-display font-black text-white tracking-tight">
                My Creative Odyssey & Core Creed
              </h3>
              <p className="text-sm text-gray-400 mt-2 max-w-2xl">
                Trace my evolution as a professional story-weaver and explorer of next-generation cinematic workflows.
              </p>
            </div>

            {/* Interactive Timeline & Accomplishments */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Timeline selector (Left column) */}
              <div className="lg:col-span-4 space-y-3">
                <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block text-left mb-2">
                  CHOOSE MILESTONE
                </span>
                <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-none">
                  {MILESTONES.map((item, idx) => {
                    const MilestoneIcon = item.icon;
                    const isActive = activeMilestone === idx;
                    return (
                      <button
                        key={item.year}
                        onClick={() => setActiveMilestone(idx)}
                        className={`flex items-center gap-4 px-4 py-3.5 rounded-xl border text-left cursor-pointer transition-all duration-300 min-w-[150px] lg:min-w-0 shrink-0 w-full ${
                          isActive
                            ? 'bg-white/10 border-white/20 shadow-lg'
                            : 'bg-transparent border-white/5 hover:bg-white/[0.03] hover:border-white/10'
                        }`}
                      >
                        <div 
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isActive ? 'bg-netflix-red text-white' : 'bg-white/5 text-gray-400'
                          }`}
                        >
                          <MilestoneIcon className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <span className="text-xs font-mono font-bold text-gray-500 block leading-none">
                            {item.year}
                          </span>
                          <span className={`text-sm font-display font-bold block mt-1 transition-colors ${
                            isActive ? 'text-white' : 'text-gray-400'
                          }`}>
                            {item.title.split(' & ')[0]}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Milestone Details Card (Right column) */}
              <div className="lg:col-span-8">
                {MILESTONES.map((item, idx) => {
                  if (activeMilestone !== idx) return null;
                  const MilestoneIcon = item.icon;
                  return (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3 }}
                      className="bg-dark-card/40 border border-white/5 rounded-3xl p-6 md:p-8 text-left relative overflow-hidden apple-stroke-card"
                    >
                      <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${item.accent} opacity-[0.03] rounded-full blur-3xl pointer-events-none`} />
                      
                      {/* Top Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-6">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-netflix-red uppercase tracking-widest block">
                            {item.tag}
                          </span>
                          <h4 className="text-xl md:text-2xl font-display font-black text-white mt-1">
                            {item.title}
                          </h4>
                          <span className="text-xs text-gray-400 mt-1 block">
                            Role: <strong className="text-white font-semibold">{item.role}</strong>
                          </span>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                          <div className="w-8 h-8 rounded-lg bg-netflix-red/10 border border-netflix-red/20 flex items-center justify-center text-netflix-red">
                            <MilestoneIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[8px] font-mono font-bold text-gray-500 block uppercase leading-none">
                              RECORD STAT
                            </span>
                            <span className="text-xs font-mono font-bold text-white block mt-0.5">
                              {item.stats}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Narrative Story */}
                      <div className="space-y-6">
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                          {item.story}
                        </p>

                        {/* Highlight Accomplishment Block */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 flex items-start gap-4">
                          <div className="w-8 h-8 rounded-lg bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00] shrink-0">
                            <Award className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold text-[#CCFF00] uppercase tracking-wider block">
                              KEY ACCOMPLISHMENT
                            </span>
                            <p className="text-xs md:text-sm text-gray-300 mt-1 font-medium">
                              {item.highlight}
                            </p>
                          </div>
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </div>

            </div>

            {/* Q&A / FAQs (Core Creed Section) */}
            <div className="grid lg:grid-cols-12 gap-8 items-start border-t border-white/5 pt-16">
              
              {/* Creed Title (Left Side) */}
              <div className="lg:col-span-4 text-left">
                <span className="text-[10px] font-mono font-bold text-netflix-red uppercase tracking-widest block mb-1">
                  PHILOSOPHY
                </span>
                <h4 className="text-xl md:text-2xl font-display font-black text-white">
                  Creative Creed & Q&A
                </h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  I believe in complete transparency about my craft. Click any question to understand my post-production mind-map, system logic, and creator partnerships.
                </p>
              </div>

              {/* Accordion Questions (Right Side) */}
              <div className="lg:col-span-8 space-y-3">
                {CREED_QUESTIONS.map((item) => {
                  const isOpen = openQues === item.id;
                  return (
                    <div 
                      key={item.id}
                      className="bg-dark-card/30 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors apple-stroke-card"
                    >
                      <button
                        onClick={() => setOpenQues(isOpen ? null : item.id)}
                        className="w-full flex items-center justify-between p-5 text-left cursor-pointer transition-colors"
                      >
                        <span className="font-display font-bold text-sm md:text-base text-white pr-4">
                          {item.question}
                        </span>
                        <div className={`w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-white' : ''
                        }`}>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      </button>

                      {/* Accordion Content */}
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 border-t border-white/5 bg-white/[0.01]">
                          <p className="text-xs md:text-sm text-gray-400 leading-relaxed text-left">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          </motion.div>
        )}

        {/* Infinite Brands Marquee */}
        <div className="border-t border-white/5 pt-16 text-center">
          <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest block mb-8">
            TRUSTED BY PREEMINENT STUDIOS & TEAMS
          </span>

          <div className="relative w-full overflow-hidden py-4">
            {/* Left and right fade-out vignette masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

            {/* Sliding marquee tracks using Framer Motion */}
            <div className="flex w-[200%] gap-12 items-center">
              <motion.div
                className="flex gap-12 items-center shrink-0 justify-around w-full"
                animate={{ x: [0, "-100%"] }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {BRANDS.map((brand, bIdx) => (
                  <div
                    key={`${brand.name}-${bIdx}`}
                    className="text-lg md:text-2xl font-black tracking-widest text-gray-600 hover:text-white transition-all duration-300 cursor-default uppercase font-display"
                  >
                    {brand.logo}
                  </div>
                ))}
              </motion.div>
              <motion.div
                className="flex gap-12 items-center shrink-0 justify-around w-full"
                animate={{ x: [0, "-100%"] }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {BRANDS.map((brand, bIdx) => (
                  <div
                    key={`${brand.name}-dup-${bIdx}`}
                    className="text-lg md:text-2xl font-black tracking-widest text-gray-600 hover:text-white transition-all duration-300 cursor-default uppercase font-display"
                  >
                    {brand.logo}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

