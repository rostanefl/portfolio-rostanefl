import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/">Home</Link></li>
          <li className={styles.navItem}><Link href="/projects">Projects</Link></li>
          <li className={styles.navItem}><Link href="/contact">Contact</Link></li>
          <li className={styles.navItem}><Link href="/testimonials">Testimonials</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
