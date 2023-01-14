import styles from "./table.module.css";

import { checkIcon, planes } from "../../../Helpers/Table";

const Table = ({ plan }) => {
  const beneficios = [
    {
      titulo: "Lorem ipsus",
      basic: plan === "basic" ? true : false,
      pro: plan === "pro" ? true : false,
      proPlus: plan === "proPlus" ? true : false,
    },
    {
      titulo: "Lorem ipsus",
      basic: plan === "basic" ? true : false,
      pro: plan === "pro" ? true : false,
      proPlus: plan === "proPlus" ? true : false,
    },
    {
      titulo: "Lorem ipsus",
      basic: plan === "basic" ? true : false,
      pro: plan === "pro" ? true : false,
      proPlus: plan === "proPlus" ? true : false,
    },
    {
      titulo: "Lorem ipsus",
      basic: plan === "basic" ? true : false,
      pro: plan === "pro" ? true : false,
      proPlus: plan === "proPlus" ? true : false,
    },
    {
      titulo: "Lorem ipsus",
      basic: plan === "basic" ? true : false,
      pro: plan === "pro" ? true : false,
      proPlus: plan === "proPlus" ? true : false,
    },
    {
      titulo: "Lorem ipsus",
      basic: plan === "basic" ? true : false,
      pro: plan === "pro" ? true : false,
      proPlus: plan === "proPlus" ? true : false,
    },
  ];

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr className={styles.firstRow}>
            <th className={styles.firstTableHeader}>
              Elegi tu plan, el que mas se amolde a tus necesidades
            </th>
            {planes.map((item, index) => {
              return (
                <th
                  key={index}
                  className={
                    plan === item.type ? styles.active : styles.inactive
                  }
                >
                  <div className={styles.thInfoContainer}>
                    <h3>{item.titulo}</h3>
                    <p>{item.descripcion}</p>
                    <h4>
                      {item.precio}
                      <span>/mensual</span>
                    </h4>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
      </table>
      <table className={styles.table}>
        <caption className={styles.fullTableRow}>Coberturas</caption>
        <tbody>
          {beneficios.map((beneficio, index) => {
            return (
              <tr className="flex w-full" key={index}>
                <td className={`flex-1 p-1 ${styles.tableBox}`}>
                  {beneficio.titulo}
                </td>
                <td
                  className={`flex-1 text-center ${styles.tableBox} ${
                    !beneficio.basic && styles.inactive
                  }`}
                >
                  {beneficio.basic ? checkIcon : ""}
                </td>
                <td
                  className={`flex-1 text-center ${styles.tableBox} ${
                    !beneficio.pro && styles.inactive
                  }`}
                >
                  {beneficio.pro ? checkIcon : ""}
                </td>
                <td
                  className={`flex-1 text-center ${styles.tableBox} ${
                    !beneficio.proPlus && styles.inactive
                  }`}
                >
                  {beneficio.proPlus ? checkIcon : ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className={styles.table}>
        <caption className={styles.fullTableRow}>Riesgos</caption>
        <tbody>
          {beneficios.map((beneficio, index) => {
            return (
              <tr className="flex w-full" key={index}>
                <td className={`flex-1 p-1 ${styles.tableBox}`}>
                  {beneficio.titulo}
                </td>
                <td
                  className={`flex-1 text-center ${styles.tableBox} ${
                    !beneficio.basic && styles.inactive
                  }`}
                >
                  {beneficio.basic ? checkIcon : ""}
                </td>
                <td
                  className={`flex-1 text-center ${styles.tableBox} ${
                    !beneficio.pro && styles.inactive
                  }`}
                >
                  {beneficio.pro ? checkIcon : ""}
                </td>
                <td
                  className={`flex-1 text-center ${styles.tableBox} ${
                    !beneficio.proPlus && styles.inactive
                  }`}
                >
                  {beneficio.proPlus ? checkIcon : ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
