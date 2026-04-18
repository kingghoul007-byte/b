'use client';

import { motion } from 'framer-motion';
import { useCallback, useRef, useState } from 'react';
import { FloatingPetals } from '@/components/FloatingPetals';
import { MemoryCard } from '@/components/MemoryCard';
import { ReasonCard } from '@/components/ReasonCard';
import { Confetti } from '@/components/Confetti';
import { BirthdayCake } from '@/components/BirthdayCake';

interface Memory {
  caption: string;
  image: string;
}

interface MemorySection {
  title: string;
  memories: Memory[];
}

interface ReasonItem {
  emoji: string;
  text: string;
}

interface ConfettiItem {
  id: number;
  left: number;
  delay: number;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const heroEmoji = {
  animate: { y: [0, -20, 0] },
  transition: { duration: 3, repeat: Infinity },
};

const MEMORY_SECTIONS: MemorySection[] = [
  {
    title: 'Through The Years',
    memories: [
      {
        caption: 'The beginning of something beautiful',
        image: '/img-7.jpeg',
      },
      {
        caption: 'Growing stronger together',
        image: '/img-3.jpeg',
      },
      {
        caption: 'Unforgettable moments',
        image: '/img-5.jpeg',
      },
    ],
  },

  {
    title: 'All About You',
    memories: [
      {
        caption: 'Your smile that brightens every room',
        image: '/img-1.jpeg',
      },
      {
        caption: 'The confidence and grace you carry',
        image: '/img-2.jpeg',
      },
      {
        caption: 'The little moments that feel magical',
        image: '/img-8.jpeg',
      },
    ],
  },
];

const REASONS: ReasonItem[] = [
  { emoji: '✨', text: 'Your laugh is contagious' },
  { emoji: '💬', text: 'You always know what to say' },
  { emoji: '🎉', text: 'You make everything more fun' },
  { emoji: '🫂', text: "You're my safe place" },
  { emoji: '💛', text: 'You never judge me' },
  { emoji: '🌸', text: "You're genuinely one of a kind" },
];

/**
 * BirthdayPage Component
 * Main page component for the birthday celebration website
 */
export default function BirthdayPage() {
  const [confetti, setConfetti] = useState<ConfettiItem[]>([]);
  const confettiRef = useRef(0);

  const handleBlowCandles = useCallback(() => {
    const newConfetti: ConfettiItem[] = Array.from({ length: 50 }).map((_, _i) => ({
      id: confettiRef.current++,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
    }));
    setConfetti(newConfetti);
    setTimeout(() => setConfetti([]), 3000);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingPetals />
      <Confetti confetti={confetti} />

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-20"
        aria-label="Birthday greeting"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-3xl"
        >
          {/* Animated emoji */}
          <motion.div
            className="text-7xl sm:text-8xl mb-6 inline-block"
            {...heroEmoji}
            aria-hidden="true"
          >
            🌸
          </motion.div>

          {/* Main title with glow */}
          <motion.h1
            className="pulsing-glow text-5xl sm:text-7xl font-bold mb-6"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: '#d4a5d4',
              textShadow: '0 0 30px rgba(240, 168, 216, 0.3)',
            }}
          >
            Happy Birthday
          </motion.h1>

          <motion.p
            className="text-3xl sm:text-4xl mb-6 font-light"
            style={{
              fontFamily: 'var(--font-dancing)',
              color: '#f0a8d8',
            }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            My Best Friend 🌸
          </motion.p>

          <motion.p
            className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Today the world celebrates its best person
          </motion.p>

          <motion.div
            className="text-6xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            aria-hidden="true"
          >
            🎂
          </motion.div>
        </motion.div>
      </section>

      {/* Why You're My Person Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-20" aria-labelledby="why-heading">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          <h2
            id="why-heading"
            className="text-4xl sm:text-5xl font-bold mb-8 text-center"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: '#d4a5d4',
            }}
          >
            Why You&apos;re My Person
          </h2>

          <div
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-pink-200 shadow-lg"
            style={{
              backgroundColor: 'rgba(253, 248, 251, 0.8)',
            }}
          >
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
              Having you as my best friend is one of the greatest gifts life has ever given me. You
              show up on my worst days, laugh with me on the best ones, and somehow make ordinary
              moments feel magical. You&apos;ve seen me at my lowest and still chose to stay. You
              celebrate my wins like they&apos;re your own, and you never judge me for my mistakes.
              I don&apos;t know what I&apos;d do without you.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Reasons I Love You Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative z-20"
        aria-labelledby="reasons-heading"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <h2
            id="reasons-heading"
            className="text-4xl sm:text-5xl font-bold mb-12 text-center"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: '#d4a5d4',
            }}
          >
            Reasons I Love You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {REASONS.map((reason, index) => (
              <ReasonCard key={index} emoji={reason.emoji} text={reason.text} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Memory Gallery Sections */}
      {MEMORY_SECTIONS.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className="py-20 px-4 sm:px-6 lg:px-8 relative z-20"
          aria-labelledby={`memory-heading-${sectionIndex}`}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <h2
              id={`memory-heading-${sectionIndex}`}
              className="text-4xl sm:text-5xl font-bold mb-12 text-center"
              style={{
                fontFamily: 'var(--font-playfair)',
                color: '#d4a5d4',
              }}
            >
              {section.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {section.memories.map((memory, index) => (
                <MemoryCard
                  key={index}
                  image={memory.image}
                  caption={memory.caption}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </section>
      ))}

      {/* Make a Wish Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-20" aria-labelledby="wish-heading">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-2xl mx-auto text-center"
        >
          <h2
            id="wish-heading"
            className="text-4xl sm:text-5xl font-bold mb-12"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: '#d4a5d4',
            }}
          >
            Make a Wish 🕯️
          </h2>

          <p className="text-lg text-gray-600 mb-12">
            Click the cake to blow out the candles and make a wish!
          </p>

          <BirthdayCake onBlowCandles={handleBlowCandles} />

          <p className="text-sm text-gray-500 mt-12 italic">Don&apos;t forget to make a wish!</p>
        </motion.div>
      </section>

      {/* Letter Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative z-20"
        aria-labelledby="letter-heading"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          <div
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-pink-200 shadow-lg relative"
            style={{
              backgroundColor: 'rgba(253, 248, 251, 0.9)',
            }}
          >
            <h2
              id="letter-heading"
              className="text-5xl mb-6 text-pink-300"
              style={{ fontFamily: 'var(--font-dancing)' }}
            >
              Dear Best Friend,
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              I hope this birthday brings you even a fraction of the joy you bring to everyone
              around you. You deserve the world — and I want you to know that I&apos;ll always be
              cheering you on, celebrating your wins, and supporting you through everything. Your
              friendship has changed my life in ways I could never put into words. Thank you for
              being exactly who you are.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Here&apos;s to you, today and always. May your year be filled with adventures,
              laughter, and all the love you deserve.
            </p>

            <div className="text-2xl text-pink-400" style={{ fontFamily: 'var(--font-dancing)' }}>
              With all my love, <br />
              Your Best Friend 💖
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl text-gray-600"
          style={{ fontFamily: 'var(--font-dancing)' }}
        >
          Made with 💖 just for you
        </motion.p>
      </footer>
    </div>
  );
}





