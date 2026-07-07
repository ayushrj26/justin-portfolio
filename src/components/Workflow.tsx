/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Compass, 
  Scissors, 
  Volume2, 
  Sliders, 
  Layers, 
  TrendingUp, 
  Tv, 
  CheckCircle, 
  Sparkles, 
  Play, 
  RefreshCw, 
  SlidersHorizontal,
  ChevronRight,
  ShieldAlert,
  FolderCheck,
  Eye,
  Info,
  Check,
  Plus
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data';

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(2); // Default is "03 The Fine Edit & Pace Mastery"

  const icons = [
    <Search className="w-5 h-5" />,
    <Compass className="w-5 h-5" />,
    <Scissors className="w-5 h-5" />,
    <Volume2 className="w-5 h-5" />,
    <Sliders className="w-5 h-5" />,
    <Layers className="w-5 h-5" />,
    <TrendingUp className="w-5 h-5" />,
    <Tv className="w-5 h-5" />
  ];

  return (
    <section id="workflow" className="relative w-full py-24 md:py-32 bg-dark-bg overflow-hidden border-t border-white/5">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-netflix-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 flex flex-col gap-3">
          <div className="flex items-center gap-2 justify-center">
            <Sparkles className="w-4.5 h-4.5 text-netflix-red" />
            <span className="text-xs font-mono font-bold tracking-widest text-netflix-red uppercase">
              STUDIO PIPELINE
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight">
            The Editing Workflow
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
            From raw camera logs to cinema-ready master files. Explore each phase in our post-production process and interact with the studio suite below.
          </p>
        </div>

        {/* Timeline Horizontal Connected Steppers (Desktop) */}
        <div className="hidden lg:block relative mb-16">
          {/* Main Connector Line Base */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/5 -translate-y-1/2 rounded-full z-0" />

          {/* Glowing Animated Progress Laser Line */}
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-netflix-red via-red-500 to-blue-400 -translate-y-1/2 rounded-full z-0"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeStep / (WORKFLOW_STEPS.length - 1)) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Stepper Nodes */}
          <div className="relative flex justify-between items-center z-10">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              const isPassed = idx < activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center group relative cursor-pointer outline-none focus:outline-none"
                  id={`workflow-step-btn-${idx}`}
                >
                  {/* Node Badge */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-netflix-red border-netflix-red text-white scale-110 shadow-[0_0_20px_rgba(229,9,20,0.6)]'
                        : isPassed
                        ? 'bg-dark-bg border-netflix-red text-netflix-red shadow-[0_0_10px_rgba(229,9,20,0.2)]'
                        : 'bg-dark-card border-white/10 text-gray-500 group-hover:border-white/20 group-hover:text-white'
                    }`}
                  >
                    {isActive ? icons[idx] : <span className="font-mono text-xs font-bold">{step.stepNumber}</span>}
                  </div>

                  {/* Micro Text Labels */}
                  <span
                    className={`text-xs font-display font-bold mt-4 tracking-wide transition-all duration-300 ${
                      isActive ? 'text-white scale-105 font-black' : 'text-gray-500 group-hover:text-gray-300'
                    }`}
                  >
                    {step.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Vertical Stepper (Mobile) */}
        <div className="lg:hidden flex flex-col gap-3 mb-10 text-left">
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`py-3 rounded-lg flex flex-col items-center justify-center border transition-all duration-300 ${
                    isActive
                      ? 'bg-netflix-red border-netflix-red text-white scale-105 shadow-lg shadow-netflix-red/25'
                      : 'bg-dark-card/40 border-white/5 text-gray-400 hover:bg-dark-card/80'
                  }`}
                  id={`workflow-step-mobile-btn-${idx}`}
                >
                  <div className="text-lg font-black font-mono">{step.stepNumber}</div>
                  <span className="text-[9px] font-bold tracking-tight opacity-80 uppercase mt-0.5">
                    {step.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed active step presentation view (Bento Style) */}
        <div className="relative min-h-[300px]" id="workflow-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 bg-dark-card/40 border border-white/5 p-6 md:p-10 rounded-3xl shadow-2xl items-stretch text-left apple-stroke-card"
            >
              {/* Left Column - Stage Summary & Checklist */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-3xl font-black text-netflix-red opacity-85">
                      {WORKFLOW_STEPS[activeStep].stepNumber}
                    </span>
                    <div className="w-[1px] h-6 bg-white/10" />
                    <span className="text-xs font-mono tracking-widest font-bold uppercase text-gray-400">
                      STAGE BLUEPRINT
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tight mb-4">
                    {WORKFLOW_STEPS[activeStep].title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium mb-8">
                    {WORKFLOW_STEPS[activeStep].description}
                  </p>
                </div>

                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 md:p-6">
                  <span className="text-[10px] font-mono tracking-wider font-bold text-netflix-red uppercase mb-4 block">
                    DELIVERABLE ACTIONS
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {WORKFLOW_STEPS[activeStep].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-3 group/item">
                        <div className="w-5 h-5 rounded-full bg-netflix-red/10 border border-netflix-red/20 flex items-center justify-center text-netflix-red flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <CheckCircle className="w-3 h-3 text-netflix-red" />
                        </div>
                        <span className="text-xs md:text-sm font-semibold text-gray-300 group-hover/item:text-white transition-colors">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Interactive Post-Production Console */}
              <div className="lg:col-span-6 bg-black/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-[380px] relative overflow-hidden apple-stroke-card" id="studio-console">
                {/* Console Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-netflix-red animate-pulse" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                      Live Studio Console
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-gray-500">
                    <span className="px-1.5 py-0.5 bg-white/5 rounded border border-white/5">STEP_{WORKFLOW_STEPS[activeStep].stepNumber}</span>
                    <span className="px-1.5 py-0.5 bg-netflix-red/10 text-netflix-red rounded border border-netflix-red/20 font-bold">ONLINE</span>
                  </div>
                </div>

                {/* Switchable Interactive Widgets based on ActiveStep */}
                <div className="flex-grow flex flex-col justify-center relative z-10">
                  {activeStep === 0 && <DiscoveryWidget />}
                  {activeStep === 1 && <AssemblyWidget />}
                  {activeStep === 2 && <FineEditWidget />}
                  {activeStep === 3 && <SoundDesignWidget />}
                  {activeStep === 4 && <ColorGradingWidget />}
                  {activeStep === 5 && <VfxWidget />}
                  {activeStep === 6 && <RetentionWidget />}
                  {activeStep === 7 && <ExportWidget />}
                </div>

                {/* Console Footer */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500 relative z-10">
                  <span>Engine: Carmine v4.1_stable</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    GPU Acceleration Enabled
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

/* ========================================================================== */
/* STAGE WIDGETS */
/* ========================================================================== */

/* --- 01. Discovery & Narrative Blueprint --- */
function DiscoveryWidget() {
  const [loggedClips, setLoggedClips] = useState<Record<string, boolean>>({
    "Clip_1": true,
    "Clip_2": false,
    "Clip_3": false,
    "Clip_4": false,
  });
  const [highlightedHook, setHighlightedHook] = useState(false);

  const clips = [
    { id: "Clip_1", name: "CLIP_01_A_ROLL.MXF", duration: "1:24", camera: "Arri LogC" },
    { id: "Clip_2", name: "CLIP_02_B_ROLL_DRONE.MOV", duration: "0:15", camera: "DJI D-Log" },
    { id: "Clip_3", name: "CLIP_03_INTERVIEW_01.MXF", duration: "2:45", camera: "Arri LogC" },
    { id: "Clip_4", name: "CLIP_04_SOUND_ATMOS.WAV", duration: "0:50", camera: "Stereo 96k" },
  ];

  const totalLogged = Object.values(loggedClips).filter(Boolean).length;
  const progressPercent = (totalLogged / clips.length) * 100;

  return (
    <div className="flex flex-col gap-4 text-left">
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-gray-400 font-mono">Footage Logging Queue</span>
        <span className="text-xs font-mono font-bold text-netflix-red">{totalLogged}/{clips.length} Logged</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-netflix-red to-rose-500 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Clips list */}
      <div className="flex flex-col gap-2">
        {clips.map((clip) => {
          const isLogged = loggedClips[clip.id];
          return (
            <div 
              key={clip.id}
              onClick={() => setLoggedClips(prev => ({ ...prev, [clip.id]: !prev[clip.id] }))}
              className={`p-2.5 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                isLogged 
                  ? 'bg-netflix-red/10 border-netflix-red/30' 
                  : 'bg-white/[0.02] border-white/5 hover:border-white/10'
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className={`w-6 h-6 rounded flex items-center justify-center font-mono text-[10px] font-black ${
                  isLogged ? 'bg-netflix-red text-white' : 'bg-white/5 text-gray-500'
                }`}>
                  {isLogged ? "✔" : "RAW"}
                </div>
                <div className="overflow-hidden">
                  <div className="font-mono text-xs font-bold text-white truncate">{clip.name}</div>
                  <div className="text-[10px] text-gray-500 font-mono">{clip.camera} | {clip.duration}</div>
                </div>
              </div>
              <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                isLogged ? 'bg-netflix-red/20 text-netflix-red' : 'bg-white/5 text-gray-400'
              }`}>
                {isLogged ? "READY" : "LOG"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Transcript highlights block */}
      <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg text-left">
        <span className="text-[9px] font-mono font-bold text-gray-500 uppercase block mb-1">Transcript Review Tool</span>
        <p className="text-xs text-gray-400 italic leading-relaxed">
          "...and that's when we realized, <span 
            onClick={() => setHighlightedHook(!highlightedHook)}
            className={`transition-all duration-300 px-1 py-0.5 rounded cursor-pointer font-bold ${
              highlightedHook 
                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10 underline decoration-dashed'
            }`}
          >
            this single visual technique change everything.
          </span>"
        </p>
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-[9px] font-mono text-gray-500">
          <span>Click statement to highlight story hook</span>
          {highlightedHook && <span className="text-yellow-400 font-bold uppercase animate-pulse">Retention Hook Highlighted!</span>}
        </div>
      </div>
    </div>
  );
}

/* --- 02. Assembly & Storyboarding --- */
function AssemblyWidget() {
  const [blocks, setBlocks] = useState([
    { id: 'b1', name: 'Intro Hook', duration: '0:05', status: 'Optimal' },
    { id: 'b2', name: 'Core Narrative', duration: '1:10', status: 'Optimal' },
    { id: 'b3', name: 'Dynamic Climax', duration: '0:30', status: 'Needs VFX Previs' },
    { id: 'b4', name: 'Outro CTA', duration: '0:15', status: 'Optimal' },
  ]);
  const [boosterEnabled, setBoosterEnabled] = useState(false);

  const toggleStatus = (id: string) => {
    setBlocks(prev => prev.map(block => {
      if (block.id === id) {
        return {
          ...block,
          status: block.status === 'Optimal' ? 'Needs VFX Previs' : 'Optimal'
        };
      }
      return block;
    }));
  };

  const score = boosterEnabled ? 98 : 74;

  return (
    <div className="flex flex-col gap-4 text-left">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-gray-400 font-mono">Assembly Timeline Slots</span>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-mono text-gray-500">Structure Score:</span>
          <span className={`text-xs font-mono font-black ${score > 90 ? 'text-emerald-400' : 'text-amber-400'}`}>{score}%</span>
        </div>
      </div>

      {/* Assembly Drag-reorder mockup slots */}
      <div className="flex flex-col gap-2">
        {blocks.map((block, idx) => (
          <div 
            key={block.id}
            onClick={() => toggleStatus(block.id)}
            className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 cursor-pointer transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-gray-500">0{idx + 1}</span>
              <div>
                <span className="text-xs font-bold text-white block">{block.name}</span>
                <span className="text-[9px] font-mono text-gray-500">{block.duration} duration</span>
              </div>
            </div>
            <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${
              block.status === 'Optimal' 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse'
            }`}>
              {block.status}
            </span>
          </div>
        ))}
      </div>

      {/* Retention Booster Tool */}
      <div className="p-3 bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
            <Sparkles className="w-4.5 h-4.5" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block">Insert Visual Pre-vis Overlay</span>
            <span className="text-[10px] text-gray-500 block">Bridge rough cut transitions with storyboards</span>
          </div>
        </div>
        <button
          onClick={() => setBoosterEnabled(!boosterEnabled)}
          className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all ${
            boosterEnabled 
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          {boosterEnabled ? "BOOSTED" : "APPLY"}
        </button>
      </div>
    </div>
  );
}

