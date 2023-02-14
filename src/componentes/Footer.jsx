
import styles from "../modul-css/footer.css"

export default function Footer () {
    return (
        <footer className="flex flex-col items-center">
            <div className="flex items-center flex-wrap justify-around text-gray-500">
                <div className="w-1/2 p-4 text-black box text-center md:text-gray-600 md:w-1/4">
                    <p>
                        Nº de inscripción de ssn
                    </p>
                    <p className="">1234</p>
                </div>
                <div className="w-1/2 p-4 text-black text-center box-border-none box md:border md:text-gray-600 md:w-1/4">
                    <p>
                        Atención al asegurado
                    </p>
                    <p className="">0800-123-1234</p>
                </div>
                <div className="w-1/2 p-4 text-black box text-center md:text-gray-600 md:w-1/4">
                    <p>
                        Organismo de control
                    </p>
                    <p className="break-all">www.argentina.gob.ar/ssn</p>
                </div>
                <div className="w-1/2 p-4 md:w-1/4">
                    <a href="https://www.argentina.gob.ar/superintendencia-de-seguros">
                        <img className="w-64 mx-auto" src="/imagenes/LogoSSN.png" alt="SSN" />
                    </a>
                </div>
            </div>
            <div className="group-2 text-black md:text-gray-600 text-justify md:w-[75%]">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La entidad aseguradora dispone de un Servicio de Atención
                    al Asegurado que atenderá las consultas y reclamos que presenten
                    los tomadores de seguros, asegurados, beneficiarios y/o derechohabientes.
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los asegurados, beneficiarios y/o derechohabientes. El Servicio de Atención
                    al Asegurado está integrado por: RESPONSABLE: Calle, Graciela – Tel.: 03493-428500 – Int.: 53070 – SAA@sancorseguros.com SUPLENTE: Barolo,
                    Mariela – Tel.: 03493-428500 – Int.: 53120 – SAA@sancorseguros.com
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUPLENTE: Barolo, Mariela – Tel.: 03493-428500 – Int.: 53120 –
                    SAA@sancorseguros.com En caso de que existiera un reclamo ante la entidad
                    aseguradora y que el mismo no haya sido resuelto o haya sido desestimado,
                    total o parcialmente, o que haya sido denegada su admisión, podrá comunicarse
                    con la Superintendencia de Seguros de la Nación por teléfono al 0800-666-8400,
                    correo electrónico a consultas@ssn.gob.ar o formulario disponible
                    en la página argentina.gob.ar/ssn
                </p>
            </div>
        </footer>
    )
}