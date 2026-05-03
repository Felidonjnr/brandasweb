/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { FADE_UP_VARIANTS, LIQUID_TRANSITION } from '../lib/motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  white?: boolean;
}

export const SectionHeading = ({ badge, title, subtitle, centered = false }: SectionHeadingProps) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.15
        }
      }
    }}
    className={`mb-20 ${centered ? 'text-center mx-auto' : ''} ${centered ? 'max-w-4xl' : ''}`}
  >
    {badge && (
      <motion.div 
        variants={FADE_UP_VARIANTS}
        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-black text-[10px] uppercase tracking-[0.4em] mb-10"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
        {badge}
      </motion.div>
    )}
    <motion.h2 
      variants={FADE_UP_VARIANTS}
      className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-10 text-white tracking-tighter leading-[0.95] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        variants={FADE_UP_VARIANTS}
        className="text-xl md:text-2xl leading-relaxed text-brand-mist/50 font-medium italic"
      >
        "{subtitle}"
      </motion.p>
    )}
  </motion.div>
);
