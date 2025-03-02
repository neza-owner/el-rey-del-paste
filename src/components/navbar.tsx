import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import crown from "../assets/crown.svg";
import "../styles/navbar.css";

const Navbar = () => {
  const [isActiveHashLink, setIsActiveHashLink] = useState('home');
  const handleActiveHashLink = (e) => {
    setIsActiveHashLink(e);
  };
  return (
    <nav className="navbar">
      <ul>
        <li>
          <HashLink to="/#home" onClick={() => handleActiveHashLink('home')}>
            <img src={crown} alt="Logo" />
          </HashLink>
        </li>
        <li>
          <HashLink to="/#menu" onClick={() => handleActiveHashLink('menu')} accessKey="m">
            Menu
          </HashLink>
        </li>
        <li>
          <HashLink to="/#order" onClick={() => handleActiveHashLink('order')} accessKey="o">
            Ordenar
          </HashLink>
        </li>
        <li>
          <HashLink to="/#stores" onClick={() => handleActiveHashLink('stores')} accessKey="s">
            Sucursales
          </HashLink>
        </li>
        <li>
          <HashLink to="/#about" onClick={() => handleActiveHashLink('about')} accessKey="a">
            Nosotros
          </HashLink>
        </li>
        {/* <li>
          <a href="#combos">
            Combos
          </a>
        </li> */}
        {/* <li>
          <a href="#deals">
            Promos
          </a>
        </li> */}
        <li>
          <NavLink to="/billing" accessKey="b">
            Facturación
          </NavLink>
        </li>
        <li>
          <NavLink to="/franchises" accessKey="f">
            Franquicias
          </NavLink>
        </li>
        <li>
          <NavLink to="/jobs" accessKey="j">
            Vacantes
          </NavLink>
        </li>
      </ul>

      <HashLink to="/#contact" accessKey="c">
        Contacto
      </HashLink>
    </nav>
  );
};

export default Navbar;
