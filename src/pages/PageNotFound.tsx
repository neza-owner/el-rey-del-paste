import { useTranslation } from 'react-i18next';
import styles from "../styles/NotFound.module.css";

function PageNotFound() {
  const [t] = useTranslation("global");
  return (
    <>
    <header>
        <h2 className={styles.heading}>{t("NotFound.heading")} </h2>
    </header>

    <div className={styles.notFoundContainer}>
        <button className={styles.button}>
            <a href="/" className={styles.notFoundLink}>{t("NotFound.button")}</a>
        </button>
        <img src="/nf.png" alt="Not Found" className={styles.Image} />
        
    </div>
    </>
  );
}

export default PageNotFound;
