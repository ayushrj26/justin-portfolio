/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Testimonial, WorkflowStep, Skill } from './types';

export const HERO_SHOWREEL_URL = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fc2d2c35f955529734e6e6328639&profile_id=165&oauth2_token_id=57447761";

export const PROJECTS: Project[] = [
  // --- FEATURED PROJECTS ---
  {
    id: "feat-realestate-1",
    title: "Nicholls 19",
    category: "featured",
    client: "Nicholls Luxury Living",
    views: "278k views",
    duration: "1:35",
    tags: ["Real Estate", "Luxury Tour", "Colorist"],
    thumbnailUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fc2d2c35f955529734e6e6328639&profile_id=165&oauth2_token_id=57447761",
    fullVideoUrl: "https://player.vimeo.com/external/371433846.hd.mp4?s=236da2f3c054fc2d2c35f955529734e6e6328639&profile_id=174&oauth2_token_id=57447761",
    description: "An immersive, high-end real estate walkthrough of a multi-million dollar luxury residence. Highlighting the architectural symmetry, pristine outdoor swimming pool, Scandinavian wood sauna, and expansive white kitchen. Seamlessly paced with modern transitions and premium interior lighting focus.",
    role: "Cinematographer & Colorist",
    software: ["DaVinci Resolve Studio", "Premiere Pro", "After Effects"],
    timeline: "5 Days",
    btsImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=600"
    ]
  },

  // --- COLOR GRADING ---
  {
    id: "grading-1",
    title: "The Icelandic Desolation",
    category: "grading",
    client: "Arri Cinematic Series",
    views: "7M",
    duration: "LUT Showcase",
    tags: ["Color Grading", "Arri LogC", "Before/After"],
    thumbnailUrl: "https://images.unsplash.com/photo-1504893524553-ac55fce698be?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/external/517602126.sd.mp4?s=d0277dfa8bc8f7318ff2f5f7f34c676c5f7200eb&profile_id=165&oauth2_token_id=57447761",
    fullVideoUrl: "https://player.vimeo.com/external/517602126.hd.mp4?s=789f2138e3e4a30a1122a10e5461c33c3e2dc&profile_id=174&oauth2_token_id=57447761",
    description: "Transforming flat, low-contrast Arri LogC RAW footage into a breathtaking, cold, epic cinematic Icelandic landscape. Featuring advanced skin tone protection, shadow-wheel cyan offset, and rich analog grain emulation.",
    role: "Senior Colorist",
    software: ["DaVinci Resolve Studio", "Dehancer Pro"],
    timeline: "1 Week",
    beforeImage: "https://images.unsplash.com/photo-1504893524553-ac55fce698be?auto=format&fit=crop&q=30&w=800&blur=10", // represents flat RAW look
    afterImage: "https://images.unsplash.com/photo-1504893524553-ac55fce698be?auto=format&fit=crop&q=80&w=800" // rich graded look
  },
  {
    id: "grading-2",
    title: "Golden Hour Nostalgia",
    category: "grading",
    client: "Kodak Film Archives",
    views: "4.8M",
    duration: "Color Study",
    tags: ["Colorist", "Kodak 2383", "Halation FX"],
    thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fc2d2c35f955529734e6e6328639&profile_id=165&oauth2_token_id=57447761",
    fullVideoUrl: "https://player.vimeo.com/external/371433846.hd.mp4?s=236da2f3c054fc2d2c35f955529734e6e6328639&profile_id=165&oauth2_token_id=57447761",
    description: "Emulating the rich Kodak 2383 print film look on modern digital cinema cameras. Focuses on warm highlights, deep ink-like blacks, and subtle red-channel halation around high-contrast edges.",
    role: "Lead Colorist",
    software: ["DaVinci Resolve Studio", "FilmConvert Nitrate"],
    timeline: "4 Days",
    beforeImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=20&w=800&blur=8",
    afterImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
  },
  // --- FREESTYLE EDITS ---
  {
    id: "free-1",
    title: "Arcade Claw Overdrive",
    category: "freestyle",
    client: "Arcade Syndicate",
    views: "2.4M",
    duration: "0:35",
    tags: ["Claw Machine", "Speed Ramp", "Rhythm Sync"],
    thumbnailUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://filebin.net/dz177fctdg8a4rb6/Person_operating_claw_machine_prize_202606231610_chf3_prob3.mp4",
    fullVideoUrl: "https://filebin.net/dz177fctdg8a4rb6/Person_operating_claw_machine_prize_202606231610_chf3_prob3.mp4",
    description: "A highly rhythmic and energetic freestyle edit documenting a perfect claw machine win. Packed with sharp speed ramps, neon motion accents, bass-heavy transitions, and precise time-remapping to highlight the suspenseful prize capture.",
    role: "Sync & VFX Editor",
    software: ["After Effects", "Premiere Pro", "Sapphire Suite"],
    timeline: "2 Days"
  },
  {
    id: "free-2",
    title: "Synthwave Retro Velocity",
    category: "freestyle",
    client: "Nightride FM",
    views: "890K",
    duration: "0:30",
    tags: ["CRT Glitch", "Vintage VHS", "Retro Edit"],
    thumbnailUrl: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/external/554892419.sd.mp4?s=a259c4faeb6b0e8b26f592bf17cfda978f1416eb&profile_id=165&oauth2_token_id=57447761",
    fullVideoUrl: "https://player.vimeo.com/external/554892419.hd.mp4?s=d259c4faeb6b0e8b26f592bf17cfda978f1416eb&profile_id=174&oauth2_token_id=57447761",
    description: "An experimental freestyle VHS glitch edit. Blends heavy analog tape distortion, CRT scanline emulations, retro outrun aesthetics, and neon-drenched chromatic aberration.",
    role: "Creative Editor",
    software: ["Premiere Pro", "After Effects", "Red Giant Universe"],
    timeline: "3 Days"
  },
  {
    id: "free-3",
    title: "Overdrive Drift Cult",
    category: "freestyle",
    client: "Tokyo Underground",
    views: "2.1M",
    duration: "0:50",
    tags: ["Beat Drop", "Shake FX", "Flow Editing"],
    thumbnailUrl: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/external/455938183.sd.mp4?s=69668d2b7e19273c52e41ef4195156a0fc6bc479&profile_id=165&oauth2_token_id=57447761",
    fullVideoUrl: "https://player.vimeo.com/external/455938183.hd.mp4?s=784a92305ca75be4198083a2fb04f4699f0e340a&profile_id=174&oauth2_token_id=57447761",
    description: "A car culture freestyle edit featuring aggressive speed ramping, heavy screen shake, multi-layered flash transitions, and deep audio spatialization for exhaust backfires.",
    role: "Lead Editor",
    software: ["Premiere Pro", "DaVinci Resolve Studio"],
    timeline: "4 Days"
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "wf-1",
    stepNumber: "01",
    title: "Discovery & Narrative Blueprint",
    description: "Reviewing raw footage, identifying key story beats, structuring the narrative blueprint, and aligning on music rhythm and emotional targets.",
    details: ["Script alignment", "Rhythm analysis", "Footage triage & logging", "Vibe board matching"]
  },
  {
    id: "wf-2",
    stepNumber: "02",
    title: "Assembly & Storyboarding",
    description: "Creating the rough assembly cut to lock down pacing and overall structure. Building dynamic storyboards for heavy VFX or custom graphic sequences.",
    details: ["Rough cut generation", "Pacing experiments", "VFX previs storyboard", "Audio beat marking"]
  },
  {
    id: "wf-3",
    stepNumber: "03",
    title: "The Fine Edit & Pace Mastery",
    description: "Surgical pacing modifications. Implementing advanced transitions, seamless graphic matches, and invisible speed ramps to maximize visual engagement.",
    details: ["J-Cuts & L-Cuts tuning", "Invisible speed ramps", "Frame-match transitions", "Viewer retention analysis"]
  },
  {
    id: "wf-4",
    stepNumber: "04",
    title: "Custom Sound Design & Foley",
    description: "Bringing the visuals to life with custom atmospheric soundscapes, sub-bass impacts, swishes, environmental foley, and pristine dialogue cleanup.",
    details: ["Sub-impact synching", "Dialogue isolation & EQ", "Ambient atmospheric foley", "Stereo-field panning"]
  },
  {
    id: "wf-5",
    stepNumber: "05",
    title: "Color Grading & LUT-Craft",
    description: "Advanced color correction followed by theatrical look-design. Using industry-grade DaVinci Resolve nodes to shape shadow moods, highlight details, and skin-tone perfection.",
    details: ["RAW color workspace correction", "Kodak/Fuji film emulation", "Theatrical color contrast", "HDR/SDR deliverables mapping"]
  },
  {
    id: "wf-6",
    stepNumber: "06",
    title: "Visual FX & Motion Graphics",
    description: "Integrating high-end vector graphics, tracking markers, 3D title texturing, fluid simulations, and kinetic typography highlights.",
    details: ["3D planar tracking", "Dynamic title textures", "Fluid/smoke simulations", "Kinetic text accents"]
  },
  {
    id: "wf-7",
    stepNumber: "07",
    title: "Retention & Drop-Off Optimization",
    description: "Conducting second-by-second analytics reviews. Removing micro-dead space, amplifying peak moments, and placing psychological loops to guarantee retention.",
    details: ["Micro-gap elimination", "Visual curve adjustments", "Psychological loop points", "High-retention pacing audit"]
  },
  {
    id: "wf-8",
    stepNumber: "08",
    title: "Theatrical Masters & Multi-Platform QC",
    description: "Rendering high-bitrate master formats tailored for theater screens, YouTube compression algorithms, and vertical mobile platforms with absolute precision.",
    details: ["ProRes / DNxHR masters", "Platform-specific compression", "Vertical safe-zone cropping", "Multi-version QC checks"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Sahil Rana",
    role: "Content Creator",
    company: "27M+ subscribers on youtube",
    avatarUrl: "https://images.unsplash.com/photo-1620122303020-43ec4b6cf7f8?auto=format&fit=crop&q=80&w=300&h=300",
    quote: "I've worked with him for 2 years. Finding something to complain about is honestly harder than the edit itself. The cuts are clean, the flow is effortless, and he somehow makes every video feel expensive.",
    rating: 5,
    videoReviewUrl: "https://player.vimeo.com/external/455938183.sd.mp4?s=69668d2b7e19273c52e41ef4195156a0fc6bc479&profile_id=165&oauth2_token_id=57447761"
  },
  {
    id: "t-2",
    name: "Ayush Bhandari",
    role: "Content Creator",
    company: "6M+ subscribers on YouTube",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300",
    quote: "Working with him has been one of the easiest parts of my content process. His editing instincts are spot on, transitions feel natural, and every cut serves the story. After two years, I trust him enough to deliver without micromanaging—and that's not something I say about many editors.",
    rating: 5,
    videoReviewUrl: "https://player.vimeo.com/external/494252666.sd.mp4?s=cf95c73fb52e03075249f0322c366e6bcbc00cf6&profile_id=165&oauth2_token_id=57447761"
  },
  {
    id: "t-3",
    name: "Dr. Graham Vance",
    role: "Founder / Host",
    company: "Vance Media Group",
    avatarUrl: "https://i.ibb.co/m5yC9NS4/Picsart-26-06-12-20-42-20-724-jpg.jpg",
    quote: "Editing 45-minute raw lectures into hyper-engaging 15-minute stories with sleek motion design is an art. They do it better than anyone. They generated massive growth and audience retention on our channel last year.",
    rating: 5,
    videoReviewUrl: "https://player.vimeo.com/external/435674703.sd.mp4?s=74b971a9e3bc83b14edda789b9f71c13d8000490&profile_id=165&oauth2_token_id=57447761"
  }
];

