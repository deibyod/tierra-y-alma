import React from 'react';
import styles from './Hero.module.scss';

export default function Hero({ email, setEmail, handleSubmit, subscribed, error }) {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-bg']}>
        <img
          src="https://picsum.photos/id/1015/1920/1080"
          alt="Café Batará - Cultivo sostenible"
          loading="lazy"
        />
      </div>
      <div className={styles['hero-content']}>
        <h1>Café Batará</h1>
        <h2>Café sombrío de altura</h2>
        <p>
          Un café amigable con las aves, cultivado bajo árboles nativos por familias caficultoras en Colombia.
        </p>
        {!subscribed ? (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              required
            />
            <button type="submit">Suscribirme</button>
          </form>
        ) : (
          <div className={styles.success}>¡Gracias por suscribirte! Te avisaremos pronto.</div>
        )}
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.social}>
          <a href="https://instagram.com/tierrayalma" target="_blank" rel="noopener noreferrer">
            @tierrayalma
          </a>
          <span className="dot">·</span>
          <a href="https://instagram.com/Bataracafedelaunion" target="_blank" rel="noopener noreferrer">
            @Bataracafedelaunion
          </a>
        </div>
      </div>
    </section>
  );
}