import { Variants, Transition } from "framer-motion";

// ─── Fade Variants ────────────────────────────────────────────────────────────
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Stagger Containers ───────────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Hero Reveal ─────────────────────────────────────────────────────────────
export const heroReveal: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export const heroRevealDelay: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
  },
};

// ─── Float Animation ──────────────────────────────────────────────────────────
const floatTransition: Transition = {
  duration: 3.5,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export const floatAnimation = {
  y: [0, -12, 0],
  transition: floatTransition,
};

export const floatAnimationSlow = {
  y: [0, -8, 0],
  transition: { ...floatTransition, duration: 5 } as Transition,
};

// ─── Card Hover ───────────────────────────────────────────────────────────────
export const cardHover = {
  rest: { y: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" },
  hover: {
    y: -6,
    boxShadow: "0 20px 40px rgba(37,99,235,0.15)",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Page Transition ─────────────────────────────────────────────────────────
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Navbar ───────────────────────────────────────────────────────────────────
export const navbarVariants: Variants = {
  top: {
    backgroundColor: "rgba(248, 250, 252, 0)",
    backdropFilter: "blur(0px)",
    borderColor: "rgba(255,255,255,0)",
    boxShadow: "none",
  },
  scrolled: {
    backgroundColor: "rgba(248, 250, 252, 0.9)",
    backdropFilter: "blur(20px)",
    borderColor: "rgba(226,232,240,1)",
    boxShadow: "0 1px 20px rgba(0,0,0,0.08)",
  },
};
