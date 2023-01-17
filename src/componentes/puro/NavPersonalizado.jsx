import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Pestania from "./Pestania";
export default function NavPersonalizado({ tipoOscuro, cambiar }) {
  const [darkTheme, setDarkTheme] = useState(tipoOscuro);
  const refNav = useRef();
  const refHeader = useRef();
  const [isOpen, setIsOpen] = useState(false);

  addEventListener("scroll", () => {
    if (cambiar) {
      window.innerHeight > window.scrollY
        ? setDarkTheme(false)
        : setDarkTheme(true);
    }
  });

  function manejadorNav() {
    refNav.current.style.display = `${isOpen ? "none" : "flex"}`;
    refNav.current.style.top = `${refHeader.current.clientHeight}px`;
    setIsOpen(!isOpen);
  }

  const pestanias = [
    {
      title: "Seguros Pesonales",
      subPestania: [
        "Hogares",
        "Automotores",
        "Motovehículos",
        "Embarcaciones",
        "Personales",
      ],
      redirect: [
        "/servicios/casa",
        "/servicios/auto",
        "/servicios/moto",
        "/servicios/embarcaciones",
        "/servicios/personales",
      ],
    },
    {
      title: "Seguros Empresas",
      subPestania: [
        "Agrícola",
        "Comercios",
        "Trasportistas",
        "Electrodoméstricos",
      ],
      redirect: [
        "/servicios/agricola",
        "/servicios/comercio",
        "/servicios/transporte",
        "/servicios/tecnico",
      ],
    },
    {
      title: "Siniestros",
      redirect: "/",
    },
    {
      title: "Quienes Somos",
      redirect: "/",
    },
    {
      title: "Contacto",
      redirect: "/",
    },
  ];

  return (
    <header
      className={`sticky top-0 left-0 w-full flex flex-row  font-jost text-[20px] justify-between px-[5%] pt-1 lg:text-[17px] xl:text-[22px]  desk:text-[24px] z-50 ${
        darkTheme ? "bg-[var(--color-green-base)]" : "bg-[#4F4F4F]"
      }`}
      ref={refHeader}
    >
      <Link to="/">
        <img
          className="h-[80px] lg:h-[85px] xl:h-[105px] desk:h-full"
          src={`/imagenes/logo-nav-${darkTheme ? "negro" : "blanco"}.png`}
          alt="logo-nav"
        />
      </Link>
      <nav
        className={`hidden flex-col gap-1 px-4 pb-4 absolute right-0 text-${darkTheme ? "black bg-none" : "white bg-[#4F4F4F]"} md:p-0 md:!flex md:static md:flex-row md:justify-center md:align-middle md:gap-7 xl:gap-9 `}
        ref={refNav}
      >
        {pestanias.map((pestania, index) => (
          <Pestania key={index} pestania={pestania} darkTheme={darkTheme} />
        ))}
        <Link
          to="registro"
          className="bg-[#AAA4F2] rounded-2xl px-7 text-[#130E4A]  self-center md:block  lg:py-1.5 lg:ml-2 desk:ml-8"
        >
          Mis Seguros
        </Link>
      </nav>
      <img
        src={`/imagenes/menu-${darkTheme ? "negro" : "blanco"}.png`}
        className={`fill-${
          darkTheme ? "black" : "white"
        } self-center w-[30px] h-[20px] block md:hidden`}
        alt="menu"
        onClick={manejadorNav}
      />
    </header>
  );
}
