import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import Form from "../components/Form";
import styles from "../styles/billing.module.css";

function Billing() {
  const [t] = useTranslation("global");

  return (
    <section className={styles.billing}>
      <header>
        <h2 className={styles.heading}>{t("Billing.heading.part1")} <span>{t("Billing.heading.part2")}</span> <FontAwesomeIcon icon={faFileInvoice} className={styles.icon} /></h2>
        <h3 className={styles.subheading}>{t("Billing.subheading")}</h3>
      </header>
      <div className={styles.billingContainer}>
        <Form /* legend={t("Billing.form.legend")} */ showRFC={true} message={'Requiero facturar mi compra'} />
        <figure>
          <img src="/visual1.jpg" alt="Coupon 1" className={styles.couponImage} />
          <figcaption className={styles.couponDescription}>
            <h4 className={styles.couponTitle}>Contador real</h4>
            <p>Obten tu factura dentro de 2 semanas habiles</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Billing;
