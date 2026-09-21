import React from 'react';
import { motion } from 'motion/react';

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const MotionSection: React.FC<MotionSectionProps> = ({ 
  children, 
  className = '',
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.5, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
