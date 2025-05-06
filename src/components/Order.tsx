import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { default as arrow, default as arrowright } from "../assets/arrow-deco.svg";
import styles from "../styles/order.module.css";

const Order = () => {
  const [t] = useTranslation("global");
  const phoneNumber = "+528128678562";
  const message = "¡Hola! Me gustaría hacer un pedido de pastes.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="order" className={styles.order}>
      <header>
        <h2 className={styles.heading}>
          {t("Order.heading.part1")} <span>{t("Order.heading.part2")}</span>?
        </h2>
        <h3 className={styles.subheading}>
          {t("Order.subheading")}
        </h3>
      </header>

      <div className={styles.container}>
        {/* image */}
        <img
          src="/entrega.png"
          alt="Pastes"
          className={styles.visual}
        />

        {/* whatsapp button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappBtn}
        >
          {t("Order.ctaBtn")} &nbsp; <FontAwesomeIcon className={styles.icon} icon={faWhatsapp} />
        </a>
      </div>

      <img src={arrow} className={styles.arrowLeft} alt="arrow" />
      <img src={arrowright} className={styles.arrowRight} alt="arrow"
      />
    </section>
  );
};

export default Order;
