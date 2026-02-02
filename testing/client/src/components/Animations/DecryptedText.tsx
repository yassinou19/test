import { useEffect, useState, useRef } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  className?: string;
  parentClassName?: string;
  animateOn?: 'view' | 'hover';
  [key: string]: any;
}

const DecryptedText = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  className = '',
  parentClassName = '',
  animateOn = 'view',
  ...props
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

  useEffect(() => {
    let interval: any;
    let iteration = 0;

    const startAnimation = () => {
      setIsAnimating(true);
      interval = setInterval(() => {
        setDisplayText(() =>
          text
            .split('')
            .map((char, index) => {
              if (index < iteration / maxIterations * text.length) {
                return text[index];
              }
              if (char === ' ') return ' ';
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        iteration++;
        if (iteration >= maxIterations * text.length) {
          clearInterval(interval);
          setIsAnimating(false);
          setDisplayText(text);
        }
      }, speed);
    };

    if (animateOn === 'view') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isAnimating) {
            startAnimation();
          }
        },
        { threshold: 0.1 }
      );

      if (textRef.current) observer.observe(textRef.current);
      return () => observer.disconnect();
    }

    return () => clearInterval(interval);
  }, [text, speed, maxIterations, animateOn]);

  return (
    <span ref={textRef} className={parentClassName} {...props}>
      <span className={className}>{displayText}</span>
    </span>
  );
};

export default DecryptedText;
