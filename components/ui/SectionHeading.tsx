'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  className = '' 
}) => {
  return (
    <motion.div 
      className={`${styles.wrapper} ${styles[align]} ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {subtitle && (
        <motion.span 
          className={styles.subtitle}
          initial={{ opacity: 0, letterSpacing: '0px' }}
          whileInView={{ opacity: 1, letterSpacing: '3px' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {subtitle}
        </motion.span>
      )}
      <h2 className={styles.title}>{title}</h2>
    </motion.div>
  );
};
