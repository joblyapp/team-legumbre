export default function NavPersonalizado(props = { tipoOscuro: false }) {
  const { tipoOscuro } = props;
  const pestañas = [
    "Seguros Pesonales",
    "Seguros Agro",
    "Siniestros",
    "Quienes Somos?",
    "Contacto",
  ];
  return (
    <header className="fixed w-full flex flex-row  font-jost text-[24px] justify-between px-20 pt-2">
      <img
        className=""
        src={`/imagenes/logo-nav-${tipoOscuro ? "negro" : "blanco"}.png`}
        alt="logo-nav"
      />
      <nav className={"flex flex-row justify-center align-middle gap-7 "+`text-${tipoOscuro? "black" :"white"}`}>
        {pestañas.map((pestaña, index) => (
          <button key={index}>{pestaña}</button>
        ))}
        <button className="bg-[#AAA4F2] border-[1px] rounded-2xl border-[#0B0B2D] text-[#0B0B2D] h-[54px] w-[180px] self-center ml-5">Mis Seguros</button>
      </nav>
      
    </header>
  );
}
