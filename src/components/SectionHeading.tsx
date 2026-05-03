/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  white?: boolean;
}

export const SectionHeading = ({ badge, title, subtitle, centered = false }: SectionHeadingProps) => (
  <div className={`mb-16 ${centered ? 'text-center mx-auto' : ''} ${centered ? 'max-w-4xl' : ''}`}>
    {badge && (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-black text-[10px] uppercase tracking-[0.3em] mb-6"
      >
        {badge}
      </motion.div>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 text-white tracking-tighter leading-[1.05]"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg md:text-2xl leading-relaxed text-brand-mist/60 font-medium"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
