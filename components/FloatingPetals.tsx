'use client';

import { useEffect } from 'react';

const PETALS = ['🌸', '🌹', '✨'];
const PETAL_INTERVAL = 400;
const PETAL_DURATION_MIN = 5000;
const PETAL_DURATION_VAR = 3000;

/**
 * FloatingPetals Component
 * Creates falling petal/emoji animations across the screen
 */
export function FloatingPetals() {
  useEffect(() => {
    let isActive = true;
    const activePetals = new Set<HTMLDivElement>();

    const createPetal = () => {
      if (!isActive) return;

      const petal = document.createElement('div');
      const randomPetal = PETALS[Math.floor(Math.random() * PETALS.length)];

      petal.textContent = randomPetal;
      petal.setAttribute('role', 'presentation');
      petal.setAttribute('aria-hidden', 'true');

      Object.assign(petal.style, {
        position: 'fixed',
        left: `${Math.random() * 100}%`,
        top: '-50px',
        fontSize: '2rem',
        opacity: '0.6',
        pointerEvents: 'none',
        zIndex: '10',
        userSelect: 'none',
        transition: 'all 0.3s ease-out',
      });

      document.body.appendChild(petal);
      activePetals.add(petal);

      const duration = PETAL_DURATION_MIN + Math.random() * PETAL_DURATION_VAR;
      const startTime = Date.now();

      const animate = () => {
        if (!isActive) {
          petal.remove();
          activePetals.delete(petal);
          return;
        }

        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;

        if (progress < 1) {
          const newTop = progress * window.innerHeight;
          const newOpacity = Math.max(0, 0.6 - progress * 0.6);

          petal.style.top = `${newTop}px`;
          petal.style.opacity = String(newOpacity);

          requestAnimationFrame(animate);
        } else {
          petal.remove();
          activePetals.delete(petal);
        }
      };

      requestAnimationFrame(animate);
    };

    const interval = setInterval(createPetal, PETAL_INTERVAL);

    return () => {
      isActive = false;
      clearInterval(interval);
      activePetals.forEach((petal) => petal.remove());
    };
  }, []);

  return null;
}
