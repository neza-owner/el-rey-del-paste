import { useEffect, useState } from 'react';
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

  const [pastes, setPastes] = useState<Paste[]>([]);
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    const fetchPastes = async () => {
      try {
        const response = await fetch("../data/pastes.json");
        const data = await response.json();
        console.log(data);
        setPastes(data);
      } catch (error) {
        console.error("Error fetching pastes", error);
      }
    };

    fetchPastes();
  }, []);

  const filteredPastes =
    filter === "Todos" ? pastes : pastes.filter((paste) => paste.type === filter);

  return (
    <section id="menu" className={styles.menu}>
      <h2 className={styles.heading}>
        PASTES DEL <span>REY</span>
      </h2>
      <p className={styles.description}>Conoce el menú completo de la realeza</p>

      <div className={styles.switcher}>
        {["Todos", "Salados", "Dulces"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`${styles.switchBtn} ${filter === category ? styles['switchBtn:active'] : styles['switchBtn:inactive']}`}
          >
            {category}
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
    </section>
  );
}
