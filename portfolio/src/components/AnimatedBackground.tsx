import { motion, useReducedMotion } from 'framer-motion';
import React, { useEffect, useMemo, useState } from 'react';

const AnimatedBackground: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const gridLines = useMemo(() => {
    const count = isMobile ? 8 : 15;
    return Array.from({ length: count }, (_, i) => {
      const horizontal = i % 2 === 0;
      return {
        id: i,
        isHorizontal: horizontal,
        color: i % 3 === 0 ? 'blue' : 'purple',
        delay: i * 0.35,
        duration: 12 + (i % 4),
        position: (i + 1) * (100 / (count + 1)),
      };
    });
  }, [isMobile]);

  const nodes = useMemo(() => {
    const count = isMobile ? 6 : 14;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: ((i * 17) % 90) + 5,
      y: ((i * 29) % 88) + 6,
      size: (i % 3) + 2,
      color: i % 2 === 0 ? 'blue' : 'purple',
      delay: i * 0.25,
      duration: 8 + (i % 5),
    }));
  }, [isMobile]);

  const connections = useMemo(
    () =>
      nodes.slice(0, -1).map((node, i) => ({
        id: i,
        from: node,
        to: nodes[i + 1],
      })),
    [nodes],
  );

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, var(--theme-bg), var(--theme-surface-strong))' }}>
      {/* Base grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,116,139,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.10)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Animated neon lines */}
      {gridLines.map((line) => (
        <motion.div
          key={line.id}
          className={`absolute ${line.isHorizontal ? 'h-[1px] w-full' : 'w-[1px] h-full'
            } ${line.color === 'blue'
              ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.35)]'
              : 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.35)]'
            }`}
          initial={{
            opacity: 0,
            [line.isHorizontal ? 'top' : 'left']: `${line.position}%`,
          }}
          animate={
            reduceMotion
              ? { opacity: 0.12 }
              : {
                  opacity: [0, 0.28, 0],
                  [line.isHorizontal ? 'top' : 'left']: [
                    `${line.position}%`,
                    `${line.position + (line.isHorizontal ? 100 : -100)}%`,
                  ],
                }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: line.duration,
                  repeat: Infinity,
                  delay: line.delay,
                  ease: 'linear',
                }
          }
        />
      ))}

      {/* Neural network connections (SVG layer) */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {connections.map((conn) => (
          <motion.line
            key={conn.id}
            x1={`${conn.from.x}%`}
            y1={`${conn.from.y}%`}
            x2={`${conn.to.x}%`}
            y2={`${conn.to.y}%`}
            stroke={conn.from.color === 'blue' ? '#3b82f6' : '#a855f7'}
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={reduceMotion ? { opacity: 0.15 } : { opacity: [0, 0.2, 0] }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    duration: 6,
                    repeat: Infinity,
                    delay: conn.id * 0.3,
                    ease: 'easeInOut',
                  }
            }
          />
        ))}
      </svg>

      {/* Neural network nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className={`absolute rounded-full ${node.color === 'blue'
            ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]'
            : 'bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]'
            }`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
          }}
          animate={
            reduceMotion
              ? { opacity: 0.25, scale: 1 }
              : {
                  opacity: [0.2, 0.65, 0.2],
                  scale: [1, 1.25, 1],
                }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: node.duration,
                  repeat: Infinity,
                  delay: node.delay,
                  ease: 'easeInOut',
                }
          }
        />
      ))}

      {/* Glowing orbs for depth */}
      <motion.div
        animate={reduceMotion ? { opacity: 0.18, scale: 1 } : { scale: [1, 1.12, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={reduceMotion ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-3xl"
      />
      <motion.div
        animate={reduceMotion ? { opacity: 0.18, scale: 1 } : { scale: [1.1, 1, 1.1], opacity: [0.3, 0.45, 0.3] }}
        transition={reduceMotion ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-3xl"
      />
    </div>
  );
};

export default AnimatedBackground;
