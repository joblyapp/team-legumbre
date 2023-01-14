import styles from "./service.module.css";
import { useState } from "react";
import { Table } from "../index";

const Seguros = ({ source, title, description }) => {
  const [plan, setPlan] = useState("basic");

  return (
    <div className={`relative z-10 ${styles.fullContainer}`}>
      <img
        src={"/imagenes/service-wave.svg"}
        alt="decorative wave"
        className="w-full h-auto absolute top-0 left-0 z-0"
      />
      <section className={styles.heroImage}>
        <picture className="w-full h-full">
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
      <section className={styles.middleTitle}>
        <h3>Paquetes y coberturas</h3>
      </section>
      <section className={`${styles.buttons} relative z-20`}>
        <button
          className={`${
            plan === "basic" ? styles.active : styles.inactive
          } flex justify-center items-center px-5 py-2`}
          onClick={() => setPlan("basic")}
        >
          Básico
        </button>
        <button
          className={`${
            plan === "pro" ? styles.active : styles.inactive
          } flex justify-center items-center px-5 py-2`}
          onClick={() => setPlan("pro")}
        >
          Pro
        </button>
        <button
          className={`${
            plan === "proPlus" ? styles.active : styles.inactive
          } flex justify-center items-center px-5 py-2`}
          onClick={() => setPlan("proPlus")}
        >
          Pro +
        </button>
      </section>
      <section className="w-full flex-col">
        <Table plan={plan} />
      </section>
    </div>
  );
};

export default Seguros;
