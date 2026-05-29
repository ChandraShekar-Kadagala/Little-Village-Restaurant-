'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import styles from './Location.module.css';

export const Location = () => {
  return (
    <section id="location" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.info}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading 
            title={<>Visit <span>Us</span></>}
            subtitle="Location & Hours"
            align="left"
          />

          <div className={styles.infoItem}>
            <MapPin className={styles.icon} size={24} />
            <div>
              <h4 className={styles.label}>Address</h4>
              <p className={styles.text}>
                Service Road, Mangalagiri<br />
                Chinnakakani, Andhra Pradesh 522508
              </p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <Phone className={styles.icon} size={24} />
            <div>
              <h4 className={styles.label}>Phone</h4>
              <p className={styles.text}>09010038444</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <Clock className={styles.icon} size={24} />
            <div>
              <h4 className={styles.label}>Operating Hours</h4>
              <p className={styles.text}>Everyday: 6:00 AM – 11:30 PM</p>
            </div>
          </div>

          <div className={styles.buttons}>
            <a href="https://maps.app.goo.gl/ifc2v8LVCyev8v3N6" target="_blank" rel="noreferrer">
              <Button variant="primary">Get Directions</Button>
            </a>
            <a href="https://www.swiggy.com/city/vijayawada/little-village-mangalagiri-rest1236843" target="_blank" rel="noreferrer">
              <Button variant="secondary">Order on Swiggy</Button>
            </a>
          </div>
        </motion.div>

        <motion.div 
          className={styles.mapWrapper}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe 
            src="https://maps.google.com/maps?q=Hotel+Little+Village+Mangalagiri&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            className={styles.map}
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};
