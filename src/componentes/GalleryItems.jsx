import '../App.css';


export default function GalleryItems () {
    const arrayGallery = [
        {
            title: 'Autos',
            icon: 'public/imagenes/iconos-blancos/auto.png',
            bgImg: 'image/btn-seguros/Hogar.jpg',
        },
        {
            title: 'Hogar',
            icon: 'public/imagenes/iconos-blancos/hogar.png',
            bgImg: 'public/imagenes/btn-seguros/Hogar.jpg',
        },
        {
            title: 'Motos',
            icon: 'public/imagenes/iconos-blancos/la-motorcycle.png',
            bgImg: 'public/imagenes/btn-seguros/Motos.jpg',
        },
        {
            title: 'Embarcaciones',
            icon: 'public/imagenes/iconos-blancos/embarcacion.png',
            bgImg: 'public/imagenes/btn-seguros/Embarcaciones.jpg',
        },
        {
            title: 'Accidentes personales',
            icon: 'image/iconos-blancos/accidentes-personales.png',
            bgImg: 'image/btn-seguros/Accidentespersonales.jpg',
        },
        {
            title: 'Protección agricola',
            icon: 'public/imagenes/iconos-blancos/proteccion-agricola.png',
            bgImg: 'public/imagenes/btn-seguros/ProteccionAgricola.jpg',
        },
        {
            title: 'Seguro tecnico',
            icon: 'image/iconos-blancos/seguro-tecnico.png',
            bgImg: 'public/imagenes/btn-seguros/SeguroTecnico.jpg',
        },
        {
            title: 'Integral de comercio',
            icon: 'public/imagenes/iconos-blancos/integral-de-comercio.png',
            bgImg: 'public/imagenes/btn-seguros/integraldecomercio.jpg',
        },
        {
            title: 'Transporte',
            icon: 'public/imagenes/iconos-blancos/transporte.png',
            bgImg: 'public/imagenes/btn-seguros/transporte.jpg',
        }
    ];
        return (
            <div style={{
                backgroundImage: arrayGallery.map(element => element.bgImg)
              }} className="items-1">
                <div className="icon-seguro">
                    <img src={arrayGallery.map(element => element.icon)} alt="hogar"/>
                    <span className="lusitana">{arrayGallery.map(element => element.title)}</span>
                </div>
            </div>
        )
}