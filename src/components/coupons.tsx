import { faTicketSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Coupons.module.css';

const Coupons = () => {
  return (
    <section className={styles.coupons}>
      <header>
        <h2 className={styles.heading}><span>CUPONES</span> DEL REY <FontAwesomeIcon icon={faTicketSimple} className={styles.icon} /></h2>
        <h3 className={styles.subheading}>¡Ll&eacute;nalo y nosotros te damos una sorpresa!</h3>
      </header>
      <span className={styles.disclaimer}>*Valido &uacute;nicamente en sucursales con cuponera f&iacute;sica*</span>
    </section>
  );
};

export default Coupons;
