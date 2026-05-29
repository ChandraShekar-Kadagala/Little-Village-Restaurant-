'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import styles from './Hero.module.css';
import { Button } from './ui/Button';

const Starfield = dynamic(() => import('./Starfield'), { 
  ssr: false,
  loading: () => <div style={{width: '100%', height: '100%'}}></div>
});

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image 
          src="/hero/unnamed (4).jpg" 
          alt="Little Village Premium Dining" 
          fill
          priority
          className={styles.image}
        />
      </div>
      <div className={styles.overlay} />
      
      <div className={styles.canvasContainer}>
        <Starfield />
      </div>

      <div className={styles.content}>
        <motion.h1 
          className={styles.headline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Where Every Meal <br />
          <span className="text-gradient">Feels Like Home</span>
        </motion.h1>
        
        <motion.p 
          className={styles.subheadline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Authentic Andhra Flavours • Premium Family Dining Experience
        </motion.p>
        
        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Button 
            variant="primary" 
            onClick={() => document.getElementById('full-menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Menu
          </Button>
          <Button 
            variant="secondary"
            onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Reserve Table
          </Button>
        </motion.div>

        <motion.div 
          className={styles.floatingStats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className={styles.statItem}>
            <span className={styles.statValue}>4.2</span>
            <span className={styles.statLabel}>Rating</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>12k+</span>
            <span className={styles.statLabel}>Reviews</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>11:30</span>
            <span className={styles.statLabel}>Open Until PM</span>
          </div>
        </motion.div>
      </div>

    </section>
  );
};
