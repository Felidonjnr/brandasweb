import React from 'react';
import { motion } from 'motion/react';
import { LIQUID_TRANSITION } from '../lib/motion';
import { DigitalMoment } from '../types';

export const DigitalMomentCard = ({ moment }: { moment: DigitalMoment, key?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={LIQUID_TRANSITION}
      whileHover={{ y: -10 }}
      className="p-10 rounded-[3.5rem] bg-brand-deep border border-white/5 hover:border-brand-accent/30 transition-all duration-700 relative overflow-hidden group shadow-xl"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent/0 to-transparent group-hover:via-brand-accent transition-all duration-1000" />
      
      <div className="mb-10 text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-brand-primary group-hover:shadow-[0_0_10px_rgba(46,168,255,1)] transition-all" />
        {moment.category}
      </div>
      
      <h3 className="text-3xl font-display font-bold text-white mb-6 italic leading-tight group-hover:text-brand-accent transition-colors duration-700">
        {moment.title}
      </h3>
      
      <p className="text-brand-mist/30 text-base leading-relaxed italic mb-10 transition-colors duration-700 group-hover:text-brand-mist/50">
        "{moment.shortDescription}"
      </p>

      <div className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-mist/10 group-hover:text-brand-accent/30 transition-colors duration-1000">
        Lab Signature • Intentional
      </div>
    </motion.div>
  );
};
