import HeroImage from "../HeroImage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../InputForm";
import {
  quoteCarInputsStep1,
  quoteCarInputsStep2,
} from "../../../Helpers/FormInputs";

const QuoteCarForm = () => {
  const [formStep, setFormStep] = useState(1);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const sendForm = (data) => {
    formStep === 1 && setFormStep(formStep + 1);
    console.log(data);
  };

  return (
    <div
      className={`flex flex-row flex-wrap content-start gap-6 px-10 py-8 min-w-full min-h-[125vh] bg-[var(--color-green-base)] font-[Roboto]`}
    >
      <HeroImage
        source={"auto"}
        title={"Seguro Automotores"}
        description={
          "Permitinos dejarte tranquilo, nosotros nos encargamos de la seguridad de tu auto"
        }
      />
      <form
        className={`flex w-full bg-white p-9`}
        onSubmit={handleSubmit(sendForm)}
      >
        <div className="basis-1/2 flex flex-wrap gap-4">
          <h2 className="text-[48px] leading-[56px]">
            {formStep === 1 && "Contanos un poco sobre vos"}
            {formStep === 2 && "Contanos un poco sobre tu vehículo"}
          </h2>
          <p className="text-2xl text-[var(--color-grey-letter)]">
            Necesitamos un poco de información para darte una cotización
            acertada
          </p>
          <div className="basis-[100%] flex flex-wrap justify-between items-center gap-6">
            {formStep === 1 &&
              quoteCarInputsStep1.map((input, index) => {
                const { name, type, label, placeholder, basis } = input;

                return (
                  <div className={`${basis} flex`} key={index}>
                    <InputForm
                      register={register}
                      name={name}
                      type={type}
                      label={label}
                      placeholder={placeholder}
                    />
                  </div>
                );
              })}
            {formStep === 2 &&
              quoteCarInputsStep2.map((input, index) => {
                const { name, type, label, placeholder, basis } = input;

                return (
                  <div className={`${basis} flex`} key={index}>
                    <InputForm
                      register={register}
                      name={name}
                      type={type}
                      label={label}
                      placeholder={placeholder}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="basis-1/2 h-full flex items-end content-end justify-center">
          <button
            type="submit"
            className="flex items-center justify-center py-4 w-[80%] text-4xl rounded-[20px] bg-[var(--color-blue-light)] text-[var(--color-blue-marine)]"
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteCarForm;
