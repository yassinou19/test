import React from 'react';
import { motion } from 'framer-motion';

interface ScrollStackProps {
  items: React.ReactNode[];
}

const ScrollStack: React.FC<ScrollStackProps> = ({ items }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '100vh', padding: '10vh 0' }}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            height: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'sticky',
            top: '10vh'
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollStack;
