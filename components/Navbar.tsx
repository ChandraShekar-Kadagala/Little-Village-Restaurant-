'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Image src="/logos/logo.png" alt="Little Village" width={180} height={60} />
        </Link>
        <div className={styles.links}>
          <Link href="#about" className={styles.link}>Story</Link>
          <Link href="#full-menu" className={styles.link}>Menu</Link>
          <Link href="#ambience" className={styles.link}>Ambience</Link>
          <Link href="#location" className={styles.link}>Location</Link>
        </div>
        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="#about" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Story</Link>
          <Link href="#full-menu" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Menu</Link>
          <Link href="#ambience" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Ambience</Link>
          <Link href="#location" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Location</Link>
        </div>
      )}
    </header>
  );
};
