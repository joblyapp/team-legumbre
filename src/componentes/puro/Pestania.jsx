import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import useScreenSize from "../../hooks/useScreenSize";
export default function Pestania({ pestania, darkTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(darkTheme)
  const { width } = useScreenSize();
  const refSubPestania = useRef();
  const refPestania = useRef();
  function manejadorPestania() {
    if (isOpen) {
      return;
    }
    refSubPestania.current.style.display = `${isOpen ? "none" : "flex"}`;
    if (width> 768) {
      refSubPestania.current.style.left = `${Math.round(
        refPestania.current.getBoundingClientRect().left
      )}px`;
      refSubPestania.current.style.top = `${Math.round(
        refPestania.current.getBoundingClientRect().height/2 + 25
      )}px`;
    } else {
      refSubPestania.current.style.inset = `0`;
      refSubPestania.current.style.left = `1rem`;
    }
    setIsOpen(true);
  }
  function manejadorSubPestania(){
    refSubPestania.current.style.display = `${isOpen ? "none" : "flex"}`;
    setIsOpen(false);
  }

  if (pestania.subPestania) {
    return (
      <>
        <div
          className="flex gap-1 "
          ref={refPestania}
          onMouseOver={manejadorPestania}
        >
          <span className="text-left md:text-center self-center">
            &#129170;
          </span>
          <button className="text-left md:text-center self-center" >
            {pestania.title}
          </button>
        </div>

        <div
          className={`hidden flex-col relative md:absolute ${
            dark ? "md:bg-none" : "md: bg-[#4F4F4F]"
          } md:pb-2 md:h-auto md`}
          ref={refSubPestania}
          onMouseLeave={manejadorSubPestania}
        >
          {pestania.subPestania.map((sub, index) => (
            <Link className="md:px-4" to={pestania.redirect[index]} key={index}>
              {sub}
            </Link>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="flex gap-1">
      <span className="opacity-0">&#129170;</span>
      <Link to={pestania.redirect} className="text-left md:text-center self-center">
        &#32;{pestania.title}
      </Link>
    </div>
  );
}
