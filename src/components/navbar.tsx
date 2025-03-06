import { useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import crown from "../assets/crown.svg";
import "../styles/navbar.css";

const Navbar = () => {
  const [isActiveHashLink, setIsActiveHashLink] = useState('home');
  const handleActiveHashLink = (e) => {
    setIsActiveHashLink(e);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      const sections = document.querySelectorAll('section[id]');
      const scroll = window.scrollY + 66;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scroll >= sectionTop && scroll <= sectionTop + sectionHeight) {
          setIsActiveHashLink(section.getAttribute('id'));
        }
      });
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);
  return (
    <nav className="navbar">
      <ul>
        <li>
          <HashLink to="/#home" className={isActiveHashLink === 'home' ? 'activeLink' : 'inactiveLink'} onClick={() => handleActiveHashLink('home')}>
            <img src={crown} alt="Logo" />
          </HashLink>
        </li>
        <li>
          <HashLink to="/#menu" className={isActiveHashLink === 'menu' ? 'activeLink' : 'inactiveLink'} onClick={() => handleActiveHashLink('menu')} accessKey="m">
            Menu
          </HashLink>
        </li>
        <li>
          <HashLink to="/#order" className={isActiveHashLink === 'order' ? 'activeLink' : 'inactiveLink'} onClick={() => handleActiveHashLink('order')} accessKey="o">
            Ordenar
          </HashLink>
        </li>
        <li>
          <HashLink to="/#stores" className={isActiveHashLink === 'stores' ? 'activeLink' : 'inactiveLink'} onClick={() => handleActiveHashLink('stores')} accessKey="s">
            Sucursales
          </HashLink>
        </li>
        <li>
          <HashLink to="/#about" className={isActiveHashLink === 'about' ? 'activeLink' : 'inactiveLink'} onClick={() => handleActiveHashLink('about')} accessKey="a">
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
          <NavLink to="/billing" className={({ isActive }) => isActive ? 'activeLink' : 'inactiveLink'} accessKey="b" onClick={() => handleActiveHashLink('billing')}>
            Facturación
          </NavLink>
        </li>
        <li>
          <NavLink to="/franchises" className={({ isActive }) => isActive ? 'activeLink' : 'inactiveLink'} accessKey="f" onClick={() => handleActiveHashLink('franchises')}>
            Franquicias
          </NavLink>
        </li>
        <li>
          <NavLink to="/jobs" className={({ isActive }) => isActive ? 'activeLink' : 'inactiveLink'} accessKey="j" onClick={() => handleActiveHashLink('franchises')}>
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
