import React from 'react';
import styles from './Testimonials.module.scss';

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container mx-auto px-6">
        <h2 className={styles.title}>Lo que dicen quienes lo han probado</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.text}>“El mejor aroma que he sentido en un café. Realmente limpio y vibrante.”</p>
            <p className={styles.author}>— Camila R., Fotógrafa viajera</p>
          </div>
          <div className={styles.card}>
            <p className={styles.text}>“No solo amo el sabor, amo la historia detrás de cada taza.”</p>
            <p className={styles.author}>— Andrés L., Chef sostenible</p>
          </div>
          <div className={styles.card}>
            <p className={styles.text}>“Me encanta saber que estoy ayudando a proteger la naturaleza mientras bebo café.”</p>
            <p className={styles.author}>— Valentina G., Consumidora responsable</p>
          </div>
        </div>
      </div>
    </section>
  );
}