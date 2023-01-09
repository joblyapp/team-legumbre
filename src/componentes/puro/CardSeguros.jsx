export default function CardSeguros({ tipoNum }) {
  const cards = [
    {
      title: "Autos",
      bgImg: "/imagenes/btn-seguros/Hogar.jpg",
    },
    {
      title: "para el Hogar",
      bgImg: "/imagenes/btn-seguros/Hogar.jpg",
    },
    {
      title: "Votovehiculos",
      bgImg: "/imagenes/btn-seguros/Motos.jpg",
    },
    {
      title: "Embarcaciones",
      bgImg: "/imagenes/btn-seguros/Embarcaciones.jpg",
    },
    {
      title: "Accidentes personales",
      bgImg: "/imagenes/btn-seguros/Accidentespersonales.jpg",
    },
    {
      title: "Protección agricola",
      bgImg: "/imagenes/btn-seguros/ProteccionAgricola.jpg",
    },

    {
      title: "Integral de comercio",
      bgImg: "/imagenes/btn-seguros/Integraldecomercio.jpg",
    },
    {
      title: "Transporte",
      bgImg: "/imagenes/btn-seguros/Transporte.jpg",
    },
    {
      title: "para Electrónicos",
      bgImg: "/imagenes/btn-seguros/SeguroTecnico.jpg",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${cards[tipoNum].bgImg})`,
      }}
      className={`flex flex-col gap-2 w-[90%] bg-cover bg-no-repeat bg-center mx-auto px-4 py-5 text-white rounded-xl ${
        [3, 7].includes(tipoNum) ? "scale-x-[-1]" : " "
      } lg:py-8 lg:px-8 xl:py-12 `}
    >
      <div
        className={`font-lusitana text-[30px] ${
          [3, 7].includes(tipoNum) ? "scale-x-[-1]" : " "
        } lg:text-[45px] xl:text-[60px] leading-[90%]`}
      >
        <h2>
          Seguro
          <br />
          {cards[tipoNum].title}{" "}
        </h2>
      </div>
      <div
        className={`font-mplus2 ${
          [3, 7].includes(tipoNum) ? "scale-x-[-1]" : " "
        } md:text-[18px] xl:text-[20px] leading-[120%]`}
      >
        <h3>
          Permitenos dejarte tranquilo, nosotros nos
          <br />
          encargamos del resto.
        </h3>
      </div>
    </div>
  );
}
