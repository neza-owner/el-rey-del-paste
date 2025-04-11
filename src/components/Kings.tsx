import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import crown from "../assets/crown.svg";
import styles from "../styles/kings.module.css";

const Kings2 = () => {
  interface King {
    name: string;
    title: string;
    image: string;
  }

  const [t] = useTranslation("global");
  const [kings, setKings] = useState<King[]>([]);

  useEffect(() => {
    const fetchKings = async () => {
      try {
        const response = await fetch("../data/kings.json");
        const data = await response.json();
        const translatedData = data.map((king: King) => ({
          ...king,
          title: t(`Kings.${king.title}`),
        }));
        setKings(translatedData);
      }
      catch (error) {
        console.error("Error fetching kings", error);
      }
    };

    fetchKings();
  }, [t]);

  return (
    <section id="about" className={styles.kings}>
      <header>
        {/* title */}
        <h2 className={styles.heading}>
          {t("Kings.heading.part1")}&nbsp;<span>{t("Kings.heading.part2")}</span>&nbsp;<img src={crown} className="crown" alt="Logo" />
        </h2>
        <h3 className={styles.subheading}>{t("Kings.subheading")}</h3>
      </header>

      {/* Kings List */}
      <div className={styles.kingsList}>
        {kings.map((king, index) => (
          <div key={index} className={styles.king}>
            <img
              src={king.image}
              alt={king.name}
              className={styles.profile}
            />
            <div className={styles.caption}>
              <span className={styles.name}>{king.name}</span>
              <span className={styles.title}>“{king.title}”</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Kings2;
