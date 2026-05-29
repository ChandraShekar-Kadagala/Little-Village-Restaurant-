'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Maximize2 } from 'lucide-react';
import styles from './Gallery.module.css';

const images = [
  "/images/food/muttonbone soup.jpg",
  "/images/ambience/Screenshot 2026-05-29 160337.png",
  "/images/food/garlic naan.jpg",
  "/images/food/paneer butter masala.jpg",
  "/images/food/paneer bread.jpg",
  "/images/food/kaddai butter chicken.jpg",
  "/images/food/Asiani chicken curry.jpg",
];

export const Gallery = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading 
          title={<>A Visual <br/><span>Feast</span></>}
          subtitle="Gallery"
        />

        <div className={styles.masonry}>
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              className={styles.item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.2 }}
            >
              <Image 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                width={500} 
                height={500} 
                className={styles.image}
              />
              <div className={styles.overlay}>
                <Maximize2 size={32} className={styles.icon} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
