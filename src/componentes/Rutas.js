
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./Inicio";
import Servicios from "./Servicios";
import Contacto from "./Contacto";
import NavBar from "./Navbar";

const Rutas = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/servicios" element={<Servicios/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
    </Router>
  )
}

export default Rutas