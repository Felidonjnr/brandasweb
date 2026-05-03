import { Variants } from 'motion/react';

export const LIQUID_TRANSITION = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
  restDelta: 0.001
};

export const SMOOTH_TRANSITION = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1]
};

export const FADE_UP_VARIANTS: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      ...LIQUID_TRANSITION,
      duration: 1
    }
  }
};

export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const BLUR_REVEAL_VARIANTS: Variants = {
  hidden: { 
    opacity: 0, 
    filter: "blur(20px)",
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const HOVER_LIFT = {
  hover: { 
    y: -10,
    scale: 1.02,
    transition: LIQUID_TRANSITION
  },
  tap: { 
    scale: 0.98,
    transition: LIQUID_TRANSITION
  }
};

export const FLOAT_ANIMATION = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const HUD_GLOW = "0 0 20px rgba(46,168,255,0.5)";
