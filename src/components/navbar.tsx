import { Link } from "react-router-dom";
import crown from "../assets/crown.svg";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home">
            <img src={crown} alt="Logo" />
          </a>
        </li>
        <li>
          <a href="#menu">
            Menu
          </a>
        </li>
        <li>
          <a href="#franchises">
            Sucursales
          </a>
        </li>
        <li>
          <a href="#about">
            Nosotros
          </a>
        </li>
        <li>
          <a href="#deals">
            Promos
          </a>
        </li>
        <li>
          <Link to="/Billing">
            Facturación
          </Link>
        </li>
        <li>
          <Link to="/Franchises">
            Franquicias
          </Link>
        </li>
      </ul>

      <a href="#contact">
        Contacto
      </a>
    </nav>
  );
};

export default Navbar;
