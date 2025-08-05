import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute w-full h-full pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`,
        }}
      >
        {/* Enhanced Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-sky-400/30 via-purple-500/20 to-amber-500/30 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-sky-400/30 via-purple-500/20 to-amber-500/30 rounded-full blur-3xl will-change-transform"
        />

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full will-change-transform ${i % 3 === 0 ? 'bg-sky-400/30' : i % 3 === 1 ? 'bg-purple-500/30' : 'bg-amber-500/30'}`}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * -50, null],
                x: [null, Math.random() * 50 - 25, null],
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Enhanced Noise Texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-20" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
