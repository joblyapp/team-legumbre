import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavPersonalizado from "./componentes/puro/NavPersonalizado";
import Footer from "./componentes/Footer";

import Landing from "./componentes/Landing";
import SignUp from "./componentes/SignUp";
import Contact from './componentes/contact/Contact'
import { Seguros } from "./componentes/Share";
import { servicios } from "./Helpers/Servicios";


function App() {
  return (
    <Router>
      <div className="relative w-full flex flex-wrap bg-[var(--color-green-base)]">
        <NavPersonalizado tipoOscuro={false} cambiar={true} />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/registro" element={<SignUp />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/servicios">
            {servicios.map((service) => {
              const { titulo, descripcion, source } = service;
              return (
                <Route
                  path={`/servicios/${source}`}
                  element={
                    <Seguros
                      source={source}
                      title={titulo}
                      description={descripcion}
                    />
                  }
                />
              );
            })}
          </Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
