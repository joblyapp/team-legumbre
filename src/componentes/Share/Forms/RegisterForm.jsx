import styles from './form.module.css';
import { useForm } from 'react-hook-form';
import { Button, InputForm } from '../index';

const RegisterForm = () => {

  const { handleSubmit, register } = useForm();

  const registerData = data => console.log(data);

  return (
    <div className={styles.fullContainer}>
      <form onSubmit={handleSubmit(registerData)} className={styles.form}>
        <InputForm name={'fullName'} placeholder={'Ej: Tomas Hernandez'} label={'Nombre Completo'} register={register} />
        <InputForm name={'dob'} type={'date'} label={'Fecha de nacimiento'} register={register} />
        <InputForm name={'email'} placeholder={'Ej: example@gmail.com'} label={'Email'} register={register} />
        <InputForm name={'password'} placeholder={'Ingresa contraseña'} label={'Contraseña'} register={register} />
        <InputForm name={'confirmPassword'} placeholder={'Confirmar contraseña'} label={'Confirmar contraseña'} register={register} />
        <InputForm name={'location'} placeholder={'Ej: Tandil, Buenos Aires, Argentina'} label={'Ciudad de residencia'} register={register} />
        <InputForm name={'zip'} placeholder={'Ej: 7000'} label={'Código postal'} register={register} />
        <div className={styles.policity}>
          <InputForm name={'policity'} type={'checkbox'} register={register} />
          <p>Acepto los <a>términos de uso y condiciones</a></p>
        </div>
        <div className={styles.buttonContainer}>
          <Button type={'submit'}>Registrarse</Button>
        </div>
        <p>O accede mediante</p>
        <div className={styles.socialContainer}>
          google facebook apple
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
