import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { LIQUID_TRANSITION, FADE_UP_VARIANTS, STAGGER_CONTAINER, BLUR_REVEAL_VARIANTS } from '../lib/motion';

export const CreativeLead = () => {
  const WHATSAPP_LINK = "https://wa.me/2348024646351?text=Hello%20BrandAs%20Media%2C%20I%20just%20viewed%20your%20portfolio%20and%20I%27d%20like%20to%20work%20with%20you%20on%20a%20website%2C%20design%2C%20or%20AI%20automation%20project.";

  return (
    <section id="about" className="py-40 relative overflow-hidden bg-brand-deep">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-royal/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CONTAINER}
          className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32"
        >
          {/* Text Side */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.div variants={FADE_UP_VARIANTS} className="inline-flex items-center gap-4 text-brand-primary font-black text-xs uppercase tracking-[0.4em] mb-10">
              <Sparkles size={20} />
              <span>Behind BrandAs Media</span>
            </motion.div>

            <motion.div variants={FADE_UP_VARIANTS} className="mb-12">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-2 italic tracking-tighter">
                Godshand
              </h2>
              <p className="text-xl text-brand-accent font-black uppercase tracking-[0.2em]">
                Creative Lead, BrandAs Media
              </p>
            </motion.div>

            <motion.div variants={FADE_UP_VARIANTS} className="space-y-8 text-brand-mist/50 text-xl leading-relaxed italic font-medium mb-16">
              <p>
                BrandAs Media was built from a simple belief: many businesses already carry real value, but their digital presence does not always show it clearly.
              </p>
              <p>
                Behind the work is Godshand, the Creative Lead shaping BrandAs Media’s direction across websites, media design, AI automation, and digital systems.
              </p>
              <p>
                One of the visions behind BrandAs Media is to help brands build a strong central message and express it consistently across every digital platform — creating a unified experience, a clear style, and an energy that people can instantly recognize and connect with.
              </p>
              <p>
                The goal is to help growing brands move from scattered ideas to structured digital presence — so they can look trusted, communicate clearly, and work smarter online.
              </p>
            </motion.div>

            <motion.div variants={FADE_UP_VARIANTS}>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-12 py-6 accent-gradient text-white rounded-full font-black uppercase tracking-widest text-xs shadow-[0_0_50px_rgba(46,168,255,0.2)] hover:scale-105 active:scale-95 transition-all group"
              >
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                <span>Work With BrandAs Media</span>
              </a>
            </motion.div>
          </div>

          {/* Portrait Side */}
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <motion.div 
              variants={BLUR_REVEAL_VARIANTS}
              className="relative w-full max-w-md aspect-[4/5]"
            >
              {/* Backglow */}
              <div className="absolute inset-0 bg-brand-royal/20 blur-[60px] rounded-full scale-90 -z-10" />
              
              {/* Portrait Card */}
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  rotateZ: [0, 1, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative h-full w-full rounded-[4rem] overflow-hidden border border-white/10 glass shadow-2xl group"
              >
                {/* The Image Container */}
                <div className="absolute inset-0 bg-brand-deep">
                  <img 
                    src="https://res.cloudinary.com/drcroxtgs/image/upload/v1777937731/image_1776061059753_a41czu.jpg" 
                    alt="Godshand - Creative Lead"
                    className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 scale-105 group-hover:scale-100 contrast-[1.1] brightness-[0.8] saturate-0 hover:saturate-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  {/* Digital Lab Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-brand-royal/10 mix-blend-color" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_center,_transparent_0%,_#071A3D_100%)]" />
                </div>

                {/* Edge Lighting Glow */}
                <div className="absolute inset-0 border-[20px] border-transparent group-hover:border-brand-accent/5 transition-all duration-1000 rounded-[4rem] pointer-events-none" />
                
                {/* ID Tag */}
                <div className="absolute bottom-10 left-10 right-10 p-6 glass border border-white/10 rounded-3xl backdrop-blur-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-display font-bold text-lg italic leading-tight">Godshand</h4>
                      <p className="text-brand-accent text-[8px] font-black uppercase tracking-widest">Protocol Lead</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                      <Sparkles size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Mesh */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/10 blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-primary/10 blur-3xl -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
