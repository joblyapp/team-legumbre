import styles from './styles.module.css';

const Loader = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center bg-white">
      <div className={styles.loaderContainer}>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderTraveler}></div>
      </div>
      <img src="/imagenes/signup-footer-wave-desktop.svg" alt="footer wave" className="absolute bottom-0 w-full h-fit" />
    </div>
  );
};

export default Loader;
