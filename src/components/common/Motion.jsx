import { motion } from "framer-motion";

export const MotionBox = motion.div;

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});

export const stagger = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

export const childFadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};
