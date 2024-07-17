import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Find me on <a href="https://github.com/yourusername">GitHub</a> and <a href="https://linkedin.com/in/yourusername">LinkedIn</a></p>
    </footer>
  );
}

export default Footer;
