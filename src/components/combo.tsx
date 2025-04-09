import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import crown from "../assets/crown.svg";
import styles from "../styles/combo.module.css";
import { ImageStack } from "./imagestack";

export default function Combo() {
  interface Combo {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }
  const [t] = useTranslation("global");
  const [combos, setCombos] = useState<Combo[]>([]);
  const [currentCombo, setCurrentCombo] = useState(0);

  useEffect(() => {
    const fetchCombos = async () => {
      try {
        const response = await fetch("../data/combos.json");
        const data = await response.json();
        setCombos(data);
      } catch (error) {
        console.error("Error fetching combos", error);
      }
    };

    fetchCombos();
  }, []);

  const handleNextCombo = () => {
    setCurrentCombo((currentCombo + 1) % combos.length);
  };

  const handlePreviousCombo = () => {
    setCurrentCombo((currentCombo - 1 + combos.length) % combos.length);
  };

  const combosImages = combos.length > 0 ? combos.map(combo => combo.image) : [];

  const handleImageClick = (index: number) => {
    setCurrentCombo(index);
  };

  return (
    <section id="combos" className={styles.combo}>
      <header>
        <h2 className={styles.heading}>
          “{t("Combos.heading.part1")}&nbsp;<span>{t("Combos.heading.part2")}”</span>&nbsp;<img src={crown} className="crown" alt="Logo" />
        </h2>
        <h3 className={styles.subheading}>{t("Combos.subheading")}</h3>
      </header>

      <ImageStack
        images={combosImages}
        selectedIndex={currentCombo}
        onImageClick={handleImageClick}
      />

      <div className={styles.comboDetails}>
        {/* <span>${combos[currentCombo]?.price}MXN</span>
        <span>{combos[currentCombo]?.description}</span> */}
        <div className={styles.comboNav}>
          <button onClick={handlePreviousCombo}><FontAwesomeIcon icon={faAngleLeft} /></button>
          <span className={styles.name}>{combos[currentCombo]?.name}</span>
          <button onClick={handleNextCombo}><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
      </div>
    </section>
  );
}
