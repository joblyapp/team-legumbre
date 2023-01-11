import styles from "./inputForm.module.css";

const InputForm = ({ name, type, label, placeholder, register, error }) => {
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={name} className={styles.child}>
          {label}
        </label>
      )}
      <input
        id={name}
        className={`${styles.child} ${error ? styles.withError : null}`}
        type={type || "text"}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <p className={styles.withError}>{error?.message} *</p>}
    </div>
  );
};

export default InputForm;
