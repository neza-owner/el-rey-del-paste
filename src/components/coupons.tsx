import { faTicketSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { default as arrowleft, default as arrowright } from "../assets/arrow-deco.svg";
import equal from '../assets/equal.svg';
import styles from '../styles/Coupons.module.css';

const Coupons = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className={styles.coupons}>
      <header>
        <h2 className={styles.heading}><span>{t("Coupons.heading.part1")}</span> {t("Coupons.heading.part2")} <FontAwesomeIcon icon={faTicketSimple} className={styles.icon} /></h2>
        <h3 className={styles.subheading}>{t("Coupons.subheading")}</h3>
      </header>
      <div className={styles.couponsContainer}>
        <figure className={styles.coupon}>
          <img src="/coupons/coupon-holder-back.jpg" alt="Coupon 1" className={styles.couponImage} />
          <figcaption className={styles.couponDescription}>
            <h4 className={styles.couponTitle}>{t("Coupons.coupon.title")}</h4>
            <p>{t("Coupons.coupon.description")}</p>
            {/* <p className={styles.couponExpiration}>Vigencia: 31 de diciembre de 2021</p> */}
          </figcaption>
        </figure>
        <img
          src={arrowleft}
          className={styles.arrowLeft}
          alt="arrow"
        />
        <img src={equal} alt="equal" className={styles.equal} />
        <img
          src={arrowright}
          className={styles.arrowRight}
          alt="arrow"
        />
        <div className={styles.rowCouponsContainer}>
          <figure className={styles.reward}>
            <img src="/coupons/reward1.JPG" alt="Coupon 1" className={styles.rewardImage} />
            <figcaption className={styles.couponDescription}>
              <h4 className={styles.couponTitle}>{t("Coupons.rewards.half.title")}</h4>
              <p>{t("Coupons.rewards.half.description")}</p>
              {/* <p className={styles.couponExpiration}>Vigencia: 31 de diciembre de 2021</p> */}
            </figcaption>
          </figure>
          <span>&Oacute;</span>
          <figure className={styles.reward}>
            <img src="/coupons/reward2.JPG" alt="Coupon 1" className={styles.rewardImage} />
            <figcaption className={styles.couponDescription}>
              <h4 className={styles.couponTitle}>{t("Coupons.rewards.full.title")}</h4>
              <p>{t("Coupons.rewards.full.description")}</p>
              {/* <p className={styles.couponExpiration}>Vigencia: 31 de diciembre de 2021</p> */}
            </figcaption>
          </figure>
        </div>
        {/* <div className={styles.coupon}>
          <h4 className={styles.couponTitle}>CUPON 1</h4>
          <p className={styles.couponDescription}>Compra 2 pasteles y ll&eacute;vate un refresco de 600ml GRATIS</p>
          <p className={styles.couponExpiration}>Vigencia: 31 de diciembre de 2021</p>
        </div> */}
      </div>
      <span className={styles.disclaimer}>{t("Coupons.disclaimer")}</span>
    </section >
  );
};

export default Coupons;
