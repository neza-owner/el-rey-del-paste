import { useTranslation } from 'react-i18next';
import styles from "../styles/contact.module.css";
import WhatsAppForm from "./WhatsAppForm";

const Contact = () => {
  const [t] = useTranslation("global");

  return (
    <section id="contact" className={styles.contact}>
      <header>
        <h2 className={styles.heading}>
          {t("Contact.heading.part1")} <span>{t("Contact.heading.part2")}</span> {t("Contact.heading.part3")}
        </h2>
        <h3 className={styles.subheading}>{t("Contact.subheading")}</h3>
      </header>

      <WhatsAppForm legend={t("Components.WhatsAppForm.legendMessage")} />

      <img src="trompeta.png" alt="Mi imagen" className={`${styles.trumpet} ${styles.variantA}`} />
      <img src="trompeta.png" alt="M" className={`${styles.trumpet} ${styles.variantB}`} />
    </section>
  );
}

export default Contact;
