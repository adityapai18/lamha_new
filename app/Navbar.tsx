'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarHeader}>
        <Link href="/" className={styles.logoLink}>
          <Image src="/Logo_2.jpg" alt="Lamhaa Logo" width={70} height={50} className={styles.logoImg} />
        </Link>
        <button
          onClick={() => setNavOpen(!navOpen)}
          className={styles.hamburger}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>
      <div className={styles.navLinks}>
        <Link href="/menu">Menu</Link>
        <Link href="/locations">Locations</Link>
        <Link href="/banquet">Private Events</Link>
      </div>
      {navOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/menu" onClick={() => setNavOpen(false)}>Menu</Link>
          <Link href="/locations" onClick={() => setNavOpen(false)}>Locations</Link>
          <Link href="/banquet" onClick={() => setNavOpen(false)}>Private Events</Link>
        </div>
      )}
    </nav>
  );
} 