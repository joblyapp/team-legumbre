import { Link, useLocation } from 'react-router-dom';
import { Link as NavigateTo } from 'react-scroll';
import { useState, useRef } from 'react';
import useScreenSize from '../../hooks/useScreenSize';
export default function Pestania({ pestania, darkTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(darkTheme);
  const { width } = useScreenSize();
  const refSubPestania = useRef();
  const refPestania = useRef();
  const location = useLocation();
  const path = location.pathname;
  function manejadorPestania() {
    if (isOpen) {
      return;
    }
    refSubPestania.current.style.display = `${isOpen ? 'none' : 'flex'}`;
    if (width > 768) {
      refSubPestania.current.style.left = `${Math.round(
        refPestania.current.getBoundingClientRect().left
      )}px`;
      refSubPestania.current.style.top = `${Math.round(
        refPestania.current.getBoundingClientRect().height / 2 + 25
      )}px`;
    } else {
      refSubPestania.current.style.inset = `0`;
      refSubPestania.current.style.left = `1rem`;
    }
    setIsOpen(true);
  }
  function manejadorSubPestania() {
    refSubPestania.current.style.display = `${isOpen ? 'none' : 'flex'}`;
    setIsOpen(false);
    manejadorPestania();
  }

  if (pestania.subPestania && path !== '/') {
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
          <button className="text-left md:text-center self-center">
            {pestania.title}
          </button>
        </div>

        <div
          className={`hidden flex-col relative rounded-lg md:absolute
           bg-[#4F4F4F]
          max-w-fit md:h-auto md`}
          ref={refSubPestania}
          onMouseLeave={manejadorSubPestania}
        >
          {pestania.subPestania.map((sub, index) => (
            <Link className="md:px-4 hover:bg-gray-400" to={pestania.redirect[index]} key={index}>
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
      {pestania.scrollTo ? (
        <NavigateTo
          to={pestania.scrollTo}
          spy={true}
          smooth={true}
          duration={500}
          className="text-left md:text-center self-center cursor-pointer"
        >
          &#32;{pestania.title}
        </NavigateTo>
      ) : (
        <Link
          to={pestania.redirect}
          className="text-left md:text-center self-center cursor-pointer"
        >
          &#32;{pestania.title}
        </Link>
      )}
    </div>
  );
}
