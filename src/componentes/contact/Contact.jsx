import styles from "../SignUp/signup.module.css";
import { Form } from "../Share";
import { contactInputs } from "../../Helpers/FormInputs";
import RegisterValidation from "../../Helpers/FormValidations/RegisterValidation";

const Contact = () => {
  return (
    <div className={`min-h-full ${styles.fullContainer}`}>
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
      <div className="bg-white flex flex-col lg:w-1/2 w-4/5 lg:h-full rounded-l-xl lg:p-24">
        <div className="pb-12 hidden lg:flex lg:flex-col">
            <h1 className="text-6xl">Contacto</h1>
            <p className="text text-2xl text-[#575757]">Estamos para ayudarte, déjanos tu duda</p>
        </div>
        <section >
            <Form fields={contactInputs} schema={RegisterValidation} buttonText="Enviar" showWithRS={false} />
        </section>
      </div>
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

export default Contact;
