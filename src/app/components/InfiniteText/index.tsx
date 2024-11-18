"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const InfiniteText = () => {
  const [itemsNeeded, setItemsNeeded] = useState(4); // Valor inicial padrão

  useEffect(() => {
    const itemWidth = 400;
    const screenWidth = window.innerWidth;
    setItemsNeeded(Math.ceil((screenWidth * 1.5) / itemWidth));

    const handleResize = () => {
      setItemsNeeded(Math.ceil((window.innerWidth * 1.5) / itemWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [`0%`, `-50%`],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {/* Primeiro conjunto */}
        <div className="flex">
          {[...Array(itemsNeeded)].map((_, i) => (
            <div key={`group-${i}`} className="flex">
              <span
                className="mx-8 text-7xl font-bold tracking-tight"
                style={{
                  WebkitTextStroke: '2px #2563eb',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Nekcy
              </span>
              <span
                className="mx-8 text-7xl font-bold tracking-tight text-blue-600"
              >
                Nekcy
              </span>
            </div>
          ))}
        </div>
        {/* Duplicata para continuidade */}
        <div className="flex">
          {[...Array(itemsNeeded)].map((_, i) => (
            <div key={`group-dup-${i}`} className="flex">
              <span
                className="mx-8 text-7xl font-bold tracking-tight"
                style={{
                  WebkitTextStroke: '2px #2563eb',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Nekcy
              </span>
              <span
                className="mx-8 text-7xl font-bold tracking-tight text-blue-600"
              >
                Nekcy
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default InfiniteText;