import "./App.css";
import { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavPersonalizado from "./componentes/puro/NavPersonalizado";

const Landing = lazy(() => import("./componentes/Landing"));
const SignUp = lazy(() => import("./componentes/SignUp"));

function App() {
  return (
    <Router>
      <div className="relative w-full flex flex-wrap">
        <NavPersonalizado />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
