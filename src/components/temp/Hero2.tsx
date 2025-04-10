import { useTranslation } from 'react-i18next';
import crown from "../../assets/crown.svg";
/* import { TextGenerateEffect } from "../ui/text-generate-effect"; */
import styles from "./hero2.module.css";

export default function Hero2() {
  const [t] = useTranslation("global");
  return (
    <section className={styles.hero}>
      {/* animated title */}
      <header className={styles.header}>
        <img src="./PastePersonaje.png" alt="Logo" className={styles.titleLogo} />
        <img src="./font.svg" alt="Logo" className={styles.fontTitle} />
        {/* <h1 className={styles.heading}>
          <TextGenerateEffect words="EL REY DEL PASTE" />
        </h1> */}
      </header>

      {/* hero image */}
      <div className={styles.visual}>
        <img src="./Uber_cover.jpg" className={styles.heroImg} />
      </div>

      {/* subtitle */}
      <h2 className={styles.heading}>“{t("Hero.heading")}”</h2>

      {/* cta buttons */}
      <div className={styles.ctaBtns}>
        <a role='button' className={`${styles.ctaBtn} ${styles.main} shadow-md`} href="#order">
          {t("Hero.ctaBtn")}
        </a>
        <a role='button' className={`${styles.ctaBtn} ${styles.secondary} shadow-md`} href="#menu">
          {t("Hero.auxCtaBtn")}
        </a>
      </div>

      {/* benefits */}
      <div className={styles.benefits}>
        <div className={styles.benefitContainer}>
          <img src={crown} className={styles.crown} alt="Logo" />
          <span className={styles.benefit}>{t("Hero.benefits.benefit1.title")}</span>
          <p>{t("Hero.benefits.benefit1.legend")}</p>
        </div>
        <div className={styles.benefitContainer}>
          <img src={crown} className={styles.crown} alt="Logo" />
          <span className={styles.benefit}>{t("Hero.benefits.benefit2.title")}</span>
          <p>{t("Hero.benefits.benefit2.legend")}</p>
        </div>
        <div className={styles.benefitContainer}>
          <img src={crown} className={styles.crown} alt="Logo" />
          <span className={styles.benefit}>{t("Hero.benefits.benefit3.title")}</span>
          <p>{t("Hero.benefits.benefit3.legend")}</p>
        </div>
      </div>
    </section>
  );
}
