'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import styles from './Menu.module.css';

const menuPages = [
  "/menu/menu1.jpg",
  "/menu/menu2.jpg",
  "/menu/menu 3.jpg",
  "/menu/menu 4.jpg",
  "/menu/menu 5.jpg",
  "/menu/menu6.jpg",
  "/menu/menu 7.jpg",
  "/menu/menu 8.jpg",
  "/menu/menu 9.jpg",
  "/menu/menu 10.jpg",
  "/menu/menu 11.jpg",
  "/menu/menu 12.jpg",
];

export const Menu = () => {
  return (
    <section id="full-menu" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading 
          title={<>Explore Our <br/><span>Full Menu</span></>}
          subtitle="Culinary Delights"
        />
        
        <p className={styles.scrollHint}>Swipe or use Shift + Scroll to view full menu</p>

        <motion.div 
          className={styles.scrollContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {menuPages.map((src, idx) => (
            <div key={idx} className={styles.menuItem}>
              <Image 
                src={src} 
                alt={`Menu Page ${idx + 1}`} 
                fill 
                className={styles.image}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
