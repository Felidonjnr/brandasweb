/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Gift, ExternalLink, Clock, Lock } from 'lucide-react';
import { DigitalMoment } from '../types';

interface DigitalMomentCardProps {
  key?: React.Key;
  moment: DigitalMoment;
}

export const DigitalMomentCard = ({ moment }: DigitalMomentCardProps) => {
  const PROTECTED_WHATSAPP_LINK = "https://wa.me/2348024646351?text=Hello%20BrandAs%20Media%2C%20I%20want%20to%20request%20access%20to%20one%20of%20your%20protected%20project%20previews.";

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
        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-mist/20">{moment.status}</span>
          {moment.accessType === 'protected' && (
            <span className="text-[8px] font-black uppercase tracking-widest text-orange-400 flex items-center gap-1">
              <Lock size={8} /> Protected
            </span>
          )}
        </div>
      </div>

      <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">
        {moment.title}
      </h3>
      
      <p className="text-brand-mist/40 text-sm leading-relaxed flex-1 mb-8">
        {moment.shortDescription}
      </p>

      <div className="flex flex-col gap-4 mt-auto">
        {moment.accessType === 'public' && moment.liveUrl && (
          <a 
            href={moment.liveUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full px-6 py-4 accent-gradient text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-primary/20"
          >
            <ExternalLink size={14} />
            <span>Open Live Preview</span>
          </a>
        )}

        {moment.accessType === 'protected' && (
          <a 
            href={PROTECTED_WHATSAPP_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full px-6 py-4 bg-brand-cyan/20 hover:bg-brand-cyan text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all"
          >
            <Lock size={14} />
            <span>Request Access</span>
          </a>
        )}

        {moment.accessType === 'coming-soon' && (
          <div className="w-full px-6 py-4 bg-white/5 text-brand-mist/20 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 cursor-default border border-white/5">
            <Clock size={14} />
            <span>Coming Soon</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
