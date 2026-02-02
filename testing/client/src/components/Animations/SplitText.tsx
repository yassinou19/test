import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
}

const SplitText = ({
  text = '',
  className = '',
  delay = 0.05,
}: SplitTextProps) => {
  const letters = text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      } as any, // Cast to avoid strict union type mismatch in some versions
    },
  };

  return (
    <motion.p
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default SplitText;
