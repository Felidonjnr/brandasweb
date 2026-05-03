/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Fingerprint, 
  Cpu, 
  Zap, 
  Layers, 
  Code2, 
  MousePointer2,
  Lock,
  Search,
  FileCode,
  Loader2,
  Clock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ServiceCard } from './components/ServiceCard';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { SectionHeading } from './components/SectionHeading';
import { DigitalMomentCard } from './components/DigitalMomentCard';
import { Project, SERVICES, PROJECTS, DIGITAL_MOMENTS } from './types';

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter || activeFilter === 'All');

  const filters = ['All', 'Websites', 'Graphic Design', 'Logos & Branding', 'Social Media Ads', 'Flyers & Print', 'AI Systems'];

  const MAIN_WHATSAPP_LINK = "https://wa.me/2348024646351?text=Hello%20BrandAs%20Media%2C%20I%20just%20viewed%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20website%2C%20design%2C%20or%20AI%20automation%20project.";

  return (
    <div className="min-h-screen bg-brand-deep text-brand-mist selection:bg-brand-accent selection:text-white overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Section - The Opening Scene */}
      <section id="the-lab" className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-royal/20 rounded-full blur-[150px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -40, 0],
              y: [0, -60, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-primary/30 rounded-full blur-[150px]" 
          />
          <div className="absolute inset-0 opacity-[0.03] blueprint-grid pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass border border-white/10 mb-8 hover:border-brand-accent/30 transition-all cursor-default group">
                <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_rgba(46,168,255,0.8)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-mist/60 group-hover:text-brand-accent transition-colors">
                  Websites • Branding • Graphic Design • Ads
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-[0.95] tracking-tight">
                Your Brand Is <span className="text-brand-accent italic drop-shadow-[0_0_30px_rgba(46,168,255,0.3)]">Not Weak</span>. It Just Needs <span className="relative">
                  Better
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-2 left-0 h-2 bg-brand-primary/40 -z-10"
                  />
                </span> Positioning.
              </h1>

              <p className="text-xl md:text-2xl text-brand-mist/60 mb-12 max-w-3xl leading-relaxed italic font-medium">
                "From websites to flyers, logos, social media advert designs, and brand visuals, we create clean digital solutions that help your business look credible and attract serious attention."
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <a 
                  href="#transformation"
                  className="px-10 py-5 accent-gradient text-white rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-2xl shadow-brand-primary/30 hover:scale-105 active:scale-95 transition-all group"
                >
                  View Our Services
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </a>
                <a 
                  href="#case-files"
                  className="px-10 py-5 glass hover:bg-white/10 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all ring-1 ring-white/10"
                >
                  See Our Work
                </a>
                <a 
                  href={MAIN_WHATSAPP_LINK} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-white/5 hover:bg-brand-accent/20 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all border border-white/10"
                >
                  <MessageCircle size={18} />
                  Request a Project
                </a>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-3xl bg-brand-accent/5 border border-brand-accent/10 max-w-lg backdrop-blur-sm">
                <div className="p-3 rounded-2xl bg-brand-accent/10 text-brand-accent">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-1">Status: Open Reconstruction</p>
                  <p className="text-sm text-brand-mist/40 font-medium leading-relaxed">
                    The full experience is being refined. Selected case files, live previews, and demo builds remain open for exploration below.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Room */}
      <section className="py-32 relative overflow-hidden bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-3 text-brand-primary font-black text-xs uppercase tracking-[0.3em] mb-8">
                <Search size={18} />
                <span>The Diagnostic</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                Good businesses should not look <span className="text-brand-accent">ordinary</span> online.
              </h2>
              <div className="space-y-6 text-brand-mist/60 text-lg leading-relaxed italic font-medium">
                <p>"There is a painful gap between the real value of your business and how it appears to a stranger who just found your website."</p>
                <p>"Most brands are not failing because they are weak; they are failing because they look unreliable, complex, or outdated in the first 3 seconds."</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-[2.5rem] bg-brand-royal/10 border border-white/5 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <MousePointer2 size={64} />
                  </div>
                  <h4 className="text-brand-mist/30 font-black text-[10px] uppercase tracking-widest mb-6">Before Packaging</h4>
                  <ul className="space-y-4">
                    {['Scattered visuals', 'Confusing message', 'Manual stress', 'Broken trust'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-brand-mist/40 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-mist/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-[2.5rem] bg-brand-accent/5 border border-brand-accent/20 relative overflow-hidden group shadow-[0_0_40px_rgba(46,168,255,0.1)]"
                >
                  <div className="absolute top-0 right-0 p-4 text-brand-accent opacity-20">
                    <Fingerprint size={64} />
                  </div>
                  <h4 className="text-brand-accent font-black text-[10px] uppercase tracking-widest mb-6">After BrandAs Media</h4>
                  <ul className="space-y-4">
                    {['Premium identity', 'Clean conversion', 'AI efficiency', 'Digital authority'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white text-sm font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(46,168,255,1)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Tools */}
      <section id="transformation" className="py-32 relative">
        <div className="container mx-auto px-6">
          <SectionHeading 
            badge="The Arsenal"
            title="What we use to transform brands."
            subtitle="We don't just design. We combine creative thinking, modern engineering, and AI automation to package your business for growth."
          />
          
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Files */}
      <section id="case-files" className="py-32 bg-brand-royal/5 relative">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-brand-accent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 text-brand-cyan font-black text-xs uppercase tracking-[0.3em] mb-6">
                <FileCode size={18} />
                <span>The Case Files</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Selected Transformations.</h2>
              <p className="text-brand-mist/50 text-lg leading-relaxed italic font-medium">"Evidence of brands that moved from ordinary to premium."</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeFilter === filter 
                      ? 'bg-brand-accent text-white shadow-xl shadow-brand-primary/30' 
                      : 'bg-white/5 text-brand-mist/40 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.title} 
                  project={project} 
                  onViewDetails={setSelectedProject}
                />
              ))}
            </AnimatePresence>

            {/* Placeholder Empty Sections */}
            {activeFilter === 'Flyers & Print' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-24 flex flex-col items-center justify-center text-center space-y-8 bg-brand-royal/10 border border-dashed border-white/10 rounded-[3.5rem] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(46,168,255,0.05)_0%,_transparent_70%)]" />
                <div className="w-24 h-24 rounded-full bg-brand-royal/20 flex items-center justify-center text-brand-accent animate-pulse relative z-10">
                  <Layers size={48} />
                </div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-display font-bold text-white mb-3">Creative Works Are Being Curated</h4>
                  <p className="text-brand-mist/40 text-base max-w-md mx-auto leading-relaxed">Selected flyers, campaign visuals, social media designs, logo concepts, and brand identity directions are being prepared for the full BrandAs Media archive.</p>
                  <a 
                    href={MAIN_WHATSAPP_LINK} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex px-10 py-4 accent-gradient text-white rounded-full text-xs font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-105 active:scale-95"
                  >
                    Request a Design
                  </a>
                </div>
              </motion.div>
            )}

            {filteredProjects.length === 0 && activeFilter !== 'Flyers & Print' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-24 flex flex-col items-center justify-center text-center space-y-8 bg-brand-royal/10 border border-dashed border-white/10 rounded-[3.5rem] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(46,168,255,0.05)_0%,_transparent_70%)]" />
                <div className="w-24 h-24 rounded-full bg-brand-royal/20 flex items-center justify-center text-brand-primary animate-pulse relative z-10">
                  <Loader2 size={48} className="animate-spin" />
                </div>
                <div className="relative z-10 px-6">
                  <h4 className="text-2xl font-display font-bold text-white mb-3">Curating Selected Works</h4>
                  <p className="text-brand-mist/40 text-base max-w-md mx-auto leading-relaxed">
                    We are currently organizing our most recent transformations in {activeFilter} for public presentation.
                  </p>
                  <a 
                    href={MAIN_WHATSAPP_LINK} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex px-10 py-4 bg-brand-primary/20 hover:bg-brand-primary text-white rounded-full text-xs font-black uppercase tracking-widest transition-all"
                  >
                    Discuss Your Project
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Digital Moments Section */}
      <section className="py-32 relative bg-brand-deep">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-3 text-brand-primary font-black text-xs uppercase tracking-[0.3em] mb-6">
              <Sparkles size={18} />
              <span>Digital Moments</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Intentional Interactions.</h2>
            <p className="text-brand-mist/50 text-lg leading-relaxed italic font-medium">"Small, emotional digital experiences built to connect people in unique ways."</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIGITAL_MOMENTS.map((moment) => (
              <DigitalMomentCard key={moment.title} moment={moment} />
            ))}
            
            {/* Loading Soon Placeholder for Media Samples */}
            <div className="p-8 rounded-[2.5rem] border border-dashed border-white/5 bg-white/[0.01] flex flex-col items-center justify-center text-center group min-h-[300px]">
               <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-mist/20 mb-6 group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-all">
                  <Loader2 size={32} className="animate-spin" />
               </div>
               <h4 className="text-xl font-display font-bold text-white/50 mb-3">Media Samples Loading Soon</h4>
               <p className="text-brand-mist/20 text-sm max-w-[250px] mx-auto mb-6">Selected video edits, motion graphics, church media visuals, and event media works are being prepared for upload.</p>
               <p className="text-[10px] font-black uppercase tracking-widest text-brand-mist/10">Archive In Progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* BrandAs Method */}
      <section id="method" className="py-32">
        <div className="container mx-auto px-6">
          <SectionHeading 
            badge="The Protocol"
            title="How we package your brand for the digital world."
            subtitle="A systematic approach to moving your business from scattered to premium."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />
            
            {[
              { step: '01', title: 'Decode', desc: 'We audit your current presence to identify exactly where the trust is breaking.', icon: Search },
              { step: '02', title: 'Shape', desc: 'We design the visual identity and messaging that makes you look professional.', icon: Zap },
              { step: '03', title: 'Build', desc: 'We engineer the websites and systems that turn visitors into fans.', icon: Code2 },
              { step: '04', title: 'Launch', desc: 'We deploy and refine your new digital package for the world to see.', icon: MessageCircle }
            ].map((method, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="relative z-10"
              >
                <div className="mb-8 w-16 h-16 rounded-2xl bg-brand-royal flex items-center justify-center text-brand-accent shadow-xl border border-white/5 group hover:accent-gradient hover:text-white transition-all">
                  <method.icon size={28} />
                </div>
                <div className="text-5xl font-display font-black text-white/5 mb-4">{method.step}</div>
                <h3 className="text-xl font-display font-bold text-white mb-4">{method.title}</h3>
                <p className="text-brand-mist/40 text-sm leading-relaxed">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of Thinking */}
      <section className="py-32 relative bg-brand-royal/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
             <div className="inline-flex items-center gap-3 text-brand-primary font-black text-xs uppercase tracking-[0.3em] mb-4">
                <Cpu size={18} />
                <span>The Logic</span>
              </div>
             <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Not just design. <span className="text-brand-accent">Digital thinking.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "We clarify the message", desc: "Before we design a single button, we make sure people understand what you do in 5 seconds." },
              { title: "We shape the visual experience", desc: "We use colors, fonts, and layout to make your business feel premium and expensive." },
              { title: "We build the system around the goal", desc: "Every website we build is designed to trigger an action—booking, buying, or believing." }
            ].map((card, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-brand-deep border border-white/5 hover:border-brand-accent/20 transition-all group">
                 <h4 className="text-brand-accent font-black text-xs uppercase tracking-widest mb-6 border-b border-brand-accent/20 pb-4 inline-block">{i + 1}</h4>
                 <h3 className="text-2xl font-display font-bold text-white mb-6 group-hover:text-brand-accent transition-colors">{card.title}</h3>
                 <p className="text-brand-mist/40 text-base leading-relaxed italic">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Invitation */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/5 blur-[150px] -z-10" />
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[4rem] text-center border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              Your brand already has value.<br/>
              Let’s make people <span className="text-brand-accent italic">see it</span>.
            </h2>
            <p className="text-xl text-brand-mist/60 mb-12 italic font-medium leading-relaxed max-w-2xl mx-auto">
              Message BrandAs Media for websites, brand visuals, AI automation, digital systems, and growth-focused online presence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={MAIN_WHATSAPP_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 accent-gradient text-white rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-2xl shadow-brand-primary/30 hover:scale-105 active:scale-95 transition-all"
              >
                <MessageCircle size={18} />
                Message BrandAs Media
              </a>
              <a 
                href="#case-files"
                className="px-10 py-5 glass hover:bg-white/10 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all ring-1 ring-white/10"
              >
                <FileCode size={18} />
                Open Case Files
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-brand-deep relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <div className="text-2xl font-display font-black text-white mb-2 flex items-center gap-2">
                <span className="text-brand-accent">BrandAs</span> Media
              </div>
              <p className="text-sm text-brand-mist/30 font-medium">Building premium digital identity & AI systems.</p>
            </div>
            
            <div className="flex gap-10">
              {['Home', 'The Lab', 'Method', 'Connect'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase().replace(' ', '-')}`} 
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-mist/40 hover:text-brand-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="text-brand-mist/20 text-[10px] font-black uppercase tracking-widest">
              © {new Date().getFullYear()} BrandAs Media Digital Lab. All Locked.
            </div>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
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
