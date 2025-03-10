import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import crown from "../assets/crown.svg";
import styles from "../styles/menu.module.css";

export default function Menu() {
  interface Paste {
    id: number;
    name: string;
    type: string;
    image: string;
    isFavorite: boolean;
  }

  const [t, i18n] = useTranslation("global");
  const [pastes, setPastes] = useState<Paste[]>([]);
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    const fetchPastes = async () => {
      try {
        const response = await fetch("../data/pastes.json");
        const data = await response.json();
        setPastes(data);
      } catch (error) {
        console.error("Error fetching pastes", error);
      }
    };

    fetchPastes();
  }, [t]);

  const translatedData = pastes.map((paste: Paste) => ({
    ...paste,
    name: t(`Menu.pastes.names.${paste.name}`, { defaultValue: paste.name }),
    type: t(`Menu.pastes.types.${paste.type}`)
  }));

  const translatedFilter = filter === "Todos" ? t("Menu.all") : t(`Menu.pastes.types.${filter.toLowerCase()}`);

  const filteredPastes =
    filter === "Todos" ? translatedData : translatedData.filter((paste) => paste.type === translatedFilter);

  return (
    <section id="menu" className={styles.menu}>
      <header>
        <h2 className={styles.heading}>
          {t("Menu.heading.part1")} <span>{t("Menu.heading.part2")}</span>
        </h2>
        <h3 className={styles.subheading}>{t("Menu.subheading")}</h3>
      </header>

      <div className={styles.switcher}>
        {["Todos", "Savory", "Sweet"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`${styles.switchBtn} ${filter === category ? styles['switchBtn:active'] : styles['switchBtn:inactive']}`}
          >
            {category === "Todos" ? t("Menu.all") : t(`Menu.pastes.types.${category.toLowerCase()}`)}
          </button>
        ))}
      </div>

      <div className={styles.pastesCardsContainer}>
        {filteredPastes.map((paste) => (
          <div key={paste.id} className={`${styles.pasteCard} shadow-md`}>
            <img src={paste.image} alt={paste.name} className={styles.paste} />
            {paste.isFavorite && (
              <img src={crown} className={styles.crown} alt="Logo" />
            )}
            <span className={styles.name}>{paste.name}</span>
            <span className={styles.type}>&#40;{paste.type}&#41;</span>
          </div>
        ))}
      </div>
      <HashLink to="/#order" className={styles.orderBtn}>
        {t("Menu.ctaBtn")}
      </HashLink>
    </section>
  );
}
