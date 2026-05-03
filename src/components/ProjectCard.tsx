/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, Github, Play, AlertCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
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
        <img 
          src={project.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/20 to-transparent opacity-80" />
        
        <div className="absolute top-6 right-6">
          <span className={`px-4 py-1.5 rounded-full glass border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md`}>
            {project.status}
          </span>
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
            {project.liveUrl ? (
              <a 
                href={project.liveUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 p-4 glass hover:accent-gradient text-white rounded-2xl transition-all shadow-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest"
                title="Open Live Preview"
              >
                <ExternalLink size={16} />
                <span>Live Preview</span>
              </a>
            ) : (
              <div className="flex-1 p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-mist/20 cursor-default">
                <AlertCircle size={14} />
                <span>Preview Soon</span>
              </div>
            )}

            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 glass hover:bg-white/10 text-white rounded-2xl transition-all shadow-xl flex items-center justify-center"
                title="View GitHub"
              >
                <Github size={18} />
              </a>
            )}

            {project.videoUrl && (
              <a 
                href={project.videoUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 glass hover:bg-red-500/20 text-white rounded-2xl transition-all shadow-xl flex items-center justify-center"
                title="Watch Demo"
              >
                <Play size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
