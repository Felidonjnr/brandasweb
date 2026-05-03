/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { X, ExternalLink, Zap, Github, Play, AlertCircle, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
    >
      <div className="absolute inset-0 bg-brand-deep/95 backdrop-blur-md" onClick={onClose} />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        className="w-full max-w-6xl bg-brand-deep border border-brand-accent/20 rounded-[3rem] overflow-hidden shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 rounded-full bg-brand-royal/50 hover:bg-brand-accent text-white transition-all z-20 shadow-xl border border-white/10"
        >
          <X size={24} />
        </button>
        
        <div className="grid lg:grid-cols-5 h-full">
          {/* Image & Basic Info */}
          <div className="lg:col-span-2 relative bg-brand-royal/20">
            <img 
              src={project.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'} 
              alt={project.title} 
              className="w-full h-full object-cover min-h-[400px] lg:min-h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/20" />
            <div className="absolute bottom-12 left-10 right-10">
              <span className="px-4 py-1.5 rounded-full accent-gradient text-[10px] font-black uppercase tracking-[0.2em] mb-4 inline-block shadow-lg shadow-brand-primary/20">
                {project.status}
              </span>
              <p className="text-brand-cyan text-xs font-black uppercase tracking-[0.3em] mb-2">{project.category}</p>
              <h2 className="text-4xl font-display font-bold leading-[1.1] text-white">{project.title}</h2>
              
              {project.screenshotNote && (
                <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                   <Sparkles size={16} className="text-brand-accent flex-shrink-0 mt-1" />
                   <p className="text-[10px] font-black uppercase tracking-widest text-brand-mist/30 leading-relaxed">
                     {project.screenshotNote}
                   </p>
                </div>
              )}
            </div>
          </div>

          {/* Details Content */}
          <div className="lg:col-span-3 p-10 md:p-16 lg:p-20 overflow-y-auto">
            <div className="space-y-12">
              <section>
                <div className="inline-flex items-center gap-3 text-brand-accent font-black text-xs uppercase tracking-[0.2em] mb-6">
                  <Zap size={18} />
                  <span>The Case Story</span>
                </div>
                <p className="text-brand-mist/80 text-xl leading-relaxed font-medium italic">"{project.shortDescription}"</p>
              </section>

              <div className="grid md:grid-cols-2 gap-12 pt-4">
                <section>
                  <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6 border-l-2 border-brand-accent pl-4">The Challenge</h4>
                  <p className="text-brand-mist/50 text-base leading-relaxed">{project.challenge}</p>
                </section>
                <section>
                  <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6 border-l-2 border-brand-cyan pl-4">BrandAs Response</h4>
                  <p className="text-brand-mist/50 text-base leading-relaxed">{project.brandasResponse}</p>
                </section>
              </div>

              <section>
                <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Key Features & Modules</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-brand-royal/20 border border-white/5 group hover:bg-brand-royal/40 transition-all">
                      <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(46,168,255,0.5)]" />
                      <span className="text-sm text-brand-mist/70 font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6">The Lab Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tool, i) => (
                    <span key={i} className="px-5 py-2 rounded-full bg-brand-royal/40 text-brand-cyan text-xs font-black uppercase tracking-wider border border-white/5">
                      {tool}
                    </span>
                  ))}
                </div>
              </section>

              <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.liveUrl ? (
                  <a 
                    href={project.liveUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-10 py-5 accent-gradient text-white rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-2xl shadow-brand-primary/30 hover:scale-105 active:scale-95 transition-all"
                  >
                    <ExternalLink size={20} />
                    Visit Live Preview
                  </a>
                ) : (
                  <div className="flex-1 px-10 py-5 bg-white/5 border border-white/5 text-brand-mist/20 rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 cursor-default">
                    <AlertCircle size={20} />
                    Link Coming Soon
                  </div>
                )}

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-5 glass hover:bg-white/10 text-white rounded-[2rem] font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 ring-1 ring-white/10"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}
                  {project.videoUrl && (
                    <a 
                      href={project.videoUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-5 glass hover:bg-red-500/20 text-white rounded-[2rem] font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 ring-1 ring-white/10"
                    >
                      <Play size={18} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
