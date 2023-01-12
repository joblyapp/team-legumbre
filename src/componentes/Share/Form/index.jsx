import styles from "./form.module.css";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { Button, InputForm, SocialIcon } from "../index";

const Form = ({ schema, fields, buttonText }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    node: "onBlur",
    resolver: schema ? joiResolver(schema) : null,
  });

  const registerData = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(registerData)} className={styles.form}>
      {fields?.map((field) => {
        return (
          <InputForm
            name={field?.name}
            type={field?.type || 'text'}
            placeholder={field?.placeholder || null}
            label={field?.label || null}
            register={register}
            error={errors[field?.name]}
          />
        )
      })}
      <div className={styles.buttonContainer}>
        <Button type={"submit"}>{buttonText || "Enviar"}</Button>
      </div>
      <p>O accede mediante</p>
      <div className={styles.socialContainer}>
        <SocialIcon src={"/icons-svg/GoogleOriginal.svg"} alt={"Google icon"} />
        <SocialIcon
          src={"/icons-svg/FacebookOriginal.svg"}
          alt={"Facebook icon"}
        />
        <SocialIcon src={"/icons-svg/AppleOriginal.svg"} alt={"Apple icon"} />
      </div>
    </form>
  );
};

export default Form;
