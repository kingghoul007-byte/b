'use client';

import { motion } from 'framer-motion';

interface MemoryCardProps {
  image: string;
  caption: string;
  index: number;
  objectPosition?: string;
}

/**
 * MemoryCard Component
 * Displays a memory image with caption and hover effects
 */
export function MemoryCard({ image, caption, index, objectPosition = 'center' }: MemoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-lg h-56 mb-4 cursor-pointer">
        <img
          src={image}
          alt={caption}
          loading="lazy"
          style={{ objectPosition }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-pink-400/25 group-hover:bg-pink-400/10 transition-all duration-500" />
        <div className="shimmer-effect absolute inset-0 group-hover:opacity-0 transition-opacity" />
      </div>
      <p
        className="text-center font-semibold text-gray-700 text-lg"
        style={{ fontFamily: 'var(--font-dancing)' }}
      >
        {caption}
      </p>
    </motion.div>
  );
}
