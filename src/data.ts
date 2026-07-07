/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Testimonial, WorkflowStep, Skill } from './types';

export const HERO_SHOWREEL_URL = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054fc2d2c35f955529734e6e6328639&profile_id=165&oauth2_token_id=57447761";

const RAW_PROJECTS: Project[] = [
  // --- FEATURED PROJECTS ---
  {
    id: "feat-1",
    title: "Nicholls 19 Tour",
    category: "featured",
    subcategory: "documentary",
    client: "Nicholls Luxury Living",
    views: "450K",
    duration: "1:35",
    tags: ["Real Estate", "Luxury Tour", "Colorist"],
    thumbnailUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447816/Nicholls_19C_onhllt.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447816/Nicholls_19C_onhllt.mp4",
    description: "An immersive walkthrough of Nicholls luxury residential architecture, emphasizing premium natural lighting and symmetry.",
    role: "Cinematographer & Colorist",
    software: ["DaVinci Resolve Studio", "Premiere Pro", "After Effects"],
    timeline: "5 Days"
  },
  {
    id: "feat-3",
    title: "Fake School Student Experiment",
    category: "featured",
    subcategory: "youtube",
    client: "SAHIL XP",
    views: "2.6M",
    duration: "14:22",
    tags: ["IRL Social", "Pacing Engine", "Retention"],
    thumbnailUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783448812/Buying_illegal_items_as_FAKE_School_Student_2_uu1pop.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783448812/Buying_illegal_items_as_FAKE_School_Student_2_uu1pop.mp4",
    description: "A fast-paced social experiment utilizing high-retention editing techniques and customized tension drops.",
    role: "Lead Editor",
    software: ["Premiere Pro", "After Effects"],
    timeline: "4 Days"
  },
  {
    id: "feat-4",
    title: "Rude Restaurants Infiltration",
    category: "featured",
    subcategory: "youtube",
    client: "SAHIL XP",
    views: "3.1M",
    duration: "12:08",
    tags: ["Comedic Sync", "Dynamic Cuts", "IRL Vlog"],
    thumbnailUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783448911/Going_to_Extreme_Rude_Restaurants_1_msljmk.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783448911/Going_to_Extreme_Rude_Restaurants_1_msljmk.mp4",
    description: "Visually dynamic restaurant vlog detailing comedic interaction loops, synced soundscapes, and tension builders.",
    role: "Senior Editor",
    software: ["Premiere Pro"],
    timeline: "2 Days"
  },
  {
    id: "feat-5",
    title: "Viral Street Food Test",
    category: "featured",
    subcategory: "youtube",
    client: "SAHIL XP",
    views: "1.9M",
    duration: "15:10",
    tags: ["Food Vlog", "Sound Design", "Resolve"],
    thumbnailUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449037/i_tested_viral_street_food_ujxnlr.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449037/i_tested_viral_street_food_ujxnlr.mp4",
    description: "Detailed review of viral street food spots. Edited with close-up foley, fast speed-ramps, and clean color balancing.",
    role: "Sound Designer & Colorist",
    software: ["DaVinci Resolve Studio", "Premiere Pro"],
    timeline: "3 Days"
  },

  // --- CINEMATIC DOCUMENTARIES (LONGFORM) ---
  {
    id: "doc-1",
    title: "Phase -1 Project",
    category: "longform",
    subcategory: "documentary",
    client: "Alpha Ingest",
    views: "1.8M",
    duration: "3:45",
    tags: ["Documentary", "Phase 1", "Corporate Story"],
    thumbnailUrl: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449884/phase_-1_project_crhx3w.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449884/phase_-1_project_crhx3w.mp4",
    description: "A detailed corporate cinematic documentary outlining organizational scaling dynamics and workflows.",
    role: "Lead Editor",
    software: ["Premiere Pro", "After Effects"],
    timeline: "3 Days"
  },
  {
    id: "doc-2",
    title: "May 3rd Style Study",
    category: "longform",
    subcategory: "documentary",
    client: "Vogue Edit",
    views: "920K",
    duration: "2:15",
    tags: ["Fashion", "Style Study", "Visual Rhythm"],
    thumbnailUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449875/may_3_style_gxrg7v.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449875/may_3_style_gxrg7v.mp4",
    description: "High-fashion visual style review detailing current clothing aesthetics and swift pacing transitions.",
    role: "Lead Colorist",
    software: ["DaVinci Resolve Studio", "Premiere Pro"],
    timeline: "2 Days"
  },
  {
    id: "doc-3",
    title: "The Boys Who Made Worlds Fly",
    category: "longform",
    subcategory: "documentary",
    client: "Dreamscape Media",
    views: "2.4M",
    duration: "8:50",
    tags: ["Visual Effects", "VFX Doc", "Creative Journey"],
    thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449873/2-boys_that_made_worlds_fly_jcxcnb.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449873/2-boys_that_made_worlds_fly_jcxcnb.mp4",
    description: "Cinematic story of visual effects artists crafting fluid animations and virtual worldscapes.",
    role: "VFX & Explainer Specialist",
    software: ["After Effects", "Premiere Pro"],
    timeline: "4 Days"
  },
  {
    id: "doc-4",
    title: "Allset Brands Campaign",
    category: "longform",
    subcategory: "documentary",
    client: "Allset Global",
    views: "1.1M",
    duration: "2:10",
    tags: ["Branding", "Campaign Edit", "Color Match"],
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449178/allset_brands_ldlkln.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449178/allset_brands_ldlkln.mp4",
    description: "Commercial feature highlighting brand campaigns, identity pacing, and color palettes.",
    role: "Lead Editor",
    software: ["Premiere Pro", "DaVinci Resolve"],
    timeline: "2 Days"
  },
  {
    id: "doc-5",
    title: "Vox Style Explainer",
    category: "longform",
    subcategory: "documentary",
    client: "Vox Media Study",
    views: "2.2M",
    duration: "5:30",
    tags: ["Vox Style", "Kinetic Maps", "Documentary"],
    thumbnailUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449176/Vox_animation_weyf8b.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449176/Vox_animation_weyf8b.mp4",
    description: "High-retention explanation feature utilizing standard news animation graphics, maps, and soundscapes.",
    role: "Senior Motion Editor",
    software: ["After Effects", "Premiere Pro", "Audition"],
    timeline: "5 Days"
  },

  // --- COLOR GRADING ---
  {
    id: "grading-1",
    title: "RAW Footage Challenge",
    category: "grading",
    client: "Cinematic Grade",
    views: "1.2M",
    duration: "0:43",
    tags: ["RAW Grading", "DaVinci Resolve", "Cinematic"],
    thumbnailUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447926/Which_type_of_raw_footage_should_I_grade_Pick_the_one_you_find_most_challenging_film_colorg_stylsi.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447926/Which_type_of_raw_footage_should_I_grade_Pick_the_one_you_find_most_challenging_film_colorg_stylsi.mp4",
    description: "Finding the most challenging raw film footage formats and grading them to maximize details, skin tones, and rich contrast dynamics.",
    role: "Senior Colorist",
    software: ["DaVinci Resolve Studio"],
    timeline: "2 Days"
  },
  {
    id: "grading-2",
    title: "Kodak Tone Emulation",
    category: "grading",
    client: "Kodak Archives",
    views: "980K",
    duration: "0:30",
    tags: ["Kodak 2383", "Film Print", "Halation"],
    thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447926/tone_kodak_kttaem.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447926/tone_kodak_kttaem.mp4",
    description: "Replicating the classic Kodak analog film look with deep blacks, warm highlights, and subtle edge halation on digital sensors.",
    role: "Lead Colorist",
    software: ["DaVinci Resolve Studio", "Dehancer Pro"],
    timeline: "3 Days"
  },
  {
    id: "grading-3",
    title: "Commercial Color Grading",
    category: "grading",
    client: "Luxury Brands",
    views: "1.5M",
    duration: "0:28",
    tags: ["Commercial", "Brand Vibe", "Clean Look"],
    thumbnailUrl: "https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447927/ads_zb0xxv.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447927/ads_zb0xxv.mp4",
    description: "Precision match-grading across multiple cameras for high-end commercial projects, retaining precise brand colors.",
    role: "Lead Colorist",
    software: ["DaVinci Resolve Studio"],
    timeline: "2 Days"
  },
  {
    id: "grading-4",
    title: "The Train Grade",
    category: "grading",
    client: "Travel Series",
    views: "640K",
    duration: "0:15",
    tags: ["Travel", "Mood Design", "Resolve"],
    thumbnailUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447927/TRAIN_gjvla3.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447927/TRAIN_gjvla3.mp4",
    description: "Stylized, warm-ambient color design documenting high-speed locomotive travel through industrial landscapes.",
    role: "Colorist",
    software: ["DaVinci Resolve Studio"],
    timeline: "1 Day"
  },
  {
    id: "grading-5",
    title: "Before vs After Showcase",
    category: "grading",
    client: "Colorist Breakdown",
    views: "2.4M",
    duration: "0:54",
    tags: ["Before/After", "LUT Craft", "Log Footage"],
    thumbnailUrl: "https://images.unsplash.com/photo-1504893524553-ac55fce698be?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447927/Before_-_After_color_grading._wb7mxr.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447927/Before_-_After_color_grading._wb7mxr.mp4",
    description: "Watch flat camera Log RAW footage transform into dramatic, polished cinematic masters with a side-by-side split screen.",
    role: "Senior Colorist",
    software: ["DaVinci Resolve Studio"],
    timeline: "3 Days"
  },
  {
    id: "grading-6",
    title: "Night Neon Shop",
    category: "grading",
    client: "Urban Vibe",
    views: "850K",
    duration: "0:22",
    tags: ["Neon Lights", "Night Grade", "Cyan/Orange"],
    thumbnailUrl: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447928/shop_vznukl.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447928/shop_vznukl.mp4",
    description: "Enhancing dark night values and balancing ambient neon sign reflection hues for an atmospheric metropolitan scene.",
    role: "Lead Colorist",
    software: ["DaVinci Resolve Studio"],
    timeline: "2 Days"
  },
  {
    id: "grading-7",
    title: "Metropolis Street Grade",
    category: "grading",
    client: "Street Cinematic",
    views: "1.1M",
    duration: "0:19",
    tags: ["Street Life", "Contrast", "City Glow"],
    thumbnailUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447929/my_city_y7p6qz.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783447929/my_city_y7p6qz.mp4",
    description: "Cinematic color grades detailing lively city street highlights and concrete textures using contrast curves and custom tone wheels.",
    role: "Senior Colorist",
    software: ["DaVinci Resolve Studio"],
    timeline: "1 Day"
  },
  // --- FREESTYLE EDITS ---
  {
    id: "free-1",
    title: "Defender Project II",
    category: "freestyle",
    client: "Land Rover",
    views: "2.4M",
    duration: "0:30",
    tags: ["Offroad", "Automotive", "Resolve"],
    thumbnailUrl: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449435/DEFENDER_PROJECT_2_nakixz.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449435/DEFENDER_PROJECT_2_nakixz.mp4",
    description: "High-fidelity offroad cinematic tracking shots of the Land Rover Defender traversing extreme terrain.",
    role: "Lead Editor",
    software: ["Premiere Pro", "DaVinci Resolve Studio"],
    timeline: "2 Days"
  },
  {
    id: "free-2",
    title: "BMW M Power",
    category: "freestyle",
    client: "BMW Germany",
    views: "3.8M",
    duration: "0:25",
    tags: ["M Power", "Drift", "VFX"],
    thumbnailUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449435/BMW_fw0pjj.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449435/BMW_fw0pjj.mp4",
    description: "A high-intensity sound-synced edit highlighting BMW M-series agility and track performance.",
    role: "Sync & VFX Editor",
    software: ["Premiere Pro", "After Effects"],
    timeline: "3 Days"
  },
  {
    id: "free-3",
    title: "Urban Defender",
    category: "freestyle",
    client: "Land Rover UK",
    views: "1.8M",
    duration: "0:22",
    tags: ["Urban Adventure", "Pacing", "Sound FX"],
    thumbnailUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449435/defender_vqhcfw.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449435/defender_vqhcfw.mp4",
    description: "Slick transition-heavy street edit showcasing the Defender's luxury urban design profile.",
    role: "Lead Editor",
    software: ["Premiere Pro"],
    timeline: "2 Days"
  },
  {
    id: "free-4",
    title: "Car Community Meet",
    category: "freestyle",
    client: "Auto Syndicate",
    views: "2.9M",
    duration: "0:32",
    tags: ["Car Meet", "Community", "Night Life"],
    thumbnailUrl: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449434/car_community__uxi45s.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449434/car_community__uxi45s.mp4",
    description: "Capturing the visual rhythm of underground car meets, featuring neon lighting and exhaust backfires.",
    role: "VFX & Sound Editor",
    software: ["After Effects", "Premiere Pro"],
    timeline: "3 Days"
  },
  {
    id: "free-5",
    title: "Yamaha R7 Velocity",
    category: "freestyle",
    client: "Yamaha Motors",
    views: "4.1M",
    duration: "0:20",
    tags: ["Yamaha R7", "Superbike", "Speed Ramp"],
    thumbnailUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449433/r7_xsw2qr.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449433/r7_xsw2qr.mp4",
    description: "A superbike velocity study with extreme speed ramps, wind foley, and heavy screen shake.",
    role: "Sound Designer & Editor",
    software: ["Premiere Pro", "Audition"],
    timeline: "2 Days"
  },
  {
    id: "free-6",
    title: "BMW M4 CS Showcase",
    category: "freestyle",
    client: "M Performance",
    views: "3.5M",
    duration: "0:28",
    tags: ["M4 CS", "Racetrack", "Color Match"],
    thumbnailUrl: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449432/BMW_M4_CS_yecvqv.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449432/BMW_M4_CS_yecvqv.mp4",
    description: "Cinematic color matching and pacing detailing the high-performance BMW M4 CS in motion.",
    role: "Senior Editor",
    software: ["Premiere Pro", "After Effects"],
    timeline: "2 Days"
  },
  // --- SHORT FORM / VERTICAL REELS ---
  {
    id: "short-1",
    title: "ThriveTrail Strategies",
    category: "shortform",
    client: "ThriveTrail",
    views: "1.4M",
    duration: "0:30",
    tags: ["Business", "Pacing", "Strategies"],
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449574/ThriveTrail_Strategies_xqolar.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449574/ThriveTrail_Strategies_xqolar.mp4",
    description: "Growth strategies visual flow optimized for maximum hook retention and visual transitions.",
    role: "Lead Editor",
    software: ["Premiere Pro", "After Effects"],
    timeline: "1 Day"
  },
  {
    id: "short-2",
    title: "The Vision Virtuosos",
    category: "shortform",
    client: "Vision Virtuosos",
    views: "2.1M",
    duration: "0:28",
    tags: ["VFX", "Typography", "Vision"],
    thumbnailUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449572/The_Vision_Virtuosos_tyogzn.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449572/The_Vision_Virtuosos_tyogzn.mp4",
    description: "Highly dynamic kinetic typography and custom visuals mapping creative mindset structures.",
    role: "Visual Designer",
    software: ["After Effects", "Premiere Pro"],
    timeline: "2 Days"
  },
  {
    id: "short-3",
    title: "The Elite Marketers",
    category: "shortform",
    client: "Elite Marketers",
    views: "3.2M",
    duration: "0:35",
    tags: ["Marketing", "Retention", "Psychology"],
    thumbnailUrl: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449573/The_Elite_Marketers_xjzme0.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449573/The_Elite_Marketers_xjzme0.mp4",
    description: "A fast-paced guide to high-converting short-form loops and psychological viewer retention cues.",
    role: "Retention Specialist",
    software: ["Premiere Pro"],
    timeline: "1 Day"
  },
  {
    id: "short-4",
    title: "BuzzBurst Media",
    category: "shortform",
    client: "BuzzBurst",
    views: "850K",
    duration: "0:19",
    tags: ["Social Media", "Pacing", "Engagement"],
    thumbnailUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449574/BuzzBurst_Media_knyjbd.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449574/BuzzBurst_Media_knyjbd.mp4",
    description: "High-impact short-form edits showcasing social media growth algorithms and visual hooks.",
    role: "Lead Editor",
    software: ["Premiere Pro", "After Effects"],
    timeline: "1 Day"
  },
  {
    id: "short-5",
    title: "The Branding Battalion",
    category: "shortform",
    client: "Branding Battalion",
    views: "1.9M",
    duration: "0:24",
    tags: ["Branding", "Logo Anim", "Identity"],
    thumbnailUrl: "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449571/The_Branding_Battalion_lbpmy7.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449571/The_Branding_Battalion_lbpmy7.mp4",
    description: "Bold identity branding and kinetic logo reveal sequences optimized for mobile viewing formats.",
    role: "Motion Designer",
    software: ["After Effects"],
    timeline: "2 Days"
  },

  // --- MOTION GRAPHICS (MOTION) ---
  {
    id: "motion-1",
    title: "Creative Vector Pin Animation",
    category: "motion",
    client: "Vector Lab",
    views: "410K",
    duration: "0:45",
    tags: ["Vector Motion", "Pin Animation", "2D Keyframing"],
    thumbnailUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449178/UGluOjQ3NTk3NDI1NDM4NzA2NjMzMQ_uhgsi7.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449178/UGluOjQ3NTk3NDI1NDM4NzA2NjMzMQ_uhgsi7.mp4",
    description: "Playful vector assets animated with customized bounce curves and fluid keyframe transitions.",
    role: "Lead Animator",
    software: ["After Effects", "Illustrator"],
    timeline: "1 Day"
  },
  {
    id: "motion-2",
    title: "UI AI Interface Overlays",
    category: "motion",
    client: "Tech Innovators",
    views: "820K",
    duration: "1:15",
    tags: ["AI Design", "UI Motion", "Tech Explainer"],
    thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449179/UI_ai_animation_jsshct.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449179/UI_ai_animation_jsshct.mp4",
    description: "Sleek UI layouts detailing futuristic artificial intelligence interfaces and interaction models.",
    role: "Motion Designer",
    software: ["After Effects", "Illustrator"],
    timeline: "2 Days"
  },
  {
    id: "motion-3",
    title: "SaaS Platform Motion Explainer",
    category: "motion",
    client: "SaaSify Inc",
    views: "650K",
    duration: "1:45",
    tags: ["SaaS Explainer", "Vector Motion", "Animation"],
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449179/I_will_saas_explainer_video_saas_video_saas_animation_software_explainer_saas_demo_vnebqp.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449179/I_will_saas_explainer_video_saas_video_saas_animation_software_explainer_saas_demo_vnebqp.mp4",
    description: "A detailed SaaS platform walkthrough utilizing clean vector animations, flow charts, and text tracking.",
    role: "VFX & Explainer Specialist",
    software: ["After Effects", "Premiere Pro"],
    timeline: "3 Days"
  },
  {
    id: "motion-4",
    title: "Allset Brands Visual Campaign",
    category: "motion",
    client: "Allset Global",
    views: "1.1M",
    duration: "2:10",
    tags: ["Branding", "Campaign Edit", "Color Match"],
    thumbnailUrl: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449178/allset_brands_ldlkln.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449178/allset_brands_ldlkln.mp4",
    description: "Commercial campaign visual highlighting brand assets, kinetic typography, and corporate style.",
    role: "Lead Designer",
    software: ["After Effects", "DaVinci Resolve"],
    timeline: "2 Days"
  },
  {
    id: "motion-5",
    title: "Master Mack Kinetic Reveal",
    category: "motion",
    client: "Mack Studios",
    views: "780K",
    duration: "3:05",
    tags: ["Kinetic Typography", "Reveals", "Logo Animation"],
    thumbnailUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449177/Master_Mack_zvid1p.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449177/Master_Mack_zvid1p.mp4",
    description: "Sleek title sequences, logo reveals, and custom typography tracking templates for Mack Studios.",
    role: "Motion Designer",
    software: ["After Effects", "Premiere Pro"],
    timeline: "4 Days"
  },
  {
    id: "motion-6",
    title: "iluli Knowledge Infographics",
    category: "motion",
    client: "iluli Education",
    views: "1.4M",
    duration: "4:15",
    tags: ["Infographics", "Animation", "Explainers"],
    thumbnailUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449177/iluli_Personal_Knowledge_Management_g0v8rh.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449177/iluli_Personal_Knowledge_Management_g0v8rh.mp4",
    description: "A visual deep-dive detailing knowledge management structures through kinetic infographics.",
    role: "Lead Animator & Editor",
    software: ["After Effects", "Illustrator"],
    timeline: "3 Days"
  },
  {
    id: "motion-7",
    title: "Vox Style Explainer Motion",
    category: "motion",
    client: "Vox Media Study",
    views: "2.2M",
    duration: "5:30",
    tags: ["Vox Style", "Kinetic Maps", "Documentary"],
    thumbnailUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449176/Vox_animation_weyf8b.mp4",
    fullVideoUrl: "https://res.cloudinary.com/xcwaqcmp/video/upload/v1783449176/Vox_animation_weyf8b.mp4",
    description: "High-retention explanation feature utilizing standard news animation graphics, maps, and soundscapes.",
    role: "Senior Motion Editor",
    software: ["After Effects", "Premiere Pro", "Audition"],
    timeline: "5 Days"
  }
];

export const PROJECTS: Project[] = RAW_PROJECTS.map(project => {
  if (project.videoUrl && project.videoUrl.includes('cloudinary.com')) {
    // Replace resource type 'video' with 'image' and add start offset transformation (so_1) to extract 1s frame
    let thumb = project.videoUrl.replace('/video/upload/', '/video/upload/f_auto,q_auto,so_2/');
    thumb = thumb.replace(/\.mp4$/, '.jpg');
    return {
      ...project,
      thumbnailUrl: thumb
    };
  }
  return project;
});

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