/* --- 03. The Fine Edit & Pace Mastery --- */
function FineEditWidget() {
  const [gapsTrimmed, setGapsTrimmed] = useState(false);
  const [isScrubbing, setIsScrubbing] = useState(false);

  const triggerTrim = () => {
    setIsScrubbing(true);
    setTimeout(() => {
      setGapsTrimmed(true);
      setIsScrubbing(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col gap-4 text-left">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-gray-400 font-mono font-sans">Micro-Gap Trim Deck</span>
        <span className="text-xs font-mono font-bold text-blue-400">Pacing Ratio: {gapsTrimmed ? "99.2%" : "72.4%"}</span>
      </div>

      {/* Simulated timeline tracks */}
      <div className="p-4 bg-black/40 rounded-xl border border-white/5 flex flex-col gap-3 relative overflow-hidden">
        {/* Playhead line overlay */}
        <motion.div 
          className="absolute top-0 bottom-0 w-[1.5px] bg-red-500 z-10 shadow-[0_0_8px_red]"
          animate={isScrubbing ? { left: ["5%", "95%"] } : { left: "15%" }}
          transition={{ repeat: isScrubbing ? Infinity : 0, duration: 1.2, ease: "linear" }}
        />

        {/* Track 1: A-ROLL */}
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-mono text-gray-500 w-10">V1 A_Roll</span>
          <div className="flex-grow flex gap-1 h-6">
            <div className="bg-emerald-500/30 border border-emerald-500/40 rounded flex-grow flex items-center justify-center text-[8px] font-mono font-bold text-white">Clip_01</div>
            {/* Trimmed Gap */}
            <AnimatePresence>
              {!gapsTrimmed && (
                <motion.div 
                  exit={{ width: 0, opacity: 0 }}
                  className="w-12 bg-red-500/20 border border-red-500/40 rounded flex items-center justify-center text-[7px] font-mono font-bold text-red-400 animate-pulse shrink-0"
                >
                  SILENCE
                </motion.div>
              )}
            </AnimatePresence>
            <div className="bg-emerald-500/30 border border-emerald-500/40 rounded flex-grow flex items-center justify-center text-[8px] font-mono font-bold text-white">Clip_02</div>
          </div>
        </div>

        {/* Track 2: AUDIO J-CUT */}
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-mono text-gray-500 w-10">A1 Audio</span>
          <div className="flex-grow flex gap-1 h-5">
            <div className="bg-blue-500/20 border border-blue-500/30 rounded flex-grow text-[7px] font-mono flex items-center px-1.5 text-blue-300">Dialogue A</div>
            <div className="bg-blue-500/20 border border-blue-500/30 rounded w-16 text-[7px] font-mono flex items-center px-1.5 text-blue-300">J-Cut Bridge</div>
            <div className="bg-blue-500/20 border border-blue-500/30 rounded flex-grow text-[7px] font-mono flex items-center px-1.5 text-blue-300">Dialogue B</div>
          </div>
        </div>
      </div>

      {/* Timeline Controls */}
      <div className="flex gap-2">
        <button
          disabled={isScrubbing || gapsTrimmed}
          onClick={triggerTrim}
          className={`flex-grow py-2.5 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 border transition-all ${
            gapsTrimmed
              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 cursor-not-allowed'
              : 'bg-netflix-red border-netflix-red/20 text-white hover:bg-red-600 shadow-lg shadow-netflix-red/10'
          }`}
        >
          {isScrubbing ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              Surgical Trimming...
            </>
          ) : gapsTrimmed ? (
            <>
              <Check className="w-3.5 h-3.5" />
              4.2s Dead Space Removed
            </>
          ) : (
            <>
              <Scissors className="w-3.5 h-3.5" />
              Trim Silent Dead Space
            </>
          )}
        </button>

        {gapsTrimmed && (
          <button
            onClick={() => setGapsTrimmed(false)}
            className="px-3.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-gray-300 text-xs flex items-center justify-center transition-colors"
            title="Reset simulation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg text-[10px] text-gray-500 font-mono">
        <p className="leading-relaxed">
          <strong className="text-white block mb-0.5">💡 Retention Note</strong>
          Surgical editing uses J/L audio overlaps and frames-match transitions. Trimming pauses and gaps maintains visual velocity and holds viewer tension without fatigue.
        </p>
      </div>
    </div>
  );
}

/* --- 04. Custom Sound Design & Foley --- */
function SoundDesignWidget() {
  const [dialogue, setDialogue] = useState(80);
  const [ambience, setAmbience] = useState(40);
  const [sfx, setSfx] = useState(65);
  const [bassBoost, setBassBoost] = useState(false);

  // Generate SVG waveform path dynamically based on slider values
  const generateWavePath = () => {
    let points = [];
    const width = 320;
    const height = 70;
    const numPoints = 50;
    const midY = height / 2;
    
    for (let i = 0; i <= numPoints; i++) {
      const x = (i / numPoints) * width;
      
      // Combine wave layers
      const sin1 = Math.sin(i * 0.15) * (dialogue * 0.16);
      const sin2 = Math.sin(i * 0.7) * (ambience * 0.08);
      const sin3 = Math.sin(i * 0.35 + (bassBoost ? 1.5 : 0)) * (sfx * 0.14 * (bassBoost ? 1.6 : 1.0));
      
      const totalAmplitude = sin1 + sin2 + sin3;
      // cap inside bounds
      const clampedAmp = Math.max(-height/2 + 5, Math.min(height/2 - 5, totalAmplitude));
      const y = midY + clampedAmp;
      
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')}`;
  };

  return (
    <div className="flex flex-col gap-4 text-left">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-gray-400 font-mono">Atmospheric Waveform Audio Mixer</span>
        <span className="text-[10px] font-mono text-gray-500">Loudness: -14.2 LUFS</span>
      </div>

      {/* Waveform Visualization Screen */}
      <div className={`h-20 rounded-xl bg-black/50 border flex items-center justify-center relative overflow-hidden transition-all ${
        bassBoost ? 'border-red-500/40 shadow-[inset_0_0_15px_rgba(229,9,20,0.15)]' : 'border-white/5'
      }`}>
        <svg className="w-full h-full" viewBox="0 0 320 70">
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E50914" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          {/* Wave line */}
          <path 
            d={generateWavePath()} 
            fill="none" 
            stroke="url(#waveGrad)" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            className="transition-all duration-100"
          />
          {/* Subtle reflection overlay */}
          <path 
            d={generateWavePath()} 
            fill="none" 
            stroke="url(#waveGrad)" 
            strokeWidth="6" 
            strokeLinecap="round"
            opacity="0.15"
            className="blur-[4px] transition-all duration-100"
          />
        </svg>

        {/* Simulated decibel meter stripes */}
        <div className="absolute right-3 top-2 bottom-2 flex flex-col justify-between items-end gap-0.5">
          <div className="w-4 h-1 bg-red-500/80 rounded-sm"></div>
          <div className="w-4 h-1 bg-amber-500/80 rounded-sm"></div>
          <div className="w-4 h-1 bg-emerald-500/80 rounded-sm"></div>
          <div className="w-4 h-1 bg-emerald-500/80 rounded-sm"></div>
        </div>
      </div>

      {/* Sliders Deck */}
      <div className="flex flex-col gap-2 bg-white/[0.01] p-3 rounded-xl border border-white/5">
        <div className="grid grid-cols-3 gap-4">
          {/* Dialogue */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between font-mono text-[9px] text-gray-400">
              <span>Dialogue</span>
              <span className="text-white">{dialogue}%</span>
            </div>
            <input 
              type="range" min="0" max="100" value={dialogue} onChange={(e) => setDialogue(Number(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-netflix-red"
            />
          </div>

          {/* Ambience */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between font-mono text-[9px] text-gray-400">
              <span>Ambience</span>
              <span className="text-white">{ambience}%</span>
            </div>
            <input 
              type="range" min="0" max="100" value={ambience} onChange={(e) => setAmbience(Number(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Foley SFX */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between font-mono text-[9px] text-gray-400">
              <span>Foley SFX</span>
              <span className="text-white">{sfx}%</span>
            </div>
            <input 
              type="range" min="0" max="100" value={sfx} onChange={(e) => setSfx(Number(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Foley Trigger Hooks */}
      <div className="flex gap-2">
        <button 
          onClick={() => setBassBoost(!bassBoost)}
          className={`flex-grow py-2 rounded-lg text-xs font-mono font-bold transition-all border ${
            bassBoost 
              ? 'bg-netflix-red border-netflix-red text-white shadow-lg shadow-netflix-red/20' 
              : 'bg-white/5 hover:bg-white/10 border-white/10 text-gray-300'
          }`}
        >
          {bassBoost ? "BASS-BOOST REVERB ON" : "TOGGLE CINEMATIC SUB-BASS IMPACT"}
        </button>
      </div>
    </div>
  );
}

/* --- 05. Color Grading & LUT-Craft --- */
type LutProfile = 'flat' | 'orange' | 'kodak' | 'cyber';

function ColorGradingWidget() {
  const [selectedLut, setSelectedLut] = useState<LutProfile>('orange');
  const [activeNode, setActiveNode] = useState(2); // 3 nodes

  const luts = [
    { id: 'flat' as LutProfile, label: 'Flat Cinema LOG', css: 'contrast-[65%] brightness-110 saturate-[55%] sepia-[15%]' },
    { id: 'orange' as LutProfile, label: 'Teal & Orange', css: 'contrast-[120%] saturate-[115%] hue-rotate-[15deg] brightness-[95%]' },
    { id: 'kodak' as LutProfile, label: 'Kodak 2383 Warm', css: 'contrast-[110%] saturate-[105%] sepia-[25%] brightness-100' },
    { id: 'cyber' as LutProfile, label: 'Cyberpunk Neon', css: 'contrast-[130%] saturate-[145%] hue-rotate-[-35deg] brightness-[90%]' },
  ];

  const nodes = [
    { num: 1, title: 'Primary Exposure', params: 'Offset: -2%, Lift: +4%' },
    { num: 2, title: 'Look Emulation', params: 'Target: Kodak 2383' },
    { num: 3, title: 'Color Hue Map', params: 'Cyan Offset: 4.5%' },
  ];

  const currentLut = luts.find(l => l.id === selectedLut);

  return (
    <div className="flex flex-col gap-4 text-left">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-gray-400 font-mono">Resolve Color grading engine</span>
        <span className="text-[10px] font-mono text-gray-500">Workspace: ACEScg HDR</span>
      </div>

      {/* Simulated Video grading Screen */}
      <div className="h-28 rounded-xl relative overflow-hidden bg-black border border-white/5 flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1504893524553-ac55fce698be?auto=format&fit=crop&q=80&w=600" 
          alt="Color grading study"
          className={`w-full h-full object-cover transition-all duration-300 ${currentLut?.css}`}
        />
        
        {/* HUD grid overlays */}
        <div className="absolute inset-0 border border-white/10 pointer-events-none flex items-center justify-center">
          <div className="w-[1px] h-full bg-white/5 absolute left-1/3"></div>
          <div className="w-[1px] h-full bg-white/5 absolute left-2/3"></div>
          <div className="h-[1px] w-full bg-white/5 absolute top-1/3"></div>
          <div className="h-[1px] w-full bg-white/5 absolute top-2/3"></div>
        </div>

        {/* Colorist scope simulation */}
        <div className="absolute bottom-2 left-2 bg-black/80 p-1 rounded border border-white/10 flex flex-col gap-0.5 text-[7px] font-mono text-gray-400 select-none">
          <span>R | █▓▒░</span>
          <span>G | ██▒░</span>
          <span>B | █▓▓░</span>
        </div>

        <span className="absolute top-2 right-2 bg-netflix-red text-white text-[8px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded shadow">
          {selectedLut.toUpperCase()}_LUT
        </span>
      </div>

      {/* LUT selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        {luts.map((lut) => (
          <button
            key={lut.id}
            onClick={() => setSelectedLut(lut.id)}
            className={`p-1.5 rounded text-[10px] font-mono font-bold transition-all border ${
              selectedLut === lut.id 
                ? 'bg-netflix-red/25 border-netflix-red text-white shadow' 
                : 'bg-white/5 border-white/5 hover:border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            {lut.id.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Node Trees Block */}
      <div className="p-2.5 bg-white/[0.02] border border-white/5 rounded-lg flex flex-col gap-2">
        <span className="text-[9px] font-mono font-bold text-gray-500 uppercase">DaVinci Node Map</span>
        <div className="flex items-center justify-between gap-1">
          {nodes.map((node) => {
            const isNodeActive = node.num === activeNode;
            return (
              <div 
                key={node.num}
                onClick={() => setActiveNode(node.num)}
                className={`flex-grow p-1.5 rounded border text-left cursor-pointer transition-all ${
                  isNodeActive 
                    ? 'bg-netflix-red/10 border-netflix-red/50 text-white shadow-sm' 
                    : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-1">
                  <span className={`w-3.5 h-3.5 rounded-full text-[8px] font-black flex items-center justify-center font-mono ${
                    isNodeActive ? 'bg-netflix-red text-white' : 'bg-white/10 text-gray-400'
                  }`}>
                    {node.num}
                  </span>
                  <span className="text-[10px] font-bold font-sans truncate">{node.title.split(' ')[0]}</span>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-[10px] font-mono text-gray-400 bg-black/30 px-2 py-1.5 rounded border border-white/5">
          <strong className="text-white">Active Node {activeNode} Params:</strong> {nodes[activeNode-1].params}
        </p>
      </div>
    </div>
  );
}

/* --- 06. Visual FX & Motion Graphics --- */
function VfxWidget() {
  const [points, setPoints] = useState<{ x: number; y: number }[]>([
    { x: 30, y: 40 },
    { x: 70, y: 35 },
    { x: 50, y: 70 },
  ]);
  const [trackingDone, setTrackingDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const addPoint = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPoints(prev => [...prev.slice(-4), { x, y }]); // keep max 5 points for simplicity
    setTrackingDone(false);
  };

  const simulateTracking = () => {
    setTrackingDone(true);
  };

  return (
    <div className="flex flex-col gap-4 text-left">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-gray-400 font-mono">3D Planar Tracker Simulator</span>
        <span className="text-[10px] font-mono text-gray-500">Confidence: 99.8%</span>
      </div>

      {/* Tracker Grid Canvas */}
      <div 
        ref={containerRef}
        onClick={addPoint}
        className="h-28 rounded-xl bg-black border border-white/10 relative overflow-hidden cursor-crosshair flex items-center justify-center group"
      >
        <img 
          src="/src/assets/images/regenerated_image_1783328072828.jpg" 
          alt="VFX planar canvas"
          className="w-full h-full object-cover opacity-60 filter saturate-50 blur-[1px]"
        />

        {/* Dynamic tracking lines */}
        {points.length > 1 && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {points.map((pt, idx) => {
              if (idx === 0) return null;
              const prev = points[idx - 1];
              return (
                <line 
                  key={idx}
                  x1={`${prev.x}%`} y1={`${prev.y}%`}
                  x2={`${pt.x}%`} y2={`${pt.y}%`}
                  stroke={trackingDone ? '#10B981' : '#E50914'}
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                  className={trackingDone ? '' : 'animate-pulse'}
                />
              );
            })}
          </svg>
        )}

        {/* Tracking Node Points */}
        {points.map((pt, idx) => (
          <div 
            key={idx}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
          >
            <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
              trackingDone 
                ? 'border-emerald-500 bg-emerald-500/20 animate-pulse' 
                : 'border-netflix-red bg-netflix-red/20 animate-ping'
            }`} />
            <div className={`absolute inset-0 m-auto w-2.5 h-2.5 rounded-full ${
              trackingDone ? 'bg-emerald-500' : 'bg-netflix-red'
            }`} />
            <span className="absolute left-4 top-1 font-mono text-[8px] font-black text-white px-1 bg-black/80 rounded border border-white/10">
              P{idx+1}
            </span>
          </div>
        ))}

        {/* Informative overlay HUD */}
        <div className="absolute top-2 left-2 bg-black/80 border border-white/10 p-1.5 rounded text-[8px] font-mono text-gray-400 leading-none">
          <span>Click on canvas to add trackers</span>
        </div>
      </div>

      {/* Point coordinates printout */}
      <div className="p-2 bg-white/[0.01] border border-white/5 rounded-lg flex gap-1 overflow-x-auto font-mono text-[8px] text-gray-400">
        {points.length === 0 ? (
          <span>No tracking markers placed yet</span>
        ) : (
          points.map((pt, idx) => (
            <span key={idx} className="bg-white/5 px-2 py-1 rounded border border-white/5 shrink-0">
              P0{idx+1}: [X: {pt.x.toFixed(0)} | Y: {pt.y.toFixed(0)}]
            </span>
          ))
        )}
      </div>

      {/* VFX controls */}
      <div className="flex gap-2">
        <button
          onClick={simulateTracking}
          disabled={points.length === 0}
          className={`flex-grow py-2 rounded-lg text-xs font-mono font-bold border transition-all ${
            trackingDone 
              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
              : 'bg-white/5 hover:bg-white/10 border-white/10 text-white'
          }`}
        >
          {trackingDone ? "✓ PLANAR SOLVING ACCOMPLISHED" : "START POINT-TRACKING SOLVER"}
        </button>

        <button
          onClick={() => { setPoints([]); setTrackingDone(false); }}
          className="px-3 bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400 rounded-lg text-xs"
          title="Clear all"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

/* --- 07. Retention & Drop-Off Optimization --- */
function RetentionWidget() {
  const [solvedIntro, setSolvedIntro] = useState(false);
  const [solvedOutro, setSolvedOutro] = useState(false);

  const watchTimeScore = (solvedIntro ? 15 : 0) + (solvedOutro ? 15 : 0) + 68;

  return (
    <div className="flex flex-col gap-4 text-left">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-gray-400 font-mono">Retention Curve Heatmap</span>
        <span className="text-xs font-mono font-bold text-netflix-red">Expected Watchtime: {watchTimeScore}%</span>
      </div>

      {/* Interactive SVG graph representing retention drop-off */}
      <div className="h-28 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden flex items-center justify-center p-3">
        <svg className="w-full h-full" viewBox="0 0 300 100">
          {/* Grid Lines */}
          <line x1="0" y1="50" x2="300" y2="50" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
          <line x1="100" y1="0" x2="100" y2="100" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="100" stroke="white" strokeOpacity="0.05" strokeWidth="1" />

          {/* Unoptimized curve line */}
          <path 
            d={`M 0,10 L 30,${solvedIntro ? 15 : 45} L 100,${solvedIntro ? 30 : 50} L 180,${solvedOutro ? 35 : 65} L 300,${solvedOutro ? 45 : 75}`} 
            fill="none" 
            stroke={watchTimeScore > 90 ? '#10B981' : '#E50914'} 
            strokeWidth="3"
            className="transition-all duration-500"
          />

          {/* Area under the curve */}
          <path 
            d={`M 0,10 L 30,${solvedIntro ? 15 : 45} L 100,${solvedIntro ? 30 : 50} L 180,${solvedOutro ? 35 : 65} L 300,${solvedOutro ? 45 : 75} L 300,100 L 0,100 Z`} 
            fill={watchTimeScore > 90 ? '#10B981' : '#E50914'} 
            fillOpacity="0.08"
            className="transition-all duration-500"
          />

          {/* Marker highlights */}
          {!solvedIntro && (
            <g>
              <circle cx="30" cy="45" r="4" fill="#F59E0B" className="animate-ping" />
              <circle cx="30" cy="45" r="3.5" fill="#F59E0B" />
            </g>
          )}

          {!solvedOutro && (
            <g>
              <circle cx="180" cy="65" r="4" fill="#F59E0B" className="animate-ping" />
              <circle cx="180" cy="65" r="3.5" fill="#F59E0B" />
            </g>
          )}
        </svg>

        {/* Hazard alert overlays */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <span className="text-[7px] font-mono bg-black/80 px-1 py-0.5 rounded border border-white/5 text-gray-400">
            X-AXIS: RETENTION TIMELINE
          </span>
        </div>
      </div>

      {/* Alerts to fix */}
      <div className="flex flex-col gap-2">
        <div className={`p-2 rounded-lg border flex items-center justify-between transition-all ${
          solvedIntro 
            ? 'bg-emerald-500/5 border-emerald-500/10 text-emerald-400/80' 
            : 'bg-amber-500/5 border-amber-500/10 text-amber-400'
        }`}>
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[10px] font-bold">
              {solvedIntro ? "Intro clip gap trimmed perfectly" : "Intro hook drop-off warning at 0:08"}
            </span>
          </div>
          <button
            onClick={() => setSolvedIntro(!solvedIntro)}
            className={`px-2 py-1 rounded font-mono text-[8px] font-black tracking-wide border transition-all ${
              solvedIntro 
                ? 'bg-white/5 border-white/5 text-gray-400' 
                : 'bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/20 text-amber-400'
            }`}
          >
            {solvedIntro ? "REVERT" : "FIX HOOK"}
          </button>
        </div>

        <div className={`p-2 rounded-lg border flex items-center justify-between transition-all ${
          solvedOutro 
            ? 'bg-emerald-500/5 border-emerald-500/10 text-emerald-400/80' 
            : 'bg-amber-500/5 border-amber-500/10 text-amber-400'
        }`}>
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[10px] font-bold">
              {solvedOutro ? "Loop bridge injected successfully" : "Narrative pause sag warning at 0:45"}
            </span>
          </div>
          <button
            onClick={() => setSolvedOutro(!solvedOutro)}
            className={`px-2 py-1 rounded font-mono text-[8px] font-black tracking-wide border transition-all ${
              solvedOutro 
                ? 'bg-white/5 border-white/5 text-gray-400' 
                : 'bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/20 text-amber-400'
            }`}
          >
            {solvedOutro ? "REVERT" : "FIX SAG"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* --- 08. Theatrical Masters & Multi-Platform QC --- */
function ExportWidget() {
  const [selectedFormat, setSelectedFormat] = useState<'prores' | 'mp4' | 'shorts'>('prores');
  const [renderProgress, setRenderProgress] = useState(0);
  const [isRendering, setIsRendering] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const formats = {
    prores: { name: "ProRes 422 HQ (DCP Cinema)", codec: "ProRes / PCM Surround" },
    mp4: { name: "YouTube H.264 Web-Optimal", codec: "H.264 / AAC stereo" },
    shorts: { name: "9:16 Vertical Smart-Crop", codec: "HEVC / vertical frame" }
  };

  const startRender = () => {
    if (isRendering) return;
    setIsRendering(true);
    setRenderProgress(0);
    setLogs([`[02:05:36] Initializing encoder pipeline...`]);

    const logsArray = [
      `[02:05:37] Multi-threading cores mapping active...`,
      `[02:05:38] Rendering raw graded frame data...`,
      `[02:05:39] Transcoding audio surround tracks...`,
      `[02:05:40] Running color-space gamut limiter...`,
      `[02:05:41] Compiling multi-platform crops...`,
      `[02:05:42] Master render finished. File compiled.`
    ];

    let currentLogIndex = 0;

    intervalRef.current = setInterval(() => {
      setRenderProgress(prev => {
        if (prev >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsRendering(false);
          setLogs(l => [...l, `[02:05:43] Ready! Master export verified: 0 errors.`]);
          return 100;
        }

        // Add periodic logs
        const nextPercent = prev + 10;
        if (nextPercent % 20 === 0 && currentLogIndex < logsArray.length) {
          setLogs(l => [...l, logsArray[currentLogIndex]]);
          currentLogIndex++;
        }

        return nextPercent;
      });
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 text-left">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-gray-400 font-mono">Export Transcoder Deck</span>
        <span className="text-[10px] font-mono text-gray-500">Cores: 24 Threads Active</span>
      </div>

      {/* Profiles */}
      <div className="grid grid-cols-3 gap-2">
        {(Object.keys(formats) as ('prores' | 'mp4' | 'shorts')[]).map((key) => (
          <div
            key={key}
            onClick={() => !isRendering && setSelectedFormat(key)}
            className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
              selectedFormat === key 
                ? 'bg-netflix-red/10 border-netflix-red text-white font-bold' 
                : isRendering 
                ? 'bg-white/[0.01] border-white/5 opacity-50 cursor-not-allowed text-gray-500'
                : 'bg-white/5 border-white/5 hover:border-white/10 text-gray-400'
            }`}
          >
            <div className="text-[10px] font-mono capitalize">{key}</div>
            <div className="text-[7px] text-gray-500 font-mono truncate">{key === 'prores' ? '422 HQ' : key === 'mp4' ? 'H.264' : 'HEVC'}</div>
          </div>
        ))}
      </div>

      {/* Render Output screen / Terminal logs */}
      <div className="p-3 rounded-lg bg-black/60 border border-white/5 h-24 flex flex-col justify-between overflow-hidden">
        {/* Logs */}
        <div className="flex-grow overflow-y-auto font-mono text-[8px] text-gray-400 flex flex-col gap-0.5 select-none">
          {logs.length === 0 ? (
            <span className="text-gray-500 italic">Transcoder idle. Press "START RENDER" below.</span>
          ) : (
            logs.slice(-5).map((log, idx) => (
              <div key={idx} className={log.includes('verified') ? 'text-emerald-400 font-bold' : ''}>
                {log}
              </div>
            ))
          )}
        </div>

        {/* Live Progress Bar */}
        {renderProgress > 0 && (
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-grow h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-netflix-red" style={{ width: `${renderProgress}%` }}></div>
            </div>
            <span className="font-mono text-[9px] text-white font-bold">{renderProgress}%</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <button
        onClick={startRender}
        disabled={isRendering || renderProgress === 100}
        className={`w-full py-2.5 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 border transition-all ${
          isRendering 
            ? 'bg-netflix-red/20 border-netflix-red/20 text-gray-400 cursor-wait' 
            : renderProgress === 100
            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
            : 'bg-netflix-red border-netflix-red/20 text-white hover:bg-red-600 shadow-lg shadow-netflix-red/10'
        }`}
      >
        {isRendering ? (
          <>
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            RENDERING EXPORT COMPILING...
          </>
        ) : renderProgress === 100 ? (
          "✓ RENDERING COMPLETE - DELIVERABLES ZIP PACKED"
        ) : (
          "START MULTI-THREAD RENDERING"
        )}
      </button>
    </div>
  );
}
