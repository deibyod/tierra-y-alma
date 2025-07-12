import React, { useState } from 'react';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = () => setOpen(!open);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#top">Tierra & Alma</a>
      </div>
      <button
        className={`${styles.hamburger} ${open ? styles.open : ''}`}
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={handleNav}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`${styles.links} ${open ? styles.show : ''}`}>
        <li><a href="#about" onClick={handleLinkClick}>¿Qué es Café Batará?</a></li>
        <li><a href="#sustainability" onClick={handleLinkClick}>Sostenibilidad</a></li>
        <li><a href="#subscribe" onClick={handleLinkClick}>Suscríbete</a></li>
      </ul>
    </nav>
  );
}