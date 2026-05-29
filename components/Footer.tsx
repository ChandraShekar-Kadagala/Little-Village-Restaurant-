'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image src="/logos/logo.png" alt="Little Village" width={180} height={60} />
            </Link>
            <p className={styles.brandDesc}>
              A premium dining experience in Mangalagiri offering authentic Andhra cuisine, 
              signature biryanis, and warm hospitality for your entire family.
            </p>
          </div>

          <div className={styles.column}>
            <h4>Quick Links</h4>
            <div className={styles.links}>
              <Link href="#about" className={styles.link}>Our Story</Link>
              <Link href="#menu" className={styles.link}>Full Menu</Link>
              <Link href="#experience" className={styles.link}>Dining Experience</Link>
              <Link href="#location" className={styles.link}>Reservations</Link>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Contact</h4>
            <div className={styles.links}>
              <span className={styles.link}>09010038444</span>
              <span className={styles.link}>6:00 AM – 11:30 PM</span>
              <a href="https://maps.app.goo.gl/ifc2v8LVCyev8v3N6" className={styles.link} target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Follow Us</h4>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon}><Instagram size={20} /></a>
              <a href="#" className={styles.socialIcon}><Facebook size={20} /></a>
              <a href="#" className={styles.socialIcon}><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Little Village Restaurant. All rights reserved.</p>
          <p>Designed with passion.</p>
        </div>
      </div>
    </footer>
  );
};
