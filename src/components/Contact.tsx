import styles from "../styles/contact.module.css";
import WhatsAppForm from "./WhatsAppForm";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <header>
        <h2 className={styles.heading}>¿QUIERES <span>DECIRLE</span> ALGO AL REY?</h2>
        <h3 className={styles.subheading}>Tu mensaje ser&aacute; escuchado en el trono.</h3>
      </header>
      <WhatsAppForm legend={"¡Manda un mensaje al número personal del rey!"} />
    </section>
  );
}

export default Contact;
