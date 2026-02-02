import React from 'react';
import { motion } from 'framer-motion';

interface CircularGalleryProps {
  items: string[];
}

const CircularGallery: React.FC<CircularGalleryProps> = ({ items }) => {
  const radius = 300;
  const count = items.length;

  return (
    <div style={{ 
      height: '600px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      perspective: '1000px',
      overflow: 'hidden'
    }}>
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          width: '200px',
          height: '280px',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              transform: `rotateY(${(i * 360) / count}deg) translateZ(${radius}px)`,
              borderRadius: '12px',
              overflow: 'hidden',
              border: '2px solid var(--accent-primary)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            <img src={item} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CircularGallery;
