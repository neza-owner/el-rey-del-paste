import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLayoutEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import crown from "../assets/crown.svg";
import styles from "../styles/navbar.module.css";
import ToggleLanguage from "./ToggleLanguage";

const Navbar = () => {
  const [isActiveHashLink, setIsActiveHashLink] = useState<string>('home');
  const [isSidebarActive, setSidebarIsActive] = useState<boolean>(false);
  const [t] = useTranslation("global");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;

        if (
          scroll >= sectionTop &&
          scroll <= sectionTop + sectionHeight
        ) {
          const id = section.getAttribute('id');
          if (id) {
            setIsActiveHashLink(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const handleActiveHashLink = (e: string) => {
    setIsActiveHashLink(e);
  };

  const toggleSidebar = () => {
    setSidebarIsActive(!isSidebarActive);
  }

  return (
    <>
      <nav className={styles.nav}>
        <ul className={`${styles.sidebar} ${isSidebarActive ? styles.active : styles.inactive}`} >
          <li>
            <button onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faX} className={styles.close} />
            </button>
          </li>
          <li>
            <HashLink to="/#home" className={isActiveHashLink === 'home' ? styles.activeLink : styles.inactiveLink} onClick={() => handleActiveHashLink('home')}>
              Inicio
            </HashLink>
          </li>
          <li>
            <HashLink to="/#menu" className={isActiveHashLink === 'menu' ? styles.activeLink : styles.inactiveLink} onClick={() => handleActiveHashLink('menu')} accessKey="m">
              {t("Components.Navbar.menu")}
            </HashLink>
          </li>
          <li>
            <HashLink to="/#order" className={isActiveHashLink === 'order' ? styles.activeLink : styles.inactiveLink} onClick={() => handleActiveHashLink('order')} accessKey="o">
              {t("Components.Navbar.order")}
            </HashLink>
          </li>
          <li>
            <HashLink to="/#stores" className={isActiveHashLink === 'stores' ? styles.activeLink : styles.inactiveLink} onClick={() => handleActiveHashLink('stores')} accessKey="s">
              {t("Components.Navbar.stores")}
            </HashLink>
          </li>
          <li>
            <HashLink to="/#about" className={isActiveHashLink === 'about' ? styles.activeLink : styles.inactiveLink} onClick={() => handleActiveHashLink('about')} accessKey="a">
              {t("Components.Navbar.aboutus")}
            </HashLink>
          </li>
          <li>
            <NavLink to="/billing" className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink} accessKey="b" onClick={() => handleActiveHashLink('billing')}>
              {t("Components.Navbar.billing")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/franchises" className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink} accessKey="f" onClick={() => handleActiveHashLink('franchises')}>
              {t("Components.Navbar.franchises")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/jobs" className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink} accessKey="j" onClick={() => handleActiveHashLink('franchises')}>
              {t("Components.Navbar.jobs")}
            </NavLink>
          </li>
          <li>
            <hr className={styles.separator} />
          </li>
          <li>
            {/* language toggle */}
            <ToggleLanguage />
          </li>
          <li>
            <HashLink to="/#contact" /* className={isActiveHashLink === 'contact' ? styles.activeLink : styles.inactiveLink} onClick={() => handleActiveHashLink('contact')} */ accessKey="c">
              {t("Components.Navbar.contact")}
            </HashLink>
          </li>
        </ul>
        <ul className={styles.navbar}>
          <li>
            <HashLink to="/#home" className={isActiveHashLink === 'home' ? styles.activeLink : styles.inactiveLink} onClick={() => handleActiveHashLink('home')}>
              <img src={crown} alt="Logo" />
            </HashLink>
          </li>
          <li>
            <HashLink to="/#menu" className={isActiveHashLink === 'menu' ? styles.activeLink : styles.inactiveLink} onClick={() => handleActiveHashLink('menu')} accessKey="m">
              {t("Components.Navbar.menu")}
            </HashLink>
          </li>
          <li>
            <HashLink to="/#order" className={isActiveHashLink === 'order' ? styles.activeLink : styles.inactiveLink} onClick={() => handleActiveHashLink('order')} accessKey="o">
              {t("Components.Navbar.order")}
            </HashLink>
          </li>
          <li>
            <HashLink to="/#stores" className={isActiveHashLink === 'stores' ? styles.activeLink : styles.inactiveLink} onClick={() => handleActiveHashLink('stores')} accessKey="s">
              {t("Components.Navbar.stores")}
            </HashLink>
          </li>
          <li>
            <HashLink to="/#about" className={isActiveHashLink === 'about' ? styles.activeLink : styles.inactiveLink} onClick={() => handleActiveHashLink('about')} accessKey="a">
              {t("Components.Navbar.aboutus")}
            </HashLink>
          </li>
          <li>
            <NavLink to="/billing" className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink} accessKey="b" onClick={() => handleActiveHashLink('billing')}>
              {t("Components.Navbar.billing")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/franchises" className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink} accessKey="f" onClick={() => handleActiveHashLink('franchises')}>
              {t("Components.Navbar.franchises")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/jobs" className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink} accessKey="j" onClick={() => handleActiveHashLink('franchises')}>
              {t("Components.Navbar.jobs")}
            </NavLink>
          </li>
          <li>
            {/* language toggle */}
            <ToggleLanguage />
          </li>
          <li>
            <hr className={styles.separator} />
          </li>
          <li>
            <HashLink to="/#contact" /* className={isActiveHashLink === 'contact' ? styles.activeLink : styles.inactiveLink} onClick={() => handleActiveHashLink('contact')} */ accessKey="c">
              {t("Components.Navbar.contact")}
            </HashLink>
          </li>
          <li>
            {/* hamburger menu */}
            <button onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faBars} className={styles.hamburger} />
            </button>
          </li>
        </ul>
      </nav>
      <div className={styles.overlay} onClick={toggleSidebar}>
      </div>
    </>
  );
};

export default Navbar;
