/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, Lock, Clock, Globe, Cpu, Layout, BookOpen, Heart } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  key?: React.Key;
  project: Project;
  onViewDetails: (project: Project) => void;
}

const VisualPlaceholder = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    'website': <Globe size={48} className="text-brand-accent/40" />,
    'ai-automation': <Cpu size={48} className="text-brand-primary/40" />,
    'digital-system': <Layout size={48} className="text-brand-cyan/40" />,
    'education-tech': <BookOpen size={48} className="text-brand-mist/40" />,
    'ai-assistant': <Cpu size={48} className="text-brand-primary/40" />,
    'personalized-experience': <Heart size={48} className="text-pink-500/40" />
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-brand-royal/10">
      {icons[type] || <Globe size={48} className="text-brand-mist/20" />}
    </div>
  );
};

export const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const PROTECTED_WHATSAPP_LINK = "https://wa.me/2348024646351?text=Hello%20BrandAs%20Media%2C%20I%20want%20to%20request%20access%20to%20one%20of%20your%20protected%20project%20previews.";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col h-full bg-brand-royal/20 rounded-[3rem] overflow-hidden border border-white/5 hover:border-brand-accent/20 transition-all card-shadow relative"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
          />
        ) : (
          <VisualPlaceholder type={project.visualType} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/20 to-transparent opacity-80" />
        
        <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
          <span className={`px-4 py-1.5 rounded-full glass border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md`}>
            {project.status}
          </span>
          {project.accessType === 'protected' && (
            <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-[9px] font-black uppercase tracking-widest text-orange-400 flex items-center gap-1.5">
              <Lock size={10} />
              Protected Preview
            </span>
          )}
          {project.accessType === 'coming-soon' && (
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/40 flex items-center gap-1.5">
              <Clock size={10} />
              Preview coming soon
            </span>
          )}
        </div>
      </div>

      <div className="p-10 flex flex-col flex-1 relative">
        <div className="absolute top-0 right-10 -translate-y-1/2 w-12 h-12 rounded-2xl accent-gradient flex items-center justify-center text-white shadow-2xl opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12">
          <ArrowRight size={24} />
        </div>

        <p className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-4">{project.category}</p>
        <h3 className="text-2xl font-display font-bold text-white mb-6 group-hover:text-brand-accent transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-brand-mist/60 text-base line-clamp-3 mb-10 flex-1 leading-relaxed italic font-medium">
          "{project.shortDescription}"
        </p>
        
        <div className="grid gap-4 mt-auto">
          <button 
            onClick={() => onViewDetails(project)}
            className="w-full px-8 py-4 bg-white/5 hover:bg-brand-accent/20 text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 group/btn border border-white/10"
          >
            <span>Open Case File</span>
            <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
          </button>
          
          <div className="flex gap-3">
            {project.accessType === 'public' && project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 p-4 accent-gradient text-white rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest"
              >
                <ExternalLink size={16} />
                <span>Open Live Preview</span>
              </a>
            )}

            {project.accessType === 'protected' && (
              <a 
                href={PROTECTED_WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 p-4 bg-brand-cyan/20 hover:bg-brand-cyan text-white rounded-2xl transition-all shadow-xl flex flex-col items-center justify-center gap-1 text-[10px] font-black uppercase tracking-widest"
              >
                <div className="flex items-center gap-2">
                  <Lock size={14} />
                  <span>Request Access</span>
                </div>
                <span className="text-[8px] opacity-60 normal-case tracking-normal">Access available on request.</span>
              </a>
            )}

            {project.accessType === 'coming-soon' && (
              <div className="flex-1 p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-mist/20 cursor-default">
                <Clock size={14} />
                <span>Coming Soon</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
