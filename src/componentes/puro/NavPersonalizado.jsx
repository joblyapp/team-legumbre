import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function NavPersonalizado() {
  const [isPageScrolled, setPageScrolled] = useState(false);

  addEventListener("scroll", () => {
    window.scrollY > 100 && setPageScrolled(true);
    window.scrollY < 100 && setPageScrolled(false);
  });

  const pestañas = [
    "Seguros Pesonales",
    "Seguros Agro",
    "Siniestros",
    "Quienes Somos?",
    "Contacto",
  ];

  return (
    <header
      className={`fixed w-full flex flex-row basis-[100vw] font-jost text-[24px] justify-between px-[5%] pt-2 lg:text-[17px] xl:text-[22px]  desk:text-[24px] z-50 `}
    >
      <img
        className="h-[80px] lg:h-[85px] xl:h-[105px] desk:h-full"
        src={`/imagenes/logo-nav-${isPageScrolled ? "negro" : "blanco"}.png`}
        alt="logo-nav"
      />
      <AiOutlineMenu
        className={`fill-${
          isPageScrolled ? "black" : "white"
        } mt-3 w-[40px] h-[40px] block md:hidden stroke-black stroke-2`}
      />
      <nav
        className={
          "hidden flex-row justify-center align-middle gap-7 " +
          `text-${isPageScrolled ? "black" : "white"} xl:gap-9 md:flex`
        }
      >
        {pestañas.map((pestaña, index) => (
          <button key={index}>{pestaña}</button>
        ))}
        <Link
          to="register"
          className="bg-[#AAA4F2] rounded-2xl  text-[#130E4A]  self-center lg:px-7 lg:py-1.5 lg:ml-2 desk:ml-8"
        >
          <button>Mis Seguros</button>
        </Link>
      </nav>
    </header>
  );
}
