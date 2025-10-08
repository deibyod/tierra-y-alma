import React from 'react';
import styles from './CallToAction.module.scss';

export default function CallToAction({ email, setEmail, handleSubmit, subscribed, error }) {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.title}>¿Te avisamos cuando llegue?</h2>
        <p className={styles.subtitle}>
          Se parte de una nueva experiencia
        </p>
        {!subscribed ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className={styles.input}
              required
            />
            <button type="submit" className={styles.button}>
              Suscribirme
            </button>
          </form>
        ) : (
          <div className={styles.success}>¡Gracias por sumarte! Pronto recibirás novedades.</div>
        )}
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </section>
  );
}