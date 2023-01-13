import styles from "./service.module.css";
import { useState } from "react";
import { Table } from "../index";

const Seguros = ({ source }) => {
  const [plan, setPlan] = useState("basic");

  return (
    <div className={`relative z-10 ${styles.fullContainer}`}>
      <img
        src={"/imagenes/service-wave.svg"}
        alt="decorative wave"
        className="w-full h-auto absolute top-0 left-0 z-0"
      />
      <section className="relative flex">
        <picture className="w-full">
          <source
            srcSet={`/imagenes/servicios/${source}-mobile.png`}
            media="(max-width: 1024px)"
          />
          <img
            src={`/imagenes/servicios/${source}-desktop.png`}
            alt={`${source}`}
            className="w-full"
          />
        </picture>
        <h2 className="absolute top-0 left-0 p-4 flex-[1 1 50%]">Seguro</h2>
      </section>
      <section>
        <h3>Paquetes y coberturas</h3>
      </section>
      <section className={`${styles.buttons}`}>
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
