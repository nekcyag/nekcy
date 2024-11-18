import React from 'react';
import { motion } from 'framer-motion';

interface InfiniteSliderProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({ 
  children, 
  direction = 'left', 
  speed = 20 
}) => {
  return (
    <div className="relative flex overflow-hidden py-3 group">
      <motion.div
        initial={{ x: direction === 'left' ? 0 : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : 0 }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
        className="flex flex-shrink-0 gap-3"
      >
        {children}
        {children}
      </motion.div>
      
      <motion.div
        initial={{ x: direction === 'left' ? '100%' : 0 }}
        animate={{ x: direction === 'left' ? 0 : '100%' }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
        className="flex flex-shrink-0 gap-3 absolute top-3 left-0"
      >
        {children}
        {children}
      </motion.div>

      {/* Gradientes mais suaves nas bordas */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10" />
    </div>
  );
};

export default InfiniteSlider; 