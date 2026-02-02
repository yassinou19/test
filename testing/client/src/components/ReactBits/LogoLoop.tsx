import React from 'react';
import { motion } from 'framer-motion';

interface LogoLoopProps {
  logos: string[];
}

const LogoLoop: React.FC<LogoLoopProps> = ({ logos }) => {
  return (
    <div style={{ overflow: 'hidden', width: '100%', padding: '40px 0' }}>
      <motion.div
        animate={{ x: [0, -1035] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ display: 'flex', gap: '80px', width: 'fit-content' }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} style={{ 
            fontSize: '24px', 
            fontWeight: 800, 
            color: 'var(--text-secondary)',
            opacity: 0.5,
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--accent-primary)', borderRadius: '8px' }} />
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;
