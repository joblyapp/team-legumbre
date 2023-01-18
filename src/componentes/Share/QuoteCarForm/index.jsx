import HeroImage from "../HeroImage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../InputForm";
import { joiResolver } from "@hookform/resolvers/joi";
import {
  quoteCarInputsStep1,
  quoteCarInputsStep2,
} from "../../../Helpers/FormInputs";
import QuoteCarValidation from "../../../Helpers/FormValidations/QuoteCarValidation";
import { PlanButtons, Table } from "../";

const QuoteCarForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [plan, setPlan] = useState("basic");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: joiResolver(QuoteCarValidation), node: "onBlur" });

  const sendForm = (data) => {
    setFormStep(formStep + 1);
    console.log(data);
  };

  return (
    <div
      className={`flex flex-row flex-wrap content-start gap-6 sm:px-10 sm:py-8 min-w-full min-h-[125vh] bg-[var(--color-green-base)] font-[Roboto]`}
    >
      <HeroImage
        source={"auto"}
        title={"Seguro Automotores"}
        description={
          "Permitinos dejarte tranquilo, nosotros nos encargamos de la seguridad de tu auto"
        }
      />
      <form
        className={`flex flex-wrap w-full gap-6 sm:gap-0 bg-white p-9`}
        onSubmit={handleSubmit(sendForm)}
      >
        <div
          className={`${
            formStep !== 3 ? "sm:basis-1/2 basis-[100%]" : "basis-[100%]"
          } flex flex-wrap gap-4`}
        >
          <h2 className="sm:text-[48px] sm:leading-[56px] text-2xl">
            {formStep === 1 && "Contanos un poco sobre vos"}
            {formStep === 2 && "Contanos un poco sobre tu vehículo"}
            {formStep === 3 && "¿Que plan se ajusta más a tus necesidades?"}
          </h2>
          <p className="sm:text-2xl text-lg text-[var(--color-grey-letter)]">
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
                      error={errors[name]}
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
                      error={errors[name]}
                    />
                  </div>
                );
              })}
            {formStep === 3 && (
              <>
                <PlanButtons plan={plan} setPlan={setPlan} />
                <Table plan={plan} />
              </>
            )}
          </div>
        </div>
        <div
          className={`${
            formStep === 3 && "hidden"
          } sm:basis-1/2 basis-[100%] sm:h-full flex items-end content-end justify-center`}
        >
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
