/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  MessageCircle, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Zap, 
  Layers, 
  Code2, 
  MousePointer2,
  Fingerprint,
  Search,
  FileCode,
  Loader2,
  Clock,
  ExternalLink
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ServiceCard } from './components/ServiceCard';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { SectionHeading } from './components/SectionHeading';
import { DigitalMomentCard } from './components/DigitalMomentCard';
import { EntryLoader } from './components/EntryLoader';
import { CreativeLead } from './components/CreativeLead';
import { Project, SERVICES, PROJECTS, DIGITAL_MOMENTS } from './types';
import { LIQUID_TRANSITION, FADE_UP_VARIANTS, STAGGER_CONTAINER, BLUR_REVEAL_VARIANTS } from './lib/motion';

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showLoader, setShowLoader] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem('brandas_loader_seen');
    if (hasSeenLoader) {
      setShowLoader(false);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('brandas_loader_seen', 'true');
    setShowLoader(false);
  };

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const filters = ['All', 'Websites', 'Graphic Design', 'Social Media Ads', 'AI Systems'];

  const MAIN_WHATSAPP_LINK = "https://wa.me/2348024646351?text=Hello%20BrandAs%20Media%2C%20I%20just%20viewed%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20website%2C%20design%2C%20or%20AI%20automation%20project.";

  return (
    <div className="min-h-screen bg-brand-deep text-brand-mist selection:bg-brand-accent selection:text-white overflow-x-hidden font-sans">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent origin-left z-[110]"
        style={{ scaleX }}
      />

      <AnimatePresence mode="wait">
        {showLoader ? (
          <EntryLoader key="loader" onComplete={handleLoaderComplete} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Navbar />
            
            {/* Hero Section */}
            <section id="the-lab" className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden">
              {/* Background Fluid Orbs */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div 
                  animate={{ 
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-brand-royal/10 rounded-full blur-[120px]" 
                />
                <motion.div 
                  animate={{ 
                    x: [0, -80, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-brand-primary/10 rounded-full blur-[100px]" 
                />
              </div>

              <div className="container mx-auto px-6 relative z-10">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={STAGGER_CONTAINER}
                  className="max-w-6xl"
                >
                  <motion.div variants={FADE_UP_VARIANTS}>
                    <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 mb-10 hover:border-brand-accent/30 transition-all cursor-default group backdrop-blur-md">
                      <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_15px_rgba(46,168,255,0.8)]" />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-mist/60 group-hover:text-brand-accent transition-colors">
                        Liquid Digital Systems • AI Design • Web Lab
                      </span>
                    </div>
                  </motion.div>
                  
                  <motion.h1 
                    variants={FADE_UP_VARIANTS}
                    className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-10 leading-[0.9] tracking-tighter"
                  >
                    Your Brand Is <span className="text-brand-accent italic bg-clip-text text-transparent bg-gradient-to-r from-brand-accent to-brand-cyan drop-shadow-[0_0_30px_rgba(46,168,255,0.2)]">Not Weak</span>. It Just Needs <span className="relative">
                      Better
                      <motion.span 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute bottom-2 left-0 h-3 bg-brand-primary/30 -z-10"
                      />
                    </span> Packaging.
                  </motion.h1>

                  <motion.p 
                    variants={FADE_UP_VARIANTS}
                    className="text-2xl md:text-3xl text-brand-mist/50 mb-16 max-w-4xl leading-relaxed italic font-medium tracking-tight"
                  >
                    "We build fluid digital identities, clean websites, and AI-powered systems that move your brand from scattered to premium."
                  </motion.p>

                  <motion.div 
                    variants={FADE_UP_VARIANTS}
                    className="flex flex-col sm:flex-row gap-8 items-start sm:items-center"
                  >
                    <a 
                      href="#transformation"
                      className="px-12 py-6 accent-gradient text-white rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 shadow-[0_0_50px_rgba(46,168,255,0.2)] hover:scale-105 active:scale-95 transition-all group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                      <span className="relative z-10">Explore Services</span>
                      <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                    </a>
                    
                    <div className="flex items-center gap-6">
                      <a 
                        href="#case-files"
                        className="text-xs font-black uppercase tracking-[0.3em] text-brand-mist/40 hover:text-white transition-all flex items-center gap-3 group"
                      >
                        <span className="w-8 h-[1px] bg-brand-mist/20 group-hover:w-12 group-hover:bg-white transition-all" />
                        Our Work
                      </a>
                      <a 
                        href={MAIN_WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-black uppercase tracking-[0.3em] text-brand-mist/40 hover:text-brand-accent transition-all flex items-center gap-3 group"
                      >
                        <span className="w-8 h-[1px] bg-brand-mist/20 group-hover:w-12 group-hover:bg-brand-accent transition-all" />
                        Contact Lab
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* The Diagnostic */}
            <section className="py-40 relative bg-white/[0.01]">
              <div className="container mx-auto px-6">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={STAGGER_CONTAINER}
                  className="flex flex-col lg:flex-row gap-24 items-center"
                >
                  <div className="lg:w-1/2">
                    <motion.div 
                      variants={FADE_UP_VARIANTS}
                      className="inline-flex items-center gap-4 text-brand-primary font-black text-xs uppercase tracking-[0.4em] mb-10"
                    >
                      <Search size={20} />
                      <span>The Diagnostic</span>
                    </motion.div>
                    <motion.h2 
                      variants={FADE_UP_VARIANTS}
                      className="text-5xl md:text-6xl font-display font-bold text-white mb-10 leading-[1.1]"
                    >
                      Good businesses should not look <span className="text-brand-accent italic underline decoration-brand-accent/30 underline-offset-8">ordinary</span> online.
                    </motion.h2>
                    <motion.div 
                      variants={FADE_UP_VARIANTS}
                      className="space-y-8 text-brand-mist/50 text-xl leading-relaxed italic font-medium"
                    >
                      <p>"There is a painful gap between the real value of your business and how it appears to a stranger who just found your website."</p>
                      <p>"Most brands fail because they look unreliable, complex, or outdated in the first 3 seconds of interaction."</p>
                    </motion.div>
                  </div>
                  
                  <div className="lg:w-1/2 w-full">
                    <motion.div 
                      variants={BLUR_REVEAL_VARIANTS}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                      <div className="p-10 rounded-[3.5rem] bg-brand-royal/5 border border-white/5 relative overflow-hidden group backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                          <MousePointer2 size={80} />
                        </div>
                        <h4 className="text-brand-mist/20 font-black text-[10px] uppercase tracking-[0.3em] mb-8">Before Packaging</h4>
                        <ul className="space-y-5">
                          {['Scattered visuals', 'Confusing message', 'Manual stress', 'Broken trust'].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-brand-mist/30 text-sm italic">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-mist/10" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-10 rounded-[3.5rem] bg-brand-accent/5 border border-brand-accent/20 relative overflow-hidden group shadow-[0_0_50px_rgba(46,168,255,0.1)] backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-6 text-brand-accent opacity-10 group-hover:opacity-20 transition-opacity">
                          <Fingerprint size={80} />
                        </div>
                        <h4 className="text-brand-accent font-black text-[10px] uppercase tracking-[0.3em] mb-8">After BrandAs Media</h4>
                        <ul className="space-y-5">
                          {['Premium identity', 'Clean conversion', 'AI efficiency', 'Digital authority'].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-white text-sm font-bold">
                              <div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(46,168,255,1)]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Arsenal */}
            <section id="transformation" className="py-40 relative">
              <div className="container mx-auto px-6">
                <SectionHeading 
                  badge="The Arsenal"
                  title="What we use to transform brands."
                  subtitle="We combine creative thinking, modern engineering, and AI automation to package your business for growth."
                  centered
                />
                
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={STAGGER_CONTAINER}
                  className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
                >
                  {SERVICES.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                  ))}
                </motion.div>
              </div>
            </section>

            <CreativeLead />

            {/* Case Files */}
            <section id="case-files" className="py-40 bg-brand-royal/5 relative overflow-hidden">
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2EA8FF_0%,_transparent_70%)] pointer-events-none" 
              />
              
              <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={STAGGER_CONTAINER}
                  className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10"
                >
                  <div className="max-w-2xl">
                    <motion.div variants={FADE_UP_VARIANTS} className="inline-flex items-center gap-4 text-brand-cyan font-black text-xs uppercase tracking-[0.4em] mb-8">
                      <FileCode size={20} />
                      <span>The Case Files</span>
                    </motion.div>
                    <motion.h2 
                      variants={FADE_UP_VARIANTS}
                      className="text-5xl md:text-6xl font-display font-bold text-white mb-8"
                    >
                      Selected Transformations.
                    </motion.h2>
                    <motion.p variants={FADE_UP_VARIANTS} className="text-brand-mist/40 text-xl leading-relaxed italic font-medium">"Evidence of brands that moved from ordinary to premium."</motion.p>
                  </div>

                  <motion.div variants={FADE_UP_VARIANTS} className="flex flex-wrap gap-3">
                    {filters.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 border ${
                          activeFilter === filter 
                            ? 'bg-brand-accent text-white border-brand-accent shadow-[0_0_30px_rgba(46,168,255,0.3)]' 
                            : 'bg-white/[0.03] text-brand-mist/30 border-white/5 hover:bg-white/10'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div 
                  layout
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                      <ProjectCard 
                        key={project.title} 
                        project={project} 
                        onViewDetails={setSelectedProject}
                      />
                    ))}
                  </AnimatePresence>

                  {filteredProjects.length === 0 && (
                    <motion.div 
                      variants={BLUR_REVEAL_VARIANTS}
                      initial="hidden"
                      animate="visible"
                      className="col-span-full py-32 flex flex-col items-center justify-center text-center space-y-10 bg-brand-royal/10 border border-dashed border-white/10 rounded-[4rem] relative overflow-hidden backdrop-blur-sm"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(46,168,255,0.05)_0%,_transparent_70%)]" />
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-28 h-28 rounded-full bg-brand-royal/20 flex items-center justify-center text-brand-accent relative z-10"
                      >
                        <Loader2 size={56} className="animate-spin" />
                      </motion.div>
                      <div className="relative z-10 px-8">
                        <h4 className="text-3xl font-display font-bold text-white mb-4 italic">Archive Under Seal</h4>
                        <p className="text-brand-mist/30 text-lg max-w-xl mx-auto leading-relaxed">We are currently organizing our most recent transformations in {activeFilter} for public presentation. New files manifest soon.</p>
                        <a 
                          href={MAIN_WHATSAPP_LINK} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-12 inline-flex px-12 py-5 bg-white/5 hover:bg-brand-accent/20 text-white rounded-full text-xs font-black uppercase tracking-[0.4em] transition-all border border-white/10"
                        >
                          Request Preview Access
                        </a>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </section>

            {/* Digital Moments */}
            <section className="py-40 relative bg-brand-deep">
              <div className="container mx-auto px-6">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={STAGGER_CONTAINER}
                  className="max-w-3xl mb-24"
                >
                  <motion.div variants={FADE_UP_VARIANTS} className="inline-flex items-center gap-4 text-brand-primary font-black text-xs uppercase tracking-[0.4em] mb-10">
                    <Sparkles size={20} />
                    <span>Digital Moments</span>
                  </motion.div>
                  <motion.h2 
                    variants={FADE_UP_VARIANTS}
                    className="text-5xl md:text-6xl font-display font-bold text-white mb-10"
                  >
                    Intentional Interactions.
                  </motion.h2>
                  <motion.p variants={FADE_UP_VARIANTS} className="text-brand-mist/40 text-xl leading-relaxed italic font-medium">"Small, emotional digital experiences built to connect people in unique ways."</motion.p>
                </motion.div>

                <motion.div 
                  variants={STAGGER_CONTAINER}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                  {DIGITAL_MOMENTS.map((moment) => (
                    <DigitalMomentCard key={moment.title} moment={moment} />
                  ))}
                  
                  <motion.div 
                    variants={FADE_UP_VARIANTS}
                    className="p-12 rounded-[4rem] border border-dashed border-white/5 bg-white/[0.01] flex flex-col items-center justify-center text-center group min-h-[400px] hover:bg-white/[0.03] transition-all duration-700"
                  >
                     <motion.div 
                       animate={{ rotate: 360 }}
                       transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                       className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-brand-mist/10 mb-10 group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-all duration-700"
                     >
                        <Loader2 size={40} />
                     </motion.div>
                     <h4 className="text-2xl font-display font-bold text-white/40 mb-4 italic">Next Moment Loading</h4>
                     <p className="text-brand-mist/20 text-base max-w-[280px] mx-auto mb-10 italic">Selected video edits, church media visuals, and event media works are being processed.</p>
                     <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-mist/10 group-hover:text-brand-accent/30 transition-colors">Lab Status: Active</span>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Protocol */}
            <section id="method" className="py-40 relative overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-primary/5 blur-[150px] -z-10" />
              <div className="container mx-auto px-6">
                <SectionHeading 
                  badge="The Protocol"
                  title="How we package your brand."
                  subtitle="A systematic approach to moving your business from ordinary to premium."
                  centered
                />
                
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={STAGGER_CONTAINER}
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 relative"
                >
                  <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent hidden lg:block" />
                  
                  {[
                    { step: '01', title: 'Decode', desc: 'We audit your current presence to identify exactly where the trust is breaking.', icon: Search },
                    { step: '02', title: 'Shape', desc: 'We design the visual identity and messaging that makes you look professional.', icon: Zap },
                    { step: '03', title: 'Build', desc: 'We engineer the websites and systems that turn visitors into fans.', icon: Code2 },
                    { step: '04', title: 'Launch', desc: 'We deploy and refine your new digital package for the world to see.', icon: MessageCircle }
                  ].map((method, i) => (
                    <motion.div 
                      key={i}
                      variants={FADE_UP_VARIANTS}
                      whileHover={{ y: -15, scale: 1.02 }}
                      transition={LIQUID_TRANSITION}
                      className="relative z-10 p-10 rounded-[3.5rem] bg-brand-deep border border-white/5 hover:border-brand-accent/20 transition-all duration-700 backdrop-blur-sm shadow-2xl"
                    >
                      <div className="mb-10 w-20 h-20 rounded-3xl bg-brand-royal flex items-center justify-center text-brand-accent shadow-xl border border-white/5 group hover:accent-gradient hover:text-white transition-all duration-700">
                        <method.icon size={32} />
                      </div>
                      <div className="text-6xl font-display font-black text-white/[0.03] mb-6 tracking-tighter">{method.step}</div>
                      <h3 className="text-2xl font-display font-bold text-white mb-6 italic">{method.title}</h3>
                      <p className="text-brand-mist/40 text-base leading-relaxed italic">{method.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 relative">
              <div className="container mx-auto px-6">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={BLUR_REVEAL_VARIANTS}
                  className="max-w-5xl mx-auto glass p-16 md:p-32 rounded-[5rem] text-center border border-white/10 relative overflow-hidden shadow-2xl"
                >
                  <motion.div 
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent" 
                  />
                  
                  <motion.h2 
                    variants={FADE_UP_VARIANTS}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-10 leading-[0.95] tracking-tighter"
                  >
                    Your brand has value.<br/>
                    Let’s make them <span className="text-brand-accent italic">see it</span>.
                  </motion.h2>
                  <motion.p variants={FADE_UP_VARIANTS} className="text-2xl text-brand-mist/50 mb-16 italic font-medium leading-relaxed max-w-3xl mx-auto">
                    Design your websites, brand visuals, and digital presence with a lab that understands high-level packaging.
                  </motion.p>
                  
                  <motion.div 
                    variants={FADE_UP_VARIANTS}
                    className="flex flex-col sm:flex-row gap-8 justify-center items-center"
                  >
                    <a 
                      href={MAIN_WHATSAPP_LINK} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-14 py-6 accent-gradient text-white rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 shadow-[0_0_50px_rgba(46,168,255,0.3)] hover:scale-105 active:scale-95 transition-all group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                      <MessageCircle size={20} className="relative z-10" />
                      <span className="relative z-10">Message BrandAs Lab</span>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            <footer className="py-32 border-t border-white/5 bg-brand-deep relative overflow-hidden">
               <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
                  <div>
                    <div className="text-3xl font-display font-black text-white mb-4 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(46,168,255,1)]" />
                      <span className="tracking-tighter">BrandAs <span className="text-brand-accent">Media</span></span>
                    </div>
                    <p className="text-sm text-brand-mist/20 font-medium tracking-[0.1em]">Packaging business value for digital authority.</p>
                  </div>
                  
                  <div className="flex gap-12">
                    {['Lab', 'Method', 'Archive', 'Connect'].map((link) => (
                      <a 
                        key={link} 
                        href={`#${link.toLowerCase()}`} 
                        className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-mist/30 hover:text-brand-accent transition-all duration-500"
                      >
                        {link}
                      </a>
                    ))}
                  </div>

                  <div className="text-brand-mist/10 text-[9px] font-black uppercase tracking-[0.6em]">
                    © {new Date().getFullYear()} LAB PROTOCOL 4.0. AUTHORIZED ACCESS ONLY.
                  </div>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
