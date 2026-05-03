/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass shadow-2xl' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-2xl accent-gradient flex items-center justify-center font-display font-bold text-white shadow-xl shadow-brand-primary/30 transition-transform group-hover:rotate-12">
            B
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-white">BrandAs <span className="text-brand-cyan">Media</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-xs font-bold uppercase tracking-widest text-brand-mist/60">
          <a href="#lab" className="hover:text-brand-accent transition-colors">The Lab</a>
          <a href="#transformation" className="hover:text-brand-accent transition-colors">Transformation</a>
          <a href="#case-files" className="hover:text-brand-accent transition-colors">Case Files</a>
          <a href="#method" className="hover:text-brand-accent transition-colors">Our Method</a>
        </div>

        <a 
          href="https://wa.me/yourwhatsappnumber"
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full accent-gradient text-white text-xs font-black uppercase tracking-[0.2em] shadow-2xl shadow-brand-primary/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <MessageSquare size={16} />
          <span>Connect</span>
        </a>
      </div>
    </nav>
  );
};
