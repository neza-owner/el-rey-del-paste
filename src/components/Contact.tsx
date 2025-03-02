import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <header>
        <h2 className={styles.heading}>¿QUIERES <span>DECIRLE</span> ALGO AL REY?</h2>
        <h3 className={styles.subheading}>Tu mensaje ser&aacute; escuchado en el trono.</h3>
      </header>
    </section>
  );
}

export default Contact;
