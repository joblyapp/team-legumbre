import styles from "./login.module.css";
import { Form } from "../Share";
import { loginInputs } from "../../Helpers/FormInputs";
import RegisterValidation from "../../Helpers/FormValidations/RegisterValidation";

const SignUp = () => {
  return (
    <div className={styles.fullContainer}>
      <picture className={styles.imgContainer}>
        <img className={styles.headerWave} src={`/imagenes/signup-wave.png`} />
        <source
          srcSet={`/imagenes/bg-signup-mobile.png`}
          media="(max-width: 1024px)"
        />
        <img src={`/imagenes/bg-signup-desktop.png`} />
        <div className={styles.info}>
          <h2>Fácil, cómodo y sencillo</h2>
          <p>
            Concéntrate en lo verdaderamente importante para vos, nosotros nos
            aseguramos de que todo salga bien
          </p>
        </div>
      </picture>
      <section className={styles.formContainer}>
        <Form fields={loginInputs} schema={RegisterValidation} buttonText="Registrarse" />
      </section>
      <picture className={styles.waveContainer}>
        <source
          srcSet={`/imagenes/signup-footer-wave-mobile.svg`}
          media="(max-width: 1023px)"
        />
        <img src={`/imagenes/signup-footer-wave-desktop.svg`} />
      </picture>
    </div>
  );
};

export default SignUp;
