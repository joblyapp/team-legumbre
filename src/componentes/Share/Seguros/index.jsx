import styles from "./service.module.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeroImage, PlanButtons, Table } from '../index';

const Seguros = ({ source, title, description }) => {
  const [plan, setPlan] = useState("basic");
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className={`relative z-10 ${styles.fullContainer}`}>
      <img
        src={"/imagenes/service-wave.svg"}
        alt="decorative wave"
        className="w-full h-auto absolute top-0 left-0 z-0"
      />
      <HeroImage source={source} title={title} description={description} />
      <section className={styles.middleTitle}>
        <h3>Paquetes y coberturas</h3>
      </section>
      <PlanButtons plan={plan} setPlan={setPlan} />
      <section className="w-full flex-col">
        <Table plan={plan} />
      </section>
      <Link
        to={`${pathname.includes('auto') ? "/servicios/auto/cotizar" : "/"}`}
        className={`flex w-full sm:py-4 py-3 rounded-[20px] justify-center bg-[var(--color-blue-light)] text-[var(--color-blue-marine)] text-2xl sm:text-4xl font-[Roboto]`}
      >
        ¡Cotizá ahora!
      </Link>
    </div>
  );
};

export default Seguros;
