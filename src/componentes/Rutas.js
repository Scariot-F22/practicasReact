
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./Inicio";

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