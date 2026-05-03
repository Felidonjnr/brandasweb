/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { X, ExternalLink, Zap, Lock, Clock, Globe, Cpu, Layout, BookOpen, Heart } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const VisualPlaceholder = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    'website': <Globe size={64} className="text-brand-accent/40" />,
    'ai-automation': <Cpu size={64} className="text-brand-primary/40" />,
    'digital-system': <Layout size={64} className="text-brand-cyan/40" />,
    'education-tech': <BookOpen size={64} className="text-brand-mist/40" />,
    'ai-assistant': <Cpu size={64} className="text-brand-primary/40" />,
    'personalized-experience': <Heart size={64} className="text-pink-500/40" />
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-brand-royal/10">
      {icons[type] || <Globe size={64} className="text-brand-mist/20" />}
    </div>
  );
};

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const PROTECTED_WHATSAPP_LINK = "https://wa.me/2348024646351?text=Hello%20BrandAs%20Media%2C%20I%20want%20to%20request%20access%20to%20one%20of%20your%20protected%20project%20previews.";

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
          <div className="lg:col-span-2 relative bg-brand-royal/20 h-full min-h-[400px] lg:min-h-full">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <VisualPlaceholder type={project.visualType} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/20" />
            <div className="absolute bottom-12 left-10 right-10">
              <div className="flex flex-col gap-3 mb-6">
                <span className="w-fit px-4 py-1.5 rounded-full accent-gradient text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-brand-primary/20">
                  {project.status}
                </span>
                {project.accessType === 'protected' && (
                  <span className="w-fit px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-[9px] font-black uppercase tracking-widest text-orange-400 flex items-center gap-1.5">
                    <Lock size={10} />
                    Protected Preview
                  </span>
                )}
                {project.accessType === 'coming-soon' && (
                  <span className="w-fit px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/40 flex items-center gap-1.5">
                    <Clock size={10} />
                    Preview coming soon
                  </span>
                )}
              </div>
              <p className="text-brand-cyan text-xs font-black uppercase tracking-[0.3em] mb-2">{project.category}</p>
              <h2 className="text-4xl font-display font-bold leading-[1.1] text-white">{project.title}</h2>
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

              <div className="pt-12 grid grid-cols-1 gap-6">
                {project.accessType === 'public' && project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full px-10 py-5 accent-gradient text-white rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-2xl shadow-brand-primary/30 hover:scale-105 active:scale-95 transition-all"
                  >
                    <ExternalLink size={20} />
                    Open Live Preview
                  </a>
                )}

                {project.accessType === 'protected' && (
                  <div className="flex flex-col gap-6 p-10 rounded-[2.5rem] bg-brand-royal/20 border border-brand-cyan/20 text-center">
                    <div>
                      <h4 className="text-white font-display font-bold text-xl mb-2 flex items-center justify-center gap-3">
                        <Lock size={20} className="text-brand-cyan" />
                        Protected Preview
                      </h4>
                      <p className="text-brand-mist/50 text-sm">Access to this case study's live environment is restricted to authorized partners and clients.</p>
                    </div>
                    <a 
                      href={PROTECTED_WHATSAPP_LINK}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full px-10 py-5 bg-brand-cyan hover:bg-brand-mist text-brand-deep rounded-[2.5rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all"
                    >
                      Request Access Now
                    </a>
                  </div>
                )}

                {project.accessType === 'coming-soon' && (
                  <div className="w-full px-10 py-5 bg-white/5 border border-white/5 text-brand-mist/20 rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 cursor-default">
                    <Clock size={20} />
                    Preview Coming Soon
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
