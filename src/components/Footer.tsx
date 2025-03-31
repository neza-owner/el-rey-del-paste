import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import crown from "../assets/crown.svg";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigation}>
        <ul>
          <li>
            <HashLink to="/#home" className={styles.footerHashLink}>
              <span>Inicio</span>
              <img src={crown} alt="Logo" />
            </HashLink>
          </li>
          <li>
            <HashLink to="/#menu" className={styles.footerHashLink}>
              Menú
            </HashLink>
          </li>
          <li>
            <HashLink to="/#order" className={styles.footerHashLink}>
              Pedir
            </HashLink>
          </li>
          <li>
            <HashLink to="/#stores" className={styles.footerHashLink}>
              Sucursales
            </HashLink>
          </li>
          <li>
            <HashLink to="/#about" className={styles.footerHashLink}>
              Nosotros
            </HashLink>
          </li>
          <li>
            <Link to="/billing" className={styles.footerHashLink}>
              Facturación
            </Link>
          </li>
          <li>
            <Link to="/franchises" className={styles.footerHashLink}>
              Franquicias
            </Link>
          </li>
          <li>
            <Link to="/jobs" className={styles.footerHashLink}>
              Vacantes
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.leftContainer}>
        <ul>
          <li>
            <Link to="/billing" className={styles.footerHashLink}>
              Facturación
            </Link>
          </li>
          <li>
            <Link to="/franchises" className={styles.footerHashLink}>
              Franquicias
            </Link>
          </li>
          <li>
            <Link to="/jobs" className={styles.footerHashLink}>
              Vacantes
            </Link>
          </li>
        </ul>
        <span className={styles.separator}>
          |
        </span>
        <HashLink to="/#home" className={styles.footerHashLink}>
          <img src={crown} alt="Logo" />
        </HashLink>
        <span className={styles.copy}>
          {/* Copyright */} &copy; 2025 El Rey del Paste{/* . Todos los derechos reservados. */}
        </span>
        <span>
          Siguenos en:
        </span>
        <div className={styles.social}>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          </a>
          <a href='https://www.tiktok.com' target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
          </a>
        </div>
        {/* <span>
          Monterrey, NL, MX
        </span> */}
      </div>
    </footer>
  );
};

export default Footer;
