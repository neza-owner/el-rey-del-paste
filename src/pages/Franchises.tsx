import { faClock, faLocationDot, faMountainSun, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import pin from "../assets/pin.svg";
import styles from "../styles/franchises.module.css";

function Franchises() {
  interface Franchise {
    id: number;
    name: string;
    legend: string;
    images: string[];
    location: string;
    address: string;
    schedule: string;
    phone: string;
  }

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
    <section className={styles.franchises}>
      <h2 className={styles.heading}>EL REY, DE PACHUCA PARA <span>MONTERREY</span><FontAwesomeIcon icon={faMountainSun} className={styles.icon} /></h2>
      <h3 className={styles.subheading}>
        De la ciudad de Pachuca para todo Monterrey
      </h3>

      {
        franchises.map((franchise) => (
          <div key={franchise.id} className={styles.franchise}>
            <h4 className={styles.title}><img src={pin} alt="icon" className={styles.img} />Sucursal {franchise.id}: {franchise.name}</h4>
            <h5>{franchise.legend}</h5>

            <div className={styles.gallery}>
              {
                franchise.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={franchise.name}
                    className={styles.imgGallery}
                  />
                ))
              }
            </div>

            <div className={styles.info}>
              <a href={franchise.location} target="_blank" rel="noopener noreferrer">
                {franchise.address} <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              </a>
              <span>{franchise.schedule} <FontAwesomeIcon icon={faClock} className={styles.icon} /></span>
              <a href={`tel:${franchise.phone}`}>
                {franchise.phone} <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              </a>
            </div>
          </div>
        ))
      }
    </section>
  );
}

export default Franchises;
