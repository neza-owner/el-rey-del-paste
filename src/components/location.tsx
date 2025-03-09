import { faMap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import styles from "../styles/Location.module.css";

const Location = () => {
  interface Franchise {
    id: number;
    name: string;
    legend: string;
    images: string[];
    location: string;
    address: string;
    phone: string;
    schedule: string;
    map: string;
  }

  const [t, i18n] = useTranslation("global");
  const [franchises, setFranchises] = useState<Franchise[]>([]);

  useEffect(() => {
    const fetchFranchises = async () => {
      try {
        const response = await fetch("../data/franchises.json");
        const data = await response.json();
        setFranchises(data);
      } catch (error) {
        console.error("Error fetching franchises", error);
      }
    };

    fetchFranchises();
  }, []);

  return (
    <section id="franchises" className={styles.location}>

      <header>
        <h2 className={styles.heading}>
          <span>{t("Location.heading.part1")}</span> {t("Location.heading.part2")} <FontAwesomeIcon icon={faMap} className={styles.icon} />
        </h2>
        <h3 className={styles.subheading}>
          {t("Location.subheading")}
        </h3>
      </header>

      <div className={styles.locations}>
        {
          franchises.map((franchise) => (
            <div className={styles.franchise} key={franchise.id}>

              {/* google maps iframe */}
              <div className={`${styles.frameContainer} shadow-lg`}>

                {/* window frame container */}
                <iframe
                  src={franchise.map}
                  className={styles.map}
                  allowFullScreen
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
              <h4>{t("Location.franchise")} {franchise.name}</h4>
            </div>
          ))
        }
      </div>

      {/* Decorative Cactus Images */}
      {/* <img
            src="/images/cactus1.png"
            alt="Cactus Left"
            className="absolute left-0 bottom-0 w-20 -ml-6"
          />
          <img
            src="/images/cactus2.png"
            alt="Cactus Right"
            className="absolute right-0 bottom-0 w-24 -mr-6"
          /> */}
    </section >
  );
};

export default Location;
