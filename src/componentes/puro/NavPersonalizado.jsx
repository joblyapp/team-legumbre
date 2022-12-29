import { useEffect } from "react";
import { useRef, useState } from "react";

export default function NavPersonalizado(props = { tipoOscuro: false }) {
  const { tipoOscuro } = props;

  const pestañas = [
    "Seguros Pesonales",
    "Seguros Agro",
    "Siniestros",
    "Quienes Somos?",
    "Contacto",
  ];

  useEffect(() => {
  }, [])
  
  return (
    <header className="fixed w-full flex flex-row  font-jost text-[24px] justify-between px-[5%] pt-2 lg:text-[17px] xl:text-[22px]  desk:text-[24px] ">
      <img
        className="lg:h-[85px] xl:h-[105px] desk:h-full"
        src={`/imagenes/logo-nav-${tipoOscuro ? "negro" : "blanco"}.png`}
        alt="logo-nav"
      />
      <nav className={"flex flex-row justify-center align-middle gap-7 "+`text-${tipoOscuro? "black" :"white"} xl:gap-9`}>
        {pestañas.map((pestaña, index) => (
          <button key={index}>{pestaña}</button>
        ))}
        <button className="bg-[#AAA4F2] rounded-2xl  text-[#130E4A]  self-center lg:px-7 lg:py-1.5 lg:ml-2 desk:ml-8" >Mis Seguros</button>
      </nav>
      
    </header>
  );
}
