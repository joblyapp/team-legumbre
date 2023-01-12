import "../App.css";
import styles from "../modul-css/ConteinerGallery.css";
import GalleryItems from "./GalleryItems";

export default function GalleryConteiner() {
  const arrayGallery = [
    {
      title: "Autos",
      icon: "/imagenes/iconos-blancos/auto.png",
      bgImg: "/imagenes/btn-seguros/Hogar.jpg",
    },
    {
      title: "Hogar",
      icon: "/imagenes/iconos-blancos/hogar.png",
      bgImg: "/imagenes/btn-seguros/Hogar.jpg",
    },
    {
      title: "Motos",
      icon: "/imagenes/iconos-blancos/la_motorcycle.png",
      bgImg: "/imagenes/btn-seguros/Motos.jpg",
    },
    {
      title: "Embarcaciones",
      icon: "/imagenes/iconos-blancos/embarcacion.png",
      bgImg: "/imagenes/btn-seguros/Embarcaciones.jpg",
    },
    {
      title: "Accidentes personales",
      icon: "/imagenes/iconos-blancos/accidentes-personales.png",
      bgImg: "/imagenes/btn-seguros/Accidentespersonales.jpg",
    },
    {
      title: "Protección agricola",
      icon: "/imagenes/iconos-blancos/proteccion-agricola.png",
      bgImg: "/imagenes/btn-seguros/ProteccionAgricola.jpg",
    },
    {
      title: "Seguro tecnico",
      icon: "/imagenes/iconos-blancos/seguro-tecnico.png",
      bgImg: "/imagenes/btn-seguros/SeguroTecnico.jpg",
    },
    {
      title: "Integral de comercio",
      icon: "/imagenes/iconos-blancos/integral-de-comercio.png",
      bgImg: "/imagenes/btn-seguros/Integraldecomercio.jpg",
    },
    {
      title: "Transporte",
      icon: "/imagenes/iconos-blancos/transporte.png",
      bgImg: "/imagenes/btn-seguros/Transporte.jpg",
    },
  ];
  return (
    <section className="w-full">
      <div className="w-full grid grid-cols-1 py-24 gap-8 md:grid-cols-3">
        {arrayGallery.map((gallery, index) => (
          <GalleryItems
            key={index}
            title={gallery.title}
            icon={gallery.icon}
            bgImg={gallery.bgImg}
          />
        ))}
      </div>
    </section>
  );
}
