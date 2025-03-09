import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import styles from "../styles/whatsappform.module.css";

interface WhatsAppFormProps {
  legend: string;
}

const WhatsAppForm = ({ legend }: WhatsAppFormProps) => {
  const [t, i18n] = useTranslation("global");

  const [formData, setFormData] = useState({
    name: "",
    message: "",
    phone: "+528128678562",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, message, phone } = formData;
    if (!phone || !message) {
      alert("Por favor, ingresa el número y un mensaje.");
      return;
    }

    const text = `Hola, soy ${name}. ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank"); // Abre WhatsApp en una nueva pestaña
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} shadow-md`}>
      <fieldset>
        <legend className={styles.legend}>{legend}</legend>
        <input
          type="text"
          name="name"
          placeholder={t("Components.WhatsAppForm.placeholderName")}
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder={t("Components.WhatsAppForm.placeholderMessage")}
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
          required
        />
      </fieldset>
      <button
        type="submit"
        className={styles.btn}
      >
        {t("Components.WhatsAppForm.ctaBtn")} <FontAwesomeIcon icon={faWhatsapp} />
      </button>
    </form>
  );
};

export default WhatsAppForm;
