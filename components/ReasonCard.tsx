'use client';

import { motion } from 'framer-motion';

interface ReasonCardProps {
  emoji: string;
  text: string;
  index: number;
}

/**
 * ReasonCard Component
 * Displays a reason why they're special with emoji and text
 */
export function ReasonCard({ emoji, text, index }: ReasonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="group"
    >
      <div
        className="bg-linear-to-br from-pink-100/80 to-purple-100/80 backdrop-blur-sm rounded-2xl p-8 text-center h-full shadow-lg hover:shadow-xl transition-shadow border border-pink-200/50 group-hover:border-pink-300"
        role="article"
        aria-label={text}
      >
        <div className="text-5xl mb-4" aria-hidden="true">
          {emoji}
        </div>
        <p className="text-lg font-semibold text-gray-700">{text}</p>
      </div>
    </motion.div>
  );
}
