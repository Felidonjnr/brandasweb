import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { LIQUID_TRANSITION, BLUR_REVEAL_VARIANTS, STAGGER_CONTAINER, FADE_UP_VARIANTS } from '../lib/motion';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-deep/90 backdrop-blur-2xl"
      />
      
      <motion.div 
        variants={BLUR_REVEAL_VARIANTS}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="relative w-full max-w-6xl bg-brand-deep border border-white/10 rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto custom-scrollbar"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-10 p-4 rounded-full bg-black/50 text-white hover:bg-brand-accent transition-all duration-500 backdrop-blur-md border border-white/10"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Visual Side */}
          <div className="lg:w-1/2 relative bg-brand-royal/10">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover min-h-[400px] lg:min-h-full opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-12 sm:p-20 flex flex-col justify-center">
            <motion.div
              variants={STAGGER_CONTAINER}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={FADE_UP_VARIANTS} className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-black uppercase tracking-[0.4em] mb-12">
                <Sparkles size={14} />
                <span>Selected Transformation</span>
              </motion.div>
              
              <motion.h2 variants={FADE_UP_VARIANTS} className="text-5xl md:text-6xl font-display font-bold text-white mb-8 italic tracking-tighter leading-none">
                {project.title}
              </motion.h2>
              
              <motion.div variants={FADE_UP_VARIANTS} className="flex flex-wrap gap-3 mb-10">
                <span className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/5 text-[9px] font-black uppercase tracking-[0.2em] text-brand-mist/40 italic">
                  {project.category}
                </span>
                <span className="px-5 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[9px] font-black uppercase tracking-[0.2em] text-brand-primary italic">
                  Premium Delivery
                </span>
              </motion.div>

              <motion.p variants={FADE_UP_VARIANTS} className="text-xl text-brand-mist/40 mb-12 leading-relaxed italic font-medium">
                "{project.shortDescription || project.description}"
              </motion.p>
              
              <motion.div variants={FADE_UP_VARIANTS} className="space-y-6 mb-16">
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-mist/20 mb-4 px-2">Lab Protocol Applied</h4>
                {['Visual Strategy', 'Conversion Engineering', 'Fluid Experience'].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-6 h-6 rounded-lg bg-brand-accent/5 border border-brand-accent/20 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-sm font-bold text-brand-mist/60 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div 
                variants={FADE_UP_VARIANTS}
                className="flex flex-col sm:flex-row gap-6"
              >
                {project.liveUrl && (
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-10 py-5 accent-gradient text-white rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 shadow-xl group"
                  >
                    Launch Work
                    <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a>
                )}
                <motion.a 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                  href="https://wa.me/2348024646351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-10 py-5 bg-white/5 hover:bg-brand-accent/20 text-white rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 transition-all border border-white/10"
                >
                  Discuss Lab
                  <MessageCircle size={18} />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
