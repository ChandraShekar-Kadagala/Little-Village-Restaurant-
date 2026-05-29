'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore - Missing type declarations for maath
import * as random from 'maath/random/dist/maath-random.esm';
import styles from './Hero.module.css';
import { Button } from './ui/Button';

function StarBackground(props: any) {
  const ref = useRef<any>();
  const [sphere] = React.useState(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#D4AF37" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

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
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarBackground />
        </Canvas>
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
          <a href="#full-menu"><Button variant="primary">Explore Menu</Button></a>
          <a href="#location"><Button variant="secondary">Reserve Table</Button></a>
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
