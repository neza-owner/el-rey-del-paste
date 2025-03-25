import { useTranslation } from 'react-i18next';
import crown from "../assets/crown.svg";
import styles from "../styles/hero.module.css";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Hero() {
  const [t] = useTranslation("global");
  return (
    <section className={styles.hero}>
      {/* animated title */}
      <h1 className={styles.heading}>
        <TextGenerateEffect words="EL REY DEL PASTE" />
      </h1>

      {/* hero image */}
      <div className="mt-8 flex justify-center">
        <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Imagen aquí</span>
        </div>
      </div>

      {/* subtitle */}
      <h2 className={styles.heading}>“{t("Hero.heading")}”</h2>

      {/* cta buttons */}
      <div className={styles.ctaBtns}>
        <a className={`${styles.ctaBtn} ${styles.main} shadow-md`} href="#order">
          {t("Hero.ctaBtn")}
        </a>
        <a className={`${styles.ctaBtn} ${styles.secondary} shadow-md`} href="#menu">
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
