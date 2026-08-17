import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] via-fuchsia-500 to-indigo-500 origin-left z-50 shadow-[0_0_12px_rgba(124,58,237,0.8)]"
      style={{ scaleX }}
    />
  );
};
