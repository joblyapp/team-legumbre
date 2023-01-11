import styles from "./inputForm.module.css";

const InputForm = ({ name, type, label, placeholder, register, error }) => {
  console.log({error});
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={name} className={styles.child}>
          {label}
          {error && <p className={styles.withError}>{error?.message} *</p>}
        </label>
      )}
      <input
        id={name}
        className={`${styles.child} ${error ? styles.withError : null}`}
        type={type || "text"}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};

export default InputForm;
