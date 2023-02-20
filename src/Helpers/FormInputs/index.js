export const registerInputs = [{
    name: "fullName",
    placeholder: "Ej: Tomas Hernandez",
    label: "Nombre Completo",
  },

  {
    name: "dob",
    type: "date",
    label: "Fecha de nacimiento",
  },

  {
    name: "email",
    type: "email",
    placeholder: "Ej: example@gmail.com",
    label: "Email",
  },

  {
    name: "password",
    type: "password",
    placeholder: "Ingresa contraseña",
    label: "Contraseña",
  },

  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirmar contraseña",
    label: "Confirmar contraseña",
  },

  {
    name: "location",
    placeholder: "Ej: Tandil, Buenos Aires, Argentina",
    label: "Ciudad de residencia",
  },

  {
    name: "zip",
    placeholder: "Ej: 7000",
    label: "Código postal",
  },

  {
    name: "policity",
    type: "checkbox",
    label: "Acepto los términos de uso y condiciones.",
  },
];

export const loginInputs = [{
    name: "email",
    type: "email",
    placeholder: "Ej: example@gmail.com",
    label: "Email",
  },

  {
    name: "password",
    type: "password",
    placeholder: "Ingresa contraseña",
    label: "Contraseña",
  },

  {
    name: "sesion",
    type: "checkbox",
    label: "Mantener sesión iniciada.",
  },
];

export const contactInputs = [
  {
    name: "fullName",
    type: "text",
    placeholder: "Ej: Tomas Hernandez",
    label: "Nombre Completo",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Ej: example@gmail.com",
    label: "Email",
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Ej: Coberturas",
    label: "Motivo",
  },
  {
    name: "message",
    type: "textarea",
    placeholder: "¡Hola me gustaría consultar sobre . . .!",
    rows: 5,
    label: "Mensaje",
  },
];

export const quoteCarInputsStep1 = [{
    name: "fullName",
    type: "text",
    label: "Nombre completo",
    placeholder: "Ej: Tomas Hernandez",
    basis: "basis-[45%] "
  },
  {
    name: "dob",
    type: "date",
    label: "Fecha de nacimiento",
    basis: "basis-[45%] "
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Ej: example@gmail.com",
    basis: "basis-[100%] "
  },
  {
    name: "dni",
    type: "text",
    label: "DNI (Documento de Identificación)",
    placeholder: "Ej: 11.123.123",
    basis: "basis-[75%] "
  },
  {
    name: "tel",
    type: "text",
    label: "Teléfono",
    placeholder: "Ej: 2494225566",
    basis: "basis-[75%] "
  }
];

export const quoteCarInputsStep2 = [{
    name: "carType",
    type: "select",
    label: "Marca del vehículo",
    placeholder: "Ej: Ford",
    basis: "basis-[45%]"
  },
  {
    name: "carModel",
    type: "select",
    label: "Modelo del vehículo",
    placeholder: "Ej: Fiesta 1.6 5 p. se (kd)",
    basis: "basis-[100%]"
  },
  {
    name: "carYear",
    type: "select",
    label: "Año del vehículo",
    placeholder: "Ej: 2019",
    basis: "basis-[50%]"
  },
  {
    name: "carUsagge",
    type: "select",
    label: "Uso del vehículo",
    placeholder: "Ej: Particular",
    basis: "basis-[50%]"
  },
];
