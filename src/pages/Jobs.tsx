import { useTranslation } from 'react-i18next';
import Form from "../components/Form";
import styles from "../styles/jobs.module.css";

const Jobs = () => {
  const [t] = useTranslation("global");

  return (
    <section className={styles.jobs}>
      <header>
        <h2 className={styles.heading}>{t("Jobs.heading.part1")} <span>{t("Jobs.heading.part2")}</span> {t("Jobs.heading.part3")}</h2>
        <h3 className={styles.subheading}>{t("Jobs.subheading")}</h3>
      </header>
      <div className={styles.jobsContainer}>
        <Form /* legend={t("Billing.form.legend")} */ message={'Quiero más información sobre las vacantes'} />
        <figure>
          <img src="/team.jpg" alt="Coupon 1" className={styles.couponImage} />
          <figcaption className={styles.couponDescription}>
            <h4 className={styles.couponTitle}>&Uacute;nete al equipo</h4>
            <p>Y forma parte del reino</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Jobs;
