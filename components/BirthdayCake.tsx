'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface BirthdayCakeProps {
  onBlowCandles: () => void;
}

const CANDLE_COUNT = 3;
const RESET_DELAY = 3000;

/**
 * BirthdayCake Component
 * Interactive birthday cake with animated candles and flames
 */
export function BirthdayCake({ onBlowCandles }: BirthdayCakeProps) {
  const [candles, setCandles] = useState(Array(CANDLE_COUNT).fill(true));

  const handleBlowCandles = () => {
    setCandles(Array(CANDLE_COUNT).fill(false));
    onBlowCandles();
    setTimeout(() => setCandles(Array(CANDLE_COUNT).fill(true)), RESET_DELAY);
  };

  const allCandlesOut = candles.every((c) => !c);

  return (
    <motion.div
      className="relative w-32 h-40 mx-auto cursor-pointer group"
      onClick={handleBlowCandles}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleBlowCandles();
        }
      }}
      aria-label="Birthday cake, click to blow out candles"
    >
      {/* Candles */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex gap-3">
        {candles.map((isLit, i) => (
          <motion.div key={i} className="flex flex-col items-center">
            {/* Flame */}
            {isLit && (
              <motion.div
                className="w-2 h-6 rounded-full"
                style={{
                  background: 'linear-gradient(180deg, #ffeb3b 0%, #ff9800 100%)',
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                aria-hidden="true"
              />
            )}
            {/* Candle stick */}
            <div className="w-1 h-6 bg-amber-100 rounded-full" aria-hidden="true" />
          </motion.div>
        ))}
      </div>

      {/* Cake */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 w-32 h-24 bg-linear-to-b from-pink-300 to-pink-400 rounded-3xl shadow-lg border-4 border-pink-300 group-hover:shadow-xl transition-shadow"
        animate={{
          y: allCandlesOut ? [0, -5, 0] : 0,
        }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      >
        {/* Frosting decoration */}
        <div className="absolute top-2 left-2 w-4 h-4 bg-pink-200 rounded-full opacity-50" />
        <div className="absolute top-2 right-4 w-3 h-3 bg-purple-200 rounded-full opacity-50" />
        <div className="absolute bottom-4 left-4 w-5 h-5 bg-pink-200 rounded-full opacity-50" />
      </motion.div>
    </motion.div>
  );
}
