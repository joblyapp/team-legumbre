import styles from "./inputForm.module.css";

const InputForm = ({ name, type, label, placeholder, cols = 1, rows = 1, register, error }) => {
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={name} className={styles.child}>
          {label}
        </label>
      )}
      { type === 'textarea' ? 
        <textarea
           id={name} 
           cols={cols} 
           rows={rows} 
           className={`${styles.child} ${error ? styles.withError : null} border border-gray-400 rounded-lg`}
           placeholder={placeholder}
           {...register(name)}
           ></textarea>
       : 
        <input
          id={name}
          className={`${styles.child} ${error ? styles.withError : null}`}
          type={type || "text"}
          placeholder={placeholder}
          {...register(name)}
        />
       }
      {error && <p className={styles.withError}>{error?.message} *</p>}
    </div>
  );
};

export default InputForm;
