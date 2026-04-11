import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant] = useState<'default' | 'hover'>('default');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      opacity: 1,
      height: 40,
      width: 40,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
    },
    hover: {
      opacity: 1,
      height: 100,
      width: 100,
      backgroundColor: 'transparent',
      border: '2px solid #fff',
      mixBlendMode: 'difference',
    },
  };

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        borderRadius: '50%',
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
      }}
    />
  );
};

export default CustomCursor;
