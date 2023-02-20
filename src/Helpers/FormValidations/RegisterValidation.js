import Joi from 'joi';

const actualYear = new Date().getUTCFullYear();
const actualMonth = new Date().getUTCMonth() + 1;
const actualDay = new Date().getUTCDate();
const mayority = `${actualMonth}-${actualDay}-${actualYear - 18}`;

const RegisterValidation = Joi.object({
  fullName: Joi.string()
    .required()
    .regex(/^(([a-zA-Z])+\s+)+([a-zA-Z])+$/)
    .min(7)
    .max(30)
    .messages({
      'string.required': 'Campo obligatorio.',
      'string.empty': 'Campo obligatorio.',
      'string.pattern.base': 'Ingrese un nombre válido.',
      'string.min': 'Mínimo 7 caracteres.',
      'string.max': 'Máximo 30 caracteres.',
    }),
  dob: Joi.date().less(`${mayority}`).required().messages({
    'any.required': 'Campo obligatorio.',
    'date.base': 'Ingrese una fecha de nacimiento válida.',
    'date.less': 'Debe ser mayor de 18 años.',
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Campo obligatorio.',
      'any.required': 'Campo obligatorio.',
      'string.email': 'Ingrese un email válido.',
      'string.base': 'Ingrese un email válido.',
    }),
  password: Joi.string().alphanum().required().min(8).max(30).messages({
    'string.empty': 'Campo obligatorio.',
    'any.required': 'Campo obligatorio.',
    'string.min': 'Mínimo 7 caracteres.',
    'string.max': 'Máximo 30 caracteres.',
    'any.only': 'Las contraseñas deben coincidir.',
  }),
  confirmPassword: Joi.ref('password'),
  location: Joi.string().required().messages({
    'string.empty': 'Campo obligatorio.',
    'any.required': 'Campo obligatorio.',
  }),
  zip: Joi.number().required().min(9999).messages({
    'number.base': 'Campo obligatorio.',
    'any.required': 'Campo obligatorio.',
    'number.min': 'Ingrese un código postal válido.',
  }),
  policity: Joi.boolean().required().valid(true).messages({
    'boolean.empty':
      'Debes aceptar nuestros terminos y politicas para poder registrarte.',
    'any.only':
      'Debes aceptar nuestros terminos y politicas para poder registrarte.',
  }),
});

export default RegisterValidation;
