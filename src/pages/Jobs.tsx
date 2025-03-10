import { useTranslation } from 'react-i18next';
import styles from "../styles/jobs.module.css";

const Jobs = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className={styles.jobs}>
      <header>
        <h2 className={styles.heading}>{t("Jobs.heading.part1")} <span>{t("Jobs.heading.part2")}</span> {t("Jobs.heading.part3")}</h2>
        <h3 className={styles.subheading}>{t("Jobs.subheading")}</h3>
      </header>
    </section>
  );
};

export default Jobs;
