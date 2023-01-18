import styles from './styles.module.css';

const HeroImage = ({ source, title, description }) => {
  return (
    <section className={`${styles.heroImage}`}>
        <picture className="w-full h-fit">
          <source
            srcSet={`/imagenes/servicios/${source}-mobile.png`}
            media="(max-width: 1023px)"
          />
          <img
            src={`/imagenes/servicios/${source}-desktop.png`}
            alt={`Portada de ${source || "servicio"}`}
            className="w-full"
          />
        </picture>
        <div className={styles.heroInfo}>
          <h2 className={styles.heroTitle}>{title || "Título del Servicio"}</h2>
          {description && (
            <p className={styles.heroDescription}>
              {description || "Descripción del servicio a prestar"}
            </p>
          )}
        </div>
      </section>
  );
};

export default HeroImage;
