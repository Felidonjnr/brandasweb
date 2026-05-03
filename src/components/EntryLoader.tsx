import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

interface EntryLoaderProps {
  onComplete: () => void;
  key?: string;
}

export const EntryLoader = ({ onComplete }: EntryLoaderProps) => {
  const [phase, setPhase] = useState<'initial' | 'shrinking' | 'rising' | 'revealing' | 'loading' | 'complete'>('initial');
  const [progress, setProgress] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    // Phase 1: Initial (0s - 1.2s) - Circle appears
    const t1 = setTimeout(() => setPhase('shrinking'), 1200);
    // Phase 2: Shrinking (1.2s - 2.2s) - Scales down to dot
    const t2 = setTimeout(() => setPhase('rising'), 2200);
    // Phase 3: Rising (2.2s - 3.2s) - Dot moves up
    const t3 = setTimeout(() => setPhase('revealing'), 3200);
    // Phase 4: Revealing (3.2s - 4.7s) - BrandAs & Supporting Line
    const t4 = setTimeout(() => setPhase('loading'), 4700);
    // Phase 5: Loading (4.7s - 6.5s) - Progress line
    const t5 = setTimeout(() => setPhase('complete'), 6500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  useEffect(() => {
    if (phase === 'loading') {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 1;
        });
      }, 40);
      return () => clearInterval(timer);
    }
  }, [phase]);

  const floatingLabels = [
    { text: "Websites", top: "20%", left: "15%" },
    { text: "Media", top: "25%", right: "20%" },
    { text: "AI Automation", bottom: "30%", left: "20%" },
    { text: "Case Files", bottom: "25%", right: "15%" },
    { text: "Digital Growth", top: "50%", right: "10%" },
  ];

  if (isSkipped) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-[#071A3D] flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0A3D91_0%,_transparent_70%)] opacity-40 shrink-0" />
      
      {/* Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Cinematic Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              x: [Math.random() * 1000 - 500, Math.random() * 1000 - 500],
              y: [Math.random() * 1000 - 500, Math.random() * 1000 - 500]
            }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full bg-brand-cyan/20 w-1 h-1"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        {/* Phase 1 & 2: The Glowing Circle & Dot Transformation */}
        {(phase === 'initial' || phase === 'shrinking' || phase === 'rising') && (
          <motion.div
            key="intro-dot"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: phase === 'initial' ? 1 : 0.05, 
              opacity: phase === 'rising' ? [1, 0.5, 0] : 1, // Fade out as it rises
              y: phase === 'rising' ? -350 : 0
            }}
            transition={{ 
              scale: { duration: 1, ease: [0.76, 0, 0.24, 1] },
              y: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.8, delay: 0.4 }
            }}
            className="relative flex items-center justify-center shrink-0"
          >
            {/* The Circle */}
            <div className={`
              ${phase === 'initial' ? 'w-64 h-64 border-2' : 'w-4 h-4'} 
              rounded-full border-brand-accent transition-all duration-1000 flex items-center justify-center 
              bg-brand-accent/5 backdrop-blur-sm shadow-[0_0_50px_rgba(46,168,255,0.4)]
            `}>
              {phase === 'initial' && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white text-xl font-display font-bold tracking-widest text-center px-4"
                >
                  Your Brand.
                </motion.span>
              )}
            </div>

            {/* Light Trail (Leaving a "graph" line behind) */}
            {phase === 'rising' && (
              <motion.div 
                initial={{ opacity: 0, height: 0, scaleX: 0.5 }}
                animate={{ opacity: [0, 0.6, 0], height: 400, scaleX: 1, y: 200 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-t from-transparent via-brand-accent to-brand-cyan shadow-[0_0_20px_rgba(46,168,255,1)]"
              />
            )}
          </motion.div>
        )}

        {/* Phase 4 & 5: Brand Reveal & Loading */}
        {(phase === 'revealing' || phase === 'loading' || phase === 'complete') && (
          <div className="flex flex-col items-center max-w-2xl px-6 w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center w-full"
            >
              <div className="mb-2 flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse shadow-[0_0_8px_rgba(46,168,255,1)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-mist/30">System Initialized</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter mb-4">
                BrandAs <span className="text-brand-accent">Media</span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-brand-mist/60 italic font-medium text-lg md:text-xl leading-relaxed mb-12"
              >
                "Your brand is not weak. It just needs better packaging."
              </motion.p>
            </motion.div>

            {/* System Loading UI */}
            {phase !== 'revealing' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full space-y-10"
              >
                {/* Progress Bar */}
                <div className="relative h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="absolute h-full bg-gradient-to-r from-brand-primary to-brand-cyan shadow-[0_0_15px_rgba(46,168,255,0.8)]"
                  />
                </div>

                {/* Floating Meta Labels */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {floatingLabels.map((label, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: phase === 'loading' ? progress > (idx * 20) ? 1 : 0.2 : 0 }}
                      className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-center"
                    >
                      <span className="text-[8px] font-black uppercase tracking-widest text-brand-mist/40">{label.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Enter Button vs Auto Reveal */}
            {(phase === 'complete' || progress === 100) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-16 flex flex-col items-center gap-4"
              >
                <button
                  onClick={() => onComplete()}
                  className="px-12 py-5 accent-gradient text-white rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(46,168,255,0.3)] hover:scale-105 active:scale-95 transition-all group overflow-hidden relative"
                >
                  <span className="relative z-10">Enter the Digital Lab</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                <p className="text-[9px] font-bold text-brand-mist/20 uppercase tracking-widest animate-pulse">Connection Secured • Press to reveal</p>
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>

      {/* Background Decorative Accents */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/2 left-0 w-32 h-[1px] bg-gradient-to-r from-brand-accent to-transparent"
      />
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
        className="absolute top-1/2 right-0 w-32 h-[1px] bg-gradient-to-l from-brand-cyan to-transparent"
      />

      {/* Skip Intro */}
      <button 
        onClick={() => {
          setIsSkipped(true);
          onComplete();
        }}
        className="absolute bottom-10 right-10 text-[9px] font-black uppercase tracking-[0.4em] text-brand-mist/20 hover:text-white transition-colors flex items-center gap-2 group"
      >
        <span className="w-4 h-[1px] bg-brand-mist/20 group-hover:bg-white transition-colors" />
        Skip Cinematic Intro
      </button>

      {/* Ambient Glass Panel overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] pointer-events-none" />
    </motion.div>
  );
};
