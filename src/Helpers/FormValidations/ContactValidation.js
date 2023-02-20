import Joi from 'joi';

const ContactValidation = Joi.object({
  fullName: Joi.string()
    .required()
    .regex(/^(([a-zA-Z])+\s*)+([a-zA-Z])*$/)
    .min(3)
    .max(30)
    .messages({
      'string.required': 'Campo obligatorio.',
      'string.empty': 'Campo obligatorio.',
      'string.pattern.base': 'Ingrese un nombre válido.',
      'string.min': 'Mínimo 3 caracteres.',
      'string.max': 'Máximo 30 caracteres.',
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
  subject: Joi.string()
    .regex(/([a-zA-Z]+\s*)/)
    .required()
    .messages({
      'string.empty': 'Campo obligatorio.',
      'any.required': 'Campo obligatorio.',
      'string.pattern.base':
        'Ingrese un motivo válido. Sin caracteres especiales ni números.',
    }),
  message: Joi.string()
    .regex(/([a-zA-Z]+\s*)/)
    .required()
    .messages({
      'string.empty': 'Campo obligatorio',
      'any.required': 'Campo obligatorio',
      'string.pattern.base': 'Ingrese sólo letras, números y espacios.',
    }),
});

export default ContactValidation;
