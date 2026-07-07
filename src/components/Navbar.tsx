/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, Menu, X } from 'lucide-react';

export type ActiveViewType = 'home' | 'portfolio' | 'workflow' | 'about' | 'testimonials' | 'contact';

interface NavbarProps {
  activeView: ActiveViewType;
  onViewChange: (view: ActiveViewType) => void;
}

export default function Navbar({ activeView, onViewChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', view: 'home' as ActiveViewType },
    { name: 'Portfolio', view: 'portfolio' as ActiveViewType },
    { name: 'Workflow', view: 'workflow' as ActiveViewType },
    { name: 'About & Gear', view: 'about' as ActiveViewType },
    { name: 'Testimonials', view: 'testimonials' as ActiveViewType },
    { name: 'Contact', view: 'contact' as ActiveViewType }
  ];

  const handleLinkClick = (view: ActiveViewType) => {
    setIsMobileMenuOpen(false);
    onViewChange(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark-bg/85 backdrop-blur-md border-b border-white/5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="flex items-center gap-3 group text-white font-display text-xl md:text-2xl font-bold tracking-wider"
          >
            <div className="relative flex items-center justify-center w-9 h-9 bg-netflix-red rounded-lg shadow-lg group-hover:scale-115 transition-transform duration-300">
              <Film className="w-5 h-5 text-white" />
              <span className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
            <span className="relative overflow-hidden block">
              <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-out font-black text-white">
                JUSTIN<span className="text-netflix-red">.</span>EDIT
              </span>
              <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out font-black text-netflix-red">
                CUT<span className="text-white">_</span>COPY<span className="text-white">_</span>PASTE
              </span>
            </span>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeView === link.view;
              return (
                <a
                  key={link.name}
                  href={`#${link.view}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.view);
                  }}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 group ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.view === 'portfolio' && (
                    <span className="absolute -top-1 -right-1.5 w-1.5 h-1.5 bg-netflix-red rounded-full animate-ping" />
                  )}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-netflix-red transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              );
            })}
          </nav>

          {/* Download Resume / CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('contact');
              }}
              className="text-xs tracking-wider uppercase bg-white/5 hover:bg-white/10 text-white font-semibold py-2.5 px-5 rounded-full border border-white/10 transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 top-[72px] bg-dark-bg/98 backdrop-blur-xl z-30 lg:hidden flex flex-col px-8 py-12 border-b border-white/5"
          >
            <div className="flex flex-col gap-6 mb-12">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={`#${link.view}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.view);
                  }}
                  className={`text-2xl font-semibold tracking-wide transition-colors py-2 border-b border-white/5 ${
                    activeView === link.view ? 'text-white font-bold font-display' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 mt-auto"
            >
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full text-center py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all duration-300"
              >
                Let's Talk
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
