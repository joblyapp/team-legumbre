import styles from './inputForm.module.css';

const InputForm = ({ name, type, label, placeholder, register }) => {
  return (
    <div className={styles.container}>
      {label && <label htmlFor={name} className={styles.child}>{label}</label>}
      <input id={name} className={styles.child} type={type || 'text'} placeholder={placeholder} {...register(name)} />
    </div>
  );
};

export default InputForm;
