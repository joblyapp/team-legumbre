import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavPersonalizado from "./componentes/puro/NavPersonalizado";

import Landing from "./componentes/Landing";
import SignUp from "./componentes/SignUp";

function App() {
  return (
    <Router>
      <div className="relative w-full flex flex-wrap">
        <NavPersonalizado tipoOscuro={false}  cambiar={true}/>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
