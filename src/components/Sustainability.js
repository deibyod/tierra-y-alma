import React from 'react';
import styles from './Sustainability.module.scss';

export default function Sustainability() {
  return (
    <section id="sustainability" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Aves, biodiversidad y sostenibilidad</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="https://picsum.photos/id/1012/600/400" alt="Aves en el cultivo" className={styles.img} />
            <h3 className={styles.cardTitle}>Hogar para las aves</h3>
            <p className={styles.cardText}>La plantación ofrece refugio a múltiples especies aviares gracias al sombrío natural.</p>
          </div>
          <div className={styles.card}>
            <img src="https://picsum.photos/id/1011/600/400" alt="Árboles nativos" className={styles.img} />
            <h3 className={styles.cardTitle}>Árboles nativos</h3>
            <p className={styles.cardText}>Cultivamos bajo árboles autóctonos, preservando el ecosistema local y fomentando la biodiversidad.</p>
          </div>
          <div className={styles.card}>
            <img src="https://picsum.photos/id/1014/600/400" alt="Economía local" className={styles.img} />
            <h3 className={styles.cardTitle}>Economía campesina</h3>
            <p className={styles.cardText}>Apoyamos comunidades locales, fortaleciendo la economía rural y respetando la cultura cafetera.</p>
          </div>
        </div>
      </div>
    </section>
  );
}