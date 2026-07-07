/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Cpu, HardDrive, Layout, Tv, Thermometer, Zap, Layers, Volume2, Sparkles } from 'lucide-react';

interface SpecItem {
  icon: React.ReactNode;
  category: string;
  name: string;
  details: string;
  metricLabel?: string;
  metricValue?: string;
  badge?: string;
  link?: string;
}

export default function PcSpecs() {
  const specs: SpecItem[] = [
    {
      icon: <Cpu className="w-6 h-6 text-netflix-red" />,
      category: "PROCESSOR (CPU)",
      name: "AMD Ryzen 9 7950X",
      details: "16 Cores / 32 Threads, up to 5.7GHz, configured for multi-threaded video encoding & rendering.",
      metricLabel: "Render Speed",
      metricValue: "5.7 GHz",
      badge: "Flagship",
      link: "https://www.amazon.in/AMD-Ryzen-Desktop-Processor-100-100000908WOF/dp/B0BTRH9MNS/ref=pd_lpo_d_sccl_2/522-8350830-0985101?pd_rd_w=PhOYO&content-id=amzn1.sym.e0c8139c-1aa1-443c-af8a-145a0481f27c&pf_rd_p=e0c8139c-1aa1-443c-af8a-145a0481f27c&pf_rd_r=F8WHXM1BXA3FAPD0BZMQ&pd_rd_wg=mQ3bC&pd_rd_r=8e1db9e6-a60d-4d9c-8e53-5a4cda10fc34&pd_rd_i=B0BTRH9MNS&th=1"
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      category: "GRAPHICS CARD (GPU)",
      name: "NVIDIA GeForce RTX 4090 24GB",
      details: "Ada Lovelace architecture with 24GB G6X VRAM. GPU acceleration enabled for DaVinci Resolve & Premiere Pro.",
      metricLabel: "VRAM Bandwidth",
      metricValue: "1,008 GB/s",
      badge: "Realtime 8K",
      link: "https://www.nvidia.com/en-in/geforce/graphics-cards/40-series/rtx-4090/"
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      category: "SYSTEM MEMORY (RAM)",
      name: "64GB DDR5 G.Skill Trident",
      details: "Dual-channel 6000MHz CL30. Prevents caching bottlenecks on multi-layered timeline composites.",
      metricLabel: "Capacity",
      metricValue: "64 GB",
      badge: "High-Speed",
      link: "https://www.amazon.in/G-Skill-Trident-CL30-40-40-96-Channel-Desktop/dp/B0B2X25ZR6?th=1"
    },
    {
      icon: <HardDrive className="w-6 h-6 text-emerald-400" />,
      category: "STORAGE ARCHITECTURE",
      name: "4TB Sabrent Rocket 4 Plus + PCIe RAID",
      details: "Gen 4 NVMe with up to 7500MB/s read. Dedicated 2TB RAID 0 high-velocity scratch disk for raw footage.",
      metricLabel: "Read Velocity",
      metricValue: "7,500 MB/s",
      badge: "Zero-Lag",
      link: "https://www.amazon.in/Sabrent-Internal-Extreme-Performance-SB-RKT4P-4TB/dp/B08VF99PV8?th=1"
    },
    {
      icon: <Tv className="w-6 h-6 text-purple-400" />,
      category: "DISPLAY SUITE",
      name: "ASUS ProArt 32\" 4K HDR + Dual Side Monitors",
      details: "Hardware-calibrated 100% sRGB & 99% DCI-P3 color spectrum panel for pixel-perfect grading precision.",
      metricLabel: "Color Accuracy",
      metricValue: "ΔE < 1",
      badge: "True Color",
      link: "https://www.asus.com/displays-desktops/monitors/proart/proart-display-pa329cv/"
    },
    {
      icon: <Volume2 className="w-6 h-6 text-rose-400" />,
      category: "AUDIO HARDWARE",
      name: "Universal Audio Apollo Twin X Duo",
      details: "Elite-class AD/DA conversion coupled with Adam Audio A7V studio monitors for acoustic mastery.",
      metricLabel: "Sample Depth",
      metricValue: "192 kHz",
      badge: "Studio-Grade",
      link: "https://www.amazon.in/Audient-MKII-High-Performance-Instrument-ScrollControl/dp/B08SBSN88X/ref=pd_sbs_d_sccl_2_1/524-0115802-5299507?pd_rd_w=MlnT2&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=RH3VJ00JZ2JZ886GZPS9&pd_rd_wg=jRQaR&pd_rd_r=41711814-a2d7-4d5a-a97b-e6c6a590fe72&pd_rd_i=B08SBSN88X&th=1"
    }
  ];

  return (
    <div className="py-16 bg-[#0B0B0B] border-t border-white/5 relative overflow-hidden" id="pc-specs-section">
      {/* Decorative light flares */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-netflix-red/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-12 left-12 w-80 h-80 rounded-full bg-blue-500/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 bg-dark-card/40 border border-white/5 rounded-3xl p-6 md:p-10 flex flex-col gap-3 apple-stroke-card">
          <div className="flex items-center gap-2 justify-center">
            <Sparkles className="w-4.5 h-4.5 text-netflix-red animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-netflix-red uppercase">
              STUDIO HARDWARE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight">
            Workstation Specifications
          </h2>
          <p className="text-sm text-gray-400 font-medium">
            Surgical pacing and flawless color manipulation require a powerhouse engine. Here is the custom-built workstation driving every high-retention cinematic render.
          </p>
        </div>

        {/* Specs Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => {
            const CardContent = (
              <>
                {/* Top Row with Icon & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {spec.icon}
                  </div>
                  {spec.badge && (
                    <span className="text-[9px] font-mono font-black tracking-widest text-netflix-red bg-netflix-red/10 border border-netflix-red/20 px-2.5 py-1 rounded-full uppercase">
                      {spec.badge}
                    </span>
                  )}
                </div>

                {/* Specification Meta */}
                <div className="flex-grow">
                  <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block mb-1">
                    {spec.category}
                  </span>
                  <h3 className="text-lg font-display font-black text-white group-hover:text-netflix-red transition-colors duration-300 mb-2">
                    {spec.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed mb-6">
                    {spec.details}
                  </p>
                </div>

                {/* Performance Indicator Bottom Tag */}
                {spec.metricLabel && (
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-500 uppercase tracking-wider font-bold text-[9px]">{spec.metricLabel}</span>
                    <span className="text-white font-black">{spec.metricValue}</span>
                  </div>
                )}
              </>
            );

            if (spec.link) {
              return (
                <motion.a
                  key={spec.name}
                  href={spec.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5, borderColor: 'rgba(255, 255, 255, 0.15)' }}
                  className="bg-dark-card/50 border border-white/5 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden text-left cursor-pointer apple-stroke-card"
                >
                  {CardContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, borderColor: 'rgba(255, 255, 255, 0.15)' }}
                className="bg-dark-card/50 border border-white/5 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden text-left apple-stroke-card"
              >
                {CardContent}
              </motion.div>
            );
          })}
        </div>

        {/* Real-time system monitoring panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 bg-black/60 border border-white/10 rounded-2xl p-6 text-left flex flex-col md:flex-row items-center justify-between gap-6 apple-stroke-card"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 animate-pulse">
              <Thermometer className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-widest block">SYSTEM HEURISTIC STATS</span>
              <h4 className="text-sm font-display font-bold text-white mt-0.5">Dual-Loop Liquid Thermal Sub-Cooling</h4>
              <p className="text-xs text-gray-500 mt-0.5">CPU stays under 62°C and GPU under 58°C even under sustained 10-bit ProRes master transcodes.</p>
            </div>
          </div>
          <div className="flex gap-4 shrink-0 font-mono text-xs">
            <div className="bg-white/[0.02] border border-white/5 px-4 py-2 rounded-xl text-center min-w-[80px]">
              <span className="text-[9px] text-gray-500 block uppercase">CPU TEMP</span>
              <span className="text-emerald-400 font-black text-sm">42°C</span>
            </div>
            <div className="bg-white/[0.02] border border-white/5 px-4 py-2 rounded-xl text-center min-w-[80px]">
              <span className="text-[9px] text-gray-500 block uppercase">GPU TEMP</span>
              <span className="text-emerald-400 font-black text-sm">38°C</span>
            </div>
            <div className="bg-white/[0.02] border border-white/5 px-4 py-2 rounded-xl text-center min-w-[80px]">
              <span className="text-[9px] text-gray-500 block uppercase">LOAD</span>
              <span className="text-netflix-red font-black text-sm animate-pulse">98.4%</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
