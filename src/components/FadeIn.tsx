import { motion, useInView } from 'motion/react';
import { useRef, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'none';
  key?: any;
}

export function FadeIn({ children, delay = 0, className = '', direction = 'up' }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const initialY = direction === 'up' ? 30 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: initialY }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
