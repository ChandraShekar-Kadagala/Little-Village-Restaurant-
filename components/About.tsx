'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Utensils, Coffee, Users } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import styles from './About.module.css';

export const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="about" className={styles.about} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.images}>
          <motion.div style={{ y: y1 }} className={styles.imagePrimary}>
            <Image 
              src="/images/ambience/unnamed (1).jpg" 
              alt="Restaurant Ambience" 
              fill 
              className={styles.image}
            />
          </motion.div>
          <motion.div style={{ y: y2 }} className={styles.imageSecondary}>
            <Image 
              src="/images/ambience/unnamed (2).jpg" 
              alt="Dining Area" 
              fill 
              className={styles.image}
            />
          </motion.div>
        </div>

        <div className={styles.content}>
          <SectionHeading 
            title={<>A Legacy of <br/><span>Taste & Tradition</span></>}
            subtitle="Our Story"
            align="left"
          />
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nestled in the heart of Mangalagiri, Little Village Restaurant is more than just a dining destination—it&apos;s a celebration of authentic Andhra cuisine and warm hospitality. We bring families together over recipes that have been perfected through generations.
          </motion.p>

          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Every dish we serve is crafted with passion, from our signature Chicken Fry Biryani to our comforting South Indian breakfasts. We pride ourselves on creating a comfortable, premium environment where every guest feels at home.
          </motion.p>

          <div className={styles.features}>
            {[
              { icon: Heart, title: "Family Atmosphere", desc: "A cozy environment perfect for creating memories." },
              { icon: Utensils, title: "Authentic Taste", desc: "Traditional recipes with premium ingredients." },
              { icon: Coffee, title: "Consistency", desc: "The same great taste, every single time." },
              { icon: Users, title: "Hospitality", desc: "Service that makes you feel like royalty." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                className={styles.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + (idx * 0.1) }}
              >
                <div className={styles.iconWrapper}>
                  <feature.icon size={24} />
                </div>
                <div>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDesc}>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
