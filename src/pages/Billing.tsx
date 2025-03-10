import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import styles from "../styles/billing.module.css";

function Billing() {
  const [t, i18n] = useTranslation("global");

  return (
    <section className={styles.billing}>
      <header>
        <h2 className={styles.heading}>{t("Billing.heading.part1")} <span>{t("Billing.heading.part2")}</span> <FontAwesomeIcon icon={faFileInvoice} className={styles.icon} /></h2>
        <h3 className={styles.subheading}>{t("Billing.subheading")}</h3>
      </header>
    </section>
  );
}

export default Billing;
