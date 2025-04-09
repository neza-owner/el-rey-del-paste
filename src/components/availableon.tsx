import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import styles from "../styles/availableon.module.css";

const platforms = [
  { name: "Clubers", image: "/clubers.png", link: "#" },
  { name: "Rappi", image: "/rappi.jpg", link: "#" },
  { name: "Uber Eats", image: "/ubereats.png", link: "#" },
  { name: "DiDi", image: "/didi.png", link: "#" },
];

const AvailableOn = () => {
  const [t] = useTranslation("global");

  return (
    <section className={styles.availableOn}>
      <header>
        <h2 className={styles.heading}>
          {t("AvailableOn.heading.part1")} <span>{t("AvailableOn.heading.part2")}</span> {t("AvailableOn.heading.part3")}
        </h2>
        <h3 className={styles.subheading}>
          {t("AvailableOn.subheading")}
        </h3>
      </header>

      <div className={styles.platforms}>
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} shadow-lg transition-transform transform hover:scale-105`}
          >
            <img
              src={platform.image}
              alt={platform.name}
              className={styles.imgLink}
            />
          </a>
        ))}
      </div>

      <div className={styles.app}>
        <span>{t("AvailableOn.advice")}</span>
        <FontAwesomeIcon icon={faAppStoreIos} className={styles.icon} />
      </div>
    </section>
  );
};

export default AvailableOn;
