/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Gift, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { DigitalMoment } from '../types';

interface DigitalMomentCardProps {
  moment: DigitalMoment;
}

export const DigitalMomentCard = ({ moment }: DigitalMomentCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-brand-royal/10 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-brand-accent/30 transition-all card-shadow p-8 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:accent-gradient group-hover:text-white transition-all">
          {moment.title.toLowerCase().includes('valentine') ? <Heart size={24} /> : <Gift size={24} />}
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-mist/20">{moment.status}</span>
      </div>

      <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">
        {moment.title}
      </h3>
      
      <p className="text-brand-mist/40 text-sm leading-relaxed flex-1 mb-8">
        {moment.shortDescription}
      </p>

      <div className="flex gap-4 mt-auto">
        {moment.githubUrl && (
          <a 
            href={moment.githubUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 px-4 py-3 glass hover:bg-white/10 text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all border border-white/5"
          >
            <Github size={14} />
            Repo
          </a>
        )}
        {moment.liveUrl ? (
          <a 
            href={moment.liveUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 px-4 py-3 accent-gradient text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-primary/20"
          >
            <ExternalLink size={14} />
            Live
          </a>
        ) : (
          <div className="flex-1 px-4 py-3 bg-white/5 text-brand-mist/20 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 cursor-default border border-white/5">
             <Sparkles size={14} />
             Moment
          </div>
        )}
      </div>
    </motion.div>
  );
};
