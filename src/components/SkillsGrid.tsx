/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Hammer, Award } from 'lucide-react';
import { SKILLS } from '../data';

export default function SkillsGrid() {
  const [graphMetric, setGraphMetric] = useState<'proficiency' | 'render_load' | 'retention_impact'>('proficiency');
  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  const getStrokeColor = (name: string) => {
    switch (name) {
      case 'Premiere Pro':
        return '#00e5ff';
      case 'After Effects':
        return '#e040fb';
      case 'DaVinci Resolve':
        return '#f59e0b';
      case 'Photoshop':
        return '#00c8ff';
      case 'Illustrator':
        return '#ff9f00';
      case 'Blender 3D':
        return '#f57c00';
      case 'CapCut Pro':
        return '#26c6da';
      case 'Higgsfield AI':
        return '#CCFF00';
      default:
        return '#ffffff';
    }
  };

  // Custom visual assets for software logos using modern HTML/CSS
  const renderLogo = (name: string) => {
    switch (name) {
      case 'Premiere Pro':
        return (
          <div className="w-10 h-10 rounded-lg bg-[#001c3d] border border-[#00e5ff]/30 flex items-center justify-center font-display font-black text-sm text-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.15)] select-none">
            Pr
          </div>
        );
      case 'After Effects':
        return (
          <div className="w-10 h-10 rounded-lg bg-[#1a0033] border border-[#e040fb]/30 flex items-center justify-center font-display font-black text-sm text-[#e040fb] shadow-[0_0_15px_rgba(224,64,251,0.15)] select-none">
            Ae
          </div>
        );
      case 'DaVinci Resolve':
        return (
          <div className="w-10 h-10 rounded-lg bg-black border border-amber-500/30 flex items-center justify-center relative shadow-[0_0_15px_rgba(245,158,11,0.15)] select-none overflow-hidden">
            {/* Custom 3 Color Grading Wheels symbol */}
            <div className="flex gap-0.5 transform rotate-45 scale-90">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500 opacity-80" />
              <span className="w-3.5 h-3.5 rounded-full bg-green-500 opacity-80" />
              <span className="w-3.5 h-3.5 rounded-full bg-blue-500 opacity-80" />
            </div>
          </div>
        );
      case 'Photoshop':
        return (
          <div className="w-10 h-10 rounded-lg bg-[#001829] border border-[#00c8ff]/30 flex items-center justify-center font-display font-black text-sm text-[#00c8ff] shadow-[0_0_15px_rgba(0,200,255,0.15)] select-none">
            Ps
          </div>
        );
      case 'Illustrator':
        return (
          <div className="w-10 h-10 rounded-lg bg-[#261300] border border-[#ff9f00]/30 flex items-center justify-center font-display font-black text-sm text-[#ff9f00] shadow-[0_0_15px_rgba(255,159,0,0.15)] select-none">
            Ai
          </div>
        );
      case 'Blender 3D':
        return (
          <div className="w-10 h-10 rounded-lg bg-[#331a00] border border-[#f57c00]/30 flex items-center justify-center font-display font-black text-sm text-[#f57c00] shadow-[0_0_15px_rgba(245,124,0,0.15)] select-none">
            Bl
          </div>
        );
      case 'CapCut Pro':
        return (
          <div className="w-10 h-10 rounded-lg bg-[#002626] border border-[#26c6da]/30 flex items-center justify-center font-display font-black text-sm text-[#26c6da] shadow-[0_0_15px_rgba(38,198,218,0.15)] select-none">
            Cc
          </div>
        );
      case 'Higgsfield AI':
        return (
          <div className="w-10 h-10 rounded-lg overflow-hidden select-none shadow-[0_0_15px_rgba(204,255,0,0.25)] border border-[#CCFF00]/30 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#CCFF00" />
              <path 
                d="M 14,31 C 25,15 45,25 40,35 C 32,45 20,45 20,55 C 20,67 32,75 40,65 C 50,53 50,35 65,35 C 80,35 80,50 70,60 C 58,72 50,75 55,80 C 60,85 86,75 86,51" 
                stroke="#111111" 
                strokeWidth="10.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="relative w-full py-24 md:py-32 bg-[#0B0B0B] overflow-hidden border-t border-white/5">
      {/* Background flare lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-netflix-red/2 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Row split: left description, right grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center text-left">
          
          {/* Left Column - Narrative Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center bg-dark-card/40 border border-white/5 rounded-3xl p-6 md:p-8 apple-stroke-card"
          >
            <div className="flex items-center gap-2 mb-3">
              <Hammer className="w-4.5 h-4.5 text-netflix-red" />
              <span className="text-xs font-mono font-bold tracking-widest text-netflix-red uppercase">
                THE ARMORY
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight leading-tight mb-6">
              Industry-Grade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                Software Mastery
              </span>
            </h2>

            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium mb-8">
              True speed and premium pacing require more than just a creative eye—it demands a master-level technical grip on standard-grade CGI, color matching, and timeline engines.
            </p>

            <div className="flex flex-col gap-4 border-l-2 border-white/10 pl-6 py-2">
              <a
                href="https://www.adobe.com/in/products/premiere.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 cursor-pointer group/item hover:bg-white/5 p-2 -m-2 rounded-xl transition-all duration-200 hover:translate-x-1"
                id="premiere-link"
              >
                <span className="w-2 h-2 rounded-full bg-[#00e5ff] mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(0,229,255,0.6)] group-hover/item:scale-125 transition-all" />
                <p className="text-sm text-gray-300 group-hover/item:text-white transition-colors">
                  <strong className="text-white underline decoration-dotted decoration-[#00e5ff]/40 underline-offset-4 group-hover/item:decoration-[#00e5ff]">Continuous speed ramps</strong> syncing sound assets precisely to video frames.
                </p>
              </a>
              <div className="flex items-start gap-3 mt-2">
                <span className="w-2 h-2 rounded-full bg-[#e040fb] mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(224,64,251,0.6)]" />
                <p className="text-sm text-gray-300">
                  <strong className="text-white">3D projection camera matching</strong> for hyperrealistic transitions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-5">
            {SKILLS.map((skill, idx) => {
              const strokeOffset = circumference - (skill.percentage / 100) * circumference;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: idx % 2 === 0 ? 1 : -1,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.6)"
                  }}
                  className="relative bg-dark-card/60 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-between group transition-all duration-300 hover:border-white/10 select-none apple-stroke-card"
                >
                  {/* Floating Software Icon header */}
                  <div className="w-full flex justify-between items-start mb-6">
                    {renderLogo(skill.name)}
                    <span className="font-mono text-xs text-gray-500 group-hover:text-netflix-red font-bold transition-colors">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Circular SVG Progress Ring */}
                  <div className="relative w-20 h-20 flex items-center justify-center mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Gray track ring */}
                      <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        className="stroke-white/5"
                        strokeWidth="3.5"
                        fill="transparent"
                      />
                      {/* Active Colored Progress Ring */}
                      <motion.circle
                        cx="40"
                        cy="40"
                        r={radius}
                        stroke={getStrokeColor(skill.name)}
                        strokeWidth="3.5"
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: strokeOffset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        style={{ filter: `drop-shadow(0 0 4px ${getStrokeColor(skill.name)})` }}
                      />
                    </svg>
                    {/* Tiny logo initials inner circle */}
                    <span className="absolute text-xs font-mono font-black text-white">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Tool Label Title */}
                  <span className="text-xs font-display font-bold text-gray-300 group-hover:text-white tracking-wide transition-colors">
                    {skill.name}
                  </span>

                  {/* Decorative corner indicator */}
                  <span className="absolute bottom-2.5 right-2.5 w-1 h-1 rounded-full bg-white/10 group-hover:bg-netflix-red transition-all duration-300" />
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Comparative Stack Graph */}
        <div className="mt-16 bg-dark-card/40 border border-white/5 rounded-3xl p-6 md:p-10 apple-stroke-card" id="skills-compare-graph">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 text-left">
            <div>
              <span className="text-[10px] font-mono font-bold text-netflix-red uppercase tracking-widest block mb-1">
                METRIC BENCHMARKS
              </span>
              <h3 className="text-xl md:text-2xl font-display font-black text-white tracking-tight">
                Suite Pipeline Performance Comparison
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Comparing rendering speed, retention optimization impact, and asset timeline integration weight.
              </p>
            </div>
            
            {/* Interactive metric selectors */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5 self-start">
              {(['proficiency', 'render_load', 'retention_impact'] as const).map((metric) => (
                <button
                  key={metric}
                  onClick={() => setGraphMetric(metric)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all uppercase tracking-wider cursor-pointer ${
                    graphMetric === metric 
                      ? 'bg-netflix-red text-white shadow' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {metric.replace('_', ' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {SKILLS.map((skill) => {
              // Calculate values based on selected metric
              let barValue = skill.percentage;
              let suffix = "% Proficiency";
              let description = "";

              if (graphMetric === 'render_load') {
                if (skill.name === 'Premiere Pro') { barValue = 92; suffix = " FPS @ 4K RAW"; description = "Multithreaded export rendering acceleration"; }
                else if (skill.name === 'After Effects') { barValue = 48; suffix = " FPS (Heavy Cache)"; description = "RAM preview allocation for active composition"; }
                else if (skill.name === 'DaVinci Resolve') { barValue = 96; suffix = " FPS (ACES Workflow)"; description = "Dual GPU grading pipeline optimization"; }
                else if (skill.name === 'Blender 3D') { barValue = 35; suffix = " FPS (Cycles Path Tracing)"; description = "OptiX denoising viewport rendering speed"; }
                else if (skill.name === 'Higgsfield AI') { barValue = 88; suffix = " FPS (SaaS GPU Node)"; description = "AI generation & deep temporal prediction"; }
              } else if (graphMetric === 'retention_impact') {
                if (skill.name === 'Premiere Pro') { barValue = 85; suffix = " / 100 Impact Score"; description = "Main pacing, speed ramps, and scene retention loops"; }
                else if (skill.name === 'After Effects') { barValue = 92; suffix = " / 100 Impact Score"; description = "Kinetic highlights, tracking markers, title animations"; }
                else if (skill.name === 'DaVinci Resolve') { barValue = 78; suffix = " / 100 Impact Score"; description = "Subconscious shadow contrast mood and skin tones"; }
                else if (skill.name === 'Blender 3D') { barValue = 82; suffix = " / 100 Impact Score"; description = "Fluid simulations, custom 3D models and lighting"; }
                else if (skill.name === 'Higgsfield AI') { barValue = 95; suffix = " / 100 Impact Score"; description = "AI video enhancement and highly retention-optimal B-Roll"; }
              } else {
                if (skill.name === 'Premiere Pro') description = "Primary timeline editing, pacing, and multi-cam sync";
                else if (skill.name === 'After Effects') description = "Kinetic typography, motion presets, and VFX tracking";
                else if (skill.name === 'DaVinci Resolve') description = "Theatrical grading, HDR color spacing, and film emulation";
                else if (skill.name === 'Blender 3D') description = "Custom 3D product renders, spatial texturing, and dynamic lighting";
                else if (skill.name === 'Higgsfield AI') description = "Hyperrealistic generative motion, temporal synthesis, and rapid ideation";
              }

              return (
                <div key={skill.name} className="space-y-2 text-left">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white font-display text-sm">{skill.name}</span>
                      <span className="text-[10px] text-gray-500 font-normal hidden sm:inline">— {description}</span>
                    </div>
                    <span className="font-black text-white">{barValue}{suffix}</span>
                  </div>

                  {/* Horizontal Bar */}
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/[0.02]">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.glowColor} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${barValue}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
