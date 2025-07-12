import React from 'react';
import styles from './Location.module.scss';

export default function Location({ LocationIcon }) {
  return (
    <section className={styles.section}>
      <div className="container mx-auto px-6">
        <h2 className={styles.title}>Ubicación del cultivo</h2>
        <p className={styles.text}>
          El café se cultiva en Vereda La Unión, Fusagasugá, Cundinamarca, Colombia — corazón de la región cafetalera andina.
        </p>
        <div className={styles.flexCenter}>
          <div className={styles.card}>
            <LocationIcon className={styles.icon} />
            <h3 className={styles.subtitle}>Vereda La Unión</h3>
            <p className={styles.location}>Fusagasugá, Cundinamarca, Colombia</p>
            <p className={styles.altitude}>Zona cafetalera Andina · Altitud: 1.600 msnm</p>
            <div className={styles.mapWrapper}>
              <iframe
                title="Ubicación Café Batará"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.013393137469!2d-74.379195!3d4.343889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f2e2e2e2e2e2e%3A0x123456789abcdef!2sVereda%20La%20Uni%C3%B3n%2C%20Fusagasug%C3%A1%2C%20Cundinamarca%2C%20Colombia!5e0!3m2!1ses-419!2scl!4v1688765432101!5m2!1ses-419!2scl"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '0.75rem', marginTop: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}