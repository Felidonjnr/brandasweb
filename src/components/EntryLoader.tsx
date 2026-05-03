import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LIQUID_TRANSITION, SMOOTH_TRANSITION } from '../lib/motion';

interface EntryLoaderProps {
  onComplete: () => void;
  key?: string;
}

export const EntryLoader = ({ onComplete }: EntryLoaderProps) => {
  const [phase, setPhase] = useState<'initial' | 'shrinking' | 'rising' | 'revealing' | 'message' | 'complete'>('initial');
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    // 0.0s - 1.2s: Initial emergence
    const t1 = setTimeout(() => setPhase('shrinking'), 1200);
    // 1.2s - 2.0s: Viscous shrink
    const t2 = setTimeout(() => setPhase('rising'), 2000);
    // 2.0s - 3.8s: Liquid ascension
    const t3 = setTimeout(() => setPhase('revealing'), 3800);
    // 3.8s - 4.6s: Brand manifest
    const t4 = setTimeout(() => setPhase('message'), 4600);
    // 4.6s - 6.8s: Message resonance
    const t5 = setTimeout(() => setPhase('complete'), 6800);
    
    const t6 = setTimeout(() => {
      if (!isSkipped) onComplete();
    }, 7800);

    return () => {
      [t1, t2, t3, t4, t5, t6].forEach(clearTimeout);
    };
  }, [onComplete, isSkipped]);

  if (isSkipped) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.05, 
        filter: 'blur(20px)',
        transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
      }}
      className="fixed inset-0 z-[100] bg-[#071A3D] flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambience - Slower, more viscous motion */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0A3D91_0%,_transparent_75%)] shrink-0" 
      />
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <AnimatePresence mode="popLayout">
        {(phase === 'initial' || phase === 'shrinking' || phase === 'rising') && (
          <motion.div
            key="ascension-container"
            initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
            animate={{ 
              scale: phase === 'initial' ? 1 : 0.05, 
              opacity: phase === 'rising' ? [1, 1, 0] : 1,
              filter: 'blur(0px)',
              y: phase === 'rising' ? -450 : 0
            }}
            transition={{ 
              scale: { duration: 1, ease: [0.76, 0, 0.24, 1] },
              y: { duration: 1.8, ease: [0.34, 1.56, 0.64, 1] },
              opacity: { duration: 1.8, times: [0, 0.8, 1] },
              filter: { duration: 1 }
            }}
            className="relative flex items-center justify-center shrink-0"
          >
            <div className={`
              ${phase === 'initial' ? 'w-80 h-80 border-[0.5px]' : 'w-8 h-8'} 
              rounded-full border-brand-accent/50 transition-all duration-1000 flex items-center justify-center 
              bg-brand-accent backdrop-blur-xl shadow-[0_0_100px_rgba(46,168,255,0.4)]
            `}>
              {phase === 'initial' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
                  className="text-center"
                >
                   <span className="text-white text-3xl font-display font-bold tracking-[0.2em] block mb-1">BrandAs</span>
                   <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.6em] opacity-40">Digital Lab</span>
                </motion.div>
              )}
            </div>

            {phase === 'rising' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: [0, 0.6, 0], height: 600, y: 300 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-t from-transparent via-brand-accent to-white shadow-[0_0_20px_rgba(46,168,255,0.8)]"
              />
            )}
          </motion.div>
        )}

        {(phase === 'revealing' || phase === 'message' || phase === 'complete') && (
          <div className="flex flex-col items-center max-w-4xl px-8 w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40, filter: 'blur(15px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center w-full"
            >
              <h1 className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/30">
                BrandAs <span className="text-brand-accent">Media</span>
              </h1>
              
              <AnimatePresence>
                {(phase === 'message' || phase === 'complete') && (
                  <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="space-y-16"
                  >
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: 80 }}
                      className="h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto" 
                    />
                    <p className="text-brand-mist/80 font-medium text-2xl md:text-3xl leading-relaxed max-w-2xl mx-auto italic tracking-tight">
                      "Your brand is not weak. It just needs better packaging."
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {phase === 'complete' && (
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => onComplete()}
                className="mt-24 px-16 py-6 accent-gradient text-white rounded-full text-xs font-black uppercase tracking-[0.4em] shadow-[0_0_50px_rgba(46,168,255,0.2)] hover:scale-105 active:scale-95 transition-all relative overflow-hidden group border border-white/10"
              >
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                <span className="relative z-10">Enter Digital Lab</span>
              </motion.button>
            )}
          </div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-12 left-12 flex flex-col gap-3 opacity-20">
        {[...Array(4)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ width: 0 }}
            animate={{ width: [0, 80, 0] }}
            transition={{ duration: 6, delay: i * 1, repeat: Infinity, ease: "easeInOut" }}
            className="h-[1px] bg-brand-accent"
          />
        ))}
      </div>

      <button 
        onClick={() => {
          setIsSkipped(true);
          onComplete();
        }}
        className="absolute bottom-12 right-12 text-[10px] font-black uppercase tracking-[0.5em] text-brand-mist/20 hover:text-white transition-all group flex items-center gap-4 overflow-hidden"
      >
        <motion.span 
          animate={{ x: [-100, 0] }} 
          className="w-8 h-[1px] bg-brand-mist/20 group-hover:bg-white" 
        />
        Skip Intro
      </button>

      <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px] pointer-events-none" />
    </motion.div>
  );
};

