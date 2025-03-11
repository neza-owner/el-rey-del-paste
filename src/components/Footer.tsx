import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import crown from "../assets/crown.svg";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className=" text-white">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-xl font-bold">Contacto</h3>
              <p className="text-sm">Teléfono: 55 1234 5678</p>
              <p className="text-sm">Correo:
                <a href="mailto:paste@gamil.com" className="text-yellow-500">
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Horarios</h3>
              <p className="text-sm">Lunes a Domingo de 9:00 a 21:00</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Dirección</h3>
              <p className="text-sm">Calle Falsa 123, Col. Centro, CDMX</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.navigation}>
        <ul>
          <li>
            <HashLink to="/#home" className={styles.footerHashLink}>
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
        </ul>
      </div>
      <div className={styles.social}>
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
        <span className={styles.copy}>
          {/* Copyright */} &copy; 2025 El Rey del Paste{/* . Todos los derechos reservados. */}
        </span>
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
    </footer>
  );
};

export default Footer;
