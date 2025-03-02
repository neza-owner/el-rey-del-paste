import { faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "../styles/franchises.module.css";

function Franchises() {
  return (
    <section className={styles.franchises}>
      <header>
        <h2 className={styles.heading}>¿QUIERES <span>ABRIR TU PROPIO REYNO</span>? <FontAwesomeIcon icon={faStore} className={styles.icon} /></h2>
        <h3 className={styles.subheading}>Expande el reino con tu propia sucursal, ¡nosotros te ayudamos!</h3>
      </header>
    </section>
  );
}

export default Franchises;
