import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/">Home</Link></li>
          <li className={styles.navItem}><Link to="/projects">Projects</Link></li>
          <li className={styles.navItem}><Link to="/contact">Contact</Link></li>
          <li className={styles.navItem}><Link to="/testimonials">Testimonials</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