export const SKILLS: Skill[] = [
  { name: "Premiere Pro", percentage: 86, iconName: "Premiere", glowColor: "from-blue-600 to-indigo-500" },
  { name: "After Effects", percentage: 67, iconName: "AfterEffects", glowColor: "from-purple-600 to-fuchsia-500" },
  { name: "DaVinci Resolve", percentage: 44, iconName: "DaVinci", glowColor: "from-yellow-500 to-red-500" },
  { name: "Blender 3D", percentage: 27, iconName: "Blender", glowColor: "from-orange-600 to-red-500" },
  { name: "Higgsfield AI", percentage: 87, iconName: "Higgsfield", glowColor: "from-pink-500 to-netflix-red" }
];

export const STATS = [
  { value: "200+", label: "Blockbuster Projects", glow: "rgba(79, 139, 255, 0.4)" },
  { value: "50+", label: "Premium Brands", glow: "rgba(139, 92, 246, 0.4)" },
  { value: "5+", label: "Years Experience", glow: "rgba(16, 185, 129, 0.4)" }
];

export const BRANDS = [
  { name: "SAHIL XP", logo: "SAHIL XP" },
  { name: "AYUSH BHANDARI", logo: "AYUSH BHANDARI" },
  { name: "ADOBE", logo: "ADOBE" },
  { name: "SHOOTWITH-ARYAN", logo: "SHOOTWITH-ARYAN" },
  { name: "SIGMA", logo: "SIGMA" }
];
