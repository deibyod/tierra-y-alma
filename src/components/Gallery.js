import React from 'react';
import styles from './Gallery.module.scss';

export default function Gallery() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Descubre nuestro mundo cafetalero</h2>
        <div className={styles.grid}>
          <img src="https://picsum.photos/id/1016/600/400" alt="Finca Cafetalera" className={styles.img} />
          <img src="https://picsum.photos/id/1017/600/400" alt="Proceso de cosecha" className={styles.img} />
          <img src="https://picsum.photos/id/1018/600/400" alt="Secado del café" className={styles.img} />
          <img src="https://picsum.photos/id/1019/600/400" alt="Preparación del grano" className={styles.img} />
          <img src="https://picsum.photos/id/1020/600/400" alt="Empaque sostenible" className={styles.img} />
          <img src="https://picsum.photos/id/1021/600/400" alt="Equipo trabajando" className={styles.img} />
        </div>
      </div>
    </section>
  );
}