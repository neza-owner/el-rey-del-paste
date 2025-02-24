import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import crown from "../assets/crown.svg";
import styles from "../styles/combo.module.css";
import { ImageStack } from "./imagestack";

export function Combo() {
  interface Combo {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }
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

  return (
    <section className={styles.combo}>
      <h2 className={styles.heading}>
        “COME COMO&nbsp;<span>REY</span>”&nbsp;<img src={crown} className="crown" alt="Logo" />
      </h2>
      <p className={styles.description}>Conoce nuestros combos</p>
      <br />

      <ImageStack images={combosImages} />

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
