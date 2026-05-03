/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const IconComponent = (Icons as any)[service.icon] || Icons.Layout;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative p-10 rounded-[3rem] bg-brand-royal/10 border border-white/5 hover:border-brand-accent/30 transition-all card-shadow hover:translate-y-[-10px] overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.1] transition-all group-hover:scale-110">
        <IconComponent size={140} />
      </div>
      
      <div className="flex justify-between items-start mb-10">
        <div className="w-16 h-16 rounded-2xl bg-brand-primary/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:accent-gradient group-hover:text-white transition-all ring-1 ring-white/10">
          <IconComponent size={32} />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent/50">{service.toolName}</span>
      </div>
      
      <h3 className="text-3xl font-display font-bold text-white mb-6 group-hover:text-brand-accent transition-colors leading-tight">
        {service.title}
      </h3>
      
      <p className="text-brand-mist/60 leading-relaxed text-lg font-medium">
        {service.description}
      </p>
      
      <div className="mt-10 pt-10 border-t border-white/5 flex items-center gap-2 text-xs font-bold text-brand-cyan/60 uppercase tracking-widest group-hover:text-brand-cyan transition-colors">
        <Icons.Zap size={14} />
        <span>Transformation Active</span>
      </div>
    </motion.div>
  );
};
