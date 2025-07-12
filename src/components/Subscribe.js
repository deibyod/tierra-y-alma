import React from 'react';
import styles from './Subscribe.module.scss';

export default function Subscribe({ email, setEmail, handleSubmit, subscribed, error }) {
  return (
    <section id="subscribe" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>¡Suscríbete y forma parte del viaje!</h2>
        <p className={styles.subtitle}>
          Recibe notificaciones cuando el café Batará esté disponible en Chile. Únete a nuestra comunidad y entérate de nuestros próximos pasos.
        </p>
        {!subscribed ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className={styles.input}
              required
            />
            <button
              type="submit"
              className={styles.button}
            >
              Suscribirme
            </button>
          </form>
        ) : (
          <p className={styles.success}>¡Gracias por suscribirte! Te avisaremos pronto.</p>
        )}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </section>
  );
}