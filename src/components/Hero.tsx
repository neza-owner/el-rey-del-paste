import crown from "../assets/crown.svg";
import styles from "../styles/hero.module.css";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function Hero() {
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
      <h2 className={styles.heading}>“El rey llegó a Monterrey”</h2>

      {/* cta buttons */}
      <div className={styles.ctaBtns}>
        <a className={`${styles.ctaBtn} ${styles.main} shadow-md`} href="#order">
          ¡Quiero Pastes!
        </a>
        <a className={`${styles.ctaBtn} ${styles.secondary} shadow-md`} href="#menu">
          Ver Menú
        </a>
      </div>

      {/* benefits */}
      <div className={styles.benefits}>
        <div className={styles.benefitContainer}>
          <img src={crown} className={styles.crown} alt="Logo" />
          <span className={styles.benefit}>Listo para llevar</span>
          <p>Tu orden en 2 minutos</p>
        </div>
        <div className={styles.benefitContainer}>
          <img src={crown} className={styles.crown} alt="Logo" />
          <span className={styles.benefit}>Diferentes sabores</span>
          <p>Para cada gusto</p>
        </div>
        <div className={styles.benefitContainer}>
          <img src={crown} className={styles.crown} alt="Logo" />
          <span className={styles.benefit}>Alimento tradicional</span>
          <p>De Hidalgo a tu paladar</p>
        </div>
      </div>
    </section>
  );
}
