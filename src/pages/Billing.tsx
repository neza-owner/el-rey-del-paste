import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "../styles/billing.module.css";

function Billing() {
  return (
    <section className={styles.billing}>
      <header>
        <h2 className={styles.heading}>OBTEN TU <span>FACTURA AQU&Iacute;</span> <FontAwesomeIcon icon={faFileInvoice} className={styles.icon} /></h2>
        <h3 className={styles.subheading}>Solic&iacute;tala y nosotros te la mandamos</h3>
      </header>
    </section>
  );
}

export default Billing;
