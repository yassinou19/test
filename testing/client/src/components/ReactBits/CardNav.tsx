import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardNavProps {
  items: { id: string; title: string; content: React.ReactNode; icon: string }[];
}

const CardNav: React.FC<CardNavProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(items[0].id);

  return (
    <div style={{ display: 'flex', gap: '20px', height: '400px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ x: 5 }}
            onClick={() => setActiveTab(item.id)}
            style={{
              padding: '15px 25px',
              borderRadius: '12px',
              cursor: 'pointer',
              backgroundColor: activeTab === item.id ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'background-color 0.3s',
              minWidth: '200px'
            }}
          >
            <span>{item.icon}</span>
            <span style={{ fontWeight: 600 }}>{item.title}</span>
          </motion.div>
        ))}
      </div>
      <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '20px', padding: '30px', border: '1px solid var(--border)', overflow: 'hidden', position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {items.find(i => i.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CardNav;
