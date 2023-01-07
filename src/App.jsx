import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavPersonalizado from "./componentes/puro/NavPersonalizado";
import Footer from "./componentes/Footer";
import Landing from "./componentes/Landing";
import SignUp from "./componentes/SignUp";

function App() {
  return (
    <Router>
    <div className="relative w-full flex flex-wrap">
      <NavPersonalizado />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={SignUp} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
