import { faClock, faLocationDot, faMountainSun, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import pin from "../assets/pin.svg";
import styles from "../styles/stores.module.css";

function Stores() {
  interface Stores {
    id: number;
    name: string;
    legend: string;
    images: string[];
    location: string;
    address: string;
    schedule: string;
    phone: string;
  }

  const [t, i18n] = useTranslation("global");
  const [stores, setFranchises] = useState<Stores[]>([]);

  useEffect(() => {
    const fetchFranchises = async () => {
      try {
        const response = await fetch("../data/stores.json");
        const data = await response.json();

        const translatedData = data.map((stores: Stores) => ({
          ...stores,
          legend: t(`Stores.${stores.legend}`),
          schedule: t(`Stores.${stores.schedule}`),
        }));
        setFranchises(translatedData);
      } catch (error) {
        console.error("Error fetching stores", error);
      }
    };

    fetchFranchises();
  }, [t]);

  return (
    <section id="stores" className={styles.stores}>
      <header>
        <h2 className={styles.heading}>{t("Stores.heading.part1")} <span>{t("Stores.heading.part2")}</span><FontAwesomeIcon icon={faMountainSun} className={styles.icon} /></h2>
        <h3 className={styles.subheading}>
          {t("Stores.subheading")}
        </h3>
      </header>

      {
        stores.map((stores) => (
          <div key={stores.id} className={styles.stores}>
            <h4 className={styles.title}><img src={pin} alt="icon" className={styles.img} />&nbsp;{t("Stores.store")} {stores.id}: {stores.name}</h4>
            <h5>{stores.legend}</h5>

            <div className={styles.gallery}>
              {
                stores.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={stores.name}
                    className={styles.imgGallery}
                  />
                ))
              }
            </div>

            <div className={styles.info}>
              <a href={stores.location} target="_blank" rel="noopener noreferrer">
                {stores.address} <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              </a>
              <span>{stores.schedule} <FontAwesomeIcon icon={faClock} className={styles.icon} /></span>
              <a href={`tel:${stores.phone}`}>
                {stores.phone} <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              </a>
            </div>
          </div>
        ))
      }
    </section>
  );
}

export default Stores;
