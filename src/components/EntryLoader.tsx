import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

interface EntryLoaderProps {
  onComplete: () => void;
  key?: string;
}

export const EntryLoader = ({ onComplete }: EntryLoaderProps) => {
  const [phase, setPhase] = useState<'initial' | 'shrinking' | 'rising' | 'revealing' | 'message' | 'complete'>('initial');
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    // 0.0s - 1.0s: Circle appears and glows (initial)
    const t1 = setTimeout(() => setPhase('shrinking'), 1000);
    // 1.0s - 1.8s: Circle shrinks into a dot
    const t2 = setTimeout(() => setPhase('rising'), 1800);
    // 1.8s - 3.4s: Dot rises upward (Extended to 1.6s for visibility)
    const t3 = setTimeout(() => setPhase('revealing'), 3400);
    // 3.4s - 4.2s: BrandAs Media appears
    const t4 = setTimeout(() => setPhase('message'), 4200);
    // 4.2s - 6.2s: Supporting line appears and stays
    const t5 = setTimeout(() => setPhase('complete'), 6200);
    // Final transition
    const t6 = setTimeout(() => {
      if (!isSkipped) onComplete();
    }, 7000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete, isSkipped]);

  if (isSkipped) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(15px)' }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-[#071A3D] flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0A3D91_0%,_transparent_75%)] opacity-40 shrink-0" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <AnimatePresence mode="popLayout">
        {/* The Core Ascension Logic */}
        {(phase === 'initial' || phase === 'shrinking' || phase === 'rising') && (
          <motion.div
            key="ascension-container"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: phase === 'initial' ? 1 : 0.04, 
              opacity: phase === 'rising' ? [1, 1, 0] : 1,
              y: phase === 'rising' ? -400 : 0
            }}
            transition={{ 
              scale: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
              y: { duration: 1.6, ease: [0.34, 1.56, 0.64, 1] }, // Added a slight "overshoot" for cinematic feel
              opacity: { duration: 1.6, times: [0, 0.85, 1] }
            }}
            className="relative flex items-center justify-center shrink-0"
          >
            <div className={`
              ${phase === 'initial' ? 'w-72 h-72 border-2' : 'w-6 h-6'} 
              rounded-full border-brand-accent transition-all duration-1000 flex items-center justify-center 
              bg-brand-accent backdrop-blur-md shadow-[0_0_80px_rgba(46,168,255,0.6)]
            `}>
              {phase === 'initial' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="text-center"
                >
                   <span className="text-white text-2xl font-display font-bold tracking-widest block">BrandAs</span>
                   <span className="text-brand-accent text-xs font-black uppercase tracking-[0.4em] opacity-50">Media Lab</span>
                </motion.div>
              )}
            </div>

            {/* Subtle Ascension Trail */}
            {phase === 'rising' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: [0, 0.5, 0], height: 500, y: 250 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-t from-transparent via-brand-accent to-white shadow-[0_0_20px_rgba(46,168,255,1)]"
              />
            )}
          </motion.div>
        )}

        {/* Brand Information Reveal */}
        {(phase === 'revealing' || phase === 'message' || phase === 'complete') && (
          <div className="flex flex-col items-center max-w-3xl px-8 w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-center w-full"
            >
              <h1 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                BrandAs <span className="text-brand-accent">Media</span>
              </h1>
              
              <AnimatePresence>
                {(phase === 'message' || phase === 'complete') && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="space-y-12"
                  >
                    <div className="w-16 h-[2px] bg-brand-accent/30 mx-auto" />
                    <p className="text-brand-mist/70 font-medium text-xl md:text-2xl leading-relaxed max-w-xl mx-auto italic">
                      "Your brand is not weak. It just needs better packaging."
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Final Reveal Action */}
            {phase === 'complete' && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => onComplete()}
                className="mt-20 px-14 py-5 accent-gradient text-white rounded-full text-xs font-black uppercase tracking-[0.4em] shadow-[0_0_40px_rgba(46,168,255,0.2)] hover:scale-105 active:scale-95 transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10">Enter Digital Lab</span>
              </motion.button>
            )}
          </div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 flex flex-col gap-2 opacity-20">
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ width: 0 }}
            animate={{ width: [0, 60, 0] }}
            transition={{ duration: 5, delay: i * 0.8, repeat: Infinity }}
            className="h-[1px] bg-brand-accent"
          />
        ))}
      </div>

      <button 
        onClick={() => {
          setIsSkipped(true);
          onComplete();
        }}
        className="absolute bottom-10 right-10 text-[10px] font-black uppercase tracking-[0.4em] text-brand-mist/20 hover:text-white transition-colors group flex items-center gap-3"
      >
        <span className="w-6 h-[1px] bg-brand-mist/20 group-hover:bg-white transition-all" />
        Skip Cinematic Intro
      </button>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] pointer-events-none" />
    </motion.div>
  );
};
