import Joi from "joi";

const actualYear = new Date().getUTCFullYear();
const actualMonth = new Date().getUTCMonth() + 1;
const actualDay = new Date().getUTCDate();
const mayority = `${actualMonth}-${actualDay}-${actualYear - 18}`;

const QuoteCarValidation = Joi.object({
  fullName: Joi.string()
    .regex(/^(([a-zA-Z])+\s+)+([a-zA-Z])+$/)
    .min(7)
    .max(30)
    .messages({
      "string.required": "Campo obligatorio.",
      "string.empty": "Campo obligatorio.",
      "string.pattern.base": "Ingrese un nombre válido.",
      "string.min": "Mínimo 7 caracteres.",
      "string.max": "Máximo 30 caracteres.",
    }),
  dob: Joi.date().less(`${mayority}`).required().messages({
    "any.empty": "Campo obligatorio.",
    "date.base": "Ingrese una fecha de nacimiento válida.",
    "date.less": "Debe ser mayor de 18 años.",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Campo obligatorio.",
      "any.required": "Campo obligatorio.",
      "string.email": "Ingrese un email válido.",
      "string.base": "Ingrese un email válido.",
    }),
  dni: Joi.string()
    .regex(/^([0-9])+$/)
    .min(7)
    .max(8)
    .messages({
      "string.empty": "Campo obligatorio.",
      "any.required": "Campo obligatorio.",
      "string.min": "Ingrese un D.N.I. válido.",
      "string.max": "Ingrese un D.N.I. válido.",
      "string.pattern.base": "Ingrese un D.N.I. válido (Sin puntos ni guiones)",
    }),
  tel: Joi.string()
    .regex(/^([0-9])+$/)
    .min(9)
    .max(12)
    .messages({
      "string.empty": "Campo obligatorio.",
      "any.required": "Campo obligatorio.",
      "string.min": "Ingrese un teléfono válido.",
      "string.max": "Ingrese un teléfono válido.",
      "string.pattern.base": "Ingrese un telefono válido (Sin espacios ni guiones)",
    }),
  carType: Joi.string().messages({
    "string.empty": "Campo obligatorio.",
    "any.required": "Campo obligatorio.",
  }),
  carModel: Joi.string().messages({
    "string.empty": "Campo obligatorio.",
    "any.required": "Campo obligatorio.",
  }),
  carYear: Joi.string().min(4).max(4).messages({
    "string.empty": "Campo obligatorio.",
    "any.required": "Campo obligatorio.",
    "string.min": "Ingrese un año válido.",
    "string.max": "Ingrese un año válido.",
  }),
  carUsagge: Joi.string().regex(/^([A-Za-z]+\s*)+$/).messages({
    "string.empty": "Campo obligatorio.",
    "any.required": "Campo obligatorio.",
    "string.pattern.base": "Ingrese un data válido (sin números ni caracteres especiales).",
  }),
});

export default QuoteCarValidation;
