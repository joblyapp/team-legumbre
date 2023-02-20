import { Link } from 'react-router-dom';
const ContactModal = ({ controller }) => {
  return (
    <div className="fixed top-0 left-0 w-screen z-[999] h-screen bg-[rgba(0,0,0,0.4)] flex flex-col justify-center items-center">
      <div className="relative flex flex-wrap gap-4 justify-end items-center w-[70%] bg-white p-4 rounded-lg">
        <main className="relative z-40 flex flex-col gap-3 items-center basis-full justify-center text-[var(--color-blue-marine)] overflow-hidden">
          <header className="w-full flex justify-between items-start">
            <Link
              to="/"
              onClick={() => {
                controller(false);
              }}
            >
              <img
                className="object-cover sm:w-[80px] w-10 h-fit"
                src="/imagenes/logo-nav-negro.png"
              />
            </Link>
            <img
              className="object-cover rounded-lg sm:w-80 sm:h-60 w-40 h-24"
              src="/imagenes/modal-woman.jpg"
            />
            <div
              className="group flex flex-col justify-center items-center sm:w-[50px] sm:h-[50px] w-6 h-6 rounded-md bg-slate-200 cursor-pointer"
              onClick={() => {
                controller(false);
              }}
            >
              <div className="flex group-hover:scale-90 gap-[2px] transition-all">
                <span className="block sm:w-4 w-2 sm:h-1 h-[2px] bg-gray-700 group-hover:bg-red-500 rounded-md origin-right rotate-45"></span>
                <span className="block sm:w-4 w-2 sm:h-1 h-[2px] bg-gray-700 group-hover:bg-red-500 rounded-md origin-left -rotate-45"></span>
              </div>
              <div className="flex group-hover:scale-90 gap-[2px] transition-all">
                <span className="block sm:w-4 w-2 sm:h-1 h-[2px] bg-gray-700 group-hover:bg-red-500 rounded-md origin-right -rotate-45"></span>
                <span className="block sm:w-4 w-2 sm:h-1 h-[2px] bg-gray-700 group-hover:bg-red-500 rounded-md origin-left rotate-45"></span>
              </div>
            </div>
          </header>
          <h2 className="font-bold text-xl md:text-3xl">
            Gracias por tu interés!
          </h2>
          <p className="w-[85%] font-bold text-base md:text-xl">
            Un asesor se va a contactar con vos a la brevedad!
          </p>
          <p className="w-[85%] font-semibold text-md md:text-xl">
            Estás un paso más cerca de vivir cada experiencia como se merece.
            Asegurate con nosotros y olvidate de la letra chica, el papeleo, y
            las largas gestiones.
          </p>
          <p className="w-[85%] flex justify-end font-semibold text-md md:text-xl">
            Vive cada instante,
            <span className="font-bold">&nbsp;¡Nosotros te cuidamos!</span>
          </p>
        </main>
        <img
          className="absolute bottom-0 sm:bottom-[-15%] left-0 object-cover w-full h-fit rounded-b-lg"
          src="/imagenes/signup-footer-wave-mobile.svg"
        />
      </div>
    </div>
  );
};

export default ContactModal;
