'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Car, Map, Sun, Wind } from 'lucide-react';
import styles from './DiningExperience.module.css';

export const DiningExperience = () => {
  return (
    <section id="ambience" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading 
          title={<>A Luxurious <br/><span>Atmosphere</span></>}
          subtitle="The Ambience"
        />

        <div className={styles.layout}>
          <motion.div 
            className={styles.mainImageWrapper}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="/images/ambience/unnamed (3).jpg" 
              alt="Spacious Dining Area" 
              fill 
              className={styles.image}
            />
          </motion.div>
          <div className={styles.secondaryImages}>
            <motion.div 
              className={styles.secondaryImageWrapper}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image 
                src="/images/ambience/unnamed 4.jpg" 
                alt="Premium Ambience" 
                fill 
                className={styles.image}
              />
            </motion.div>
            <motion.div 
              className={styles.secondaryImageWrapper}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image 
                src="/images/ambience/unnamed.jpg" 
                alt="Outdoor Layout" 
                fill 
                className={styles.image}
              />
            </motion.div>
          </div>
        </div>

        <div className={styles.featuresGrid}>
          {[
            { icon: Wind, title: "Outdoor Seating", desc: "Enjoy your meal under the open sky." },
            { icon: Car, title: "Drive Through", desc: "Quick and convenient pickup options." },
            { icon: Map, title: "Highway Access", desc: "Easy access from the main service road." },
            { icon: Sun, title: "Spacious Dining", desc: "Ample room for large families and groups." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              className={styles.feature}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={styles.featureIcon}>
                <item.icon size={36} strokeWidth={1.5} />
              </div>
              <h4 className={styles.featureTitle}>{item.title}</h4>
              <p className={styles.featureDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
