import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  return (
  <nav>
    <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
    </ul>
  </nav> 
  )
}

export default Navbar