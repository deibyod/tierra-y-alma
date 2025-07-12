import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tierra & Alma</h2>
        <p className={styles.subtitle}>Conexión natural, corazón campesino</p>
        <div className={styles.social}>
          <a href="https://instagram.com/tierrayalma" target="_blank" rel="noopener noreferrer" className={styles.link}>
            @tierrayalma
          </a>
          <span className={styles.dot}>·</span>
          <a href="https://instagram.com/Bataracafedelaunion" target="_blank" rel="noopener noreferrer" className={styles.link}>
            @Bataracafedelaunion
          </a>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}