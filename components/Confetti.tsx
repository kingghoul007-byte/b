'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface ConfettiItem {
  id: number;
  left: number;
  delay: number;
}

interface ConfettiProps {
  confetti: ConfettiItem[];
}

const CONFETTI_COLORS = ['#f0a8d8', '#e1c7eb', '#d4a5d4', '#f5d5e8'];

/**
 * Confetti Component
 * Renders animated confetti particles
 */
export function Confetti({ confetti }: ConfettiProps) {
  return (
    <AnimatePresence>
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          className="fixed w-2 h-2 rounded-full pointer-events-none"
          style={{
            backgroundColor: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
            left: `${50 + item.left}%`,
            top: '50%',
          }}
          initial={{
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            y: Math.random() * 300 - 150,
            x: Math.random() * 300 - 150,
            opacity: 0,
            scale: 0,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 2,
            delay: item.delay,
            ease: 'easeOut',
          }}
          role="presentation"
          aria-hidden="true"
        />
      ))}
    </AnimatePresence>
  );
}
