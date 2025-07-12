import React from 'react';
import styles from './FutureProjects.module.scss';

export default function FutureProjects({ CoffeeIcon, StoreIcon, TreeIcon }) {
  return (
    <section className={styles.section}>
      <div className="container mx-auto px-6 tierra-alma-container">
        <h2 className={styles.title}>¿Hacia dónde vamos?</h2>
        <p className={styles.text}>
          Batará es solo un gran comienzo. En Tierra & Alma tenemos grandes planes.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <CoffeeIcon className={styles.icon + " text-amber-800"} />
            <h3 className={styles.cardTitle}>Más cafés sostenibles</h3>
            <p className={styles.cardText}>Planeamos colaborar con más productores de diferentes regiones cafetaleras.</p>
          </div>
          <div className={styles.card}>
            <StoreIcon className={styles.icon + " text-amber-800"} />
            <h3 className={styles.cardTitle}>Nuestra propia cafetería</h3>
            <p className={styles.cardText}>Imaginamos espacios físicos donde servir café con historia y conexión real.</p>
          </div>
          <div className={styles.card}>
            <TreeIcon className={styles.icon + " text-green-600"} />
            <h3 className={styles.cardTitle}>Impacto sostenible</h3>
            <p className={styles.cardText}>Queremos ser un modelo de comercio justo y conservación ambiental.</p>
          </div>
        </div>
      </div>
    </section>
  );
}