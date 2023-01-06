
import styles from "../modul-css/footer.css"

export default function Footer () {
    return (
        <footer className="section-footer">
            <div className="conteiner-footer">
                <div className="group-1">
                    <div className="box">
                        <p>Nº de inscripción de ssn <br />
                            1234
                        </p>
                        <span className="span-1"></span>
                    </div>
                    <div className="box">
                        <p>Atención al asegurado<br />
                                0800-123-1234
                        </p>
                        <span className="span-2"></span>
                    </div>
                    <div className="box">
                        <p>Organismo de control<br />
                            www.argentina.gob.ar/ssn
                        </p>
                        <span className="span-3"></span>
                    </div>
                    <div className="box">
                        <a href="#">
                            <img src="../public/imagenes/LogoSSN.png" alt="SSN" />
                        </a>
                    </div>
                </div>
                <div className="group-2">
                    <p>La entidad aseguradora dispone de un Servicio de Atención
                        al Asegurado que atenderá las consultas y reclamos que presenten
                        los tomadores de seguros, asegurados, beneficiarios y/o derechohabientes.
                    </p>
                    <p>asegurados, beneficiarios y/o derechohabientes. El Servicio de Atención
                        al Asegurado está integrado por: RESPONSABLE: Calle, Graciela – Tel.: 03493-428500 – Int.: 53070 – SAA@sancorseguros.com SUPLENTE: Barolo,
                        Mariela – Tel.: 03493-428500 – Int.: 53120 – SAA@sancorseguros.com
                    </p>
                    <p>SUPLENTE: Barolo, Mariela – Tel.: 03493-428500 – Int.: 53120 –
                        SAA@sancorseguros.com En caso de que existiera un reclamo ante la entidad
                        aseguradora y que el mismo no haya sido resuelto o haya sido desestimado,
                        total o parcialmente, o que haya sido denegada su admisión, podrá comunicarse
                        con la Superintendencia de Seguros de la Nación por teléfono al 0800-666-8400,
                        correo electrónico a consultas@ssn.gob.ar o formulario disponible
                        en la página argentina.gob.ar/ssn
                    </p>
                </div>
            </div>
        </footer>
    )
}