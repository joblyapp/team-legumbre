export const registerInputs = [
  {
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

export const loginInputs = [
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
    name: "sesion",
    type: "checkbox",
    label: "Mantener sesión iniciada.",
  }
];

export const contactInputs = [
  {
    name: "fullname",
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
    placeholder: "",
    rows: 5,
    label: "Mensaje",
  },
]

