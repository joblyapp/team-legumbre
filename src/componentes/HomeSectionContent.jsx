import "../App.css";
import bgHome from "../assets/img/bg-image-home.jpg";
import formHomeImg from "../assets/img/form-home.png";

function HomeSectionContent() {
  return (
    <div className="bg-[#ADF5FF]" id="hero-section">
      <div className="md:px-0 w-full relative">
        <div className="bg-home flex flex-col justify-center px-5 bg-no-repeat bg-cover bg-center h-screen md:px-12">
          <h1 className="md:w-1/3 text-6xl text-white pb-3 text-center md:text-left">
            Fácil, cómodo y sencillo
          </h1>
          <p className="text-white text-2xl md:w-1/3 text-center md:text-left">
            Concéntrate en lo verdaderamente importante para vos, nosotros nos
            aseguramos de que todo salga bien
          </p>
          <div className="mt-20 text-center md:text-left">
            <a
              href="/registro"
              className="py-3 px-12 bg-[#AAA4F2] rounded-xl text-black text-2xl"
            >
              ¡Cotiza ahora!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionContent;
