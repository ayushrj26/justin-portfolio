/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, Award, Sparkles, Sliders } from 'lucide-react';

// Data imports
import { PROJECTS, TESTIMONIALS } from './data';
import { Project, Testimonial } from './types';

// Component imports
import Navbar, { ActiveViewType } from './components/Navbar';
import Hero from './components/Hero';
import NetflixRow from './components/NetflixRow';
import ProjectModal from './components/ProjectModal';
import ShowreelModal from './components/ShowreelModal';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Workflow from './components/Workflow';
import SkillsGrid from './components/SkillsGrid';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import PortfolioPage from './components/PortfolioPage';
import PcSpecs from './components/PcSpecs';
import { saveProject, getProjects, deleteProject } from './utils/db';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveViewType>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [activeShowreelUrl, setActiveShowreelUrl] = useState<string>('');
  const [activeShowreelTitle, setActiveShowreelTitle] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Real-time client-side uploaded video projects database
  const [uploadedProjects, setUploadedProjects] = useState<Project[]>([]);
  const [removedProjectIds, setRemovedProjectIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('removed_project_ids');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadingCategory, setUploadingCategory] = useState<Project['category'] | null>(null);
  const [uploadingSubcategory, setUploadingSubcategory] = useState<string | null>(null);

  // Restore uploaded projects from IndexedDB on startup
  useEffect(() => {
    let active = true;
    const objectUrlsToCleanup: string[] = [];

    const loadPersistedProjects = async () => {
      try {
        const persisted = await getProjects();
        if (!active) return;

        const loaded = persisted.map((p) => {
          const objectUrl = URL.createObjectURL(p.videoBlob);
          objectUrlsToCleanup.push(objectUrl);
          return {
            id: p.id,
            title: p.title,
            category: p.category as any,
            subcategory: p.subcategory,
            client: p.client,
            views: p.views,
            duration: p.duration,
            tags: p.tags,
            thumbnailUrl: p.thumbnailUrl,
            videoUrl: objectUrl,
            fullVideoUrl: objectUrl,
            description: p.description,
            role: p.role,
            software: p.software,
            timeline: p.timeline,
          };
        });

        setUploadedProjects(loaded);
      } catch (err) {
        console.error("Failed to load persisted projects from IndexedDB:", err);
      }
    };

    loadPersistedProjects();

    return () => {
      active = false;
      objectUrlsToCleanup.forEach((url) => {
        try {
          URL.revokeObjectURL(url);
        } catch {
          // ignore
        }
      });
    };
  }, []);

  // Save removed project IDs to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('removed_project_ids', JSON.stringify(removedProjectIds));
    } catch (err) {
      console.error("Failed to save removed project IDs:", err);
    }
  }, [removedProjectIds]);

  const handleRemoveProject = async (id: string) => {
    setRemovedProjectIds((prev) => [...prev, id]);
    if (id.startsWith('uploaded-')) {
      try {
        await deleteProject(id);
        setUploadedProjects((prev) => prev.filter((p) => p.id !== id));
      } catch (err) {
        console.error("Failed to delete project from IndexedDB:", err);
      }
    }
  };

  // Monitor Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle uploading files and generating true-frame jpeg canvas thumbnails in real-time
  const handleUploadVideo = async (file: File, category: Project['category'] = 'featured', subcategory?: string) => {
    setIsUploading(true);
    setUploadingCategory(category);
    if (subcategory) {
      setUploadingSubcategory(subcategory);
    } else {
      setUploadingSubcategory(null);
    }
    
    // Simulate premium visual encoding process
    await new Promise((resolve) => setTimeout(resolve, 1200));

    let thumbnail = "https://images.unsplash.com/photo-1513829096999-4978602297a7?auto=format&fit=crop&q=80&w=600";
    try {
      thumbnail = await new Promise<string>((resolve) => {
        const video = document.createElement('video');
        video.src = URL.createObjectURL(file);
        video.currentTime = 1;
        video.muted = true;
        video.playsInline = true;
        video.onloadeddata = () => {
          setTimeout(() => {
            const canvas = document.createElement('canvas');
            // Dynamically set canvas dimensions based on video's natural dimensions to prevent stretching
            const videoWidth = video.videoWidth || 640;
            const videoHeight = video.videoHeight || 360;
            
            // Maintain a max dimension of 640 for performance while retaining precise aspect ratio
            const maxDimension = 640;
            if (videoWidth > videoHeight) {
              canvas.width = Math.min(videoWidth, maxDimension);
              canvas.height = Math.round((canvas.width / videoWidth) * videoHeight);
            } else {
              canvas.height = Math.min(videoHeight, maxDimension);
              canvas.width = Math.round((canvas.height / videoHeight) * videoWidth);
            }

            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
              try {
                resolve(canvas.toDataURL('image/jpeg'));
              } catch {
                resolve("https://images.unsplash.com/photo-1513829096999-4978602297a7?auto=format&fit=crop&q=80&w=600");
              }
            } else {
              resolve("https://images.unsplash.com/photo-1513829096999-4978602297a7?auto=format&fit=crop&q=80&w=600");
            }
          }, 300);
        };
        video.onerror = () => {
          resolve("https://images.unsplash.com/photo-1513829096999-4978602297a7?auto=format&fit=crop&q=80&w=600");
        };
      });
    } catch {
      // safe fallback
    }

    const projectId = `uploaded-${Date.now()}`;
    const objectUrl = URL.createObjectURL(file);
    
    // Set appropriate tags based on the selected category
    let tags = ["User Video", "Color Graded"];
    if (category === 'shortform' || category === 'freestyle') {
      tags = ["Vertical 9:16", "User Edit", "Pacing"];
    } else if (category === 'motion') {
      tags = ["Motion Design", "3D FX", "Visuals"];
    } else if (category === 'grading') {
      tags = ["Color Grade", "DaVinci Resolve", "LUT"];
    } else if (category === 'longform') {
      tags = ["Docuseries", "Atmospheric", "Editing"];
    }

    const newProject: Project = {
      id: projectId,
      title: file.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " "),
      category: category,
      subcategory: subcategory,
      client: "Local Upload",
      views: "1 View",
      duration: "0:30",
      tags: tags,
      thumbnailUrl: thumbnail,
      videoUrl: objectUrl,
      fullVideoUrl: objectUrl,
      description: `A custom video uploaded directly from your local system. Ready for fully immersive, native client-side playback.`,
      role: "Lead Video Editor & Colorist",
      software: ["Premiere Pro", "DaVinci Resolve Studio", "Dehancer Pro"],
      timeline: "Just now"
    };

    try {
      await saveProject({
        id: newProject.id,
        title: newProject.title,
        category: newProject.category,
        subcategory: newProject.subcategory,
        client: newProject.client,
        views: newProject.views,
        duration: newProject.duration,
        tags: newProject.tags,
        thumbnailUrl: newProject.thumbnailUrl,
        videoBlob: file, // Store the raw File/Blob
        description: newProject.description,
        role: newProject.role,
        software: newProject.software,
        timeline: newProject.timeline,
      });
    } catch (err) {
      console.error("Failed to save project to IndexedDB:", err);
    }

    setUploadedProjects((prev) => [newProject, ...prev]);
    setIsUploading(false);
    setUploadingCategory(null);
    setUploadingSubcategory(null);
    setSelectedProject(newProject);
  };

  // Combine static and custom uploaded projects
  const allProjects = [...uploadedProjects, ...PROJECTS].filter(
    (p) => !removedProjectIds.includes(p.id)
  );

  // Filter projects by category
  const featuredProjects = PROJECTS.filter(p => p.category === 'featured');
  const longFormProjects = PROJECTS.filter(p => p.category === 'longform');
  const shortFormProjects = PROJECTS.filter(p => p.category === 'shortform');
  const motionProjects = PROJECTS.filter(p => p.category === 'motion');

  // Trigger main showreel modal
  const handleOpenGeneralShowreel = () => {
    setActiveShowreelUrl("https://res.cloudinary.com/xcwaqcmp/video/upload/v1783454091/SHOWREEL_2026_s5fbxt.mp4");
    setActiveShowreelTitle("2026 Director Showreel Masterpiece");
    setShowreelOpen(true);
  };

  // Trigger a client testimonial clip modal
  const handlePlayClientReview = (testimonial: Testimonial) => {
    if (testimonial.videoReviewUrl) {
      setActiveShowreelUrl(testimonial.videoReviewUrl);
      setActiveShowreelTitle(`Video Feedback — ${testimonial.name} (${testimonial.company})`);
      setShowreelOpen(true);
    }
  };

  // Gather recommended matching category list for a project
  const getRelatedProjects = (project: Project): Project[] => {
    return PROJECTS.filter(p => p.category === project.category && p.id !== project.id);
  };

  return (
    <div id="app-container" className="relative min-h-screen bg-dark-bg text-white overflow-hidden font-sans">
      
      {/* Dynamic Cursor Light Following Effect */}
      <CustomCursor />

      {/* Slim Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-netflix-red z-50 transition-all duration-100 ease-out shadow-[0_2px_10px_#E50914]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Transparent Navbar Header */}
      <Navbar activeView={activeView} onViewChange={setActiveView} />

      <AnimatePresence mode="wait">
        {activeView === 'home' && (
          <motion.div
            key="home-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* Cinematic Autoplay Showreel Hero Banner */}
            <Hero
              onWatchShowreel={handleOpenGeneralShowreel}
              onViewPortfolio={() => {
                setActiveView('portfolio');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
            />

            {/* Quick Portals - Interactive Bento Grid to Remix All Pages */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 relative z-20">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-netflix-red" />
                <h2 className="text-sm md:text-base font-mono font-bold uppercase tracking-widest text-gray-300">
                  Interactive Portals
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <motion.div
                  onClick={() => { setActiveView('portfolio'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  whileHover={{ scale: 1.02, translateY: -4 }}
                  className="bg-gradient-to-br from-white/5 to-white/[0.01] hover:from-white/10 hover:to-white/[0.02] border border-white/5 hover:border-white/20 p-5 rounded-xl cursor-pointer transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-netflix-red/10 border border-netflix-red/20 flex items-center justify-center text-netflix-red group-hover:bg-netflix-red group-hover:text-white transition-all duration-300 mb-4">
                      <Film className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-black text-white text-lg tracking-tight mb-2">
                      My Work
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Browse all cinematic projects with precise category filtering and real-time playback.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-netflix-red font-bold mt-4 uppercase tracking-widest block group-hover:translate-x-1 transition-transform">
                    Enter Vault &rarr;
                  </span>
                </motion.div>

                <motion.div
                  onClick={() => { setActiveView('workflow'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  whileHover={{ scale: 1.02, translateY: -4 }}
                  className="bg-gradient-to-br from-white/5 to-white/[0.01] hover:from-white/10 hover:to-white/[0.02] border border-white/5 hover:border-white/20 p-5 rounded-xl cursor-pointer transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 mb-4">
                      <Sliders className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-black text-white text-lg tracking-tight mb-2">
                      The Pipeline
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Step behind the timeline to explore our modular editing and theatrical master formula.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 font-bold mt-4 uppercase tracking-widest block group-hover:translate-x-1 transition-transform">
                    View Pipeline &rarr;
                  </span>
                </motion.div>

                <motion.div
                  onClick={() => { setActiveView('about'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  whileHover={{ scale: 1.02, translateY: -4 }}
                  className="bg-gradient-to-br from-white/5 to-white/[0.01] hover:from-white/10 hover:to-white/[0.02] border border-white/5 hover:border-white/20 p-5 rounded-xl cursor-pointer transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 mb-4">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-black text-white text-lg tracking-tight mb-2">
                      About & Gear
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Meet lead colorist Justin and inspect the commercial hardware suite.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400 font-bold mt-4 uppercase tracking-widest block group-hover:translate-x-1 transition-transform">
                    Read Bio &rarr;
                  </span>
                </motion.div>

                <motion.div
                  onClick={() => { setActiveView('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  whileHover={{ scale: 1.02, translateY: -4 }}
                  className="bg-gradient-to-br from-white/5 to-white/[0.01] hover:from-white/10 hover:to-white/[0.02] border border-white/5 hover:border-white/20 p-5 rounded-xl cursor-pointer transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 mb-4">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-black text-white text-lg tracking-tight mb-2">
                      Let's Collab
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Secure direct bookings, email coordinates, and view social sync indicators.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold mt-4 uppercase tracking-widest block group-hover:translate-x-1 transition-transform">
                    Start Session &rarr;
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Categories Browsing Grid Row section (The Movie Row Shelf) */}
            <section id="portfolio" className="relative py-4 bg-dark-bg z-20">
              
              {/* Row 1: FEATURED STORIES (16:9) */}
              <NetflixRow
                title="Spotlight Masterpieces"
                projects={featuredProjects}
                onProjectSelect={setSelectedProject}
                isDraggable={true}
                shineBorder={true}
                slideDirection="left"
              />

              {/* Row 2: DOCUMENTARIES & COZY LECTURES */}
              <NetflixRow
                title="Cinematic Documentaries & Features"
                projects={longFormProjects}
                layout="horizontal"
                onProjectSelect={setSelectedProject}
                isDraggable={true}
                shineBorder={true}
                slideDirection="right"
              />

              {/* Row 3: SHORT FORM VERTICAL REELS */}
              <NetflixRow
                title="Short Form / Vertical Reels"
                projects={shortFormProjects}
                layout="vertical"
                onProjectSelect={setSelectedProject}
                isDraggable={true}
                shineBorder={true}
                slideDirection="left"
              />

              {/* Row 4: MOTION GRAPHICS & SOUND FX */}
              <NetflixRow
                title="Motion Graphics & Sound FX"
                projects={motionProjects}
                layout="horizontal"
                onProjectSelect={setSelectedProject}
                isDraggable={true}
                shineBorder={true}
                slideDirection="right"
              />

              {/* Dynamic Color-Grading Slider Highlight (Bento Box inside Rows) */}
              <div id="grading-showcase" className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-left">
                <div className="flex items-center gap-2 mb-6">
                  <Sliders className="w-5 h-5 text-netflix-red" />
                  <h2 className="text-xl md:text-2xl font-display font-black text-white tracking-tight uppercase">
                    The Colorist Desk
                  </h2>
                </div>
                {/* Main Grade Study Slider */}
                <BeforeAfterSlider />
              </div>

            </section>

            {/* Tools Software SVG progress rings bento layout */}
            <SkillsGrid />

            {/* Testimonials Reviews cards with Video Clip player triggers */}
            <Testimonials onPlayReview={handlePlayClientReview} />

            {/* Narrative Bio & trusted brand logos ticker */}
            <About detailed={false} />

            {/* Credits Contact section & deep outline buttons */}
            <Contact />
          </motion.div>
        )}

        {activeView === 'portfolio' && (
          <motion.div
            key="portfolio-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <PortfolioPage
              onBackToHome={() => setActiveView('home')}
              onProjectSelect={setSelectedProject}
              projects={PROJECTS}
              onRemoveProject={handleRemoveProject}
              onUpload={handleUploadVideo}
              uploadingCategory={uploadingCategory}
              uploadingSubcategory={uploadingSubcategory}
            />
          </motion.div>
        )}        {activeView === 'workflow' && (
          <motion.div
            key="workflow-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="pt-16 pb-12 bg-dark-bg"
          >
            <Workflow />
          </motion.div>
        )}

        {activeView === 'about' && (
          <motion.div
            key="about-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="pt-16 pb-12 bg-dark-bg"
          >
            <About detailed={true} />
            <div className="py-6">
              <SkillsGrid />
            </div>
            <PcSpecs />
          </motion.div>
        )}

        {activeView === 'testimonials' && (
          <motion.div
            key="testimonials-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="pt-16 pb-12 bg-dark-bg"
          >
            <Testimonials onPlayReview={handlePlayClientReview} />
          </motion.div>
        )}

        {activeView === 'contact' && (
          <motion.div
            key="contact-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="pt-16 pb-12 bg-dark-bg"
          >
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic Modal Title detail viewer (Netflix Card Popup) */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            relatedProjects={getRelatedProjects(selectedProject)}
            onSelectProject={setSelectedProject}
          />
        )}
      </AnimatePresence>

      {/* Cinematic Showreel Theater Modal Player */}
      <AnimatePresence>
        {showreelOpen && (
          <ShowreelModal
            isOpen={showreelOpen}
            videoUrl={activeShowreelUrl}
            title={activeShowreelTitle}
            onClose={() => {
              setShowreelOpen(false);
              setActiveShowreelUrl('');
              setActiveShowreelTitle('');
            }}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
