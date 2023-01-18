import styles from "./styles.module.css";
const PlanButtons = ({ plan, setPlan }) => {
  return (
    <section className={`${styles.buttons} relative z-20`}>
      <span
        type="button"
        className={`${
          plan === "basic" ? styles.active : styles.inactive
        } flex justify-center items-center px-5 py-2`}
        onClick={() => setPlan("basic")}
      >
        Básico
      </span>
      <span
        type="button"
        className={`${
          plan === "pro" ? styles.active : styles.inactive
        } flex justify-center items-center px-5 py-2`}
        onClick={() => setPlan("pro")}
      >
        Pro
      </span>
      <span
        type="button"
        className={`${
          plan === "proPlus" ? styles.active : styles.inactive
        } flex justify-center items-center px-5 py-2`}
        onClick={() => setPlan("proPlus")}
      >
        Pro +
      </span>
    </section>
  );
};

export default PlanButtons;
