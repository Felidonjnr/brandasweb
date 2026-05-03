import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

interface EntryLoaderProps {
  onComplete: () => void;
  key?: string;
}

export const EntryLoader = ({ onComplete }: EntryLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);

  const messages = [
    "Packaging your brand for the digital world...",
    "Aligning media, websites, and automation...",
    "Preparing selected case files...",
    "Entering the Digital Lab..."
  ];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    const messageTimer = setInterval(() => {
      setCurrentMessage(prev => (prev < messages.length - 1 ? prev + 1 : prev));
    }, 800);

    const autoRevealTimer = setTimeout(() => {
      if (!isSkipped) {
        onComplete();
      }
    }, 4500);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
      clearTimeout(autoRevealTimer);
    };
  }, [onComplete, isSkipped]);

  const floatingLabels = [
    { text: "Websites", top: "20%", left: "15%", delay: 0.2 },
    { text: "Media", top: "25%", right: "20%", delay: 0.4 },
    { text: "AI Automation", bottom: "30%", left: "20%", delay: 0.6 },
    { text: "Case Files", bottom: "25%", right: "15%", delay: 0.8 },
    { text: "Digital Growth", top: "50%", right: "10%", delay: 1.0 },
  ];

  if (isSkipped) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-[#071A3D] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0A3D91_0%,_transparent_70%)] opacity-50" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      
      {/* Mesh Gradient Anim */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-brand-primary/20 blur-[120px] rounded-full"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-brand-cyan/20 blur-[120px] rounded-full"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      {/* Floating Labels */}
      {floatingLabels.map((label, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 0.2, 0], y: [0, -20, 0] }}
          transition={{ duration: 4, delay: label.delay, repeat: Infinity }}
          className="absolute text-[10px] font-black uppercase tracking-[0.4em] text-brand-mist/40 pointer-events-none hidden md:block"
          style={{ top: label.top, left: label.left, right: label.right, bottom: label.bottom }}
        >
          {label.text}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-lg px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <motion.div 
            animate={{ 
              textShadow: ["0 0 0px rgba(46,168,255,0)", "0 0 20px rgba(46,168,255,0.5)", "0 0 0px rgba(46,168,255,0)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter mb-4"
          >
            BrandAs <span className="text-brand-accent">Media</span>
          </motion.div>
          <div className="h-1 w-24 bg-brand-accent mx-auto rounded-full shadow-[0_0_15px_rgba(46,168,255,0.8)]" />
        </motion.div>

        {/* Cinematic Progress */}
        <div className="w-full space-y-8">
          <div className="relative h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="absolute h-full bg-gradient-to-r from-brand-primary to-brand-cyan shadow-[0_0_10px_rgba(46,168,255,1)]"
            />
          </div>

          <div className="h-8 relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center text-brand-mist/40 text-[10px] font-black uppercase tracking-[0.3em]"
              >
                {messages[currentMessage]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Final Quote */}
        {progress > 80 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-brand-mist/60 italic font-medium text-lg leading-relaxed">
              "Your brand is not weak. It just needs better packaging."
            </p>
          </motion.div>
        )}

        {/* Enter Button */}
        {progress === 100 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => onComplete()}
            className="mt-12 px-10 py-4 accent-gradient text-white rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            Enter the Digital Lab
          </motion.button>
        )}
      </div>

      {/* Skip Option */}
      <button 
        onClick={() => {
          setIsSkipped(true);
          onComplete();
        }}
        className="absolute bottom-10 right-10 text-[10px] font-black uppercase tracking-widest text-brand-mist/20 hover:text-white transition-colors"
      >
        Skip Intro
      </button>

      {/* Decorative Streaks */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-brand-accent/20 to-transparent opacity-30" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-brand-cyan/20 to-transparent opacity-30" />
    </motion.div>
  );
};
