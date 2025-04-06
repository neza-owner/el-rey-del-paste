import { faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import Form from "../components/Form";
import styles from "../styles/franchises.module.css";

function Franchises() {
  const [t] = useTranslation("global");

  return (
    <section className={styles.franchises}>
      <header>
        <h2 className={styles.heading}>{t("Franchises.heading.part1")} <span>{t("Franchises.heading.part2")}</span> <FontAwesomeIcon icon={faStore} className={styles.icon} /></h2>
        <h3 className={styles.subheading}>{t("Franchises.subheading")}</h3>
      </header>

      <div className={styles.franchisesContainer}>
        <Form /* legend={t("Billing.form.legend")} */ message={'Quiero más información sobre las franquicias'} />
        <figure>
          <img src="/local1.jpg" alt="Coupon 1" className={styles.couponImage} />
          <figcaption className={styles.couponDescription}>
            <h4 className={styles.couponTitle}>Abre tu reino</h4>
            <p>Y expandamonos juntos</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Franchises;
