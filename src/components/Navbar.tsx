/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { LIQUID_TRANSITION, HUD_GLOW } from '../lib/motion';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Lab', href: '#the-lab' },
    { name: 'Arsenal', href: '#transformation' },
    { name: 'Case Files', href: '#case-files' },
    { name: 'Protocol', href: '#method' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={LIQUID_TRANSITION}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`mx-auto max-w-7xl px-8 py-4 rounded-full border transition-all duration-700 flex items-center justify-between backdrop-blur-xl ${
          scrolled 
            ? 'bg-brand-deep/80 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-transparent'
        }`}>
          <a href="#" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.2, rotate: 180 }}
              transition={LIQUID_TRANSITION}
              className="w-3 h-3 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(46,168,255,1)]" 
            />
            <span className="text-2xl font-display font-black text-white tracking-tighter">
              BrandAs <span className="text-brand-accent group-hover:text-brand-cyan transition-colors">Media</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative text-[10px] font-black uppercase tracking-[0.4em] text-brand-mist/40 hover:text-white transition-all cursor-pointer group"
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-accent transition-all group-hover:w-full"
                  whileHover={{ boxShadow: HUD_GLOW }}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <motion.a 
              href="https://wa.me/2348024646351"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-3 px-8 py-3 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-black uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all duration-700 group"
            >
              <MessageSquare size={14} className="group-hover:rotate-12 transition-transform" />
              Start Lab
            </motion.a>

            <button 
              className="md:hidden text-brand-mist/60 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={LIQUID_TRANSITION}
            className="md:hidden bg-brand-deep/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-10 py-12 flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-display font-bold text-white italic hover:text-brand-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/2348024646351"
                className="mt-4 px-10 py-5 rounded-full accent-gradient text-white text-center font-black uppercase tracking-widest text-xs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
