'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Quote, Star } from 'lucide-react';
import styles from './Reviews.module.css';

const reviews = [
  {
    text: "Food was too good and service was next level. Must visit.",
    author: "Google Local Guide"
  },
  {
    text: "Good food and biryani was too good. Nice ambience.",
    author: "Happy Customer"
  },
  {
    text: "One of the best places for spice lovers.",
    author: "Food Enthusiast"
  }
];

export const Reviews = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading 
          title={<>Loved by <br/><span>Thousands</span></>}
          subtitle="Testimonials"
        />

        <div className={styles.reviewsGrid}>
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Quote size={40} className={styles.quoteIcon} />
              <p className={styles.text}>&quot;{review.text}&quot;</p>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className={styles.author}>{review.author}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.statsContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.stat}>
            <span className={styles.statNum}>4.2</span>
            <span className={styles.statLabel}>Average Rating</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>12k+</span>
            <span className={styles.statLabel}>Happy Customers</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Authentic Taste</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
