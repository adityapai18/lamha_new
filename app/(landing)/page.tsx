// This file will be moved to app/(landing)/page.tsx
'use client';
import React from 'react';
import styles from './Landing.module.css';

export default function HomePage() {
  return (
    <main className={styles.landingMain}>
      {/* Background image for desktop only */}
      <div className={styles.background} />
      {/* Stacked images for mobile only */}
      <div className={styles.mobileImagesOnly}>
        <img src="/location2.jpg" alt="Lamhaa Location 2" className={styles.mobileImage} />
        <img src="/location3.jpg" alt="Lamhaa Location 3" className={styles.mobileImage} />
        <img src="/location4.jpg" alt="Lamhaa Location 4" className={styles.mobileImage} />
      </div>
      {/* About us message below images */}
      <div className={styles.aboutMessage}>
        <span className={styles.aboutText}>
          Experience flavourful desi moments and authentic Indian cuisine in a warm, elegant setting.
          <br />
          Celebrate, dine, and create memories at Lamhaa.
        </span>
      </div>
    </main>
  );
}
