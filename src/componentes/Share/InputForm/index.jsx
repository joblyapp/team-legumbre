const InputForm = ({ name, type, label, placeholder, register }) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} type={type || 'text'} placeholder={placeholder} {...register(name)} />
    </div>
  );
};

export default InputForm;
