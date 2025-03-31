import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/ToggleLanguage.module.css';

const ToggleLanguage = () => {
  const [, i18n] = useTranslation("global");
  const [isToggle, setIsToggle] = useState(false);
  const currentLanguage = i18n.language;

  /* const language = i18n.language === "en" ? "Change language to: " : "Cambiar idioma a: "; */

  const handleToggleLanguage = () => {
    const nextLanguage = currentLanguage === "en" ? "es" : "en";
    i18n.changeLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
    setIsToggle(!isToggle);
  };

  if (currentLanguage == "es" && isToggle == false) {
    setIsToggle(true);
  } else if (currentLanguage == "en" && isToggle == true) {
    setIsToggle(false);
  }

  {/* <div className={styles.switch}> */ }
  {/* </div> */ }

  return (
    <button onClick={handleToggleLanguage} className={styles.toggleLanguage}>
      {/* {language} */}
      {i18n.language === "en" ? "Es" : "En"}
    </button>
  );
}

export default ToggleLanguage;
