import React from 'react';
import styles from './About.module.scss';

export default function About() {
  return (
    <section className={styles.section}>
      <div className="container mx-auto px-6 tierra-alma-container">
        <h2 className={styles.title}>¿Qué es Tierra & Alma?</h2>
        <p className={styles.text}>
          Somos una marca dedicada a conectar proyectos cafetaleros sostenibles con consumidores apasionados por el buen café y el impacto positivo.
        </p>
        <div className={styles.grid}>
          <div className={styles.content}>
            <p>
              <strong>Tierra & Alma</strong> nace con el propósito de construir puentes entre productores rurales y personas que buscan autenticidad, calidad y significado en lo que consumen.
            </p>
          </div>
          <div className={styles.content}>
            <p>
              Nuestro primer proyecto es <strong>Café Batará</strong>, pero no será el último. Buscamos seguir conectando historias auténticas, cultivos sostenibles y comunidades campesinas.
            </p>
          </div>
          <div className={styles.content}>
            <p>
              En el futuro, queremos llevar esta filosofía a nuevas regiones, nuevos cafés y quizás abrir nuestras propias cafeterías donde contar estas historias mientras servimos una taza única.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}