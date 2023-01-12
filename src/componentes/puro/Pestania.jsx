import { Link } from "react-router-dom";
import { useState,useRef } from "react";
export default function Pestania({ pestania, darkTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [darkBg, setDarkBg] = useState(darkTheme);
  const refSubPestania = useRef();
  const refPestania = useRef();
  function manejadorSubPestania() {
    refSubPestania.current.style.display = `${isOpen ? "none" : "flex"}`;
    if(window.innerWidth>768){
      refSubPestania.current.style.left = `${Math.round(refPestania.current.getBoundingClientRect().left)}px`
      refSubPestania.current.style.width = `${Math.round(refPestania.current.getBoundingClientRect().width)}px`
      refSubPestania.current.style.top = `65px`
    }else{
      refSubPestania.current.style.inset = `0`
      refSubPestania.current.style.left = `1.5rem`
    }


    setIsOpen(!isOpen);
  }

  function determinarPosicion() {

  }
  if (pestania.subPestania) {
    return (
      <>
        <div className="flex gap-1 " onClick={manejadorSubPestania} ref={refPestania}>
          <span className="text-left md:text-center self-center">
            &#129170;
          </span>
          <h2 className="text-left md:text-center self-center">
            {pestania.title}
          </h2>
        </div>

        <div className={`hidden flex-col relative md:absolute ${
          darkTheme ? "md:bg-none" : "md: bg-[#4F4F4F]"
        } md:pb-2 md:h-auto`} ref={refSubPestania}>
          {pestania.subPestania.map((sub, index) => (
            <Link className="md:pl-4" to={pestania.redirect[index]} key={index}>{sub}</Link>
          ))}
        </div>
      </>
    );
  }

  return (
    <Link to={pestania.redirect} className="flex gap-1">
      <span className="opacity-0">&#129170;</span>
      <h2 className="text-left md:text-center self-center">
        &#32;{pestania.title} 
      </h2>
    </Link>
  );
}
