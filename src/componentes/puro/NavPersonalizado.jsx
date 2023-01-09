import { useEffect } from "react";
import { useRef, useState } from "react";
export default function NavPersonalizado({ tipoOscuro, cambiar, scrollY }) {
  const [tipoOscuroTema, setTipoOscuroTema] = useState(tipoOscuro);
  const refNav = useRef();
  const refHeader = useRef();
  const [desplegado, setDesplegado] = useState(false);
  const pestañas = [
    "Seguros Pesonales",
    "Seguros Agro",
    "Siniestros",
    "Quienes Somos?",
    "Contacto",
  ];

  function manejadorNav() {
    refNav.current.style.display = `${desplegado ? "none" : "flex"}`;
    refNav.current.style.top = `${refHeader.current.clientHeight}px`;
    setDesplegado(!desplegado);
  }
  function cambiarColor() {
    if (cambiar) {
      window.innerHeight > scrollY
        ? setTipoOscuroTema(false)
        : setTipoOscuroTema(true);
    }
  }

  useEffect(() => {
    cambiarColor();
  }, [scrollY]);

  return (
    <header
      className={`fixed w-full flex flex-row  font-jost text-[20px] justify-between px-[5%] pt-1 lg:text-[17px] xl:text-[22px]  desk:text-[24px] z-10 ${
        tipoOscuroTema ? "bg-none" : "bg-[#4F4F4F]"
      }`}
      ref={refHeader}
    >
      <img
        className="h-[80px] lg:h-[85px] xl:h-[105px] desk:h-full"
        src={`/imagenes/logo-nav-${tipoOscuroTema ? "negro" : "blanco"}.png`}
        alt="logo-nav"
      />
      <nav
        className={`hidden flex-col gap-2 px-4 pb-4 absolute right-0 text-${
          tipoOscuroTema ? "black bg-none" : "white bg-[#4F4F4F]"
        } md:!flex md:static md:flex-row md:justify-center md:align-middle md:gap-7 xl:gap-9 `}
        ref={refNav}
      >
        {pestañas.map((pestaña, index) => (
          <button key={index} className="text-left md:text-center">
            {pestaña}
          </button>
        ))}
        <button className="bg-[#AAA4F2] rounded-2xl px-7 text-[#130E4A]  self-center md:block  lg:py-1.5 lg:ml-2 desk:ml-8">
          Mis Seguros
        </button>
      </nav>
      <img
        src={`/imagenes/menu-${tipoOscuroTema ? "negro" : "blanco"}.png`}
        className={`fill-${
          tipoOscuroTema ? "black" : "white"
        } self-center w-[30px] h-[20px] block md:hidden`}
        alt="menu"
        onClick={manejadorNav}
      />
    </header>
  );
}
