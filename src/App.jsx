import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavPersonalizado from "./componentes/puro/NavPersonalizado";

import Landing from "./componentes/Landing";
import SignUp from "./componentes/SignUp";
import { Table } from "./componentes/Share";

function App() {
  return (
    <Router>
      <div className="relative w-full flex flex-wrap">
        <NavPersonalizado />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/registro" element={<SignUp />} />
          <Route path="/servicios" element={<Table />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
